import UrlParsing from '../../routes/url-parsing';
import DicodingRestaurantSource from '../../data/DicodingRestaurantSource';
import { restaurantDetailTemplate, attachReview } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurant from '../../data/favoriteRestaurant';
import ErrorTextFetch from '../../error/errorText';
import MoreReviewInitiator from '../../utils/more-review-initiator';
import ReviewValuePresenter from '../../utils/review-value-presenter';

const Detail = {
    render() {
        return `
            <h1 class="name-page">Restaurant Detail <div id="likeButtonContainer"></div></h1>
            <section id="detailRestaurantContainer">
                <div class="loader"></div>
            </section>
        `;
    },
    async afterRender() {
        const url = UrlParsing.parseActiveUrlWithoutCombiner();

        const getRestaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
        const getIDBRestaurantId = await FavoriteRestaurant.getRestaurant(url.id);
        const getRestaurantProps = getRestaurant.restaurant;
        const detailRestaurantContainer = document.querySelector('#detailRestaurantContainer');

        const initiateFeatures = async () => {
            MoreReviewInitiator.init(
                document.querySelector('#customersReviewContainer'),
                document.querySelector('#show-more-review'),
            );

            new ReviewValuePresenter({
                id: getRestaurantProps.id,
                name: document.querySelector('#reviewName'),
                reviewData: document.querySelector('#reviewData'),
                reviewBtn: document.querySelector('#reviewBtn'),
            });

            await LikeButtonPresenter.init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                favoriteRestaurant: FavoriteRestaurant,
                restaurant: getRestaurantProps,
            });
        };

        if (getRestaurant !== 'Failed to fetch' && getRestaurant !== undefined) {
            detailRestaurantContainer.innerHTML = restaurantDetailTemplate(
                getRestaurantProps,
            );

            const addReviewForm = document.getElementById('addReview');
            addReviewForm.addEventListener('submit', async (event) => {
                event.preventDefault();

                const getNewRestaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
                const customersReviewContainer = document.getElementById('customersReviewContainer');

                setTimeout(() => {
                    customersReviewContainer.innerHTML = attachReview(getNewRestaurant.restaurant);
                }, 500);
            });

            initiateFeatures();
        } else {
            if (getIDBRestaurantId !== undefined) {
                detailRestaurantContainer.innerHTML = restaurantDetailTemplate(
                    getIDBRestaurantId,
                );

                initiateFeatures();
            } else {
                const errorText = new ErrorTextFetch('Gagal menampilkan restaurant tertentu, Silahkan cek koneksi internet dan refresh browser anda');

                detailRestaurantContainer.innerHTML = `<h1 class="errorText">${errorText}</h1>`;
            }
        }
    },
};

export default Detail;

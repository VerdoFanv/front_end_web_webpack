import favoriteRestaurant from '../../data/favoriteRestaurant';
import { restaurantItemTemplate, noRestaurantIdbTemplate } from '../templates/template-creator';

const Favorite = {
    render() {
        return `
            <h1 class="name-page">Favorite Restaurant</h1>
            <section id="restaurantContent">
                <div class="loader"></div>
            </section>
        `;
    },
    async afterRender() {
        const restaurantFavoriteContainer = document.querySelector('#restaurantContent');
        const restaurantsData = await favoriteRestaurant.getAllRestaurant();

        if (restaurantsData.length < 1) {
            restaurantFavoriteContainer.innerHTML = noRestaurantIdbTemplate();
        } else {
            let restoList = '';

            restaurantsData.forEach(async (restaurants) => {
                restoList += restaurantItemTemplate(restaurants);
            });

            restaurantFavoriteContainer.innerHTML = restoList;
        }
    },
};

export default Favorite;

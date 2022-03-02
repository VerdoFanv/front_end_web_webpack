import LikeButtonPresenter from '../../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurant from '../../../src/scripts/data/favoriteRestaurant';

const createLikeButtonPresenterWithRestaurant = async (resto) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurant,
        restaurant: resto,
    });
};

export { createLikeButtonPresenterWithRestaurant };

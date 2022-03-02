import perilakuKerjaDariRestoranFavorit from '../contract/restoranFavorit';
import favoriteRestaurantIdb from '../../src/scripts/data/favoriteRestaurant';

describe('Favorite Movie Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await favoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
            await favoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        });
    });

    perilakuKerjaDariRestoranFavorit(favoriteRestaurantIdb);
});

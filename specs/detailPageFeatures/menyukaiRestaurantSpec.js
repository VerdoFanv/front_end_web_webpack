import FavoriteRestaurant from '../../src/scripts/data/favoriteRestaurant';
import * as TestFactory from './helper/testFactory';

describe('Menyukai restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('seharusnya dapat menampilkan tombol like jika belum ada restaurant yang disukai', async () => {
        await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeTruthy();
    });

    it('seharusnya tidak menampilkan icon hati penuh tidak seperti ketika restaurant tersebut belum disukai', async () => {
        await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeFalsy();
    });

    it('harus bisa menyukai restaurantnya', async () => {
        await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#likeButton')
            .dispatchEvent(new Event('click'));

        const restaurant = await FavoriteRestaurant.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurant.deleteRestaurant(1);
    });

    it('sebaiknya tidak menambah restaurant lagi jika sudah disukai sebelumnya', async () => {
        await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#likeButton')
            .dispatchEvent(new Event('click'));

        await FavoriteRestaurant.putRestaurant({ id: 1 });

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }]);

        FavoriteRestaurant.deleteRestaurant(1);
    });

    it('sebaiknya tidak menampilkan restaurant jika tidak memiliki id', async () => {
        await TestFactory.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton')
            .dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
    });
});

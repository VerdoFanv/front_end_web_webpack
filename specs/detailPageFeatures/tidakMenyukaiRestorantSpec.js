import FavoriteRestaurant from '../../src/scripts/data/favoriteRestaurant';
import * as TestFactory from './helper/testFactory';

describe('Tidak menyukai restorant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurant.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurant.deleteRestaurant(1);
    });

    it('seharusnya menampilkan icon hati penuh seperti ketika restaurant disukai', async () => {
        await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeTruthy();
    });

    it('seharusnya tidak menampilkan hati penuh seperti ketika restaurant disukai', async () => {
        await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeFalsy();
    });

    it('seharusnya dapat menghapus restaurant dari daftar favorite', async () => {
        await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('[aria-label="unlike this restaurant"]')
            .dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant())
            .toEqual([]);
    });

    it('seharusnya tidak membuat kesalahan jika restaurant yang tidak disukai tidak ada didalam daftar favorite', async () => {
        await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

        await FavoriteRestaurant.deleteRestaurant(1);

        document.querySelector('[aria-label="unlike this restaurant"]')
            .dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant())
            .toEqual([]);
    });
});

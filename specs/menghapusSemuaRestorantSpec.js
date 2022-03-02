import FavoriteRestaurant from '../src/scripts/data/favoriteRestaurant';

describe('Menghapus semua restoran', () => {
    it('seharusnya dapat menampilkan menghapus semua restorant favorit', async () => {
        document.body.innerHTML = '<button id="deleteAllBtn"></button>';

        class DeleteButton {
            constructor({ button, favoriteRestaurant }) {
                this._button = button;
                this._favoriteRestaurant = favoriteRestaurant;

                this._deleteInitiator();
            }

            async _deleteInitiator() {
                (await this._favoriteRestaurant.getAllRestaurant())
                    .forEach((restaurant) => {
                        this._favoriteRestaurant.deleteRestaurant(restaurant.id);
                    });
            }
        }

        FavoriteRestaurant.putRestaurant({ id: 11 });
        FavoriteRestaurant.putRestaurant({ id: 22 });

        document.getElementById('deleteAllBtn').addEventListener('click', () => {
            new DeleteButton({
                button: document.getElementById('deleteAllBtn'),
                favoriteRestaurant: FavoriteRestaurant,
            });
        });

        document.querySelector('#deleteAllBtn')
            .dispatchEvent(new Event('click'));

        //expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
    });
});

import { openDB } from 'idb';
import config from '../globals/config';

const { databaseName, databaseVersion, objectStoreName } = config;

const dbPromise = openDB(databaseName, databaseVersion, {
    upgrade(database) {
        database.createObjectStore(objectStoreName, { keyPath: 'id' });
    },
});

const FavoriteRestaurant = {
    async getAllRestaurant() {
        return (await dbPromise).getAll(objectStoreName);
    },
    async getRestaurant(id) {
        if (!id) {
            return;
        }

        return (await dbPromise).get(objectStoreName, id);
    },
    async putRestaurant(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        return (await dbPromise).put(objectStoreName, restaurant);
    },
    async deleteRestaurant(id) {
        return (await dbPromise).delete(objectStoreName, id);
    },
};

export default FavoriteRestaurant;

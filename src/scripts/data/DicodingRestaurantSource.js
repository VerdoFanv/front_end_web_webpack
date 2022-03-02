import ApiEndpoint from '../globals/api-endpoint';
import Config from '../globals/config';

const DicodingRestaurantSource = {
    async listAllRestaurant() {
        try {
            const response = await fetch(ApiEndpoint.restaurantList);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            return error.message;
        }
    },
    async detailRestaurant(id) {
        try {
            const response = await fetch(ApiEndpoint.detail(id));
            return response.json();
        } catch (error) {
            return error.message;
        }
    },
    async searchRestaurants(query) {
        try {
            const response = await fetch(ApiEndpoint.search(query));
            return response.json();
        } catch (error) {
            return error.message;
        }
    },
    async restaurantReview(postedData) {
        try {
            fetch(ApiEndpoint.review, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': Config.apiKey,
                },
                body: JSON.stringify(postedData),
            });

            alert('Berhasil menambahkan review');
        } catch (error) {
            return error.message;
        }
    },
};

export default DicodingRestaurantSource;

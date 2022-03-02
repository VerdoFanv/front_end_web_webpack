import DicodingRestaurantSource from '../data/DicodingRestaurantSource';

const AddReviewPresenter = {
    init({ id, name, reviewValue }) {
        this._processToObject(id, name, reviewValue);
    },
    async _processToObject(restoId, restoName, data) {
        this._reviewData = {
            id: restoId,
            name: restoName,
            review: data,
        };

        await DicodingRestaurantSource.restaurantReview(this._reviewData);
    },
    getReviewData() {
        return this._reviewData;
    },
};

export default AddReviewPresenter;

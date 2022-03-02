import Config from './config';

const ApiEndpoint = {
    restaurantList: `${Config.baseUrl}/list`,
    detail: (id) => `${Config.baseUrl}/detail/${id}`,
    search: (query) => `${Config.baseUrl}/search?q=${query}`,
    review: `${Config.baseUrl}/review`,
};

export default ApiEndpoint;

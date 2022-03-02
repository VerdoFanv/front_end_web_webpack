import DicodingRestaurantSource from '../../data/DicodingRestaurantSource';
import { restaurantItemTemplate, errorFetchTemplate } from '../templates/template-creator';
import SearchRestaurantPresenter from '../../utils/searchRestaurantPresenter';

const Home = {
    render() {
        return `
            <h1 class="name-page">Restaurant List</h1>
            <form class="searchResto">
                <input type="text" class="form-control" id="searchBar" placeholder="Masukkan restoran yang ingin di cari...">
                <button id="searchBtn" type="submit">Cari</button>
            </form>
            <section id="restaurantContent">

            </section>
        `;
    },
    async afterRender() {
        const listOfRestaurant = await DicodingRestaurantSource.listAllRestaurant();
        const restaurantContainer = document.getElementById('restaurantContent');

        if (listOfRestaurant.hasOwnProperty('restaurants')) {
            let restoList = '';

            listOfRestaurant.restaurants.forEach((restaurant) => {
                restoList += restaurantItemTemplate(restaurant);
            });

            restaurantContainer.innerHTML = restoList;
        } else {
            restaurantContainer.innerHTML = errorFetchTemplate();
        }

        new SearchRestaurantPresenter({
            form: document.querySelector('.searchResto'),
            searchBar: document.getElementById('searchBar'),
            searchButton: document.getElementById('searchBtn'),
            restaurantSource: DicodingRestaurantSource,
            restoContainer: restaurantContainer,
            restoTemplate: restaurantItemTemplate,
        });
    },
};

export default Home;

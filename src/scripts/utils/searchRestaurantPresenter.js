class SearchRestaurantPresenter {
    constructor({
        form, searchBar, searchButton, restaurantSource, restoContainer, restoTemplate,
    }) {
        this._form = form;
        this._userQuery = '';
        this._searchBar = searchBar;
        this._searchButton = searchButton;
        this._fetchApis = restaurantSource;
        this._restoContainer = restoContainer;
        this._restoItemTemplate = restoTemplate;

        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        this._takeUserQuery();
    }

    _takeUserQuery() {
        this._searchButton.addEventListener('click', async () => {
            this._userQuery = (this._searchBar.value).toLowerCase();

            if (this._userQuery === '') {
                this._searchData = await this._fetchApis.listAllRestaurant();

                this._restoList = '';

                this._searchData.restaurants.forEach((restaurant) => {
                    this._restoList += this._restoItemTemplate(restaurant);
                });

                this._restoContainer.innerHTML = this._restoList;
            } else {
                this._searchData = await this._fetchApis.searchRestaurants(this._userQuery);

                if ((this._searchData.founded) < 1) {
                    this._restoContainer.innerHTML = '<h3>Tidak dapat menemukan restoran yang dicari...</h3>';
                } else {
                    this._restoList = '';

                    this._searchData.restaurants.forEach((restaurant) => {
                        this._restoList += this._restoItemTemplate(restaurant);
                    });

                    this._restoContainer.innerHTML = this._restoList;
                }
            }
        });
    }

    get getSearchData() {
        return this._searchData;
    }

    get getUserQuery() {
        return this._userQuery;
    }
}

export default SearchRestaurantPresenter;

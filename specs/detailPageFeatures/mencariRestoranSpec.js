import FetchApis from '../../src/scripts/data/DicodingRestaurantSource';
import SearchRestaurantPresenter from '../../src/scripts/utils/searchRestaurantPresenter';

fdescribe('mencari restorant', () => {
    let srp;

    const inputQuery = (query) => {
        const searchBar = document.getElementById('searchBar');
        const searchBtn = document.getElementById('searchBtn');

        searchBar.value = query;
        searchBtn.dispatchEvent(new Event('click'));
    };

    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="searchBar" placeholder="Masukkan restoran yang ingin di cari...">
            <button id="searchBtn" type="submit">Cari</button>
        `;

        const searchBarElem = document.getElementById('searchBar');
        const searchBtnElem = document.getElementById('searchBtn');

        srp = new SearchRestaurantPresenter({
            searchBar: searchBarElem,
            searchButton: searchBtnElem,
            restaurantSource: FetchApis,
        });
    });

    it('seharusnya dapat menangkap inputan user', () => {
        inputQuery('Nasi Goreng');

        expect(srp.getUserQuery).toEqual('Nasi Goreng');
    });

    it('seharusnya tidak dapat memproses, jika pengguna tidak mengisi inputan', () => {
        const fetchApiSpy = spyOnAllFunctions(FetchApis);

        inputQuery('');
        expect(fetchApiSpy.searchRestaurants).toHaveBeenCalledTimes(0);
    });

    it('seharusnya dapat memanggil fungsi untuk mengirim query ke server', () => {
        const fetchApiSpy = spyOnAllFunctions(FetchApis);

        inputQuery('Nasi Goreng');
        expect(fetchApiSpy.searchRestaurants).toHaveBeenCalledWith('Nasi Goreng');
    });
});

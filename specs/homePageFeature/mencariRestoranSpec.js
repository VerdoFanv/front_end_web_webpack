describe('mencari restoran', () => {
    class SearchPresenter {
        constructor(inputBar) {
            this._query = '';
            this._inputBar = inputBar;

            this._readUserInput();
        }

        _readUserInput() {
            this._inputBar.addEventListener('change', (event) => {
                this._query = event.target.value;
            });
        }

        jammedUserQuery() {
            this._jammedQuery = this._query.toLowerCase();
            return this._jammedQuery;
        }

        get getUserQuery() {
            return this._query;
        }
    }

    const showInputQuery = (query) => {
        const inputQuery = document.querySelector('#query');
        inputQuery.value = query;
        inputQuery.dispatchEvent(new Event('change'));
    };

    let presenter;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="searchResto">
                <input id="query" type="text">
                <h3 class="searchLabel">Your Liked Movie</h3>
            </div>
        `;

        presenter = new SearchPresenter(document.querySelector('#query'));
    });

    it('harus bisa mengambil nilai query yang diketikkan pengguna', () => {
        const foodName = 'Nasi Goreng';
        showInputQuery(foodName);

        expect(presenter.getUserQuery).toEqual(foodName);
    });

    it('harus bisa mengubah query menjadi case kecil', () => {
        showInputQuery('AyaM BakaR');

        expect(presenter.jammedUserQuery()).toEqual('ayam bakar');
    });
});

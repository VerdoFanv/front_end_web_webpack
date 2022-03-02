import AddReviewPresenter from '../../src/scripts/utils/add-review-presenter';
import ReviewValuePresenter from '../../src/scripts/utils/review-value-presenter';
import FetchApi from '../../src/scripts/data/DicodingRestaurantSource';

describe('menambahkan ulasan', () => {
    let fetchApi;
    let rvp;

    const fillTheForm = ({ name, review }) => {
        document.getElementById('reviewName').value = name;
        document.getElementById('reviewData').value = review;

        document.getElementById('reviewBtn')
            .dispatchEvent(new Event('click'));
    };

    beforeEach(() => {
        document.body.innerHTML = `
            <form id="addReview">
                <label for="name">Name</label>
                <input type="username" class="form-control" placeholder="verdo" required id="reviewName">
                <label for="text">Review</label>
                <textarea class="form-control-textarea" placeholder="Masukkan ulasan anda..." required id="reviewData"></textarea>
                <button id="reviewBtn" aria-label="send button">Kirim</button>
            </form>
        `;

        rvp = new ReviewValuePresenter({
            id: '12345',
            name: document.getElementById('reviewName'),
            reviewData: document.getElementById('reviewData'),
            reviewBtn: document.getElementById('reviewBtn'),
        });

        fetchApi = spyOnAllFunctions(FetchApi);
    });

    it('seharusnya dapat menangkap inputan review pengguna', () => {
        fillTheForm({
            name: 'Xpaww',
            review: 'Bagus',
        });

        expect(rvp.getNameAndReview).toEqual({
            name: 'Xpaww',
            review: 'Bagus',
        });
    });

    it('seharusnya dapat mengirim data inputan ke server inputan pengguna', () => {
        fillTheForm({
            name: 'Xpaww',
            review: 'Bagus',
        });

        expect(fetchApi.restaurantReview).toHaveBeenCalled();
    });

    it('seharusnya tidak mengirim data ke server jika data name tidak valid', () => {
        fillTheForm({
            name: '',
            review: 'Bagus',
        });

        expect(fetchApi.restaurantReview).toHaveBeenCalledTimes(0);
    });

    it('seharusnya tidak mengirim data ke server jika data review tidak valid', () => {
        fillTheForm({
            name: 'Xpaww',
            review: '',
        });

        expect(fetchApi.restaurantReview).toHaveBeenCalledTimes(0);
    });

    describe('seharusnya data outputnya', () => {
        it('bertipe object', () => {
            fillTheForm({
                name: 'Xpaww',
                review: 'Bagus...',
            });

            const getReviewData = AddReviewPresenter.getReviewData();

            expect(getReviewData).toBeInstanceOf(Object);
        });

        it('seharusnya data output memiliki properti id, nama dan review', () => {
            fillTheForm({
                name: 'Xpaww',
                review: 'Bagus...',
            });

            const getReviewData = AddReviewPresenter.getReviewData();

            expect(getReviewData.hasOwnProperty('id')).toBeTruthy();
            expect(getReviewData.hasOwnProperty('name')).toBeTruthy();
            expect(getReviewData.hasOwnProperty('review')).toBeTruthy();
        });
    });
});

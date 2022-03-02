import MoreReviewInitiator from '../../src/scripts/utils/more-review-initiator';

describe('Menampilkan review lebih banyak', () => {
    const clickBtn = () => {
        const reviewBtn = document.getElementById('moreReviewBtn');
        reviewBtn.dispatchEvent(new Event('click'));
    };

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="reviewContainer">
                <button id="moreReviewBtn">Expand</button>
            </div>
        `;

        MoreReviewInitiator.init(
            document.querySelector('.reviewContainer'), document.querySelector('#moreReviewBtn'),
        );
    });

    it('harus dapat menjalankan sebuah fungsi expanding ketika tombol ditekan', () => {
        const moreReviewSpy = spyOnAllFunctions(MoreReviewInitiator);

        clickBtn();
        expect(moreReviewSpy._expandReviewContainer).toHaveBeenCalled();
    });

    it('harus dapat mengubah text ketika tombol di tekan', () => {
        clickBtn();
        expect(document.getElementById('moreReviewBtn').innerText).toEqual('Less');

        // clickBtn();
        // expect(document.getElementById('moreReviewBtn').innerText).toEqual('Expand');
    });
});

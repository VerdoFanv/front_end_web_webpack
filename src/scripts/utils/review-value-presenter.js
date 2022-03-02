import AddReviewPresenter from './add-review-presenter';

class ReviewValuePresenter {
    constructor({
        id, name, reviewData, reviewBtn,
    }) {
        this._id = id;
        this._name = name;
        this._reviewData = reviewData;
        this._reviewBtn = reviewBtn;

        this._reviewBtn.addEventListener('click', () => {
            this.takeValue();
        });
    }

    takeValue() {
        this._nameValue = this._name.value;
        this._reviewValue = this._reviewData.value;

        if ((this._nameValue && this._reviewValue) === '') {
            return alert('Mohon dicek lagi kolom yang belum terisi');
        } else {
            AddReviewPresenter.init({
                id: this._id,
                name: this._nameValue,
                reviewValue: this._reviewValue,
            });
        }
    }

    get getNameAndReview() {
        return {
            name: this._name.value,
            review: this._reviewData.value,
        };
    }
}

export default ReviewValuePresenter;

const MoreReviewInitiator = {
    init(reviewContainer, button) {
        this._button = button;
        this._reviewContainer = reviewContainer;

        button.addEventListener('click', (event) => {
            this._expandReviewContainer(event, this._reviewContainer, this._button);
        });
    },
    _expandReviewContainer(event, reviewContainer, btn) {
        event.stopPropagation();
        reviewContainer.classList.toggle('expand');

        if (btn.innerText === 'Expand') {
            btn.innerText = 'Less';
        } else {
            btn.innerText = 'Expand';
        }
    },
};

export default MoreReviewInitiator;

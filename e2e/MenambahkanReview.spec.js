Feature('Adding Review');
const assert = require('assert');

Scenario('menambahkan review ada restorant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.card-detail-button a');
    I.wait(1);

    const firstRestaurant = locate('.card-detail-button a').first();
    I.click(firstRestaurant);

    I.seeElement('form#addReview');

    const dataBeforeAdd = {
        username: 'Testing Xpaww',
        review: 'Restorantnya bagus banget, keren pokoknya!!!',
    };

    I.fillField('#reviewName', dataBeforeAdd.username);
    I.fillField('#reviewData', dataBeforeAdd.review);
    I.click('button#reviewBtn');

    I.seeInPopup('Berhasil menambahkan review');
    I.acceptPopup();

    I.refreshPage();

    I.seeElement('section#customersReviewContainer');

    const addingReviewUsername = await I.grabTextFrom(locate('.card-consumer-reviews-name h4').last());
    const addingReviewData = await I.grabTextFrom(locate('.card-consumer-reviews-review h4').last());

    const dataAfterAdd = {
        username: addingReviewUsername.slice(0, addingReviewUsername.length),
        review: addingReviewData.slice(1, addingReviewData.length - 1),
    };

    assert.strictEqual(dataBeforeAdd.username, dataAfterAdd.username);
    assert.strictEqual(dataBeforeAdd.review, dataAfterAdd.review);
});

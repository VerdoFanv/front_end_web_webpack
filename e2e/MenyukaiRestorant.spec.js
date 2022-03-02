Feature('Liking Restaurant');
const assert = require('assert');

Scenario('Menyukai salah satu restoran', async ({ I }) => {
    I.amOnPage('/#/favorite');
    I.see('No restaurant can be displayed', '.errorText');

    I.amOnPage('/');
    I.wait(1);

    const firstRestaurant = locate('.card-detail-button a').first();
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');

    const likedRestaurantTitle = await I.grabTextFrom('.card-title');
    const firstRestaurantTitle = locate('.card-title').first();
    const grabFirstRestaurantTitle = await I.grabTextFrom(firstRestaurantTitle);

    assert.strictEqual(grabFirstRestaurantTitle, likedRestaurantTitle);
});

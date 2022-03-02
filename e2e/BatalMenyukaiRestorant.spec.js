Feature('Batal Menyukai Restoran');

Scenario('Batal menyukai salah satu restoran', async ({ I }) => {
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

    const firstFavoriteRestaurant = locate('.card-detail-button a').first();
    I.click(firstFavoriteRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    I.see('No restaurant can be displayed', '.errorText');
});

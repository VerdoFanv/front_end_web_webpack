import Config from '../../globals/config';

const restaurantItemTemplate = (restaurant = '') => {
    const renderItem = () => {
        document.querySelectorAll('.card-image-container').forEach((cardImage) => {
            cardImage.classList.remove('loader-image');
        });

        document.querySelectorAll('.card-title').forEach((cardTitle) => {
            cardTitle.classList.remove('loader-text');
        });

        document.querySelectorAll('.card-city').forEach((cardCity) => {
            cardCity.classList.remove('loader-text');
        });

        document.querySelectorAll('.card-rating').forEach((cardRating) => {
            cardRating.classList.remove('loader-text');
        });

        document.querySelectorAll('.card-description').forEach((cardDesc) => {
            cardDesc.classList.remove('loader-text');
        });
    };

    setTimeout(() => {
        renderItem();
    }, 500);

    return `
        <article class="card" tabindex="0">
            <div class="card-image-container loader-image">
                <a href="${`/#/detail/${restaurant.id ? restaurant.id : ''}`}" aria-label="detail ${restaurant.name ? restaurant.name : ''}">
                    <img data-src="${restaurant.pictureId ? Config.baseImageUrl + restaurant.pictureId : './loading.webp'}" onerror="this.src = 'image-not-found.webp'" title="${restaurant.name ? restaurant.name : 'Image title'}" alt="${restaurant.name ? restaurant.name : 'Image alternative teks'}" class="card-image lazyload" width="100%" height="230px">
                </a>
            </div>
            <div class="card-information">
                <div class="card-title loader-text">${restaurant.name ? restaurant.name : ''}</div>
                <div class="card-city loader-text">${restaurant.city ? restaurant.city : ''}</div>
                <div class="card-rating loader-text">${restaurant.rating ? restaurant.rating : ''}<i class="fa fa-star"></i></div>
                <div class="card-description loader-text">${restaurant.description ? (restaurant.description).slice(0, 130) : ''}</div>
                <div class="card-detail-button">
                    <a href="${`/#/detail/${restaurant.id ? restaurant.id : ''}`}" aria-label="detail ${restaurant.name ? restaurant.name : ''}">Detail</a>
                </div>
            </div>
        </article>
    `;
};

const attachReview = (restaurant) => {
    const restaurantReviews = restaurant.customerReviews;
    let resultVar = '';

    restaurantReviews.forEach((review) => {
        resultVar += `
            <article class="card-consumer-reviews">
                <div class="card-consumer-reviews-date">
                    <h4>${review.date}</h4>
                </div>
                <div class="card-consumer-reviews-name">
                    <h4>${review.name}</h4>
                </div>
                <div class="card-consumer-reviews-review">
                    <h4><q> ${review.review} </q></h4>
                </div>
            </article>
        `;
    });

    return resultVar;
};

const restaurantDetailTemplate = (restaurant) => {
    const restaurantMenus = restaurant.menus;
    const restaurantCategories = restaurant.categories;

    let categoriesRestaurant = '';
    restaurantCategories.forEach((categorie) => {
        categoriesRestaurant += `${categorie.name}, `;
    });

    let restaurantDrinks = '';
    restaurantMenus.drinks.forEach((drink) => {
        restaurantDrinks += `<li>${drink.name}</li>`;
    });

    let restaurantFoods = '';
    restaurantMenus.foods.forEach((food) => {
        restaurantFoods += `<li>${food.name}</li>`;
    });

    return `
        <article id="detailRestaurantGeneral" tabindex="0">
            <h2>${restaurant.name}</h2>
            <img class="image-detail" src="${Config.baseImageUrl + restaurant.pictureId}" onerror="this.src = 'image-not-found.webp'" alt="${restaurant.name}" title="${restaurant.name}" class="lazyload">
            <div class="restaurant-info">
                <h3 class="restaurant-info-text">${restaurant.name}</h3>
                <h3 class="restaurant-info-text">Address: <span>${restaurant.address}</span></h3>
                <h3 class="restaurant-info-text">City: <span>${restaurant.city}</span></h3>
                <h3 class="restaurant-info-text">Categories: <span>${categoriesRestaurant}</span></h3>
                <h3 class="restaurant-info-text">Rating: <span>${restaurant.rating}</span></h3>
            </div>
            <form id="addReview">
                <label for="name">Name</label>
                <input type="username" class="form-control" placeholder="verdo" required id="reviewName">
                <label for="text">Review</label>
                <textarea class="form-control-textarea" placeholder="Masukkan ulasan anda..." required id="reviewData"></textarea>
                <button id="reviewBtn" type="submit" aria-label="send button">Kirim</button>
            </form>
        </article>
        <article id="restaurantFoodAndDrink" tabindex="0">
            <div class="restaurant-foods">
                <h3>Foods - Makanan <i class="fas fa-utensils"></i></h3>
                <ul class="foodList">${restaurantFoods}</ul>
            </div>
            <div class="restaurant-drinks">
                <h3>Drinks - Minuman <i class="fas fa-coffee"></i></h3>
                <ul class="drinkList">${restaurantDrinks}</ul>
            </div>
            <div class="restaurant-description">
                <h3>Description - Deskripsi <i class="fas fa-tags"></i></h3>
                <p>${restaurant.description}</p>
            </div>
            <div class="restaurant-reviews">
                <h3>Customers Review - Ulasan Pelanggan <i class="fas fa-comment-dots"></i></h3>
                <button id="show-more-review">Expand</button>
                <section id="customersReviewContainer">${attachReview(restaurant)}</section>
            </div>
        </article>
    `;
};

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const errorFetchTemplate = () => `
    <div class="home-status">
        <h1 class="errorText">Please refresh your browser, and check your connection</h1>
        <img class="noRestoImg" src="undraw_signal_searching.webp">
    </div>
`;

const noRestaurantIdbTemplate = () => `
    <div class="favorite-status">
        <h1 class="errorText" id="errorIdb">Kamu belum menambahkan restorant favorit-Mu...</h1>
        <img class="noRestoImg" src="undraw_not_found.webp">
    </div>
`;

const failedToLoadAppShell = () => `
    <h1 class="errorText">Failed to load this App Shell, Please reload your browser or update your browser or wait for minutes</h1>
`;

const aboutUsTemplate = () => `
        <article class="about-us-container">
            <div class="container-left">
                <h2 class="inner-text-aboutUs">SINFORMANZE RESTAURANT</h2>
                <h3 class="inner-text-aboutUs">Dibuat dan didesain oleh: <span>Fernando Fanjaya</span></h3>
                <p class="inner-text-aboutUs">Website ini dibuat dengan tujuan menampilkan restoran-restoran rekomendasi yang sedang populer saat ini, serta menampilkan nilai ulasan pelanggan , serta anda bisa menyimpan restorant favorite anda kapan pun dan di mana pun. kami juga menyediakan fitur review bagi anda yang ingin membantu kami dalam mengembangankan website ini menjadi lebih baik lagi</p>
                <h4 class="inner-text-aboutUs">Segala gambar dan data yang ada di dapat dari dicoding indonesia.</h4>
                <h4>Kunjungi Dicoding Indonesia <a href="https://www.dicoding.com">Disini</a></h4>
            </div>
            <div class="container-right">
                <h2>Follow me on</h2>
                <a href="https://www.instagram.com/fernando_fanv/" target="blank"><i class="fa fa-instagram icon-about"></i></a>
                <a href="https://wa.me/628889095782" target="blank"><i class="fa fa-whatsapp icon-about"></i></a>
                <a href="https://web.facebook.com/fernando.fanjaya" target="blank"><i class="fa fa-facebook icon-about"></i></a>
                <a href="https://github.com/VerdoFanv" target="blank"><i class="fa fa-github icon-about"></i></a>
                <a href="https://www.linkedin.com/in/fernando-fanjaya-10b4721b3/" target="blank"><i class="fa fa-linkedin icon-about"></i></a>
            </div>
        </article>
    `;

export {
    restaurantItemTemplate, restaurantDetailTemplate, createLikeButtonTemplate,
    createLikedButtonTemplate, aboutUsTemplate, errorFetchTemplate, noRestaurantIdbTemplate, failedToLoadAppShell, attachReview,
};

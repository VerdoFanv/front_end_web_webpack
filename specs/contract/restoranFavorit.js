const perilakuKerjaDariRestoranFavorit = (favoriteRestaurant) => {
    it('seharusnya dapat mengembalikan salah satu restoran yang dimasukkan', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });

        expect(await favoriteRestaurant.getRestaurant(1))
            .toEqual({ id: 1 });
        expect(await favoriteRestaurant.getRestaurant(2))
            .toEqual({ id: 2 });
        expect(await favoriteRestaurant.getRestaurant(3))
            .toEqual(undefined);
    });

    it('seharusnya dapat mengembalikan semua restoran yang dimasukkan', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });
        favoriteRestaurant.putRestaurant({ id: 3 });

        expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);
    });

    it('seharusnya dapat menghapus restaurant dari daftar favorit', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });
        favoriteRestaurant.putRestaurant({ id: 3 });

        await favoriteRestaurant.deleteRestaurant(1);

        expect(await favoriteRestaurant.getAllRestaurant()).toEqual([
            { id: 2 },
            { id: 3 },
        ]);
    });
};

export default perilakuKerjaDariRestoranFavorit;

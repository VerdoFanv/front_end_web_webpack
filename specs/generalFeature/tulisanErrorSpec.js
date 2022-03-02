import ErrorTextFetch from '../../src/scripts/error/errorText';

describe('Tulisan error', () => {
    it('seharusnya tampil ketika halaman home gagal melakukan fetch API', async () => {
        document.body.innerHTML = '<section id="restaurantContent"></section>';
        const restoContainer = document.getElementById('restaurantContent');

        restoContainer.innerHTML = `<h3 class="errorText">${new ErrorTextFetch('Gagal menampilkan daftar restoran, Silahkan refresh browser dan cek koneksi internet anda')}</h3>`;

        expect(document.querySelector('.errorText')).toBeTruthy();
    });

    it('seharusnya tampil ketika halaman detail gagal melakukan fetch API', async () => {
        document.body.innerHTML = '<section id="detailRestaurant"></section>';
        const restoContainer = document.getElementById('detailRestaurant');

        restoContainer.innerHTML = `<h3 class="errorText">${new ErrorTextFetch('Gagal menampilkan restoran tertentu, Silahkan refresh browser dan cek koneksi internet anda')}</h3>`;

        expect(document.querySelector('.errorText')).toBeTruthy();
    });
});

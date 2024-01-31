
// film.js
// DOMContentLoaded hodisasi sodir bo'lganda ishlaydi
document.addEventListener('DOMContentLoaded', function () {

    const appContainer = document.getElementById('app');
// renderFilm funksiyasi film elementini yaratib uni HTML-ga qo'shadi
    const renderFilm = (film) => {

       // Yangi div elementi yaratiladi va 'film' klassiga ega bo'lishi sozlanadi
        const filmElement = document.createElement('div');
        filmElement.className = 'film';


// Rasm elementi (poster) yaratiladi va filmning poster manzili (src) va alt matni belgilanadi
        const posterElement = document.createElement('img');
        posterElement.src = film.poster;
        posterElement.alt = film.title;


// Sarlavha elementi (h2) yaratiladi va unga filmning sarlavhasi matni belgilanadi
        const titleElement = document.createElement('h2');
        titleElement.textContent = film.title;


// Tavsif elementi (p) yaratiladi va unga filmning tavsifi matni belgilanadi
        const overviewElement = document.createElement('p');
        overviewElement.textContent = film.overview;

// Chiqish san'ati elementi (p) yaratiladi va unga filmning chiqish san'ati matni belgilanadi        
        const releaseDateElement = document.createElement('p');
        const releaseDate = new Date(film.release_date * 1000);
        releaseDateElement.textContent = `Release Date: ${releaseDate.toDateString()}`;


// Janrlar elementi (p) yaratiladi va unga filmning janrlari matni belgilanadi
        const genresElement = document.createElement('p');
        genresElement.textContent = `Genres: ${film.genres.join(', ')}`;


// Tuzilgan film elementiga barcha yaratilgan elementlarni qo'shish
        filmElement.appendChild(posterElement);
        filmElement.appendChild(titleElement);
        filmElement.appendChild(overviewElement);
        filmElement.appendChild(releaseDateElement);
        filmElement.appendChild(genresElement);


// film elementini HTML-da ko'rsatiladigan konteynerga qo'shish
        appContainer.appendChild(filmElement);
    };


// films ro'yxati uchun renderFilm funksiyasini barcha film elementlari uchun chaqirish
    films.forEach(renderFilm);
});



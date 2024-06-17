const page = document.querySelector("#main-product-page");
const products = document.querySelector('#products');
const form = document.querySelector('.form')

// Fetch movie data from API

const fetchMovies = async () => {
    const searchMovie = document.querySelector('#search').value
    const url = `/api?movie=${searchMovie}`

    const res = await fetch(url)
    const movies = await res.json();
    // console.log(movies)

    displayMovie(movies, products)
}

const displayMovie = (movies, container) => {
    movies.forEach((obj) => {
        const anchor = document.createElement('a');
        const card = document.createElement('div');
        const img = document.createElement('img');

        card.className = "card"
        anchor.className = "card_hover";
        img.className = "card_img"
        img.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;

        //Checks if products container exist so the other pages dont run into errors since products variable is
        //only found in products page
        if (container) {
            container.appendChild(anchor);
        }
        anchor.appendChild(card)
        card.appendChild(img);
    })
}

function clear(container) {
    Array.from(container.children).forEach(child => container.removeChild(child))
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    clear(products);

    fetchMovies();
});

const page = document.querySelector("#main-product-page");
const products = document.querySelector('#products');

// Fetch movie data from API

const fetchMovies = async (movie) => {
    const url = '/api?movie=star wars'

    const res = await fetch(url)
    const movies = await res.json();
    console.log(movies)

    displayMovie(movies, products)
}

const displayMovie = (movies, container) => {
    movies.forEach((obj) => {
        const anchor = document.createElement('a');
        const card = document.createElement('div');
        const img = document.createElement('img');
        // const header = document.createElement('h3');
        // const section = document.createElement('section');
        // const para1 = document.createElement('p');
        // const para2 = document.createElement('p');

        card.className = "card"
        anchor.className = "card_hover";
        img.className = "card_img"
        // section.className = "card-section"
         
        // if (obj.color == 'white') {
        //     header.className = "title title-black";
        //     para1.className = "description black"
        //     para2.className = "price black"
        // } else {
        //     header.className = "title title-white"
        //     para1.className = "description white"
        //     para2.className = "price white"
        // }

        img.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
        // img.alt = `Picture of ${obj.name}`;
        // header.textContent = obj.company;
        // para1.textContent = obj.name;
        // para2.textContent = obj.price;

        //Checks if products container exist so the other pages dont run into errors since products variable is
        //only found in products page
        if (container) {
            container.appendChild(anchor);
        }
        anchor.appendChild(card)
        card.appendChild(img);
        // card.appendChild(section);
        // section.appendChild(header);
        // section.appendChild(para1);
        // section.appendChild(para2);

        // const mouseOver = () => {
        //     header.textContent = obj.name;
        //     para2.textContent = obj.history;
        //     para1.style.display = "none";
        //     // img.src = obj.imgBack;
        // }

        // const mouseOut = () => {
        //     header.textContent = obj.company;
        //     para1.textContent = obj.name;
        //     para2.textContent = obj.price;
        //     para1.style.display = "block";
        //     // img.src = obj.imgFront;
        // }

        // anchor.addEventListener("mouseover", mouseOver)
        // anchor.addEventListener("mouseout", mouseOut)
        
    })
}

fetchMovies();


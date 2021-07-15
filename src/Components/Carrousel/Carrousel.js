import "./Carrousel.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const maximum = 281;
const minimum = 0;


const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

  const Carrusel = async() => {

  let animesPreview = {
    anime1: 0,
    anime2: 0,
    anime3: 0,
  }

  const getAnimes = async() => {
    const dataAnimes = []
    await fetch('https://api.jikan.moe/v3/season/later')
      .then(response => response.json())
      .then((data) => {
        const animes = data.anime
        for (let i = 0; i < animes.length; i++) {
          const element = animes[i];
          dataAnimes.push({
            imagen: element.image_url,
            titulo: element.title,
            tipo: element.type 
          })
          
        }

      });
      // console.log('animes', animes)
      console.log('caratulas', dataAnimes)
      return dataAnimes  
  }

  const caratulas = await getAnimes()

  animesPreview.anime1 = random()
  animesPreview.anime2 = random()
  animesPreview.anime3 = random()

    return(`
        <div class="recomendaciones"> <h2>Lo nuevo para ti</h2> </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="${caratulas[animesPreview.anime1].imagen}" alt="First slide">
          <div class="caption">
            <h5>${caratulas[animesPreview.anime1].titulo}</h5>
            <p>${caratulas[animesPreview.anime1].tipo}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${caratulas[animesPreview.anime2].imagen}" alt="Second slide">
          <div class="caption">
            <h5>${caratulas[animesPreview.anime2].titulo}</h5>
            <p>${caratulas[animesPreview.anime2].tipo}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${caratulas[animesPreview.anime3].imagen}" alt="Third slide">
          <div class="caption">
            <h5>${caratulas[animesPreview.anime3].titulo}</h5>
            <p>${caratulas[animesPreview.anime3].tipo}</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    `);

  // return view;
};
export default Carrusel;
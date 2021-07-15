import "./Results.css";
import getData from "../../utils/getData";

const Results = async() => {

    let userInput = localStorage.getItem('userSearch');

    const animes = await getData(userInput);
    const view = `
    <div class="containerResults">
        <h1>Resultados para ${userInput}:</h1>
        <div class="containerResults-grid">
        ${animes.results.map( anime => `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${anime.image_url}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${anime.title}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Episodios: ${anime.episodes}</li>
                    <li class="list-group-item">Tipo: ${anime.type}</li>
                    <li class="list-group-item">Calificación: ${anime.score}</li>
                </ul>
            </div>
        `).join('')}
        </div>
    </div>`;
    return view;
}
export default Results;
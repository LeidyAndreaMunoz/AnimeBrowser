import "./HomePage.css";
import Search from "../../Components/Browser/Browser";
import Carrusel from "../../Components/Carrousel/Carrousel";
const Homepage = async () => {
  const view = `
          <div class="containerBrowser_homepage">
           ${Search()}
          </div>
          <div class="containerCarrousel_homepage">
            ${await Carrusel()}
          </div>
      `;
  return view;
};
export default Homepage;
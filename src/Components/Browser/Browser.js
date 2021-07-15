import "./Browser.css";
import img_main from "../../assets/img/Logo-Main.png"

const Browser = () => {
  const view = `
            <div class="search">
                <img src="${img_main}" alt="Logo principal">
                <input class="searchInput" id="searchInput" type="text">
                <div class="searchButtons">   
                    <a href="#results"><button class="searchButton">Consultar</button></a>
                </div>
            </div>
      `;

      document.addEventListener('click', () => {
        const userSearch = document.getElementById("searchInput").value;
        localStorage.setItem('userSearch',userSearch);
        }); 

  return view;
};
export default Browser;
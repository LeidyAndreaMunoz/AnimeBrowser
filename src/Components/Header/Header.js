import "./Header.css";
import img_Logo from "../../assets/img/Logo-Header.png";

const Header = () => {
    const view = `
          <span class="header-home-img"><img src="${img_Logo}" alt="Logo"></span>
          <span><a href="#home">Acerca de nosotros</a></span>
      `;
    return view;
  };
  
  export default Header;
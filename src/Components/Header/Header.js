import "./Header.css";
import img_Logo from "../../assets/img/Logo-Header.png";

const Header = () => {
    const view = `
          <a href="#home" class="header-home-img"><img src="${img_Logo}" alt="Logo"></a>
          <span><a href="#home">Acerca de nosotros</a></span>
      `;
    return view;
  };
  
  export default Header;
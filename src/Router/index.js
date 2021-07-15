
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


import Homepage from "../Views/HomePage/HomePage";
import Results from "../Views/Results/Results";

const routes = {
    '': Homepage,
    '#home': Homepage,
    '#results': Results
};

const router = async (route) => {

    console.log(route);
    const header = document.querySelector('#header');
    header.innerHTML = await Header();

    const footer = document.querySelector('#footer');
    footer.innerHTML = await Footer();

    const container = document.querySelector('#container');
    let render = routes[route] ? routes[route] : Homepage;
    container.innerHTML = await render();
}

export default router;
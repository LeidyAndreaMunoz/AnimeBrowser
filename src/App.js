import router from "./Router/index";
import global from "./assets/css/Global.css"

// Window Load
// Window Load
window.addEventListener("load",router(window.location.hash));
window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
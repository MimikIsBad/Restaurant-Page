import './styles.css';

import { loadHomePage} from "./homePage.js";
import { loadAboutPage } from "./aboutPage.js";
import { loadMenuPage } from "./menuPage.js";

document.addEventListener("DOMContentLoaded", () => {
    loadHomePage();

    document.getElementById('home-btn').addEventListener("click", loadHomePage)
    document.getElementById('about-btn').addEventListener("click", loadAboutPage)
    document.getElementById('menu-btn').addEventListener("click", loadMenuPage)
})
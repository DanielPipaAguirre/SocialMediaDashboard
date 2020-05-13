import './css/styles.css';
import './img/icon-facebook.svg';
import './img/icon-twitter.svg';
import './img/icon-instagram.svg';
import './img/icon-youtube.svg';
import './img/icon-up.svg';
import './img/icon-down.svg';

const toggle = document.getElementById("checkbox");
toggle.checked = false;
toggle.addEventListener("change", () => {
    document.body.classList.toggle('is-dark');
})
import { toppings } from './hotdog.js';
import { renderToppings, toggleTopping } from './hotdog.js';
import "./index.css";

document.addEventListener('DOMContentLoaded', () => {
    renderToppings();
    toggleTopping();
});
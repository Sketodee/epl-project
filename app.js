import * as utils from './utils.js';

window.addEventListener("DOMContentLoaded", utils.getClub);
search.addEventListener('input', () => utils.allClubs(search.value))


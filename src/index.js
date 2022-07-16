'use strict';

import { loadLayout } from './modules/layout.js';

const tabContent = loadLayout();

const buttons = document.querySelectorAll('.tab-button');
buttons.forEach(button => {
    button.addEventListener('click', showTabEvent);
});

function showTabEvent(e) {
    showTab(e.target.innerText)
}

function showTab(value) {
    tabContent.innerText = value;
}




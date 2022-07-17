'use strict';

import { loadLayout } from './modules/layout.js';
import { tabs } from './modules/globalStuff.js';

loadLayout();

const buttons = document.querySelectorAll('.tab-button');
buttons.forEach(button => {
    button.addEventListener('click', showTabEvent);
});

function showTabEvent(e) {
    showTab(e.target.innerText);
}

function showTab(buttonLabel) {
    tabs[buttonLabel].method();
}

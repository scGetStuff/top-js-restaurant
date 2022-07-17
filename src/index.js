'use strict';

import { loadLayout } from './modules/layout.js';
import { createAbout } from './modules/about.js'
import { createMenu } from './modules/menu.js'
import { createContact } from './modules/contact.js'

loadLayout();

const buttons = document.querySelectorAll('.tab-button');
buttons.forEach(button => {
    button.addEventListener('click', showTabEvent);
});

function showTabEvent(e) {
    showTab(e.target.innerText)
}

function showTab(buttonLabel) {

    // TODO: clean up hardcode and class/label dependancy
    // probably a module exporting an object holding config info
    // button label & tab class name; basicaly a hash keyed by label

    if (buttonLabel === 'About')
        createAbout();
    if (buttonLabel === 'Menu')
        createMenu();
    if (buttonLabel === 'Contact')
        createContact();
}




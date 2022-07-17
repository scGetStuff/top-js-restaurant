'use strict';

import { createAbout } from './about.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';

// TODO: how should i use modules for code that is basicaly global?
// should i be bothering to stuff this crap into a module?

// TODO: should define a class or something

// basicaly a hash of all the crap that was hardcoded across files
// try to make things a little data driven
const tabs = {
    About: {
        buttonLabel: 'About',
        cssClass: 'about',
        method: createAbout,
    },
    Menu: {
        buttonLabel: 'Menu',
        cssClass: 'menu',
        method: createMenu
    },
    Contact: {
        buttonLabel: 'Contact',
        cssClass: 'contact',
        method: createContact,
    },
};

export { tabs };
'use strict';

import { createTabContent } from './tabContent.js';

function createContact() {
    const tabContent = createTabContent('contact');
    tabContent.innerText = 'contact';
}

export { createContact };
'use strict';

import { createTabContent } from './tabContent.js';

function createAbout() {
    const tabContent = createTabContent('about');
    tabContent.innerText = 'about';
}

export { createAbout };
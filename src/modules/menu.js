'use strict';

import { createTabContent } from './tabContent.js';

function createMenu() {
    const tabContent = createTabContent('menu');
    tabContent.innerText = 'menu';
}

export { createMenu };
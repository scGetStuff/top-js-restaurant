'use strict';

import { createTabContent } from './tabContent.js';
import { tabs } from './globalStuff.js';

function createMenu() {
    const tabContent = createTabContent(tabs.Menu.cssClass);
    tabContent.innerText = tabs.Menu.buttonLabel;
}

export { createMenu };
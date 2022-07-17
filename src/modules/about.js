'use strict';

import { createTabContent } from './tabContent.js';
import { tabs } from './globalStuff.js';

function createAbout() {
    const tabContent = createTabContent(tabs.About.cssClass);
    tabContent.innerText = tabs.About.buttonLabel;
}

export { createAbout };
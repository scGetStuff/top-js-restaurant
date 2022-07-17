'use strict';

import { createTabContent } from './tabContent.js';
import { tabs } from './globalStuff.js';

function createContact() {
    const tabContent = createTabContent(tabs.Contact.cssClass);
    tabContent.innerText = tabs.Contact.buttonLabel;
}

export { createContact };
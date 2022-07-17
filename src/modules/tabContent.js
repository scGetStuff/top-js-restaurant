'use strict';

function createTabContent(cssClassName) {
    const main = document.querySelector('main');
    const tabContent = document.createElement('div');

    tabContent.classList.add('tab-content');
    tabContent.classList.add(cssClassName)

    main.innerHTML = '';
    main.appendChild(tabContent);

    return tabContent;
}

export { createTabContent };
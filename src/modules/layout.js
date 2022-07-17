'use strict';

import { tabs } from './globalStuff.js';

// TODO: initial test code
function XloadLayout() {
    const element = document.createElement('div');

    element.innerText = 'test';
    document.body.appendChild(element);
}

function loadLayout() {
    const content = document.querySelector('#content');
    const scrollContainer = createElement('div');
    const main = createElement('main');
    // TODO: first pass, can go away once tab content modules are done
    const tabContent = createElement('div', 'test');

    content.classList.add('content');
    scrollContainer.classList.add('scroll');
    tabContent.classList.add('tab-content');
    content.appendChild(createHeader());
    content.appendChild(scrollContainer);
    scrollContainer.appendChild(main);
    scrollContainer.appendChild(createElement('footer', 'footer'));
    main.appendChild(tabContent);
}

function createElement(tag, text = '') {
    const element = document.createElement(tag);

    if (text !== '')
        element.innerText = text;

    return element;
}


function createHeader() {
    const header = createElement('header');

    header.appendChild(createElement('h1', 'Restaurant Page'));
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = createElement('nav');

    nav.classList.add('tab-bar');
    Object.keys(tabs).forEach(key => {
        nav.appendChild(createTabButton(tabs[key].buttonLabel));
    });

    return nav;
}

function createTabButton(name) {
    const button = document.createElement('button');

    button.classList.add('tab-button');
    button.type = 'button';
    button.innerText = name;

    return button;
}

export { loadLayout };

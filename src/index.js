'use strict';

import './styles.css';


function component() {
    const element = document.createElement('div');
    element.innerText = 'test';
    return element;
}

document.body.appendChild(component());
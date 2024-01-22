import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join(' ');
  return element;
}

document.body.appendChild(component());

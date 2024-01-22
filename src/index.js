import _ from 'lodash';
import './style.css';
import Animation from './Animation.gif';

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join(' ');
  element.classList.add('hello');
  const myAnim = new Image();
  myAnim.src = Animation;
  element.appendChild(myAnim);
  return element;
}

document.body.appendChild(component());

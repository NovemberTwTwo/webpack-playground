import _ from 'lodash';
import './style.css';
import Animation from './Animation.gif';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join(' ');
  element.classList.add('hello');
  const myAnim = new Image();
  myAnim.src = Animation;
  element.appendChild(myAnim);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());

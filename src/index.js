// import _ from 'lodash';
// import './style.css';
// import Niu from './niu.gif';
// import Data from './data.xml';
// import printMe from './print.js';
// import './style.css';
import { cube } from './math.js';

function component() {
  // var element = document.createElement('div');
  // var btn = document.createElement('button');
  var element = document.createElement('pre');

  //Lodash（目前通过一个script脚本引入）对于执行这一行是必须的
  //Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack', 'five'], ' ');
  // element.classList.add('hello');

  //将图像添加到我们现有的div
  // var myIcon = new Image();
  // myIcon.src = Niu;

  // element.appendChild(myIcon);

  // console.log(Data);

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
// let element = component(); //当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// if(module.hot){
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     // printMe();
//     document.body.removeChild(element);
//     element = component(); //重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   })
// }
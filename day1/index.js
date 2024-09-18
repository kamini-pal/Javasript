let mydiv = document.querySelector('#div');
let ele = document.createElement('span');
ele.textContent = "Hello"
mydiv.insertAdjacentHTML('beforebegin', ele); 
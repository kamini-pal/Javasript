

function changetext(){
    let ele = document.getElementById('para');
    ele.textContent = "Hello kamini";
}

let ele = document.getElementById('para');
ele.addEventListener('click', changetext);
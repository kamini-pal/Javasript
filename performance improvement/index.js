

//================================ code 1================================================
 let t1 = performance.now();
for(let i = 1; i <=10;i++){
    let para = document.createElement('p');
    para.textContent = "Hello World " + i;
    document.body.appendChild(para);
}
let t2 = performance.now();

console.log("Time taken to create 10 paragraphs: " + (t2 - t1));

//================================ code 2================================================

let t3 = performance.now();
let fragment = document.createDocumentFragment();
for(let i = 1; i <=10;i++){
    let para = document.createElement('p');
    para.textContent = "Hello World!!!!!!!! " + i;
    fragment.appendChild(para);
}

document.body.appendChild(fragment);

let t4 = performance.now();

console.log("Time taken to create 10 paragraphs using DocumentFragment: " + (t4 - t3));

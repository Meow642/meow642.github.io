let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'https://www.baidu.com/img/dong_8f1d47bcb77d74a1e029d8cbb3b33854.gif');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){
        setUserName();
    }else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hi，' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
   }
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi，' + storedName;
  }

  myButton.onclick = setUserName;
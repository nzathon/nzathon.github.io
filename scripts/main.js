const myImage = document.querySelector("img");
const myHeading = document.querySelector('h1');
const myButton = document.querySelector('button');


myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozzila is cool, ${myName}`;
    };
};

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozzila is cool, ${storedName}`;
};

myButton.onclick = () => {
    setUserName();
};
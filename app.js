//DOM Elements
const greeting = document.querySelector(".greeting"),
    Name = document.querySelector(".Name"),
    time = document.getElementById("time");

const showtime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        secs = today.getSeconds();

    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:<span>${addZero(min)}<span>:<span>${addZero(
        secs
    )} ${amPm}`;
    setTimeout(showtime, 1000);
};

const addZero = n => {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

const greet = () => {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        greeting.textContent = "Good Morning ";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon ";
    } else {
        greeting.textContent = "Good Evening ";
    }
};

const getName = () => {
    if (localStorage.getItem("Name") === null) {
        Name.textContent = " [Enter Name]";
    } else {
        Name.textContent = localStorage.getItem("Name");
    }
};
const setName = e => {
    if (e.type === "keypress") {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("Name", e.target.innerText);
            Name.blur();
        }
    } else {
        localStorage.setItem("Name", e.target.innerText);
    }
};

Name.addEventListener("click", () => {
    Name.innerText = " ";
});
Name.addEventListener("keypress", setName);
Name.addEventListener("blur", setName);

showtime();
greet();
getName();
setName();

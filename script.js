let apiOne = document.getElementById("API-1");
apiOne.addEventListener("click", function () {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v2/all");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(this.responseText);
            console.log(`REST Countries, API-1 DATA`, data);
        }
    }

});

let apiTwo = document.getElementById("API-2");
apiTwo.addEventListener("click", function () {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(this.responseText);
            console.log(`API-2 DATA`, data);
        }
    }

})



let apiThree = document.getElementById("API-3");
apiThree.addEventListener("click", function () {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(this.responseText);
            console.log(`API-3 DATA`, data);
        }
    }

})

let apiFour = document.getElementById("API-4");
apiFour.addEventListener("click", function () {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(this.responseText);
            console.log(`API-4 DATA`, data);
        }
    }

})

let apiFive = document.getElementById("API-5");
apiFive.addEventListener("click", function () {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(this.responseText);
            console.log(`API-5 DATA`, data);
        }
    }

})


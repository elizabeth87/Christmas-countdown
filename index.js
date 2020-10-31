const christmas = "25 December 2020";

function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    console.log(christmasDate - currentDate);
}

console.log('hello')
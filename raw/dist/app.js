"use strict";
let countField = document.querySelector("p");
let count = 0;
let Buttons = document.querySelectorAll("button");
Buttons.forEach((b, i) => {
    b.addEventListener("click", () => {
        if (b.classList[0] === "Increment") {
            count += 1;
            console.log(count);
            countField.innerText = `${count}`;
            return;
        }
        count -= 1;
        countField.innerText = `${count}`;
        console.log(count);
        return;
    });
});

let countField = document.querySelector("p") as HTMLParagraphElement
let count: number = 0
let Buttons = document.querySelectorAll<HTMLButtonElement>("button")

Buttons.forEach((b: any, i: number): any => {
    b.addEventListener("click", () => {
        if (b.classList[0] === "Increment") {
            count += 1
            console.log(count)
            countField.innerText=`${count}`
            return
        }
        count -= 1
        countField.innerText=`${count}`
        console.log(count)
        return

    })
})

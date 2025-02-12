const sun = document.querySelector(".sun")
const body = document.querySelector("body")
const text = document.querySelector(".text")
const input_text = document.querySelector(".input_text")
const score = document.querySelector(".score")
const score2 = document.querySelector(".score2")
const Time = document.querySelector(".time")
const modal = document.querySelector(".modal")
const selectValue = document.querySelector(".select_value")
const result = document.querySelector(".result")

var mode = localStorage.getItem("mode")


sun.addEventListener("click", () => {
    if (mode == "active") {

        mode = localStorage.setItem("mode", "light")

    } else {
        mode = localStorage.setItem("mode", "active")


    }
    changeMode()

});

const changeMode = () => {
    mode = localStorage.getItem("mode")

    if (mode == "active") {
        body.classList.add("active")

    } else {
        body.classList.remove("active")

    }
}
changeMode()

selectValue.addEventListener("change", ()=>{
    console.log(selectValue.value);
    
})


const words = [
    "hello",
    "Dilyorbek",
    "Azizbek",
    "Shaxriyor",
    "color",
    "charity",
    "drive",
    "park",
    "sometimes",
    "interesting",
    "phone",
    "tennis",
    "pound",
    "journey",
    "amazing",
    "because",
    "change",
    "cinema",
    "theatre",
    "password",
    "Neymar",
    "Messi",
    "Ronaldo",
    "Kamronbek",
    "red",
    "cap",
    "bottle",
    "computer",
    "often",
    "check-in",
    "checkout",
    "books",
    "try",
    "bag",
    "reception",
    "but",
    "busy",
    "go",
    "lamp",
    "brown",
];

textWord = "";
count = 0;
var time = 10;

const writeText = () => {
    textWord = words[Math.floor(Math.random() * words.length)];
    text.textContent = textWord

};

writeText();

input_text.addEventListener("input", () => {
    if (input_text.value == textWord) {
        writeText();
        input_text.value = ""
        count += 1;
        score.textContent = count

        if (selectValue.value == "Easy") {
            time += 5;
            Time.innerHTML += "<span>+5</span>"
        } else if (selectValue.value == "Medium") {
            time += 2;
            Time.innerHTML += "<span>+2</span>"
        } else {
            time += 1;
            Time.innerHTML += "<span>+1</span>"
        }

    }
});


const setinterval = setInterval(() => {

    if (time != 0) {
        time--;
        Time.textContent = time;
    } else {

        modal.classList.add("active")
        clearInterval(setInterval)
        result.textContent = count
        score2.textContent = count
    }

}, 1000)

selectValue.addEventListener("change", () => {

})





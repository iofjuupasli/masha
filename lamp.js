document.body.style.backgroundColor="#000000"
const on = document.getElementById("on")
const off = document.getElementById("off")
const lamp = document.getElementById("lamp")
on.addEventListener("click", (event) => {
    lamp.style.visibility = "visible"
    document.body.style.backgroundColor = "#ffffff"
})
off.addEventListener("click", (event) => {
    lamp.style.visibility = "hidden";
    document.body.style.backgroundColor = "#000000"
})

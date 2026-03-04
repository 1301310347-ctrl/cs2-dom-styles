console .log("Script stated");

function changeStyle() {
    console.log("click");

    let p = document.getElementById("text");

    p.style.color = "green";
    p.style.fontSize = "70px";
    p.style.textAlign = "center";
    p.style.backgroundColor = "cornflowerblue";
}

function changeStyle2() {
    console.log("click");

    let p = document.getElementById("text");

    p.style.color = "yellow";
    p.style.fontFamily = "ariel";
}

function reset() {
    console.log("click");

    let p = document.getElementById("text");

    p.style.color = "";
    p.style.fontSize = "";
    p.style.textAlign = "";
    p.style.backgroundColor = "";

}

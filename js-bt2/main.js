function copy() {
    const x = document.querySelector("ul").innerHTML;
    console.log(x);
    document.querySelectorAll("ul")[2].innerHTML = x;
}
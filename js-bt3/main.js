function _copy() {
    const x = document.querySelector(".item").innerHTML;
    console.log(x);
    document.querySelectorAll("div")[3].innerHTML = x;

}
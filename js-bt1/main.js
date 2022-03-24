function swap() {
    const x = document.querySelector("ul").innerHTML;
    console.log(x.split("\n").reverse().join("\n"));
    document.querySelector("ul").innerHTML = x.split("\n").reverse().join("\n");
}
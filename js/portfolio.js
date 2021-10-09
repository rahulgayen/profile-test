window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
let toID = setTimeout(() => {
    console.log("this is the third message");
    window.scrollBy({
        top: window.outerHeight,
        left: 0,
        behavior: 'smooth'
    });
}, 6200);

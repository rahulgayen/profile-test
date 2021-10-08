let toID = setTimeout(() => {
    console.log("this is the third message");
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
}, 7500);

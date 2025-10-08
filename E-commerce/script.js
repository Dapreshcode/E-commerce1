const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

/* we have to check if our navbar is open or not, if it is not open when any one clicks on the menu we want it to
show, then if it is open when anyone clicks on it or the menu or close button we want it to close*/

// check//

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add("active")
    })
};

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove("active")
    })
};


const avatar = document.querySelector('.avatar')
const popup = document.getElementById('pop-up')
const dark = document.getElementById("dark")
const navoptions = document.getElementsByClassName('nav-options')
const color_mode = document.getElementById('color-mode')

avatar.addEventListener('click', check)
// dark.addEventListener('click', dark_mode)
// navoptions.addEventListener('click', border)
color_mode.addEventListener('click', color_change)

function color_change() {

    if (document.body.style = "var(--dark-grey)") {
    document.body.style.background = "white";
    popup.style.background = 'var(--dark-grey)';
    document.getElementById('nav-bar').style.background = 'var(--dark-grey)';
    document.title = "tron975 (Light) | Website";
    document.body.style.animation = "opacity 2s";
    color_mode.innerHTML = "Enable Dark Mode"
    }

    else if (document.body.style = "white") {
        document.body.style.background = "var(--dark-grey)"
        document.title = "tron975 (Dark) | Website";
    document.body.style.animation = "opacity 2s";
    color_mode.innerHTML = "Enable Light Mode"

    }

}



function border() {
    nav_options.style.borderBottom = "2px solid var(--light-blue)"
}


function check() {
    if (popup.style.visibility == "hidden") {
        popup.style.visibility = "visible"
    }

    else {
        popup.style.visibility = "hidden";
        popup.style.animation = "open 0.3s";
    }
}

function dark_mode() {
    document.body.style.background = 'hsl(0, 0%, 11.82%)'; 
    document.body.style.animation = "opacity 2s";
    document.title = "tron975 (Dark) | Website";
}

const avatar = document.querySelector('.avatar')
const popup = document.getElementById('pop-up')
const dark = document.getElementById("dark")
const navoptions = document.querySelector('.nav-options')
const color_mode = document.getElementById('color-mode')
const minimize = document.getElementById('minimize')

avatar.addEventListener('click', check)
// dark.addEventListener('click', dark_mode)
document.getElementById('about').addEventListener('click', border)
color_mode.addEventListener('click', color_change)
// minimize.addEventListener('click', () => {
//     document.querySelector('.nav-bar').style.animation = "collapse linear 0.2s"
//     document.querySelector('.nav-options-container').style.display = "none";
    
// })

function color_change() {

    if (document.body.style = "var(--dark-grey)") {
    document.body.style.background = "white";
    document.querySelector('.about-container').style.background = "white";
    popup.style.background = 'var(--dark-grey)';
    document.getElementById('nav-bar').style.background = 'var(--dark-grey)';
    document.title = "tron975 (Light) | Website";
    document.body.style.animation = "opacity 2s";
    color_mode.innerHTML = "Enable Dark Mode";
    color_mode.style.setProperty("--sun", "url(https://cdn.artofproblemsolving.com/attachments/b/4/df05480172598d82ecd57a1eda5689b02579c7.png)");
    } 
    
    else {
    document.body.style.background = "var(--dark-grey)";
    document.title = "tron975 (Dark) | Website";
    document.body.style.animation = "opacity 2s";
    color_mode.innerHTML = "Enable Light Mode"

    }

}



function border() {
    navoptions.style.borderBottom = "2px solid var(--light-blue)"
}


function check() {
    if (popup.style.display == "none") {
        popup.style.display = 'block';
        popup.style.animation = "slide 0.3s"
    }

    else {
        popup.style.display = "none";
        
    }
}

function dark_mode() {
    document.body.style.background = 'hsl(0, 0%, 11.82%)'; 
    document.body.style.animation = "opacity 2s";
    document.title = "tron975 (Dark) | Website";
}

function img() {
    document.body.style.backgroundImage = 'url("favicon.ico")'  
}
function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    if(!languagePT)
    {
        if(button.classList.contains(darkModeClass)){
            button.innerHTML = lightModeEn;
            h1.innerHTML = darkModeEn + " ON"
            footer.innerHTML = textFooterEn
            return;
        }
    
        button.innerHTML = darkModeEn;
        h1.innerHTML = lightModeEn + " ON"
        footer.innerHTML = textFooterEn
    }
    else{
        if(button.classList.contains(darkModeClass)){
            button.innerHTML = lightModeBr;
            h1.innerHTML = darkModeBr + " ON"
            footer.innerHTML = textFooterBr
            return;
        }
    
        button.innerHTML = darkModeBr;
        h1.innerHTML = lightModeBr + " ON"
        footer.innerHTML = textFooterBr
    }
}

function changeLanguage(){
    if(!languagePT){
        languagePT = true
        changeText()
    }
    else{
        languagePT = false
        changeText()
    }

}

var languagePT = false

const lightModeEn = "Light mode"
const darkModeEn = "Dark mode"
const lightModeBr = "Modo claro"
const darkModeBr = "Modo escuro"
const darkModeClass = 'dark-mode'
const textFooterEn = "Project studied at the Digital Innovation One bootcamp"
const textFooterBr = "Projeto estudado no bootcamp da Digital Innovation One"

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);
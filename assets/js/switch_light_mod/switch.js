const btn = document.querySelector('.color-switch>i');
const moon = 'fa-solid fa-moon fa-xl';
const sun = 'fa-solid fa-sun fa-xl';
const root = document.querySelector(':root');

const lightMod = {
    green: '#7eb681',
    brightbg: '#fff',
    brightnav: '#5C5C5C',
    brighttext: '#333'
}

const darkMod = {
    green: '#7eb681',
    darkbg: '#121212',
    darknav: '#1a1a1a',
    darktext: '#f5f5f5'
}

btn.addEventListener('click', switchMode);

function switchMode(){
    if(btn.className === sun) {
        btn.className = moon;
        root.style.setProperty('--green', lightMod.green);
        root.style.setProperty('--bg', lightMod.brightbg);
        root.style.setProperty('--nav', lightMod.brightnav);
        root.style.setProperty('--text', lightMod.brighttext);
        btn.style.setProperty('color', lightMod.brighttext);

    } else {
        btn.className = sun;
        root.style.setProperty('--green', darkMod.green);
        root.style.setProperty('--bg', darkMod.darkbg);
        root.style.setProperty('--nav', darkMod.darknav);
        root.style.setProperty('--text', darkMod.darktext);
        btn.style.setProperty('color', darkMod.darktext);
    }
}
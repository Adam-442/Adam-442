let light = {
    '--accent': '#357657',
    '--text': 'black',
    '--text-hover': 'black',
    '--background': '#f8f8f8',
    '--card': '#f8f8f8',
    '--footer': '#357657',
    '--btn': 'black',
    '--btn-hover': '#f8f8f8',
}
let dark = {
    '--accent': '#357657',
    '--text': '#f8f8f8',
    '--text-hover': '#f8f8f8',
    '--background': '#424242',
    '--card': '#212121',
    '--footer': '#303030',
    '--btn': '#424242',
    '--btn-hover': '#357657',
}

let themes = [light, dark];
let t = 1;

let root = document.documentElement;
for (const [key, value] of Object.entries(themes[t])) {
    root.style.setProperty(key, value);
}

function theme() {    
    t = (t)? 0: 1;

    for (const [key, value] of Object.entries(themes[t])) {
        root.style.setProperty(key, value);
    }
}
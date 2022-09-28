const PICS = ['images/me.png', 'images/me2.png'];
const ROOT = document.documentElement;
let themes;
let t = 1;

async function theme() {
    if (!themes) {
        await fetch('themes.json')
            .then((response) => response.json())
            .then((json) => themes = [json["light"], json["dark"]]);
    }

    t = (t)? 0: 1;

    for (const [key, value] of Object.entries(themes[t])) {
        ROOT.style.setProperty(key, value);
    }

    // change profile picture: 1. hide it, 2. change picture after 300ms (transition time), 3. show it again (transition will play again!).
    let pfp = document.getElementById('pfp');
    pfp.style.opacity = '0%';
    setTimeout(() => pfp.src = PICS[t], 301);
    setTimeout(() => pfp.style.opacity = '100%', 311);
}
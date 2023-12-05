// let PICS = ['images/me.png', 'images/newme.png'];
const ROOT = document.documentElement;
let themes;
let current_theme = 0; // 0: light, 1: dark
let languages;
let current_language = 1; // 0: Arabic, 1: English

// Preload Images
// PICS.forEach(pic => {let im = new Image(); im.src = pic;})

async function theme() {
    if (!themes) {
        await fetch('themes.json')
            .then((response) => response.json())
            .then((json) => themes = [json["light"], json["dark"]]);
    }

    current_theme = (current_theme)? 0: 1;

    for (const [key, value] of Object.entries(themes[current_theme])) {
        ROOT.style.setProperty(key, value);
    }

    // change profile picture: 1. hide it, 2. change picture after 300ms (transition time), 3. show it again (transition will play again!).
    // let pfp = document.getElementById('pfp');
    // pfp.style.opacity = '0%';
    // setTimeout(() => pfp.src = PICS[current_theme], 301);
    // setTimeout(() => pfp.style.opacity = '100%', 311);
}

async function language() {
    if (!languages) {
        await fetch('languages.json')
            .then((response) => response.json())
            .then((json) => languages = [json["ar"], json["en"]]);
    }

    current_language = (current_language)? 0: 1;

    const ids = ['name', 'swe', 'cv_button', 'look_text', 'project_title', 'project_desc', 'using_text']
    const json_ids = ['name', 'job', 'cv', 'look', 'project', 'project_description', 'using']

    ids.forEach((id) => {
        document.getElementById(id).style.opacity = '0%';
    })

    setTimeout(() => {
        ids.forEach((id, index) => {
            let element = document.getElementById(id);
            element.innerText = languages[current_language][json_ids[index]];
            element.style.opacity = '100%';
        })

        // Cleaning up, for english and semicolons to look right
        if (current_language) {
            // English
            document.getElementById('icons').style.flexDirection = 'row';
            document.getElementById('using_text').classList.remove('rtl');
            document.getElementById('project_desc').classList.remove('rtl');
        } else {
            // Arabic
            document.getElementById('icons').style.flexDirection = 'row-reverse';
            document.getElementById('using_text').classList.add('rtl');
            document.getElementById('project_desc').classList.add('rtl');
        }
    }, 250);
}

function closeMailIcon() {
    document.getElementById('mail_iconify').setAttribute('data-icon', 'line-md:email-twotone') 
}
function openMailIcon() {
    document.getElementById('mail_iconify').setAttribute('data-icon', 'ph:envelope-simple-open-duotone') 
}

language(); // set language to Arabic by default
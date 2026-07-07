// Lizzy-Translate Script
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const fromLang = document.getElementById('fromLang');
const toLang = document.getElementById('toLang');
const translateBtn = document.getElementById('translateBtn');

let languages = {};

// Load language files
async function loadLanguage(lang) {
    const response = await fetch(`${lang}.json`);
    return await response.json();
}

async function init() {
    languages.yoruba = await loadLanguage('Yoruba');
    languages.hausa = await loadLanguage('hausa');
}

translateBtn.addEventListener('click', async () => {
    const text = inputText.value.toLowerCase();
    const from = fromLang.value;
    const to = toLang.value;
    
    if(!text) return;
    
    const langData = languages[to];
    const translated = langData[text] || "Translation not found";
    
    outputText.value = translated;
});

init();
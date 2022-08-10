
const bodyEl = document.querySelector('body')
const checkboxEl = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

/////////////меняем тему/////////////////////////////////
checkboxEl.addEventListener('change', onClickToggle);

document.addEventListener('DOMContentLoaded', getThemeLocalStorage);


function onClickToggle(e) { 
  if (checkboxEl.checked) {
    // console.log('yes');
    darkTheme();
  } else {
    // console.log('noooo');
    lightTheme();
 }
};


///////////////////темная тема/////////////////////////////////////////
function darkTheme() {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'Theme.DARK');
  
};
///////////////////////светлая тема/////////////////////////////////////
function lightTheme() {
    bodyEl.classList.remove(Theme.DARK);
  bodyEl.classList.add(Theme.LIGHT);
localStorage.setItem('theme', 'Theme.LIGHT');
  
};
////////////////////////////////////////////////////////////

function getThemeLocalStorage() {
  const themeInLocal = localStorage.getItem('theme');
  if (themeInLocal === 'Theme.DARK') {
    darkTheme();
    checkboxEl.checked = true;
}
};
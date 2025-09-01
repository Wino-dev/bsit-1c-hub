export function renderHeader() {
  const header = document.querySelector('.header');
  header.innerHTML = `
    <div class="header">
      <div class="hmb-menu-container">
        <img class="hmg-img" src="images/hamburger-icon.png">
      </div>
      <img class="seclogo" src="images/seclogo.svg">
      <div class="header-text">1C HUB</div>
    </div>
    `; 
}
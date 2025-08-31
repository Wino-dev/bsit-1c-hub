export function renderSidebar() {
  const sidebar = document.querySelector('.sidebar-container');
  sidebar.innerHTML = `
    <div class="sidebar-option sidebar-home first">
      <img class="sidebar-img" src="images/home-icon.svg">
      <div class="sidebar-name">Home</div>
    </div>
    <div class="sidebar-option sidebar-announcements">
      <img class="sidebar-img" src="images/announcement-icon.png">
      <div class="sidebar-name">Announcements</div>
    </div>
    <div class="sidebar-option sidebar-calculator">
      <img class="sidebar-img" src="images/calculator-logo.svg">
      <div class="sidebar-name">Grades & GWA Calculator</div>
    </div>
    <div class="sidebar-option sidebar-checklist">
      <img class="sidebar-img" src="images/requirement-logo.png">
      <div class="sidebar-name">Requirement Checklist</div>
    </div>
    <div class="sidebar-option sidebar-reviewers last">
      <img class="sidebar-img" src="images/reviewers-icon.svg">
      <div class="sidebar-name">Reviewers</div>
    </div>
  `;
}
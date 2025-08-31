import {redirectHome, redirectAnnouncements, redirectCalculator, redirectChecklist, redirectReviewers, checkCurrentSite} from "./redirect.js";

export function initSideMenuHyperlinks() {
  const announcementsSm = document.querySelector('.sidemenu-announcements');
  const calculatorSm = document.querySelector('.sidemenu-calculator');
  const checklistSm = document.querySelector('.sidemenu-checklist');
  const reviewersSm = document.querySelector('.sidemenu-reviewers');
  const homeSm = document.querySelector('.sidemenu-home');

  homeSm.addEventListener('click', () => {
    checkCurrentSite('index.html', redirectHome);
  });

  announcementsSm.addEventListener('click', () => {
    checkCurrentSite('announcements.html', redirectAnnouncements);
  });

  calculatorSm.addEventListener('click', () => {
    checkCurrentSite('calculator.html', redirectCalculator);
  });

  checklistSm.addEventListener('click', () => {
    checkCurrentSite('checklist.html', redirectChecklist);
  });

  reviewersSm.addEventListener('click', () => {
    checkCurrentSite('reviewers.html', redirectReviewers);
  });
};
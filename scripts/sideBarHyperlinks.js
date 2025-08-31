import {redirectHome, redirectAnnouncements, redirectCalculator, redirectChecklist, redirectReviewers, checkCurrentSite} from "./redirect.js";

export function initSideBarHyperlinks() {
  const announcementsSb = document.querySelector('.sidebar-announcements');
  const calculatorSb = document.querySelector('.sidebar-calculator');
  const checklistSb = document.querySelector('.sidebar-checklist');
  const reviewersSb = document.querySelector('.sidebar-reviewers');
  const homeSb = document.querySelector('.sidebar-home');

  homeSb.addEventListener('click', () => {
    checkCurrentSite('index.html', redirectHome);
  });

  announcementsSb.addEventListener('click', () => {
    checkCurrentSite('announcements.html', redirectAnnouncements);
  });

  calculatorSb.addEventListener('click', () => {
    checkCurrentSite('calculator.html', redirectCalculator);
  });

  checklistSb.addEventListener('click', () => {
    checkCurrentSite('checklist.html', redirectChecklist);
  });

  reviewersSb.addEventListener('click', () => {
    checkCurrentSite('reviewers.html', redirectReviewers);
  });
};
import {redirectAnnouncements, redirectCalculator, redirectChecklist, redirectReviewers} from "./redirect.js";

export function initFrontPageLinks() {
  const announcementsFp = document.querySelector('.announcements-fp');
  const calculatorFp = document.querySelector('.calculator-fp');
  const checklistFp = document.querySelector('.checklist-fp');
  const reviewersFp = document.querySelector('.reviewers-fp');

  announcementsFp.addEventListener('click', () => {
    redirectAnnouncements();
  });

  calculatorFp.addEventListener('click', () => {
    redirectCalculator();
  });

  checklistFp.addEventListener('click', () => {
    redirectChecklist();
  });

  reviewersFp.addEventListener('click', () => {
    redirectReviewers();
  });
}
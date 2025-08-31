export function initFunctionLinks() {
  const announcementsFp = document.querySelector('.announcements-fp');
  const calculatorFp = document.querySelector('.calculator-fp');
  const checklistFp = document.querySelector('.checklist-fp');
  const reviewersFp = document.querySelector('.reviewers-fp');

  const announcementsSm = document.querySelector('.sidemenu-announcements');
  const calculatorSm = document.querySelector('.sidemenu-calculator');
  const checklistSm = document.querySelector('.sidemenu-checklist');
  const reviewersSm = document.querySelector('.sidemenu-reviewers');
  const homeSm = document.querySelector('.sidemenu-home');

  homeSm.addEventListener('click', () => {
    checkCurrentSite('index.html', redirectHome);
  });

  announcementsFp.addEventListener('click', () => {
    checkCurrentSite('announcements.html', redirectAnnouncements);
  });

  announcementsSm.addEventListener('click', () => {
    checkCurrentSite('announcements.html', redirectAnnouncements);
  })

  calculatorFp.addEventListener('click', () => {
    checkCurrentSite('calculator.html', redirectCalculator);
  });

  calculatorSm.addEventListener('click', () => {
    checkCurrentSite('calculator.html', redirectCalculator);
  })

  checklistFp.addEventListener('click', () => {
    checkCurrentSite('checklist.html', redirectChecklist);
  });

  checklistSm.addEventListener('click', () => {
    checkCurrentSite('checklist.html', redirectChecklist);
  })

  reviewersFp.addEventListener('click', () => {
    checkCurrentSite('reviewers.html', redirectReviewers);
  });

  reviewersSm.addEventListener('click', () => {
    checkCurrentSite('reviewers.html', redirectReviewers);
  })

  //REDIRECT FUNCTIONS

  function redirectHome () {
    location.href = '../index.html';
  };

  function redirectAnnouncements() {
    location.href = '../announcements.html';
  };

  function redirectCalculator() {
    location.href = '../calculator.html';
  };

  function redirectChecklist() {
    location.href = '../checklist.html';
  };

  function redirectReviewers() {
    location.href = '../reviewers.html';
  };

  function checkCurrentSite(pathname, redirectFunc) {
    if (location.pathname === `/${pathname}`) {
      console.log('block is working');
    } else {
      redirectFunc();
    }
  };

}
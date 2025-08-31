export function redirectHome () {
  location.href = '../index.html';
};

export function redirectAnnouncements() {
  location.href = '../announcements.html';
};

export function redirectCalculator() {
  location.href = '../calculator.html';
};

export function redirectChecklist() {
  location.href = '../checklist.html';
};

export function redirectReviewers() {
  location.href = '../reviewers.html';
};

export function checkCurrentSite(pathname, redirectFunc) {
  if (location.pathname === `/${pathname}`) {
    console.log('block is working');
  } else {
    redirectFunc();
  }
};

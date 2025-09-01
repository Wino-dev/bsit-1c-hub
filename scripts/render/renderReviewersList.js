import { subjectList } from "../data/subjectList.js";
import { reviewersList } from "../data/reviewersListObject.js";

export function renderReviewersList() {
  const subjectSelected = localStorage.getItem('subjectCode');
  
  if (!subjectSelected) {
    document.querySelector('.main').innerHTML = `
      <div class="reviewers-list-main">
        <div class="go-back-button">
          <div class="go-back-button-text">Go Back</div>
          <img class="go-back-button-img" src="images/undo-icon.svg">
        </div>
        <div class="subject-title">Error 101</div>
        <div class="subject-desc">No subject selected</div>
      </div>
    `;
    return;
  } 

  let subjectExists = false;

  subjectList.forEach((subject) => {
    if (subject.subjectCode === subjectSelected) {
      subjectExists = true
    } 
  });

  if (!subjectExists) {
    document.querySelector('.main').innerHTML = `
      <div class="reviewers-list-main">
        <div class="go-back-button">
          <div class="go-back-button-text">Go Back</div>
          <img class="go-back-button-img" src="images/undo-icon.svg">
        </div>
        <div class="subject-title">Error 102</div>
        <div class="subject-desc">Subject selected is invalid</div>
      </div>
    `;
    return;
  } else {

    subjectList.forEach((subject) => {
      if (subject.subjectCode === subjectSelected) {
        document.querySelector('.subject-title').innerText = subject.name;
      }
    });
  };

  const subjectReviewers = reviewersList.filter((reviewer) => {
    if (reviewer.subjectCode === subjectSelected) {
      return reviewer;
    };
  });

  let pdfReviewersHTML = '';
  let apkgReviewersHTML = '';

  const pdfReviewers = subjectReviewers.filter((reviewer) => {
    if (reviewer.reviewerType === 'pdf') {
      return reviewer;
    }
  });

  const apkgReviewers = subjectReviewers.filter((reviewer) => {
    if (reviewer.reviewerType === 'apkg') {
      return reviewer;
    }
  });

  if (JSON.stringify(pdfReviewers) === '[]') {
    pdfReviewersHTML = `
    <div class="no-reviewers">No reviewers available</div>
    `;
  } else {
    pdfReviewers.forEach((reviewer) => {
      pdfReviewersHTML += `
        <div onclick="location.href='${reviewer.link}'" class="reviewer-file pdf-file">${reviewer.name}</div>
      `
    })
  }

  if (JSON.stringify(apkgReviewers) === '[]') {
    apkgReviewersHTML = `
    <div class="no-reviewers">No reviewers available</div>
    `;
  } else {
    apkgReviewers.forEach((reviewer) => {
      apkgReviewersHTML += `
        <div onclick="location.href='${reviewer.link}'" class="reviewer-file apkg-file">${reviewer.name}</div>
      `
    })
  };

  document.querySelector('.pdf-container').innerHTML = pdfReviewersHTML;
  document.querySelector('.apkg-container').innerHTML = apkgReviewersHTML;

  document.querySelector('.go-back-button').addEventListener('click', () => {
    location.href = 'reviewers.html';
  });
} 
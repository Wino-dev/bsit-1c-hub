import { subjectList } from "../data/subjectList.js";

export function renderSubjectContainer() {
  let subjectContainerHTML = '';

  subjectList.forEach((subject) => {
    subjectContainerHTML += `
      <div class="subject-hl" data-subject-code="${subject.subjectCode}">
        <img class="subj-hl-img" src="${subject.icon}">
        <div class="subject-name">${subject.name}</div>
      </div>
    `;
  });

  document.querySelector('.subject-container').innerHTML = subjectContainerHTML;
}
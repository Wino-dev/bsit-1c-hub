export function processSubjectSelect() {
  document.querySelectorAll('.subject-hl').forEach((subject) => {
    subject.addEventListener('click', () => {
      const subjectCode = subject.dataset.subjectCode;
      localStorage.setItem('subjectCode', subjectCode);
      location.href = 'reviewers-list.html';
    });
  })
}
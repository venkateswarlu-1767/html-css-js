
function filterPrograms(inputId, gridId) {
  const q = document.getElementById(inputId).value.toLowerCase().trim();
  document.querySelectorAll(`#${gridId} .program-card`).forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(q) ? "" : "none";
  });
}

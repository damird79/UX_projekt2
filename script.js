function toggleCard(index) {
  const card = document.getElementById(`card-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  const isExpanded = card.classList.contains('expanded');

  card.classList.toggle('expanded');
  icon.textContent = isExpanded ? '+' : '−';
}

function updatePrice(value) {
  removeChip('pris');

  const chip = document.createElement('div');
  chip.className = 'chip';
  chip.setAttribute('data-type', 'pris');
  chip.innerHTML = `${value}kr <span onclick="removeChip('pris')">×</span>`;

  document.getElementById('searchChips').appendChild(chip);
}

function removeChip(type) {
  const chip = document.querySelector(`.chip[data-type="${type}"]`);
  if (chip) chip.remove();
}


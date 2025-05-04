function toggleCard(index) {
    const card = document.getElementById(`card-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const button = card.previousElementSibling;
    const isExpanded = card.classList.contains('expanded');

    card.classList.toggle('expanded');
    button.classList.toggle('active', !isExpanded);
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

    const buttons = document.querySelectorAll(`button[data-type="${type}"]`);
    buttons.forEach(btn => btn.classList.remove('active'));
}

function toggleChip(type) {
    const existing = document.querySelector(`.chip[data-type="${type}"]`);
    const buttons = document.querySelectorAll(`button[data-type="${type}"]`);

    if (existing) {
        existing.remove();
        buttons.forEach(btn => btn.classList.remove('active'));
    } else {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.setAttribute('data-type', type);
        chip.innerHTML = `${type} <span onclick="removeChip('${type}')">×</span>`;
        document.getElementById('searchChips').appendChild(chip);
        buttons.forEach(btn => btn.classList.add('active'));
    }
}

// Expandera och fäll ihop valkort (t.ex. Pris, Tema, Kost...)
function toggleCard(index) {
    const card = document.getElementById(`card-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const button = card.previousElementSibling;
    const isExpanded = card.classList.contains('expanded');

    card.classList.toggle('expanded');
    button.classList.toggle('active', !isExpanded);
    icon.textContent = isExpanded ? '+' : '−';
}

// Uppdatera prischip
function updatePrice(value) {
    removeChip('pris');

    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.setAttribute('data-type', 'pris');
    chip.innerHTML = `${value}kr <span onclick="removeChip('pris')">×</span>`;

    document.getElementById('searchChips').appendChild(chip);
}

// Ta bort ett chip
function removeChip(type) {
    const chip = document.querySelector(`.chip[data-type="${type}"]`);
    if (chip) chip.remove();

    const buttons = document.querySelectorAll(`button[data-type="${type}"]`);
    buttons.forEach(btn => btn.classList.remove('active'));
}

// Lägg till eller ta bort ett chip (används för alla knappar)
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

// Visa/dölj undermeny (t.ex. Fisk)
function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    const button = submenu.previousElementSibling;
    const isVisible = submenu.style.display === 'flex';

    submenu.style.display = isVisible ? 'none' : 'flex';
    submenu.style.flexWrap = 'wrap';
    submenu.style.gap = '0.5rem';
    submenu.style.marginTop = '0.5rem';

    // Lägg till/ta bort "active"-klassen för att färga knappen röd
    button.classList.toggle('active', !isVisible);
}


document.getElementById('searchForm').addEventListener('submit', function (e) {
    const chips = document.querySelectorAll('.chip');
    const filters = [];

    chips.forEach(chip => {
        filters.push(chip.getAttribute('data-type'));
    });

    document.getElementById('filterInput').value = filters.join(',');
});

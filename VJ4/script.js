function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

function toggleSubmenu(element) {
    var allDropdownItems = document.querySelectorAll('.dropdown-item');
    allDropdownItems.forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });
    element.classList.toggle('active');
}

'use strict';

// Opening or closing side bar
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Activating Modal-testimonial
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
};

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    });
}

// Activating close button in modal-testimonial
modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

// Activating Filter Select and filtering options
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

// Toggle dropdown for category selection
select.addEventListener('click', function () {
    elementToggleFunc(this);
});

// Filter function
const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        const itemCategory = filterItems[i].dataset.category.toLowerCase().trim();

        if (selectedValue === "all" || selectedValue === itemCategory) {
            filterItems[i].classList.add('active'); // Show matching items
        } else {
            filterItems[i].classList.remove('active'); // Hide non-matching items
        }
    }
};

// Handle dropdown selection
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function () {
        let selectedValue = this.innerText.toLowerCase().trim();
        selectValue.innerText = this.innerText; // Update dropdown text
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}

// Enabling filter button for larger screens
let lastClickedBtn = filterBtn[0]; // Default to the first button

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function () {
        const selectedValue = this.innerText.toLowerCase().trim();
        selectValue.innerText = this.innerText; // Update filter dropdown
        filterFunc(selectedValue); // Apply filter logic

        // Highlight the active button
        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;
    });
}

// Enabling Contact Form
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else {
            formBtn.setAttribute('disabled', '');
        }
    });
}

// Enabling Page Navigation
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
        for (let j = 0; j < pages.length; j++) {
            if (this.innerHTML.toLowerCase() == pages[j].dataset.page) {
                pages[j].classList.add('active');
                navigationLinks[j].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[j].classList.remove('active');
                navigationLinks[j].classList.remove('active');
            }
        }
    });
}

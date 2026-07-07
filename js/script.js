
// Hero Section Typed.js
var typed = new Typed('#typed', {
    strings: ['Software Engineer (.NET)', 'Having 4+ Years of Experience', 'BSCS Graduate', 'Desktop and Web Application Developer'],
    backSpeed: 50,
    typeSpeed: 50,
    smartBackspace: true,
    loop: true
});

// Portfolio
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
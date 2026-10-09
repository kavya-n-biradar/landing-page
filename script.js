// Buy Now popup
document.querySelectorAll('.btn').forEach(btn => {
    if(btn.textContent.includes('Buy') || btn.textContent.includes('Choose') || btn.textContent.includes('Get Started')) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Thank you for your interest! This is a demo. Order functionality will be added soon.');
        });
    }
});
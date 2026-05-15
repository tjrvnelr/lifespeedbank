document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

document.getElementById('savingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Savings account application submitted successfully! We will contact you soon.');
    this.reset();
});
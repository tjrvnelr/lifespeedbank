document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

document.getElementById('creditForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Credit card application submitted successfully! You will receive a decision within 60 seconds.');
    this.reset();
});
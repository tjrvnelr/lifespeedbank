document.getElementById('signOutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to sign out?')) {
        window.location.href = '/public/index.html';
    }
});
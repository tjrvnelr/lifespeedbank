document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault()
    
    const fullName = document.getElementById('fullName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    if (!fullName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.')
        return
    }

    const emailPattern = /\S+@\S+\.\S+/
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.')
        return
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.')
        return
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.')
        return
    }

    alert('Sign up successful.')
    window.location.href = 'signin.html'
})
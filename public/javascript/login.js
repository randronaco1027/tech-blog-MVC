async function login(event) {
    event.preventDefault()

    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim()

    if (username && password) {
        const loginConfirm = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                username, password
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (loginConfirm.ok) {
            document.location.replace('/dashboard/')
        } else {
            alert(loginConfirm.statusText)
        }
    }
}

async function login(event) {
    event.preventDefault()

    const username = document.querySelector('#newUsername').value.trim()
    const password = document.querySelector('#newPassword').value.trim()
    const email = document.querySelector('#newEmail')

    if (username && password && email) {
        const signupConfirm = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                username, password, email
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (signupConfirm.ok) {
            document.location.replace('/dashboard/')
        } else {
            alert(signupConfirm.statusText)
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', login)

document.querySelector('.signup-form').addEventListener('submit', login)
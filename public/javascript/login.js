async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

async function signup(event) {
    event.preventDefault()

    const username = document.querySelector('#newUsername').value.trim()
    const password = document.querySelector('#newPassword').value.trim()
    const email = document.querySelector('#newEmail').value.trim()

    if (username && password && email) {
        const response = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                username, password, email
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler)

document.querySelector('.signup-form').addEventListener('submit', signup)
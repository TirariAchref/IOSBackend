
//UPDATE User
const update = document.querySelector('#update-button') 

update.addEventListener('click', _ => {
    fetch('/user', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nom: 'dbd',
        prenom: 'prenom',
        email: 'email',
        password: 'password',
        phone: 'phone',
        categorieclient: 'categorieclient'
      })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        console.log(response)
      })
  })
 

  //DELETE USER
  const messageDiv = document.querySelector('#message')
  const deleteButton = document.querySelector('#delete-button')

  deleteButton.addEventListener('click', _ => {
    fetch('/user',{
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nom: 'dbd'
      })
    })
    .then(res => {
          
        if (res.ok) return res.json()
      })
   .then(response => {
      if (response === 'No user to delete') {
        messageDiv.textContent = 'No user to delete'
      } else {
        window.location.reload(true)
      }
    })
   
  })

 
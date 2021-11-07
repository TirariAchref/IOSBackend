
//////////Crud messagerie


  //DELETE messagerie
  const messageDivmessagerie= document.querySelector('#messagemessagerie')
  const deleteButtonmessagerie = document.querySelector('#delete-messagerie')

  deleteButtonmessagerie.addEventListener('click', _ => {
    fetch('/messagerieinsert',{
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'achref'
      })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
   .then(response => {
      if (response === 'No messagerie to delete') {
        messageDivmessagerie.textContent = 'No messagerie to delete'
      } else {
        window.location.reload(true)
      }
    })
   
  })

   //UPDATE reponse
const updatemessagerie = document.querySelector('#updatemessagerie') 

updatemessagerie.addEventListener('click', _ => {
    fetch('/messagerieinsert', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'hello',
        object: 'object',
        datecreation: 'datecreation',
        from: 'from'
      })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        console.log(response)
      })
  })

 

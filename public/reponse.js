
//////////Crud reponse 


  //DELETE reponse
  const messageDivreponse= document.querySelector('#messagereponse')
  const deleteButtonreponse = document.querySelector('#delete-reponse')

  deleteButtonreponse.addEventListener('click', _ => {
    fetch('/reponseinsert',{
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: 'achref'
      })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
   .then(response => {
      if (response === 'No reponse to delete') {
        messageDivreponse.textContent = 'No reponse to delete'
      } else {
        window.location.reload(true)
      }
    })
   
  })

   //UPDATE reponse
const updatereponse = document.querySelector('#updatereponse') 

updatereponse.addEventListener('click', _ => {
    fetch('/reponseinsert', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: 'achref',
        datecreation: '12/06/2021'
      })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        console.log(response)
      })
  })

 

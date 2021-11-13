
//////////Crud event 


  //DELETE event
  const messageDivevent = document.querySelector('#eventquestion')
  const deleteButtonevent= document.querySelector('#delete-event')

  deleteButtonevent.addEventListener('click', _ => {
    fetch('/eventinsert',{
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'achref'
      })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
   .then(response => {
      if (response === 'No event to delete') {
        messageDivevent.textContent = 'No event to delete'
      } else {
        window.location.reload(true)
      }
    })
   
  })

   //UPDATE event
const updateevent = document.querySelector('#updateevent') 

updateevent.addEventListener('click', _ => {
    fetch('/eventinsert', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'achref',
        description : 'description',
        money: 'money',
        moneyreached: 'moneyreached' ,
        datefin: 'datefin' 
      })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        console.log(response)
      })
  })

 

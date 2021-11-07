
//////////Crud Question 


  //DELETE question
  const messageDivquestion = document.querySelector('#messagequestion')
  const deleteButtonquestion = document.querySelector('#delete-question')

  deleteButtonquestion.addEventListener('click', _ => {
    fetch('/questioninsert',{
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
      if (response === 'No question to delete') {
        messageDivquestion.textContent = 'No question to delete'
      } else {
        window.location.reload(true)
      }
    })
   
  })

   //UPDATE question
const updatequestion = document.querySelector('#updatequestion') 

updatequestion.addEventListener('click', _ => {
    fetch('/questioninsert', {
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

 

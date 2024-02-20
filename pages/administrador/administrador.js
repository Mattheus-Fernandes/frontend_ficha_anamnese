const form = document.getElementById("form")
const btnSend = document.querySelector("button")
const msgError = document.querySelector(".msgError")

const url = "http://localhost:8000/api/login/admin"


const p = document.createElement("p")

const showMsgError = (msg) => {

  p.textContent = msg

  msgError.append(p)

}

btnSend.addEventListener("click", async (e) => {
  e.preventDefault()

  const admin = {
    email: form.email.value,
    password: form.password.value
  }
  
  try {

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(admin)
    })

    const data = await res.json()

    if(data.errors){
      const errors = Object.values(data)
      
      errors[0].forEach(e => {
        
        showMsgError(Object.values(e))

      })
    }else {
      window.location.href = "../dashboard/dashboard.html"
    }


  }catch(error){
    console.log(error)
  }

})
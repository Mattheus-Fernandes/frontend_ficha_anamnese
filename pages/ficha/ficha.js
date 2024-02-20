const form = document.getElementById("form")
const msgError = document.getElementById("msgError")
const btnSend = document.querySelector("button")


const url = "http://localhost:8000/api/register/client"


const p = document.createElement("p")

const showMsgError = (total) => {

  p.textContent = `Verifique a sua ficha faltam preencher ${total} item/itens`
  msgError.append(p)

}

btnSend.addEventListener("click", async (e) => {
  e.preventDefault()

  const client = {
    name: form.name.value,
    lastName: form.lastName.value,
    age: form.age.value,
    adress: form.adress.value,
    whatsapp: form.whatsapp.value,
    rg: form.rg.value,
    cpf: form.cpf.value,
    email: form.email.value,
    met: form.met.value,
    diabetes: form.diabetes.value,
    allergy: form.allergy.value,
    allergySpecify: form.allergySpecify.value,
    cuticle: form.cuticle.value,
    ringworm: form.ringworm.value,
    ringwormSpecify: form.ringwormSpecify.value,
    useMedicine: form.useMedicine.value,
    nailBiting: form.nailBiting.value,
    ingrowToenail: form.ingrowToenail.value,
    blade: form.blade.value,
    bladeSpecify: form.bladeSpecify.value,
    sport: form.sport.value,
    poolAndSea: form.poolAndSea.value,
    whyStretching: form.whyStretching.value,
    typeStretching: form.typeStretching.value,
    nailSize: form.nailSize.value,
    nailFormat: form.nailFormat.value,
    details: form.details.value,
    terms: form.terms.value

  }

  try {

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(client)
    })

    const data = await res.json()


    if (data.errors) {

      const totalErrors = data.errors.length

      showMsgError(totalErrors)

    } else {
      window.location.href = "../success/success.html"
    }


  } catch (error) {
    console.log(error)
  }

})

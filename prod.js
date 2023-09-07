const API_URL = 'https://striveschool-api.herokuapp.com/api/product/'
const params = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDBlOGU4NDIyNzAwMTRjMzI2NzciLCJpYXQiOjE2OTQxMDczMDgsImV4cCI6MTY5NTMxNjkwOH0.XFPopLHaeagWTIdKitrKwxpyrk3WYkPJOF67nJpkn-E",
        'Content-type': 'application/json; charset=UTF-8'
    }
}

let productData = ""


async function getProduct() {
    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    const id = urlParams.get('id')

    try {
        const res = await fetch(`${API_URL}${id}`, params)
        data = await res.json()
        displayProduct(data)
    } catch (err) {
        throw new Error(err)
    }
}

function displayProduct(prod_data) {
    const tableBody = document.getElementById('prod');
    tableBody.innerHTML = ''

    const row = `

      <div class="card" style="width: 18rem;">
      <img src="${data.imageUrl}" class="card-img-top" alt="${data.name}">
      <div class="card-body" id=${data._id}>
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.description}</p>
          <a class="btn btn-primary" href="#">Acquista ora a ${data.price} €</a>
      </div>
  </div>
    `

    tableBody.innerHTML += row
}

getProduct()
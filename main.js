const API_URL = 'https://striveschool-api.herokuapp.com/api/product/'
const params = {

    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDBlOGU4NDIyNzAwMTRjMzI2NzciLCJpYXQiOjE2OTQxMDczMDgsImV4cCI6MTY5NTMxNjkwOH0.XFPopLHaeagWTIdKitrKwxpyrk3WYkPJOF67nJpkn-E",
        'Content-type': 'application/json; charset=UTF-8'
    }
}

const put_params = {
    method: 'PUT',
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDBlOGU4NDIyNzAwMTRjMzI2NzciLCJpYXQiOjE2OTQxMDczMDgsImV4cCI6MTY5NTMxNjkwOH0.XFPopLHaeagWTIdKitrKwxpyrk3WYkPJOF67nJpkn-E",
        'Content-type': 'application/json; charset=UTF-8'
    }
}

let data = ""

async function getProduct() {
    try {
        const res = await fetch(`${API_URL}`, params);

        data = await res.json()
        console.log(data)
        displayProduct(data)

    } catch (err) {
        throw new Error(err);
    }
}

function displayProduct(datas) {
    const products = document.getElementById('products')
    products.innerHTML = ''

    datas.forEach(data => {

        const row = `
        <div class="col">
                <div class="card" style="width: 18rem;">
                <img src="${data.imageUrl}" class="card-img-top" alt="${data.name}">
                <div class="card-body" id=${data._id}>
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.description}</p>
                    <a class="btn btn-primary" href="prod.html?name=${data.name}&id=${data._id}">Vai al prodotto</a>
                </div>
            </div>
            </div>
        `

        products.innerHTML += row
    });

}

function goAddProduct() {
    window.location.href = "back.html"
}

function goEditProduct() {
    window.location.href = "edit.html"
}

getProduct()
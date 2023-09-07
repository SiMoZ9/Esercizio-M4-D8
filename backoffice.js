
const API_URL = 'https://striveschool-api.herokuapp.com/api/product/'

const form = document.getElementById("productForm")
const nameInput = document.getElementById("productName")
const descInput = document.getElementById("productDescription")
const priceInput = document.getElementById("productPrice")
const brandInput = document.getElementById("productBrand")
const imageInput = document.getElementById("productImg")


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const isFormValid = handelFormValidation();


    if (!isFormValid) return false;
    const product = {
        name: nameInput.value,
        description: descInput.value,
        price: priceInput.value,
        brand: brandInput.value,
        imageUrl: imageInput.value
    }

    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDBlOGU4NDIyNzAwMTRjMzI2NzciLCJpYXQiOjE2OTQxMDczMDgsImV4cCI6MTY5NTMxNjkwOH0.XFPopLHaeagWTIdKitrKwxpyrk3WYkPJOF67nJpkn-E",
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        response.ok ? window.location.href = 'front.html' : console.log(response.json());

    } catch (e) {
        alert("Save error", e);
    }

    console.log(isFormValid);
})

function handelFormValidation() {

    const validation = validateForm()
    let isValid = true;

    if (!validation.isValid) {

        for (const field in validation.errors) {
            const errorElement = document.getElementById(`${field}-error`)
            errorElement.textContent = '';
            errorElement.textContent = validation.errors[field]
        }

        isValid = false

    }

    return isValid

}

function validateForm() {
    const errors = {}

    const name = document.getElementById("productName").value
    const desc = document.getElementById("productDescription").value
    const price = document.getElementById("productPrice").value
    const brand = document.getElementById("productBrand").value
    const image = document.getElementById("productImg").value

    if (!name) errors.name = "Il campo nome è obbligatorio."
    else errors.name = "";

    if (!desc) errors.username = "Il campo username è obbligatorio."
    else errors.username = "";

    if (!price) errors.phone = "Il campo telefono è obbligatorio."
    else errors.phone = "";

    if (!brand) errors.city = "Il campo città è obbligatorio."
    else errors.city = "";

    return {
        isValid: Object.values(errors).every(value => value === ''),
        errors
    }
}


const goBack = () => window.location.href = "front.html";

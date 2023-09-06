const registerForm = document.querySelector(".register-form");
const allInputs = registerForm.querySelectorAll("INPUT");
let profile = "";

// Read File
allInputs[3].onchange = function () {
    let fReader = new FileReader();

    fReader.readAsDataURL(allInputs[3].files[0]);
    fReader.onload = function (e) {
        profile = e.target.result;
    }
}

// Insert Data
registerForm.onsubmit = (e) => {
    e.preventDefault();

    const data = {
        name: allInputs[0].value,
        mobile: allInputs[1].value,
        dob: allInputs[2].value,
        profile: profile == "" ? "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg" : profile,
        email: allInputs[4].value,
        password: allInputs[5].value
    }

    // Register Route request
    fetch('http://localhost:8080/register', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then((response) => {
        response.json().then((success) => {
            console.log(success);
        })
    }).catch((error) => {
        console.log(error);
    })
}

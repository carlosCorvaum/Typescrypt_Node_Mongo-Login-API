

document.querySelector("#input").addEventListener("click", () => {

    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;
    console.log(email, pass);

    fetch("http://localhost:3000/login",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ email: email, pass: pass })
        })
        .then(function (res) {
            res.json()
                .then((data) => {
                    console.log(data)
                })
        })
        .catch(function (res) { console.log(res) })
});



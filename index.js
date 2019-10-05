//alert("hello world");
function login() {
    //alert("saludar ");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username: username,
        password: password,
        email:username
    };
    //alert("saludar "+nombre);
    //document.getElementById("placeholder").textContent="hola  "+nombre;
    console.log(data);
    fetch(`${api_path}/login`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error))
        ;
}
window.onload = function () {
    //console.log("probando debug");
    //console.warn("probando debug");
    document.getElementById("btnlogin")
        .addEventListener('click', function () {
            //alert("hola persona");
            login();
            
        });

}
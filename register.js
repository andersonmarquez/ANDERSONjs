
function registrarse(){
        var name = document.getElementById("name").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
       

        var data = {
            name:name,
            username: username,
            password: password,
            email:username
        };
        //alert("saludar "+nombre);
        //document.getElementById("placeholder").textContent="hola  "+nombre;
        console.log(data);
        fetch(`${api_path}/register`, {
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
             
                registrarse();
                
            });
    
    }

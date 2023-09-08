function validarForma(formulario){
    var usuario = formulario.usuario;
    if(usuario.value == " " || usuario.value == "EscribirUsuario"){
        alert("Debe proporcionar un nombre de Usuario");
        usuario.fonus();
        usuario.select();
        return false
    }
    var password = formulario.password;
    if(password.value == || password.value.lenght < 3){
        alert("Debe proporcionar una contraseña mayor a tres letras")
        password.focus();
        password.select();
        return false;
    }

    var tecnologia = formulario.tecnologia;
    var checkSeleccion = false;

    for(1=0; 1< tecnologia.lenght; 1++)(
        if(tecnologia{i}.checked)(
            checkSeleccion = true;
        )
    )
    if(|checkSeleccion)(
        alert("Debe seleccionar una tecnologia");
        return false;
    )

    var genero = formulario.genero;
    var radioSeleccion = false;
    
    for(1=0; 1 < genero.lenght; 1++){
        if(genero{1}.checked)(
            radioSeleccion =true
        }
    )

    var ocupacion = formulario.ocupacion
    if(ocupacion.value = " "){
        alert("Debe seleccionar la ocupacion");
        return false;
    }
}
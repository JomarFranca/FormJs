
function botao(event) {
    console.log("evento: ", event)
    event.preventDefault();
    var fnome = document.getElementById("fname").value;
    var snome = document.getElementById("fname2").value;
    var carta = document.getElementById("femail").value;
    var dev = document.getElementById("curso").value;
    var exp = document.getElementById("exp1").value;
    var esp = document.getElementById("rad").value;

    console.log("qualquer coisa", document.getElementsByName("exper"));

    document.getElementById("resultado").style.display='block';
    document.getElementById("nome").innerHTML = "Nome: " + fnome + " " + snome;
    document.getElementById("resultado").style.display='block';
    document.getElementById("mail").innerHTML = "Email: " + carta;
    document.getElementById("resultado").style.display='block';
    document.getElementById("fcurso").innerHTML = "Experiência: " + dev;
    document.getElementById("resultado").style.display='block';
    document.getElementById("experir").innerHTML = "Curso: " + exp;
    document.getElementById("resultado").style.display='block';
    document.getElementById("conhecimento").innerHTML = "Especialidade: " + esp;
}


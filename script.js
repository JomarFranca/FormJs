
function botao() {
    // event.preventDefault();
    var fnome = document.getElementById("fname").value;
    var snome = document.getElementById("fname2").value;
    var carta = document.getElementById("femail").value;
    var dev = document.getElementById("curso").value;
    var exp = document.getElementById("checkbox").value;
    var esp = document.getElementById("rad").value;

    document.write ("Nome:" + fnome + " " + snome + "<br>");
    document.write ("Email: " + carta + "<br>");
    document.write ("Curso:" + dev + "<br>");
    document.write ("Experiência: " + exp + "<br>");
    document.write ("Especialização: " + esp + "<br>");
}


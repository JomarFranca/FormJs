
function botao(event) {
    // console.log("evento: ", event)
    event.preventDefault();

    var fnome = document.getElementById("fname").value;
    var snome = document.getElementById("fname2").value;

        document.getElementById("resultado").style.display='block';
            document.getElementById("nome").innerHTML = "Nome: " + fnome + " " + snome;

    var carta = document.getElementById("femail").value;
        document.getElementById("resultado").style.display='block';
            document.getElementById("mail").innerHTML = "Email: " + carta;

    var dev = document.getElementById("curso").value;
        document.getElementById("resultado").style.display='block';
            document.getElementById("fcurso").innerHTML = "Experiência: " + dev;

    var exp = document.getElementsByName("exper")
    var xp = "";
    var traco = "-";
        for (let i = 0; i < exp.length; i++) {
            if(exp[i].checked) {
                xp = xp + exp[i].value + " ";
            }
        }    
        console.log("qualquer coisa", xp);
        document.getElementById("resultado").style.display='block';
            document.getElementById("experiencia-nivel").innerHTML = "Curso: " + xp;

    var esp = document.getElementsByName("devweb");
    var txt = "";
        for(let i=0; i<esp.length;i++){
            if(esp[i].checked) {
                txt = txt + esp[i].value + " ";
            }
        }
        // console.log("porra ", esp);
        // console.log("caralho ", txt);
            document.getElementById("resultado").style.display='block';
            document.getElementById("conhecimento").innerHTML = "Especialidade: " + txt;
};

function limpar(){
    document.getElementById("resultado").style.display='none';
}
function insert(num) {
    $(function(){
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
        $('#resultado').css({color: 'black', 'text-align': 'right', background: 'white'});
    });
}

function clean() {
    $(function(){
        document.getElementById('resultado').innerHTML = "";
        $('#resultado').css("background", "white");
    });

}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        $(function(){
            $('#resultado').css({color: 'red', 'text-align': 'center', background: 'black'}).fadeOut(0);
            var msg = "I'm sorry, I'm afraid I can't do that";
            document.getElementById('resultado').innerHTML = msg;
            $('#resultado').fadeIn(3000);
        });       
    }
}
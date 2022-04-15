$(function () {
    $('.botao').click(function () {
        var msg = "I'm sorry, I'm afraid I can't do that";
        var vat = $('#resultado').text();
        if (vat != msg) {
            var vnv = $(this).text();
            var atl = `${vat}${vnv}`;
            $('#resultado').text(atl);
            $('#resultado').css({ color: 'black', 'text-align': 'right', background: 'white' });
        } else {
            var vnv = $(this).text();
            $('#resultado').text('');
            $('#resultado').text(vnv);
            $('#resultado').css({ color: 'black', 'text-align': 'right', background: 'white' });
        }
    });

    $('.clear').click(function () {
        $('#resultado').text("");
        $('#resultado').css({ color: 'black', 'text-align': 'right', background: 'white' });
    });

    $('.back').click(function () {
        var r = $('#resultado').text();
        var v = r.substring(0, $('#resultado').text().length - 1);
        $('#resultado').text(v);
    });

    $('.answer').click(function () {
        var res = $('#resultado').text();
        if (eval(res) != Infinity) {
            var r = eval(res);
            $('#resultado').text(r);
        } else if (res != '') {
            $('#resultado').css({ color: 'red', 'text-align': 'center', background: 'black' }).fadeOut(0);
            var msg = "I'm sorry, I'm afraid I can't do that";
            $('#resultado').text(msg);
            $('#resultado').fadeIn(3000);
        }
    });
});
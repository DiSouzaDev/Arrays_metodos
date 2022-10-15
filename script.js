function inicio() {
    function ex1() {
        var numeros = [];
        while (numeros.length < 20) {
            var novoNum = parseFloat(prompt('Digite um número:'));
            numeros.push(novoNum);
        }
        alert(numeros);
    }

    function ex2() {
        var menor = [];
        var maior = [];
        while (menor.length + maior.length < 12) {
            var novoNum = parseFloat(prompt('Digite um número:'));
            if (isNaN(novoNum)) {
                alert('Digite um valor válido.');
                ex2();
            } else if (novoNum < 50) {
                menor.push(novoNum);
            } else if (novoNum > 50) {
                maior.push(novoNum);
            } else {
                alert('Algo saiu errado, tente novamente!');
                ex2();
            }
        }
        var tudo = menor.concat(maior);
        alert(tudo);
    }

    function ex3(){
        var invDrofo = ['\nanel da invisibilidade', '\npar de botas mágicas', '\npar de botas mágicas', '\npoção do sono', '\npoção da inocência', '\npoção da inocência'];
        var invTopper = ['\ncapa da invisibilidade', '\npedra do despertar',  '\nvarinha das varinhas', '\npoção da inocência', '\npoção da mentira', '\npoção da mentira', '\npoção anti-inteligência'];

        alert('Drofo e Topper estão em uma aventura mágica. Eles se pepararam para ela com os seguintes ítens:');
        alert('Inventário de Topper: ' + invTopper + '\n\nInventário de Drofo: ' + invDrofo);

        alert('Topper consome uma de suas poções da mentira, agora ele pode saber quando alguém mente por 10 minutos.');
        invTopper.splice(5, 1);
        alert('Inventário de Topper: ' + invTopper);
        alert('Topper perdeu sua pedra do despertar. Como ele acordará sem se atrasar agora?');
        invTopper.splice(1, 1);
        alert('Inventário de Topper: ' + invTopper);
        alert('Topper ganhou um par de botas mágicas de Drofo, que não aguentava mais vê-lo tropeçar pelo caminho.');
        invTopper.splice(4, 0, '\npar de botas mágicas');
        invDrofo.splice(1, 1);
        alert('Inventário de Topper: ' + invTopper + '\n\nInventário de Drofo: ' + invDrofo);
        alert('Topper achou novos equipamentos enterrados em uma caverna, eles contém algumas gravuras elficas.');
        invTopper.splice(5, 0, '\nescudo mágico', '\nespada mágica');
        alert('Inventário de Topper: ' + invTopper);

        alert('Drofo, após dar um par de botas mágicas para Topper, ganha outra de um senhor mago. Imaginou que botas mágicas eram bem comuns.');
        invDrofo.splice(1, 0, '\npar de botas mágicas');
        alert('Inventário de Drofo: ' + invDrofo);
        alert('Em uma noite tendo dificuldades para dormir, Drofo toma sua poção do sono, popularmente chamada de chá de camomila.');
        invDrofo.splice(3, 1);
        alert('Inventário de Drofo: ' + invDrofo);
        alert('Drofo precisava conversar com homens fera, mas achava que seu raciocínio era rápido demais para eles, então toma a poção anti-inteligência de Tropper. Ele estava enguanado a respeito e falando de forma estranha, acaba passando vergonha. Topper riu descontroladamente ao se lembrar da situação.');
        invTopper.splice(6, 1);
        alert('Inventário de Drofo: ' + invDrofo + '\n\nInventário de Topper: ' + invTopper);
        alert('Atravessando as montanhas árduas de um vulcão, Drofo encontra um ovo que descobre ser de um dragão. Ele o pegou pois sempre quis um de estimação, mas a mãe com certeza irá sentir falta...');
        invDrofo.splice(6, 0, '\novo de dragão');
        alert('Inventário de Drofo: ' + invDrofo);
        alert('No caminho para seu destino, Drofo quis experimentar uma comidas exóticas para seu gosto. Escolheu uma coxinha para a viagem em uma lojinha. Topper não quis pedir nada.');
        invDrofo.splice(0, 0, '\ncoxinha');
        alert('Inventário de Drofo: ' + invDrofo);

        alert('Drofo e Topper chegaram ao seu destino e foram conferir o que haviam conseguido de novo em sua aventura. \n\nInventário de Topper: ' + invTopper + '\n\nTopper perdeu sua pedra favorita mas achou novos itens valiosos.');
        alert('Inventário de Drofo: ' + invDrofo + '\n\nDrofo achou uma coxinha mofando. Fora essa decepção, descobriu que um par botas mágicas valia mais do que ele imaginava, ele tinha dois pares. Os dois finalizam sua aventura satisfeitos, até um certo dragão lhes fazer uma visita. \n\nFim.');
        comeco();
    }

    function comeco() {
        var x = prompt("Qual exercício você quer visualizar? (Use os números de 1 a 3)");
        if (x == 1) {
            ex1();
        } else if (x == 2) {
            ex2();
        } else if (x == 3) {
            ex3();
        } else {
            alert("Insira um valor válido!");
            comeco();
        }
    }
    comeco();
}
inicio();
var numeroSecreto = parseInt(Math.random() * 1001);
while (chute != numeroSecreto) {
    var chute = prompt('Escolha entre 0 e 1000');
        
        if (chute == numeroSecreto) {
            alert('Parabéns você acertou!');

        } else if (chute > numeroSecreto) {
            alert('O número é menor!');


        } else if (chute < numeroSecreto) {
            alert('O número é maior!');


        }
    }

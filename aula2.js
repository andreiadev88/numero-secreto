var numeroSecreto = parseInt(Math.random() * 101);
while (chute != numeroSecreto) {
    var chute = prompt('Escolha entre 0 e 100');
        
        if (chute == numeroSecreto) {
            alert('Parabéns você acertou!');

        } else if (chute > numeroSecreto) {
            alert('O número é menor!');


        } else if (chute < numeroSecreto) {
            alert('O número é maior!');


        }
    }

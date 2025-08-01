
let jogador = "x";
let jogada;
let x = 0;
let o = 0;

document.getElementById('rebut').addEventListener('click', () => {
    document.querySelectorAll(".casa").forEach(casa => {
        casa.textContent = '';
        casa.style.pointerEvents = "auto";
        document.getElementById("status").style.visibility = 'hidden'
    })
})


//jogo apenas no front
function verificar() {
    const casas = document.querySelectorAll(".casa");
    const possibilidades = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < possibilidades.length; i++) {
        let [a, b, c] = possibilidades[i];

        let valA = casas[a].textContent;
        let valB = casas[b].textContent;
        let valC = casas[c].textContent;

        if (valA !== "" && valA === valB && valB === valC) {
            document.getElementById("status").textContent = `Jogador (${valA}) venceu!`;
            if (jogada == 'x') {
                x++;
                document.getElementById('vitoriasx').textContent = `vitórias: ${x}`
            } else {
                o++;
                document.getElementById('vitoriaso').textContent = `vitórias: ${o}`
            }
            document.getElementById("status").style.visibility = 'visible'
            casas.forEach(c => c.style.pointerEvents = "none");
            return;
        }
    }


    let deuVelha = true;
    for (let i = 0; i < casas.length; i++) {
        if (casas[i].textContent === "") {
            deuVelha = false;
            break;
        }
    }

    if (deuVelha) {
        document.getElementById("status").style.visibility = 'visible'
        document.getElementById("status").textContent = "Deu velha!";
    }
}



function trocar() {
    if (jogador == "x") {
        jogada = jogador;
        document.querySelector('.jogadorx').style.backgroundColor = 'transparent';
        document.querySelector('.jogadorx').style.border = "none";

        document.querySelector('.jogadoro').style.backgroundColor = 'rgba(74, 142, 6, 0.451)';
        document.querySelector('.jogadoro').style.border = "solid 2px rgb(46, 226, 43)";
        jogador = "o";
    } else {
        jogada = jogador;
        document.querySelector('.jogadoro').style.backgroundColor = 'transparent';
        document.querySelector('.jogadoro').style.border = "none";

        document.querySelector('.jogadorx').style.backgroundColor = 'rgba(48, 2, 91, 0.366)';
        document.querySelector('.jogadorx').style.border = "solid 2px blueviolet";
        jogador = "x";
    }
}


const casa = document.querySelectorAll(".casa").forEach(casa => {
    casa.addEventListener('click', () => {
        if (casa.textContent == "") {
            trocar();
            casa.textContent = jogada;
            if (jogada == "x") {
                casa.style.color = 'blueviolet';
            } else {
                casa.style.color = 'rgb(46, 226, 43)';
            }
            verificar()
        }

    })
});

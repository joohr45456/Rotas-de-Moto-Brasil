const rotasInfo = {
    logoSG: {
        titulo: "Estrada da Graciosa",
        descricao: "Trajeto histórico que liga Curitiba ao litoral com paisagens exuberantes da Mata Atlântica. Uma estrada que serpenteia a mata e o tempo.",
        imagem: "../fotosPaginaPrincipal/graciosaFoto.jpg"
    },
    logoSRS: {
        titulo: "Serra do Rio do Castro",
        descricao: "Subidas íngremes, curvas fechadas e um silêncio cortado apenas pelo ronco do motor. Para os que buscam altitude e introspecção.",
        imagem: "../fotosPaginaPrincipal/serraCastroFoto.jpg"
    },
    logoRM: {
        titulo: "Rota Romântica",
        descricao: "Cidades com herança alemã no coração do RS. Florestas, jardins floridos, arquitetura charmosa e clima europeu.",
        imagem: "../fotosPaginaPrincipal/rotaRomantica.jpg"
    },
    logoRS: {
        titulo: "Rota do Sol - RS",
        descricao: "Da serra ao mar, essa estrada atravessa cânions e vales até encontrar o Atlântico. Uma viagem entre extremos.",
        imagem: "../fotosPaginaPrincipal/rotaSolFoto.jpg"
    },
    logoEH: {
        titulo: "Estrada das Hortências",
        descricao: "Entre montanhas do Rio, hortênsias ladeiam a pista e a história do Império brasileiro dá boas-vindas em cada curva.",
        imagem: "../fotosPaginaPrincipal/hortenciasFoto.jpg"
    },
    logoERioSantos: {
        titulo: "Estrada Rio-Santos",
        descricao: "Uma das rotas mais cinematográficas do país. Praia, mirantes, floresta atlântica e curvas para quem dirige com o coração.",
        imagem: "../fotosPaginaPrincipal/rioSantosFoto.jpg"
    },
    logoRastroDaSerpente: {
        titulo: "Rastro da Serpente",
        descricao: "Com mais de 1200 curvas, é adrenalina pura entre PR e SP. Só para os corajosos que sabem dançar com a estrada.",
        imagem: "../fotosPaginaPrincipal/rastroSerpenteFoto.jpg"
    },
    logoER: {
        titulo: "Estrada Real",
        descricao: "Do ouro ao mar, essa é a maior rota turística do país. Vilarejos coloniais, cultura mineira e muita história pra contar.",
        imagem: "../fotosPaginaPrincipal/estradaRealFoto.jpg"
    },
    logoSerraCorvoBranco: {
        titulo: "Serra do Corvo Branco",
        descricao: "Entre paredões imensos e curvas de terra, a estrada mais ousada de SC desafia quem busca altitude e adrenalina.",
        imagem: "../fotosPaginaPrincipal/serraCorvoBrancofoto.jpg"
    },
    logoSerraCanastra: {
        titulo: "Serra da Canastra",
        descricao: "Entre paredões, cachoeiras e o berço do São Francisco, essa rota mineira mistura natureza bruta e tradição sertaneja.",
        imagem: "../fotosPaginaPrincipal/serraDaCanastrafoto.png"
    },
    logoRodoviaFantasma: {
        titulo: "Rodovia Fantasma",
        descricao: "No coração da Amazônia, lama, floresta e pontes precárias marcam essa estrada esquecida. Desafio bruto pra aventureiros de verdade.",
        imagem: "../fotosPaginaPrincipal/rodoviaFantasmafoto.png"
    }
    
};

const infoTitulo = document.getElementById("infoTitulo");
const infoDescricao = document.getElementById("infoDescricao");
const infoImagem = document.getElementById("infoImagem");
const infoBox = document.getElementById("infoRota");

document.querySelectorAll('.logo').forEach(logo => {
    const nomeClasse = Array.from(logo.classList).find(c => c.startsWith('logo') && c !== 'logo');

    logo.addEventListener('mouseover', () => {
        const rota = rotasInfo[nomeClasse];
        if (rota) {
            infoBox.classList.add("fade");

            setTimeout(() => {
                infoTitulo.textContent = rota.titulo;
                infoDescricao.textContent = rota.descricao;
                infoImagem.src = rota.imagem;
                infoImagem.style.display = "block";
                infoBox.classList.remove("fade");
            }, 150);
        }
    });

    logo.addEventListener('mouseout', () => {
        infoBox.classList.add("fade");

        setTimeout(() => {
            infoTitulo.textContent = "Passe o mouse sobre uma rota";
            infoDescricao.textContent = "Aqui você verá informações sobre cada trajeto.";
            infoImagem.style.display = "none";
            infoBox.classList.remove("fade");
        }, 150);
    });
});

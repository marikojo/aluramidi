function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
    document.querySelector('#som_tecla_clap').play();
    document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_clap').onclick = tocaSomClap;
document.querySelector('.tecla_tim').onclick = tocaSomTim;



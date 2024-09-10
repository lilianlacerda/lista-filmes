function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Para buscar, digite algo</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let sinopse = "";
    let tags = "";
    
    for(let dado of dados){
       nome = dado.nome.toLowerCase();
       sinopse = dado.sinopse.toLowerCase();
       tags = dado.tags.toLowerCase();
        if (nome.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
             <h2>
                <a href="#" target="_blank">${dado.nome}</a> 
                </h2>
                    <p class="descricao-meta">${dado.sinopse}</p>
                <a href=${dado.trailer} target="_blank" >Veja o Trailer clicando aqui</a>
            </div>
            `
        }
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    
    section.innerHTML = resultados;
}
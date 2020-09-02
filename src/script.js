/*
- Devem ser removidas as vagas inativas. 
- No caso em que não tem a localização, exibir "Remoto" no lugar.
*/

//pegando os dados da API
fetch('https://www.mocky.io/v2/5d6fb6b1310000f89166087b')
.then(function(response){
    return response.json();
})
.then(function(response){
    //response.vagas retorna um array
    var filtered = response.vagas.filter(isValid); // Utilizando método filter do javascript para filtrar os dados da API
    //console.log("Dados filtrados: ", filtered);
    var div_vagas = document.getElementById("vagas-api");
    var div_local = document.getElementById("local-api");
    
    filtered.forEach(function(vaga){
        var list = document.createElement("ul");
        var list_item = document.createElement("li");
        var text = document.createElement("a");
        var local = document.createElement("p");

        list.className = "list-vagas"

        text.innerHTML = vaga.cargo;
        text.href = vaga.link;
        text.className = "link-vagas"

        if(vaga.localizacao){
            local.innerHTML = vaga.localizacao.bairro + " - " + vaga.localizacao.cidade + ", " + vaga.localizacao.pais;
        }
        else{
            local.innerHTML = "Remoto"
        }

        list.appendChild(list_item);
        list_item.appendChild(text);
        div_vagas.appendChild(list);
        div_local.appendChild(local);
    })
})
.catch(() => {
    document.getElementsByClassName("vagas")[0].innerHTML = "Não foi possível carregar as vagas."
})

function isValid(value) {
    return value.ativa;
}
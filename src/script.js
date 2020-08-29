/*
- Devem ser removidas as vagas inativas. 
- No caso em que não tem a localização, exibir "Remoto" no lugar.
*/

var dataList = [];

//pegando os dados da API
fetch('https://www.mocky.io/v2/5d6fb6b1310000f89166087b')
.then(function(response){
    return response.json();
})
.then(function(response){
    //response.vagas retorna um array
    response.vagas.forEach(function(vaga){
        dataList.push(vaga);
    })

        var filtered = dataList.filter(isValid); // Utilizando método filter do javascript para filtrar os dados da API
        //console.log("Dados filtrados: ", filtered)
        var div_vagas = document.getElementById("vagas-api")
        var div_local = document.getElementById("local-api")
        
        filtered.forEach(function(vaga){
            var text = document.createElement("h4");
            var local = document.createElement("h4");

            text.innerHTML = vaga.cargo;
            if(vaga.localizacao){
                local.innerHTML = vaga.localizacao.bairro + "-" + vaga.localizacao.cidade + "," + vaga.localizacao.pais
            }
            else{
                local.innerHTML = "Remoto"
            }
            
            div_vagas.appendChild(text)
            div_local.appendChild(local)
        })

})

function isValid(value) {
    return value.ativa;
}
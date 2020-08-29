/*
- Devem ser removidas as vagas inativas. 
- No caso em que não tem a localização, exibir "Remoto" no lugar.
*/

var dataList = [];

//pegando os dados da API
fetch('http://www.mocky.io/v2/5d6fb6b1310000f89166087b')
.then(function(response){
    return response.json();
})
.then(function(response){
    //response.data retorna um array
    response.vagas.forEach(function(vaga){
        dataList.push(vaga);
    })
})

// fazendo isso para carregar o array por completo, senão o javascript 
// executa a próxima função considerando que ele está vazio
setTimeout(function(){
        console.log("dados recarregados", dataList);
},1500)

// Utilizando método filter do javascript para filtrar os dados da API
function isValid(value) {
    return value.ativa;
}

setTimeout(function(){
        var filtered = dataList.filter(isValid);
        console.log("Dados filtrados: ", filtered)
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
},1500)





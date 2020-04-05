// Analisando o HTML  abaixo, escreva o código necessário no controller para que o mesmo possa enviar ao template engine as variáveis necessárias para poder executar o código.

// Há, o nome da nossa view é checkout.

// Código HTML:
// <% for(let i =0; i < items.length; i++) {
//    <li>
//       <%= items[i] %>
//    </li>
// <% } %>

let produtos = ['Sorvete 250g', 'Bolacha de Chocolate', 'Maçã 500g'];
    let carrinhoController = {
      checkout: function (req,res){
        res.render("checkout", {items: produtos});
    }
}
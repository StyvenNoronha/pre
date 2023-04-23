function botao(link, texto) {
  return `
  <li> <a target="_blank" href="${link}">${texto}</a></li>  
`
}

function card(title, button, buttonn) {
  return `
   <!--Começo-->
      <div class="card">
        <div class="fundo">
          <h1>${title}</h1>
        </div>
        <div>
         <ul>
         ${button} 
         </ul>
        </div>
      </div>
      <!--Fim-->
  
  `
}

document.querySelector("#app").innerHTML = `
<main>

 ${card(
   "impressora",
   botao("www.google.com", "preto") + botao("www.google.com", "colorido")
 )}

 ${card(
   "impressora",
   botao("www.google.com", "preto") + botao("www.google.com", "colorido")
 )}
  ${card(
    "impressora",
    botao("www.google.com", "preto") + botao("www.google.com", "colorido")
  )}
   ${card(
     "impressora",
     botao("www.google.com", "preto") + botao("www.google.com", "colorido")
   )}
    ${card(
      "impressora",
      botao("www.google.com", "preto") + botao("www.google.com", "colorido")
    )}
    
  </main>
`

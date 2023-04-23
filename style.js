function botao(link, texto) {
  return `
  
    <a target="_blank" href="${link}">${texto}</a>
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
         ${buttonn}
         </ul>
        </div>
      </div>
      <!--Fim-->
  
  `
}

document.querySelector("#app").innerHTML = `
 ${card("impressora",botao("www.google.com","preto"),botao("#","colorido")) }
`

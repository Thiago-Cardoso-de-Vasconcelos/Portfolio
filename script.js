const ul = document.querySelector('ul')

function getApiGitHub() {
  fetch('https://api.github.com/users/Thiago-Cardoso-de-Vasconcelos/repos')
    .then(async res => {

      if(!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()

      data.map(item => {
        let li = document.createElement('li')

        li.innerHTML = `
        <strong class="titulo-projeto">${item.name.toUpperCase()}</strong>
        <span><strong>Descrição: </strong>${item.description}</span>
        <span><strong>Data Criação: </strong>
          ${Intl.DateTimeFormat('pt-BR')
            .format(new Date(item.created_at))}
        </span>
        <div class="conteiner-botao">
        <a href="${item.html_url}" target="_blank"><button class="botao" type="button">Ver Projeto Completo</button></a>
        </div>
      `
      ul.appendChild(li)

      })

    }).catch(e => console.log(e))
}

getApiGitHub()
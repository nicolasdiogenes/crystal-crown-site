const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
               "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// Notícias 
const noticias = [
  { titulo: "Crystal Crown despertará", mes: 11, ano: 2026,
    resumo: "Toda história começa em algum lugar. \n Um mundo cheio de possibilidades, segredos esperando para serem descobertos e histórias que ainda precisam ser contadas. \n Com o site finalmente no ar, gostaria de agradecer a todos que estão, até hoje, esperando pela verdadeira abertura do server. Com esta pequena abertura do site, posso afirmar que de hoje em diante a verdadeira lore do server será postada e vocês terão acesso aos verdadeiros criterios  de criação de personagem. \n Fiquem de olho nos chats e de pouco em pouco, tudo será revelado. ." },

  
];

const selMes = document.getElementById("m");
const selAno = document.getElementById("a");
const manchete = document.getElementById("man");
const lista = document.getElementById("lis");
const edicao = document.getElementById("ed");

meses.forEach((nome, i) => selMes.add(new Option(nome, i + 1)));
[...new Set(noticias.map(n => n.ano))].sort((x, y) => y - x)
  .forEach(ano => selAno.add(new Option(ano, ano)));

function mostrar() {
  const m = selMes.value;
  const a = selAno.value;

  edicao.textContent = (m || a)
    ? "Edição de " + [m ? meses[m - 1] : "", a].filter(Boolean).join(" de ")
    : "Todas as edições";

  const achadas = noticias
    .filter(n => (!m || n.mes == m) && (!a || n.ano == a))
    .sort((x, y) => y.ano - x.ano || y.mes - x.mes);

  if (achadas.length === 0) {
    manchete.innerHTML = "<p>Nenhuma notícia neste período.</p>";
    lista.innerHTML = "";
    return;
  }

  const [primeira, ...outras] = achadas;
  manchete.innerHTML = `
    <span class="d">${meses[primeira.mes - 1]} de ${primeira.ano}</span>
    <h2>${primeira.titulo}</h2>
    <p>${primeira.resumo}</p>`;

  lista.innerHTML = outras.map(n => `
    <div class="jj-n">
      <span class="d">${meses[n.mes - 1]} de ${n.ano}</span>
      <h3>${n.titulo}</h3>
      <p>${n.resumo}</p>
    </div>`).join("");
}

selMes.addEventListener("change", mostrar);
selAno.addEventListener("change", mostrar);
mostrar();
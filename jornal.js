const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
               "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// Notícias 
const noticias = [
  { titulo: "Crystal Crown despertará", mes: 10, ano: 2026,
    resumo: "RESUMO." },
  { titulo: "TÍTULO", mes: 10, ano: 2026,
    resumo: "dildo dildo dildo dildo diçldio diolo" },
  { titulo: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", mes: 10, ano: 2026,
    resumo: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA." },
  { titulo: "Vou surtar", mes: 10, ano: 2026,
    resumo: "Dildo." },
  { titulo: "aaaaaabbbccc", mes: 10, ano: 2026,
    resumo: "Beyoncé." }
  
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
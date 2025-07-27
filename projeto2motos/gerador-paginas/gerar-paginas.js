const fs = require('fs');
const path = require('path');

// 1. Lê os dados das rotas
const rotas = JSON.parse(fs.readFileSync(path.join(__dirname, 'dados', 'rotas.json'), 'utf-8'));

// 2. Lê o template
const template = fs.readFileSync(path.join(__dirname, 'templates', 'rota-template.html'), 'utf-8');

// 3. Função simples para substituir {{placeholders}} no template
function preencherTemplate(tmpl, dados) {
  let html = tmpl;

  // Substitui propriedades simples
  for (const key in dados) {
    if (typeof dados[key] === 'string') {
      const regex = new RegExp(`{{${key}}}`, 'g');
      html = html.replace(regex, dados[key]);
    }
  }

  // Substituir lista de imagens manualmente (porque é array)
  if (Array.isArray(dados.imagens)) {
    const imgsHtml = dados.imagens.map(img => `<img src="../imagens/${img}" alt="Imagem da Rota ${dados.nome}"/>`).join('\n');
    html = html.replace(/{{#imagens}}[\s\S]*{{\/imagens}}/, imgsHtml);
  }

  return html;
}

// 4. Criar pasta para salvar as páginas, se não existir
const pastaSaida = path.join(__dirname, '..', 'PáginasRotas');
if (!fs.existsSync(pastaSaida)) {
  fs.mkdirSync(pastaSaida);
}

// 5. Gerar uma página pra cada rota
rotas.forEach(rota => {
  const html = preencherTemplate(template, rota);
  // Criar nome do arquivo, ex: "serra-da-graciosa.html"
  const nomeArquivo = rota.nome.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '.html';

  fs.writeFileSync(path.join(pastaSaida, nomeArquivo), html, 'utf-8');
  console.log(`Página gerada: ${nomeArquivo}`);
});

(function () {
  if (document.getElementById('pacotes')) return;

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'pacotes.css';
  document.head.appendChild(link);

  function addNav(selector) {
    var box = document.querySelector(selector);
    if (!box || box.querySelector('a[href="#pacotes"]')) return;
    var ref = box.querySelector('a[href="#ferramentas"]');
    var a = document.createElement('a');
    a.href = '#pacotes';
    a.textContent = 'Pacotes';
    if (ref) box.insertBefore(a, ref);
    else box.appendChild(a);
  }
  addNav('.nav-links');
  addNav('#mobileMenu');

  var html = ''
    + '<section id="pacotes"><div class="wrap">'
    + '<span class="eyebrow">Investimento</span>'
    + '<h2 class="section-title">Servi\u00e7os e pacotes</h2>'
    + '<p class="pacotes-lede">Valores de refer\u00eancia para facilitar o primeiro contato. Cada projeto pode ser ajustado conforme dura\u00e7\u00e3o, deslocamento, equipe e complexidade da produ\u00e7\u00e3o.</p>'
    + '<div class="price-grid">'
    + '<article class="price-card card"><span class="eyebrow">Entrada</span><h3>Essencial</h3>'
    + '<div class="price-value">R$ 650<small>/produ\u00e7\u00e3o</small></div>'
    + '<p class="price-note">Para um primeiro conte\u00fado com entrega r\u00e1pida.</p>'
    + '<ul class="price-list"><li>At\u00e9 2h de capta\u00e7\u00e3o</li><li>1 v\u00eddeo vertical de at\u00e9 60s</li><li>Edi\u00e7\u00e3o completa para Reels</li><li>Corre\u00e7\u00e3o de cor e \u00e1udio</li><li>Entrega em at\u00e9 5 dias \u00fateis</li></ul>'
    + '<a class="btn-pack ghost" href="https://wa.me/5511988946840?text=Ol%C3%A1%20Zorieuq!%20Tenho%20interesse%20no%20Pacote%20Essencial." target="_blank" rel="noopener">Solicitar or\u00e7amento</a></article>'
    + '<article class="price-card card featured"><span class="eyebrow">Mais pedido</span><h3>Profissional</h3>'
    + '<div class="price-value">R$ 1.800<small>/produ\u00e7\u00e3o</small></div>'
    + '<p class="price-note">Conte\u00fado completo para campanha ou perfil.</p>'
    + '<ul class="price-list"><li>At\u00e9 4h de capta\u00e7\u00e3o</li><li>3 v\u00eddeos verticais</li><li>10 fotos tratadas</li><li>Dire\u00e7\u00e3o de cena e roteiro simples</li><li>Cor, \u00e1udio e vers\u00f5es para stories</li><li>Entrega em at\u00e9 7 dias \u00fateis</li></ul>'
    + '<a class="btn-pack" href="https://wa.me/5511988946840?text=Ol%C3%A1%20Zorieuq!%20Tenho%20interesse%20no%20Pacote%20Profissional." target="_blank" rel="noopener">Quero este pacote</a></article>'
    + '<article class="price-card card"><span class="eyebrow">Completo</span><h3>Premium</h3>'
    + '<div class="price-value">R$ 3.500<small>/produ\u00e7\u00e3o</small></div>'
    + '<p class="price-note">Dia de produ\u00e7\u00e3o com dire\u00e7\u00e3o criativa.</p>'
    + '<ul class="price-list"><li>At\u00e9 8h de capta\u00e7\u00e3o</li><li>5 v\u00eddeos verticais</li><li>20 fotos tratadas</li><li>Dire\u00e7\u00e3o criativa e roteiro</li><li>\u00c1udio dedicado, motion e cortes para an\u00fancio</li><li>Entrega priorit\u00e1ria</li></ul>'
    + '<a class="btn-pack ghost" href="https://wa.me/5511988946840?text=Ol%C3%A1%20Zorieuq!%20Tenho%20interesse%20no%20Pacote%20Premium." target="_blank" rel="noopener">Montar meu projeto</a></article>'
    + '</div>'
    + '<p class="price-disclaimer">* Valores meramente ilustrativos. Deslocamento, loca\u00e7\u00e3o, atores, equipamentos adicionais e produ\u00e7\u00f5es especiais podem alterar o investimento final.</p>'
    + '</div></section>';

  var contato = document.getElementById('contato');
  if (!contato) return;
  contato.insertAdjacentHTML('beforebegin', html);
})();

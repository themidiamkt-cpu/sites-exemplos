/* Forma Bruta — brutalist, statement, dark + electric accent */
function FormaSite() {
  const c = formaStyles;
  const projects = [
    { n: '01', name: 'NÓ', sub: 'Edifício multifamiliar / Vila Madalena', year: '2025', status: 'EM OBRA', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&auto=format&fit=crop&q=85' },
    { n: '02', name: 'BLOCO 32', sub: 'Reforma de armazém / Brás', year: '2024', status: 'CONCLUÍDO', img: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1400&auto=format&fit=crop&q=85' },
    { n: '03', name: 'CASA RAIZ', sub: 'Residência / Tiradentes, MG', year: '2024', status: 'CONCLUÍDO', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&auto=format&fit=crop&q=85' },
    { n: '04', name: 'ESTUDO H', sub: 'Pavilhão / São Paulo', year: '2023', status: 'CONCLUÍDO', img: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1400&auto=format&fit=crop&q=85' },
  ];
  return (
    <div style={c.wrap}>
      {/* Header — long bar */}
      <header style={c.head}>
        <div style={c.headBrand}>
          <span style={c.headBrandText}>THE MIDIA</span>
          <span style={c.headBrandSlash}>/</span>
          <span style={c.headBrandText}>ARQUITETURA</span>
        </div>
        <nav style={c.headNav} className="desktop-menu">
          <a>[ INDEX ]</a>
          <a>[ ESTÚDIO ]</a>
          <a>[ TEXTOS ]</a>
          <a>[ CONTATO ]</a>
        </nav>
        <div style={c.headStatus}>
          <span style={c.statusDot} />
          ATELIER ATIVO · SP / MG
        </div>
      </header>

      {/* Hero — massive type fills screen */}
      <section style={c.hero}>
        <div style={c.heroMeta}>
          <div style={c.heroMetaItem}>
            <span style={c.heroMetaLabel}>EST</span><span>·2019</span>
          </div>
          <div style={c.heroMetaItem}>
            <span style={c.heroMetaLabel}>OBRAS</span><span>·22</span>
          </div>
          <div style={c.heroMetaItem}>
            <span style={c.heroMetaLabel}>EM EXEC</span><span style={c.accent}>·07</span>
          </div>
          <div style={c.heroMetaItem}>
            <span style={c.heroMetaLabel}>VOLUME</span><span>·14.300m²</span>
          </div>
        </div>

        <h1 style={c.heroTitle}>
          <span style={c.heroLine1}>NÃO</span>
          <span style={c.heroLine2}>FAZEMOS</span>
          <span style={c.heroLine3}>BONITO.</span>
          <span style={c.heroLine4}>FAZEMOS<span style={c.heroAccent}>·</span> CERTO.</span>
        </h1>

        <div style={c.heroFoot}>
          <div style={c.heroFootL}>
            <div style={c.heroFootLabel}>// MANIFESTO</div>
            <p style={c.heroFootText}>
              Trabalho de canteiro, projeto que assume o material como ele é, peso, junta visível, sombra dura.
              Arquitetura como problema construtivo — não como decoração.
            </p>
          </div>
          <a style={c.heroBtn}>
            <span>↓</span>
            DESCER
          </a>
        </div>
      </section>

      {/* Image strip — full bleed */}
      <section style={c.strip}>
        <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=2000&auto=format&fit=crop&q=85" style={c.stripImg} alt="" />
        <div style={c.stripCorner}>
          <div>NÓ — VILA MADALENA</div>
          <div>SHOTS DE OBRA · 03/2025</div>
        </div>
      </section>

      {/* Index — table of works */}
      <section style={c.index}>
        <div style={c.indexHead}>
          <div style={c.indexLabel}>// INDEX_2019—2025</div>
          <h2 style={c.indexTitle}>22 OBRAS.<br /><span style={c.accent}>NENHUMA RÉPLICA.</span></h2>
        </div>

        <div style={c.indexTable}>
          <div style={c.indexTableHead}>
            <div>N°</div>
            <div>OBRA</div>
            <div>PROGRAMA</div>
            <div>ANO</div>
            <div style={{ textAlign: 'right' }}>STATUS</div>
          </div>
          {projects.map((p) => (
            <div key={p.n} style={c.indexRow}>
              <div style={c.indexN}>{p.n}</div>
              <div style={c.indexNameCell}>
                <div style={c.indexThumb}>
                  <img src={p.img} alt="" style={c.indexThumbImg} />
                </div>
                <div style={c.indexName}>{p.name}</div>
              </div>
              <div style={c.indexSub}>{p.sub}</div>
              <div style={c.indexYear}>{p.year}</div>
              <div style={{ ...c.indexStatus, color: p.status === 'EM OBRA' ? '#d8ff3c' : '#7a7a78' }}>
                {p.status === 'EM OBRA' ? '◉ ' : '◯ '}{p.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big number — vanity stat */}
      <section style={c.bignum}>
        <div style={c.bignumLabel}>// FATO</div>
        <div style={c.bignumValue}>
          93<span style={c.bignumPct}>%</span>
        </div>
        <div style={c.bignumDesc}>
          DOS NOSSOS CLIENTES VOLTAM<br />
          <span style={c.bignumDescDim}>com a próxima obra. ou indicam.</span>
        </div>
      </section>

      {/* Press */}
      <section style={c.press}>
        <div style={c.pressLabel}>// PRESS</div>
        <div style={c.pressGrid}>
          <div style={c.pressItem}>
            <div style={c.pressOutlet}>DEZEEN</div>
            <div style={c.pressQuote}>"Concrete with a brazilian accent. Brutal but inhabitable."</div>
          </div>
          <div style={c.pressItem}>
            <div style={c.pressOutlet}>ARC/DESIGN</div>
            <div style={c.pressQuote}>"O projeto que recusa a doçura — e ainda assim acolhe."</div>
          </div>
          <div style={c.pressItem}>
            <div style={c.pressOutlet}>DOMUS</div>
            <div style={c.pressQuote}>"Una posizione netta nel panorama brasiliano."</div>
          </div>
          <div style={c.pressItem}>
            <div style={c.pressOutlet}>PROJETO DESIGN</div>
            <div style={c.pressQuote}>"Capa Mar/2024. Material que pensa antes de seduzir."</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={c.cta}>
        <div style={c.ctaTitle}>
          ASSUMA<br />A OBRA.<span style={c.ctaCursor}>_</span>
        </div>
        <div style={c.ctaR}>
          <div style={c.ctaItem}>
            <span style={c.ctaLabel}>NOVOS PROJETOS</span>
            <span>COMERCIAL@THEMIDIAMARKETING.COM.BR</span>
          </div>
          <div style={c.ctaItem}>
            <span style={c.ctaLabel}>ATELIER</span>
            <span>R. PIRES DA MOTA 1247 / SP</span>
          </div>
          <div style={c.ctaItem}>
            <span style={c.ctaLabel}>WHATSAPP</span>
            <span>+55 11 9 8814 2200</span>
          </div>
          <a style={c.ctaBtn}>
            <span>→</span>
            ABRIR CONVERSA
          </a>
        </div>
      </section>

      <footer style={c.foot}>
        <div>THE MIDIA / ARQUITETURA · ESTÚDIO</div>
        <div>© 2025 · CNPJ 99.999.999/0001-00</div>
        <div style={c.footMono}>v3.1 · BUILD 2025.05</div>
      </footer>
    </div>
  );
}

const formaStyles = {
  wrap: {
    fontFamily: "'JetBrains Mono', monospace", color: '#f5f5f5', background: '#0a0a0a',
    fontSize: 13,
  },

  head: {
    display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 40, alignItems: 'center',
    padding: '16px 32px', borderBottom: '1px solid #2a2a28',
  },
  headBrand: { display: 'flex', alignItems: 'baseline', gap: 4, fontFamily: "'Archivo Black', sans-serif" },
  headBrandText: { fontSize: 18, letterSpacing: '-.02em' },
  headBrandSlash: { color: '#d8ff3c', fontSize: 18 },
  headNav: { display: 'flex', justifyContent: 'center', gap: 28, fontSize: 11, color: '#a0a09e' },
  headStatus: { fontSize: 11, color: '#d8ff3c', display: 'flex', alignItems: 'center', gap: 8 },
  statusDot: { width: 8, height: 8, borderRadius: 999, background: '#d8ff3c', display: 'inline-block', boxShadow: '0 0 12px #d8ff3c' },

  hero: { padding: '40px 32px 80px', borderBottom: '1px solid #2a2a28' },
  heroMeta: { display: 'flex', gap: 40, paddingBottom: 32, borderBottom: '1px dashed #2a2a28', marginBottom: 60 },
  heroMetaItem: { display: 'flex', gap: 8, fontSize: 11 },
  heroMetaLabel: { color: '#7a7a78' },
  accent: { color: '#d8ff3c' },

  heroTitle: {
    fontFamily: "'Archivo Black', sans-serif",
    fontSize: 'clamp(72px, 14vw, 240px)', lineHeight: .82, letterSpacing: '-.05em',
    margin: 0, display: 'flex', flexDirection: 'column',
  },
  heroLine1: { color: '#f5f5f5' },
  heroLine2: { color: '#f5f5f5', marginLeft: 'clamp(40px, 8vw, 140px)' },
  heroLine3: { color: '#d8ff3c' },
  heroLine4: { color: '#f5f5f5', marginLeft: 'clamp(40px, 8vw, 180px)' },
  heroAccent: { color: '#d8ff3c' },

  heroFoot: { display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'end', marginTop: 80 },
  heroFootL: {},
  heroFootLabel: { fontSize: 11, color: '#d8ff3c', marginBottom: 12 },
  heroFootText: { fontFamily: "'JetBrains Mono', monospace", fontSize: 14, lineHeight: 1.7, color: '#c8c8c6', maxWidth: 560, margin: 0 },
  heroBtn: { display: 'flex', alignItems: 'center', gap: 12, padding: '18px 28px', border: '1px solid #d8ff3c', color: '#d8ff3c', fontWeight: 600, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '.1em', fontSize: 12 },

  strip: { position: 'relative', borderBottom: '1px solid #2a2a28' },
  stripImg: { width: '100%', height: '70vh', minHeight: 480, objectFit: 'cover', display: 'block', filter: 'contrast(1.05) saturate(.7)' },
  stripCorner: {
    position: 'absolute', bottom: 24, left: 24,
    background: '#0a0a0a', color: '#d8ff3c', padding: '12px 18px', border: '1px solid #d8ff3c',
    fontSize: 11, lineHeight: 1.6, letterSpacing: '.1em',
  },

  index: { padding: '100px 32px 80px', borderBottom: '1px solid #2a2a28' },
  indexHead: { display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40, alignItems: 'baseline', marginBottom: 60 },
  indexLabel: { fontSize: 11, color: '#d8ff3c' },
  indexTitle: { fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: .95, margin: 0, letterSpacing: '-.04em' },

  indexTable: {},
  indexTableHead: { display: 'grid', gridTemplateColumns: '60px 2fr 2fr 80px 140px', gap: 24, padding: '14px 0', borderBottom: '1px solid #d8ff3c', fontSize: 11, color: '#d8ff3c' },
  indexRow: { display: 'grid', gridTemplateColumns: '60px 2fr 2fr 80px 140px', gap: 24, padding: '20px 0', borderBottom: '1px solid #2a2a28', alignItems: 'center', cursor: 'pointer' },
  indexN: { fontSize: 11, color: '#7a7a78' },
  indexNameCell: { display: 'flex', alignItems: 'center', gap: 16 },
  indexThumb: { width: 80, height: 60, overflow: 'hidden' },
  indexThumbImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  indexName: { fontFamily: "'Archivo Black', sans-serif", fontSize: 22, letterSpacing: '-.02em' },
  indexSub: { fontSize: 12, color: '#a0a09e' },
  indexYear: { fontSize: 12, color: '#a0a09e' },
  indexStatus: { fontSize: 11, textAlign: 'right' },

  bignum: { padding: '120px 32px', borderBottom: '1px solid #2a2a28', textAlign: 'center' },
  bignumLabel: { fontSize: 11, color: '#d8ff3c', marginBottom: 24 },
  bignumValue: { fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(180px, 28vw, 400px)', lineHeight: .8, letterSpacing: '-.05em', color: '#d8ff3c' },
  bignumPct: { fontSize: '.6em', color: '#f5f5f5' },
  bignumDesc: { fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(20px, 2.4vw, 32px)', lineHeight: 1.2, letterSpacing: '-.02em', marginTop: 32, color: '#f5f5f5' },
  bignumDescDim: { color: '#7a7a78', fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 400, letterSpacing: 0, fontStyle: 'italic' },

  press: { padding: '100px 32px', borderBottom: '1px solid #2a2a28' },
  pressLabel: { fontSize: 11, color: '#d8ff3c', marginBottom: 32 },
  pressGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderTop: '1px solid #2a2a28' },
  pressItem: { padding: '32px 0', borderBottom: '1px solid #2a2a28', display: 'flex', flexDirection: 'column', gap: 14, paddingRight: 40 },
  pressOutlet: { fontFamily: "'Archivo Black', sans-serif", fontSize: 14, letterSpacing: '.1em', color: '#d8ff3c' },
  pressQuote: { fontFamily: "'Archivo', sans-serif", fontSize: 22, lineHeight: 1.3, letterSpacing: '-.01em', color: '#f5f5f5', margin: 0 },

  cta: { padding: '120px 32px', borderBottom: '1px solid #2a2a28', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 },
  ctaTitle: { fontFamily: "'Archivo Black', sans-serif", fontSize: 'clamp(72px, 12vw, 200px)', lineHeight: .85, letterSpacing: '-.05em', color: '#d8ff3c', margin: 0 },
  ctaCursor: { animation: 'formaBlink 1s steps(2) infinite', color: '#f5f5f5' },
  ctaR: { display: 'flex', flexDirection: 'column' },
  ctaItem: { display: 'flex', justifyContent: 'space-between', padding: '20px 0', borderTop: '1px solid #2a2a28', fontSize: 14 },
  ctaLabel: { color: '#7a7a78', fontSize: 11 },
  ctaBtn: { marginTop: 32, padding: '24px', background: '#d8ff3c', color: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, fontFamily: "'Archivo Black', sans-serif", fontSize: 18, letterSpacing: '-.01em', cursor: 'pointer' },

  foot: { padding: '24px 32px', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#7a7a78' },
  footMono: { color: '#d8ff3c' },
};

// Inject brutalist keyframes once
if (!document.getElementById('formaBrutaKeyframes')) {
  const s = document.createElement('style');
  s.id = 'formaBrutaKeyframes';
  s.textContent = '@keyframes formaBlink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }';
  document.head.appendChild(s);
}

window.FormaSite = FormaSite;

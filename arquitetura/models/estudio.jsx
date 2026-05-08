/* Estúdio Vetor — editorial grotesk, asymmetric, accent red */
function EstudioSite() {
  const c = estudioStyles;
  const projects = [
    { n: '01', name: 'Casa Tatuí', cat: 'Residencial', year: '2024', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&auto=format&fit=crop&q=80' },
    { n: '02', name: 'Galpão Mooca', cat: 'Reabilitação', year: '2024', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&auto=format&fit=crop&q=80' },
    { n: '03', name: 'Edifício Lapa', cat: 'Multifamiliar', year: '2023', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&auto=format&fit=crop&q=80' },
    { n: '04', name: 'Pavilhão Bienal', cat: 'Cultural · Temporário', year: '2023', img: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1400&auto=format&fit=crop&q=80' },
  ];
  return (
    <div style={c.wrap}>
      {/* Top */}
      <header style={c.top}>
        <div style={c.brand}>THE MIDIA<span style={c.brandDot}>.</span></div>
        <nav style={c.nav} className="desktop-menu">
          <a style={c.navItem}>Index</a>
          <a style={c.navItem}>Estúdio</a>
          <a style={c.navItem}>Press</a>
          <a style={c.navItem}>Contato</a>
        </nav>
        <div style={c.topMeta}>
          <span style={c.live}>● LIVE</span>
          <span>SP, BRA · 21°C</span>
          <span>{new Date().toLocaleDateString('pt-BR')}</span>
        </div>
      </header>

      {/* Hero — split with massive type */}
      <section style={c.hero}>
        <div style={c.heroL}>
          <div style={c.tag}>EST. 2017 · 38 OBRAS · 4 PRÊMIOS IAB</div>
          <h1 style={c.heroTitle}>
            Arquitetura<br />
            como <span style={c.heroAccent}>posição</span><br />
            crítica.
          </h1>
          <div style={c.heroFoot}>
            <div style={c.heroFootCol}>
              <div style={c.heroFootLabel}>Próximo lançamento</div>
              <div style={c.heroFootValue}>Casa Tatuí — Out/25</div>
            </div>
            <div style={c.heroFootCol}>
              <div style={c.heroFootLabel}>Em obra</div>
              <div style={c.heroFootValue}>06 projetos</div>
            </div>
          </div>
        </div>
        <div style={c.heroR}>
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&auto=format&fit=crop&q=85" style={c.heroImg} alt="" />
          <div style={c.heroCap}>
            <span style={c.heroCapN}>↳ 03</span>
            <span>Casa Tatuí, fachada oeste. Em obra.</span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={c.marquee}>
        <div style={c.marqueeTrack}>
          <span>SELECIONADO DEZEEN AWARDS 2024</span><span>★</span>
          <span>BIENAL DE VENEZA · PAVILHÃO BR</span><span>★</span>
          <span>PRÊMIO IAB-SP 2023</span><span>★</span>
          <span>CASA TATUÍ → ABERTURA OUT/25</span><span>★</span>
          <span>SELECIONADO DEZEEN AWARDS 2024</span><span>★</span>
          <span>BIENAL DE VENEZA · PAVILHÃO BR</span><span>★</span>
        </div>
      </div>

      {/* Projects index — numbered list */}
      <section style={c.projects}>
        <div style={c.projectsHead}>
          <div style={c.projectsTag}>§ INDEX</div>
          <h2 style={c.projectsTitle}>Trabalho recente</h2>
          <div style={c.projectsRight}>
            <span style={c.filter}>· Tudo</span>
            <span style={c.filterMute}>Residencial</span>
            <span style={c.filterMute}>Comercial</span>
            <span style={c.filterMute}>Cultural</span>
          </div>
        </div>

        <div style={c.projectList}>
          {projects.map((p) => (
            <article key={p.n} style={c.projectRow}>
              <div style={c.projectN}>{p.n}</div>
              <div style={c.projectImgWrap}>
                <img src={p.img} alt={p.name} style={c.projectImg} />
              </div>
              <div style={c.projectInfo}>
                <h3 style={c.projectName}>{p.name}</h3>
                <div style={c.projectMeta}>
                  <span>{p.cat}</span>
                  <span>·</span>
                  <span>{p.year}</span>
                </div>
              </div>
              <div style={c.projectGo}>
                <span style={c.projectGoArrow}>→</span>
                <span style={c.projectGoLabel}>VER FICHA</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Manifesto — big quote */}
      <section style={c.manifesto}>
        <div style={c.manifestoQuote}>
          “O projeto começa no <span style={c.manifestoUnderline}>território</span>. A obra começa quando se aceita
          que o projeto vai mudar. Tudo entre os dois é negociação.”
        </div>
        <div style={c.manifestoSig}>
          <div>— Direção, The Midia Arquitetura</div>
          <div style={c.manifestoSigSmall}>Entrevista, ARC/Design 142, 2024</div>
        </div>
      </section>

      {/* CTA */}
      <section style={c.cta}>
        <div style={c.ctaL}>
          <div style={c.ctaTag}>§ CONTATO</div>
          <h3 style={c.ctaTitle}>
            Quer construir<br />com a gente?
          </h3>
        </div>
        <div style={c.ctaR}>
          <a style={c.ctaItem}>
            <span style={c.ctaLabel}>Novos projetos</span>
            <span style={c.ctaValue}>comercial@themidiamarketing.com.br</span>
          </a>
          <a style={c.ctaItem}>
            <span style={c.ctaLabel}>Imprensa</span>
            <span style={c.ctaValue}>press@themidiamarketing.com.br</span>
          </a>
          <a style={c.ctaItem}>
            <span style={c.ctaLabel}>Estúdio</span>
            <span style={c.ctaValue}>R. Joaquim Antunes 145, SP</span>
          </a>
        </div>
      </section>

      <footer style={c.footer}>
        <div style={c.brand}>THE MIDIA<span style={c.brandDot}>.</span></div>
        <div style={c.footerCols}>
          <span>© 2025 The Midia Arquitetura</span>
          <span>CNPJ 99.999.999/0001-00</span>
          <span>Política de privacidade</span>
        </div>
      </footer>

      <style>{`
        @keyframes vetorMarquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>
    </div>
  );
}

const estudioStyles = {
  wrap: {
    fontFamily: "'Space Grotesk', sans-serif", color: '#0a0a0a', background: '#ffffff',
    fontSize: 14,
  },
  top: {
    display: 'grid', gridTemplateColumns: '160px 1fr auto', alignItems: 'center', gap: 40,
    padding: '20px 40px', borderBottom: '1px solid #0a0a0a',
    fontFamily: "'Archivo', sans-serif",
  },
  brand: { fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 22, letterSpacing: '-.04em' },
  brandDot: { color: '#FF3B00' },
  nav: { display: 'flex', gap: 28 },
  navItem: { fontWeight: 500, fontSize: 14, color: '#0a0a0a', cursor: 'pointer', letterSpacing: '-.01em' },
  topMeta: { display: 'flex', gap: 20, fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#5a5a5a', letterSpacing: '.04em' },
  live: { color: '#FF3B00', fontWeight: 600 },

  hero: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
    padding: '64px 40px 60px', alignItems: 'end', borderBottom: '1px solid #0a0a0a',
  },
  heroL: { display: 'flex', flexDirection: 'column', gap: 40 },
  tag: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.12em', color: '#5a5a5a' },
  heroTitle: {
    fontFamily: "'Archivo', sans-serif", fontWeight: 800,
    fontSize: 'clamp(64px, 9.5vw, 160px)', lineHeight: .9, letterSpacing: '-.04em',
    margin: 0,
  },
  heroAccent: { color: '#FF3B00', fontStyle: 'italic', fontWeight: 800 },
  heroFoot: { display: 'flex', gap: 60, paddingTop: 24, borderTop: '1px dashed #0a0a0a', maxWidth: 480 },
  heroFootCol: { display: 'flex', flexDirection: 'column', gap: 4 },
  heroFootLabel: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.1em', color: '#5a5a5a' },
  heroFootValue: { fontWeight: 600, fontSize: 16 },
  heroR: { display: 'flex', flexDirection: 'column', gap: 14 },
  heroImg: { width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' },
  heroCap: { display: 'flex', gap: 14, alignItems: 'baseline', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#5a5a5a' },
  heroCapN: { color: '#FF3B00', fontWeight: 600 },

  marquee: { borderBottom: '1px solid #0a0a0a', overflow: 'hidden', padding: '14px 0' },
  marqueeTrack: {
    display: 'flex', gap: 40, whiteSpace: 'nowrap', width: 'max-content',
    fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: '-.01em',
    animation: 'vetorMarquee 40s linear infinite',
  },

  projects: { padding: '80px 40px 60px', borderBottom: '1px solid #0a0a0a' },
  projectsHead: {
    display: 'grid', gridTemplateColumns: '120px 1fr auto', alignItems: 'baseline', gap: 40,
    marginBottom: 60,
  },
  projectsTag: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.14em', color: '#FF3B00' },
  projectsTitle: { fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, margin: 0, letterSpacing: '-.03em' },
  projectsRight: { display: 'flex', gap: 18, fontSize: 13 },
  filter: { fontWeight: 600 },
  filterMute: { color: '#9a9a9a' },

  projectList: { display: 'flex', flexDirection: 'column' },
  projectRow: {
    display: 'grid', gridTemplateColumns: '60px 320px 1fr 140px', gap: 28, alignItems: 'center',
    padding: '24px 0', borderTop: '1px solid #0a0a0a',
    cursor: 'pointer',
  },
  projectN: { fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#5a5a5a' },
  projectImgWrap: { aspectRatio: '4/3', overflow: 'hidden' },
  projectImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  projectInfo: { display: 'flex', flexDirection: 'column', gap: 6 },
  projectName: { fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 32, margin: 0, letterSpacing: '-.02em' },
  projectMeta: { display: 'flex', gap: 8, fontSize: 13, color: '#5a5a5a' },
  projectGo: { display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' },
  projectGoArrow: { fontSize: 22, color: '#FF3B00' },
  projectGoLabel: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.12em' },

  manifesto: { padding: '120px 40px', borderBottom: '1px solid #0a0a0a', maxWidth: 1280, margin: '0 auto' },
  manifestoQuote: { fontFamily: "'Archivo', sans-serif", fontWeight: 500, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15, letterSpacing: '-.02em', maxWidth: 1100 },
  manifestoUnderline: { backgroundImage: 'linear-gradient(180deg, transparent 70%, #FF3B00 70%, #FF3B00 90%, transparent 90%)', padding: '0 4px' },
  manifestoSig: { display: 'flex', justifyContent: 'space-between', marginTop: 60, paddingTop: 24, borderTop: '1px dashed #0a0a0a', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#5a5a5a' },
  manifestoSigSmall: { color: '#9a9a9a' },

  cta: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, padding: '100px 40px', borderBottom: '1px solid #0a0a0a' },
  ctaL: { display: 'flex', flexDirection: 'column', gap: 24 },
  ctaTag: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.14em', color: '#FF3B00' },
  ctaTitle: { fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: .95, letterSpacing: '-.03em', margin: 0 },
  ctaR: { display: 'flex', flexDirection: 'column' },
  ctaItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', borderTop: '1px solid #0a0a0a', cursor: 'pointer' },
  ctaLabel: { fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#5a5a5a', letterSpacing: '.1em' },
  ctaValue: { fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 18 },

  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 40px' },
  footerCols: { display: 'flex', gap: 28, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#5a5a5a' },
};

window.EstudioSite = EstudioSite;

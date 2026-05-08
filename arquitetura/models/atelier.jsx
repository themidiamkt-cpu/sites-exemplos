/* Atelier Quieto — minimalist luxury, serif, monochrome */
function AtelierSite() {
  const c = atelierStyles;
  const projects = [
    { n: '01', name: 'Casa Pérgola', loc: 'Itaipava, RJ', year: '2024', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&auto=format&fit=crop&q=80' },
    { n: '02', name: 'Residência Alvear', loc: 'Jardins, SP', year: '2023', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&auto=format&fit=crop&q=80' },
    { n: '03', name: 'Refúgio Pedra', loc: 'Campos do Jordão, SP', year: '2023', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&auto=format&fit=crop&q=80' },
    { n: '04', name: 'Apartamento Pinheiros', loc: 'Pinheiros, SP', year: '2022', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&auto=format&fit=crop&q=80' },
  ];
  return (
    <div style={c.wrap}>
      {/* Nav */}
      <nav style={c.nav}>
        <div style={c.logo}>The Midia <span style={c.logoItalic}>Arquitetura</span></div>
        <ul style={c.navList}>
          <li>Trabalhos</li><li>Estúdio</li><li>Processo</li><li>Contato</li>
        </ul>
        <div style={c.navRight}>PT · EN</div>
      </nav>

      {/* Hero */}
      <section style={c.hero}>
        <div style={c.heroEyebrow}>—  ARQUITETURA RESIDENCIAL  ·  DESDE 2014</div>
        <h1 style={c.heroTitle}>
          Casas que sabem<br /><em style={c.italic}>quando ficar caladas.</em>
        </h1>
        <div style={c.heroFooter}>
          <div style={c.heroFooterCol}>
            <div style={c.heroLabel}>Estúdio em</div>
            <div style={c.heroValue}>São Paulo · Itaipava</div>
          </div>
          <div style={c.heroFooterCol}>
            <div style={c.heroLabel}>Premiações</div>
            <div style={c.heroValue}>Casa Cor · IAB · Dezeen</div>
          </div>
          <div style={c.heroFooterCol}>
            <div style={c.heroLabel}>Próxima abertura</div>
            <div style={c.heroValue}>Mar / 2026</div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section style={c.heroImgWrap}>
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&auto=format&fit=crop&q=85" style={c.heroImg} alt="" />
        <div style={c.heroCaption}>
          <span>Casa Pérgola, 2024</span>
          <span>Foto · Fran Parente</span>
        </div>
      </section>

      {/* Manifesto */}
      <section style={c.manifesto}>
        <div style={c.manifestoNumber}>I.</div>
        <p style={c.manifestoText}>
          Trabalhamos com poucas obras por ano. Cada casa começa por uma conversa longa, sem prazo, em que escutamos
          mais do que falamos. Acreditamos que a melhor arquitetura é a que <em style={c.italic}>desaparece</em> —
          deixa o sol, a paisagem e a vida do morador ocuparem o primeiro plano.
        </p>
      </section>

      {/* Projects index */}
      <section style={c.projects}>
        <div style={c.projectsHead}>
          <h2 style={c.projectsTitle}>Selecionados</h2>
          <span style={c.projectsCount}>2014 — 2024  ·  47 obras concluídas</span>
        </div>
        <div style={c.projectsGrid}>
          {projects.map((p) => (
            <article key={p.n} style={c.project}>
              <div style={c.projectImg}>
                <img src={p.img} alt={p.name} style={c.projectImgEl} />
              </div>
              <div style={c.projectMeta}>
                <span style={c.projectN}>{p.n}</span>
                <div style={c.projectInfo}>
                  <div style={c.projectName}>{p.name}</div>
                  <div style={c.projectSub}>{p.loc} · {p.year}</div>
                </div>
                <span style={c.projectArrow}>→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={c.about}>
        <div style={c.aboutLeft}>
          <div style={c.aboutLabel}>Sobre</div>
        </div>
        <div style={c.aboutRight}>
          <p style={c.aboutText}>
            Fundado em 2014, o estúdio <em style={c.italic}>The Midia Arquitetura</em> é um
            escritório dedicado à casa. Trabalhamos a partir do programa de cada cliente — com tempo, com
            atenção, com materiais que envelhecem bem. Concreto aparente, madeira, pedra, vidro. O resto vem
            do lugar.
          </p>
          <p style={c.aboutText}>
            Atuamos em projetos completos: arquitetura, interiores, paisagismo e acompanhamento de obra.
            Cada casa permanece sob nossos cuidados por anos depois da entrega.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={c.cta}>
        <h3 style={c.ctaTitle}>
          Vamos<br /><em style={c.italic}>conversar.</em>
        </h3>
        <a href="#" style={c.ctaLink}>comercial@themidiamarketing.com.br  ↗</a>
        <div style={c.ctaSmall}>+55 19 99931-5179  ·  Atendimento por agendamento</div>
      </section>

      {/* Footer */}
      <footer style={c.footer}>
        <div>© 2025  The Midia Arquitetura</div>
        <div>Instagram · Pinterest · Dezeen</div>
      </footer>
    </div>
  );
}

const atelierStyles = {
  wrap: {
    fontFamily: "'Manrope', sans-serif", color: '#1a1a1a', background: '#faf8f5',
    fontSize: 14,
  },
  nav: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '24px 56px', borderBottom: '1px solid #e8e3da',
  },
  logo: { fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, letterSpacing: '-.01em' },
  logoItalic: { fontStyle: 'italic', fontWeight: 400 },
  navList: {
    listStyle: 'none', display: 'flex', gap: 36, padding: 0, margin: 0,
    fontSize: 13, letterSpacing: '.02em', color: '#3a3a3a',
  },
  navRight: { fontSize: 11, letterSpacing: '.18em', color: '#7a7a7a' },

  hero: { padding: '120px 56px 80px', maxWidth: 1280, margin: '0 auto' },
  heroEyebrow: { fontSize: 11, letterSpacing: '.22em', color: '#7a7a7a', marginBottom: 56 },
  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
    fontSize: 'clamp(56px, 9vw, 132px)', lineHeight: .98, letterSpacing: '-.025em',
    margin: 0, color: '#1a1a1a',
  },
  italic: { fontStyle: 'italic', fontWeight: 300 },
  heroFooter: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
    marginTop: 96, paddingTop: 24, borderTop: '1px solid #d8d2c6',
  },
  heroFooterCol: { display: 'flex', flexDirection: 'column', gap: 6 },
  heroLabel: { fontSize: 11, letterSpacing: '.18em', color: '#9a958c', textTransform: 'uppercase' },
  heroValue: { fontFamily: "'Cormorant Garamond', serif", fontSize: 20 },

  heroImgWrap: { position: 'relative', maxWidth: 1280, margin: '0 auto 120px', padding: '0 56px' },
  heroImg: { width: '100%', height: '70vh', minHeight: 520, objectFit: 'cover', display: 'block', filter: 'grayscale(.15)' },
  heroCaption: {
    display: 'flex', justifyContent: 'space-between',
    fontSize: 11, letterSpacing: '.18em', color: '#7a7a7a', marginTop: 14, textTransform: 'uppercase',
  },

  manifesto: {
    maxWidth: 980, margin: '0 auto', padding: '40px 56px 120px',
    display: 'grid', gridTemplateColumns: '60px 1fr', gap: 32,
  },
  manifestoNumber: { fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontStyle: 'italic', color: '#9a958c' },
  manifestoText: { fontFamily: "'Cormorant Garamond', serif", fontSize: 28, lineHeight: 1.4, color: '#2a2a2a', margin: 0, fontWeight: 400 },

  projects: { padding: '60px 56px 120px', maxWidth: 1280, margin: '0 auto' },
  projectsHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 60, paddingBottom: 24, borderBottom: '1px solid #d8d2c6' },
  projectsTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, margin: 0, letterSpacing: '-.02em' },
  projectsCount: { fontSize: 11, letterSpacing: '.18em', color: '#9a958c', textTransform: 'uppercase' },
  projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '80px 60px' },
  project: { cursor: 'pointer' },
  projectImg: { aspectRatio: '4/5', overflow: 'hidden', marginBottom: 20, background: '#e8e3da' },
  projectImgEl: { width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(.15)', transition: 'transform .6s ease' },
  projectMeta: { display: 'grid', gridTemplateColumns: '40px 1fr 24px', alignItems: 'center', gap: 14, padding: '16px 0', borderTop: '1px solid #d8d2c6' },
  projectN: { fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontStyle: 'italic', color: '#9a958c' },
  projectInfo: { display: 'flex', flexDirection: 'column', gap: 4 },
  projectName: { fontFamily: "'Cormorant Garamond', serif", fontSize: 22 },
  projectSub: { fontSize: 11, letterSpacing: '.14em', color: '#9a958c', textTransform: 'uppercase' },
  projectArrow: { fontSize: 18, color: '#3a3a3a' },

  about: {
    padding: '120px 56px', maxWidth: 1280, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '200px 1fr', gap: 80,
    borderTop: '1px solid #d8d2c6',
  },
  aboutLeft: {},
  aboutLabel: { fontSize: 11, letterSpacing: '.22em', color: '#9a958c', textTransform: 'uppercase' },
  aboutRight: { maxWidth: 640, display: 'flex', flexDirection: 'column', gap: 24 },
  aboutText: { fontFamily: "'Cormorant Garamond', serif", fontSize: 22, lineHeight: 1.55, margin: 0, color: '#2a2a2a' },

  cta: { padding: '120px 56px', maxWidth: 1280, margin: '0 auto', textAlign: 'center', borderTop: '1px solid #d8d2c6' },
  ctaTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(56px, 9vw, 120px)', fontWeight: 400, lineHeight: 1, margin: '0 0 48px', letterSpacing: '-.025em' },
  ctaLink: { fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontStyle: 'italic', color: '#1a1a1a', textDecoration: 'none', borderBottom: '1px solid #1a1a1a', paddingBottom: 4 },
  ctaSmall: { marginTop: 32, fontSize: 12, letterSpacing: '.14em', color: '#9a958c', textTransform: 'uppercase' },

  footer: {
    padding: '32px 56px', borderTop: '1px solid #d8d2c6',
    display: 'flex', justifyContent: 'space-between',
    fontSize: 11, letterSpacing: '.14em', color: '#9a958c', textTransform: 'uppercase',
  },
};

window.AtelierSite = AtelierSite;

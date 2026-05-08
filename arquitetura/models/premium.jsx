/* Premium Alto Padrão — dark elegant with gold accents */
function PremiumSite() {
  const c = premiumStyles;
  const projects = [
    { name: 'Residência Itaim', loc: 'São Paulo · SP', area: '780 m²', img: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1400&auto=format&fit=crop&q=85' },
    { name: 'Casa Costa Verde', loc: 'Angra · RJ', area: '1.240 m²', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&auto=format&fit=crop&q=85' },
    { name: 'Cobertura Faria Lima', loc: 'Pinheiros · SP', area: '420 m²', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&auto=format&fit=crop&q=85' },
    { name: 'Casa Vinhas', loc: 'Itu · SP', area: '950 m²', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&auto=format&fit=crop&q=85' },
  ];
  return (
    <div style={c.wrap}>
      <nav style={c.nav}>
        <div style={c.brand}>
          <span style={c.brandSerif}>The Midia</span>
          <span style={c.brandLine} />
          <span style={c.brandSub}>ARQUITETURA</span>
        </div>
        <ul style={c.navList} className="desktop-menu">
          <li>Início</li><li>Projetos</li><li>Sobre</li><li>Imprensa</li><li>Contato</li>
        </ul>
        <a style={c.navCta} className="desktop-menu">Iniciar projeto →</a>
      </nav>

      <section style={c.hero}>
        <img src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=2000&auto=format&fit=crop&q=85" style={c.heroImg} alt="" />
        <div style={c.heroOverlay} />
        <div style={c.heroContent}>
          <div style={c.heroEyebrow}>· ARQUITETURA DE ALTO PADRÃO ·</div>
          <h1 style={c.heroTitle}>
            Projetos<br />
            <em style={c.italic}>exclusivos</em><br />
            para uma vida singular.
          </h1>
          <p style={c.heroLede}>
            Há 16 anos transformando terrenos em residências autorais. Cada obra começa com uma conversa
            longa — e termina apenas quando você se sente em casa.
          </p>
          <div style={c.heroActions}>
            <a style={c.heroBtnGold}>Ver portfólio</a>
            <a style={c.heroBtnGhost}>Marcar visita ao atelier →</a>
          </div>
        </div>
        <div style={c.heroScroll}>
          <span style={c.heroScrollDot} />
          ROLAR
        </div>
      </section>

      <section style={c.numbers}>
        {[
          ['16', 'anos de atelier'],
          ['84', 'projetos executados'],
          ['12', 'prêmios e publicações'],
          ['SP·RJ·MG', 'onde atuamos'],
        ].map(([n, l]) => (
          <div key={l} style={c.numItem}>
            <div style={c.numN}>{n}</div>
            <div style={c.numL}>{l}</div>
          </div>
        ))}
      </section>

      <section style={c.projects}>
        <div style={c.projectsHead}>
          <div style={c.eyebrow}>— SELECIONADOS</div>
          <h2 style={c.sectionTitle}>Cada residência<br />é uma <em style={c.italic}>peça única.</em></h2>
        </div>
        <div style={c.projectsGrid}>
          {projects.map((p, i) => (
            <article key={p.name} style={c.project}>
              <div style={c.projectImg}>
                <img src={p.img} alt={p.name} style={c.projectImgEl} />
                <div style={c.projectBadge}>0{i + 1}</div>
              </div>
              <div style={c.projectInfo}>
                <h3 style={c.projectName}>{p.name}</h3>
                <div style={c.projectMeta}>
                  <span>{p.loc}</span>
                  <span style={c.projectDot}>·</span>
                  <span>{p.area}</span>
                </div>
                <a style={c.projectLink}>Ver projeto completo  →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={c.quote}>
        <div style={c.quoteMark}>"</div>
        <p style={c.quoteText}>
          Procuramos, em cada obra, o equilíbrio entre <em style={c.italic}>permanência</em> e
          contemporaneidade. Materiais que envelhecem com dignidade, escala que respeita quem mora,
          luz que muda durante o dia.
        </p>
        <div style={c.quoteSig}>— Direção, The Midia Arquitetura</div>
      </section>

      <section style={c.cta}>
        <div style={c.ctaInner}>
          <h3 style={c.ctaTitle}>
            Vamos<br /><em style={c.italic}>conversar?</em>
          </h3>
          <div style={c.ctaContact}>
            <div style={c.ctaItem}>
              <div style={c.ctaLabel}>WHATSAPP</div>
              <div style={c.ctaValue}>+55 19 99931-5179</div>
            </div>
            <div style={c.ctaItem}>
              <div style={c.ctaLabel}>E-MAIL</div>
              <div style={c.ctaValue}>comercial@themidiamarketing.com.br</div>
            </div>
          </div>
          <a style={c.ctaBtn}>Iniciar uma conversa  →</a>
        </div>
      </section>

      <footer style={c.foot}>
        <div style={c.brand}>
          <span style={c.brandSerif}>The Midia</span>
          <span style={c.brandLine} />
          <span style={c.brandSub}>ARQUITETURA</span>
        </div>
        <div style={c.footRight}>
          <span>Instagram</span><span>Pinterest</span><span>LinkedIn</span>
          <span style={c.footMute}>© 2025 The Midia Arquitetura</span>
        </div>
      </footer>
    </div>
  );
}

const premiumStyles = {
  wrap: { fontFamily: "'Manrope', sans-serif", color: '#e6e0d4', background: '#0e0e0c', fontSize: 14 },

  nav: {
    display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 40, alignItems: 'center',
    padding: '20px 56px', borderBottom: '1px solid #1f1f1c',
    position: 'relative', zIndex: 5,
  },
  brand: { display: 'flex', alignItems: 'center', gap: 12 },
  brandSerif: { fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500, color: '#e6e0d4', letterSpacing: '.01em' },
  brandLine: { width: 28, height: 1, background: '#c9a05c' },
  brandSub: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '.32em', color: '#c9a05c' },
  navList: { listStyle: 'none', display: 'flex', justifyContent: 'center', gap: 32, padding: 0, margin: 0, fontSize: 13, color: '#9c948a', letterSpacing: '.04em' },
  navCta: { color: '#0e0e0c', background: '#c9a05c', padding: '10px 18px', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer' },

  hero: { position: 'relative', minHeight: '88vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' },
  heroImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.55)' },
  heroOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,14,12,.4) 0%, rgba(14,14,12,.2) 40%, rgba(14,14,12,.95) 100%)' },
  heroContent: { position: 'relative', padding: '0 56px 96px', maxWidth: 1100 },
  heroEyebrow: { fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 18, color: '#c9a05c', marginBottom: 28 },
  heroTitle: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 1, letterSpacing: '-.025em', margin: 0, color: '#f3eee0' },
  italic: { fontStyle: 'italic', color: '#c9a05c', fontWeight: 400 },
  heroLede: { fontSize: 17, lineHeight: 1.65, color: '#bcb4a6', maxWidth: 540, marginTop: 28 },
  heroActions: { display: 'flex', gap: 20, alignItems: 'center', marginTop: 36, flexWrap: 'wrap' },
  heroBtnGold: { background: '#c9a05c', color: '#0e0e0c', padding: '14px 28px', borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  heroBtnGhost: { color: '#e6e0d4', fontSize: 14, fontWeight: 500, borderBottom: '1px solid #c9a05c', paddingBottom: 4, cursor: 'pointer' },
  heroScroll: { position: 'absolute', right: 56, bottom: 40, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.3em', color: '#c9a05c', display: 'flex', alignItems: 'center', gap: 12 },
  heroScrollDot: { display: 'inline-block', width: 6, height: 6, borderRadius: 999, background: '#c9a05c' },

  numbers: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #1f1f1c', borderBottom: '1px solid #1f1f1c' },
  numItem: { padding: '40px 32px', borderLeft: '1px solid #1f1f1c' },
  numN: { fontFamily: "'Cormorant Garamond', serif", fontSize: 56, lineHeight: 1, color: '#c9a05c', fontWeight: 500 },
  numL: { fontSize: 12, letterSpacing: '.16em', color: '#7a7468', marginTop: 10, textTransform: 'uppercase' },

  projects: { padding: '120px 56px', maxWidth: 1320, margin: '0 auto' },
  projectsHead: { textAlign: 'center', marginBottom: 80 },
  eyebrow: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.22em', color: '#c9a05c' },
  sectionTitle: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(40px, 5.5vw, 80px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: '20px 0 0' },
  projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px 40px' },
  project: { cursor: 'pointer' },
  projectImg: { position: 'relative', aspectRatio: '4/3', overflow: 'hidden' },
  projectImgEl: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .6s ease' },
  projectBadge: { position: 'absolute', top: 16, left: 16, fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#c9a05c', fontStyle: 'italic', background: 'rgba(14,14,12,.7)', padding: '4px 12px', borderRadius: 999 },
  projectInfo: { padding: '20px 0' },
  projectName: { fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, margin: '0 0 8px', color: '#f3eee0' },
  projectMeta: { display: 'flex', gap: 8, fontSize: 13, color: '#9c948a', letterSpacing: '.04em' },
  projectDot: { color: '#c9a05c' },
  projectLink: { display: 'inline-block', color: '#c9a05c', fontWeight: 500, fontSize: 13, marginTop: 14, borderBottom: '1px solid #c9a05c', paddingBottom: 3 },

  quote: { padding: '120px 56px', maxWidth: 980, margin: '0 auto', textAlign: 'center', borderTop: '1px solid #1f1f1c' },
  quoteMark: { fontFamily: "'Cormorant Garamond', serif", fontSize: 180, color: '#c9a05c', lineHeight: .8, marginBottom: -10 },
  quoteText: { fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.45, color: '#e6e0d4', margin: 0, fontStyle: 'normal', fontWeight: 300 },
  quoteSig: { marginTop: 40, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '.18em', color: '#c9a05c', textTransform: 'uppercase' },

  cta: { padding: '40px 56px 120px' },
  ctaInner: { background: '#1a1a17', borderRadius: 24, border: '1px solid #2a2a25', padding: '80px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  ctaTitle: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(48px, 6.5vw, 96px)', lineHeight: 1, letterSpacing: '-.02em', margin: 0, color: '#f3eee0' },
  ctaContact: { display: 'flex', justifyContent: 'center', gap: 80, marginTop: 48, flexWrap: 'wrap' },
  ctaItem: { display: 'flex', flexDirection: 'column', gap: 6 },
  ctaLabel: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.2em', color: '#c9a05c' },
  ctaValue: { fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#f3eee0' },
  ctaBtn: { display: 'inline-block', marginTop: 48, background: '#c9a05c', color: '#0e0e0c', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: 15, cursor: 'pointer' },

  foot: { padding: '32px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1f1f1c' },
  footRight: { display: 'flex', gap: 28, fontSize: 12, color: '#9c948a', alignItems: 'center' },
  footMute: { color: '#5a554c', marginLeft: 16 },
};

window.PremiumSite = PremiumSite;

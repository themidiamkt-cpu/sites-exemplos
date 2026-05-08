/* Casa & Cor — warm residential, terracotta + cream, photography-led */
function CasaSite() {
  const c = casaStyles;
  const projects = [
    {
      name: 'Casa Mariana',
      loc: 'Granja Viana · Cotia',
      area: '420 m²',
      year: '2024',
      img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&auto=format&fit=crop&q=85',
      quote: '"Pediram uma casa para envelhecer junto. A gente fez."',
    },
    {
      name: 'Apto Higienópolis',
      loc: 'Higienópolis · SP',
      area: '180 m²',
      year: '2024',
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&auto=format&fit=crop&q=85',
      quote: '"Reforma sobre uma planta dos anos 70. O coração ficou."',
    },
    {
      name: 'Casa do Lago',
      loc: 'Itu · SP',
      area: '680 m²',
      year: '2023',
      img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&auto=format&fit=crop&q=85',
      quote: '"O programa começou pela varanda. Tudo se ajustou em volta."',
    },
  ];
  return (
    <div style={c.wrap}>
      {/* Nav */}
      <nav style={c.nav}>
        <div style={c.brand}>
          <span style={c.brandSerif}>The Midia</span>
          <span style={c.brandAmp}>&</span>
          <span style={c.brandSerif}>Arquitetura</span>
        </div>
        <ul style={c.navList}>
          <li>Projetos</li><li>Atelier</li><li>Imprensa</li><li>Contato</li>
        </ul>
        <a style={c.navCta}>Agende uma visita →</a>
      </nav>

      {/* Hero */}
      <section style={c.hero}>
        <div style={c.heroL}>
          <div style={c.heroEyebrow}>· ARQUITETURA RESIDENCIAL · 2011 — HOJE</div>
          <h1 style={c.heroTitle}>
            A casa que parece<br />
            <em style={c.italic}>que sempre esteve ali.</em>
          </h1>
          <p style={c.heroLede}>
            Projetamos casas e apartamentos pensados para <em style={c.italic}>vida longa</em> — materiais
            naturais, escala humana e luz que muda durante o dia. Atendemos famílias em São Paulo, interior
            e litoral norte.
          </p>
          <div style={c.heroActions}>
            <a style={c.heroBtn}>Ver projetos</a>
            <a style={c.heroBtnGhost}>Como trabalhamos →</a>
          </div>
        </div>
        <div style={c.heroR}>
          <div style={c.heroImgFrame}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=85" style={c.heroImg} alt="" />
          </div>
          <div style={c.heroBadge}>
            <div style={c.heroBadgeN}>14</div>
            <div style={c.heroBadgeLabel}>anos<br />de atelier</div>
          </div>
        </div>
      </section>

      {/* Strip */}
      <section style={c.strip}>
        <div style={c.stripItem}>
          <div style={c.stripN}>62</div>
          <div style={c.stripLabel}>obras concluídas</div>
        </div>
        <div style={c.stripItem}>
          <div style={c.stripN}>4</div>
          <div style={c.stripLabel}>prêmios IAB</div>
        </div>
        <div style={c.stripItem}>
          <div style={c.stripN}>11</div>
          <div style={c.stripLabel}>publicações Casa Vogue</div>
        </div>
        <div style={c.stripItem}>
          <div style={c.stripN}>SP · RJ</div>
          <div style={c.stripLabel}>onde atuamos</div>
        </div>
      </section>

      {/* Projects — alternating layout */}
      <section style={c.projects}>
        <div style={c.projectsHead}>
          <div style={c.projectsEyebrow}>— SELECIONADOS</div>
          <h2 style={c.projectsTitle}>Cada casa<br /><em style={c.italic}>tem sua história.</em></h2>
        </div>
        {projects.map((p, i) => (
          <article key={p.name} style={{ ...c.project, flexDirection: i % 2 === 1 ? 'row-reverse' : 'row' }}>
            <div style={c.projectImgWrap}>
              <img src={p.img} alt={p.name} style={c.projectImg} />
            </div>
            <div style={c.projectInfo}>
              <div style={c.projectIndex}>0{i + 1} · {p.year}</div>
              <h3 style={c.projectName}>{p.name}</h3>
              <div style={c.projectMeta}>
                <div><span style={c.metaLabel}>Local</span><span>{p.loc}</span></div>
                <div><span style={c.metaLabel}>Área</span><span>{p.area}</span></div>
              </div>
              <p style={c.projectQuote}>{p.quote}</p>
              <a style={c.projectLink}>Ver o projeto completo  →</a>
            </div>
          </article>
        ))}
      </section>

      {/* Process */}
      <section style={c.process}>
        <div style={c.processHead}>
          <div style={c.processEyebrow}>— COMO TRABALHAMOS</div>
          <h2 style={c.processTitle}>Quatro encontros,<br />uma casa pra vida.</h2>
        </div>
        <div style={c.processGrid}>
          {[
            ['01', 'Conversa', 'Sem prazo. A gente escuta sua família, sua rotina, seu terreno. Saímos com o programa.'],
            ['02', 'Estudo', 'Volumetria, implantação, primeiros materiais. Você participa de cada decisão.'],
            ['03', 'Projeto', 'Executivo completo: arquitetura, interiores, paisagismo, lighting.'],
            ['04', 'Obra', 'Acompanhamos canteiro semanalmente. Entrega da chave com a casa pronta de morar.'],
          ].map(([n, t, d]) => (
            <div key={n} style={c.processItem}>
              <div style={c.processNum}>{n}</div>
              <div style={c.processName}>{t}</div>
              <div style={c.processDesc}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={c.testimonial}>
        <div style={c.testimonialMark}>“</div>
        <p style={c.testimonialText}>
          A Mariana entendeu que a gente não queria uma casa de revista — queria uma casa pra envelhecer.
          Voltamos do canteiro toda semana com vontade de morar antes da hora.
        </p>
        <div style={c.testimonialSig}>
          <div style={c.testimonialName}>— Helena & Rodrigo Sá</div>
          <div style={c.testimonialRole}>moradores · Casa Mariana, 2024</div>
        </div>
      </section>

      {/* CTA */}
      <section style={c.cta}>
        <div style={c.ctaL}>
          <h3 style={c.ctaTitle}>
            Quer começar<br />a sua casa?
          </h3>
          <p style={c.ctaText}>
            Atendemos um número limitado de projetos por ano. Mande uma mensagem e marcamos uma conversa
            sem compromisso — presencial ou online.
          </p>
        </div>
        <div style={c.ctaR}>
          <div style={c.ctaCard}>
            <div style={c.ctaCardLabel}>Fale com a gente</div>
            <div style={c.ctaCardValue}>comercial@themidiamarketing.com.br</div>
            <div style={c.ctaCardLabel} style={{ ...c.ctaCardLabel, marginTop: 24 }}>Telefone</div>
            <div style={c.ctaCardValue}>+55 19 99931-5179</div>
            <a style={c.ctaCardBtn}>Quero conversar →</a>
          </div>
        </div>
      </section>

      <footer style={c.footer}>
        <div style={c.footerL}>
          <div style={c.brand}>
            <span style={c.brandSerif}>The Midia</span>
            <span style={c.brandAmp}>&</span>
            <span style={c.brandSerif}>Arquitetura</span>
          </div>
          <div style={c.footerSmall}>The Midia Arquitetura · Estúdio residencial · São Paulo.</div>
        </div>
        <div style={c.footerR}>
          <span>Instagram</span><span>Pinterest</span><span>Newsletter</span>
        </div>
      </footer>
    </div>
  );
}

const casaStyles = {
  wrap: { fontFamily: "'Manrope', sans-serif", color: '#2a1f17', background: '#f4ede4', fontSize: 14 },

  nav: {
    display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 40, alignItems: 'center',
    padding: '24px 56px', borderBottom: '1px solid #e2d5c3',
  },
  brand: { display: 'flex', alignItems: 'baseline', gap: 6 },
  brandSerif: { fontFamily: "'DM Serif Display', serif", fontSize: 28, color: '#2a1f17' },
  brandAmp: { fontFamily: "'DM Serif Display', serif", fontSize: 24, color: '#c2785a', fontStyle: 'italic' },
  navList: {
    listStyle: 'none', display: 'flex', justifyContent: 'center', gap: 32, padding: 0, margin: 0,
    fontSize: 14, color: '#594434',
  },
  navCta: {
    background: '#2a1f17', color: '#f4ede4', padding: '10px 18px', borderRadius: 999,
    fontSize: 13, fontWeight: 600, cursor: 'pointer',
  },

  hero: {
    display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60,
    padding: '80px 56px 100px', alignItems: 'center', maxWidth: 1280, margin: '0 auto',
  },
  heroL: {},
  heroEyebrow: { fontSize: 11, letterSpacing: '.18em', color: '#8c7660', marginBottom: 28 },
  heroTitle: {
    fontFamily: "'DM Serif Display', serif", fontWeight: 400,
    fontSize: 'clamp(52px, 7vw, 100px)', lineHeight: 1, letterSpacing: '-.02em',
    margin: 0, color: '#2a1f17',
  },
  italic: { fontStyle: 'italic', color: '#c2785a' },
  heroLede: { fontSize: 17, lineHeight: 1.6, color: '#594434', maxWidth: 520, marginTop: 28 },
  heroActions: { display: 'flex', gap: 16, marginTop: 36, alignItems: 'center' },
  heroBtn: { background: '#c2785a', color: '#fff', padding: '14px 28px', borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  heroBtnGhost: { color: '#2a1f17', fontSize: 14, fontWeight: 600, borderBottom: '1px solid #2a1f17', paddingBottom: 4, cursor: 'pointer' },

  heroR: { position: 'relative' },
  heroImgFrame: { borderRadius: 16, overflow: 'hidden', aspectRatio: '4/5' },
  heroImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  heroBadge: {
    position: 'absolute', bottom: -20, left: -20,
    width: 130, height: 130, borderRadius: '50%', background: '#c2785a', color: '#fff',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 12px 30px rgba(194,120,90,.3)',
  },
  heroBadgeN: { fontFamily: "'DM Serif Display', serif", fontSize: 48, lineHeight: 1 },
  heroBadgeLabel: { fontSize: 11, textAlign: 'center', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 },

  strip: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
    background: '#2a1f17', color: '#f4ede4',
    padding: '40px 56px',
  },
  stripItem: { padding: '0 24px', borderLeft: '1px solid #3d2e22' },
  stripN: { fontFamily: "'DM Serif Display', serif", fontSize: 48, lineHeight: 1, color: '#e8c9a8' },
  stripLabel: { fontSize: 12, letterSpacing: '.1em', color: '#a8907a', marginTop: 8, textTransform: 'uppercase' },

  projects: { padding: '120px 56px', maxWidth: 1280, margin: '0 auto' },
  projectsHead: { textAlign: 'center', marginBottom: 80 },
  projectsEyebrow: { fontSize: 11, letterSpacing: '.18em', color: '#8c7660' },
  projectsTitle: { fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(40px, 5.5vw, 80px)', lineHeight: 1.05, letterSpacing: '-.02em', margin: '20px 0 0' },
  project: {
    display: 'flex', gap: 60, alignItems: 'center', marginBottom: 100,
  },
  projectImgWrap: { flex: '1 1 55%', aspectRatio: '5/4', borderRadius: 16, overflow: 'hidden' },
  projectImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  projectInfo: { flex: '1 1 45%', display: 'flex', flexDirection: 'column', gap: 16 },
  projectIndex: { fontSize: 11, letterSpacing: '.18em', color: '#8c7660', textTransform: 'uppercase' },
  projectName: { fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05, margin: 0 },
  projectMeta: { display: 'flex', gap: 32, marginTop: 8 },
  metaLabel: { display: 'block', fontSize: 11, letterSpacing: '.14em', color: '#8c7660', textTransform: 'uppercase', marginBottom: 4 },
  projectQuote: { fontFamily: "'DM Serif Display', serif", fontSize: 22, fontStyle: 'italic', color: '#594434', lineHeight: 1.4, margin: '12px 0 0', borderLeft: '2px solid #c2785a', paddingLeft: 18 },
  projectLink: { color: '#c2785a', fontWeight: 600, fontSize: 14, marginTop: 8, cursor: 'pointer', borderBottom: '1px solid #c2785a', paddingBottom: 3, alignSelf: 'flex-start' },

  process: { padding: '120px 56px', background: '#ebe0d0', borderTop: '1px solid #d8c7b0' },
  processHead: { maxWidth: 1280, margin: '0 auto 60px', textAlign: 'center' },
  processEyebrow: { fontSize: 11, letterSpacing: '.18em', color: '#8c7660' },
  processTitle: { fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.05, margin: '20px 0 0' },
  processGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, maxWidth: 1280, margin: '0 auto' },
  processItem: { display: 'flex', flexDirection: 'column', gap: 12, padding: '24px 0', borderTop: '1px solid #c2785a' },
  processNum: { fontFamily: "'DM Serif Display', serif", fontSize: 36, color: '#c2785a' },
  processName: { fontFamily: "'DM Serif Display', serif", fontSize: 26 },
  processDesc: { fontSize: 14, color: '#594434', lineHeight: 1.6 },

  testimonial: {
    padding: '120px 56px', maxWidth: 880, margin: '0 auto', textAlign: 'center', position: 'relative',
  },
  testimonialMark: { fontFamily: "'DM Serif Display', serif", fontSize: 200, color: '#e2d5c3', lineHeight: .8, marginBottom: -40 },
  testimonialText: { fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.4, color: '#2a1f17', margin: 0, fontStyle: 'italic' },
  testimonialSig: { marginTop: 48 },
  testimonialName: { fontWeight: 600, fontSize: 16 },
  testimonialRole: { fontSize: 12, color: '#8c7660', marginTop: 6, letterSpacing: '.1em', textTransform: 'uppercase' },

  cta: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
    padding: '120px 56px', maxWidth: 1280, margin: '0 auto', alignItems: 'center',
  },
  ctaL: {},
  ctaTitle: { fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1, letterSpacing: '-.02em', margin: 0 },
  ctaText: { fontSize: 16, lineHeight: 1.6, color: '#594434', marginTop: 24, maxWidth: 480 },
  ctaR: {},
  ctaCard: { background: '#2a1f17', color: '#f4ede4', padding: 40, borderRadius: 20 },
  ctaCardLabel: { fontSize: 11, letterSpacing: '.18em', color: '#a8907a', textTransform: 'uppercase' },
  ctaCardValue: { fontFamily: "'DM Serif Display', serif", fontSize: 24, marginTop: 8 },
  ctaCardBtn: { display: 'block', marginTop: 32, background: '#c2785a', color: '#fff', textAlign: 'center', padding: '16px', borderRadius: 999, fontWeight: 600, cursor: 'pointer' },

  footer: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '32px 56px', borderTop: '1px solid #e2d5c3', background: '#ebe0d0',
  },
  footerL: { display: 'flex', flexDirection: 'column', gap: 6 },
  footerSmall: { fontSize: 12, color: '#8c7660' },
  footerR: { display: 'flex', gap: 28, fontSize: 13, color: '#594434' },
};

window.CasaSite = CasaSite;

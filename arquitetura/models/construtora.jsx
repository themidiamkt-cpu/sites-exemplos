/* Construtora Pro — engineering + architecture, structured corporate */
function ConstrutoraSite() {
  const c = construtoraStyles;
  const services = [
    { n: '01', title: 'Projeto arquitetônico', desc: 'Do anteprojeto ao executivo, com detalhamento completo para obra.' },
    { n: '02', title: 'Gerenciamento de obra', desc: 'Cronograma, fornecedores e fiscalização técnica em campo.' },
    { n: '03', title: 'Execução chave-na-mão', desc: 'Equipe própria, prazos garantidos em contrato e ART de execução.' },
    { n: '04', title: 'Reformas estruturais', desc: 'Laudos, projeto estrutural e execução de retrofit completo.' },
  ];
  const works = [
    { name: 'Edifício Comercial Anhanguera', cat: 'Comercial', area: '4.200 m²', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&auto=format&fit=crop&q=85' },
    { name: 'Residencial Park View', cat: 'Multifamiliar', area: '6.800 m²', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&auto=format&fit=crop&q=85' },
    { name: 'Galpão Logístico Sul', cat: 'Industrial', area: '12.500 m²', img: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1400&auto=format&fit=crop&q=85' },
  ];
  return (
    <div style={c.wrap}>
      <header style={c.bar}>
        <div style={c.barL}>
          <span>📞 +55 19 99931-5179</span>
          <span style={c.barDot}>·</span>
          <span>comercial@themidiamarketing.com.br</span>
        </div>
        <div style={c.barR}>
          <span>CREA-SP 5070123456</span>
          <span style={c.barDot}>·</span>
          <span>Atendimento Seg–Sex 8h–18h</span>
        </div>
      </header>

      <nav style={c.nav}>
        <div style={c.brand}>
          <img src="../assets/the-midia-logo.png" alt="The Midia Marketing" style={c.brandLogo} />
          <div>
            <div style={c.brandName}>The Midia Arquitetura</div>
            <div style={c.brandTag}>PROJETO · GERENCIAMENTO · EXECUÇÃO</div>
          </div>
        </div>
        <ul style={c.navList}>
          <li>Início</li><li>Serviços</li><li>Obras</li><li>Equipe</li><li>Imprensa</li><li>Contato</li>
        </ul>
        <a style={c.cta}>Solicitar orçamento</a>
      </nav>

      <section style={c.hero}>
        <div style={c.heroL}>
          <div style={c.eyebrow}>· DESDE 2009 · 84 OBRAS ENTREGUES ·</div>
          <h1 style={c.heroTitle}>
            Arquitetura que sai <span style={c.heroHl}>do papel</span> e vira obra entregue.
          </h1>
          <p style={c.heroLede}>
            Projetamos, gerenciamos e executamos. Equipe própria de engenharia,
            arquitetura e mestres de obra — uma única responsabilidade técnica do início ao fim.
          </p>
          <div style={c.heroActions}>
            <a style={c.btnPrimary}>Solicitar orçamento  →</a>
            <a style={c.btnGhost}>Ver obras entregues</a>
          </div>
          <div style={c.trust}>
            <div style={c.trustItem}>
              <strong>ISO 9001</strong>
              <span>Gestão de qualidade</span>
            </div>
            <div style={c.trustItem}>
              <strong>PBQP-H</strong>
              <span>Nível A</span>
            </div>
            <div style={c.trustItem}>
              <strong>CAU/CREA</strong>
              <span>RT própria</span>
            </div>
          </div>
        </div>
        <div style={c.heroR}>
          <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1400&auto=format&fit=crop&q=85" style={c.heroImg} alt="" />
          <div style={c.heroCard}>
            <div style={c.heroCardN}>+84</div>
            <div style={c.heroCardL}>obras entregues<br />em 16 anos de mercado</div>
          </div>
        </div>
      </section>

      <section style={c.services}>
        <div style={c.servicesHead}>
          <div style={c.eyebrowGreen}>NOSSAS FRENTES</div>
          <h2 style={c.h2}>Quatro frentes,<br />uma só responsabilidade técnica.</h2>
        </div>
        <div style={c.servicesGrid}>
          {services.map((s) => (
            <div key={s.n} style={c.svc}>
              <div style={c.svcN}>{s.n}</div>
              <h3 style={c.svcTitle}>{s.title}</h3>
              <p style={c.svcDesc}>{s.desc}</p>
              <a style={c.svcLink}>Saiba mais  →</a>
            </div>
          ))}
        </div>
      </section>

      <section style={c.works}>
        <div style={c.worksHead}>
          <div>
            <div style={c.eyebrowGreen}>OBRAS RECENTES</div>
            <h2 style={c.h2}>Entregamos no prazo,<br />no escopo e no orçamento.</h2>
          </div>
          <a style={c.worksCta}>Ver portfólio completo  →</a>
        </div>
        <div style={c.worksGrid}>
          {works.map((w, i) => (
            <article key={w.name} style={c.work}>
              <img src={w.img} alt={w.name} style={c.workImg} />
              <div style={c.workInfo}>
                <div style={c.workCat}>{w.cat}</div>
                <h3 style={c.workName}>{w.name}</h3>
                <div style={c.workMeta}>
                  <span style={c.workMetaItem}><strong>Área</strong> {w.area}</span>
                  <span style={c.workMetaItem}><strong>Status</strong> Entregue</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={c.process}>
        <div style={c.processHead}>
          <div style={c.eyebrowGreen}>NOSSO PROCESSO</div>
          <h2 style={c.h2}>5 etapas. Sem surpresa.</h2>
        </div>
        <div style={c.processSteps}>
          {[
            ['01', 'Briefing técnico', 'Visita ao terreno e levantamento de premissas.'],
            ['02', 'Anteprojeto', 'Estudo volumétrico, plantas e referências.'],
            ['03', 'Projeto executivo', 'Detalhamento completo + projetos complementares.'],
            ['04', 'Obra', 'Equipe própria com gestão diária e relatórios semanais.'],
            ['05', 'Entrega + manutenção', 'Vistoria, manual da obra e suporte por 12 meses.'],
          ].map(([n, t, d], i, arr) => (
            <div key={n} style={c.step}>
              <div style={c.stepN}>{n}</div>
              <div style={c.stepT}>{t}</div>
              <div style={c.stepD}>{d}</div>
              {i < arr.length - 1 && <div style={c.stepLine} />}
            </div>
          ))}
        </div>
      </section>

      <section style={c.testimonial}>
        <div style={c.tCard}>
          <div style={c.tQuote}>"</div>
          <p style={c.tText}>
            Contratamos só o projeto e acabamos passando a obra também — entrega no prazo,
            zero retrabalho. Faríamos de novo.
          </p>
          <div style={c.tSig}>
            <div style={c.tAvatar}>RC</div>
            <div>
              <div style={c.tName}>Rafael Coelho</div>
              <div style={c.tRole}>Diretor · Empreendimentos Coelho</div>
            </div>
          </div>
        </div>
      </section>

      <section style={c.ctaBig}>
        <div style={c.ctaBigInner}>
          <h2 style={c.ctaBigTitle}>Pronto para tirar seu projeto do papel?</h2>
          <p style={c.ctaBigLede}>Resposta em até 24h úteis. Orçamento sem compromisso.</p>
          <a style={c.btnPrimaryLg}>Falar no WhatsApp  →</a>
        </div>
      </section>

      <footer style={c.foot}>
        <div style={c.footTop}>
          <div>
            <div style={c.brand}>
              <img src="../assets/the-midia-logo.png" alt="The Midia Marketing" style={c.brandLogoLight} />
              <div>
                <div style={c.brandNameLight}>The Midia Arquitetura</div>
                <div style={c.brandTagLight}>PROJETO · GERENCIAMENTO · EXECUÇÃO</div>
              </div>
            </div>
            <p style={c.footAbout}>
              Escritório de arquitetura e construtora — projetando e executando obras
              residenciais, comerciais e industriais desde 2009.
            </p>
          </div>
          <div>
            <div style={c.footColTitle}>Serviços</div>
            <ul style={c.footList}><li>Projeto arquitetônico</li><li>Gerenciamento</li><li>Chave-na-mão</li><li>Reformas</li></ul>
          </div>
          <div>
            <div style={c.footColTitle}>Contato</div>
            <ul style={c.footList}>
              <li>+55 19 99931-5179</li>
              <li>comercial@themidiamarketing.com.br</li>
              <li>Av. Paulista 1000, sala 1402<br />São Paulo · SP</li>
            </ul>
          </div>
        </div>
        <div style={c.footBot}>
          <span>© 2025 The Midia Arquitetura · CNPJ 38.471.882/0001-04</span>
          <span>CREA-SP 5070123456 · CAU A123456-7</span>
        </div>
      </footer>
    </div>
  );
}

const construtoraStyles = {
  wrap: { fontFamily: "'Inter Tight', 'Inter', sans-serif", color: '#1a1f1c', background: '#f5f4f0', fontSize: 14 },

  bar: { background: '#1f4d3a', color: '#cfe5d8', fontSize: 12, padding: '8px 56px', display: 'flex', justifyContent: 'space-between' },
  barL: { display: 'flex', gap: 8 }, barR: { display: 'flex', gap: 8 },
  barDot: { color: '#5a8772' },

  nav: { display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 40, alignItems: 'center', padding: '20px 56px', background: '#fff', borderBottom: '1px solid #e3e0d8' },
  brand: { display: 'flex', alignItems: 'center', gap: 14 },
  brandLogo: { width: 48, height: 48, objectFit: 'contain', background: '#fff', borderRadius: 6, padding: 4 },
  brandLogoLight: { width: 48, height: 48, objectFit: 'contain', background: '#fff', borderRadius: 6, padding: 4 },
  brandMark: { width: 44, height: 44, background: '#1f4d3a', color: '#f5f4f0', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 16, letterSpacing: '-.02em', borderRadius: 4 },
  brandMarkLight: { width: 44, height: 44, background: '#cfe5d8', color: '#1f4d3a', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 16, letterSpacing: '-.02em', borderRadius: 4 },
  brandName: { fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: '-.02em', color: '#1a1f1c' },
  brandNameLight: { fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: '-.02em', color: '#f5f4f0' },
  brandTag: { fontSize: 10, letterSpacing: '.12em', color: '#5a6f63', marginTop: 2 },
  brandTagLight: { fontSize: 10, letterSpacing: '.12em', color: '#8aa395', marginTop: 2 },
  navList: { listStyle: 'none', display: 'flex', justifyContent: 'center', gap: 28, padding: 0, margin: 0, fontSize: 14, color: '#3a463e', fontWeight: 500 },
  cta: { background: '#1f4d3a', color: '#f5f4f0', padding: '12px 22px', borderRadius: 4, fontSize: 13, fontWeight: 600, cursor: 'pointer' },

  hero: { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, padding: '80px 56px', alignItems: 'center', background: '#f5f4f0' },
  heroL: { display: 'flex', flexDirection: 'column', gap: 28 },
  eyebrow: { fontSize: 12, letterSpacing: '.18em', color: '#1f4d3a', fontWeight: 600 },
  eyebrowGreen: { fontSize: 11, letterSpacing: '.22em', color: '#1f4d3a', fontWeight: 700 },
  heroTitle: { fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: 'clamp(40px, 5.6vw, 76px)', lineHeight: 1.02, letterSpacing: '-.035em', margin: 0, color: '#0f1411' },
  heroHl: { color: '#1f4d3a', position: 'relative', display: 'inline-block' },
  heroLede: { fontSize: 17, lineHeight: 1.6, color: '#3a463e', maxWidth: 540 },
  heroActions: { display: 'flex', gap: 16, marginTop: 8 },
  btnPrimary: { background: '#1f4d3a', color: '#f5f4f0', padding: '14px 26px', borderRadius: 4, fontWeight: 600, fontSize: 14, cursor: 'pointer' },
  btnPrimaryLg: { background: '#1f4d3a', color: '#f5f4f0', padding: '18px 36px', borderRadius: 4, fontWeight: 600, fontSize: 16, cursor: 'pointer', display: 'inline-block' },
  btnGhost: { color: '#1f4d3a', padding: '14px 8px', fontWeight: 600, fontSize: 14, borderBottom: '1px solid #1f4d3a', cursor: 'pointer' },
  trust: { display: 'flex', gap: 36, marginTop: 24, paddingTop: 24, borderTop: '1px solid #d8d4c8' },
  trustItem: { display: 'flex', flexDirection: 'column', gap: 2 },

  heroR: { position: 'relative' },
  heroImg: { width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', borderRadius: 4 },
  heroCard: { position: 'absolute', bottom: 24, left: -32, background: '#1f4d3a', color: '#f5f4f0', padding: '24px 28px', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 6 },
  heroCardN: { fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: 64, lineHeight: 1, letterSpacing: '-.04em' },
  heroCardL: { fontSize: 13, lineHeight: 1.4, color: '#cfe5d8' },

  services: { padding: '100px 56px', background: '#fff' },
  servicesHead: { marginBottom: 56, display: 'flex', flexDirection: 'column', gap: 12 },
  h2: { fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-.03em', margin: 0, color: '#0f1411' },
  servicesGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 },
  svc: { padding: '32px 28px', background: '#f5f4f0', borderRadius: 6, borderTop: '3px solid #1f4d3a' },
  svcN: { fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#1f4d3a', fontWeight: 700, letterSpacing: '.1em' },
  svcTitle: { fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: 21, margin: '14px 0 12px', letterSpacing: '-.02em', color: '#0f1411' },
  svcDesc: { fontSize: 14, lineHeight: 1.5, color: '#3a463e', margin: '0 0 20px' },
  svcLink: { fontSize: 13, fontWeight: 600, color: '#1f4d3a', cursor: 'pointer' },

  works: { padding: '100px 56px', background: '#f5f4f0' },
  worksHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 48 },
  worksCta: { fontSize: 14, fontWeight: 600, color: '#1f4d3a', borderBottom: '1px solid #1f4d3a', paddingBottom: 4, cursor: 'pointer' },
  worksGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
  work: { background: '#fff', borderRadius: 6, overflow: 'hidden', cursor: 'pointer' },
  workImg: { width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' },
  workInfo: { padding: 24 },
  workCat: { fontSize: 11, letterSpacing: '.16em', color: '#1f4d3a', fontWeight: 700 },
  workName: { fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: 22, margin: '8px 0 14px', letterSpacing: '-.02em', color: '#0f1411' },
  workMeta: { display: 'flex', gap: 24, fontSize: 13, color: '#3a463e' },
  workMetaItem: { display: 'flex', flexDirection: 'column' },

  process: { padding: '100px 56px', background: '#fff' },
  processHead: { textAlign: 'center', marginBottom: 64 },
  processSteps: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, position: 'relative' },
  step: { textAlign: 'center', padding: '0 8px', position: 'relative' },
  stepN: { width: 56, height: 56, borderRadius: '50%', background: '#1f4d3a', color: '#f5f4f0', display: 'grid', placeItems: 'center', margin: '0 auto 16px', fontWeight: 700, fontSize: 16, fontFamily: "'JetBrains Mono', monospace", position: 'relative', zIndex: 2 },
  stepT: { fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 8, letterSpacing: '-.01em' },
  stepD: { fontSize: 13, color: '#3a463e', lineHeight: 1.5 },
  stepLine: { position: 'absolute', top: 28, left: 'calc(50% + 32px)', width: 'calc(100% - 64px)', height: 1, borderTop: '1px dashed #1f4d3a', zIndex: 1 },

  testimonial: { padding: '0 56px 100px', background: '#fff' },
  tCard: { maxWidth: 880, margin: '0 auto', background: '#1f4d3a', color: '#f5f4f0', padding: '60px 64px', borderRadius: 8, position: 'relative' },
  tQuote: { fontFamily: 'Georgia, serif', fontSize: 120, color: '#cfe5d8', position: 'absolute', top: 8, left: 28, lineHeight: 1, opacity: .4 },
  tText: { fontFamily: "'Inter Tight', sans-serif", fontSize: 26, lineHeight: 1.4, fontWeight: 500, letterSpacing: '-.01em', position: 'relative', margin: '0 0 28px' },
  tSig: { display: 'flex', alignItems: 'center', gap: 16 },
  tAvatar: { width: 48, height: 48, borderRadius: '50%', background: '#cfe5d8', color: '#1f4d3a', display: 'grid', placeItems: 'center', fontWeight: 700 },
  tName: { fontWeight: 700, fontSize: 15 },
  tRole: { fontSize: 13, color: '#cfe5d8' },

  ctaBig: { padding: '0 56px 100px', background: '#fff' },
  ctaBigInner: { background: '#0f1411', color: '#f5f4f0', padding: '80px 56px', borderRadius: 8, textAlign: 'center' },
  ctaBigTitle: { fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-.03em', margin: 0, lineHeight: 1.1 },
  ctaBigLede: { fontSize: 17, color: '#a8b3ad', marginTop: 16, marginBottom: 36 },

  foot: { background: '#0f1411', color: '#a8b3ad', padding: '60px 56px 28px' },
  footTop: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 60, paddingBottom: 40, borderBottom: '1px solid #2a312d' },
  footAbout: { fontSize: 14, lineHeight: 1.6, marginTop: 20, color: '#8aa395', maxWidth: 380 },
  footColTitle: { fontWeight: 700, color: '#f5f4f0', marginBottom: 16, fontSize: 14, letterSpacing: '-.01em' },
  footList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 },
  footBot: { display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontSize: 12, color: '#5a6f63' },
};

window.ConstrutoraSite = ConstrutoraSite;

function AuroraSite() {
  const assetBase = window.location.pathname.includes('/arquitetura/') ? '../assets/' : 'assets/';
  const projects = [
    ['Residencial', 'Casa Mirante', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=85'],
    ['Residencial', 'Vila Jardim', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=85'],
    ['Comercial', 'Café Linha', 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&auto=format&fit=crop&q=85'],
    ['Comercial', 'Loja Prisma', 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=900&auto=format&fit=crop&q=85'],
    ['Interiores', 'Apartamento Norte', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=85'],
    ['Corporativo', 'Base Urbano', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=85'],
  ];

  return (
    <div style={c.page}>
      <header style={c.hero}>
        <nav style={c.nav}>
          <div style={c.brand}>
            <img src={`${assetBase}the-midia-logo.png`} alt="The Midia Marketing" style={c.logo} />
            <span>The Midia Arq</span>
          </div>
          <div style={c.links} className="aurora-links">
            <a>Home</a><a>Projetos</a><a>Arquitetos</a><a>Serviços</a><a>Contato</a>
          </div>
        </nav>
        <div style={c.heroCenter}>
          <p style={c.kicker}>Residencial · Comercial · Interiores</p>
          <h1 style={c.heroTitle}>Residência Aurora</h1>
          <span style={c.heroLine}></span>
          <p style={c.heroSub}>Projeto autoral para viver melhor, apresentar melhor e construir com clareza.</p>
          <a style={c.down}>Conheça o projeto</a>
        </div>
      </header>

      <section style={c.aboutIntro}>
        <img src={`${assetBase}the-midia-logo.png`} alt="The Midia Marketing" style={c.centerLogo} />
        <p>
          Somos a The Midia Arq, um estúdio de arquitetura e interiores que transforma briefing, rotina e investimento
          em espaços funcionais, elegantes e possíveis de executar. Cada projeto nasce de escuta, estudo técnico e direção
          estética para que o cliente visualize antes, aprove com segurança e acompanhe cada etapa.
        </p>
      </section>

      <section style={c.people}>
        <div style={c.sectionHead}>
          <h2>Quem somos</h2>
          <span>The Midia Arq</span>
        </div>
        <div style={c.peopleGrid}>
          {[
            ['Marina Duarte', 'Arquiteta líder', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=85'],
            ['Rafael Monteiro', 'Direção de projetos', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=85'],
          ].map(([name, role, img]) => (
            <article style={c.person} key={name}>
              <img src={img} alt="" style={c.avatar} />
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
        <a style={c.outline}>Conheça os arquitetos</a>
      </section>

      <div style={c.divider}>Projetamos e construímos histórias</div>

      <section style={c.projects}>
        <div style={c.sectionHeadDark}>
          <h2>Projetos</h2>
          <span>The Midia Arq</span>
          <p>Projetos residenciais e comerciais com apresentação visual forte, documentação clara e foco em execução.</p>
        </div>
        <div style={c.projectColumns}>
          <div>
            <h3>Residencial</h3>
            <div style={c.mosaic}>
              {projects.slice(0, 3).map(([type, title, img]) => (
                <article style={c.tile} key={title}>
                  <img src={img} alt="" style={c.tileImg} />
                  <span style={c.tileType}>{type}</span>
                  <strong style={c.tileTitle}>{title}</strong>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3>Comercial</h3>
            <div style={c.mosaic}>
              {projects.slice(3).map(([type, title, img]) => (
                <article style={c.tile} key={title}>
                  <img src={img} alt="" style={c.tileImg} />
                  <span style={c.tileType}>{type}</span>
                  <strong style={c.tileTitle}>{title}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
        <a style={c.darkButton}>Ver mais projetos</a>
      </section>

      <div style={c.divider}>Do conceito ao espaço pronto</div>

      <section style={c.services}>
        <div style={c.sectionHead}>
          <h2>Serviços</h2>
          <span>The Midia Arq</span>
        </div>
        <div style={c.serviceRow} className="aurora-service-row">
          <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=85" alt="" style={c.serviceImg} />
          <p>
            Projetos de arquitetura e interiores para casas, apartamentos e espaços comerciais. A entrega inclui estudo
            de layout, conceito visual, imagens 3D, detalhamento técnico e orientação para tomada de decisão.
          </p>
        </div>
        <div style={{ ...c.serviceRow, ...c.serviceRowReverse }} className="aurora-service-row">
          <p>
            Também atuamos com reformas, ambientação, fachada, marcenaria e compatibilização com fornecedores para que
            estética, orçamento e execução caminhem juntos desde o início.
          </p>
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&q=85" alt="" style={c.serviceImg} />
        </div>
      </section>

      <section style={c.mapSection}>
        <div style={c.sectionHead}>
          <h2>Projetos pelo Brasil</h2>
          <span>Atendimento presencial e online</span>
        </div>
        <div style={c.mapBox}>
          <div style={{ ...c.state, top: '18%', left: '46%', width: 84, height: 62 }}>PA</div>
          <div style={{ ...c.state, top: '32%', left: '38%', width: 72, height: 54 }}>TO</div>
          <div style={{ ...c.stateActive, top: '44%', left: '50%', width: 94, height: 74 }}>GO</div>
          <div style={{ ...c.state, top: '58%', left: '56%', width: 82, height: 58 }}>MG</div>
          <div style={{ ...c.stateDark, top: '70%', left: '60%', width: 64, height: 50 }}>SP</div>
          <div style={{ ...c.state, top: '80%', left: '53%', width: 58, height: 44 }}>PR</div>
        </div>
        <strong style={c.mapCaption}>São Paulo · Paraná · Goiás · Minas Gerais</strong>
      </section>

      <section style={c.feedbacks}>
        <div style={c.sectionHead}>
          <h2>Feedbacks</h2>
          <span>O que clientes relatam</span>
        </div>
        <div style={c.cards}>
          {[
            ['Giovana Cunha', 'A apresentação em 3D deixou tudo claro antes da reforma começar.'],
            ['Leonardo Masson', 'Projeto bonito, técnico e possível de executar dentro do orçamento.'],
            ['Renata Populin', 'O acompanhamento nos deu segurança para decidir materiais e prazos.'],
            ['Gustavo Carmo', 'Profissionalismo do começo ao fim. O espaço ficou acima do esperado.'],
          ].map(([name, text]) => (
            <article style={c.feedback} key={name}>
              <div style={c.clientDot}>{name.charAt(0)}</div>
              <strong>{name}</strong>
              <span>★★★★★</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={c.contact} className="aurora-contact">
        <div>
          <img src={`${assetBase}the-midia-logo.png`} alt="The Midia Marketing" style={c.contactLogo} />
          <p>Projetos residenciais, comerciais e interiores com identidade, técnica e execução consciente.</p>
        </div>
        <div style={c.contactList}>
          <strong>Contato</strong>
          <span>WhatsApp · (19) 99931-5179</span>
          <span>Email · comercial@themidiamarketing.com.br</span>
          <span>Atendimento · São Paulo e online</span>
        </div>
      </section>

      <footer style={c.footer}>The Midia Arq · Copyright 2026 · Todos os direitos reservados</footer>

      <style>{`
        @media (max-width: 820px) {
          .aurora-links { display: none !important; }
          .aurora-service-row { grid-template-columns: 1fr !important; margin-left: 0 !important; text-align: center !important; }
          .aurora-service-row img { margin: 0 auto !important; }
          .aurora-contact { grid-template-columns: 1fr !important; text-align: center !important; }
        }
      `}</style>
    </div>
  );
}

const c = {
  page: { background: '#ecebea', color: '#222', fontFamily: "'Manrope', sans-serif", lineHeight: 1.5 },
  hero: {
    minHeight: 620, position: 'relative', color: '#fff',
    backgroundImage: 'linear-gradient(rgba(0,0,0,.70), rgba(0,0,0,.58)), url(https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1800&auto=format&fit=crop&q=85)',
    backgroundSize: 'cover', backgroundPosition: 'center',
  },
  nav: { height: 78, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 9vw', fontSize: 13 },
  brand: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textTransform: 'uppercase', letterSpacing: 1.8, fontSize: 11 },
  logo: { width: 54, height: 54, objectFit: 'contain', filter: 'brightness(0) invert(1)' },
  links: { display: 'flex', gap: 28, color: '#f3f3f3' },
  heroCenter: { minHeight: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px' },
  kicker: { margin: 0, fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#d8d8d8' },
  heroTitle: { margin: '20px 0 8px', fontSize: 'clamp(44px, 7vw, 86px)', fontWeight: 300, letterSpacing: 1, textTransform: 'uppercase' },
  heroLine: { width: 150, height: 1, background: '#fff', display: 'block', marginBottom: 16 },
  heroSub: { margin: 0, maxWidth: 520, color: '#e3e3e3' },
  down: { marginTop: 28, color: '#fff', border: '1px solid rgba(255,255,255,.65)', borderRadius: 999, padding: '10px 24px', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1.2 },
  aboutIntro: { maxWidth: 1120, margin: '0 auto', padding: '44px 24px 30px', textAlign: 'center', color: '#4d4d4d', fontSize: 14 },
  centerLogo: { width: 112, height: 112, objectFit: 'contain', marginBottom: 18 },
  people: { maxWidth: 1040, margin: '0 auto', padding: '20px 24px 60px', textAlign: 'center' },
  sectionHead: { textAlign: 'center', marginBottom: 32 },
  sectionHeadDark: { textAlign: 'center', marginBottom: 32, color: '#e9e9e9' },
  peopleGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 52, alignItems: 'start', margin: '0 auto 28px', maxWidth: 720 },
  person: { textAlign: 'center' },
  avatar: { width: 240, height: 240, borderRadius: '50%', objectFit: 'cover', border: '5px solid #ecebea', outline: '2px solid #9c9c9c', filter: 'grayscale(1)' },
  outline: { display: 'inline-flex', padding: '10px 32px', border: '1px solid #777', borderRadius: 999, fontSize: 13 },
  divider: { background: '#4c4c4c', color: '#fff', textAlign: 'center', padding: '8px 12px', fontSize: 12 },
  projects: { background: '#171717', color: '#fff', padding: '62px 5vw' },
  projectColumns: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, maxWidth: 1180, margin: '0 auto' },
  mosaic: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 8 },
  tile: { minHeight: 190, position: 'relative', overflow: 'hidden', background: '#333' },
  tileImg: { width: '100%', height: '100%', minHeight: 190, objectFit: 'cover', display: 'block', filter: 'saturate(.85)' },
  tileType: { position: 'absolute', left: 14, top: 12, color: '#fff', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, textShadow: '0 1px 8px rgba(0,0,0,.5)' },
  tileTitle: { position: 'absolute', left: 14, bottom: 12, color: '#fff', fontSize: 18, textShadow: '0 1px 8px rgba(0,0,0,.5)' },
  darkButton: { display: 'table', margin: '34px auto 0', color: '#fff', border: '1px solid #888', borderRadius: 999, padding: '10px 30px', fontSize: 13 },
  services: { maxWidth: 1040, margin: '0 auto', padding: '70px 24px 56px' },
  serviceRow: { display: 'grid', gridTemplateColumns: '260px 1fr', gap: 50, alignItems: 'center', marginBottom: 54 },
  serviceRowReverse: { gridTemplateColumns: '1fr 260px', marginLeft: '10%' },
  serviceImg: { width: 260, height: 260, borderRadius: '50%', objectFit: 'cover', border: '5px solid #ecebea', outline: '2px solid #8e8e8e' },
  mapSection: { padding: '30px 24px 70px', textAlign: 'center' },
  mapBox: { width: 380, height: 360, margin: '0 auto 18px', position: 'relative' },
  state: { position: 'absolute', background: '#d5d5d5', border: '1px solid #f0f0f0', display: 'grid', placeItems: 'center', color: '#888', fontSize: 12, clipPath: 'polygon(12% 0,100% 10%,84% 92%,18% 100%,0 35%)' },
  stateActive: { position: 'absolute', background: '#a9a9a9', border: '1px solid #f0f0f0', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 12, clipPath: 'polygon(12% 0,100% 10%,84% 92%,18% 100%,0 35%)' },
  stateDark: { position: 'absolute', background: '#4d4d4d', border: '1px solid #f0f0f0', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 12, clipPath: 'polygon(12% 0,100% 10%,84% 92%,18% 100%,0 35%)' },
  mapCaption: { display: 'block', color: '#333' },
  feedbacks: { padding: '40px 24px 70px' },
  cards: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 18, maxWidth: 1120, margin: '0 auto' },
  feedback: { background: '#f6f6f6', textAlign: 'center', padding: 22, borderRadius: 2, color: '#333', boxShadow: '0 10px 28px rgba(0,0,0,.05)' },
  clientDot: { width: 42, height: 42, borderRadius: '50%', margin: '0 auto 10px', display: 'grid', placeItems: 'center', background: '#d8d8d8', color: '#555', fontWeight: 800 },
  contact: { background: '#202020', color: '#ededed', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 42, padding: '56px 9vw', alignItems: 'center' },
  contactLogo: { width: 150, height: 120, objectFit: 'contain', filter: 'brightness(0) invert(1)' },
  contactList: { display: 'grid', gap: 12, color: '#d8d8d8' },
  footer: { background: '#111', color: '#9a9a9a', textAlign: 'center', fontSize: 12, padding: '14px 20px' },
};

window.AuroraSite = AuroraSite;

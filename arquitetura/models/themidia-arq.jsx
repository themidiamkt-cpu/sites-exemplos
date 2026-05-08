/* The Midia Arq — landing de interiores inspirada em estrutura comercial vertical */
function TheMidiaArqSite() {
  const c = theMidiaArqStyles;
  const serviceCards = [
    {
      name: 'Essencial',
      sub: 'Para quem busca direção profissional, praticidade e escolhas mais assertivas.',
      img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&auto=format&fit=crop&q=85',
      label: 'MONTE UM ORÇAMENTO',
    },
    {
      name: 'Pro',
      sub: 'Para quem deseja visualizar a transformação antes de executar.',
      img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&auto=format&fit=crop&q=85',
      label: 'MONTE UM ORÇAMENTO',
    },
    {
      name: 'Arquitetura de Interiores',
      sub: 'Para transformar o ambiente do conceito ao detalhamento.',
      img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1600&auto=format&fit=crop&q=85',
      label: 'PROJETO COMPLETO',
    },
  ];
  const projects = [
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&auto=format&fit=crop&q=85',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&auto=format&fit=crop&q=85',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=85',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop&q=85',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=85',
    'https://images.unsplash.com/photo-1615529162924-f8605388461d?w=900&auto=format&fit=crop&q=85',
  ];
  return (
    <div style={c.wrap}>
      <section style={c.hero}>
        <div style={c.heroShade} />
        <div style={c.brandPill}>
          <span>themidia</span><strong>arquitetura.</strong>
        </div>
        <div style={c.heroContent}>
          <h1 style={c.heroTitle}>
            Projetos de <span>interiores</span><br />
            que unem técnica, estética<br />
            e acolhimento
          </h1>
          <p style={c.heroText}>
            Soluções personalizadas para transformar cada ambiente em um espaço único,
            pensado para proporcionar harmonia, funcionalidade e estilo no dia a dia.
          </p>
          <div style={c.heroActions}>
            <a style={c.primary}>Quero transformar meu espaço</a>
            <a style={c.whiteBtn}>Conheça nossos trabalhos</a>
          </div>
        </div>
      </section>

      <section style={c.problem}>
        <div style={c.problemText}>
          <div style={c.kicker}>VOCÊ SE IDENTIFICA?</div>
          <h2 style={c.problemTitle}>Seu lar merece<br />contar a sua história</h2>
          <p style={c.problemLead}>
            A gente sabe como é chegar em casa e não sentir que aquele espaço
            realmente seu. Você não está sozinha nessa.
          </p>
          <div style={c.painList}>
            {[
              ['Você olha para seu espaço e sente que falta algo?', 'Aquela sensação de que o ambiente não traduz sua fase atual, sua rotina ou seu gosto.'],
              ['Já tentou decorar sozinha e se frustrou?', 'Horas em referências, compras por impulso e no final nada conversa entre si.'],
              ['Sente medo de investir e não gostar do resultado?', 'A insegurança de escolher errado cores, texturas e proporções.'],
              ['Informação demais e decisão de menos?', 'Tantas opções que fica difícil saber por onde começar.'],
            ].map(([title, desc]) => (
              <div key={title} style={c.painItem}>
                <span style={c.painIcon}>✦</span>
                <div><strong>{title}</strong><p>{desc}</p></div>
              </div>
            ))}
          </div>
          <p style={c.answer}>A The Midia Arq foi feita para você.</p>
          <a style={c.problemBtn}>Quero transformar meu espaço</a>
        </div>
        <div style={c.problemMedia}>
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=85" alt="" style={c.problemImg} />
          <div style={c.quoteCard}>
            <p>“O projeto trouxe clareza para decisões que antes pareciam impossíveis.”</p>
            <span>Cliente The Midia</span>
          </div>
        </div>
      </section>

      <section style={c.services}>
        <div style={c.centerHead}>
          <h2 style={c.sectionTitle}>Nossos serviços</h2>
          <p>Soluções personalizadas para transformar cada ambiente com estética, funcionalidade e identidade.</p>
          <strong>Escolha o serviço ideal para o seu projeto.</strong>
        </div>
        <div style={c.servicesGrid}>
          {serviceCards.map((card, i) => (
            <article key={card.name} style={{ ...c.serviceCard, gridColumn: i === 2 ? 'span 2' : 'span 1' }}>
              <div>
                <h3>{card.name}</h3>
                <p>{card.sub}</p>
              </div>
              <div style={c.serviceImageWrap}>
                <img src={card.img} alt="" style={c.serviceImg} />
                <span style={c.badge}>{card.label}</span>
                <strong style={c.serviceName}>{card.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={c.projects}>
        <div style={c.projectsHead}>
          <h2 style={c.sectionTitle}>Nossos projetos</h2>
          <p>Cada projeto é uma história única. Conheça alguns ambientes que transformamos com técnica e sensibilidade.</p>
        </div>
        <div style={c.projectGrid}>
          {projects.map((src, i) => (
            <div key={src} style={c.projectItem}>
              <img src={src} alt={`Ambiente ${i + 1}`} style={c.projectImg} />
            </div>
          ))}
        </div>
        <div style={c.center}>
          <a style={c.primary}>Solicitar análise do seu ambiente</a>
        </div>
      </section>

      <section style={c.about}>
        <div style={c.aboutText}>
          <h2 style={c.sectionTitle}>Quem somos</h2>
          <p>
            A The Midia Arq nasceu do encontro entre duas visões: uma mais estratégica e outra mais sensível.
            Juntas, transformamos interiores autorais em espaços possíveis de viver, executar e manter.
          </p>
          <p>
            Nosso processo combina escuta, curadoria, técnica e planejamento para que cada escolha tenha
            intenção, beleza e função.
          </p>
          <blockquote style={c.aboutQuote}>
            “Para nós, mais do que projetar ambientes, nosso propósito é criar espaços que acolhem,
            contam histórias e fazem sentido para quem vive neles.”
          </blockquote>
          <div style={c.stats}>
            <div><strong>+20</strong><span>anos de experiência</span></div>
            <div><strong>+100</strong><span>projetos finalizados</span></div>
            <div><strong>∞</strong><span>vidas transformadas</span></div>
          </div>
        </div>
        <div style={c.aboutPhotos}>
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop&q=85" alt="" style={c.aboutBig} />
          <div style={c.aboutSmallGrid}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=85" alt="" />
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=85" alt="" />
          </div>
        </div>
      </section>

      <section style={c.testimonials}>
        <div>
          <h2 style={c.sectionTitle}>O que dizem</h2>
          <p>A satisfação dos nossos clientes é o que nos move. Confira o que dizem sobre a experiência com a The Midia Arq.</p>
          <a style={c.problemBtn}>Junte-se a nós</a>
        </div>
        <div style={c.reviewCards}>
          {[
            ['Vanessa Polati', 'Impecável! O projeto trouxe sofisticação e aconchego sem perder funcionalidade.'],
            ['Tayna Arruda', 'Equipe atenta aos detalhes. O 3D deixou tudo claro antes da execução.'],
          ].map(([name, text]) => (
            <article key={name} style={c.review}>
              <strong>{name}</strong>
              <div style={c.stars}>★★★★★</div>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer style={c.footer}>
        <div>
          <div style={c.footerLogo}>themidia<strong>arquitetura.</strong></div>
          <p>Arquitetura e interiores com técnica, sensibilidade e acolhimento para transformar espaços em experiências únicas.</p>
        </div>
        <div>
          <strong>Navegação</strong>
          <span>Início</span><span>Sobre</span><span>Serviços</span><span>Projetos</span>
        </div>
        <div>
          <strong>Contato</strong>
          <span>WhatsApp</span><span>@themidia.arquitetura</span>
        </div>
      </footer>
    </div>
  );
}

const theMidiaArqStyles = {
  wrap: { background: '#eee9e1', color: '#596071', fontFamily: "'Manrope', sans-serif", fontSize: 14 },
  hero: { minHeight: 650, position: 'relative', display: 'grid', placeItems: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&auto=format&fit=crop&q=85)', backgroundSize: 'cover', backgroundPosition: 'center' },
  heroShade: { position: 'absolute', inset: 0, background: 'rgba(55,61,67,.50)' },
  brandPill: { position: 'absolute', top: 112, right: '23%', background: '#bf6d47', color: '#fff', borderRadius: 999, padding: '5px 12px', fontWeight: 800, display: 'flex', gap: 2 },
  heroContent: { position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff', maxWidth: 780, padding: '0 24px', textShadow: '0 3px 18px rgba(0,0,0,.32)' },
  heroTitle: { margin: 0, textTransform: 'uppercase', fontWeight: 900, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: .95, letterSpacing: '-.03em' },
  heroText: { maxWidth: 560, margin: '22px auto 0', lineHeight: 1.55, color: 'rgba(255,255,255,.86)' },
  heroActions: { marginTop: 28, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' },
  primary: { display: 'inline-block', background: '#bf6d47', color: '#fff', padding: '13px 22px', borderRadius: 6, fontSize: 12, fontWeight: 900, textTransform: 'uppercase' },
  whiteBtn: { display: 'inline-block', background: '#fff', color: '#596071', padding: '13px 22px', borderRadius: 6, fontSize: 12, fontWeight: 900 },
  problem: { maxWidth: 1160, margin: '0 auto', padding: '74px 28px 86px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' },
  kicker: { color: '#bf6d47', fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.04em', marginBottom: 12 },
  problemTitle: { margin: 0, textTransform: 'uppercase', fontSize: 'clamp(36px, 4vw, 58px)', lineHeight: .98, fontWeight: 300, color: '#596071' },
  problemLead: { color: '#596071', fontWeight: 700, lineHeight: 1.55, marginTop: 22 },
  painList: { display: 'grid', gap: 16, marginTop: 28 },
  painItem: { display: 'grid', gridTemplateColumns: '26px 1fr', gap: 8 },
  painIcon: { color: '#bf6d47', fontWeight: 900 },
  answer: { color: '#bf6d47', fontWeight: 900, marginTop: 28 },
  problemBtn: { display: 'inline-block', marginTop: 18, background: '#bf6d47', color: '#fff', padding: '13px 18px', borderRadius: 6, fontSize: 12, fontWeight: 900, textTransform: 'uppercase' },
  problemMedia: { position: 'relative' },
  problemImg: { width: '100%', borderRadius: 16, display: 'block', boxShadow: '0 18px 40px rgba(70,56,45,.18)' },
  quoteCard: { position: 'absolute', left: -24, bottom: -24, width: 260, background: '#fff', padding: 18, borderRadius: 12, boxShadow: '0 18px 40px rgba(70,56,45,.18)', color: '#596071' },
  services: { background: '#e1dbd1', padding: '70px 28px 86px' },
  centerHead: { textAlign: 'center', maxWidth: 760, margin: '0 auto 48px' },
  sectionTitle: { margin: 0, textTransform: 'uppercase', fontSize: 'clamp(34px, 4vw, 58px)', lineHeight: 1, fontWeight: 300, color: '#596071' },
  servicesGrid: { maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 },
  serviceCard: { display: 'grid', gap: 10 },
  serviceImageWrap: { position: 'relative', overflow: 'hidden', borderRadius: 10, minHeight: 310 },
  serviceImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  badge: { position: 'absolute', top: 10, right: 10, background: '#bf6d47', color: '#fff', borderRadius: 999, padding: '7px 11px', fontSize: 10, fontWeight: 900 },
  serviceName: { position: 'absolute', left: 14, bottom: 14, color: '#fff', textTransform: 'uppercase', fontSize: 13, textShadow: '0 3px 12px rgba(0,0,0,.45)' },
  projects: { background: '#f2eee8', padding: '78px 0 70px' },
  projectsHead: { maxWidth: 980, margin: '0 auto 42px', padding: '0 28px' },
  projectGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 },
  projectItem: { minHeight: 360, overflow: 'hidden' },
  projectImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  center: { textAlign: 'center', marginTop: 32 },
  about: { background: '#e1dbd1', padding: '82px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' },
  aboutText: { maxWidth: 620, justifySelf: 'end' },
  aboutQuote: { background: '#f8f5ef', margin: '28px 0', padding: 24, borderRadius: 12, color: '#9a6a55', fontStyle: 'italic' },
  stats: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, color: '#bf6d47', textAlign: 'center' },
  aboutPhotos: { display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 18, maxWidth: 560 },
  aboutBig: { width: '100%', height: 420, objectFit: 'cover', borderRadius: 14 },
  aboutSmallGrid: { display: 'grid', gap: 18 },
  testimonials: { background: '#f2eee8', padding: '72px 28px', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 50, maxWidth: 1160, margin: '0 auto' },
  reviewCards: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 },
  review: { background: '#fff', borderRadius: 12, padding: 22, boxShadow: '0 12px 30px rgba(70,56,45,.08)' },
  stars: { color: '#f2b544', margin: '8px 0' },
  footer: { background: '#a95335', color: '#fff', padding: '56px 28px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 42 },
  footerLogo: { fontSize: 24, fontWeight: 400, marginBottom: 18 },
};

window.TheMidiaArqSite = TheMidiaArqSite;

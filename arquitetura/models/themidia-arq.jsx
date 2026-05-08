/* The Midia Arq — interiores sofisticados, pacotes e galeria sensorial */
function TheMidiaArqSite() {
  const c = theMidiaArqStyles;
  const packages = [
    {
      name: 'Direção de Ambiente',
      label: '01',
      img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&auto=format&fit=crop&q=85',
      desc: 'Para transformar um cômodo com layout, paleta, curadoria de peças e lista objetiva de compras.',
      items: ['layout sugerido', 'paleta e materiais', 'curadoria de móveis', 'guia de execução'],
    },
    {
      name: 'Projeto Visual',
      label: '02',
      img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&auto=format&fit=crop&q=85',
      desc: 'Para quem precisa visualizar a transformação antes de executar, com imagens e especificações.',
      items: ['estudo de conceito', 'imagens 3D', 'lista de fornecedores', 'orientação de compra'],
    },
    {
      name: 'Interiores Completo',
      label: '03',
      img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=85',
      desc: 'Para reformas completas, marcenaria, iluminação, detalhamento técnico e acompanhamento.',
      items: ['projeto executivo', 'marcenaria', 'iluminação', 'acompanhamento'],
    },
  ];

  const gallery = [
    ['Bar íntimo', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&auto=format&fit=crop&q=85'],
    ['Quarto acolhimento', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&auto=format&fit=crop&q=85'],
    ['Living madeira', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=85'],
    ['Hall com presença', 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&auto=format&fit=crop&q=85'],
    ['Jantar integrado', 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=900&auto=format&fit=crop&q=85'],
    ['Sala de leitura', 'https://images.unsplash.com/photo-1615529162924-f8605388461d?w=900&auto=format&fit=crop&q=85'],
  ];

  return (
    <div style={c.wrap}>
      <nav style={c.nav}>
        <div style={c.logo}>
          <span style={c.logoMark}>TM</span>
          <span>The Midia<br /><em>Interiores</em></span>
        </div>
        <div style={c.navLinks}>
          <span>Processo</span><span>Pacotes</span><span>Ambientes</span><span>Contato</span>
        </div>
        <a style={c.navBtn}>Analisar ambiente</a>
      </nav>

      <section style={c.hero}>
        <div style={c.heroText}>
          <div style={c.kicker}>ARQUITETURA DE INTERIORES · ONLINE E PRESENCIAL</div>
          <h1 style={c.heroTitle}>
            Ambientes com alma,<br />
            <em>medida e intenção.</em>
          </h1>
          <p style={c.heroLead}>
            Ajudamos você a transformar sua casa com direção estética, escolhas funcionais e um plano claro
            para executar sem compras erradas, excesso de dúvida ou obra sem fio condutor.
          </p>
          <div style={c.heroActions}>
            <a style={c.primary}>Solicitar análise</a>
            <a style={c.secondary}>Ver formatos →</a>
          </div>
        </div>
        <div style={c.heroMedia}>
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&auto=format&fit=crop&q=85" style={c.heroImg} alt="" />
          <div style={c.heroCard}>
            <strong>3 formatos</strong>
            <span>da consultoria ao projeto completo</span>
          </div>
        </div>
      </section>

      <section style={c.statement}>
        <span>Como trabalhamos</span>
        <p>
          Antes de desenhar, entendemos rotina, objetos que já têm história, orçamento e prazo.
          O projeto nasce dessa conversa: bonito, possível e coerente com quem vai viver ali.
        </p>
      </section>

      <section style={c.packages}>
        <div style={c.sectionHead}>
          <div style={c.kicker}>FORMATOS DE PROJETO</div>
          <h2 style={c.sectionTitle}>Escolha o nível de transformação.</h2>
        </div>
        <div style={c.packageGrid}>
          {packages.map((p) => (
            <article key={p.name} style={c.packageCard}>
              <img src={p.img} alt="" style={c.packageImg} />
              <div style={c.packageOverlay}>
                <div style={c.packageTop}>
                  <span>{p.label}</span>
                  <h3>{p.name}</h3>
                </div>
                <p>{p.desc}</p>
                <ul style={c.list}>
                  {p.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a style={c.packageBtn}>Quero esse formato</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={c.gallerySec}>
        <div style={c.sectionHeadSplit}>
          <div>
            <div style={c.kicker}>AMBIENTES</div>
            <h2 style={c.sectionTitle}>Uma galeria para sentir possibilidades.</h2>
          </div>
          <p>
            Cada imagem representa um tipo de decisão: luz, textura, proporção, circulação, memória e conforto.
          </p>
        </div>
        <div style={c.galleryGrid}>
          {gallery.map(([name, src]) => (
            <article key={name} style={c.galleryItem}>
              <img src={src} alt={name} style={c.galleryImg} />
              <div style={c.galleryOverlay}>
                <span>Ver ambiente</span>
                <strong>{name}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={c.reviews}>
        <div style={c.reviewIntro}>
          <div style={c.kicker}>DEPOIMENTOS</div>
          <h2 style={c.sectionTitle}>A casa muda quando o processo fica claro.</h2>
        </div>
        <div style={c.reviewGrid}>
          {[
            ['“Conseguimos decidir materiais, móveis e iluminação sem nos perder. O projeto deixou tudo mais simples.”', 'Marina A. · apartamento em Campinas'],
            ['“A equipe traduziu nosso gosto em uma casa elegante, mas possível de executar dentro do orçamento.”', 'Helena e Caio · casa térrea'],
          ].map(([text, name]) => (
            <blockquote key={name} style={c.review}>
              <p>{text}</p>
              <cite>{name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section style={c.cta}>
        <h2>Quer transformar um ambiente?</h2>
        <p>Envie fotos, medidas e o que está te incomodando. A gente indica o formato ideal para começar.</p>
        <a style={c.ctaBtn}>Solicitar análise do ambiente →</a>
      </section>

      <footer style={c.footer}>
        <div>The Midia Interiores</div>
        <div>comercial@themidiamarketing.com.br · +55 19 99931-5179</div>
      </footer>
    </div>
  );
}

const theMidiaArqStyles = {
  wrap: { background: '#2b1b14', color: '#f5eadf', fontFamily: "'Manrope', sans-serif", fontSize: 14 },
  nav: { display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 32, alignItems: 'center', padding: '24px 46px', borderBottom: '1px solid rgba(245,234,223,.16)' },
  logo: { display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, lineHeight: 1.1 },
  logoMark: { width: 42, height: 42, borderRadius: 999, background: '#a55f45', display: 'grid', placeItems: 'center', color: '#fff3ea', fontSize: 12 },
  navLinks: { display: 'flex', justifyContent: 'center', gap: 28, color: '#d0b9a8', fontSize: 13 },
  navBtn: { background: '#f2d0b8', color: '#2b1b14', padding: '11px 18px', borderRadius: 999, fontWeight: 800 },
  hero: { display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 54, alignItems: 'center', padding: '82px 46px 90px', maxWidth: 1360, margin: '0 auto' },
  heroText: { maxWidth: 660 },
  kicker: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.18em', color: '#c98566', textTransform: 'uppercase', marginBottom: 18 },
  heroTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(58px, 8vw, 112px)', lineHeight: .94, fontWeight: 400, letterSpacing: '-.03em', margin: 0 },
  heroLead: { color: '#d0b9a8', lineHeight: 1.7, fontSize: 17, maxWidth: 560, margin: '28px 0 0' },
  heroActions: { display: 'flex', gap: 18, alignItems: 'center', marginTop: 34, flexWrap: 'wrap' },
  primary: { background: '#a55f45', color: '#fff3ea', padding: '14px 24px', borderRadius: 999, fontWeight: 800 },
  secondary: { color: '#f2d0b8', borderBottom: '1px solid #a55f45', paddingBottom: 4, fontWeight: 700 },
  heroMedia: { position: 'relative' },
  heroImg: { width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '46% 46% 8px 8px', display: 'block' },
  heroCard: { position: 'absolute', left: -24, bottom: 34, background: '#f2d0b8', color: '#2b1b14', padding: 22, borderRadius: 18, width: 220, display: 'flex', flexDirection: 'column', gap: 5, boxShadow: '0 20px 60px rgba(0,0,0,.28)' },
  statement: { maxWidth: 1100, margin: '0 auto', padding: '70px 46px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 36, borderTop: '1px solid rgba(245,234,223,.16)', borderBottom: '1px solid rgba(245,234,223,.16)' },
  packages: { padding: '100px 46px', maxWidth: 1360, margin: '0 auto' },
  sectionHead: { maxWidth: 680, marginBottom: 42 },
  sectionHeadSplit: { display: 'grid', gridTemplateColumns: '1fr 420px', gap: 40, alignItems: 'end', marginBottom: 42 },
  sectionTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(38px, 5vw, 72px)', lineHeight: 1, fontWeight: 400, letterSpacing: '-.02em', margin: 0 },
  packageGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 },
  packageCard: { position: 'relative', minHeight: 560, overflow: 'hidden', borderRadius: 24, background: '#1b110d' },
  packageImg: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.68)' },
  packageOverlay: { position: 'absolute', inset: 0, padding: 26, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(180deg, rgba(43,27,20,.12), rgba(43,27,20,.92))' },
  packageTop: { display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'baseline' },
  list: { display: 'grid', gap: 7, margin: '18px 0 22px', padding: 0, listStyle: 'none', color: '#f2d0b8' },
  packageBtn: { background: '#f2d0b8', color: '#2b1b14', borderRadius: 999, padding: '12px 18px', fontWeight: 800, textAlign: 'center' },
  gallerySec: { padding: '40px 46px 100px', maxWidth: 1360, margin: '0 auto' },
  galleryGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, overflow: 'hidden', borderRadius: 24 },
  galleryItem: { position: 'relative', minHeight: 410, overflow: 'hidden' },
  galleryImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .5s ease' },
  galleryOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 42%, rgba(43,27,20,.82))', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', textAlign: 'center', padding: 24 },
  reviews: { padding: '90px 46px', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 42, borderTop: '1px solid rgba(245,234,223,.16)', borderBottom: '1px solid rgba(245,234,223,.16)' },
  reviewGrid: { display: 'grid', gap: 18 },
  review: { margin: 0, background: '#3a251b', padding: 28, borderRadius: 18, color: '#f5eadf' },
  cta: { textAlign: 'center', padding: '110px 46px', maxWidth: 900, margin: '0 auto' },
  ctaBtn: { display: 'inline-block', marginTop: 24, background: '#a55f45', color: '#fff3ea', padding: '16px 30px', borderRadius: 999, fontWeight: 800 },
  footer: { padding: '32px 46px', borderTop: '1px solid rgba(245,234,223,.16)', display: 'flex', justifyContent: 'space-between', gap: 18, color: '#d0b9a8' },
};

window.TheMidiaArqSite = TheMidiaArqSite;

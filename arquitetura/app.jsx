/* global React, ReactDOM */
const { useState, useEffect, useRef, useCallback } = React;

// ---- Config -----------------------------------------------------------------
const WHATSAPP_NUMBER = '5519999315179';
const SELLER_EMAIL = 'comercial@themidiamarketing.com.br';
const SELLER_NAME = 'The Midia';

const MODELS = [
  {
    id: 'atelier',
    name: 'Atelier Quieto',
    tag: 'Minimalista · Luxury',
    desc: 'Para quem entende que o silêncio também é projeto. Tipografia serifada, monocromático, espaço generoso.',
    price: 'R$ 1.497',
    badge: 'Mais vendido',
    fakeUrl: 'atelier-quieto.com',
    accent: '#1a1a1a',
    bg: '#faf8f5',
    cover: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    Component: () => window.AtelierSite ? <window.AtelierSite /> : null,
  },
  {
    id: 'estudio',
    name: 'Estúdio Vetor',
    tag: 'Editorial · Contemporâneo',
    desc: 'Layout assimétrico, projetos numerados, tipografia pesada. Para escritórios com obra autoral e voz forte.',
    price: 'R$ 1.397',
    fakeUrl: 'estudiovetor.arq.br',
    accent: '#FF3B00',
    bg: '#ffffff',
    cover: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80',
    Component: () => window.EstudioSite ? <window.EstudioSite /> : null,
  },
  {
    id: 'casa',
    name: 'Casa & Cor',
    tag: 'Residencial · Premium',
    desc: 'Tons quentes, terracota e creme. Foco em fotografia de obra concluída e narrativa de cliente.',
    price: 'R$ 1.397',
    fakeUrl: 'casaecor.arq.br',
    accent: '#c2785a',
    bg: '#f4ede4',
    cover: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=80',
    Component: () => window.CasaSite ? <window.CasaSite /> : null,
  },
  {
    id: 'forma',
    name: 'Forma Bruta',
    tag: 'Autoral · Brutalista',
    desc: 'Tipografia gigante, contraste alto, acento elétrico. Para arquitetos que querem impressionar de cara.',
    price: 'R$ 1.597',
    badge: 'Novo',
    fakeUrl: 'formabruta.studio',
    accent: '#d8ff3c',
    bg: '#0a0a0a',
    cover: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&auto=format&fit=crop&q=80',
    Component: () => window.FormaSite ? <window.FormaSite /> : null,
  },
  {
    id: 'interiores',
    name: 'Interiores Suave',
    tag: 'Interior Design · Lifestyle',
    desc: 'Paleta sage e blush, layout pinterest-style, atmosfera lifestyle. Ideal para designers de interiores.',
    fakeUrl: 'themidia-arquitetura.com.br',
    accent: '#97a08a',
    bg: '#f7f3ee',
    cover: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=80',
    Component: () => window.InterioresSite ? <window.InterioresSite /> : null,
  },
  {
    id: 'premium',
    name: 'Premium Alto Padrão',
    tag: 'Residencial Luxo · Dourado',
    desc: 'Visual escuro elegante com acentos dourados. Para arquitetos de alto padrão que querem transmitir exclusividade.',
    badge: 'Premium',
    fakeUrl: 'themidia-arquitetura.com.br',
    accent: '#c9a05c',
    bg: '#0e0e0c',
    cover: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&auto=format&fit=crop&q=80',
    Component: () => window.PremiumSite ? <window.PremiumSite /> : null,
  },
  {
    id: 'construtora',
    name: 'Construtora Pro',
    tag: 'Engenharia + Arquitetura',
    desc: 'Estrutura corporativa com números, equipe e portfólio por categoria. Para escritórios que também executam obra.',
    fakeUrl: 'themidia-arquitetura.com.br',
    accent: '#1f4d3a',
    bg: '#f5f4f0',
    cover: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1200&auto=format&fit=crop&q=80',
    Component: () => window.ConstrutoraSite ? <window.ConstrutoraSite /> : null,
  },
  {
    id: 'terracota',
    name: 'Terracota Autoral',
    tag: 'Interiores · Pacotes',
    desc: 'Inspirado em páginas de interiores com pacotes, galeria sensorial e CTA para análise do ambiente.',
    badge: 'Novo',
    fakeUrl: 'themidia-interiores.com.br',
    accent: '#a55f45',
    bg: '#2b1b14',
    cover: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80',
    Component: () => window.TerracotaSite ? <window.TerracotaSite /> : null,
  },
];

const waLink = (modelName) => {
  const text = encodeURIComponent(
    `Olá! Vi o modelo "${modelName}" no portfólio e quero saber mais sobre como contratar.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

// ---- Routing (hash-based) ---------------------------------------------------
const useHashRoute = () => {
  const [hash, setHash] = useState(() => window.location.hash.replace('#', '') || 'gallery');
  useEffect(() => {
    const onChange = () => setHash(window.location.hash.replace('#', '') || 'gallery');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const navigate = useCallback((to) => { window.location.hash = to; window.scrollTo(0, 0); }, []);
  return [hash, navigate];
};

// ---- Gallery ----------------------------------------------------------------
function Gallery({ navigate }) {
  return (
    <div style={galleryStyles.wrap}>
      <header style={galleryStyles.header}>
        <div style={galleryStyles.brandRow}>
          <div style={galleryStyles.brandMark}>
            <span style={galleryStyles.brandDot} />
            <span style={galleryStyles.brandName}>{SELLER_NAME}</span>
          </div>
          <a href={waLink('demonstração')} target="_blank" rel="noopener" style={galleryStyles.headerCta}>
            Falar no WhatsApp →
          </a>
        </div>

        <div style={galleryStyles.heroBlock}>
          <div style={galleryStyles.eyebrow}>SHOWCASE · 8 MODELOS PRONTOS</div>
          <h1 style={galleryStyles.title}>
            Sites para arquitetos<br />
            <span style={galleryStyles.titleAccent}>com cara de portfólio premium.</span>
          </h1>
          <p style={galleryStyles.lede}>
            Escolha o modelo que combina com a sua voz. Clique para abrir a demo completa,
            navegue como se fosse o seu cliente, e quando gostar, é um botão pra falar com a gente.
            Entregamos adaptado em até 7 dias.
          </p>

          <div style={galleryStyles.metaRow}>
            <Meta n="7" label="modelos completos" />
            <Meta n="7d" label="prazo de entrega" />
            <Meta n="100%" label="responsivo" />
            <Meta n="∞" label="ajustes inclusos*" />
          </div>
        </div>
      </header>

      <main style={galleryStyles.grid}>
        {MODELS.map((m, i) => (
          <button key={m.id} onClick={() => navigate(m.id)} style={galleryStyles.card}>
            <div style={{ ...galleryStyles.cardCover, background: `url(${m.cover}) center/cover` }}>
              {m.badge && <span style={galleryStyles.badge}>{m.badge}</span>}
              <div style={galleryStyles.cardOverlay}>
                <span style={galleryStyles.cardOpen}>Abrir demo →</span>
              </div>
            </div>
            <div style={galleryStyles.cardBody}>
              <div style={galleryStyles.cardTopRow}>
                <span style={galleryStyles.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
                <span style={galleryStyles.cardTag}>{m.tag}</span>
              </div>
              <h3 style={galleryStyles.cardName}>{m.name}</h3>
              <p style={galleryStyles.cardDesc}>{m.desc}</p>
              <div style={galleryStyles.cardFoot}>
                <span style={galleryStyles.cardSee}>Ver demo</span>
                <span style={galleryStyles.cardArrow}>↗</span>
              </div>
            </div>
          </button>
        ))}
      </main>

      <section style={galleryStyles.process}>
        <h2 style={galleryStyles.processTitle}>Como funciona</h2>
        <div style={galleryStyles.processGrid}>
          {[
            ['01', 'Você escolhe', 'Navega pelas demos e me diz qual modelo combina com você.'],
            ['02', 'A gente adapta', 'Trocamos textos, fotos da sua obra, paleta e logo. 7 dias.'],
            ['03', 'Você revisa', 'Ajustamos juntos até estar do jeito que você quer.'],
            ['04', 'Vai pro ar', 'Hospedo, configuro domínio e SSL. Pronto pra capturar leads.'],
          ].map(([n, t, d]) => (
            <div key={n} style={galleryStyles.processItem}>
              <div style={galleryStyles.processNum}>{n}</div>
              <div style={galleryStyles.processName}>{t}</div>
              <div style={galleryStyles.processDesc}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={galleryStyles.footer}>
        <div style={galleryStyles.footerLeft}>
          <div style={galleryStyles.footerBrand}>{SELLER_NAME}</div>
          <div style={galleryStyles.footerSmall}>Sites para arquitetos e estúdios de design.</div>
        </div>
        <a href={waLink('o portfólio')} target="_blank" rel="noopener" style={galleryStyles.footerCta}>
          Quero meu site →
        </a>
      </footer>
    </div>
  );
}

const Meta = ({ n, label }) => (
  <div style={galleryStyles.meta}>
    <div style={galleryStyles.metaN}>{n}</div>
    <div style={galleryStyles.metaLabel}>{label}</div>
  </div>
);

const galleryStyles = {
  wrap: { background: '#0d0d0c', color: '#eae6df', minHeight: '100vh', paddingBottom: 80 },
  header: { maxWidth: 1280, margin: '0 auto', padding: '32px 32px 64px' },
  brandRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 80 },
  brandMark: { display: 'flex', alignItems: 'center', gap: 10 },
  brandDot: { width: 10, height: 10, borderRadius: 999, background: '#eae6df', display: 'inline-block' },
  brandName: { fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: '.04em' },
  headerCta: {
    color: '#0d0d0c', background: '#eae6df', padding: '10px 18px', borderRadius: 999,
    textDecoration: 'none', fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 13,
  },
  heroBlock: { maxWidth: 920 },
  eyebrow: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.18em', color: '#8b8680', marginBottom: 24 },
  title: {
    fontFamily: "'Instrument Serif', 'Cormorant Garamond', serif",
    fontWeight: 400, fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: 1.02,
    letterSpacing: '-.02em', margin: '0 0 28px',
  },
  titleAccent: { fontStyle: 'italic', color: '#9b9690' },
  lede: { fontSize: 17, lineHeight: 1.6, color: '#a8a39c', maxWidth: 620, margin: '0 0 48px' },
  metaRow: { display: 'flex', gap: 48, flexWrap: 'wrap', borderTop: '1px solid #2a2a28', paddingTop: 24 },
  meta: { display: 'flex', flexDirection: 'column', gap: 4 },
  metaN: { fontFamily: "'Instrument Serif', serif", fontSize: 36, lineHeight: 1, color: '#eae6df' },
  metaLabel: { fontSize: 12, color: '#8b8680', letterSpacing: '.04em' },

  grid: {
    maxWidth: 1280, margin: '0 auto', padding: '0 32px',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 28,
  },
  card: {
    all: 'unset', cursor: 'pointer', display: 'flex', flexDirection: 'column',
    background: '#161614', borderRadius: 18, overflow: 'hidden',
    border: '1px solid #232321', transition: 'transform .25s ease, border-color .25s ease',
  },
  cardCover: {
    position: 'relative', aspectRatio: '4/3', overflow: 'hidden',
  },
  badge: {
    position: 'absolute', top: 14, left: 14, zIndex: 2,
    background: '#eae6df', color: '#0d0d0c',
    padding: '5px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600, letterSpacing: '.04em',
  },
  cardOverlay: {
    position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,.7))',
    display: 'flex', alignItems: 'flex-end', padding: 18,
  },
  cardOpen: { color: '#fff', fontWeight: 600, fontSize: 14, letterSpacing: '.02em' },
  cardBody: { padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 12 },
  cardTopRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  cardIndex: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6b6862' },
  cardTag: { fontSize: 11, color: '#8b8680', letterSpacing: '.04em', textTransform: 'uppercase' },
  cardName: { fontFamily: "'Instrument Serif', serif", fontSize: 28, lineHeight: 1.1, margin: 0, color: '#eae6df' },
  cardDesc: { fontSize: 14, color: '#a8a39c', lineHeight: 1.55, margin: 0, minHeight: 64 },
  cardFoot: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid #232321', paddingTop: 14, marginTop: 4 },
  cardSee: { fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14, color: '#eae6df', letterSpacing: '.02em' },
  cardArrow: { fontSize: 18, color: '#8b8680' },

  process: { maxWidth: 1280, margin: '120px auto 0', padding: '0 32px' },
  processTitle: {
    fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(32px, 5vw, 56px)',
    fontWeight: 400, letterSpacing: '-.02em', margin: '0 0 40px',
  },
  processGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, borderTop: '1px solid #2a2a28', paddingTop: 32 },
  processItem: { display: 'flex', flexDirection: 'column', gap: 10 },
  processNum: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#8b8680', letterSpacing: '.18em' },
  processName: { fontFamily: "'Instrument Serif', serif", fontSize: 22, color: '#eae6df' },
  processDesc: { fontSize: 14, color: '#a8a39c', lineHeight: 1.55 },

  footer: {
    maxWidth: 1280, margin: '120px auto 0', padding: '40px 32px',
    borderTop: '1px solid #2a2a28', display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', flexWrap: 'wrap', gap: 16,
  },
  footerLeft: { display: 'flex', flexDirection: 'column', gap: 4 },
  footerBrand: { fontFamily: "'Instrument Serif', serif", fontSize: 22 },
  footerSmall: { fontSize: 13, color: '#8b8680' },
  footerCta: {
    color: '#0d0d0c', background: '#eae6df', padding: '12px 22px', borderRadius: 999,
    textDecoration: 'none', fontWeight: 600, fontSize: 14,
  },
};

// Hover via inline JS (no :hover with style objects). We add a class-based style:
const hoverStyleTag = document.createElement('style');
hoverStyleTag.textContent = `
  button[data-card]:hover { transform: translateY(-4px); border-color: #3a3a37 !important; }
  button[data-card]:hover .card-cover-img { transform: scale(1.03); }
  .card-cover-img { transition: transform .5s ease; }
`;
document.head.appendChild(hoverStyleTag);

// ---- Preview shell (browser frame) ------------------------------------------
function PreviewShell({ model, navigate }) {
  const Site = model.Component;
  return (
    <div style={previewStyles.wrap}>
      <div style={previewStyles.topbar}>
        <button onClick={() => navigate('gallery')} style={previewStyles.back}>
          ← Galeria
        </button>
        <div style={previewStyles.urlBar}>
          <span style={previewStyles.dots}>
            <i style={{ background: '#ff5f57' }} /><i style={{ background: '#febc2e' }} /><i style={{ background: '#28c840' }} />
          </span>
          <span style={previewStyles.urlText}>
            <span style={previewStyles.urlLock}>⌁</span>
            {model.fakeUrl}
          </span>
          <span style={previewStyles.modelTag}>{model.name}</span>
        </div>
        <a href={waLink(model.name)} target="_blank" rel="noopener" style={previewStyles.cta}>
          Quero esse →
        </a>
      </div>
      <div className="preview-frame" style={previewStyles.frame}>
        <Site />
      </div>
      <a href={waLink(model.name)} target="_blank" rel="noopener" className="wa-float">
        <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 4.9 2 7.6 2h.1c8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4h-.1c-2.4 0-4.7-.7-6.8-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.4 21.3 2.6 18.7 2.6 16 2.6 8.6 8.6 2.6 16 2.6S29.4 8.6 29.4 16 23.4 28.8 16 28.8z"/><path d="M22.9 19.2c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.5c-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-.7-.6-1.3-1.4-1.4-1.7-.2-.4 0-.6.2-.7.2-.2.4-.4.5-.6.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.9-2.1-1.2-2.9-.3-.7-.7-.7-.9-.7h-.8c-.3 0-.6.1-1 .5s-1.3 1.3-1.3 3.2 1.4 3.7 1.5 3.9c.2.2 2.7 4.2 6.6 5.8.9.4 1.6.6 2.2.8.9.3 1.7.2 2.4.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8 0-.2-.3-.3-.7-.5z"/></svg>
        Quero esse modelo
      </a>
    </div>
  );
}

const previewStyles = {
  wrap: { background: '#1a1a1a', minHeight: '100vh' },
  topbar: {
    position: 'sticky', top: 0, zIndex: 100,
    background: '#1f1f1d', borderBottom: '1px solid #2f2f2c',
    padding: '10px 16px',
    display: 'flex', alignItems: 'center', gap: 14,
  },
  back: {
    all: 'unset', cursor: 'pointer',
    fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 13, color: '#eae6df',
    padding: '8px 14px', borderRadius: 8, background: '#2a2a27',
    flexShrink: 0,
  },
  urlBar: {
    flex: 1, display: 'flex', alignItems: 'center', gap: 14,
    background: '#0d0d0c', borderRadius: 8, padding: '8px 14px',
    border: '1px solid #2a2a27', minWidth: 0,
  },
  dots: { display: 'flex', gap: 6, flexShrink: 0 },
  urlText: {
    fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#a8a39c',
    flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
    display: 'flex', alignItems: 'center', gap: 8,
  },
  urlLock: { color: '#28c840' },
  modelTag: {
    fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6b6862',
    flexShrink: 0,
  },
  cta: {
    color: '#0d0d0c', background: '#25d366', padding: '8px 16px', borderRadius: 8,
    textDecoration: 'none', fontWeight: 700, fontSize: 13, flexShrink: 0,
  },
  frame: { background: '#fff', minHeight: 'calc(100vh - 56px)' },
};

// Hide dots styling
const dotStyle = document.createElement('style');
dotStyle.textContent = `
  .preview-frame { isolation: isolate; }
  [style*="--dot"] i, .topbar i { display: inline-block; width: 10px; height: 10px; border-radius: 999px; }
`;
document.head.appendChild(dotStyle);

// ---- App --------------------------------------------------------------------
function App() {
  const [hash, navigate] = useHashRoute();
  const model = MODELS.find(m => m.id === hash);

  if (model) {
    return <PreviewShell model={model} navigate={navigate} />;
  }
  return <Gallery navigate={navigate} />;
}

// Decorate cards with data attribute for hover styling
const decorate = () => {
  document.querySelectorAll('button').forEach(b => {
    if (b.querySelector('[class*="cardCover"]') || b.innerHTML.includes('cardCover')) {
      b.setAttribute('data-card', '1');
    }
  });
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
setTimeout(decorate, 100);

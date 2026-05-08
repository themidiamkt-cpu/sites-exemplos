/* Interiores Suave — interior design, sage + blush, lifestyle pinterest-y */
function InterioresSite() {
  const c = interStyles;
  const moodboard = [
    { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80', span: 2, name: 'Apto Vila Nova', tag: 'sala íntima' },
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=80', span: 1, name: 'Casa Cores', tag: 'cozinha' },
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&auto=format&fit=crop&q=80', span: 1, name: 'Loft Higienópolis', tag: 'home office' },
    { src: 'https://images.unsplash.com/photo-1600566753086-00f18fe6ba68?w=900&auto=format&fit=crop&q=80', span: 1, name: 'Casa do Mar', tag: 'quarto' },
    { src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&auto=format&fit=crop&q=80', span: 2, name: 'Apto Itaim', tag: 'living + jantar' },
    { src: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=900&auto=format&fit=crop&q=80', span: 1, name: 'Refúgio na Serra', tag: 'lareira' },
  ];
  return (
    <div style={c.wrap}>
      {/* Nav */}
      <nav style={c.nav}>
        <div style={c.brandWrap}>
          <div style={c.brand}>The Midia<br /><em style={c.brandEm}>arquitetura</em></div>
        </div>
        <ul style={c.navList} className="desktop-menu">
          <li>portfólio</li><li>servicos</li><li>diário</li><li>contato</li>
        </ul>
        <div style={c.navRight} className="desktop-menu">
          <span style={c.navIcon}>♡</span>
          <a style={c.navCta}>agendar conversa</a>
        </div>
      </nav>

      {/* Hero — soft offset */}
      <section style={c.hero}>
        <div style={c.heroImgWrap}>
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&auto=format&fit=crop&q=85" style={c.heroImg} alt="" />
          <div style={c.heroSticker}>
            <div style={c.heroStickerInner}>
              <span style={c.heroStickerLabel}>desde</span>
              <span style={c.heroStickerN}>2018</span>
            </div>
          </div>
        </div>
        <div style={c.heroText}>
          <div style={c.heroEyebrow}>· interiores residenciais ·</div>
          <h1 style={c.heroTitle}>
            Casas que<br /><em style={c.italic}>cuidam de</em><br />quem mora.
          </h1>
          <p style={c.heroLede}>
            Atendemos famílias que querem morar com mais beleza e mais leveza.
            Texturas, cores naturais, peças com história — pra ser usado todo dia, não pra ficar bonito na foto.
          </p>
          <div style={c.heroPill}>
            <span style={c.heroPillDot} />
            <span>Aceitando 3 projetos novos para 2026</span>
          </div>
        </div>
      </section>

      {/* Services — soft cards */}
      <section style={c.services}>
        <div style={c.servicesHead}>
          <div style={c.servicesEyebrow}>—  o que fazemos  —</div>
          <h2 style={c.servicesTitle}>Três jeitos<br /><em style={c.italic}>de começar</em></h2>
        </div>
        <div style={c.servicesGrid}>
          <div style={{ ...c.serviceCard, background: '#e6e2d6' }}>
            <div style={c.serviceN}>01</div>
            <div style={c.serviceName}>Consultoria</div>
            <div style={c.servicePrice}>a partir de R$ 2.400</div>
            <p style={c.serviceDesc}>
              Encontro presencial ou online. Você sai com paleta, layout e referências
              pra executar com o seu time.
            </p>
            <div style={c.serviceTime}>~ 4 semanas</div>
          </div>
          <div style={{ ...c.serviceCard, background: '#d8c9b8' }}>
            <div style={c.serviceN}>02</div>
            <div style={c.serviceName}>Projeto completo</div>
            <div style={c.servicePrice}>a partir de R$ 14.800</div>
            <p style={c.serviceDesc}>
              Layout, marcenaria, iluminação, paleta e curadoria de móveis. Acompanhamos compras
              e instalação até a chave virar.
            </p>
            <div style={c.serviceTime}>~ 4 a 6 meses</div>
          </div>
          <div style={{ ...c.serviceCard, background: '#c2b8a0' }}>
            <div style={c.serviceN}>03</div>
            <div style={c.serviceName}>Casa pronta em 60 dias</div>
            <div style={c.servicePrice}>a partir de R$ 38.000</div>
            <p style={c.serviceDesc}>
              Para quem está mudando rápido. Mobília completa, decoração, montagem,
              estilização final. Você só leva sua roupa.
            </p>
            <div style={c.serviceTime}>~ 60 dias</div>
          </div>
        </div>
      </section>

      {/* Moodboard / portfolio */}
      <section style={c.moodboard}>
        <div style={c.moodboardHead}>
          <div>
            <div style={c.moodboardEyebrow}>—  portfólio  —</div>
            <h2 style={c.moodboardTitle}>Casas que <em style={c.italic}>já estão</em><br /> sendo vividas</h2>
          </div>
          <div style={c.moodboardFilter}>
            <span style={c.filterActive}>· tudo</span>
            <span style={c.filter}>apartamentos</span>
            <span style={c.filter}>casas</span>
            <span style={c.filter}>litoral</span>
          </div>
        </div>
        <div style={c.moodboardGrid}>
          {moodboard.map((m, i) => (
            <div key={i} style={{ ...c.mb, gridColumn: `span ${m.span}` }}>
              <img src={m.src} alt={m.name} style={c.mbImg} />
              <div style={c.mbCaption}>
                <span style={c.mbName}>{m.name}</span>
                <span style={c.mbTag}>· {m.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={c.quote}>
        <div style={c.quoteMark}>"</div>
        <div style={c.quoteText}>
          A Lúcia entrou na nossa casa com olhos muito mais calmos do que os nossos.
          Tirou metade dos móveis, trocou três cores e a casa <em style={c.italic}>respirou</em>.
        </div>
        <div style={c.quoteSig}>
          <div style={c.quoteImg}>
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80" style={c.quoteImgEl} alt="" />
          </div>
          <div>
            <div style={c.quoteName}>Daniela Vergara</div>
            <div style={c.quoteRole}>cliente · Apartamento Itaim, 2024</div>
          </div>
        </div>
      </section>

      {/* Diary teaser */}
      <section style={c.diary}>
        <div style={c.diaryHead}>
          <div>
            <div style={c.diaryEyebrow}>—  do diário  —</div>
            <h2 style={c.diaryTitle}>Conversas e <em style={c.italic}>achados</em></h2>
          </div>
          <a style={c.diaryLink}>Ver tudo →</a>
        </div>
        <div style={c.diaryGrid}>
          {[
            { tag: 'paleta', title: 'Como a gente escolhe cor sem precisar decidir tudo de uma vez', date: 'mai · 2025' },
            { tag: 'visita', title: 'Apartamento Itaim · três anos depois da entrega', date: 'abr · 2025' },
            { tag: 'achados', title: 'A feira de antiquários do Bixiga, mês a mês', date: 'mar · 2025' },
          ].map((d, i) => (
            <div key={i} style={c.diaryItem}>
              <div style={c.diaryTag}>{d.tag}</div>
              <div style={c.diaryItemTitle}>{d.title}</div>
              <div style={c.diaryDate}>{d.date}  ·  ler →</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={c.cta}>
        <div style={c.ctaCard}>
          <div style={c.ctaEyebrow}>—  vamos começar?  —</div>
          <h3 style={c.ctaTitle}>
            Conta um pouco<br /><em style={c.italic}>da sua casa</em>
          </h3>
          <p style={c.ctaText}>
            Em 15 minutinhos a gente entende o que você precisa e te mostra qual dos formatos
            faz mais sentido pra sua família, seu prazo e seu bolso.
          </p>
          <div style={c.ctaActions}>
            <a style={c.ctaBtn}>Quero conversar</a>
            <a style={c.ctaPhone}>+55 11 9 8233 4521</a>
          </div>
        </div>
      </section>

      <footer style={c.foot}>
        <div style={c.footL}>
          <div style={c.brand}>The Midia<br /><em style={c.brandEm}>arquitetura</em></div>
          <div style={c.footSmall}>The Midia Arquitetura · Interiores residenciais · São Paulo, SP</div>
        </div>
        <div style={c.footR}>
          <span>instagram</span><span>pinterest</span><span>newsletter</span>
        </div>
      </footer>
    </div>
  );
}

const interStyles = {
  wrap: { fontFamily: "'Manrope', sans-serif", color: '#4a4541', background: '#f7f3ee', fontSize: 14 },

  nav: {
    display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 40, alignItems: 'center',
    padding: '20px 56px', borderBottom: '1px solid #e2dccf',
  },
  brandWrap: {},
  brand: { fontFamily: "'PT Serif', serif", fontSize: 18, lineHeight: 1.05, color: '#4a4541' },
  brandEm: { fontStyle: 'italic', color: '#97a08a' },
  navList: { listStyle: 'none', display: 'flex', justifyContent: 'center', gap: 32, padding: 0, margin: 0, fontSize: 14, color: '#6e655e' },
  navRight: { display: 'flex', alignItems: 'center', gap: 16 },
  navIcon: { color: '#d4a89e', fontSize: 18 },
  navCta: { background: '#97a08a', color: '#fff', padding: '10px 18px', borderRadius: 999, fontSize: 13, fontWeight: 500, cursor: 'pointer' },

  hero: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, padding: '60px 56px', maxWidth: 1320, margin: '0 auto', alignItems: 'center' },
  heroImgWrap: { position: 'relative', borderRadius: 200, overflow: 'visible', aspectRatio: '4/5' },
  heroImg: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: 200, display: 'block' },
  heroSticker: {
    position: 'absolute', top: -28, right: -28,
    width: 140, height: 140, background: '#d4a89e', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
    transform: 'rotate(8deg)', boxShadow: '0 12px 30px rgba(212,168,158,.3)',
  },
  heroStickerInner: { textAlign: 'center' },
  heroStickerLabel: { display: 'block', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', opacity: .85 },
  heroStickerN: { display: 'block', fontFamily: "'PT Serif', serif", fontSize: 38, fontStyle: 'italic', marginTop: 4 },

  heroText: {},
  heroEyebrow: { fontFamily: "'PT Serif', serif", fontStyle: 'italic', fontSize: 18, color: '#97a08a', marginBottom: 28 },
  heroTitle: { fontFamily: "'PT Serif', serif", fontWeight: 400, fontSize: 'clamp(52px, 7.5vw, 104px)', lineHeight: 1, letterSpacing: '-.02em', margin: 0, color: '#4a4541' },
  italic: { fontStyle: 'italic', color: '#97a08a' },
  heroLede: { fontSize: 17, lineHeight: 1.65, color: '#6e655e', maxWidth: 480, marginTop: 28 },
  heroPill: { display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 32, padding: '10px 18px', border: '1px solid #c8c2b3', borderRadius: 999, fontSize: 13, color: '#4a4541' },
  heroPillDot: { width: 8, height: 8, borderRadius: 999, background: '#97a08a' },

  services: { padding: '120px 56px', maxWidth: 1320, margin: '0 auto' },
  servicesHead: { textAlign: 'center', marginBottom: 60 },
  servicesEyebrow: { fontFamily: "'PT Serif', serif", fontStyle: 'italic', color: '#97a08a', fontSize: 16 },
  servicesTitle: { fontFamily: "'PT Serif', serif", fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 1.05, margin: '12px 0 0' },
  servicesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
  serviceCard: { padding: 36, borderRadius: 24, display: 'flex', flexDirection: 'column', gap: 12, color: '#4a4541' },
  serviceN: { fontFamily: "'PT Serif', serif", fontStyle: 'italic', fontSize: 22, color: '#6e655e' },
  serviceName: { fontFamily: "'PT Serif', serif", fontSize: 30, lineHeight: 1.15, marginTop: 2 },
  servicePrice: { fontWeight: 600, fontSize: 14, color: '#4a4541', marginTop: 4 },
  serviceDesc: { fontSize: 14, lineHeight: 1.6, color: '#4a4541', margin: '8px 0 0' },
  serviceTime: { marginTop: 'auto', paddingTop: 24, borderTop: '1px solid rgba(74,69,65,.18)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#6e655e' },

  moodboard: { padding: '40px 56px 120px', maxWidth: 1320, margin: '0 auto' },
  moodboardHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 24 },
  moodboardEyebrow: { fontFamily: "'PT Serif', serif", fontStyle: 'italic', color: '#97a08a', fontSize: 16 },
  moodboardTitle: { fontFamily: "'PT Serif', serif", fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, margin: '12px 0 0' },
  moodboardFilter: { display: 'flex', gap: 18, fontSize: 13, color: '#6e655e' },
  filterActive: { color: '#4a4541', fontWeight: 600 },
  filter: { color: '#9a9285', cursor: 'pointer' },
  moodboardGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
  mb: { aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden', position: 'relative' },
  mbImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  mbCaption: {
    position: 'absolute', bottom: 14, left: 14, background: 'rgba(247,243,238,.95)',
    padding: '8px 14px', borderRadius: 999, fontSize: 12,
    display: 'flex', gap: 6, alignItems: 'center',
  },
  mbName: { fontWeight: 600, color: '#4a4541' },
  mbTag: { color: '#97a08a' },

  quote: { padding: '120px 56px', maxWidth: 920, margin: '0 auto', textAlign: 'center' },
  quoteMark: { fontFamily: "'PT Serif', serif", fontSize: 160, lineHeight: .8, color: '#d4a89e', marginBottom: -20 },
  quoteText: { fontFamily: "'PT Serif', serif", fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.4, color: '#4a4541', margin: 0 },
  quoteSig: { display: 'inline-flex', alignItems: 'center', gap: 14, marginTop: 40 },
  quoteImg: { width: 48, height: 48, borderRadius: 999, overflow: 'hidden', background: '#d4a89e' },
  quoteImgEl: { width: '100%', height: '100%', objectFit: 'cover' },
  quoteName: { fontWeight: 600, fontSize: 14, textAlign: 'left' },
  quoteRole: { fontSize: 12, color: '#9a9285', marginTop: 2, textAlign: 'left' },

  diary: { padding: '60px 56px 120px', background: '#efe9dc', maxWidth: 1320, margin: '0 auto', borderRadius: 32 },
  diaryHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16, padding: '40px 0 0' },
  diaryEyebrow: { fontFamily: "'PT Serif', serif", fontStyle: 'italic', color: '#97a08a', fontSize: 16 },
  diaryTitle: { fontFamily: "'PT Serif', serif", fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, margin: '12px 0 0' },
  diaryLink: { color: '#4a4541', fontWeight: 600, fontSize: 14, borderBottom: '1px solid #4a4541', paddingBottom: 3, cursor: 'pointer' },
  diaryGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
  diaryItem: { display: 'flex', flexDirection: 'column', gap: 12, padding: 28, background: '#f7f3ee', borderRadius: 20, cursor: 'pointer' },
  diaryTag: { fontFamily: "'PT Serif', serif", fontStyle: 'italic', color: '#d4a89e', fontSize: 14 },
  diaryItemTitle: { fontFamily: "'PT Serif', serif", fontSize: 22, lineHeight: 1.25, color: '#4a4541' },
  diaryDate: { fontSize: 12, color: '#9a9285', marginTop: 'auto' },

  cta: { padding: '120px 56px', maxWidth: 1320, margin: '0 auto' },
  ctaCard: { background: '#97a08a', color: '#f7f3ee', padding: '80px 60px', borderRadius: 32, textAlign: 'center', position: 'relative', overflow: 'hidden' },
  ctaEyebrow: { fontFamily: "'PT Serif', serif", fontStyle: 'italic', color: '#cfd5c4', fontSize: 16 },
  ctaTitle: { fontFamily: "'PT Serif', serif", fontSize: 'clamp(48px, 6.5vw, 88px)', lineHeight: 1, letterSpacing: '-.02em', margin: '12px 0 24px', fontWeight: 400 },
  ctaText: { fontSize: 16, lineHeight: 1.6, color: '#e6ead8', maxWidth: 540, margin: '0 auto' },
  ctaActions: { display: 'inline-flex', gap: 20, marginTop: 36, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' },
  ctaBtn: { background: '#f7f3ee', color: '#4a4541', padding: '14px 28px', borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  ctaPhone: { color: '#f7f3ee', fontSize: 14, fontWeight: 600, borderBottom: '1px solid #f7f3ee', paddingBottom: 4 },

  foot: { padding: '32px 56px', borderTop: '1px solid #e2dccf', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 },
  footL: { display: 'flex', flexDirection: 'column', gap: 6 },
  footSmall: { fontSize: 12, color: '#9a9285' },
  footR: { display: 'flex', gap: 28, fontSize: 13, color: '#6e655e' },
};

window.InterioresSite = InterioresSite;

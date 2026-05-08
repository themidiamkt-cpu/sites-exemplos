(() => {
  const { useMemo, useState, useEffect, useCallback } = React;
  const SELLER = {
    name: "The Midia",
    whatsapp: "5519999315179",
    email: "comercial@themidiamarketing.com.br"
  };
  const img = (id, w = 1400) => `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=82`;
  const waLink = (subject) => {
    const text = encodeURIComponent(`Ol\xE1! Vi o portf\xF3lio de ${subject} e quero saber mais sobre como contratar.`);
    return `https://wa.me/${SELLER.whatsapp}?text=${text}`;
  };
  const NICHES = {
    advogado: {
      title: "Sites para Advogados",
      slug: "advocacia",
      eyebrow: "PORTF\xD3LIO \xB7 ADVOCACIA",
      headline: "Presen\xE7a digital s\xF3bria para escrit\xF3rios que precisam gerar confian\xE7a.",
      lede: "Modelos pensados para tr\xE1fego pago, autoridade, conte\xFAdo jur\xEDdico, capta\xE7\xE3o consultiva e SEO local, sempre com linguagem discreta e profissional.",
      pain: "Quando algu\xE9m pesquisa no Google, seu Instagram n\xE3o sustenta autoridade sozinho.",
      stats: [["5", "modelos prontos"], ["7d", "adapta\xE7\xE3o"], ["SEO", "local preparado"], ["OAB", "tom adequado"]],
      accent: "#7d6542",
      bg: "#111418",
      fg: "#f2efe8",
      models: [
        {
          id: "banca",
          name: "Banca Institucional",
          tag: "Full service \xB7 Corporativo",
          desc: "Para escrit\xF3rios com \xE1reas de atua\xE7\xE3o, equipe robusta e necessidade de parecer grande sem parecer frio.",
          fakeUrl: "bancainstitucional.adv.br",
          accent: "#b08a55",
          dark: true,
          cover: img("photo-1589829545856-d10d557cf95f", 1200),
          hero: img("photo-1450101499163-c8848c66ca85", 1800),
          headline: "Defesa t\xE9cnica, estrat\xE9gia e reputa\xE7\xE3o.",
          sub: "Atua\xE7\xE3o consultiva e contenciosa para empresas, s\xF3cios e fam\xEDlias que precisam de seguran\xE7a jur\xEDdica antes da decis\xE3o.",
          sections: ["Direito empresarial", "Contratos", "Societ\xE1rio", "Tribut\xE1rio"]
        },
        {
          id: "criminal",
          name: "Defesa Penal",
          tag: "Urg\xEAncia \xB7 Discri\xE7\xE3o",
          desc: "Layout direto para atendimento emergencial, plant\xE3o, casos sens\xEDveis e prova de experi\xEAncia.",
          fakeUrl: "defesapenal24h.adv.br",
          accent: "#c13c34",
          dark: true,
          cover: img("photo-1505664194779-8beaceb93744", 1200),
          hero: img("photo-1589578527966-fdac0f44566c", 1800),
          headline: "Atendimento imediato em situa\xE7\xF5es cr\xEDticas.",
          sub: "Defesa criminal com discri\xE7\xE3o, presen\xE7a t\xE9cnica e orienta\xE7\xE3o clara desde o primeiro contato.",
          sections: ["Plant\xE3o 24h", "Inqu\xE9ritos", "Audi\xEAncias", "Tribunal do J\xFAri"]
        },
        {
          id: "familia",
          name: "Fam\xEDlia & Sucess\xF5es",
          tag: "Humano \xB7 Consultivo",
          desc: "Tom acolhedor para div\xF3rcio, guarda, invent\xE1rio e planejamento patrimonial.",
          fakeUrl: "familiaesucessoes.adv.br",
          accent: "#8f7a66",
          cover: img("photo-1521791136064-7986c2920216", 1200),
          hero: img("photo-1497366754035-f200968a6e72", 1800),
          headline: "Direito de fam\xEDlia com clareza e cuidado.",
          sub: "Orienta\xE7\xE3o jur\xEDdica para decis\xF5es delicadas, com comunica\xE7\xE3o simples e condu\xE7\xE3o segura.",
          sections: ["Div\xF3rcio", "Guarda", "Invent\xE1rio", "Planejamento sucess\xF3rio"]
        },
        {
          id: "trabalhista",
          name: "Trabalhista Pro",
          tag: "Empresas \xB7 Preventivo",
          desc: "Para advogados que vendem preven\xE7\xE3o, auditoria e defesa para empresas.",
          fakeUrl: "trabalhistapro.adv.br",
          accent: "#315d73",
          cover: img("photo-1556761175-b413da4baf72", 1200),
          hero: img("photo-1551836022-d5d88e9218df", 1800),
          headline: "Risco trabalhista sob controle.",
          sub: "Consultoria e defesa para empresas que querem reduzir passivos, estruturar rotinas e responder r\xE1pido.",
          sections: ["Compliance", "Defesas", "Acordos", "Treinamentos"]
        },
        {
          id: "previdenciario",
          name: "Previdenci\xE1rio Local",
          tag: "SEO local \xB7 Capta\xE7\xE3o",
          desc: "Modelo para ranquear por cidade, explicar benef\xEDcios e converter pelo WhatsApp.",
          fakeUrl: "aposentadoriaindaiatuba.adv.br",
          accent: "#526b4f",
          cover: img("photo-1554224155-6726b3ff858f", 1200),
          hero: img("photo-1573497491208-6b1acb260507", 1800),
          headline: "Aposentadoria sem adivinha\xE7\xE3o.",
          sub: "An\xE1lise previdenci\xE1ria completa, simula\xE7\xE3o de cen\xE1rios e pedido administrativo acompanhado de perto.",
          sections: ["Aposentadoria", "BPC/LOAS", "Revis\xF5es", "Planejamento"]
        }
      ]
    },
    odonto: {
      title: "Sites para Cl\xEDnicas Odontol\xF3gicas",
      slug: "odonto",
      eyebrow: "PORTF\xD3LIO \xB7 ODONTOLOGIA",
      headline: "Site feito para transformar pesquisa no Google em agenda cheia.",
      lede: "Estrutura para Google Ads, SEO local, agendamento, antes/depois, depoimentos, conv\xEAnios e prova social sem depender s\xF3 do Instagram.",
      pain: "Seu Instagram n\xE3o \xE9 sua cl\xEDnica. Quando algu\xE9m pesquisa no Google, voc\xEA pode perder paciente.",
      stats: [["Google", "Ads pronto"], ["SEO", "cidade + bairro"], ["Agenda", "CTA direto"], ["Provas", "antes/depois"]],
      accent: "#32a6a0",
      bg: "#eff9f8",
      fg: "#123130",
      models: [
        {
          id: "sorriso",
          name: "Sorriso Local",
          tag: "Cl\xEDnica geral \xB7 Bairro",
          desc: "Para cl\xEDnicas que querem aparecer bem no Google e facilitar agendamento pelo WhatsApp.",
          fakeUrl: "sorrisolocal.com.br",
          accent: "#28a99e",
          cover: img("photo-1606811971618-4486d14f3f99", 1200),
          hero: img("photo-1629909613654-28e377c37b09", 1800),
          headline: "Odontologia completa perto de voc\xEA.",
          sub: "Atendimento humanizado, tecnologia digital e hor\xE1rios flex\xEDveis para cuidar do sorriso da sua fam\xEDlia.",
          sections: ["Limpeza", "Restaura\xE7\xF5es", "Clareamento", "Emerg\xEAncia"]
        },
        {
          id: "implantes",
          name: "Implante Premium",
          tag: "Implantes \xB7 Alto ticket",
          desc: "P\xE1gina forte para avalia\xE7\xE3o, autoridade do especialista, casos e financiamento.",
          fakeUrl: "implantespremium.com.br",
          accent: "#1c6f8c",
          dark: true,
          cover: img("photo-1609840114035-3c981b782dfe", 1200),
          hero: img("photo-1588776814546-1ffcf47267a5", 1800),
          headline: "Volte a mastigar, sorrir e falar com seguran\xE7a.",
          sub: "Planejamento digital para implantes, pr\xF3teses e reabilita\xE7\xE3o oral com previsibilidade.",
          sections: ["Implantes", "Protocolo", "Carga imediata", "Tomografia"]
        },
        {
          id: "ortodontia",
          name: "Orto Clear",
          tag: "Alinhadores \xB7 Est\xE9tica",
          desc: "Visual moderno para vender alinhadores, simula\xE7\xE3o e acompanhamento digital.",
          fakeUrl: "ortoclear.com.br",
          accent: "#7aa7ff",
          cover: img("photo-1606811841689-23dfddce3e95", 1200),
          hero: img("photo-1606811971618-4486d14f3f99", 1800),
          headline: "Alinhadores transparentes para sorrir sem pausar a rotina.",
          sub: "Tratamento discreto, planejado em 3D e acompanhado por especialistas.",
          sections: ["Alinhadores", "Aparelho fixo", "Infantil", "Simula\xE7\xE3o"]
        },
        {
          id: "kids",
          name: "Odonto Kids",
          tag: "Pedi\xE1trico \xB7 Familiar",
          desc: "Colorido, leve e confi\xE1vel para odontopediatria e fam\xEDlias.",
          fakeUrl: "odontokids.com.br",
          accent: "#f59b4c",
          cover: img("photo-1606811971618-4486d14f3f99", 1200),
          hero: img("photo-1588776814546-1ffcf47267a5", 1800),
          headline: "Primeiras visitas sem medo.",
          sub: "Odontopediatria com acolhimento, preven\xE7\xE3o e orienta\xE7\xE3o para pais.",
          sections: ["Preven\xE7\xE3o", "Infantil", "Gestantes", "Trauma dental"]
        },
        {
          id: "harmonia",
          name: "Harmoniza\xE7\xE3o Dental",
          tag: "Lentes \xB7 Antes/depois",
          desc: "Focado em fotografia, casos, prova social e desejo est\xE9tico.",
          fakeUrl: "harmoniadental.com.br",
          accent: "#d0a76b",
          dark: true,
          cover: img("photo-1606811841689-23dfddce3e95", 1200),
          hero: img("photo-1609840114035-3c981b782dfe", 1800),
          headline: "Transforma\xE7\xF5es naturais, planejadas para o seu rosto.",
          sub: "Lentes, clareamento e est\xE9tica dental com diagn\xF3stico, fotografia e planejamento individual.",
          sections: ["Lentes", "Clareamento", "Gengivoplastia", "Facetas"]
        }
      ]
    },
    estetica: {
      title: "Sites para Cl\xEDnicas de Est\xE9tica",
      slug: "estetica",
      eyebrow: "PORTF\xD3LIO \xB7 EST\xC9TICA",
      headline: "Percep\xE7\xE3o premium antes da primeira mensagem.",
      lede: "Esse nicho compra imagem. Os modelos combinam site, agendamento, WhatsApp, CRM, Google Meu Neg\xF3cio, antes/depois e campanhas por procedimento.",
      pain: "Quem investe em marketing precisa de uma p\xE1gina que pare\xE7a t\xE3o boa quanto o resultado que promete.",
      stats: [["Imagem", "premium"], ["CRM", "lead organizado"], ["Agenda", "online"], ["Google", "Meu Neg\xF3cio"]],
      accent: "#c77f83",
      bg: "#fbf3f1",
      fg: "#392323",
      models: [
        {
          id: "skin",
          name: "Skin Boutique",
          tag: "Facial \xB7 Luxo leve",
          desc: "Perfeito para cl\xEDnicas com foco em pele, toxina, bioestimulador e atendimento premium.",
          fakeUrl: "skinboutique.com.br",
          accent: "#c77f83",
          cover: img("photo-1570172619644-dfd03ed5d881", 1200),
          hero: img("photo-1522337360788-8b13dee7a37e", 1800),
          headline: "Pele bem cuidada, resultado natural.",
          sub: "Protocolos faciais personalizados para real\xE7ar sem apagar sua express\xE3o.",
          sections: ["Toxina", "Bioestimulador", "Preenchimento", "Skinbooster"]
        },
        {
          id: "body",
          name: "Body Performance",
          tag: "Corporal \xB7 Tecnologia",
          desc: "Mais comercial, com pacotes, avalia\xE7\xE3o e destaque para equipamentos.",
          fakeUrl: "bodyperformance.com.br",
          accent: "#7f9f9a",
          cover: img("photo-1512290923902-8a9f81dc236c", 1200),
          hero: img("photo-1570172619644-dfd03ed5d881", 1800),
          headline: "Tratamentos corporais com plano e acompanhamento.",
          sub: "Tecnologias combinadas para gordura localizada, flacidez, celulite e contorno corporal.",
          sections: ["Criolip\xF3lise", "Drenagem", "Ultraformer", "Massagem"]
        },
        {
          id: "laser",
          name: "Laser Clinic",
          tag: "Depila\xE7\xE3o \xB7 Convers\xE3o",
          desc: "Landing page com planos, recorr\xEAncia, regi\xF5es atendidas e prova social.",
          fakeUrl: "laserclinic.com.br",
          accent: "#8b86d8",
          dark: true,
          cover: img("photo-1598440947619-2c35fc9aa908", 1200),
          hero: img("photo-1515377905703-c4788e51af15", 1800),
          headline: "Depila\xE7\xE3o a laser com conforto e previsibilidade.",
          sub: "Planos por \xE1rea, avalia\xE7\xE3o r\xE1pida e acompanhamento em todas as sess\xF5es.",
          sections: ["Laser diodo", "Planos", "Manuten\xE7\xE3o", "Cuidados"]
        },
        {
          id: "spa",
          name: "Urban Spa",
          tag: "Bem-estar \xB7 Sensorial",
          desc: "Site mais emocional para day spa, massagens, rituais e vouchers.",
          fakeUrl: "urbanspa.com.br",
          accent: "#a28c69",
          cover: img("photo-1540555700478-4be289fbecef", 1200),
          hero: img("photo-1544161515-4ab6ce6db874", 1800),
          headline: "Uma pausa bonita no meio da rotina.",
          sub: "Rituais, massagens e cuidados para corpo e mente em uma experi\xEAncia acolhedora.",
          sections: ["Massagens", "Day spa", "Vouchers", "Noivas"]
        },
        {
          id: "inject",
          name: "Injectable Expert",
          tag: "Procedimentos \xB7 Autoridade",
          desc: "Para profissionais que querem parecer t\xE9cnicos, seguros e sofisticados.",
          fakeUrl: "injectableexpert.com.br",
          accent: "#c6a45f",
          dark: true,
          cover: img("photo-1522337360788-8b13dee7a37e", 1200),
          hero: img("photo-1598440947619-2c35fc9aa908", 1800),
          headline: "Est\xE9tica injet\xE1vel com t\xE9cnica e medida.",
          sub: "Avalia\xE7\xE3o facial completa, plano individual e procedimentos com foco em naturalidade.",
          sections: ["Toxina", "Preenchedores", "Fios", "MD Codes"]
        }
      ]
    },
    imobiliaria: {
      title: "Sites para Imobili\xE1rias e Corretores",
      slug: "imobiliaria",
      eyebrow: "PORTF\xD3LIO \xB7 IM\xD3VEIS",
      headline: "Site moderno para captar lead, organizar im\xF3veis e vender pelo WhatsApp.",
      lede: "Modelos para corretores e imobili\xE1rias com p\xE1ginas por im\xF3vel, busca, filtros, bairros, SEO local, integra\xE7\xE3o com CRM e CTA de visita.",
      pain: "Muita imobili\xE1ria ainda usa site velho. Quem chega com velocidade, filtro e WhatsApp sai na frente.",
      stats: [["Filtro", "de im\xF3veis"], ["CRM", "lead + origem"], ["Bairro", "SEO local"], ["WhatsApp", "visita r\xE1pida"]],
      accent: "#2f6f62",
      bg: "#f4f7f2",
      fg: "#17302b",
      models: [
        {
          id: "broker",
          name: "Broker Premium",
          tag: "Corretor \xB7 Alto padr\xE3o",
          desc: "Para corretor especialista em im\xF3veis de alto ticket e atendimento consultivo.",
          fakeUrl: "brokerpremium.com.br",
          accent: "#96754a",
          dark: true,
          cover: img("photo-1600607687939-ce8a6c25118c", 1200),
          hero: img("photo-1600585154340-be6161a56a0c", 1800),
          headline: "Im\xF3veis selecionados para comprar bem.",
          sub: "Curadoria de casas, apartamentos e terrenos com atendimento direto do especialista.",
          sections: ["Alto padr\xE3o", "Casas", "Apartamentos", "Terrenos"]
        },
        {
          id: "cidade",
          name: "Imobili\xE1ria Cidade",
          tag: "Venda + loca\xE7\xE3o",
          desc: "Modelo completo com busca, bairros, im\xF3veis em destaque e capta\xE7\xE3o de propriet\xE1rios.",
          fakeUrl: "imobiliariacidade.com.br",
          accent: "#2f6f62",
          cover: img("photo-1560518883-ce09059eeffa", 1200),
          hero: img("photo-1560518883-ce09059eeffa", 1800),
          headline: "Encontre seu pr\xF3ximo endere\xE7o com quem conhece a cidade.",
          sub: "Venda, loca\xE7\xE3o e administra\xE7\xE3o com im\xF3veis atualizados e atendimento \xE1gil.",
          sections: ["Comprar", "Alugar", "Anunciar", "Administra\xE7\xE3o"]
        },
        {
          id: "lancamentos",
          name: "Lan\xE7amentos Pro",
          tag: "Construtoras \xB7 Leads",
          desc: "Focado em lan\xE7amentos, formul\xE1rio, plantas, tabela e campanhas.",
          fakeUrl: "lancamentospro.com.br",
          accent: "#315d73",
          cover: img("photo-1545324418-cc1a3fa10c00", 1200),
          hero: img("photo-1494526585095-c41746248156", 1800),
          headline: "Lan\xE7amentos com informa\xE7\xE3o clara para decidir r\xE1pido.",
          sub: "Plantas, condi\xE7\xF5es, localiza\xE7\xE3o e atendimento para investidores e compradores finais.",
          sections: ["Plantas", "Tabela", "Tour", "Condi\xE7\xF5es"]
        },
        {
          id: "locacao",
          name: "Loca\xE7\xE3o R\xE1pida",
          tag: "Aluguel \xB7 Performance",
          desc: "Pensado para busca r\xE1pida, capta\xE7\xE3o pelo Google e contato pelo WhatsApp.",
          fakeUrl: "locacaorapida.com.br",
          accent: "#ef8b45",
          cover: img("photo-1522708323590-d24dbb6b0267", 1200),
          hero: img("photo-1600607687644-c7171b42498b", 1800),
          headline: "Aluguel sem enrola\xE7\xE3o.",
          sub: "Filtros simples, im\xF3veis atualizados e visita agendada em poucos cliques.",
          sections: ["Apartamentos", "Casas", "Comercial", "Garantias"]
        },
        {
          id: "rural",
          name: "Rural & Terrenos",
          tag: "Fazendas \xB7 Interior",
          desc: "Visual editorial para ch\xE1caras, s\xEDtios, \xE1reas e terrenos de investimento.",
          fakeUrl: "ruraleterrenos.com.br",
          accent: "#6b7b4f",
          cover: img("photo-1500382017468-9049fed747ef", 1200),
          hero: img("photo-1500382017468-9049fed747ef", 1800),
          headline: "Terrenos e propriedades para projetos maiores.",
          sub: "Curadoria de \xE1reas rurais, ch\xE1caras e glebas com documenta\xE7\xE3o analisada.",
          sections: ["Ch\xE1caras", "Fazendas", "Glebas", "Documentos"]
        }
      ]
    },
    medicos: {
      title: "Sites para M\xE9dicos",
      slug: "medicos",
      eyebrow: "PORTF\xD3LIO \xB7 M\xC9DICOS",
      headline: "Autoridade cl\xEDnica sem parecer amador.",
      lede: "Modelos para dermatologistas, ortopedistas, psiquiatras, ginecologistas e cirurgi\xF5es pl\xE1sticos, com agenda, conv\xEAnios, localiza\xE7\xE3o e prova social.",
      pain: "M\xE9dico odeia parecer improvisado. O site precisa passar confian\xE7a antes da consulta.",
      stats: [["Agenda", "online"], ["CRM", "paciente novo"], ["Planos", "conv\xEAnios"], ["Google", "SEO m\xE9dico"]],
      accent: "#3b7c83",
      bg: "#eef6f7",
      fg: "#143238",
      models: [
        {
          id: "dermato",
          name: "Dermato Clinic",
          tag: "Dermatologia \xB7 Est\xE9tica",
          desc: "Equilibra autoridade m\xE9dica com desejo est\xE9tico e agendamento f\xE1cil.",
          fakeUrl: "dermatoclinic.com.br",
          accent: "#b87b73",
          cover: img("photo-1579684385127-1ef15d508118", 1200),
          hero: img("photo-1570172619644-dfd03ed5d881", 1800),
          headline: "Dermatologia cl\xEDnica e est\xE9tica com plano individual.",
          sub: "Consulta, diagn\xF3stico e tratamentos para pele, cabelos, unhas e rejuvenescimento natural.",
          sections: ["Acne", "Melasma", "Toxina", "Cabelos"]
        },
        {
          id: "ortopedia",
          name: "Ortopedia Movimento",
          tag: "Dor \xB7 Performance",
          desc: "Para captar pacientes por dor, les\xE3o e retorno \xE0 atividade.",
          fakeUrl: "ortopediamovimento.com.br",
          accent: "#3b7c83",
          cover: img("photo-1571019613454-1cb2f99b2d8b", 1200),
          hero: img("photo-1571019613454-1cb2f99b2d8b", 1800),
          headline: "Volte a se mover com seguran\xE7a.",
          sub: "Avalia\xE7\xE3o ortop\xE9dica, diagn\xF3stico por imagem e tratamento para dor, les\xF5es e articula\xE7\xF5es.",
          sections: ["Joelho", "Coluna", "Ombro", "Infiltra\xE7\xF5es"]
        },
        {
          id: "psiquiatria",
          name: "Mente Clara",
          tag: "Psiquiatria \xB7 Acolhimento",
          desc: "Visual calmo, linguagem cuidadosa e foco em consulta particular.",
          fakeUrl: "menteclara.med.br",
          accent: "#747fb0",
          cover: img("photo-1497366811353-6870744d04b2", 1200),
          hero: img("photo-1497366754035-f200968a6e72", 1800),
          headline: "Cuidado em sa\xFAde mental com escuta e m\xE9todo.",
          sub: "Consultas presenciais e online para ansiedade, depress\xE3o, TDAH e acompanhamento psiqui\xE1trico.",
          sections: ["Ansiedade", "Depress\xE3o", "TDAH", "Sono"]
        },
        {
          id: "gineco",
          name: "Gineco Mulher",
          tag: "Sa\xFAde feminina",
          desc: "Acolhedor e informativo para rotina, gesta\xE7\xE3o, exames e menopausa.",
          fakeUrl: "ginecomulher.com.br",
          accent: "#b9718b",
          cover: img("photo-1559757148-5c350d0d3c56", 1200),
          hero: img("photo-1559757148-5c350d0d3c56", 1800),
          headline: "Sa\xFAde da mulher em cada fase.",
          sub: "Ginecologia com acompanhamento pr\xF3ximo, preven\xE7\xE3o, exames e orienta\xE7\xE3o clara.",
          sections: ["Rotina", "Gesta\xE7\xE3o", "Menopausa", "Exames"]
        },
        {
          id: "plastica",
          name: "Pl\xE1stica Signature",
          tag: "Cirurgia pl\xE1stica \xB7 Premium",
          desc: "Imagem sofisticada para consulta particular, procedimentos e autoridade.",
          fakeUrl: "plasticasignature.com.br",
          accent: "#c6a45f",
          dark: true,
          cover: img("photo-1519494026892-80bbd2d6fd0d", 1200),
          hero: img("photo-1519494026892-80bbd2d6fd0d", 1800),
          headline: "Cirurgia pl\xE1stica com planejamento, propor\xE7\xE3o e seguran\xE7a.",
          sub: "Consulta individual, indica\xE7\xE3o respons\xE1vel e acompanhamento em todas as etapas.",
          sections: ["Face", "Mama", "Corpo", "P\xF3s-operat\xF3rio"]
        }
      ]
    }
  };
  function useRoute() {
    const initial = () => window.location.hash.replace("#", "") || "gallery";
    const [hash, setHash] = useState(initial);
    useEffect(() => {
      const onHash = () => setHash(initial());
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }, []);
    const navigate = useCallback((to) => {
      window.location.hash = to;
      window.scrollTo(0, 0);
    }, []);
    return [hash, navigate];
  }
  function App() {
    const key = window.NICHE_KEY || "odonto";
    const niche = NICHES[key] || NICHES.odonto;
    const [hash, navigate] = useRoute();
    const model = niche.models.find((item) => item.id === hash);
    useEffect(() => {
      document.title = `${niche.title} \xB7 ${SELLER.name}`;
    }, [niche.title]);
    if (model) return /* @__PURE__ */ React.createElement(Preview, { niche, model, navigate });
    return /* @__PURE__ */ React.createElement(Gallery, { niche, navigate });
  }
  function Gallery({ niche, navigate }) {
    return /* @__PURE__ */ React.createElement("main", { style: { ...s.gallery, background: niche.bg, color: niche.fg } }, /* @__PURE__ */ React.createElement("nav", { style: s.galleryNav }, /* @__PURE__ */ React.createElement("div", { style: s.brand }, /* @__PURE__ */ React.createElement("span", { style: { ...s.brandDot, background: niche.accent } }), /* @__PURE__ */ React.createElement("span", null, SELLER.name)), /* @__PURE__ */ React.createElement("a", { href: waLink(niche.title), target: "_blank", rel: "noopener", style: { ...s.navCta, background: niche.fg, color: niche.bg } }, "Falar no WhatsApp")), /* @__PURE__ */ React.createElement("section", { style: s.galleryHero }, /* @__PURE__ */ React.createElement("div", { style: { ...s.eyebrow, color: niche.accent } }, niche.eyebrow), /* @__PURE__ */ React.createElement("h1", { style: s.galleryTitle }, niche.headline), /* @__PURE__ */ React.createElement("p", { style: s.galleryLede }, niche.lede), /* @__PURE__ */ React.createElement("div", { style: { ...s.painBox, borderColor: withAlpha(niche.accent, 0.35) } }, /* @__PURE__ */ React.createElement("span", { style: { color: niche.accent } }, "Argumento de venda:"), " ", niche.pain), /* @__PURE__ */ React.createElement("div", { style: s.statGrid }, niche.stats.map(([n, l]) => /* @__PURE__ */ React.createElement("div", { key: l, style: s.stat }, /* @__PURE__ */ React.createElement("strong", null, n), /* @__PURE__ */ React.createElement("span", null, l))))), /* @__PURE__ */ React.createElement("section", { style: s.modelGrid }, niche.models.map((model, i) => /* @__PURE__ */ React.createElement("button", { key: model.id, onClick: () => navigate(model.id), style: s.modelCard }, /* @__PURE__ */ React.createElement("div", { style: { ...s.modelCover, backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(0,0,0,.75)), url(${model.cover})` } }, /* @__PURE__ */ React.createElement("span", { style: { ...s.modelBadge, background: model.accent } }, "0", i + 1), /* @__PURE__ */ React.createElement("span", { style: s.modelOpen }, "Abrir demo")), /* @__PURE__ */ React.createElement("div", { style: s.modelBody }, /* @__PURE__ */ React.createElement("span", { style: { ...s.modelTag, color: model.accent } }, model.tag), /* @__PURE__ */ React.createElement("h2", { style: s.modelName }, model.name), /* @__PURE__ */ React.createElement("p", { style: s.modelDesc }, model.desc), /* @__PURE__ */ React.createElement("div", { style: s.modelFoot }, /* @__PURE__ */ React.createElement("span", null, "Ver modelo completo"), /* @__PURE__ */ React.createElement("span", null, "\u2192")))))), /* @__PURE__ */ React.createElement("section", { style: s.process }, [
      ["01", "Escolhe o modelo", "Voc\xEA abre as demos, navega como cliente e escolhe o estilo mais pr\xF3ximo do nicho."],
      ["02", "Adaptamos conte\xFAdo", "Trocamos textos, fotos, servi\xE7os, cidade, WhatsApp, agenda e provas sociais."],
      ["03", "Conectamos canais", "WhatsApp, CRM, Google Meu Neg\xF3cio, tag de an\xFAncios e eventos de convers\xE3o."],
      ["04", "Vai para campanha", "Site pronto para tr\xE1fego, SEO local e capta\xE7\xE3o de leads qualificados."]
    ].map(([n, title, desc]) => /* @__PURE__ */ React.createElement("article", { key: n, style: s.processItem }, /* @__PURE__ */ React.createElement("span", { style: { color: niche.accent } }, n), /* @__PURE__ */ React.createElement("strong", null, title), /* @__PURE__ */ React.createElement("p", null, desc)))));
  }
  function Preview({ niche, model, navigate }) {
    return /* @__PURE__ */ React.createElement("div", { style: s.previewWrap }, /* @__PURE__ */ React.createElement("div", { style: s.topbar }, /* @__PURE__ */ React.createElement("button", { onClick: () => navigate("gallery"), style: s.back }, "\u2190 Galeria"), /* @__PURE__ */ React.createElement("div", { style: s.url }, /* @__PURE__ */ React.createElement("span", { style: s.dots }, /* @__PURE__ */ React.createElement("i", { style: { ...s.dot, background: "#ff5f57" } }), /* @__PURE__ */ React.createElement("i", { style: { ...s.dot, background: "#febc2e" } }), /* @__PURE__ */ React.createElement("i", { style: { ...s.dot, background: "#28c840" } })), /* @__PURE__ */ React.createElement("span", { style: s.urlText }, "https://", model.fakeUrl), /* @__PURE__ */ React.createElement("span", { style: s.urlModel }, model.name)), /* @__PURE__ */ React.createElement("a", { href: waLink(`${niche.title} - ${model.name}`), target: "_blank", rel: "noopener", style: s.topCta }, "Quero esse")), /* @__PURE__ */ React.createElement(DemoSite, { niche, model }), /* @__PURE__ */ React.createElement("a", { href: waLink(`${niche.title} - ${model.name}`), target: "_blank", rel: "noopener", style: s.floatWa }, "Quero esse modelo"));
  }
  function DemoSite({ niche, model }) {
    const direction = DIRECTIONS[model.id] || DIRECTIONS.default;
    const palette = getPalette(model, direction);
    const [propertyType, setPropertyType] = useState("Todos");
    const properties = useMemo(() => [
      ["Apartamento", "R$ 780 mil", "92 m\xB2", "2 su\xEDtes"],
      ["Casa", "R$ 1,9 mi", "280 m\xB2", "4 su\xEDtes"],
      ["Comercial", "R$ 5.800/m\xEAs", "110 m\xB2", "Centro"]
    ], []);
    const visibleProperties = propertyType === "Todos" ? properties : properties.filter((p) => p[0] === propertyType);
    return /* @__PURE__ */ React.createElement("div", { style: { ...u.page, background: palette.bg, color: palette.fg, fontFamily: direction.font, paddingLeft: direction.nav === "vertical" ? 210 : 0 } }, /* @__PURE__ */ React.createElement(SiteNav, { model, palette, direction }), /* @__PURE__ */ React.createElement(SiteHero, { niche, model, palette, direction }), /* @__PURE__ */ React.createElement(ConversionBlock, { niche, model, palette, direction }), /* @__PURE__ */ React.createElement(SiteServices, { niche, model, palette, direction }), /* @__PURE__ */ React.createElement(
      SiteSpecial,
      {
        niche,
        model,
        palette,
        direction,
        propertyType,
        setPropertyType,
        visibleProperties
      }
    ), /* @__PURE__ */ React.createElement(QuestionBlock, { niche, model, palette }), /* @__PURE__ */ React.createElement(SiteProof, { niche, model, palette, direction }), /* @__PURE__ */ React.createElement(SiteBooking, { niche, model, palette, direction }), /* @__PURE__ */ React.createElement(StickyConversion, { niche, model, palette }), /* @__PURE__ */ React.createElement("footer", { style: { ...u.footer, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("strong", null, model.name), /* @__PURE__ */ React.createElement("span", { style: { color: palette.muted } }, SELLER.email, " \xB7 +55 19 99931-5179")));
  }
  function SiteNav({ model, palette, direction }) {
    if (direction.nav === "vertical") {
      return /* @__PURE__ */ React.createElement("aside", { style: { ...u.sideNav, borderColor: palette.line, background: palette.panel } }, /* @__PURE__ */ React.createElement("strong", { style: u.sideLogo }, model.name), /* @__PURE__ */ React.createElement("span", { style: { color: palette.muted } }, "Atendimento \xB7 Casos \xB7 Contato"), /* @__PURE__ */ React.createElement("a", { style: { ...u.smallBtn, background: palette.accent, color: readableText(palette.accent) } }, "Agendar"));
    }
    if (direction.nav === "bar") {
      return /* @__PURE__ */ React.createElement("div", { style: { ...u.utilityBar, background: palette.accent, color: readableText(palette.accent) } }, /* @__PURE__ */ React.createElement("span", null, model.name), /* @__PURE__ */ React.createElement("span", null, "WhatsApp +55 19 99931-5179"), /* @__PURE__ */ React.createElement("span", null, "Atendimento por agendamento"));
    }
    if (direction.nav === "minimal") {
      return /* @__PURE__ */ React.createElement("nav", { style: { ...u.navMinimal, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("span", null, model.name), /* @__PURE__ */ React.createElement("span", { style: { color: palette.muted } }, "Projetos selecionados"), /* @__PURE__ */ React.createElement("span", { style: { color: palette.accent } }, "Contato"));
    }
    return /* @__PURE__ */ React.createElement("nav", { style: { ...u.nav, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", { style: u.logo }, /* @__PURE__ */ React.createElement("span", { style: { ...u.logoMark, background: palette.accent, color: readableText(palette.accent) } }, model.name.slice(0, 2).toUpperCase()), /* @__PURE__ */ React.createElement("strong", null, model.name)), /* @__PURE__ */ React.createElement("div", { style: { ...u.navLinks, color: palette.muted } }, /* @__PURE__ */ React.createElement("span", null, "Servi\xE7os"), /* @__PURE__ */ React.createElement("span", null, "Equipe"), /* @__PURE__ */ React.createElement("span", null, "Resultados"), /* @__PURE__ */ React.createElement("span", null, "Contato")), /* @__PURE__ */ React.createElement("a", { style: { ...u.smallBtn, background: palette.accent, color: readableText(palette.accent) } }, direction.cta));
  }
  function SiteHero({ niche, model, palette, direction }) {
    const metric = heroMetric(niche.slug, model.id);
    if (direction.hero === "cover") {
      return /* @__PURE__ */ React.createElement("section", { style: { ...u.heroCover, backgroundImage: `linear-gradient(90deg, ${palette.overlay}, rgba(0,0,0,.18)), url(${model.hero})` } }, /* @__PURE__ */ React.createElement("div", { style: u.coverInner }, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, direction.kicker || niche.eyebrow), /* @__PURE__ */ React.createElement("h1", { style: u.coverTitle }, model.headline), /* @__PURE__ */ React.createElement("p", { style: u.coverText }, model.sub), /* @__PURE__ */ React.createElement("a", { href: waLink(model.name), target: "_blank", rel: "noopener", style: { ...u.largeBtn, background: palette.accent, color: readableText(palette.accent) } }, direction.cta)));
    }
    if (direction.hero === "poster") {
      return /* @__PURE__ */ React.createElement("section", { style: u.posterHero }, /* @__PURE__ */ React.createElement("div", { style: u.posterTop }, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, niche.eyebrow), /* @__PURE__ */ React.createElement("h1", { style: u.posterTitle }, model.headline)), /* @__PURE__ */ React.createElement("img", { src: model.hero, alt: "", style: u.posterImage }), /* @__PURE__ */ React.createElement("div", { style: { ...u.posterCaption, color: palette.muted } }, /* @__PURE__ */ React.createElement("span", null, model.sub), /* @__PURE__ */ React.createElement("strong", { style: { color: palette.accent } }, metric[0], " \xB7 ", metric[1])));
    }
    if (direction.hero === "command") {
      return /* @__PURE__ */ React.createElement("section", { style: u.commandHero }, /* @__PURE__ */ React.createElement("div", { style: { ...u.commandPanel, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, direction.kicker), /* @__PURE__ */ React.createElement("h1", { style: u.commandTitle }, model.headline), /* @__PURE__ */ React.createElement("p", { style: { color: palette.muted } }, model.sub), /* @__PURE__ */ React.createElement("div", { style: u.commandGrid }, ["Plant\xE3o", "Sigilo", "Estrat\xE9gia", "Resposta r\xE1pida"].map((item) => /* @__PURE__ */ React.createElement("span", { key: item, style: { ...u.commandChip, borderColor: palette.line } }, item)))), /* @__PURE__ */ React.createElement("img", { src: model.hero, alt: "", style: u.commandImage }));
    }
    if (direction.hero === "dashboard") {
      return /* @__PURE__ */ React.createElement("section", { style: u.dashboardHero }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, niche.eyebrow), /* @__PURE__ */ React.createElement("h1", { style: u.dashboardTitle }, model.headline), /* @__PURE__ */ React.createElement("p", { style: { ...u.lede, color: palette.muted } }, model.sub)), /* @__PURE__ */ React.createElement("div", { style: { ...u.dashboardCard, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", { style: u.searchBar }, "Buscar servi\xE7o, bairro ou disponibilidade"), /* @__PURE__ */ React.createElement("img", { src: model.hero, alt: "", style: u.dashboardImage }), /* @__PURE__ */ React.createElement("div", { style: u.dashboardStats }, /* @__PURE__ */ React.createElement("strong", { style: { color: palette.accent } }, metric[0]), /* @__PURE__ */ React.createElement("span", { style: { color: palette.muted } }, metric[1]))));
    }
    return /* @__PURE__ */ React.createElement("section", { style: u.splitHero }, /* @__PURE__ */ React.createElement("div", { style: u.splitCopy }, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, niche.eyebrow), /* @__PURE__ */ React.createElement("h1", { style: u.splitTitle }, model.headline), /* @__PURE__ */ React.createElement("p", { style: { ...u.lede, color: palette.muted } }, model.sub), /* @__PURE__ */ React.createElement("div", { style: u.actions }, /* @__PURE__ */ React.createElement("a", { href: waLink(model.name), target: "_blank", rel: "noopener", style: { ...u.largeBtn, background: palette.accent, color: readableText(palette.accent) } }, direction.cta), /* @__PURE__ */ React.createElement("span", { style: { color: palette.muted } }, metric[0], " \xB7 ", metric[1]))), /* @__PURE__ */ React.createElement("div", { style: u.imageStack }, /* @__PURE__ */ React.createElement("img", { src: model.hero, alt: "", style: { ...u.heroImage, borderRadius: direction.radius } }), /* @__PURE__ */ React.createElement("div", { style: { ...u.metric, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("strong", { style: { color: palette.accent } }, metric[0]), /* @__PURE__ */ React.createElement("span", { style: { color: palette.muted } }, metric[1]))));
  }
  function SiteServices({ niche, model, palette, direction }) {
    if (direction.services === "index") {
      return /* @__PURE__ */ React.createElement("section", { style: { ...u.indexList, borderColor: palette.line } }, model.sections.map((item, i) => /* @__PURE__ */ React.createElement("article", { key: item, style: { ...u.indexRow, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("span", { style: { color: palette.accent } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("h3", null, item), /* @__PURE__ */ React.createElement("p", { style: { color: palette.muted } }, serviceText(niche.slug, item)))));
    }
    if (direction.services === "timeline") {
      return /* @__PURE__ */ React.createElement("section", { style: u.timeline }, model.sections.map((item, i) => /* @__PURE__ */ React.createElement("article", { key: item, style: { ...u.timelineItem, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("span", { style: { background: palette.accent, color: readableText(palette.accent) } }, i + 1), /* @__PURE__ */ React.createElement("h3", null, item), /* @__PURE__ */ React.createElement("p", { style: { color: palette.muted } }, serviceText(niche.slug, item)))));
    }
    if (direction.services === "tiles") {
      return /* @__PURE__ */ React.createElement("section", { style: u.tileGrid }, model.sections.map((item, i) => /* @__PURE__ */ React.createElement("article", { key: item, style: { ...u.tile, background: i % 2 ? palette.panel : palette.accent, color: i % 2 ? palette.fg : readableText(palette.accent), borderColor: palette.line } }, /* @__PURE__ */ React.createElement("span", null, item), /* @__PURE__ */ React.createElement("p", null, serviceText(niche.slug, item)))));
    }
    return /* @__PURE__ */ React.createElement("section", { style: { ...u.cardGrid, borderColor: palette.line } }, model.sections.map((item) => /* @__PURE__ */ React.createElement("article", { key: item, style: { ...u.serviceCard, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("span", { style: { color: palette.accent } }, "\u2022"), /* @__PURE__ */ React.createElement("strong", null, item), /* @__PURE__ */ React.createElement("p", { style: { color: palette.muted } }, serviceText(niche.slug, item)))));
  }
  function ConversionBlock({ niche, model, palette, direction }) {
    const data = conversionData(niche.slug, model);
    if (niche.slug === "odonto" && model.id === "implantes") {
      return /* @__PURE__ */ React.createElement("section", { style: { ...u.implantPlan, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", { style: u.implantPlanHead }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, "AVALIA\xC7\xC3O PARA IMPLANTES"), /* @__PURE__ */ React.createElement("h2", null, "Um plano claro antes de qualquer procedimento.")), /* @__PURE__ */ React.createElement("a", { href: waLink(model.name), target: "_blank", rel: "noopener", style: { ...u.largeBtn, background: palette.accent, color: readableText(palette.accent) } }, "Agendar avalia\xE7\xE3o")), /* @__PURE__ */ React.createElement("div", { style: u.implantSteps }, [
        ["01", "Consulta e diagn\xF3stico", "Entendemos sua queixa, avaliamos sa\xFAde bucal, hist\xF3rico e expectativa de reabilita\xE7\xE3o."],
        ["02", "Exames e tomografia", "Solicitamos imagens para medir volume \xF3sseo, planejar posi\xE7\xE3o dos implantes e reduzir riscos."],
        ["03", "Plano de tratamento", "Voc\xEA recebe etapas, prazos, op\xE7\xF5es de pr\xF3tese e formas de pagamento antes de decidir."]
      ].map(([n, title, text]) => /* @__PURE__ */ React.createElement("article", { key: n, style: { ...u.implantStep, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("span", { style: { color: palette.accent } }, n), /* @__PURE__ */ React.createElement("strong", null, title), /* @__PURE__ */ React.createElement("p", { style: { color: palette.muted } }, text)))));
    }
    if (direction.hero === "cover") {
      return /* @__PURE__ */ React.createElement("section", { style: { ...u.intentDark, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: { color: palette.accent } }, data.label), /* @__PURE__ */ React.createElement("h2", null, data.title)), data.items.map((item) => /* @__PURE__ */ React.createElement("article", { key: item[0], style: { ...u.intentDarkItem, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("strong", null, item[0]), /* @__PURE__ */ React.createElement("p", { style: { color: palette.muted } }, item[1]))));
    }
    if (direction.hero === "dashboard") {
      return /* @__PURE__ */ React.createElement("section", { style: u.intentDashboard }, /* @__PURE__ */ React.createElement("div", { style: { ...u.intentPanel, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, data.label), /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("div", { style: u.intentRows }, data.items.map((item) => /* @__PURE__ */ React.createElement("span", { key: item[0], style: { ...u.intentRow, borderColor: palette.line } }, item[0], " \xB7 ", item[1])))));
    }
    return /* @__PURE__ */ React.createElement("section", { style: { ...u.intentStrip, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, data.label), /* @__PURE__ */ React.createElement("h2", null, data.title)), /* @__PURE__ */ React.createElement("div", { style: u.intentCards }, data.items.map((item) => /* @__PURE__ */ React.createElement("article", { key: item[0], style: { ...u.intentCard, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("strong", null, item[0]), /* @__PURE__ */ React.createElement("p", { style: { color: palette.muted } }, item[1])))));
  }
  function SiteSpecial({ niche, model, palette, direction, propertyType, setPropertyType, visibleProperties }) {
    if (niche.slug === "imobiliaria") {
      return /* @__PURE__ */ React.createElement("section", { style: { ...u.propertyModule, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", { style: u.propertyHeader }, /* @__PURE__ */ React.createElement("h2", { style: u.sectionTitle }, "Sele\xE7\xE3o atualizada de im\xF3veis dispon\xEDveis."), /* @__PURE__ */ React.createElement("div", { style: u.filters }, ["Todos", "Apartamento", "Casa", "Comercial"].map((filter) => /* @__PURE__ */ React.createElement("button", { key: filter, onClick: () => setPropertyType(filter), style: {
        ...u.filter,
        background: propertyType === filter ? palette.accent : "transparent",
        color: propertyType === filter ? readableText(palette.accent) : palette.fg,
        borderColor: propertyType === filter ? palette.accent : palette.line
      } }, filter)))), /* @__PURE__ */ React.createElement("div", { style: direction.id === "broker" ? u.propertyShowcase : u.propertyCards }, visibleProperties.map((p, i) => /* @__PURE__ */ React.createElement("article", { key: p.join("-"), style: { ...u.property, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("img", { src: i % 2 ? model.cover : model.hero, alt: "", style: u.propertyImg }), /* @__PURE__ */ React.createElement("strong", null, p[0]), /* @__PURE__ */ React.createElement("span", { style: { color: palette.accent } }, p[1]), /* @__PURE__ */ React.createElement("p", { style: { color: palette.muted } }, p[2], " \xB7 ", p[3])))));
    }
    if (["odonto", "estetica"].includes(niche.slug)) {
      return /* @__PURE__ */ React.createElement("section", { style: direction.special === "gallery" ? u.visualGallery : u.beforeAfterModule }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, niche.slug === "odonto" ? "CASOS CL\xCDNICOS" : "PROTOCOLOS"), /* @__PURE__ */ React.createElement("h2", { style: u.sectionTitle }, niche.slug === "odonto" ? "Casos documentados com planejamento e cuidado." : "Resultados naturais, registrados com acompanhamento."), /* @__PURE__ */ React.createElement("p", { style: { ...u.bodyText, color: palette.muted } }, niche.slug === "odonto" ? "Cada transforma\xE7\xE3o respeita diagn\xF3stico, fun\xE7\xE3o mastigat\xF3ria e est\xE9tica facial." : "Cada protocolo come\xE7a com avalia\xE7\xE3o individual e evolui com registros de progresso.")), /* @__PURE__ */ React.createElement("div", { style: u.photoPair }, /* @__PURE__ */ React.createElement("img", { src: model.cover, alt: "", style: u.photoImg }), /* @__PURE__ */ React.createElement("img", { src: model.hero, alt: "", style: u.photoImg })));
    }
    if (["medicos"].includes(niche.slug)) {
      return /* @__PURE__ */ React.createElement("section", { style: { ...u.clinicInfo, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, "CONSULTA"), /* @__PURE__ */ React.createElement("h2", { style: u.sectionTitle }, "Atendimento particular e conv\xEAnios selecionados.")), /* @__PURE__ */ React.createElement("div", { style: u.chips }, ["Particular", "Unimed", "Bradesco Sa\xFAde", "Amil", "SulAm\xE9rica"].map((plan) => /* @__PURE__ */ React.createElement("span", { key: plan, style: { ...u.chip, borderColor: palette.line } }, plan))));
    }
    return /* @__PURE__ */ React.createElement("section", { style: { ...u.statement, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("span", { style: { color: palette.accent } }, "Atua\xE7\xE3o"), /* @__PURE__ */ React.createElement("h2", null, proofTitle(niche.slug)));
  }
  function SiteProof({ niche, model, palette, direction }) {
    if (direction.proof === "quote") {
      return /* @__PURE__ */ React.createElement("section", { style: u.quoteProof }, /* @__PURE__ */ React.createElement("div", { style: { color: palette.accent } }, '"'), /* @__PURE__ */ React.createElement("p", null, proofText(niche.slug)), /* @__PURE__ */ React.createElement("span", { style: { color: palette.muted } }, "Cliente atendido \xB7 ", model.name));
    }
    if (direction.proof === "press") {
      return /* @__PURE__ */ React.createElement("section", { style: { ...u.pressProof, borderColor: palette.line } }, ["Google", "Indica\xE7\xF5es", "Retorno", "Atendimento"].map((item, i) => /* @__PURE__ */ React.createElement("article", { key: item, style: u.pressItem }, /* @__PURE__ */ React.createElement("strong", { style: { color: palette.accent } }, ["4.9", "+70%", "24h", "1:1"][i]), /* @__PURE__ */ React.createElement("span", null, item))));
    }
    return /* @__PURE__ */ React.createElement("section", { style: { ...u.proofPanel, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, "PROVA SOCIAL"), /* @__PURE__ */ React.createElement("h2", { style: u.sectionTitle }, proofTitle(niche.slug)), /* @__PURE__ */ React.createElement("p", { style: { ...u.bodyText, color: palette.muted } }, proofText(niche.slug))), /* @__PURE__ */ React.createElement("div", { style: { ...u.video, background: palette.bg } }, /* @__PURE__ */ React.createElement("span", { style: { ...u.play, background: palette.accent, color: readableText(palette.accent) } }, "\u25B6")));
  }
  function QuestionBlock({ niche, model, palette }) {
    const questions = questionData(niche.slug, model);
    return /* @__PURE__ */ React.createElement("section", { style: { ...u.questions, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, "D\xDAVIDAS FREQUENTES"), /* @__PURE__ */ React.createElement("h2", { style: u.sectionTitle }, questions.title)), /* @__PURE__ */ React.createElement("div", { style: u.questionList }, questions.items.map(([q, a]) => /* @__PURE__ */ React.createElement("article", { key: q, style: { ...u.questionItem, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("strong", null, q), /* @__PURE__ */ React.createElement("p", { style: { color: palette.muted } }, a)))));
  }
  function StickyConversion({ niche, model, palette }) {
    const label = {
      advogado: "Analisar caso",
      odonto: "Agendar consulta",
      estetica: "Agendar avalia\xE7\xE3o",
      imobiliaria: "Receber im\xF3veis",
      medicos: "Marcar consulta"
    }[niche.slug] || "Falar agora";
    return /* @__PURE__ */ React.createElement("div", { style: { ...u.stickyLead, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("span", { style: { color: palette.muted } }, model.name), /* @__PURE__ */ React.createElement("strong", null, label), /* @__PURE__ */ React.createElement("a", { href: waLink(model.name), target: "_blank", rel: "noopener", style: { ...u.stickyBtn, background: palette.accent, color: readableText(palette.accent) } }, "WhatsApp"));
  }
  function SiteBooking({ niche, model, palette, direction }) {
    if (direction.booking === "strip") {
      return /* @__PURE__ */ React.createElement("section", { style: { ...u.bookingStrip, background: palette.accent, color: readableText(palette.accent) } }, /* @__PURE__ */ React.createElement("h2", null, bookingTitle(niche.slug)), /* @__PURE__ */ React.createElement("a", { href: waLink(model.name), target: "_blank", rel: "noopener" }, "Chamar no WhatsApp \u2192"));
    }
    return /* @__PURE__ */ React.createElement("section", { style: u.bookingGrid }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...u.kicker, color: palette.accent } }, "CONTATO"), /* @__PURE__ */ React.createElement("h2", { style: u.bookingTitle }, bookingTitle(niche.slug))), /* @__PURE__ */ React.createElement("div", { style: { ...u.form, background: palette.panel, borderColor: palette.line } }, /* @__PURE__ */ React.createElement("input", { placeholder: "Nome", style: { ...u.field, borderColor: palette.line, color: palette.fg } }), /* @__PURE__ */ React.createElement("input", { placeholder: "WhatsApp", style: { ...u.field, borderColor: palette.line, color: palette.fg } }), /* @__PURE__ */ React.createElement("select", { style: { ...u.field, borderColor: palette.line, color: palette.fg } }, /* @__PURE__ */ React.createElement("option", null, "Quero agendar uma avalia\xE7\xE3o"), /* @__PURE__ */ React.createElement("option", null, "Tenho d\xFAvida sobre valores"), /* @__PURE__ */ React.createElement("option", null, "Quero falar com atendimento")), /* @__PURE__ */ React.createElement("button", { style: { ...u.submitBtn, background: palette.accent, color: readableText(palette.accent) } }, "Enviar")));
  }
  const DIRECTIONS = {
    banca: { id: "banca", nav: "minimal", hero: "poster", services: "index", proof: "press", booking: "strip", font: "'Manrope', sans-serif", bg: "#101112", fg: "#f4efe6", panel: "#18191a", muted: "#a7a09a", line: "#2c2d2e", overlay: "rgba(16,17,18,.78)", radius: 0, cta: "Solicitar reuni\xE3o" },
    criminal: { id: "criminal", nav: "bar", hero: "command", services: "timeline", proof: "quote", booking: "strip", font: "'Archivo', sans-serif", bg: "#080909", fg: "#f7f2ec", panel: "#141414", muted: "#aaa", line: "#303030", overlay: "rgba(8,9,9,.88)", radius: 4, kicker: "PLANT\xC3O PENAL \xB7 24H", cta: "Atendimento urgente" },
    familia: { id: "familia", nav: "default", hero: "split", services: "cards", proof: "quote", booking: "form", font: "'Cormorant Garamond', serif", bg: "#f7f1ea", fg: "#2e241d", panel: "#fffaf4", muted: "#7b6d61", line: "#dfd0c2", overlay: "rgba(247,241,234,.65)", radius: 28, cta: "Conversar com cuidado" },
    trabalhista: { id: "trabalhista", nav: "default", hero: "dashboard", services: "tiles", proof: "press", booking: "form", font: "'Manrope', sans-serif", bg: "#edf4f7", fg: "#132d38", panel: "#ffffff", muted: "#5d727a", line: "#cddde3", overlay: "rgba(237,244,247,.72)", radius: 14, cta: "Mapear riscos" },
    previdenciario: { id: "previdenciario", nav: "vertical", hero: "split", services: "timeline", proof: "quote", booking: "form", font: "'Manrope', sans-serif", bg: "#f3f5ee", fg: "#263224", panel: "#ffffff", muted: "#6f796a", line: "#d8dfd2", overlay: "rgba(243,245,238,.76)", radius: 18, cta: "Calcular benef\xEDcio" },
    sorriso: { id: "sorriso", nav: "default", hero: "split", services: "cards", special: "gallery", proof: "press", booking: "form", font: "'Manrope', sans-serif", bg: "#eff9f8", fg: "#123130", panel: "#ffffff", muted: "#5b7674", line: "#cce5e2", overlay: "rgba(239,249,248,.72)", radius: 22, cta: "Agendar consulta" },
    implantes: { id: "implantes", nav: "minimal", hero: "cover", services: "cards", special: "gallery", proof: "quote", booking: "strip", font: "'Cormorant Garamond', serif", bg: "#0d1518", fg: "#eef8f8", panel: "#152126", muted: "#9ab0b4", line: "#263940", overlay: "rgba(13,21,24,.82)", radius: 0, cta: "Avaliar implante" },
    ortodontia: { id: "ortodontia", nav: "default", hero: "dashboard", services: "tiles", special: "gallery", proof: "press", booking: "form", font: "'Manrope', sans-serif", bg: "#f3f7ff", fg: "#17233f", panel: "#ffffff", muted: "#65708f", line: "#d8e2ff", overlay: "rgba(243,247,255,.75)", radius: 26, cta: "Simular sorriso" },
    kids: { id: "kids", nav: "bar", hero: "poster", services: "tiles", special: "gallery", proof: "quote", booking: "strip", font: "'Manrope', sans-serif", bg: "#fff7e8", fg: "#3b2914", panel: "#ffffff", muted: "#876b4b", line: "#f0d7ad", overlay: "rgba(255,247,232,.72)", radius: 34, kicker: "ODONTOPEDIATRIA", cta: "Agendar primeira visita" },
    harmonia: { id: "harmonia", nav: "minimal", hero: "cover", services: "index", special: "gallery", proof: "quote", booking: "form", font: "'Cormorant Garamond', serif", bg: "#11100e", fg: "#f7f0e4", panel: "#1c1a17", muted: "#b5aa99", line: "#302b24", overlay: "rgba(17,16,14,.8)", radius: 12, cta: "Planejar sorriso" },
    skin: { id: "skin", nav: "minimal", hero: "split", services: "cards", special: "gallery", proof: "quote", booking: "form", font: "'Cormorant Garamond', serif", bg: "#fbf3f1", fg: "#392323", panel: "#ffffff", muted: "#876c68", line: "#ead6d2", overlay: "rgba(251,243,241,.72)", radius: 32, cta: "Agendar avalia\xE7\xE3o" },
    body: { id: "body", nav: "default", hero: "dashboard", services: "tiles", special: "gallery", proof: "press", booking: "form", font: "'Manrope', sans-serif", bg: "#eef3ef", fg: "#1d342e", panel: "#ffffff", muted: "#65766e", line: "#d2ddd5", overlay: "rgba(238,243,239,.72)", radius: 16, cta: "Montar protocolo" },
    laser: { id: "laser", nav: "bar", hero: "cover", services: "timeline", special: "gallery", proof: "press", booking: "strip", font: "'Archivo', sans-serif", bg: "#10101b", fg: "#f2f0ff", panel: "#1b1b2c", muted: "#aba8c8", line: "#30304a", overlay: "rgba(16,16,27,.83)", radius: 4, cta: "Ver planos" },
    spa: { id: "spa", nav: "minimal", hero: "poster", services: "cards", special: "gallery", proof: "quote", booking: "strip", font: "'Cormorant Garamond', serif", bg: "#f5efe5", fg: "#34291d", panel: "#fffaf2", muted: "#807162", line: "#e4d7c6", overlay: "rgba(245,239,229,.68)", radius: 999, cta: "Reservar ritual" },
    inject: { id: "inject", nav: "vertical", hero: "split", services: "index", special: "gallery", proof: "quote", booking: "form", font: "'Manrope', sans-serif", bg: "#10100e", fg: "#f4ecd9", panel: "#1a1916", muted: "#b4a98f", line: "#302c22", overlay: "rgba(16,16,14,.84)", radius: 18, cta: "Avalia\xE7\xE3o facial" },
    broker: { id: "broker", nav: "minimal", hero: "cover", services: "index", proof: "quote", booking: "form", font: "'Cormorant Garamond', serif", bg: "#11100e", fg: "#f7f0e2", panel: "#1d1a15", muted: "#b3a68f", line: "#322b20", overlay: "rgba(17,16,14,.72)", radius: 0, cta: "Receber curadoria" },
    cidade: { id: "cidade", nav: "default", hero: "dashboard", services: "cards", proof: "press", booking: "form", font: "'Manrope', sans-serif", bg: "#f4f7f2", fg: "#17302b", panel: "#ffffff", muted: "#64756f", line: "#d3dfd8", overlay: "rgba(244,247,242,.72)", radius: 14, cta: "Buscar im\xF3vel" },
    lancamentos: { id: "lancamentos", nav: "bar", hero: "poster", services: "tiles", proof: "press", booking: "strip", font: "'Archivo', sans-serif", bg: "#eef4f7", fg: "#132d38", panel: "#ffffff", muted: "#60727a", line: "#d0dee4", overlay: "rgba(238,244,247,.72)", radius: 8, cta: "Ver tabela" },
    locacao: { id: "locacao", nav: "default", hero: "dashboard", services: "timeline", proof: "press", booking: "form", font: "'Manrope', sans-serif", bg: "#fff6ee", fg: "#3b2414", panel: "#ffffff", muted: "#836958", line: "#efd7c5", overlay: "rgba(255,246,238,.74)", radius: 20, cta: "Agendar visita" },
    rural: { id: "rural", nav: "minimal", hero: "cover", services: "index", proof: "quote", booking: "strip", font: "'Cormorant Garamond', serif", bg: "#f2f3ea", fg: "#2c321f", panel: "#fffef8", muted: "#747a62", line: "#d8dcc8", overlay: "rgba(35,43,24,.48)", radius: 6, cta: "Conhecer \xE1reas" },
    dermato: { id: "dermato", nav: "default", hero: "split", services: "cards", proof: "quote", booking: "form", font: "'Manrope', sans-serif", bg: "#f8f2f0", fg: "#372521", panel: "#ffffff", muted: "#856d67", line: "#e5d3ce", overlay: "rgba(248,242,240,.76)", radius: 24, cta: "Agendar consulta" },
    ortopedia: { id: "ortopedia", nav: "bar", hero: "dashboard", services: "timeline", proof: "press", booking: "strip", font: "'Archivo', sans-serif", bg: "#eef6f7", fg: "#143238", panel: "#ffffff", muted: "#60777d", line: "#cfe2e5", overlay: "rgba(238,246,247,.74)", radius: 10, cta: "Avaliar dor" },
    psiquiatria: { id: "psiquiatria", nav: "minimal", hero: "poster", services: "cards", proof: "quote", booking: "form", font: "'Cormorant Garamond', serif", bg: "#f1f2f7", fg: "#25283e", panel: "#ffffff", muted: "#6b6f88", line: "#d8dbea", overlay: "rgba(241,242,247,.72)", radius: 30, cta: "Marcar consulta" },
    gineco: { id: "gineco", nav: "default", hero: "split", services: "tiles", proof: "quote", booking: "form", font: "'Manrope', sans-serif", bg: "#fbf0f4", fg: "#3b2030", panel: "#ffffff", muted: "#876476", line: "#ecd1dd", overlay: "rgba(251,240,244,.72)", radius: 26, cta: "Agendar consulta" },
    plastica: { id: "plastica", nav: "minimal", hero: "cover", services: "index", proof: "quote", booking: "strip", font: "'Cormorant Garamond', serif", bg: "#10100e", fg: "#f6eedb", panel: "#1b1915", muted: "#b9ad93", line: "#332d21", overlay: "rgba(16,16,14,.78)", radius: 12, cta: "Iniciar avalia\xE7\xE3o" },
    default: { id: "default", nav: "default", hero: "split", services: "cards", proof: "quote", booking: "form", font: "'Manrope', sans-serif", bg: "#fbfaf7", fg: "#171817", panel: "#ffffff", muted: "#686a64", line: "#e4e0d8", overlay: "rgba(0,0,0,.55)", radius: 18, cta: "Agendar" }
  };
  function getPalette(model, direction) {
    return {
      bg: direction.bg,
      fg: direction.fg,
      panel: direction.panel,
      muted: direction.muted,
      line: direction.line,
      overlay: direction.overlay,
      accent: model.accent
    };
  }
  const u = {
    page: { minHeight: "calc(100vh - 54px)" },
    nav: { display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 28, padding: "22px 46px", borderBottom: "1px solid" },
    navMinimal: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "26px 46px", borderBottom: "1px solid", fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase" },
    utilityBar: { display: "flex", justifyContent: "space-between", gap: 20, padding: "12px 46px", fontWeight: 800, fontSize: 13 },
    sideNav: { position: "fixed", left: 0, top: 54, bottom: 0, width: 210, padding: 24, borderRight: "1px solid", display: "flex", flexDirection: "column", gap: 18, zIndex: 5 },
    sideLogo: { fontFamily: "'Cormorant Garamond', serif", fontSize: 28, lineHeight: 1 },
    logo: { display: "flex", alignItems: "center", gap: 12 },
    logoMark: { width: 38, height: 38, borderRadius: 12, display: "grid", placeItems: "center", fontSize: 12 },
    navLinks: { display: "flex", justifyContent: "center", gap: 28, fontSize: 13 },
    smallBtn: { padding: "11px 18px", borderRadius: 999, fontWeight: 900, textDecoration: "none", textAlign: "center" },
    largeBtn: { display: "inline-flex", padding: "15px 24px", borderRadius: 999, fontWeight: 900, textDecoration: "none", alignItems: "center" },
    kicker: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 18 },
    splitHero: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", padding: "78px 46px", maxWidth: 1360, margin: "0 auto" },
    splitCopy: { maxWidth: 660 },
    splitTitle: { fontFamily: "'Instrument Serif', 'Cormorant Garamond', serif", fontSize: "clamp(48px, 7vw, 98px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: "-.02em", margin: 0 },
    lede: { fontSize: 18, lineHeight: 1.65, margin: "26px 0 0", maxWidth: 590 },
    actions: { display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", marginTop: 34 },
    imageStack: { position: "relative" },
    heroImage: { width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block" },
    metric: { position: "absolute", left: -22, bottom: 28, border: "1px solid", borderRadius: 16, padding: 18, width: 220, display: "flex", flexDirection: "column", gap: 5, boxShadow: "0 18px 50px rgba(0,0,0,.22)" },
    heroCover: { minHeight: "86vh", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "flex-end", padding: "70px 46px" },
    coverInner: { maxWidth: 860 },
    coverTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(58px, 9vw, 132px)", lineHeight: 0.92, fontWeight: 400, margin: 0 },
    coverText: { maxWidth: 560, fontSize: 18, lineHeight: 1.65, margin: "24px 0 32px" },
    posterHero: { padding: "70px 46px 40px", maxWidth: 1320, margin: "0 auto" },
    posterTop: { display: "grid", gridTemplateColumns: "220px 1fr", gap: 34, alignItems: "start" },
    posterTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(56px, 10vw, 150px)", lineHeight: 0.88, fontWeight: 400, margin: 0 },
    posterImage: { width: "100%", height: "54vh", minHeight: 430, objectFit: "cover", display: "block", marginTop: 44 },
    posterCaption: { display: "flex", justifyContent: "space-between", gap: 24, paddingTop: 16, fontSize: 14 },
    commandHero: { display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 0, minHeight: "78vh" },
    commandPanel: { borderRight: "1px solid", padding: "72px 46px", display: "flex", flexDirection: "column", justifyContent: "center" },
    commandTitle: { fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: "clamp(48px, 7vw, 106px)", lineHeight: 0.9, margin: 0, letterSpacing: "-.04em" },
    commandGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginTop: 32 },
    commandChip: { border: "1px solid", borderRadius: 10, padding: 14, fontWeight: 900 },
    commandImage: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
    dashboardHero: { display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 48, alignItems: "center", padding: "70px 46px", maxWidth: 1360, margin: "0 auto" },
    dashboardTitle: { fontFamily: "'Archivo', 'Manrope', sans-serif", fontSize: "clamp(44px, 6vw, 86px)", lineHeight: 0.96, fontWeight: 900, letterSpacing: "-.04em", margin: 0 },
    dashboardCard: { border: "1px solid", borderRadius: 24, padding: 18, boxShadow: "0 24px 70px rgba(0,0,0,.12)" },
    searchBar: { borderRadius: 999, background: "rgba(0,0,0,.06)", padding: "14px 18px", marginBottom: 14, color: "#777" },
    dashboardImage: { width: "100%", aspectRatio: "16 / 10", objectFit: "cover", borderRadius: 18 },
    dashboardStats: { display: "flex", justifyContent: "space-between", gap: 20, paddingTop: 14 },
    cardGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, padding: "34px 46px", borderTop: "1px solid", borderBottom: "1px solid" },
    serviceCard: { border: "1px solid", borderRadius: 14, padding: 20 },
    indexList: { padding: "36px 46px 54px", borderTop: "1px solid" },
    indexRow: { display: "grid", gridTemplateColumns: "70px 260px 1fr", gap: 28, alignItems: "baseline", borderBottom: "1px solid", padding: "26px 0" },
    timeline: { padding: "70px 46px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 },
    timelineItem: { border: "1px solid", borderRadius: 999, padding: 22, minHeight: 260 },
    tileGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 },
    tile: { minHeight: 250, padding: 26, borderRight: "1px solid", display: "flex", flexDirection: "column", justifyContent: "space-between" },
    intentStrip: { display: "grid", gridTemplateColumns: ".7fr 1.3fr", gap: 28, alignItems: "stretch", padding: "34px 46px", borderTop: "1px solid", borderBottom: "1px solid" },
    intentCards: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 },
    intentCard: { border: "1px solid", borderRadius: 16, padding: 18 },
    intentDark: { display: "grid", gridTemplateColumns: ".8fr repeat(3, 1fr)", gap: 18, padding: "34px 46px", borderTop: "1px solid", borderBottom: "1px solid" },
    intentDarkItem: { borderLeft: "1px solid", paddingLeft: 18 },
    intentDashboard: { padding: "0 46px 44px", maxWidth: 1360, margin: "0 auto" },
    intentPanel: { border: "1px solid", borderRadius: 24, padding: 28 },
    intentRows: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 18 },
    intentRow: { border: "1px solid", borderRadius: 12, padding: 14 },
    implantPlan: { margin: "0 46px 80px", padding: 34, border: "1px solid", borderRadius: 24 },
    implantPlanHead: { display: "flex", justifyContent: "space-between", gap: 24, alignItems: "flex-end", marginBottom: 28 },
    implantSteps: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
    implantStep: { borderTop: "1px solid", paddingTop: 18 },
    beforeAfterModule: { display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 44, alignItems: "center", padding: "90px 46px", maxWidth: 1280, margin: "0 auto" },
    visualGallery: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 34, alignItems: "end", padding: "90px 46px", maxWidth: 1280, margin: "0 auto" },
    sectionTitle: { fontFamily: "'Instrument Serif', 'Cormorant Garamond', serif", fontSize: "clamp(36px, 4.5vw, 68px)", lineHeight: 1.02, fontWeight: 400, margin: 0 },
    bodyText: { fontSize: 16, lineHeight: 1.65 },
    photoPair: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
    photoImg: { width: "100%", height: 420, objectFit: "cover", display: "block", borderRadius: 18 },
    propertyModule: { margin: "70px 46px", padding: 30, border: "1px solid", borderRadius: 24 },
    propertyHeader: { display: "flex", justifyContent: "space-between", gap: 28, alignItems: "flex-end", marginBottom: 28 },
    filters: { display: "flex", gap: 10, flexWrap: "wrap" },
    filter: { border: "1px solid", padding: "9px 13px", borderRadius: 999, cursor: "pointer" },
    propertyCards: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 },
    propertyShowcase: { display: "grid", gridTemplateColumns: "1.2fr .8fr .8fr", gap: 18 },
    property: { border: "1px solid", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", gap: 8 },
    propertyImg: { width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block", borderRadius: 12, marginBottom: 4 },
    clinicInfo: { margin: "70px 46px", padding: 32, border: "1px solid", borderRadius: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, alignItems: "center" },
    chips: { display: "flex", gap: 12, flexWrap: "wrap" },
    chip: { border: "1px solid", borderRadius: 999, padding: "12px 16px", fontWeight: 800 },
    statement: { margin: "70px 46px", border: "1px solid", borderRadius: 24, padding: 42 },
    questions: { display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 36, padding: "80px 46px", borderTop: "1px solid", borderBottom: "1px solid" },
    questionList: { display: "grid", gap: 14 },
    questionItem: { borderBottom: "1px solid", paddingBottom: 18 },
    proofPanel: { margin: "40px 46px 90px", padding: 34, border: "1px solid", borderRadius: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "center" },
    quoteProof: { maxWidth: 900, margin: "80px auto", padding: "0 46px", textAlign: "center" },
    pressProof: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid", borderBottom: "1px solid" },
    pressItem: { minHeight: 150, padding: 28, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 },
    video: { aspectRatio: "16 / 9", borderRadius: 18, display: "grid", placeItems: "center" },
    play: { width: 66, height: 66, borderRadius: 999, display: "grid", placeItems: "center" },
    bookingGrid: { padding: "90px 46px", display: "grid", gridTemplateColumns: "1fr 420px", gap: 40, alignItems: "center", maxWidth: 1280, margin: "0 auto" },
    bookingTitle: { fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px, 6vw, 82px)", lineHeight: 1, fontWeight: 400, margin: 0 },
    bookingStrip: { marginTop: 80, padding: "48px 46px", display: "flex", justifyContent: "space-between", gap: 24, alignItems: "center" },
    form: { border: "1px solid", borderRadius: 18, padding: 22, display: "flex", flexDirection: "column", gap: 12 },
    field: { background: "transparent", border: "1px solid", borderRadius: 10, padding: "14px 13px", font: "inherit" },
    submitBtn: { border: 0, borderRadius: 10, padding: "15px 16px", fontWeight: 900, cursor: "pointer" },
    stickyLead: { position: "fixed", left: "50%", bottom: 18, transform: "translateX(-50%)", zIndex: 40, border: "1px solid", borderRadius: 999, padding: "10px 10px 10px 18px", display: "flex", alignItems: "center", gap: 18, boxShadow: "0 20px 60px rgba(0,0,0,.25)" },
    stickyBtn: { textDecoration: "none", borderRadius: 999, padding: "11px 16px", fontWeight: 900 },
    footer: { borderTop: "1px solid", padding: "28px 46px", display: "flex", justifyContent: "space-between", gap: 16 }
  };
  function withAlpha(hex, alpha) {
    const clean = hex.replace("#", "");
    const num = parseInt(clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean, 16);
    return `rgba(${num >> 16 & 255}, ${num >> 8 & 255}, ${num & 255}, ${alpha})`;
  }
  function readableText(hex) {
    const clean = hex.replace("#", "");
    const num = parseInt(clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean, 16);
    const r = num >> 16 & 255;
    const g = num >> 8 & 255;
    const b = num & 255;
    return (r * 299 + g * 587 + b * 114) / 1e3 > 145 ? "#111" : "#fff";
  }
  function serviceText(slug, item) {
    const copy = {
      advogado: {
        "Direito empresarial": "Assessoria jur\xEDdica para empresas em decis\xF5es estrat\xE9gicas, contratos, riscos e rotinas societ\xE1rias.",
        Contratos: "Elabora\xE7\xE3o, revis\xE3o e negocia\xE7\xE3o de instrumentos comerciais com linguagem clara e prote\xE7\xE3o t\xE9cnica.",
        Societ\u00E1rio: "Organiza\xE7\xE3o de sociedades, acordos entre s\xF3cios, reorganiza\xE7\xF5es e preven\xE7\xE3o de conflitos.",
        Tribut\u00E1rio: "Planejamento, defesas administrativas e an\xE1lise de impactos fiscais nas opera\xE7\xF5es da empresa.",
        "Plant\xE3o 24h": "Atendimento r\xE1pido para pris\xF5es, intima\xE7\xF5es, mandados e situa\xE7\xF5es que exigem orienta\xE7\xE3o imediata.",
        Inqu\u00E9ritos: "Acompanhamento t\xE9cnico desde a fase investigativa, com estrat\xE9gia, discri\xE7\xE3o e presen\xE7a em atos.",
        Audi\u00EAncias: "Prepara\xE7\xE3o, sustenta\xE7\xE3o e defesa em audi\xEAncias criminais, c\xEDveis e procedimentos correlatos.",
        "Tribunal do J\xFAri": "Atua\xE7\xE3o especializada em plen\xE1rio, prepara\xE7\xE3o de tese e acompanhamento integral da fam\xEDlia.",
        Div\u00F3rcio: "Condu\xE7\xE3o t\xE9cnica e humana para acordos, partilha, pens\xE3o e encerramento seguro do v\xEDnculo.",
        Guarda: "Orienta\xE7\xE3o em guarda, conviv\xEAncia, alimentos e decis\xF5es que preservam o interesse dos filhos.",
        Invent\u00E1rio: "Invent\xE1rios judiciais e extrajudiciais com organiza\xE7\xE3o documental e redu\xE7\xE3o de desgastes familiares.",
        "Planejamento sucess\xF3rio": "Estrutura\xE7\xE3o patrimonial para proteger herdeiros, empresas familiares e decis\xF5es futuras.",
        Compliance: "Pol\xEDticas internas, auditorias e treinamentos para reduzir passivo e prevenir reclama\xE7\xF5es.",
        Defesas: "Atua\xE7\xE3o em reclama\xE7\xF5es trabalhistas, recursos, audi\xEAncias e negocia\xE7\xF5es estrat\xE9gicas.",
        Acordos: "Negocia\xE7\xE3o de solu\xE7\xF5es equilibradas com an\xE1lise de risco, custo e preserva\xE7\xE3o da opera\xE7\xE3o.",
        Treinamentos: "Capacita\xE7\xE3o de lideran\xE7as em rotinas trabalhistas, documenta\xE7\xE3o e condutas de gest\xE3o.",
        Aposentadoria: "An\xE1lise completa do hist\xF3rico contributivo para encontrar o melhor momento de pedir o benef\xEDcio.",
        "BPC/LOAS": "Orienta\xE7\xE3o para idosos e pessoas com defici\xEAncia que precisam acessar benef\xEDcio assistencial.",
        Revis\u00F5es: "Revis\xE3o de benef\xEDcios concedidos com erro de c\xE1lculo, tempo n\xE3o reconhecido ou documenta\xE7\xE3o incompleta.",
        Planejamento: "Simula\xE7\xE3o de cen\xE1rios previdenci\xE1rios para contribuir melhor e evitar perdas no futuro."
      },
      odonto: {
        Limpeza: "Profilaxia, orienta\xE7\xE3o de higiene e acompanhamento peri\xF3dico para manter gengiva e dentes saud\xE1veis.",
        Restaura\u00E7\u00F5es: "Tratamentos conservadores com resinas est\xE9ticas e cuidado para preservar estrutura dental.",
        Clareamento: "Protocolos seguros para clarear os dentes com acompanhamento profissional e resultado gradual.",
        Emerg\u00EAncia: "Atendimento para dor, trauma, fratura, sangramento e situa\xE7\xF5es que n\xE3o podem esperar.",
        Implantes: "Planejamento cir\xFArgico com exames de imagem, previsibilidade e foco em fun\xE7\xE3o mastigat\xF3ria.",
        Protocolo: "Reabilita\xE7\xE3o para m\xFAltiplos dentes com pr\xF3tese fixa e avalia\xE7\xE3o individual de cada caso.",
        "Carga imediata": "Possibilidade de dentes provis\xF3rios no mesmo per\xEDodo cir\xFArgico, conforme indica\xE7\xE3o cl\xEDnica.",
        Tomografia: "Diagn\xF3stico por imagem para medir volume \xF3sseo, planejar implantes e aumentar seguran\xE7a.",
        Alinhadores: "Tratamento discreto com placas transparentes, planejamento digital e acompanhamento cont\xEDnuo.",
        "Aparelho fixo": "Corre\xE7\xE3o ortod\xF4ntica tradicional para diferentes idades, objetivos e complexidades.",
        Infantil: "Preven\xE7\xE3o, orienta\xE7\xE3o aos pais e cuidado odontol\xF3gico leve para crian\xE7as.",
        Simula\u00E7\u00E3o: "Visualiza\xE7\xE3o do plano ortod\xF4ntico antes do in\xEDcio, com etapas e previs\xE3o de evolu\xE7\xE3o.",
        Preven\u00E7\u00E3o: "Consultas regulares para evitar c\xE1ries, acompanhar crescimento e criar bons h\xE1bitos.",
        Gestantes: "Orienta\xE7\xE3o odontol\xF3gica durante a gesta\xE7\xE3o com foco em gengiva, preven\xE7\xE3o e seguran\xE7a.",
        "Trauma dental": "Conduta r\xE1pida para quedas, pancadas, dentes fraturados ou deslocados.",
        Lentes: "Planejamento est\xE9tico com fotografia, desenho do sorriso e avalia\xE7\xE3o de propor\xE7\xE3o facial.",
        Gengivoplastia: "Ajuste do contorno gengival para melhorar harmonia, exposi\xE7\xE3o e acabamento do sorriso.",
        Facetas: "Restaura\xE7\xF5es est\xE9ticas para corrigir forma, cor e propor\xE7\xE3o com m\xEDnima interven\xE7\xE3o poss\xEDvel."
      },
      estetica: {
        Toxina: "Suaviza\xE7\xE3o de linhas de express\xE3o com avalia\xE7\xE3o facial e preserva\xE7\xE3o da naturalidade.",
        Bioestimulador: "Tratamento para estimular col\xE1geno, melhorar firmeza e qualidade da pele ao longo das semanas.",
        Preenchimento: "Reposi\xE7\xE3o de volume e contorno com indica\xE7\xE3o respons\xE1vel e equil\xEDbrio facial.",
        Skinbooster: "Hidrata\xE7\xE3o profunda para melhorar textura, vi\xE7o e elasticidade da pele.",
        Criolip\u00F3lise: "Protocolo corporal para gordura localizada com avalia\xE7\xE3o de medidas e acompanhamento.",
        Drenagem: "T\xE9cnica manual para reduzir reten\xE7\xE3o, melhorar conforto corporal e apoiar protocolos est\xE9ticos.",
        Ultraformer: "Tecnologia para est\xEDmulo de col\xE1geno, firmeza e contorno facial ou corporal.",
        Massagem: "Sess\xF5es terap\xEAuticas e modeladoras para relaxamento, circula\xE7\xE3o e bem-estar.",
        "Laser diodo": "Depila\xE7\xE3o progressiva com tecnologia segura para diferentes \xE1reas do corpo.",
        Planos: "Pacotes por regi\xE3o, frequ\xEAncia e objetivo, com acompanhamento da evolu\xE7\xE3o.",
        Manuten\u00E7\u00E3o: "Sess\xF5es planejadas para preservar resultado e conforto ao longo do tempo.",
        Cuidados: "Orienta\xE7\xF5es antes e depois das sess\xF5es para proteger a pele e melhorar resposta.",
        "Day spa": "Experi\xEAncias completas para relaxar, presentear ou celebrar momentos especiais.",
        Vouchers: "Vales-presente personalizados para massagens, rituais e experi\xEAncias de autocuidado.",
        Noivas: "Protocolos para pele, corpo e relaxamento antes do casamento.",
        Preenchedores: "Harmoniza\xE7\xE3o com estudo facial, produto adequado e acompanhamento p\xF3s-procedimento.",
        Fios: "Indica\xE7\xE3o para sustenta\xE7\xE3o e est\xEDmulo de col\xE1geno em casos selecionados.",
        "MD Codes": "Planejamento por pontos estruturais para resultado harm\xF4nico e personalizado."
      },
      imobiliaria: {
        "Alto padr\xE3o": "Casas e apartamentos selecionados com localiza\xE7\xE3o, acabamento e documenta\xE7\xE3o analisados.",
        Casas: "Im\xF3veis residenciais para diferentes momentos de vida, com visita acompanhada e negocia\xE7\xE3o assistida.",
        Apartamentos: "Op\xE7\xF5es em bairros estrat\xE9gicos, com compara\xE7\xE3o de planta, condom\xEDnio e liquidez.",
        Terrenos: "\xC1reas para construir ou investir, com an\xE1lise de zoneamento e potencial de valoriza\xE7\xE3o.",
        Comprar: "Busca orientada por perfil, or\xE7amento, bairro e prioridade de mudan\xE7a.",
        Alugar: "Im\xF3veis atualizados para loca\xE7\xE3o residencial e comercial, com atendimento r\xE1pido.",
        Anunciar: "Avalia\xE7\xE3o do im\xF3vel, fotos, divulga\xE7\xE3o e estrat\xE9gia para captar compradores qualificados.",
        Administra\u00E7\u00E3o: "Gest\xE3o de contratos, repasses, manuten\xE7\xE3o e relacionamento com inquilinos.",
        Plantas: "Compare metragens, su\xEDtes, vagas e diferenciais de cada unidade dispon\xEDvel.",
        Tabela: "Condi\xE7\xF5es comerciais atualizadas com fluxo, entrada, financiamento e negocia\xE7\xE3o.",
        Tour: "Visitas presenciais ou digitais para conhecer o empreendimento com mais contexto.",
        Condi\u00E7\u00F5es: "An\xE1lise de pagamento, prazo de entrega e oportunidades para investidores.",
        Comercial: "Salas, lojas e pontos comerciais para opera\xE7\xE3o, expans\xE3o ou investimento.",
        Garantias: "Orienta\xE7\xE3o sobre cau\xE7\xE3o, seguro fian\xE7a, t\xEDtulo de capitaliza\xE7\xE3o e an\xE1lise cadastral.",
        Ch\u00E1caras: "Propriedades para lazer, moradia ou renda no interior, com aten\xE7\xE3o a acesso e infraestrutura.",
        Fazendas: "\xC1reas produtivas e propriedades rurais com documenta\xE7\xE3o e caracter\xEDsticas operacionais.",
        Glebas: "Terrenos maiores para incorpora\xE7\xE3o, loteamento ou projetos de longo prazo.",
        Documentos: "Verifica\xE7\xE3o de matr\xEDcula, certid\xF5es, zoneamento e viabilidade antes da proposta."
      },
      medicos: {
        Acne: "Diagn\xF3stico e plano de tratamento para acne ativa, manchas, cicatrizes e preven\xE7\xE3o de recorr\xEAncia.",
        Melasma: "Acompanhamento cont\xEDnuo com controle de manchas, prote\xE7\xE3o solar e protocolos combinados.",
        Toxina: "Procedimento m\xE9dico para suavizar linhas de express\xE3o com resultado natural.",
        Cabelos: "Investiga\xE7\xE3o de queda capilar e tratamentos conforme causa, hist\xF3rico e exames.",
        Joelho: "Avalia\xE7\xE3o de dor, les\xF5es esportivas, desgaste, instabilidade e indica\xE7\xE3o de tratamento.",
        Coluna: "Conduta para dor lombar, cervicalgia, h\xE9rnias e limita\xE7\xF5es de movimento.",
        Ombro: "Tratamento para dor, tendinites, les\xF5es do manguito e restri\xE7\xF5es funcionais.",
        Infiltra\u00E7\u00F5es: "Procedimentos indicados para al\xEDvio de dor e inflama\xE7\xE3o em casos selecionados.",
        Ansiedade: "Avalia\xE7\xE3o psiqui\xE1trica, plano terap\xEAutico e acompanhamento regular.",
        Depress\u00E3o: "Diagn\xF3stico, tratamento medicamentoso quando indicado e cuidado longitudinal.",
        TDAH: "Investiga\xE7\xE3o cl\xEDnica, orienta\xE7\xE3o e acompanhamento para adultos e adolescentes.",
        Sono: "Avalia\xE7\xE3o de ins\xF4nia, rotina, ansiedade associada e possibilidades terap\xEAuticas.",
        Rotina: "Consultas preventivas, exames peri\xF3dicos e acompanhamento ginecol\xF3gico individualizado.",
        Gesta\u00E7\u00E3o: "Pr\xE9-natal, orienta\xE7\xE3o, exames e cuidado pr\xF3ximo durante a gravidez.",
        Menopausa: "Acompanhamento de sintomas, sa\xFAde hormonal, preven\xE7\xE3o e qualidade de vida.",
        Exames: "Solicita\xE7\xE3o, interpreta\xE7\xE3o e seguimento de exames conforme idade e hist\xF3rico.",
        Face: "Procedimentos faciais planejados com propor\xE7\xE3o, seguran\xE7a e indica\xE7\xE3o respons\xE1vel.",
        Mama: "Consulta para cirurgias mam\xE1rias com avalia\xE7\xE3o t\xE9cnica, expectativa e recupera\xE7\xE3o.",
        Corpo: "Planejamento cir\xFArgico corporal com foco em contorno, seguran\xE7a e acompanhamento.",
        "P\xF3s-operat\xF3rio": "Seguimento pr\xF3ximo para recupera\xE7\xE3o, orienta\xE7\xF5es e evolu\xE7\xE3o do resultado."
      }
    };
    return copy[slug]?.[item] || "Atendimento especializado, avalia\xE7\xE3o individual e acompanhamento pr\xF3ximo do in\xEDcio ao fim.";
  }
  function proofTitle(slug) {
    return {
      advogado: "Clientes atendidos com discri\xE7\xE3o, estrat\xE9gia e acompanhamento pr\xF3ximo.",
      odonto: "Pacientes que voltaram a sorrir com confian\xE7a.",
      estetica: "Clientes que buscaram naturalidade, cuidado e autoestima.",
      imobiliaria: "Compradores, propriet\xE1rios e investidores atendidos com clareza.",
      medicos: "Pacientes acompanhados com escuta, precis\xE3o e continuidade."
    }[slug] || "Hist\xF3rias reais de atendimento e resultado.";
  }
  function proofText(slug) {
    return {
      advogado: "Relatos preservam sigilo profissional e mostram como o escrit\xF3rio conduz casos complexos com comunica\xE7\xE3o clara.",
      odonto: "Avalia\xE7\xF5es destacam conforto, explica\xE7\xE3o do tratamento e seguran\xE7a durante cada etapa cl\xEDnica.",
      estetica: "Depoimentos mostram evolu\xE7\xE3o gradual, orienta\xE7\xE3o p\xF3s-procedimento e resultados compat\xEDveis com cada perfil.",
      imobiliaria: "Hist\xF3rias de compra, venda e loca\xE7\xE3o conduzidas com documenta\xE7\xE3o organizada e negocia\xE7\xE3o transparente.",
      medicos: "Feedbacks refor\xE7am acolhimento, pontualidade, explica\xE7\xE3o diagn\xF3stica e plano de cuidado individual."
    }[slug] || "Depoimentos selecionados refor\xE7am confian\xE7a e qualidade no atendimento.";
  }
  function bookingTitle(slug) {
    return {
      advogado: "Envie seu caso para uma an\xE1lise inicial.",
      odonto: "Agende sua avalia\xE7\xE3o odontol\xF3gica.",
      estetica: "Agende uma avalia\xE7\xE3o est\xE9tica.",
      imobiliaria: "Receba im\xF3veis compat\xEDveis com seu perfil.",
      medicos: "Agende sua consulta."
    }[slug] || "Entre em contato para agendar.";
  }
  function heroMetric(slug, id) {
    const fallback = {
      advogado: ["+12 anos", "de atua\xE7\xE3o consultiva e contenciosa"],
      odonto: ["+4.800", "pacientes atendidos pela equipe cl\xEDnica"],
      estetica: ["+9.200", "procedimentos realizados com acompanhamento"],
      imobiliaria: ["+320", "im\xF3veis negociados na regi\xE3o"],
      medicos: ["CRM ativo", "atendimento m\xE9dico com registro profissional"]
    };
    const custom = {
      criminal: ["Plant\xE3o", "atendimento para situa\xE7\xF5es urgentes"],
      familia: ["Sigilo", "condu\xE7\xE3o cuidadosa de casos familiares"],
      previdenciario: ["INSS", "planejamento e revis\xE3o de benef\xEDcios"],
      implantes: ["3D", "planejamento digital para reabilita\xE7\xE3o oral"],
      ortodontia: ["Simula\xE7\xE3o", "planejamento em etapas antes de iniciar"],
      kids: ["Infantil", "consult\xF3rio preparado para crian\xE7as"],
      harmonia: ["Fotografia", "planejamento est\xE9tico do sorriso"],
      laser: ["Planos", "sess\xF5es organizadas por \xE1rea e objetivo"],
      spa: ["Rituais", "experi\xEAncias de relaxamento e bem-estar"],
      inject: ["Naturalidade", "procedimentos com avalia\xE7\xE3o facial"],
      broker: ["Curadoria", "im\xF3veis selecionados antes da visita"],
      lancamentos: ["Plantas", "condi\xE7\xF5es e unidades em destaque"],
      locacao: ["Visita r\xE1pida", "agendamento direto com atendimento"],
      rural: ["Documenta\xE7\xE3o", "an\xE1lise de \xE1reas e propriedades"],
      dermato: ["Pele", "dermatologia cl\xEDnica e est\xE9tica integrada"],
      ortopedia: ["Movimento", "tratamento para dor e les\xF5es"],
      psiquiatria: ["Escuta", "cuidado em sa\xFAde mental com m\xE9todo"],
      gineco: ["Preven\xE7\xE3o", "acompanhamento da sa\xFAde feminina"],
      plastica: ["Seguran\xE7a", "planejamento cir\xFArgico individualizado"]
    };
    return custom[id] || fallback[slug] || ["Atendimento", "especializado e pr\xF3ximo"];
  }
  function conversionData(slug, model) {
    const base = {
      advogado: {
        label: "CAMINHO PARA CONSULTA",
        title: "O visitante entende se o escrit\xF3rio resolve o problema dele antes de enviar mensagem.",
        items: [
          ["Situa\xE7\xE3o do cliente", "Entrada por pr\xE1tica e cen\xE1rio: empresa, fam\xEDlia, urg\xEAncia, benef\xEDcio ou contrato."],
          ["Confian\xE7a verific\xE1vel", "Credenciais, \xE1reas de atua\xE7\xE3o, endere\xE7o, atendimento e sigilo aparecem cedo."],
          ["Contato simples", "Telefone e WhatsApp ficam sempre vis\xEDveis, com formul\xE1rio curto para triagem."]
        ]
      },
      odonto: {
        label: "AGENDA + GOOGLE LOCAL",
        title: "O paciente encontra tratamento, confian\xE7a e hor\xE1rio sem precisar ca\xE7ar informa\xE7\xE3o.",
        items: [
          ["Agendamento r\xE1pido", "Bot\xF5es grandes para WhatsApp, avalia\xE7\xE3o e emerg\xEAncia no primeiro scroll."],
          ["Prova cl\xEDnica", "Casos, avalia\xE7\xF5es, conv\xEAnios e estrutura da cl\xEDnica reduzem medo e compara\xE7\xE3o por pre\xE7o."],
          ["Busca por servi\xE7o", "Cada tratamento vira uma porta de entrada para \u201Cdentista perto de mim\u201D."]
        ]
      },
      estetica: {
        label: "DESEJO + SEGURAN\xC7A",
        title: "A p\xE1gina vende percep\xE7\xE3o premium, mas tamb\xE9m responde o que impede a pessoa de marcar.",
        items: [
          ["Resultados reais", "Antes/depois com contexto, n\xFAmero de sess\xF5es, consentimento e foto sem exagero."],
          ["Profissional vis\xEDvel", "Credenciais e t\xE9cnica aparecem junto da promessa est\xE9tica."],
          ["Reserva sem fric\xE7\xE3o", "Formul\xE1rio curto, WhatsApp e chamada por procedimento espec\xEDfico."]
        ]
      },
      imobiliaria: {
        label: "LEAD DE COMPRADOR E PROPRIET\xC1RIO",
        title: "Busca, avalia\xE7\xE3o e visita aparecem como caminhos separados de convers\xE3o.",
        items: [
          ["Filtro \xFAtil", "Tipo, pre\xE7o, bairro e visita reduzem conversa improdutiva."],
          ["Capta\xE7\xE3o de im\xF3veis", "P\xE1gina de avalia\xE7\xE3o transforma propriet\xE1rio em lead de venda."],
          ["Bairros fortes", "P\xE1ginas locais capturam quem pesquisa por regi\xE3o, n\xE3o s\xF3 por im\xF3vel."]
        ]
      },
      medicos: {
        label: "CONFIAN\xC7A M\xC9DICA",
        title: "O paciente precisa reconhecer autoridade, acesso e pr\xF3ximo passo em poucos segundos.",
        items: [
          ["Agenda clara", "Consulta, endere\xE7o, conv\xEAnios e WhatsApp ficam \xE0 vista."],
          ["Conte\xFAdo por condi\xE7\xE3o", "Dor, sintoma ou procedimento recebem explica\xE7\xE3o simples e CTA contextual."],
          ["Credenciais", "CRM, especialidade, forma\xE7\xE3o e abordagem cl\xEDnica sustentam a decis\xE3o."]
        ]
      }
    };
    return base[slug] || base.odonto;
  }
  function questionData(slug, model) {
    const title = {
      advogado: "Perguntas que qualificam o caso antes da consulta.",
      odonto: "Perguntas que o paciente faz antes de marcar.",
      estetica: "Perguntas que reduzem obje\xE7\xE3o antes da avalia\xE7\xE3o.",
      imobiliaria: "Perguntas que aproximam comprador, propriet\xE1rio e corretor.",
      medicos: "Perguntas que deixam o paciente mais seguro para consultar."
    }[slug] || "Perguntas frequentes";
    const items = {
      advogado: [
        ["Quanto tempo leva uma an\xE1lise inicial?", "A equipe faz uma triagem breve para entender urg\xEAncia, documentos e melhor caminho jur\xEDdico."],
        ["O atendimento \xE9 sigiloso?", "Sim. Informa\xE7\xF5es do caso s\xE3o tratadas com confidencialidade desde o primeiro contato."],
        ["Posso enviar documentos pelo WhatsApp?", "Sim, a triagem indica quais documentos ajudam na primeira avalia\xE7\xE3o."]
      ],
      odonto: [
        ["Voc\xEAs atendem emerg\xEAncia?", "Casos de dor, trauma e fratura recebem prioridade de encaixe conforme disponibilidade da agenda."],
        ["Aceitam conv\xEAnio?", "A cl\xEDnica informa planos aceitos e tamb\xE9m op\xE7\xF5es particulares antes do agendamento."],
        ["A avalia\xE7\xE3o tem or\xE7amento?", "Depois do exame cl\xEDnico, o paciente recebe plano de tratamento com etapas e prioridades."]
      ],
      estetica: [
        ["Quando vejo resultado?", "Depende do procedimento. Alguns t\xEAm efeito r\xE1pido; outros evoluem por semanas com est\xEDmulo de col\xE1geno."],
        ["Preciso fazer avalia\xE7\xE3o antes?", "Sim. A indica\xE7\xE3o correta depende de pele, hist\xF3rico, objetivo e expectativa."],
        ["Tem orienta\xE7\xE3o p\xF3s-procedimento?", "Sim. Cada protocolo inclui cuidados, retorno e acompanhamento da evolu\xE7\xE3o."]
      ],
      imobiliaria: [
        ["Os im\xF3veis est\xE3o atualizados?", "A equipe confirma disponibilidade antes da visita e envia op\xE7\xF5es compat\xEDveis com o perfil."],
        ["Posso vender meu im\xF3vel por aqui?", "Sim. A avalia\xE7\xE3o considera localiza\xE7\xE3o, documenta\xE7\xE3o, pre\xE7o e estrat\xE9gia de divulga\xE7\xE3o."],
        ["Voc\xEAs ajudam na negocia\xE7\xE3o?", "Sim. O atendimento acompanha proposta, documenta\xE7\xE3o e pr\xF3ximos passos at\xE9 a conclus\xE3o."]
      ],
      medicos: [
        ["Como funciona a primeira consulta?", "O m\xE9dico avalia hist\xF3rico, queixa principal, exames anteriores e define o plano de cuidado."],
        ["Atende conv\xEAnio?", "A p\xE1gina informa planos selecionados e alternativas particulares para cada agenda."],
        ["Posso marcar pelo WhatsApp?", "Sim. O atendimento confirma hor\xE1rios, endere\xE7o e preparo quando necess\xE1rio."]
      ]
    };
    return { title, items: items[slug] || items.odonto };
  }
  const s = {
    gallery: { minHeight: "100vh", paddingBottom: 80, fontFamily: "'Manrope', sans-serif" },
    galleryNav: { maxWidth: 1280, margin: "0 auto", padding: "28px 28px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 },
    brand: { display: "flex", alignItems: "center", gap: 10, fontWeight: 800, letterSpacing: ".02em" },
    brandDot: { width: 10, height: 10, borderRadius: 999, display: "inline-block" },
    navCta: { padding: "11px 18px", borderRadius: 999, textDecoration: "none", fontSize: 13, fontWeight: 800 },
    galleryHero: { maxWidth: 1280, margin: "0 auto", padding: "72px 28px 46px" },
    eyebrow: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 18 },
    galleryTitle: { fontFamily: "'Instrument Serif', 'Cormorant Garamond', serif", fontSize: "clamp(48px, 8vw, 108px)", lineHeight: 0.96, fontWeight: 400, letterSpacing: "-.02em", maxWidth: 1e3, margin: 0 },
    galleryLede: { maxWidth: 720, fontSize: 18, lineHeight: 1.65, opacity: 0.78, margin: "28px 0" },
    painBox: { border: "1px solid", padding: 18, borderRadius: 12, maxWidth: 760, lineHeight: 1.55, background: "rgba(255,255,255,.18)" },
    statGrid: { display: "grid", gridTemplateColumns: "repeat(4, minmax(120px, 1fr))", gap: 14, maxWidth: 880, marginTop: 30 },
    stat: { borderTop: "1px solid rgba(0,0,0,.18)", paddingTop: 14, display: "flex", flexDirection: "column", gap: 4 },
    modelGrid: { maxWidth: 1280, margin: "0 auto", padding: "0 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 },
    modelCard: { all: "unset", cursor: "pointer", background: "rgba(255,255,255,.74)", color: "#151515", border: "1px solid rgba(0,0,0,.12)", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", minHeight: 500, boxShadow: "0 18px 50px rgba(0,0,0,.08)" },
    modelCover: { minHeight: 260, backgroundSize: "cover", backgroundPosition: "center", position: "relative", display: "flex", alignItems: "flex-end", padding: 18 },
    modelBadge: { position: "absolute", top: 14, left: 14, color: "#fff", width: 38, height: 38, borderRadius: 999, display: "grid", placeItems: "center", fontFamily: "'JetBrains Mono', monospace", fontSize: 11 },
    modelOpen: { color: "#fff", fontWeight: 800 },
    modelBody: { padding: 22, display: "flex", flexDirection: "column", gap: 12, flex: 1 },
    modelTag: { fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 800 },
    modelName: { fontFamily: "'Instrument Serif', serif", fontSize: 34, lineHeight: 1, fontWeight: 400, margin: 0 },
    modelDesc: { margin: 0, lineHeight: 1.55, color: "#666", fontSize: 14, flex: 1 },
    modelFoot: { borderTop: "1px solid #e5e0d8", paddingTop: 14, display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: 13 },
    process: { maxWidth: 1280, margin: "80px auto 0", padding: "0 28px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 },
    processItem: { borderTop: "1px solid rgba(0,0,0,.18)", paddingTop: 18, display: "flex", flexDirection: "column", gap: 10 },
    previewWrap: { minHeight: "100vh", background: "#171717" },
    topbar: { position: "sticky", top: 0, zIndex: 20, display: "flex", alignItems: "center", gap: 12, padding: 10, background: "#1f1f1f", borderBottom: "1px solid #303030", fontFamily: "'Manrope', sans-serif" },
    back: { all: "unset", cursor: "pointer", background: "#2b2b2b", color: "#f4f4f4", padding: "9px 14px", borderRadius: 8, fontSize: 13, fontWeight: 800 },
    url: { flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 12, padding: "9px 12px", borderRadius: 8, background: "#101010", color: "#aaa" },
    dots: { display: "flex", gap: 5 },
    dot: { width: 10, height: 10, borderRadius: 999, display: "block" },
    urlText: { fontFamily: "'JetBrains Mono', monospace", fontSize: 12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 },
    urlModel: { fontSize: 12, color: "#777" },
    topCta: { background: "#25d366", color: "#101010", padding: "9px 14px", borderRadius: 8, textDecoration: "none", fontWeight: 900, fontSize: 13 },
    site: { minHeight: "calc(100vh - 54px)", fontFamily: "'Manrope', sans-serif" },
    siteNav: { display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 28, padding: "22px 46px", borderBottom: "1px solid" },
    siteBrand: { display: "flex", alignItems: "center", gap: 12, fontWeight: 900 },
    siteMark: { width: 38, height: 38, borderRadius: 10, display: "grid", placeItems: "center", color: "#fff", fontSize: 12 },
    siteLinks: { display: "flex", justifyContent: "center", gap: 28, fontSize: 13 },
    siteNavBtn: { padding: "11px 18px", borderRadius: 999, fontWeight: 900 },
    demoHero: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", padding: "78px 46px", maxWidth: 1360, margin: "0 auto" },
    demoHeroText: { maxWidth: 650 },
    demoTitle: { fontFamily: "'Instrument Serif', 'Cormorant Garamond', serif", fontSize: "clamp(48px, 7vw, 98px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: "-.02em", margin: 0 },
    demoSub: { fontSize: 18, lineHeight: 1.65, margin: "26px 0 0", maxWidth: 560 },
    demoActions: { display: "flex", gap: 16, flexWrap: "wrap", marginTop: 34 },
    primaryBtn: { padding: "14px 24px", borderRadius: 999, textDecoration: "none", fontWeight: 900 },
    secondaryBtn: { padding: "13px 22px", borderRadius: 999, border: "1px solid", fontWeight: 800 },
    demoHeroMedia: { position: "relative" },
    demoHeroImg: { width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block", borderRadius: 18 },
    mediaCard: { position: "absolute", left: -24, bottom: 28, border: "1px solid", borderRadius: 14, padding: 18, width: 210, display: "flex", flexDirection: "column", gap: 5, boxShadow: "0 18px 50px rgba(0,0,0,.2)" },
    serviceBand: { borderTop: "1px solid", borderBottom: "1px solid", padding: "34px 46px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 },
    serviceMini: { border: "1px solid", borderRadius: 12, padding: 20 },
    splitFeature: { display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 44, alignItems: "center", padding: "90px 46px", maxWidth: 1280, margin: "0 auto" },
    sectionTitle: { fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px, 4vw, 62px)", lineHeight: 1.05, fontWeight: 400, margin: 0 },
    sectionText: { fontSize: 16, lineHeight: 1.65 },
    beforeAfter: { display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: 18, overflow: "hidden", minHeight: 360 },
    beforeAfterImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
    afterPane: { position: "relative", borderLeft: "4px solid" },
    propertySection: { margin: "90px 46px", padding: 34, border: "1px solid", borderRadius: 18 },
    propertyHead: { display: "flex", justifyContent: "space-between", gap: 24, alignItems: "flex-end", marginBottom: 28 },
    filters: { display: "flex", flexWrap: "wrap", gap: 10 },
    filterBtn: { border: "1px solid", padding: "9px 13px", borderRadius: 999, cursor: "pointer" },
    propertyGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
    propertyCard: { border: "1px solid", borderRadius: 12, padding: 20, display: "flex", flexDirection: "column", gap: 8 },
    plans: { padding: "90px 46px", display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 36, alignItems: "center", maxWidth: 1280, margin: "0 auto" },
    planList: { display: "flex", gap: 12, flexWrap: "wrap" },
    planChip: { padding: "12px 16px", border: "1px solid", borderRadius: 999, fontWeight: 800 },
    videoProof: { margin: "40px 46px 90px", padding: 34, border: "1px solid", borderRadius: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "center" },
    videoBox: { aspectRatio: "16 / 9", borderRadius: 18, display: "grid", placeItems: "center" },
    play: { width: 66, height: 66, borderRadius: 999, display: "grid", placeItems: "center" },
    booking: { padding: "90px 46px", display: "grid", gridTemplateColumns: "1fr 420px", gap: 40, alignItems: "center", maxWidth: 1280, margin: "0 auto" },
    bookingTitle: { fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px, 6vw, 82px)", lineHeight: 1, fontWeight: 400, margin: 0 },
    formCard: { border: "1px solid", borderRadius: 18, padding: 22, display: "flex", flexDirection: "column", gap: 12 },
    input: { background: "transparent", border: "1px solid", borderRadius: 10, padding: "14px 13px", font: "inherit" },
    submit: { border: 0, borderRadius: 10, padding: "15px 16px", fontWeight: 900, cursor: "pointer" },
    demoFooter: { borderTop: "1px solid", padding: "28px 46px", display: "flex", justifyContent: "space-between", gap: 16 },
    floatWa: { position: "fixed", right: 22, bottom: 22, zIndex: 30, background: "#25d366", color: "#101010", textDecoration: "none", padding: "14px 20px", borderRadius: 999, fontWeight: 900, boxShadow: "0 16px 40px rgba(0,0,0,.25)", fontFamily: "'Manrope', sans-serif" }
  };
  const style = document.createElement("style");
  style.textContent = `
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
  a, button { -webkit-tap-highlight-color: transparent; }
  button[data-niche-card]:hover { transform: translateY(-4px); }
  button[data-niche-card] { transition: transform .25s ease; }
  @media (max-width: 860px) {
    nav { grid-template-columns: 1fr !important; }
    nav ul, nav > div:nth-child(2) { justify-content: flex-start !important; flex-wrap: wrap !important; }
    section { grid-template-columns: 1fr !important; }
    main > section, .preview-frame section { padding-left: 20px !important; padding-right: 20px !important; }
    [style*="repeat(4"], [style*="repeat(3"], [style*="repeat(2"] { grid-template-columns: 1fr !important; }
    [style*="420px"] { grid-template-columns: 1fr !important; }
    [style*="position: absolute"] { position: relative !important; left: auto !important; bottom: auto !important; margin-top: 14px !important; }
  }
`;
  document.head.appendChild(style);
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
  setTimeout(() => document.querySelectorAll("button").forEach((btn) => {
    if (btn.textContent.includes("Abrir demo")) btn.setAttribute("data-niche-card", "1");
  }), 50);
})();

import { getTranslations } from 'next-intl/server'

const content = {
  ko: {
    heroBadge: '회사 소개',
    heroTitle: '사람과 문화,\n기업과 시장을 연결합니다',
    heroSub: '경청INC는 한국과 몽골을 시작으로 중앙아시아와 유럽을 연결하는 글로벌 비즈니스·문화 플랫폼입니다.',

    storyTitle: '경청 및 K-Bridge 사업 소개',
    storyP1: '㈜동양종합건설, ㈜유금종합건설, ㈜굿모닝종합건설, ㈜현명종합건설은 서울주택도시공사(SH)와 한국토지주택공사(LH) 등 공공주택 사업에 참여하며 청년과 신혼부부를 위한 주거공간을 시공·공급해 온 건설기업입니다.',
    storyP2: '이러한 공공주택 사업의 경험과 사회적 가치에 대한 관심을 바탕으로, 국내에 거주하는 몽골 청년들이 서로 교류하고 성장할 수 있는 새로운 커뮤니티와 플랫폼을 구축하고자 ㈜경청INC를 공동 출자하여, 한·몽골 청년 커뮤니티 K-Bridge를 지원하고 있습니다.',
    storyP3: 'K-Bridge는 단순한 친목 커뮤니티를 넘어, 몽골 청년들이 한국 사회와 기업을 이해하고 자신의 역량을 발전시킬 수 있도록 교육, 문화교류, 자기계발, 창업 및 비즈니스 활동의 기회를 연결하는 것을 목표로 합니다.',

    visionTitle: '새로운 신(新)실크로드를 향하여',
    visionText: 'K-Bridge가 지향하는 궁극적인 목표는 한국과 몽골을 잇는 데 그치지 않습니다. 한국 → 몽골 → 중앙아시아 → 유럽으로 이어지는 네트워크를 구축하여 새로운 경제·문화적 교류의 길을 만들어가는 것입니다.',
    visionSteps: ['🇰🇷 한국 (Korea)', '🇲🇳 몽골 (Mongolia)', '🌏 중앙아시아 (Central Asia)', '🌍 유럽 (Europe)'],

    valuesTitle: '우리의 가치',
    values: [
      { icon: '🌐', title: '글로벌 연결', desc: '사람과 문화, 기업과 시장을 연결하는 글로벌 플랫폼' },
      { icon: '🎓', title: '청년 성장', desc: '교육, 문화교류, 창업 기회를 통한 청년 역량 강화' },
      { icon: '🤝', title: '상호 협력', desc: '한국과 몽골, 중앙아시아를 잇는 양방향 협력 네트워크' },
      { icon: '🕊️', title: '사회적 가치', desc: '공익적 가치와 지속 가능한 비즈니스의 조화' },
    ],

    ceoTitle: '대표 인사말',
    ceoName: '대표이사',
    ceoCareer: '현 ㈜굿모닝종합건설 대표 · ㈜동양종합건설 임원 · ㈜유금종합건설 임원 · ㈜현명종합건설 임원',
    ceoEdu: '고려대학교 최고위과정 졸업',
    ceoGreeting: '청년의 꿈을 연결하고, 새로운 길을 열겠습니다.',
    ceoParagraphs: [
      '경청INC를 찾아주신 여러분께 진심으로 감사드립니다. 저희는 지난 십수 년간 서울주택도시공사(SH)와 한국토지주택공사(LH) 등의 공공주택 사업에 참여하며 청년과 신혼부부를 위한 주택을 비롯한 공익적 시설물을 시공·납품해 왔습니다.',
      '공공의 주거복지를 위한 현장에서 청년세대의 삶과 미래를 가까이에서 바라보면서, 우리 사회의 미래는 결국 청년들에게 달려 있으며, 청년들이 꿈을 펼칠 수 있는 환경을 만들어주는 것이 중요하다는 생각을 갖게 되었습니다.',
      '경청은 단순한 청년 커뮤니티를 넘어 인플루언서와 디지털 콘텐츠, 온라인 이커머스, 교육과 교류, 창업과 비즈니스를 연결하는 새로운 플랫폼을 만들어가고자 합니다.',
      '새로운 신(新)실크로드를 꿈꿉니다. 과거 실크로드가 사람과 물자, 문화와 문명을 연결하는 길이었다면, 오늘 우리가 만들어갈 신(新)실크로드는 사람과 사람, 문화와 문화, 기업과 기업, 그리고 시장과 시장을 연결하는 새로운 길이라고 생각합니다.',
      '경청INC가 그 연결의 중심에서 새로운 기회를 만들어가겠습니다. 여러분의 관심과 동행을 부탁드립니다.',
    ],

    businessTitle: '주요 사업',
    businesses: [
      { icon: '🏥', title: '한국 의료관광', desc: '몽골 환자를 위한 한국 의료기관 연결, 코디네이터, 통역 서비스' },
      { icon: '🏨', title: '숙박·생활 지원', desc: '한국 체류 중 편안한 숙소 및 생활 지원 서비스' },
      { icon: '📚', title: '교육·문화교류', desc: '한국어 교육, K-Culture 체험, 청년 교류 프로그램' },
      { icon: '🛒', title: '온라인 이커머스', desc: '한국 우수 상품의 몽골·중앙아시아 시장 유통' },
      { icon: '🚀', title: '창업·비즈니스', desc: '한·몽 청년 창업 지원 및 비즈니스 네트워크 구축' },
      { icon: '🎬', title: '디지털 콘텐츠', desc: '인플루언서 마케팅, K-콘텐츠 글로벌 확산' },
    ],
  },

  mn: {
    heroBadge: 'Компанийн тухай',
    heroTitle: 'Хүн ба соёл,\nбизнес ба зах зээлийг холбоно',
    heroSub: 'Гёнчхон INC нь Солонгос, Монголоос эхлэн Төв Ази, Европыг холбох глобал бизнес ба соёлын платформ юм.',

    storyTitle: 'Гёнчхон ба K-Bridge-ийн тухай',
    storyP1: 'Дунъян, Югым, Гудморнинг, Хёнмён зэрэг барилгын компаниуд Сөүлийн орон сууцны хөгжлийн корпораци (SH) болон Солонгосын газар, орон сууцны корпораци (LH)-тай хамтран залуус, шинэ гэрлэгчдэд зориулсан нийтийн орон сууцны төслүүдийг хэрэгжүүлж ирсэн.',
    storyP2: 'Нийтийн орон сууцны туршлага, нийгмийн үнэт зүйлд хандах анхаарлын үндсэн дээр Солонгост оршин суудаг Монгол залуусын харилцаа, хөгжлийг дэмжих шинэ нийгэмлэг байгуулах зорилгоор ㈜Гёнчхон INC-г байгуулж, K-Bridge-г дэмжиж байна.',
    storyP3: 'K-Bridge нь энгийн найрамдлын нийгэмлэгийг давсан, Монгол залуус Солонгосын нийгэм, бизнесийг ойлгож, өөрсдийн чадавхийг хөгжүүлэхэд боловсрол, соёлын солилцоо, бизнес, стартап эрхлэх боломжийг холбох зорилготой.',

    visionTitle: 'Шинэ Торгоны замыг чиглэн',
    visionText: 'K-Bridge-ийн эрхэмлэх зорилго нь Солонгос, Монголыг холбоход зогсохгүй. Солонгос → Монгол → Төв Ази → Европ гэсэн сүлжээ байгуулж, шинэ эдийн засаг, соёлын харилцааны замыг нээхийг зорьж байна.',
    visionSteps: ['🇰🇷 Солонгос', '🇲🇳 Монгол', '🌏 Төв Ази', '🌍 Европ'],

    valuesTitle: 'Манай үнэт зүйлс',
    values: [
      { icon: '🌐', title: 'Глобал холболт', desc: 'Хүн ба соёл, бизнес ба зах зээлийг холбох глобал платформ' },
      { icon: '🎓', title: 'Залуусын өсөлт', desc: 'Боловсрол, соёлын солилцоо, бизнесийн боломжоор залуусыг хөгжүүлэх' },
      { icon: '🤝', title: 'Харилцан хамтын ажиллагаа', desc: 'Солонгос, Монгол, Төв Азийг холбох хоёр талын хамтын ажиллагааны сүлжээ' },
      { icon: '🕊️', title: 'Нийгмийн үнэт зүйл', desc: 'Нийтийн ашиг тус ба тогтвортой бизнесийн зохицол' },
    ],

    ceoTitle: 'Гүйцэтгэх захирлын мэндчилгээ',
    ceoName: 'Гүйцэтгэх захирал',
    ceoCareer: 'Гудморнинг Жонхап Гонсол-ийн захирал · Дунъян Жонхап Гонсол-ийн удирдах зөвлөлийн гишүүн · Югым болон Хёнмён компаниудын удирдах зөвлөлийн гишүүн',
    ceoEdu: 'Корё их сургуулийн ахлах курс төгсөгч',
    ceoGreeting: 'Залуусын мөрөөдлийг холбож, шинэ зам нээнэ.',
    ceoParagraphs: [
      'Гёнчхон INC-д сонирхол тавьсан та бүхэнд чин сэтгэлийн талархал илэрхийлье. Бид арав гаруй жилийн хугацаанд SH болон LH-тай хамтран залуус, шинэ гэрлэгчдэд зориулсан нийтийн орон сууц болон нийгмийн ач холбогдол бүхий байгууламжийг барьж ирсэн.',
      'Нийтийн орон сууцны барилгын талбайд залуу үеийн амьдрал, ирээдүйг ойроос харж, нийгмийн ирээдүй нь эцсийн дүндээ залуусаас шалтгаална, залуус мөрөөдлөө биелүүлэх орчинг бүрдүүлэх нь чухал гэдгийг ухааран Гёнчхон INC-г байгуулсан юм.',
      'Гёнчхон нь энгийн залуусын нийгэмлэгийг давсан, инфлуэнсер ба дижитал контент, онлайн э-коммерс, боловсрол ба солилцоо, стартап ба бизнесийг холбох шинэ платформ болохыг зорьж байна.',
      'Шинэ Торгоны замыг мөрөөддөг. Өмнөх Торгоны зам хүн, барааг холбосон зам байсан бол бидний бүтээх Шинэ Торгоны зам нь хүн ба хүн, соёл ба соёл, бизнес ба бизнес, зах зээл ба зах зээлийг холбох шинэ зам юм.',
      'Гёнчхон INC тэр холболтын төвд шинэ боломж бүтээх болно. Таны сонирхол, хамтын ажиллагааг хүсэн хүлээж байна.',
    ],

    businessTitle: 'Үндсэн үйл ажиллагаа',
    businesses: [
      { icon: '🏥', title: 'Солонгосын эрүүл мэндийн аялал', desc: 'Монгол өвчтөнд Солонгосын эмнэлэгтэй холбох, координатор, орчуулга үйлчилгээ' },
      { icon: '🏨', title: 'Байр, амьдралын дэмжлэг', desc: 'Солонгост байх хугацаанд тохилог байр, амьдралын дэмжлэгийн үйлчилгээ' },
      { icon: '📚', title: 'Боловсрол, соёлын солилцоо', desc: 'Солонгос хэлний сургалт, K-Culture, залуусын солилцооны хөтөлбөр' },
      { icon: '🛒', title: 'Онлайн э-коммерс', desc: 'Солонгосын шилдэг бүтээгдэхүүнийг Монгол, Төв Азийн зах зээлд нийлүүлэх' },
      { icon: '🚀', title: 'Стартап, бизнес', desc: 'Солонгос-Монгол залуусын стартап дэмжлэг ба бизнесийн сүлжээ байгуулах' },
      { icon: '🎬', title: 'Дижитал контент', desc: 'Инфлуэнсер маркетинг, K-контентийг дэлхийн зах зээлд сурталчлах' },
    ],
  },

  en: {
    heroBadge: 'About Us',
    heroTitle: 'Connecting People,\nCulture & Markets',
    heroSub: 'Gyeongcheong INC is a global business and cultural platform bridging Korea and Mongolia toward Central Asia and Europe.',

    storyTitle: 'About Gyeongcheong & K-Bridge',
    storyP1: 'Dongyang, Yugeum, Good Morning, and Hyunmyung General Construction companies have participated in public housing projects with the Seoul Housing & Communities Corporation (SH) and Korea Land & Housing Corporation (LH), constructing housing for youth and newlyweds.',
    storyP2: 'Building on public housing experience and a commitment to social value, these companies jointly established Gyeongcheong INC to create a community where Mongolian youth living in Korea can connect and grow — supporting the Korea-Mongolia Youth Community, K-Bridge.',
    storyP3: "K-Bridge goes beyond a simple social community. Its goal is to connect Mongolian youth with opportunities in education, cultural exchange, self-development, entrepreneurship, and business — helping them understand Korean society and develop their capabilities.",

    visionTitle: 'Toward a New Silk Road',
    visionText: "K-Bridge's ultimate goal goes beyond connecting Korea and Mongolia. We aim to build a network spanning Korea → Mongolia → Central Asia → Europe, creating a new path for economic and cultural exchange.",
    visionSteps: ['🇰🇷 Korea', '🇲🇳 Mongolia', '🌏 Central Asia', '🌍 Europe'],

    valuesTitle: 'Our Values',
    values: [
      { icon: '🌐', title: 'Global Connection', desc: 'A global platform connecting people, culture, businesses and markets' },
      { icon: '🎓', title: 'Youth Empowerment', desc: 'Strengthening youth through education, cultural exchange and entrepreneurship' },
      { icon: '🤝', title: 'Mutual Cooperation', desc: 'A two-way cooperation network connecting Korea, Mongolia and Central Asia' },
      { icon: '🕊️', title: 'Social Value', desc: 'Harmonizing public benefit with sustainable business growth' },
    ],

    ceoTitle: "CEO's Message",
    ceoName: 'Chief Executive Officer',
    ceoCareer: 'CEO, Good Morning General Construction · Executive, Dongyang General Construction · Executive, Yugeum General Construction · Executive, Hyunmyung General Construction',
    ceoEdu: 'Advanced Executive Program, Korea University',
    ceoGreeting: "We will connect young people's dreams and open new paths.",
    ceoParagraphs: [
      'Thank you sincerely for your interest in Gyeongcheong INC. For over a decade, we have participated in public housing projects with SH and LH, constructing housing and public facilities for youth and newlyweds.',
      'Working on public housing construction sites and witnessing the lives and futures of the younger generation up close, we became convinced that the future of our society ultimately rests with young people — and that creating environments where they can pursue their dreams is essential.',
      'Gyeongcheong aims to be more than a youth community. We are building a new platform that connects influencers, digital content, online e-commerce, education, cultural exchange, entrepreneurship, and business.',
      'We dream of a New Silk Road. If the ancient Silk Road connected people, goods, culture, and civilization, the New Silk Road we will build connects people with people, culture with culture, business with business, and market with market.',
      'Gyeongcheong INC will create new opportunities at the heart of those connections. We look forward to your interest and partnership.',
    ],

    businessTitle: 'Our Services',
    businesses: [
      { icon: '🏥', title: 'Korean Medical Tourism', desc: 'Connecting Mongolian patients with Korean hospitals — coordinators, translation, full support' },
      { icon: '🏨', title: 'Accommodation & Living Support', desc: 'Comfortable accommodation and living support during your stay in Korea' },
      { icon: '📚', title: 'Education & Cultural Exchange', desc: 'Korean language education, K-Culture experiences, and youth exchange programs' },
      { icon: '🛒', title: 'Online E-commerce', desc: 'Distributing quality Korean products to Mongolian and Central Asian markets' },
      { icon: '🚀', title: 'Startup & Business', desc: 'Supporting Korea-Mongolia youth startups and building business networks' },
      { icon: '🎬', title: 'Digital Content', desc: 'Influencer marketing and global spread of K-content' },
    ],
  },
}

export default async function AboutPage({ params }) {
  const { locale } = await params
  const lang = content[locale] ?? content.en

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative bg-black overflow-hidden" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-950" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-28 flex flex-col justify-center" style={{ minHeight: '60vh' }}>
          <div className="flex items-center gap-4 mb-10">
            <img src="/logo-main.png" alt="경청" className="w-12 h-12 object-contain brightness-0 invert opacity-70" />
            <div className="h-px w-10 bg-[#8B7355]/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4A882]">{lang.heroBadge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight whitespace-pre-line mb-6 tracking-tight">{lang.heroTitle}</h1>
          <div className="h-px w-16 bg-[#8B7355] mb-6" />
          <p className="text-lg text-white/55 max-w-xl leading-relaxed font-light">{lang.heroSub}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B7355] mb-4 block">Our Story</span>
              <h2 className="text-3xl font-black text-slate-900 mb-8 leading-tight">{lang.storyTitle}</h2>
              <div className="space-y-5 text-slate-600 text-sm leading-relaxed">
                <p>{lang.storyP1}</p>
                <p>{lang.storyP2}</p>
                <p>{lang.storyP3}</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B7355] mb-4 block">Vision</span>
              <h3 className="text-xl font-black text-slate-900 mb-4">{lang.visionTitle}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">{lang.visionText}</p>
              <div className="flex flex-col gap-3">
                {lang.visionSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8B7355]/15 flex items-center justify-center text-[10px] font-black text-[#8B7355]">{i + 1}</div>
                    <span className="text-sm font-semibold text-slate-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B7355] mb-3 block">Values</span>
            <h2 className="text-3xl font-black text-slate-900">{lang.valuesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lang.values.map((v) => (
              <div key={v.title} className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{v.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B7355] mb-4 block">Message</span>
              <div className="bg-slate-900 rounded-3xl p-8 text-center sticky top-24">
                <img src="/logo-main.png" alt="경청" className="w-16 h-16 object-contain brightness-0 invert opacity-60 mx-auto mb-4" />
                <div className="text-white font-black text-lg mb-1">경청INC</div>
                <div className="text-white/40 text-xs mb-4">{lang.ceoName}</div>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-white/35 text-[10px] leading-relaxed">{lang.ceoCareer}</p>
                <p className="text-[#C4A882] text-[10px] mt-3">{lang.ceoEdu}</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-3">{lang.ceoTitle}</h2>
              <p className="text-[#8B7355] font-semibold text-base mb-8 italic">"{lang.ceoGreeting}"</p>
              <div className="space-y-5 text-slate-600 text-sm leading-loose">
                {lang.ceoParagraphs.map((p, i) => (
                  <p key={i} className={i === lang.ceoParagraphs.length - 1 ? 'font-medium text-slate-800' : ''}>{p}</p>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="text-xs text-slate-400 uppercase tracking-widest">주식회사 경청INC</div>
                <div className="font-black text-slate-900 text-lg mt-1">대표이사</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Businesses */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C4A882] mb-3 block">Services</span>
            <h2 className="text-3xl font-black text-white">{lang.businessTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {lang.businesses.map((b, i) => (
              <div key={i} className="border border-white/8 rounded-2xl p-6 hover:border-[#8B7355]/50 transition-colors">
                <div className="text-2xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2">{b.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

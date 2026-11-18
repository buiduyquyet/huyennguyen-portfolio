import type { Payload } from 'payload'

/**
 * Seed nội dung mặc định (lấy từ file HTML gốc) vào CMS ở lần chạy đầu tiên.
 * Chỉ chạy khi global "home" chưa có dữ liệu — không ghi đè nội dung đã chỉnh sửa.
 */

const L = (labels: string[]) => labels.map((label) => ({ label }))
const PH = (t: string) => `{{[Cập nhật: ${t}]}}`

export const homeSeed = {
  hero: {
    eyebrow: 'Huyen Nguyen / Independent Marketing Consultant',
    line1: 'Your Brand.',
    line2: 'My Strategic Mind.',
    line3: 'Our Next Big Move.',
    subtitle:
      'Marketing strategy, creative thinking and end-to-end execution for ambitious brands. Đồng hành cùng doanh nghiệp từ bài toán Marketing đến kế hoạch hành động và triển khai trọn gói.',
    primaryCtaLabel: "Let's Talk Business",
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'Explore My Work',
    secondaryCtaHref: '#work',
    meta: [
      { pulseDot: true, text: '**Đang nhận dự án mới**' },
      { pulseDot: false, text: '📍 **Hà Nội** · Hợp tác từ xa toàn quốc' },
      { pulseDot: false, text: '⚡ **5+ năm** Marketing & Communications' },
    ],
    marquee: L([
      'Marketing Strategy',
      'Content Strategy',
      'Brand Communications',
      'Social Media',
      'Campaign & Event',
      'Project Management',
    ]),
  },
  stats: {
    items: [
      { value: 5, label: 'Năm kinh nghiệm Marketing & Communications' },
      { value: 10, label: 'Thương hiệu & khách hàng hợp tác' },
      { value: 20, label: 'Sự kiện từng tham gia triển khai' },
      { value: 10, label: 'Nhân sự trong đội ngũ từng điều phối' },
    ],
  },
  about: {
    photoUrl:
      'https://cdn.shopify.com/s/files/1/0734/4986/5316/files/650234546_17990547341936687_8159229575010710636_n.jpg?v=1795017244',
    photoAlt: 'Huyen Nguyen',
    tag: 'Strategist · Creative Thinker',
    eyebrow: '02 — About Me',
    heading: "Hi, I'm Huyen!",
    role: 'MARKETING CONSULTANT | STRATEGIST | CREATIVE THINKER',
    paragraphs: [
      {
        text: 'Mình là **Nguyễn Thị Huyền**, có hơn 5 năm kinh nghiệm trong lĩnh vực Marketing & Communications, trực tiếp xây dựng, vận hành đội ngũ cung cấp dịch vụ truyền thông.',
      },
      {
        text: 'Trong hành trình làm nghề, mình đã có cơ hội đồng hành với nhiều thương hiệu ở các lĩnh vực khác nhau, từ phát triển chiến lược, xây dựng nội dung, truyền thông thương hiệu đến quản lý và triển khai các dự án Marketing.',
      },
      {
        text: 'Mình tin rằng một kế hoạch Marketing hiệu quả cần kết nối giữa mục tiêu kinh doanh, định hướng thương hiệu và hoạt động Marketing thực tế. Ý tưởng tốt là vô cùng quan trọng, nhưng chiến lược phù hợp, nguồn lực khả thi và khả năng triển khai nhất quán sẽ mang tới kết quả bền vững.',
      },
      {
        text: 'Hiện tại, mình phát triển hoạt động tư vấn và triển khai Marketing độc lập, cung cấp các giải pháp linh hoạt từ tư vấn chuyên môn, xây dựng chiến lược đến tổ chức thực thi trọn gói theo nhu cầu của từng doanh nghiệp.',
      },
    ],
    quote:
      '“Từ một bài toán chưa có lời giải đến một kế hoạch có thể thực hiện — đó là giá trị mình mong muốn mang lại.”',
    motto: [
      { text: '**Think** Strategically' },
      { text: '**Create** Meaningfully' },
      { text: '**Execute** Effectively' },
    ],
  },
  why: {
    eyebrow: 'Why Work With Me',
    title: 'Một đầu mối.\nTrọn bài toán.',
    subtitle:
      'Không chỉ là người làm content hay chạy quảng cáo, mình là đầu mối chiến lược và quản lý triển khai cho doanh nghiệp.',
    items: [
      {
        title: 'Strategic Thinking',
        subtitle: 'Tư duy chiến lược',
        description:
          'Không bắt đầu từ việc cần đăng bao nhiêu bài hay chạy bao nhiêu quảng cáo, mà từ mục tiêu, vấn đề, khách hàng và hướng giải quyết.',
      },
      {
        title: 'Creative-driven',
        subtitle: 'Sáng tạo có định hướng',
        description:
          'Nền tảng Content Strategy, storytelling và truyền thông thương hiệu; ý tưởng luôn gắn với insight và mục tiêu Marketing.',
      },
      {
        title: 'Execution & Project Management',
        subtitle: 'Quản lý thực thi',
        description:
          'Điều phối Content, Design, Media, đối tác, tiến độ, ngân sách và chất lượng — một đầu mối xuyên suốt dự án.',
      },
      {
        title: 'Flexible Partnership',
        subtitle: 'Hợp tác linh hoạt',
        description:
          'Tham gia với vai trò chuyên gia tư vấn, người lập kế hoạch, quản lý dự án hoặc đầu mối triển khai trọn gói tùy nhu cầu.',
      },
    ],
  },
  services: {
    eyebrow: '03 — What I Can Do',
    title: 'Services built\nfor [[real growth.]]',
    subtitle:
      '6 nhóm giải pháp linh hoạt — từ tư vấn chiến lược đến triển khai và quản lý Marketing tổng thể.',
    items: [
      {
        title: 'Marketing Strategy & Consulting',
        description:
          'Tư vấn chiến lược Marketing tổng thể, phân tích khách hàng và thị trường, xác định mục tiêu, định vị thương hiệu, chiến lược truyền thông và kế hoạch Marketing theo giai đoạn.',
        deliverablesLabel: 'Deliverables',
        tags: L(['Audit', 'Strategy', 'Marketing Plan', 'Roadmap', 'Action Plan']),
      },
      {
        title: 'Branding & Brand Communications',
        description:
          'Tư vấn định vị, câu chuyện thương hiệu, thông điệp, brand voice, concept truyền thông, định hướng nhận diện và kế hoạch ra mắt hoặc tái định vị thương hiệu.',
        deliverablesLabel: 'Deliverables',
        tags: L(['Brand Positioning', 'Brand Story', 'Messaging', 'Communication Plan']),
      },
      {
        title: 'Content & Social Media Marketing',
        description:
          'Xây dựng chiến lược nội dung, phát triển kênh TikTok, Facebook và các nền tảng phù hợp; content plan, kịch bản, sản xuất hình ảnh/video và quản lý nội dung định kỳ.',
        deliverablesLabel: 'Deliverables',
        tags: L([
          'Content Strategy',
          'Content Calendar',
          'Social Media Management',
          'Content Production',
        ]),
      },
      {
        title: 'Digital Marketing & Performance Coordination',
        description:
          'Lên kế hoạch kênh, phối hợp triển khai Meta Ads, Google Ads, TikTok Ads, KOC/KOL, Affiliate và các hoạt động chuyển đổi cùng đối tác chuyên môn.',
        deliverablesLabel: 'Deliverables',
        tags: L(['Channel Plan', 'Media Plan', 'Campaign Coordination', 'Performance Reporting']),
      },
      {
        title: 'Campaign & Event Marketing',
        description:
          'Ý tưởng chiến dịch, IMC Plan, launch campaign, event concept, activation, truyền thông trước – trong – sau sự kiện và điều phối sản xuất, vận hành.',
        deliverablesLabel: 'Deliverables',
        tags: L(['Campaign Concept', 'IMC Plan', 'Event Plan', 'Execution Management']),
      },
      {
        title: 'Outsourced Marketing & Project Management',
        description:
          'Đầu mối Marketing thuê ngoài: đánh giá nhu cầu, lập kế hoạch, phân bổ nguồn lực, quản lý đội ngũ/đối tác, giám sát tiến độ và tổng hợp báo cáo.',
        deliverablesLabel: 'Deliverables',
        tags: L(['Marketing Ops Plan', 'Project Timeline', 'Deliverables', 'Reports']),
      },
    ],
    note: 'Các hạng mục chuyên sâu như Performance Ads, thiết kế nhận diện hay sản xuất media quy mô lớn được tổ chức triển khai cùng đội ngũ và đối tác chuyên môn phù hợp — mình chịu trách nhiệm điều phối và đảm bảo chất lượng đầu ra.',
  },
  ways: {
    eyebrow: '04 — Ways to Work Together',
    title: 'Chọn cách\nhợp tác phù hợp.',
    items: [
      {
        badge: 'Theo buổi / vấn đề',
        featured: false,
        title: 'Marketing Consultation',
        description:
          'Tư vấn theo buổi hoặc theo vấn đề cụ thể. Phù hợp với doanh nghiệp đã có đội ngũ nhưng cần góc nhìn chiến lược hoặc định hướng giải quyết vấn đề.',
        ctaLabel: 'Book a Consultation →',
      },
      {
        badge: 'Theo dự án',
        featured: false,
        title: 'Strategy & Planning Project',
        description:
          'Xây dựng chiến lược, kế hoạch Marketing, truyền thông, nội dung hoặc chiến dịch theo phạm vi đầu bài và deliverables xác định.',
        ctaLabel: 'Get a Proposal →',
      },
      {
        badge: '★ Trọn gói',
        featured: true,
        title: 'End-to-end Marketing Execution',
        description:
          'Từ tư vấn, lập kế hoạch đến triển khai, sản xuất, điều phối đội ngũ, đối tác và báo cáo. Phù hợp khi muốn thuê trọn gói theo dự án hoặc chiến dịch.',
        ctaLabel: 'Discuss Your Project →',
      },
      {
        badge: 'Theo tháng / giai đoạn',
        featured: false,
        title: 'Fractional / Outsourced Marketing Partner',
        description:
          'Đồng hành như một bộ phận Marketing thuê ngoài, chịu trách nhiệm xây dựng kế hoạch và điều phối hoạt động theo mục tiêu đã thống nhất.',
        ctaLabel: "Let's Talk →",
      },
    ],
  },
  works: {
    eyebrow: '05 — Selected Works',
    title: 'Bài toán thật.\n[[Giải pháp thật.]]',
    subtitle: 'Một số dự án tiêu biểu. Nhấn vào từng dự án để xem case study.',
    footnote: '* Thông tin dự án được công bố trong phạm vi cho phép của khách hàng.',
    modalCtaLabel: 'Discuss a Similar Project',
  },
  brands: {
    eyebrow: "06 — Brands I've Worked With",
    title: 'Thương hiệu từng đồng hành',
    items: [
      { name: 'FPT Shop' },
      { name: 'Green SM' },
      { name: 'Lavi Wine Bar' },
      { name: 'HFL Media' },
      { name: 'Stier Steakhouse' },
      { name: 'Kaffir Thai S26' },
    ],
    industriesEyebrow: 'Industries',
    industries: [
      {
        title: 'Technology & Electronics',
        description: 'Nội dung sản phẩm công nghệ, short-form video, phát triển kênh.',
      },
      {
        title: 'Food & Beverage',
        description: 'Định vị, ra mắt thương hiệu, truyền thông nhà hàng & bar.',
      },
      {
        title: 'Corporate & Employer Branding',
        description: 'Truyền thông nội bộ, gắn kết nhân sự và tuyển dụng.',
      },
      {
        title: 'Healthcare & Services',
        description: 'Truyền thông dịch vụ, xây dựng niềm tin thương hiệu.',
      },
      {
        title: 'Retail & Consumer Brands',
        description: 'Nội dung sản phẩm, social media, tiếp cận người tiêu dùng.',
      },
      {
        title: 'SMEs & Local Businesses',
        description: 'Xây dựng thương hiệu và Marketing theo nguồn lực thực tế.',
      },
    ],
  },
  process: {
    eyebrow: '07 — How I Work',
    title: 'Quy trình\n[[rõ ràng.]]',
    subtitle: '5 bước giúp mọi dự án có định hướng, kiểm soát được và đo lường được.',
    steps: [
      {
        title: 'Discovery & Briefing',
        description:
          'Tiếp nhận nhu cầu, tìm hiểu thương hiệu, mục tiêu kinh doanh, khách hàng và nguồn lực hiện tại.',
      },
      {
        title: 'Analysis & Strategy',
        description:
          'Phân tích bài toán, xác định ưu tiên, đề xuất định hướng Marketing và các nhóm giải pháp.',
      },
      {
        title: 'Planning & Proposal',
        description:
          'Xây dựng kế hoạch, phạm vi công việc, timeline, ngân sách, KPI và nguồn lực cần thiết.',
      },
      {
        title: 'Execution & Management',
        description:
          'Tổ chức triển khai, phân công và điều phối đội ngũ/đối tác, kiểm soát tiến độ và chất lượng.',
      },
      {
        title: 'Reporting & Optimization',
        description: 'Theo dõi kết quả, báo cáo, phân tích hiệu quả và đề xuất tối ưu.',
      },
    ],
    ctaLabel: 'Get a Proposal',
    ctaHref: '#contact',
  },
  insights: {
    eyebrow: '08 — Insights / Journal',
    title: 'Góc nhìn\nMarketing.',
    items: [
      {
        category: 'Strategy',
        title: 'Doanh nghiệp nhỏ nên bắt đầu Marketing từ đâu khi nguồn lực có hạn?',
        linkLabel: 'Coming soon →',
      },
      {
        category: 'Content',
        title: 'Xây kênh TikTok cho thương hiệu: Đừng bắt đầu bằng trend',
        linkLabel: 'Coming soon →',
      },
      {
        category: 'Execution',
        title: 'Vì sao kế hoạch Marketing hay vẫn thất bại khi triển khai?',
        linkLabel: 'Coming soon →',
      },
    ],
  },
  contact: {
    eyebrow: "09 — Let's Work Together",
    title: "Let's talk\nbusiness.",
    intro:
      'Chia sẻ với mình về thương hiệu và bài toán bạn đang gặp. Mình sẽ phản hồi trong vòng **24–48 giờ làm việc** để trao đổi chi tiết.',
    items: [
      {
        label: 'Email',
        value: 'hello@huyennguyen.com',
        url: 'mailto:hello@huyennguyen.com',
        newTab: false,
      },
      { label: 'Phone / Zalo', value: '0982864183', url: 'tel:0982864183', newTab: false },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/huyennguyen',
        url: 'https://www.linkedin.com/',
        newTab: true,
      },
      { label: 'Location', value: 'Hà Nội · Remote', url: '', newTab: false },
    ],
    briefEmail: 'hello@huyennguyen.com',
    serviceOptions: L([
      'Marketing Consultation',
      'Strategy & Planning Project',
      'End-to-end Marketing Execution',
      'Fractional / Outsourced Marketing Partner',
      'Chưa rõ — cần tư vấn',
    ]),
    budgetOptions: L([
      'Chưa xác định',
      'Dưới 20 triệu',
      '20 – 50 triệu',
      '50 – 100 triệu',
      'Trên 100 triệu',
    ]),
    timelineOptions: L(['Càng sớm càng tốt', 'Trong 1 tháng tới', '1 – 3 tháng tới', 'Đang tham khảo']),
    messagePlaceholder: 'Thương hiệu của bạn, mục tiêu, vấn đề đang gặp...',
    submitLabel: 'Send Your Brief',
    note: 'Thông tin của bạn được bảo mật và chỉ dùng để trao đổi về dự án.',
    successMessage: '✓ Đã gửi brief! Mình sẽ phản hồi trong 24–48 giờ làm việc.',
  },
}

export const settingsSeed = {
  siteTitle: 'Huyen Nguyen — Marketing Consultant & Strategic Partner',
  siteDescription:
    'Huyen Nguyen – Independent Marketing Consultant. Tư vấn chiến lược, lập kế hoạch và triển khai Marketing trọn gói cho SMEs, Startups và Local Brands.',
  logoLeft: 'HUYEN',
  logoRight: 'NGUYEN',
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Insights', href: '#insights' },
  ],
  navCta: { label: 'Book a Consultation', href: '#contact' },
  footerText: 'Huyen Nguyen · Independent Marketing Consultant & Strategic Partner',
  footerLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Email', href: 'mailto:hello@huyennguyen.com' },
  ],
}

export const projectsSeed = [
  {
    order: 1,
    category: 'Technology & Retail',
    title: 'FPT Shop',
    cardTags: L(['Content Strategy', 'Short-form Video', 'Social Media Execution']),
    caseTags: L([
      'Content Strategy',
      'Short-form Video',
      'Social Media Execution',
      'Long-term Production',
    ]),
    challenge: PH('thương hiệu gặp vấn đề gì về nội dung/kênh?'),
    objectives: PH('mục tiêu Marketing của dự án'),
    role: 'Phát triển chiến lược nội dung, short-form video và triển khai social media; duy trì sản xuất nội dung dài hạn.',
    strategy: PH('insight & cách tiếp cận'),
    execution: PH('các hạng mục đã triển khai, số lượng nội dung...'),
    results: PH('kết quả có thể công bố (nếu được phép)'),
  },
  {
    order: 2,
    category: 'Technology Platform',
    title: 'Green SM Platform',
    cardTags: L(['TikTok Strategy', 'Audience Insights', 'Training']),
    caseTags: L(['TikTok Content Strategy', 'Audience Insights', 'Content Development', 'Training']),
    challenge: PH('bối cảnh & vấn đề'),
    objectives: PH('mục tiêu phát triển kênh TikTok'),
    role: 'Xây dựng chiến lược nội dung TikTok, nghiên cứu audience insights, phát triển nội dung và đào tạo đội ngũ.',
    strategy: PH('insight & định hướng nội dung'),
    execution: PH('hạng mục triển khai, buổi training...'),
    results: PH('kết quả / trạng thái dự án'),
  },
  {
    order: 3,
    category: 'Food & Beverage',
    title: 'Lavi Wine Bar',
    cardTags: L(['Brand Positioning', 'Launch Communications', 'Creative Concept']),
    caseTags: L([
      'Brand Positioning',
      'Marketing Planning',
      'Launch Communications',
      'Creative Concept',
    ]),
    challenge: PH('bài toán thương hiệu khi ra mắt'),
    objectives: PH('mục tiêu ra mắt / nhận diện'),
    role: 'Tư vấn định vị thương hiệu, lập kế hoạch Marketing, phát triển concept sáng tạo và truyền thông ra mắt.',
    strategy: PH('định vị & concept'),
    execution: PH('hạng mục đã / đang triển khai'),
    results: PH('kết quả — ghi rõ: đề xuất / đang triển khai / đã hoàn thành'),
  },
  {
    order: 4,
    category: 'Corporate & Employer Branding',
    title: 'HFL Media',
    cardTags: L(['Internal Comms', 'Employer Branding', 'Event Management']),
    caseTags: L([
      'Internal Communications',
      'Employer Branding',
      'Event Management',
      'Employee Engagement',
    ]),
    challenge: PH('vấn đề truyền thông nội bộ / gắn kết'),
    objectives: PH('mục tiêu employer branding'),
    role: 'Xây dựng chiến lược truyền thông nội bộ, employer branding, tổ chức sự kiện và hoạt động gắn kết nhân sự.',
    strategy: PH('cách tiếp cận'),
    execution: PH('các sự kiện, hoạt động đã triển khai'),
    results: PH('kết quả & bài học'),
  },
]

export async function seed(payload: Payload) {
  try {
    const home = await payload.findGlobal({ slug: 'home', depth: 0 })
    if (!home?.hero?.line1) {
      payload.logger.info('Seeding: trang chủ')
      await payload.updateGlobal({ slug: 'home', data: homeSeed as never })
    }

    const settings = await payload.findGlobal({ slug: 'settings', depth: 0 })
    if (!settings?.logoLeft) {
      payload.logger.info('Seeding: cài đặt chung')
      await payload.updateGlobal({ slug: 'settings', data: settingsSeed as never })
    }

    const { totalDocs } = await payload.count({ collection: 'projects' })
    if (totalDocs === 0) {
      payload.logger.info('Seeding: dự án')
      for (const data of projectsSeed) {
        await payload.create({ collection: 'projects', data: { ...data, published: true } })
      }
    }
  } catch (err) {
    payload.logger.error({ err, msg: 'Seed thất bại' })
  }
}

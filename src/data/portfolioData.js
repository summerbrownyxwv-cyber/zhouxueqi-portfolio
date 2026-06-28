const asset = (path) => `/assets/${path}`;
const pad2 = (number) => String(number).padStart(2, "0");
const imageSequence = (folder, prefix, start, end, extension = "webp") =>
  Array.from({ length: end - start + 1 }, (_, index) =>
    asset(`${folder}/${prefix}${pad2(start + index)}.${extension}`),
  );

const homeDetailSequence = (storyNumber, end, extension = "webp") =>
  imageSequence("01-home-detail", `Instagram story - ${storyNumber}-`, 1, end, extension);

const workDetailSequence = (folderName, prefix, start, end) =>
  imageSequence(`02-work-detail/${folderName}`, prefix, start, end);

const primaryNav = [
  { label: "01.竞赛项目", href: "/#competition" },
  { label: "02.落地项目", href: "/work" },
  { label: "03.其他设计", href: "/library" },
  { label: "04.个人简历", href: "/resume" },
  { label: "05.联系方式", href: "/email" },
];

export const siteMeta = {
  name: "周雪琪",
  role: "视觉设计师",
  copyright: "@2026 周雪琪",
  smile: asset("01-Home/01-Home-icon-01 -01.webp"),
  globalNav: primaryNav,
  footerNav: [
    { label: "简历", href: "/resume" },
    { label: "联系方式", href: "/email" },
  ],
};

export const homeContent = {
  source: "content/01-home.md",
  pageName: "Home / 首页",
  hero: {
    eyebrow: "00.个人简介",
    eyebrowEn: "Me facts",
    title: "周雪琪，一位视觉设计师。",
    intro:
      "武汉纺织大学艺术设计研究生。求职方向：视觉设计/品牌设计，关注品牌系统与文化符号的视觉转化，相信好的设计要在「研究深度」与「感知温度」之间找到平衡。",
    introLines: [
      "武汉纺织大学艺术设计研究生。",
      "求职方向：视觉设计/品牌设计",
      "关注品牌系统与文化符号的视觉转化，相信好的设计要在「研究深度」与「感知温度」之间找到平衡。",
    ],
    nav: primaryNav.map((item) =>
      item.href === "/#competition" ? { ...item, href: "#competition" } : item,
    ),
  },
  reel: {
    title: "作品集短片——",
    tags: ["品牌设计", "包装设计", "AR交互"],
    number: "01",
    name: "听植",
    englishName: "[TingZhi]",
    description: "融合五音疗疾的中草药香薰包装视听设计系统",
    englishDescription:
      "An audio-visual design of herbal aromatherapy packaging incorporating the five tones of healing",
    musicLabel: "音乐：Carefree - Kevin MacLeod",
    musicName: "【Carefree - Kevin MacLeod】",
    coverImage: asset("01-Home/01-Home-part-04-02.webp"),
    video: asset("01-home-detail/01-home-video-01.audio-optimized.mp4"),
  },
  competitionTitle: "01.竞赛项目",
};

export const competitionProjects = [
  {
    id: "tingzhi",
    title: "听植",
    number: "01",
    name: "听植",
    englishName: "[TingZhi]",
    detailEnglishName: "TingZhi",
    subtitle: "融合五音疗疾的中草药香薰包装视听设计系统",
    englishSubtitle:
      "An audio-visual design of herbal aromatherapy packaging incorporating the five tones of healing",
    category: "01.竞赛项目",
    year: "8周",
    tags: ["品牌设计", "包装设计", "AR交互"],
    time: "制作时间：8周（独立创作、米兰设计周全国高校设计大赛｜全国一等奖）",
    buttonText: "查看详情 >",
    cover: asset("01-Home/01-Home-part-04-02.webp"),
    image: asset("01-Home/01-Home-part-04-02.webp"),
    imageNote: "包装正反面样机、香薰/中草药视觉物料",
    detailPath: "assets/01-home-detail/Instagram story - 4",
    detailAssets: homeDetailSequence(4, 10),
    detailVideo: asset("01-home-detail/detail-tingzhi.optimized.mp4"),
    replaceFirstDetailAssetWithVideo: true,
    detailMeta: [
      { label: "项目类型", value: "品牌设计 / 包装设计 / AR交互" },
      { label: "制作周期", value: "8周" },
      { label: "项目形式", value: "独立创作" },
      { label: "项目成果", value: "米兰设计周全国高校设计大赛｜全国一等奖" },
    ],
    externalUrl: null,
    type: "competition",
    route: "/work/tingzhi",
    deferredContent: {
      hover: "保持项目名称、项目副标题、时间、按钮文字不变",
      detail: "详情页完整正文：【待补充】",
    },
  },
  {
    id: "gather-wild",
    title: "拾野山珍",
    number: "02",
    name: "拾野山珍",
    englishName: "[Gather Wild]",
    detailEnglishName: "Gather Wild",
    subtitle: "神农架野山珍品牌视觉形象设计",
    englishSubtitle: "Shennongjia Wild Mountain Treasures Brand Visual Image Design",
    category: "01.竞赛项目",
    year: "4周",
    tags: ["品牌视觉", "包装设计"],
    time: "制作时间：4周（独立创作、第三届中国研究生“美丽中国”创新设计大赛｜全国二等奖）",
    buttonText: "查看详情 >",
    cover: asset("01-Home/01-Home-part-05-02.webp"),
    image: asset("01-Home/01-Home-part-05-02.webp"),
    imageNote: "山珍品牌包装、纸张物料、手持卡片、自然纹样视觉",
    detailPath: "assets/01-home-detail/Instagram story - 5",
    detailAssets: homeDetailSequence(5, 14),
    detailVideo: asset("01-home-detail/detail-shiyeshanzhen.optimized.mp4"),
    replaceFirstDetailAssetWithVideo: true,
    detailMeta: [
      { label: "项目类型", value: "品牌视觉 / 包装设计" },
      { label: "制作周期", value: "4周" },
      { label: "项目形式", value: "独立创作" },
      { label: "项目成果", value: "第三届中国研究生“美丽中国”创新设计大赛｜全国二等奖" },
    ],
    externalUrl: null,
    type: "competition",
    route: "/work/shiyeshanzhen",
    deferredContent: {
      hover: "保持项目名称、项目副标题、时间、按钮文字不变",
      detail: "详情页完整正文：【待补充】",
    },
  },
  {
    id: "encounter-with-bees",
    title: "蜂遇",
    number: "03",
    name: "蜂遇",
    englishName: "[Encounter with bees]",
    detailEnglishName: "Encounter with Bees",
    subtitle: "土家族非遗X恩施蜂蜜品牌包装设计",
    englishSubtitle:
      "Tujia Intangible Cultural Heritage × Enshi Honey Brand Packaging Design",
    category: "01.竞赛项目",
    year: "8周",
    tags: ["非遗", "包装设计", "品牌设计"],
    time: "制作时间：8周（小组协作、好创意设计大赛｜全国二等奖）",
    buttonText: "查看详情 >",
    cover: asset("01-Home/01-Home-part-06-02.webp"),
    image: asset("01-Home/01-Home-part-06-02.webp"),
    imageNote: "蜂蜜罐装包装、自然场景样机",
    detailPath: "assets/01-home-detail/Instagram story - 6",
    detailAssets: homeDetailSequence(6, 14),
    detailVideo: asset("01-home-detail/detail-fengyu.optimized.mp4"),
    replaceFirstDetailAssetWithVideo: true,
    detailMeta: [
      { label: "项目类型", value: "品牌包装设计" },
      { label: "制作周期", value: "8周" },
      { label: "项目形式", value: "小组协作" },
      { label: "项目成果", value: "好创意设计大赛｜全国二等奖" },
    ],
    externalUrl: null,
    type: "competition",
    route: "/work/fengyu",
    deferredContent: {
      hover: "保持项目名称、项目副标题、时间、按钮文字不变",
      detail: "详情页完整正文：【待补充】",
    },
  },
  {
    id: "unison",
    title: "共声",
    number: "04",
    name: "共声",
    englishName: "[Unison]",
    detailEnglishName: "Unison",
    subtitle: "武汉东湖落雁景区声音信息可视化设计研究",
    englishSubtitle:
      "A Study on the Visualization Design of Audio Information at the Luoyan Scenic Area in Wuhan’s East Lake",
    category: "01.竞赛项目",
    year: "16周",
    tags: ["信息可视化", "声音设计", "视觉系统"],
    time: "制作时间：16周（独立创作、第三届全国大学生美术作品展作品）",
    buttonText: "查看详情 >",
    cover: asset("01-Home/01-Home-part-07-02.webp"),
    image: asset("01-Home/01-Home-part-07-02.webp"),
    imageNote: "声音可视化海报、移动端界面、绿色视觉系统展板",
    detailPath: "assets/01-home-detail/Instagram story - 7",
    detailAssets: homeDetailSequence(7, 5, "webp").map((path, index) =>
      index === 0
        ? asset("01-home-detail/共声-静态平面.png")
        : index === 3
          ? asset("01-home-detail/Instagram story - 7-04.png")
          : path,
    ),
    detailVideo: asset("01-home-detail/detail-gongsheng.audio-optimized.m4v"),
    detailMeta: [
      { label: "项目类型", value: "信息可视化 / 声音设计 / 视觉系统" },
      { label: "制作周期", value: "16周" },
      { label: "项目形式", value: "独立创作" },
      { label: "项目成果", value: "第三届全国大学生美术作品展作品" },
    ],
    externalUrl: null,
    type: "competition",
    route: "/work/gongsheng",
    deferredContent: {
      hover: "保持项目名称、项目副标题、时间、按钮文字不变",
      detail: "详情页完整正文：【待补充】",
    },
  },
];

export const workContent = {
  source: "content/02-work.md",
  pageName: "Work / 落地项目",
  sectionTitle: "02.落地项目",
};

export const workProjects = [
  {
    id: "wtu-visual-identity",
    title: "校园视觉形象优化升级",
    client: "武汉纺织大学",
    name: "校园视觉形象优化升级",
    type: "VIS手册排版、学校建筑风格化图形绘制",
    englishType: "VIS Manual Layout and Design of Stylized Graphics for School Buildings",
    category: "02.落地项目",
    year: "8周",
    tags: ["VIS手册排版", "学校建筑风格化图形绘制"],
    time: "制作时间：8周（团队协作）",
    buttonText: "查看详情 >",
    cover: asset("02-Work/02-work-part-02-02.webp"),
    image: asset("02-Work/02-work-part-02-02.webp"),
    imageNote: "蓝色与白色信封/校方视觉物料样机",
    detailPath: "https://vi.wtu.edu.cn",
    detailAssets: [],
    detailVideo: null,
    externalUrl: "https://vi.wtu.edu.cn",
    route: null,
    deferredContent: {
      click: "详情页标题：【待补充】",
    },
  },
  {
    id: "international-education-vis",
    title: "国际教育学院VIS手册设计",
    client: "武汉纺织大学",
    name: "国际教育学院VIS手册设计",
    type: "VIS手册排版、辅助图形设计、应用部分设计",
    englishType: "VIS Manual Layout, Supporting Graphic Design, and Application Section Design",
    category: "02.落地项目",
    year: "12周",
    tags: ["VIS手册排版", "辅助图形设计", "应用部分设计"],
    time: "制作时间：12周（团队协作）",
    buttonText: "查看详情 >",
    cover: asset("02-Work/02-work-part-03-02.webp"),
    image: asset("02-Work/02-work-part-03-02.webp"),
    imageNote: "深蓝色名片、标志与学院视觉物料样机",
    detailPath: "assets/02-work-detail/Instagram story - 16",
    detailAssets: workDetailSequence(
      "Instagram story - 16",
      "国际教育学院VIS手册12.4_页面_",
      1,
      78,
    ),
    detailVideo: null,
    detailMeta: [
      { label: "项目类型", value: "VIS手册排版 / 辅助图形设计 / 应用部分设计" },
      { label: "制作周期", value: "12周" },
      { label: "制作信息", value: "团队协作" },
    ],
    externalUrl: null,
    route: "/work/wtu-international-college-vis",
    deferredContent: {
      click: "详情页完整正文：【待补充】",
    },
  },
  {
    id: "international-office-vis",
    title: "国际交流与合作处VIS手册设计",
    client: "武汉纺织大学",
    name: "国际交流与合作处VIS手册设计",
    type: "VIS手册排版、应用部分设计",
    englishType: "VIS Manual Layout and Design of the Application Section",
    category: "02.落地项目",
    year: "12周",
    tags: ["VIS手册排版", "应用部分设计"],
    time: "制作时间：12周（团队协作）",
    buttonText: "查看详情 >",
    cover: asset("02-Work/02-work-part-04-02.webp"),
    image: asset("02-Work/02-work-part-04-02.webp"),
    imageNote: "蓝白名片、信封与国际交流处视觉物料样机",
    detailPath: "assets/02-work-detail/Instagram story - 17",
    detailAssets: workDetailSequence(
      "Instagram story - 17",
      "国际交流与合作处VIS手册_页面_",
      1,
      80,
    ),
    detailVideo: null,
    detailMeta: [
      { label: "项目类型", value: "VIS手册排版 / 应用部分设计" },
      { label: "制作周期", value: "12周" },
      { label: "制作信息", value: "团队协作" },
    ],
    externalUrl: null,
    route: "/work/wtu-international-office-vis",
    deferredContent: {
      click: "详情页完整正文：【待补充】",
    },
  },
  {
    id: "weimian-visual",
    title: "品牌宣发主视觉与贺卡设计",
    client: "卫眠智康",
    name: "品牌宣发主视觉与贺卡设计",
    type: "海报banner、贺卡物料",
    englishType: "Posters, banners, and greeting cards",
    category: "02.落地项目",
    year: "4周",
    tags: ["海报banner", "贺卡物料"],
    time: "制作时间：4周（团队协作）",
    buttonText: "查看详情 >",
    cover: asset("02-Work/02-work-part-05-02.webp"),
    image: asset("02-Work/02-work-part-05-02.webp"),
    imageNote: "品牌宣发主视觉大屏/海报场景图",
    detailPath: "assets/02-work-detail/Instagram story - 18",
    detailAssets: [
      asset("02-Work/02-work-part-05-02.webp"),
      ...workDetailSequence("Instagram story - 18", "卫眠智康方案9.6_页面_", 2, 16),
    ],
    detailVideo: null,
    detailMeta: [
      { label: "项目类型", value: "海报banner / 贺卡物料" },
      { label: "制作周期", value: "4周" },
      { label: "制作信息", value: "团队协作" },
    ],
    externalUrl: null,
    route: "/work/weimianzhikang",
    deferredContent: {
      click: "详情页完整正文：【待补充】",
    },
  },
];

export const projectDetailItems = [...competitionProjects, ...workProjects].filter(
  (project) => project.route,
);

export const libraryContent = {
  source: "content/03-Library.md",
  pageName: "Library / 其他设计",
  title: "03.其他设计",
  englishTitle: "03. Other Design",
  description:
    "平面、交互与 AI 生成方向的阶段性实验，作为主线作品之外的视觉能力补充。",
  descriptionLines: [
    "平面、交互与 AI 生成方向的阶段性实验，",
    "作为主线作品之外的视觉能力补充。",
  ],
  englishDescription:
    "Visual experiments across print, interaction, and AI generation, extending my practice beyond branding systems.",
  englishDescriptionLines: [
    "Visual experiments across print, interaction, and AI generation,",
    "extending my practice beyond branding systems.",
  ],
  items: [
    {
      id: "graphic-promotion",
      title: "01.平面宣传 Graphic Promotion",
      titleZh: "01.平面宣传",
      titleEn: "Graphic Promotion",
      category: "海报 / 书籍 / 视觉物料 Posters / Books / Visual Materials",
      tagsZh: "海报 / 书籍 / 视觉物料",
      tagsEn: "Posters / Books / Visual Materials",
      description:
        "围绕信息层级、版式节奏与视觉记忆点展开的平面设计练习，包含海报、书籍排版及宣传物料设计。",
      englishDescription:
        "A collection of graphic design works focusing on information hierarchy, typographic rhythm, and visual memorability, including posters, publications, and promotional materials.",
      route: null,
      detailAssets: [],
    },
    {
      id: "media-interaction",
      title: "02.媒体交互 Media Interaction",
      titleZh: "02.媒体交互",
      titleEn: "Media Interaction",
      category:
        "TouchDesigner / 动态视觉 / 实时生成 TouchDesigner / Motion Visuals / Real-time Generation",
      tagsZh: "TouchDesigner / 动态视觉 / 实时生成",
      tagsEn: "TouchDesigner / Motion Visuals / Real-time Generation",
      description:
        "基于 TouchDesigner 进行动态视觉与实时交互实验，探索图形、声音、数据与空间感之间的关系。",
      englishDescription:
        "Interactive visual experiments created with TouchDesigner, exploring relationships between graphics, sound, data, and spatial perception.",
      route: null,
      detailAssets: [],
    },
    {
      id: "ai-projects",
      title: "03.AI 项目 AI Projects",
      titleZh: "03.AI 项目",
      titleEn: "AI Projects",
      category: "生成式视觉 / 概念实验 / 进行中 Generative Visuals / Concept Experiments / Ongoing",
      tagsZh: "生成式视觉 / 概念实验 / 进行中",
      tagsEn: "Generative Visuals / Concept Experiments / Ongoing",
      description:
        "该部分收录仍在推进中的 AI 辅助创作实验，包含视觉概念生成、图像风格测试与设计流程探索。",
      englishDescription:
        "An ongoing collection of AI-assisted creative experiments, including visual concept generation, image style testing, and design workflow exploration.",
      route: null,
      detailAssets: [],
    },
  ],
  deferredContent: {
    hoverTitle: "下一阶段补充 hover 状态",
    clickTarget: "下一阶段补充卡片详情",
    detailTitle: "下一阶段补充详情内容",
  },
};

export const resumeContent = {
  source: "content/04-Resume.md",
  pageName: "Resume / 个人简历",
  name: "周雪琪",
  role: "视觉设计师",
  direction: "品牌视觉 / 包装设计 / 视觉传播",
  intro:
    "艺术设计硕士，具备品牌视觉、包装设计、画册排版、电商视觉与宣传物料设计经验。能够完成从需求理解、视觉概念提炼、版式设计到多场景应用落地的完整流程。擅长从地域文化、校园品牌、产品调性中提取视觉符号，转化为可延展的品牌视觉系统，并结合 AI 工具与动态视觉方法提升设计效率与表现力。",
  education: [
    {
      title: "武汉纺织大学｜艺术设计 硕士",
      date: "2023.09 - 2026.06",
    },
    {
      title: "商丘师范学院｜视觉传达设计 本科",
      date: "2018.09 - 2022.06",
    },
  ],
  workExperience: [
    {
      title: "旭坤五金网店｜电商视觉设计",
      date: "2024.06 - 2024.07",
      description:
        "负责天猫店铺产品视觉设计，完成 300+ 款五金产品主图精修与详情页排版，强化产品功能卖点与页面转化表达。参与 618 促销活动视觉设计，输出活动专题页、促销海报及 Banner，活动期间店铺流量提升 40%+。",
    },
    {
      title: "武汉九执文艺公司｜视觉传达设计师",
      date: "2023.04 - 2023.06",
      description:
        "参与《2023 武汉夜游指南》画册视觉设计，围绕“大江大河大武汉”的城市定位，完成封面主视觉、辅助图形与 119P 内页版式设计。根据甲方反馈进行多轮版面优化。",
    },
  ],
  projectExperience: [
    {
      title: "武汉纺织大学校园视觉形象升级项目｜核心设计成员",
      date: "2025.04 - 2025.06",
      description:
        "参与校园整体视觉识别系统升级，围绕“纺织文化、校园建筑特色”提取视觉符号。重点负责校园建筑群视觉焕新与导视、标识等应用场景优化，相关方案已纳入学校品牌视觉规范。",
    },
    {
      title: "武汉纺织大学国际教育学院 VIS 设计｜视觉设计成员",
      date: "2024.04 - 2024.10",
      description:
        "参与学院 VIS 系统设计，完成辅助图形、办公物料、宣传物料及应用规范视觉输出。负责信封、名片、画册、展板等多场景应用设计，协助输出学院 VIS 手册，覆盖 10+ 应用场景。",
    },
    {
      title: "卫眠智康品牌主视觉与宣发物料设计｜导师项目 / 设计成员",
      date: "2025.09 - 2025.10",
      description:
        "服务智能健康管家品牌，围绕“科技 + 健康”定位提炼睡眠曲线、智能监护等视觉元素。完成品牌主视觉方案与宣发物料设计，共输出主视觉方案 2 套、宣发物料4份，为后续推广提供视觉基础。",
    },
  ],
  skills: [
    "品牌视觉、包装设计、画册排版",
    "宣传物料、电商视觉",
    "Adobe Illustrator / Photoshop",
    "InDesign / Figma",
    "After Effects / Premiere",
    "TouchDesigner",
    "Midjourney / Stable Diffusion",
    "ChatGPT",
  ],
  honors: [
    "米兰设计周全国高校设计大赛｜全国一等奖",
    "好创意设计大赛｜全国二等奖",
    "美丽中国研究生创新设计大赛｜全国二等奖",
    "广告设计师（国家级职业技能证书）",
    "CET-4｜可浏览英文设计文献",
  ],
  capabilities: [
    "品牌视觉系统构建",
    "文化符号视觉转译",
    "包装与物料延展",
    "AI辅助创意输出",
  ],
  contact: {
    phone: "159 3976 3720",
    email: "1140550749@qq.com",
  },
  deferredContent: {
    resumeDownloadButton: "【待补充】",
  },
};

export const emailContent = {
  source: "content/05-E-mail.md",
  pageName: "E-mail / 联系方式",
  email: "1140550749@qq.com",
  repeatCount: 32,
  deferredContent: {
    clickResult: "复制邮箱",
    copiedText: "copied!",
    autoCloseTime: "【5s】",
  },
};

export const sourceSummary = {
  directoriesRead: ["content", "notes", "figma-reference", "assets", "inspiration", "website- code"],
  contentFiles: {
    home: "content/01-home.md",
    work: "content/02-work.md",
    library: "content/03-Library.md",
    resume: "content/04-Resume.md",
    email: "content/05-E-mail.md",
  },
  primaryAssets: [
    "assets/01-Home/01-Home-icon-01 -01.webp",
    "assets/01-home-detail/01-home-video-01.audio-optimized.mp4",
    "assets/01-home-detail/detail-tingzhi.optimized.mp4",
    "assets/01-home-detail/detail-shiyeshanzhen.optimized.mp4",
    "assets/01-home-detail/detail-fengyu.optimized.mp4",
    "assets/01-home-detail/detail-gongsheng.audio-optimized.m4v",
    "assets/01-Home/01-Home-part-04-02.webp",
    "assets/01-Home/01-Home-part-05-02.webp",
    "assets/01-Home/01-Home-part-06-02.webp",
    "assets/01-Home/01-Home-part-07-02.webp",
    "assets/02-Work/02-work-part-02-02.webp",
    "assets/02-Work/02-work-part-03-02.webp",
    "assets/02-Work/02-work-part-04-02.webp",
    "assets/02-Work/02-work-part-05-02.webp",
  ],
};

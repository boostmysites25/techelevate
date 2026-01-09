export const allServices = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    image: require("../assets/images/services/web-development.webp"),
    desc: "Elevating web experiences with robust full-stack architectures and modern, responsive designs that captivate and convert.",
    link: "/web-development",
  },
  {
    id: 2,
    title: "App Development",
    image: require("../assets/images/services/app-development.webp"),
    desc: "Innovative mobile applications engineered for performance and user engagement, tailored to fit your unique business model.",
    link: "/app-development",
  },
  {
    id: 3,
    title: "Blockchain Development",
    image: require("../assets/images/services/blockchain.webp"),
    desc: "Decentralized, secure, and transparent blockchain solutions designed to revolutionize your business processes and future-proof your operations.",
  },
  {
    id: 4,
    title: "Data Analytics & BI",
    image: require("../assets/images/services/data-analytics.webp"),
    desc: "Turn data into your competitive advantage. Advanced analytics and BI tools to drive strategic, evidence-based decision making.",
  },
  {
    id: 5,
    title: "AI Development",
    image: require("../assets/images/services/ai.webp"),
    desc: "Smart AI and machine learning integrations to automate workflows, predict trends, and unlock new levels of operational efficiency.",
  },
];

// Web Development Services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Website Design",
    image: require("../assets/images/landing page/Custom Website Design.webp"),
    description:
      "Stand out with bespoke website designs that embody your brand's essence. We create visually striking, intuitive interfaces that ensure a memorable user journey across every device.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: require("../assets/images/landing page/E-commerce Solutions.webp"),
    description:
      "Drive sales with powerful e-commerce platforms. We focus on security, speed, and seamless checkout experiences to maximize conversion and customer satisfaction.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.webp"),
    description:
      "Take control of your content with easy-to-use CMS implementation. We specialize in WordPress, Joomla, and Drupal to give you the flexibility you need offering without the technical hassle.",
  },
  {
    id: 4,
    title: "API Integration",
    image: require("../assets/images/landing page/API Integration.webp"),
    description:
      "Connect your ecosystem. We seamlessly integrate third-party APIs, from payment gateways to CRM tools, ensuring your digital tools work in perfect harmony.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    image: require("../assets/images/landing page/Website Maintenance & Support.webp"),
    description:
      "Keep your digital presence pristine. Our maintenance packages provide regular updates, security patches, and performance tuning to ensure your site is always running at its best.",
  },
];

// App Development Services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landing page/iOS App Development.webp"),
    description:
      "Native iOS experiences that shine. We develop high-performance apps for the Apple ecosystem, leveraging the latest iOS features for unmatched quality and speed.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landing page/Android App Development.webp"),
    description:
      "Reach the widest audience with robust Android apps. We ensure compatibility across devices and versions, delivering a smooth experience for every user.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.webp"),
    description:
      "Efficiency meets performance. Using Flutter and React Native, we build single-codebase apps that deploy natively to both iOS and Android, saving you time and resources.",
  },
  {
    id: 4,
    title: "UI/UX Design for Apps",
    image: require("../assets/images/landing page/UIUX Design for Apps.webp"),
    description:
      "Design that delights. We craft intuitive and beautiful mobile interfaces that guide users effortlessly, boosting engagement and retention rates.",
  },
  {
    id: 5,
    title: "App Testing & Deployment",
    image: require("../assets/images/landing page/App Testing & Deployment.webp"),
    description:
      "Launch with confidence. Our rigorous testing protocols ensure your app is bug-free and secure before it hits the App Store and Google Play.",
  },
];

// Service details page content
export const serviceDetailsList = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    shortDescription: "Comprehensive web solutions from concept to code",
    heroImage: "/images/services/web-dev.jpg", // Replace with your actual image path
    overview:
      "We architect and build robust, scalable web applications that drive digital transformation. Our full-stack expertise allows us to seamlessly integrate front-end aesthetics with back-end power, ensuring your web platform is fast, secure, and ready for growth.",
    features: [
      "Bespoke web application development",
      "Mobile-first, responsive design architecture",
      "Secure RESTful API engineering",
      "High-performance database optimization",
      "Cloud-native deployment & DevOps",
      "Next-gen PWA & SPA development",
      "Comprehensive E-commerce systems",
      "Legacy system modernization",
    ],
    technologies: [
      {
        name: "Frontend",
        items: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "Django", "Ruby on Rails", "Laravel"],
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
      },
      {
        name: "DevOps",
        items: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines"],
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "In-depth requirement gathering",
      },
      {
        step: 2,
        title: "Blueprint",
        description: "System architecture & UI/UX Design",
      },
      {
        step: 3,
        title: "Build",
        description: "Agile sprints & iterative development",
      },
      {
        step: 4,
        title: "Validate",
        description: "Rigorous QA & performance testing",
      },
      {
        step: 5,
        title: "Launch",
        description: "Smooth deployment & handover",
      },
      {
        step: 6,
        title: "Evolve",
        description: "Continuous support & feature updates",
      },
    ],
    benefits: [
      "Unified development lifecycle",
      "Accelerated time-to-market",
      "Seamless system integration",
      "Maintainable, clean codebases",
      "Future-proof scalability",
    ],
  },
  {
    id: 2,
    title: "App Development",
    shortDescription: "Native & Cross-platform Mobile Excellence",
    heroImage: "/images/services/app-dev.jpg",
    overview:
      "We engineer top-tier mobile applications for iOS and Android. By blending native performance with cross-platform flexibility, we deliver apps that are not just functional, but delightful to use. We focus on retention, speed, and seamless user journeys.",
    features: [
      "Premium Native iOS & Android apps",
      "Efficient Cross-platform solutions",
      "User-centric UI/UX design",
      "Robust offline capabilities",
      "Advanced Push Notification systems",
      "Secure In-app payment gateways",
      "Deep Social Media integration",
      "Strategic App Store Optimization (ASO)",
    ],
    technologies: [
      { name: "Native", items: ["Swift", "Kotlin", "Java"] },
      { name: "Cross-Platform", items: ["React Native", "Flutter", "Ionic"] },
      { name: "Backend", items: ["Firebase", "AWS Amplify", "GraphQL"] },
      { name: "Testing", items: ["Jest", "Appium", "Detox"] },
    ],
    process: [
      {
        step: 1,
        title: "Spark",
        description: "Concept validation & strategy",
      },
      {
        step: 2,
        title: "Visualize",
        description: "Prototyping & wireframing",
      },
      { step: 3, title: "Craft", description: "High-fidelity UI/UX design" },
      { step: 4, title: "Code", description: "Feature-rich development" },
      { step: 5, title: "Refine", description: "Multi-device QA testing" },
      { step: 6, title: "Release", description: "Store submission & launch" },
    ],
    benefits: [
      "Cost-effective development",
      "Rapid deployment cycles",
      "Native-like performance",
      "Broad device compatibility",
      "High user retention rates",
    ],
  },
  {
    id: 3,
    title: "Blockchain Development",
    shortDescription: "Decentralized trust & Smart Contracts",
    heroImage: "/images/services/blockchain.jpg",
    overview:
      "We empower businesses with the security and transparency of blockchain. From smart contracts to full-scale dApps, we build decentralized solutions that eliminate intermediaries and create immutable, trustless systems for the modern era.",
    features: [
      "Secure Smart Contract audit & dev",
      "Custom dApp architecture",
      "Tokenomics & Token creation",
      "Enterprise Blockchain integration",
      "NFT Marketplace development",
      "DeFi protocol engineering",
      "Secure Wallet integration",
      "Strategic Blockchain consulting",
    ],
    technologies: [
      {
        name: "Platforms",
        items: ["Ethereum", "Polygon", "Solana", "Hyperledger"],
      },
      { name: "Languages", items: ["Solidity", "Rust", "Go", "Vyper"] },
      { name: "Tools", items: ["Truffle", "Hardhat", "Web3.js", "Ethers.js"] },
      { name: "Storage", items: ["IPFS", "Filecoin", "Arweave"] },
    ],
    process: [
      { step: 1, title: "Audit", description: "Use case feasibility study" },
      {
        step: 2,
        title: "Architect",
        description: "Consensus & network design",
      },
      { step: 3, title: "Develop", description: "Smart contract engineering" },
      { step: 4, title: "Secure", description: "Security audits & stress tests" },
      { step: 5, title: "Deploy", description: "Mainnet launch & monitoring" },
      {
        step: 6,
        title: "Connect",
        description: "dApp frontend integration",
      },
    ],
    benefits: [
      "Total data integrity",
      "Elimination of middlemen",
      "Cryptographic security",
      "Automated trust (Smart Contracts)",
      "Innovative revenue models",
    ],
  },
  {
    id: 4,
    title: "Data Analytics & BI",
    shortDescription: "Turning data into strategic assets",
    heroImage: "/images/services/data-analytics.jpg",
    overview:
      "Unlock the hidden value in your data. Our advanced analytics and BI solutions transform raw numbers into clear, actionable insights. We help you visualize trends, predict outcomes, and make decisions with confidence.",
    features: [
      "Interactive Dashboard design",
      "Advanced Predictive Analytics",
      "Custom Data Visualization",
      "Robust ETL Pipeline engineering",
      "Big Data infrastructure",
      "ML Model integration",
      "Real-time KPI monitoring",
      "Automated Business Reporting",
    ],
    technologies: [
      { name: "Tools", items: ["Tableau", "Power BI", "Looker", "Metabase"] },
      { name: "Languages", items: ["Python", "R", "SQL"] },
      { name: "Big Data", items: ["Hadoop", "Spark", "Kafka"] },
      {
        name: "Cloud",
        items: ["AWS Redshift", "Google BigQuery", "Snowflake"],
      },
    ],
    process: [
      { step: 1, title: "Assess", description: "Data landscape evaluation" },
      {
        step: 2,
        title: "Cleanse",
        description: "Data quality & transformation",
      },
      { step: 3, title: "Model", description: "Warehouse & schema design" },
      {
        step: 4,
        title: "Analyze",
        description: "Deep dive & pattern recognition",
      },
      { step: 5, title: "Visualize", description: "Dashboard & report creation" },
      {
        step: 6,
        title: "Enable",
        description: "Integration & user training",
      },
    ],
    benefits: [
      "Evidence-based decision making",
      "Market trend anticipation",
      "Operational bottleneck removal",
      "Strategic competitive edge",
      "Clear visibility on ROI",
    ],
  },
  {
    id: 5,
    title: "AI Development",
    shortDescription: "Cognitive computing & Smart Automation",
    heroImage: "/images/services/ai.jpg",
    overview:
      "Leverage the future of technology today. We build bespoke AI solutions that learn, adapt, and perform. From natural language processing to computer vision, our AI systems automate the complex and illuminate the obscure.",
    features: [
      "Custom ML Model development",
      "Natural Language Processing (NLP)",
      "Computer Vision systems",
      "Predictive Maintenance AI",
      "Intelligent Recommendation Engines",
      "Conversational AI & Chatbots",
      "Deep Learning Neural Networks",
      "Process Automation Agents",
    ],
    technologies: [
      {
        name: "Frameworks",
        items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      },
      { name: "Languages", items: ["Python", "R", "Julia"] },
      { name: "NLP", items: ["GPT", "BERT", "spaCy", "NLTK"] },
      { name: "Vision", items: ["OpenCV", "YOLO", "Detectron2"] },
    ],
    process: [
      {
        step: 1,
        title: "Define",
        description: "Identify high-impact AI use cases",
      },
      {
        step: 2,
        title: "Gather",
        description: "Data collection & labeling",
      },
      {
        step: 3,
        title: "Select",
        description: "Algorithm & model choice",
      },
      {
        step: 4,
        title: "Train",
        description: "Model training & hyperparameter tuning",
      },
      {
        step: 5,
        title: "Deploy",
        description: "Production inference setup",
      },
      {
        step: 6,
        title: "Optimize",
        description: "Continuous learning & monitoring",
      },
    ],
    benefits: [
      "Massive efficiency gains",
      "Hyper-personalized user experiences",
      "Precision in complex tasks",
      "24/7 autonomous operations",
      "Market leadership through innovation",
    ],
  },
];

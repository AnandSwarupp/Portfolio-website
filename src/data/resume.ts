export const profile = {
  name: "Anand Swarup",
  title: "AI Developer",
  location: "Jaipur, India",
  phone: "81469-94031",
  email: "anandswarup070@gmail.com",
  github: "https://github.com/AnandSwarupp",
  linkedin: "https://www.linkedin.com/in/anand-swarup-ab34b02a4/",
  tagline:
    "I build AI-powered automation systems, conversational agents, and data-driven applications.",
};

export const experience = [
  {
    role: "AI Developer",
    company: "Technology Mindz, Jaipur",
    period: "Aug 2025 – Present",
  },
  {
    role: "AI & Data Engineering Intern",
    company: "Pratham Software (PSI), Jaipur",
    period: "Jan 2025 – Jul 2025",
  },
  {
    role: "Full Stack Python Developer Trainee",
    company: "INFOWIZ-A Software Solution, Chandigarh",
    period: "Sep 2022 – Feb 2023",
  },
];

export const education = [
  {
    degree: "Master of Science - Information Technology",
    school: "Post Graduate Government College Sector-11, Chandigarh",
    period: "Jun 2023 – Jun 2025",
    detail: "Percentage: 77.2%",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Post Graduate Government College Sector-46, Chandigarh",
    period: "Jun 2020 – Jun 2023",
    detail: "Percentage: 78.5%",
  },
];

export const projects = [
  {
    title: "AI-Powered SDR System",
    subtitle: "CRM-Integrated Outbound Campaign Platform",
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Groq LLM",
      "VAPI",
      "OAuth 2.0",
      "Zapier",
      "Twilio",
    ],
    points: [
      "Automated outbound sales calls: processes leads, initiates AI calls, analyzes conversations, updates CRM automatically.",
      "Integrated VAPI telephony with Groq LLM for personalized openings and transcript analysis.",
      "Multi-tenant campaign management with timezone-aware scheduling and weekend skipping.",
      "Cron-based scheduling, retry logic, and JWT-like session management with RBAC.",
    ],
    link: undefined as string | undefined,
  },
  {
    title: "AI Virtual Video Agent (POC)",
    subtitle: "Real-Time Conversational Avatar System",
    stack: ["Python", "FastAPI", "LiveAvatar API", "AsyncIO", "HTTPX"],
    points: [
      "Real-time voice conversations with lifelike avatars using LiveAvatar FULL mode.",
      "Async FastAPI backend orchestrating avatar sessions with low-latency API calls.",
      "Session token generation, parallel avatar fetching, robust error handling and logging.",
    ],
    link: undefined as string | undefined,
  },
  {
    title: "Finance Reconciliation Assistant",
    subtitle: "WhatsApp-based Automation System",
    stack: [
      "Python",
      "FastAPI",
      "Supabase",
      "Azure OpenAI",
      "Azure OCR",
      "WhatsApp Cloud API",
    ],
    points: [
      "WhatsApp chatbot automating reconciliation of cheques and invoices.",
      "Azure OCR extracts text; Azure OpenAI structures it into financial data.",
      "OTP login, session management, and natural-language finance Q&A over stored records.",
    ],
    link: "https://github.com/AnandSwarupp/WhatsApp-Bot",
  },
  {
    title: "YouTube Comment Sentiment Analyzer",
    subtitle: "Real-time sentiment analysis web app",
    stack: ["Python", "Streamlit", "CatBoost", "YouTube Data API", "Pandas"],
    points: [
      "Fetches 100+ comments per video via YouTube Data API with OAuth.",
      "CatBoost multi-class classifier for Negative/Neutral/Positive sentiment.",
      "Streamlit UI with sentiment distribution and top-rated comments.",
    ],
    link: "https://github.com/AnandSwarupp/Youtube-Sentiment-Analyser-CatBoost",
  },
  {
    title: "Blinkit Sales & Inventory Analytics",
    subtitle: "Power BI Dashboard",
    stack: ["Power BI", "SQL", "Excel", "DAX", "Data Modeling"],
    points: [
      "Interactive report analyzing grocery sales, inventory, and marketing performance.",
      "SQL-driven data cleaning and transformation from relational databases.",
      "DAX measures tracking sales trends, stock turnover, and marketing ROI.",
    ],
    link: "https://github.com/AnandSwarupp/Blinkit-Power-Bi-Report",
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Python", "SQL", "HTML", "CSS"] },
  {
    category: "Frameworks & Libraries",
    items: [
      "Django",
      "FastAPI",
      "Streamlit",
      "Bootstrap",
      "Jinja2",
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      "Sentence Transformers",
      "LlamaCpp",
      "NumPy",
      "Pandas",
      "OpenCV",
      "DeepFace",
    ],
  },
  {
    category: "Cloud & APIs",
    items: [
      "Azure OpenAI",
      "Azure OCR",
      "WhatsApp Cloud API",
      "OpenAI API",
      "Facebook Graph API",
      "YouTube Data API",
      "REST APIs",
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      "Supabase",
      "SQL Server",
      "FAISS",
      "Power BI",
      "Excel",
      "Git",
      "GitHub",
      "Jupyter Notebook",
    ],
  },
  {
    category: "AI & Data Technologies",
    items: [
      "GPT-4o",
      "Azure OpenAI",
      "Groq LLM",
      "Google FLAN-T5",
      "DeepSeek LLMs",
      "VAPI",
      "ElevenLabs",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Linear/Polynomial Regression",
      "Logistic Regression",
      "Decision Tree",
      "Random Forest",
      "Naive Bayes",
      "SVM",
      "K-Means",
      "Hierarchical Clustering",
      "DBSCAN",
      "GMM",
      "XGBoost",
      "AdaBoost",
      "CatBoost",
      "Gradient Boosting",
    ],
  },
];

export const certifications = [
  "Role Of Honour Certificate for achieving first rank in semester examinations.",
  "College Colour Certificate for achieving second rank in semester examinations and being elected as student council SECRETARY.",
];

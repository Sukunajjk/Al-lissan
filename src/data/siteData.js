export const siteConfig = {
  name: "Tanzeem Al-Lissan",
  tagline: "Empowering Special Children Since 1996",
  description: "Dedicated to helping special children learn, grow their skills, and become an integral part of society.",
  phone: "+92-21-XXXXXXX",
  email: "info@al-lissan.org",
  address: "Karachi, Pakistan",
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "Our Story", path: "/about", desc: "Learn about our 28-year journey" },
      { name: "Vision & Mission", path: "/vision-mission", desc: "What drives us forward" },
      { name: "Leadership", path: "/team", desc: "Meet the people behind the mission" },
      { name: "Transparency", path: "/reports", desc: "Annual reports & accountability" },
    ],
  },
  {
    name: "Programs",
    path: "/programs",
    children: [
      { name: "Autism Rehabilitation", path: "/programs/ifra", desc: "IFRA - Specialized autism support" },
      { name: "Hearing Impaired", path: "/programs/hearing", desc: "Speech & auditory training" },
      { name: "Al-Masoom Center", path: "/programs/al-masoom", desc: "Intellectual development" },
      { name: "IRADA Program", path: "/programs/irada", desc: "Differently abled rehab" },
      { name: "Dar-ul-Sakoon", path: "/programs/dar-ul-sakoon", desc: "Psychological support" },
      { name: "Professional Courses", path: "/programs/courses", desc: "Training & diplomas" },
    ],
  },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export const stats = [
  { label: "Children Supported", value: 5000, suffix: "+", icon: "Heart" },
  { label: "Years of Service", value: 28, suffix: "+", icon: "Calendar" },
  { label: "Rehabilitation Centers", value: 6, suffix: "", icon: "Building" },
  { label: "Trained Specialists", value: 200, suffix: "+", icon: "Users" },
];

export const partners = [
  "UNICEF", "WHO Pakistan", "Ministry of Social Welfare", "Aga Khan Foundation",
  "Pakistan Medical Association", "British Council", "Special Olympics Pakistan", "SZABIST",
];

export const processSteps = [
  {
    step: "01",
    title: "Initial Assessment",
    desc: "Our expert team conducts a comprehensive evaluation to understand each child's unique needs, strengths, and developmental goals.",
    icon: "ClipboardCheck",
  },
  {
    step: "02",
    title: "Custom Care Plan",
    desc: "A personalized rehabilitation plan is designed combining therapy, education, and family support tailored to the child.",
    icon: "FileHeart",
  },
  {
    step: "03",
    title: "Therapy & Education",
    desc: "Children receive daily sessions with certified therapists and educators using internationally recognized methodologies.",
    icon: "GraduationCap",
  },
  {
    step: "04",
    title: "Progress & Growth",
    desc: "Regular milestones are tracked and celebrated, with plans adapted continuously to maximize each child's potential.",
    icon: "TrendingUp",
  },
];

export const impactStories = [
  {
    name: "Ahmed",
    age: "8 years old",
    program: "IFRA - Autism Rehab",
    before: "Non-verbal, unable to make eye contact or engage in social interactions with peers.",
    after: "Now communicates using full sentences, attends mainstream classes part-time, and plays with friends.",
    duration: "3 years in program",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
  },
  {
    name: "Sara",
    age: "6 years old",
    program: "Hearing Impaired Rehab",
    before: "Profound hearing loss from birth, no speech development, isolated from family conversations.",
    after: "Uses hearing aids effectively, speaks clearly, top of her class in a mainstream school.",
    duration: "2 years in program",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80",
  },
  {
    name: "Hassan",
    age: "10 years old",
    program: "Al-Masoom Center",
    before: "Unable to perform basic self-care tasks, limited vocabulary, severe learning difficulties.",
    after: "Independently manages daily routines, reads at grade level, participates in school activities.",
    duration: "4 years in program",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
  },
];

export const whyChooseUs = [
  { title: "28+ Years of Expertise", desc: "Nearly three decades of specialized experience in child rehabilitation, backed by evidence-based approaches and continuous innovation.", icon: "Award" },
  { title: "Holistic Rehabilitation", desc: "Comprehensive programs addressing physical, cognitive, emotional, and social development through an integrated care model.", icon: "Layers" },
  { title: "Expert Clinical Team", desc: "200+ certified therapists and educators trained in internationally recognized methodologies for special needs care.", icon: "Users" },
  { title: "Family-Centered Approach", desc: "Empowering families with the tools, training, and support they need to continue rehabilitation beyond our centers.", icon: "Home" },
  { title: "Inclusive Education", desc: "Creating pathways to mainstream education and society through carefully designed transition programs.", icon: "BookOpen" },
  { title: "Community Impact", desc: "Building awareness and advocacy for disability rights across Pakistan's social landscape.", icon: "Globe" },
];

export const programs = [
  {
    id: "ifra",
    title: "Institute for Rehabilitation of Autism (IFRA)",
    shortTitle: "Autism Rehabilitation",
    description: "Comprehensive therapy and educational programs designed specifically for children on the autism spectrum, fostering communication and social skills.",
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    badge: "Flagship",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "hearing",
    title: "Hearing Impaired Rehabilitation",
    shortTitle: "Hearing Support",
    description: "Specialized speech therapy and auditory training programs to help hearing-impaired children develop communication abilities and confidence.",
    icon: "Ear",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
    badge: null,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "al-masoom",
    title: "Al-Masoom Center for Intellectually Disabled",
    shortTitle: "Intellectual Development",
    description: "Tailored educational and developmental programs for children with intellectual disabilities, building independence and life skills.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    badge: null,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "irada",
    title: "IRADA - Differently Abled Rehabilitation",
    shortTitle: "Differently Abled",
    description: "Holistic rehabilitation combining physical therapy, occupational therapy, and educational support for differently abled children.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
    badge: "New",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "dar-ul-sakoon",
    title: "Dar-ul-Sakoon Psychological Clinic",
    shortTitle: "Mental Health Clinic",
    description: "Professional psychological counseling and mental health services providing a safe, nurturing environment for emotional well-being.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    badge: null,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "courses",
    title: "Professional Training Courses",
    shortTitle: "Professional Training",
    description: "Post-graduate diplomas in Speech & Language Therapy, Autism Spectrum Disorder, and Special Education to build specialized workforce.",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c5f1?w=600&q=80",
    badge: null,
    color: "from-primary-500 to-primary-700",
  },
];

export const testimonials = [
  {
    name: "Fatima Ahmed",
    role: "Parent of IFRA Student",
    text: "Al-Lissan transformed our lives. My son, who was non-verbal at age 4, now communicates with confidence. The dedication of the therapists is truly remarkable.",
    avatar: "FA",
    gradient: "from-primary-500 to-accent-500",
    rating: 5,
  },
  {
    name: "Dr. Sana Khan",
    role: "Child Psychologist",
    text: "In my 15 years of practice, I have rarely seen an organization so committed to the holistic development of special children. Their approach is both scientific and deeply compassionate.",
    avatar: "SK",
    gradient: "from-accent-500 to-primary-600",
    rating: 5,
  },
  {
    name: "Rashid Malik",
    role: "Corporate Partner",
    text: "Partnering with Al-Lissan has been incredibly rewarding. Their transparency and the tangible impact they create make them a model NGO in Pakistan's social sector.",
    avatar: "RM",
    gradient: "from-primary-600 to-primary-400",
    rating: 5,
  },
  {
    name: "Amina Bibi",
    role: "Mother of 3 Students",
    text: "All three of my children attend Al-Lissan programs. The transformation I've seen in their confidence and abilities is nothing short of miraculous. This organization is a blessing.",
    avatar: "AB",
    gradient: "from-warm-400 to-primary-500",
    rating: 5,
  },
];

export const faqs = [
  { question: "How can I enroll my child in a program?", answer: "You can begin by visiting our contact page or calling our office. Our team will schedule an initial assessment to understand your child's needs and recommend the most suitable program." },
  { question: "What age groups do you serve?", answer: "We serve children from early intervention (ages 2-3) through adolescence. Each program has specific age-appropriate tracks designed to maximize developmental outcomes." },
  { question: "Are there fees for rehabilitation services?", answer: "Al-Lissan operates on a subsidized fee model. We never turn away a child due to inability to pay. Scholarship programs and supporter contributions help cover costs for families in need." },
  { question: "How can I support Al-Lissan's mission?", answer: "There are many ways to help — from spreading awareness to corporate partnerships, sponsoring a child's program, or organizing fundraisers. Contact us to explore how you can make an impact." },
  { question: "Can I visit your centers before enrolling?", answer: "Absolutely. We encourage parents to visit and observe our programs firsthand. Contact us to schedule a guided tour of any of our six rehabilitation centers." },
  { question: "What qualifications do your therapists hold?", answer: "All our therapists hold certified degrees in their fields — Speech Therapy, Occupational Therapy, Psychology, or Special Education. Many have international training and over a decade of hands-on experience." },
];

export const newsArticles = [
  { id: 1, title: "Annual Rehabilitation Conference 2026", excerpt: "Al-Lissan hosted its annual conference bringing together specialists from across Pakistan to discuss innovative approaches in child rehabilitation.", date: "February 5, 2026", category: "Events", readTime: "4 min", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
  { id: 2, title: "New Speech Therapy Wing Inauguration", excerpt: "The state-of-the-art speech therapy wing was inaugurated, doubling our capacity to serve children with communication disorders.", date: "January 20, 2026", category: "Milestone", readTime: "3 min", image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80" },
  { id: 3, title: "Partnership with International Autism Foundation", excerpt: "A landmark partnership to bring world-class autism intervention techniques and training to Pakistan through Al-Lissan's centers.", date: "January 8, 2026", category: "Partnership", readTime: "5 min", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80" },
];

export const teamMembers = [
  { name: "President", role: "President & Founder", bio: "Visionary leader who founded Al-Lissan in 1996 with a mission to transform the lives of special children in Pakistan.", avatar: "P" },
  { name: "Director of Rehabilitation", role: "Director of Rehabilitation Services", bio: "Oversees all rehabilitation programs with over 20 years of experience in special education and therapy.", avatar: "DR" },
  { name: "Head of Training", role: "Head of Professional Courses", bio: "Leads the professional training division, developing curriculum for specialized therapy and education programs.", avatar: "HT" },
  { name: "Chief Therapist", role: "Chief Speech & Language Therapist", bio: "Expert clinician providing leadership in speech therapy protocols and training new therapists across all centers.", avatar: "CT" },
  { name: "Program Coordinator", role: "Program Coordinator - IFRA", bio: "Coordinates the autism rehabilitation program with a focus on evidence-based intervention strategies.", avatar: "PC" },
  { name: "Community Manager", role: "Community Outreach Manager", bio: "Builds bridges between Al-Lissan and communities, ensuring families have access to support and resources.", avatar: "CM" },
];

export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80", alt: "Children learning together", category: "Education" },
  { id: 2, src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80", alt: "Therapy session", category: "Therapy" },
  { id: 3, src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80", alt: "Community event", category: "Events" },
  { id: 4, src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80", alt: "Children playing", category: "Activities" },
  { id: 5, src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", alt: "Speech therapy", category: "Therapy" },
  { id: 6, src: "https://images.unsplash.com/photo-1523050854058-8df90110c5f1?w=600&q=80", alt: "Training workshop", category: "Training" },
  { id: 7, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", alt: "Annual conference", category: "Events" },
  { id: 8, src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80", alt: "New facility", category: "Facilities" },
  { id: 9, src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80", alt: "Team collaboration", category: "Team" },
];

export const annualReports = [
  { year: "2025", title: "Annual Report 2025", size: "4.2 MB" },
  { year: "2024", title: "Annual Report 2024", size: "3.8 MB" },
  { year: "2023", title: "Annual Report 2023", size: "3.5 MB" },
  { year: "2022", title: "Annual Report 2022", size: "3.1 MB" },
];

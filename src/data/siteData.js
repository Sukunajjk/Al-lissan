const getPath = (path) => {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') && path.startsWith('/')
    ? base + path.slice(1)
    : base + path;
};

export const siteConfig = {
  name: "Tanzeem-al-Lissan",
  tagline: "Empowering Special Children Since 1996",
  description: "A voluntary organization for special children, providing education, rehabilitation, and professional training since 1996.",
  phone: "+92-41-2600600",
  email: "info@tanzeemallissan.org",
  address: "Dhobi Ghat, Faisalabad, Pakistan",
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
      { name: "Our History", path: "/about", desc: "Our journey from 1996 to present" },
      { name: "Vision & Mission", path: "/vision-mission", desc: "Our guiding principles" },
      { name: "Leadership", path: "/team", desc: "Our dedicated team" },
    ],
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Programs",
    path: "/programs",
    children: [
      { name: "Hearing Impaired", path: "/programs/danish-center", desc: "Danish Centre & Sehara Centres" },
      { name: "Intellectual Challenge", path: "/programs/al-masoom", desc: "Al-Masoom Centre" },
      { name: "Autism (IFRA)", path: "/programs/ifra", desc: "Institute for Functional Rehab of Autism" },
      { name: "Physiotherapy", path: "/programs/physiotherapy", desc: "Physical Rehab & Mobile Unit" },
      { name: "Speech Therapy", path: "/programs/speech-therapy", desc: "Centre for Speech & Language Therapy" },
      { name: "Higher Education", path: "/programs/college", desc: "Danish Degree College & ADP IT" },
      { name: "Vocational Training", path: "/programs/vocational", desc: "Hunnar Ghah & Shelter Workshop" },
    ],
  },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export const stats = [
  { label: "Students Enrolled", value: 1500, suffix: "+", icon: "Users" },
  { label: "Years of Service", value: 30, suffix: "+", icon: "Calendar" },
  { label: "Rehab Centers", value: 20, suffix: "+", icon: "Building" },
  { label: "Graduates", value: 5000, suffix: "+", icon: "GraduationCap" },
  { label: "Staff Members", value: 200, suffix: "+", icon: "Users" },
];

export const services = [
  { 
    id: "audiometry",
    title: "Audiometry & Assessment", 
    desc: "Complete hearing assessment including PTA, Tympanometry, and ABR by qualified audiologists.", 
    icon: "Ear",
    image: getPath("/111.jpg"),
    longDesc: "Our Audiometry clinic, established in 2004, is equipped with state-of-the-art diagnostic tools including Pure Tone Audiometry, Tympanometry, and Brainstem Evoked Response Audiometry (BERA/ABR). We provide free assessments to ensure early detection and management of hearing impairments."
  },
  { 
    id: "speech-therapy",
    title: "Speech & Language Therapy", 
    desc: "Evidence-based therapy for speech delays, articulation issues, and communication disorders.", 
    icon: "MessageCircle",
    image: getPath("/900.600-1.png"),
    longDesc: "This clinical unit deals with communication, speech, language, and swallowing disorders. Our multidisciplinary team treats conditions like aphasia, apraxia, stammering, and cleft palate. We offer individual and group sessions for children and adults to improve functional communication."
  },
  { 
    id: "physiotherapy",
    title: "Physiotherapy & Rehab", 
    desc: "Rehabilitation for CP, stroke, and physical disabilities, including a Mobile Unit for home care.", 
    icon: "Activity",
    image: getPath("/cover.contact.jpg"),
    longDesc: "We provide comprehensive physical rehabilitation for Cerebral Palsy, stroke, and musculoskeletal conditions. Services include gait training, pain management, and sensory integration. Our new Mobile Physiotherapy Unit ensures home-based care for those unable to travel."
  },
  { 
    id: "psychological-services",
    title: "Psychological Services", 
    desc: "IQ testing, behavioral assessment, and counseling for emotional well-being.", 
    icon: "Brain",
    image: getPath("/900.600.png"),
    longDesc: "Our clinical psychologists conduct standardized assessments (IQ, behavioral analysis) and provide counseling for emotional and behavioral challenges (ADHD, ODD). We support families with guidance on managing developmental disorders and fostering mental health."
  },
  { 
    id: "occupational-therapy",
    title: "Occupational Therapy", 
    desc: "Enhancing fine motor skills and sensory integration for daily living independence.", 
    icon: "Activity",
    image: getPath("/720.800.png"),
    longDesc: "Focused on developing independence, our OT unit works on fine motor skills, sensory processing, and self-care activities. We help children with autism and developmental delays master daily tasks and improve their quality of life."
  },
  { 
    id: "vocational-training",
    title: "Vocational Training", 
    desc: "Market-oriented skills training (IT, Repairing, Tailoring) for economic independence.", 
    icon: "Wrench",
    image: getPath("/bn_slider.jpg"),
    longDesc: "Hunnar Ghah offers courses in computer applications, mobile repairing, AC/fridge repair, tailoring, and beautician skills. Our goal is to empower special needs youth to become largely self-reliant and productive members of society."
  },
];

export const initiatives = [
  {
    title: "Mobile Physiotherapy Unit",
    year: "2026",
    desc: "Bringing physiotherapy to the doorsteps of physically challenged individuals in rural areas who cannot afford travel.",
    icon: "Truck",
    bg: "bg-blue-600",
    link: "/programs/mobile-physiotherapy"
  },
  {
    title: "Inclusive Education Pilot",
    year: "2026",
    desc: "Integrating special needs children into mainstream classrooms at Dhobi Ghat Main Campus and 10 Sehara Centres.",
    icon: "Users",
    bg: "bg-emerald-600",
    link: "/programs/inclusive-education"
  },
  {
    title: "ADP in IT (Hearing Impaired)",
    year: "2025",
    desc: "A unique degree program exclusively for hearing-impaired students to master IT skills and gain employment.",
    icon: "Laptop",
    bg: "bg-purple-600",
    link: "/programs/adp-it"
  },
];

export const partners = [
  "Punjab Welfare Trust for the Disabled",
  "Government of Japan",
  "TVO",
  "GC University Faisalabad",
  "University of Education Lahore",
  "Punjab Board of Technical Education",
  "TEVTA",
];

export const processSteps = [
  {
    step: "01",
    title: "Assessment & Diagnosis",
    desc: "Comprehensive multidisciplinary assessment to evaluate developmental levels, communication skills, and functional independence.",
    icon: "ClipboardCheck",
  },
  {
    step: "02",
    title: "Individualized Planning",
    desc: "Customized Individualized Education Plans (IEPs) and treatment plans designed to match each child's unique abilities and needs.",
    icon: "FileHeart",
  },
  {
    step: "03",
    title: "Intervention & Therapy",
    desc: "Structured educational and therapeutic sessions (Speech, Physiotherapy, ABA, etc.) delivered by qualified professionals.",
    icon: "Heart",
  },
  {
    step: "04",
    title: "Review & Integration",
    desc: "Continuous progress monitoring, follow-ups, and preparation for mainstream education or vocational independence.",
    icon: "TrendingUp",
  },
];

export const impactStories = [
  {
    name: "Inclusive Education Pilot",
    age: "2026",
    program: "Mainstream Integration",
    before: "Limited opportunities for special needs children in regular schools.",
    after: "Launched pilot project in Dhobi Ghat Main Campus and ten Sehara Centres for equal learning opportunities.",
    duration: "Ongoing",
    image: getPath("/111.jpg"),
  },
  {
    name: "ADP IT Student",
    age: "Young Adult",
    program: "Higher Education",
    before: "Faced barriers to higher education due to hearing impairment.",
    after: "Pursuing Associate Degree in IT exclusively designed for hearing-impaired students to gain employable skills.",
    duration: "2 Years",
    image: getPath("/admission-form-TAL-pdf.jpg"),
  },
  {
    name: "Rural Outreach",
    age: "Community",
    program: "Mobile Physiotherapy",
    before: "Physically challenged individuals in rural areas could not afford or access regular treatment.",
    after: "Mobile Physiotherapy Unit now provides home-based therapy to underserved patients.",
    duration: "New Launch",
    image: getPath("/cover.contact.jpg"),
  },
];

export const whyChooseUs = [
  { title: "30 Years of Excellence", desc: "Serving special needs since 1996, evolving from a small center to a leading institution in Punjab.", icon: "Award" },
  { title: "Holistic Development", desc: "Combining academics, therapy, vocational training, and co-curricular activities like sports and arts.", icon: "Layers" },
  { title: "Affordable Quality Care", desc: "High-quality services at the most affordable cost, ensuring no child is deprived due to financial limitations.", icon: "Heart" },
  { title: "Comprehensive Services", desc: "From assessment and early intervention to degree programs and vocational training.", icon: "BookOpen" },
  { title: "Qualified Professionals", desc: "Dedicated team of psychologists, speech therapists, physiotherapists, and special educators.", icon: "Users" },
  { title: "Rural Outreach", desc: "Extensive network of Sehara Centres and Mobile Units reaching underserved communities.", icon: "Globe" },
];

export const programs = [
  {
    id: "danish-center",
    title: "Danish Centre for Hearing Impaired",
    shortTitle: "Hearing Impaired Education",
    description: "Providing specialized education from Nursery to Matric for hearing-impaired children. Features multi-sensory rooms, speech therapy, and free hearing aids. Established in 1996, it has grown from 6 students to over 200, following the Early Years Foundation Stage Framework.",
    icon: "Ear",
    image: getPath("/111.jpg"),
    badge: "Flagship",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "sehara-centres",
    title: "Sehara Centres (Rural Outreach)",
    shortTitle: "Rural Education (SEHARA)",
    description: "Project SEHARA (Special Education for Hearing impaired in Accessible Rural Areas) operates 15 centres in rural Faisalabad (e.g., Satiana, Shahkot). It brings quality education, free hearing aids, and vocational training to children in remote villages who would otherwise lack access.",
    icon: "Globe",
    image: getPath("/900.600-1.png"),
    badge: "Rural Outreach",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "al-masoom",
    title: "Al-Masoom Centre for Intellectually Challenged",
    shortTitle: "Intellectual Development",
    description: "Specialized units for CP, Down Syndrome, ADHD, Autism, and slow learners. Uses Individualized Education Plans (IEPs) focusing on cognition, self-help skills, and behavior management. Facilities include free transport and lunch.",
    icon: "Brain",
    image: getPath("/900.600.png"),
    badge: null,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "ifra",
    title: "Institute for Functional Rehab of Autism (IFRA)",
    shortTitle: "Autism Rehabilitation",
    description: "Scientific, evidence-based interventions (ABA, TEACCH, PECS) for children with Autism Spectrum Disorder. Includes sensory integration, occupational therapy, and virtual learning groups. Recognized as a leading autism provider in Faisalabad.",
    icon: "Sparkles", 
    image: getPath("/720.800.png"),
    badge: "Specialized",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "physiotherapy",
    title: "Centre for Physically Challenged",
    shortTitle: "Physiotherapy & Rehab",
    description: "Comprehensive physiotherapy for children and adults (CP, Stroke, Trauma). Features advanced therapeutic equipment, gait training, and multidisciplinary assessment. Supports holistic development alongside physical rehabilitation.",
    icon: "Activity", 
    image: getPath("/cover.contact.jpg"),
    badge: "Mobile Unit Available",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "college",
    title: "Danish Degree College of Special Education",
    shortTitle: "Higher Education",
    description: "An HEC-recognized institution offering intermediate, degree, and postgraduate programs. Includes the unique ADP in Information Technology for hearing-impaired students, B.Ed, and Diplomas in Speech Therapy & Autism. Focuses on professional skills and employability.",
    icon: "GraduationCap",
    image: getPath("/admission-form-TAL-pdf.jpg"),
    badge: "Higher Ed",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "vocational",
    title: "Hunnar Ghah & Shelter Workshop",
    shortTitle: "Vocational Skills",
    description: "Vocational training units for male and female students. Courses include Computer Graphics, Mobile Repair, Beautician, and Tailoring. The Shelter Workshop provides supervised income-generation opportunities for trained female students.",
    icon: "Wrench", 
    image: getPath("/720.800.png"),
    badge: "Shelter Workshop",
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: "deaf-club",
    title: "Danish Deaf Club",
    shortTitle: "Social & Community",
    description: "A social platform fostering inclusion, leadership, and recreation for the deaf community. Organizes sports, cultural events, and peer support groups to reduce isolation and build confidence.",
    icon: "Users",
    image: getPath("/bn_slider.jpg"),
    badge: null,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: "speech-therapy",
    title: "Centre for Speech & Language Therapy",
    shortTitle: "Speech Therapy",
    description: "Provides clinical assessment and therapy for speech delays, stammering, aphasia, and swallowing disorders. Uses a multidisciplinary approach involving psychologists and audiologists to treat children and adults.",
    icon: "MessageCircle", 
    image: getPath("/900.600-1.png"),
    badge: null,
    color: "from-orange-500 to-red-600",
  },
  {
    id: "psychology",
    title: "Psychological Services",
    shortTitle: "Psychology",
    description: "Standardized IQ testing, behavioral management plans, and counseling for parents and siblings. Addresses emotional and behavioral issues like ADHD, ODD, and anxiety with professional psychological support.",
    icon: "Brain",
    image: getPath("/111.jpg"),
    badge: null, 
    color: "from-pink-500 to-rose-600",
  }
];

export const testimonials = [
  {
    name: "Parent",
    role: "Mother of HIC Student",
    text: "Tanzeem-al-Lissan has given my child a voice. The free hearing aids and speech therapy have made a world of difference.",
    avatar: "P",
    gradient: "from-primary-500 to-accent-500",
    rating: 5,
  },
  {
    name: "Alumni",
    role: "Graduate, Danish Degree College",
    text: "Thanks to the ADP IT program, I now have a job in the tech sector. This institution doesn't just teach; it empowers.",
    avatar: "A",
    gradient: "from-accent-500 to-primary-600",
    rating: 5,
  },
  {
    name: "Community Member",
    role: "Local Supporter",
    text: "Their rural outreach with Sehara Centres is commendable. They are reaching children who would otherwise be forgotten.",
    avatar: "C",
    gradient: "from-primary-600 to-primary-400",
    rating: 5,
  },
];

export const faqs = [
  { question: "What services do you offer for hearing-impaired children?", answer: "We provide comprehensive education from Nursery to Matric, hearing assessment, free hearing aids, speech therapy, and higher education through Danish Degree College." },
  { question: "Do you have programs for children with Autism?", answer: "Yes, our IFRA (Institute for Functional Rehab of Autism) offers evidence-based interventions like ABA, TEACCH, and sensory integration therapy." },
  { question: "Is there support for adults or vocational training?", answer: "Absolutely. We have Hunnar Ghah for vocational training (computers, mobile repair, tailoring) and a Shelter Workshop for female students to earn an income." },
  { question: "Do you provide services in rural areas?", answer: "Yes, we have 15 Sehara Centres in rural areas and a Mobile Physiotherapy Unit to reach underserved communities." },
  { question: "How can I enroll my child?", answer: "You can visit our main campus at Dhobi Ghat, Faisalabad, or any of our Sehara Centres for an initial assessment." },
];

export const newsArticles = [
  { id: 1, title: "Launch of Mobile Physiotherapy Unit", excerpt: "New mobile unit launched to provide home-based therapy for physically impaired individuals in 2026.", date: "2026", category: "New Launch", readTime: "2 min", image: getPath("/cover.contact.jpg") },
  { id: 2, title: "Inclusive Education Pilot Project", excerpt: "Tanzeem-al-Lissan starts Inclusive Education at Dhobi Ghat Main Campus and ten Sehara Centres.", date: "2026", category: "Education", readTime: "3 min", image: getPath("/111.jpg") },
  { id: 3, title: "ADP in Information Technology", excerpt: "Unique degree program launched exclusively for hearing-impaired students to acquire IT skills.", date: "2025", category: "Academics", readTime: "3 min", image: getPath("/admission-form-TAL-pdf.jpg") },
];

export const teamMembers = [
  { name: "Dr. Iftikhar Ahmed", role: "Founder & President", bio: "Founded Tanzeem-al-Lissan in 1996. Visionary leader dedicated to the empowerment of persons with disabilities.", avatar: "IA", image: getPath("/ceo.png") },
];

export const galleryImages = [
  { id: 1, src: getPath("/111.jpg"), alt: "Special Education Classroom", category: "Education" },
  { id: 2, src: getPath("/720.800-2.png"), alt: "Autism Therapy", category: "Therapy" },
  { id: 3, src: getPath("/720.800.png"), alt: "Vocational Training", category: "Training" },
  { id: 4, src: getPath("/720.800-3.png"), alt: "Hearing Impaired Students", category: "Education" },
  { id: 5, src: getPath("/720.800-4.png"), alt: "Physiotherapy Session", category: "Therapy" },
  { id: 6, src: getPath("/600.400-1-1536x1024.png"), alt: "Community Event", category: "Events" },
  { id: 7, src: getPath("/bn_slider.jpg"), alt: "Computer Lab", category: "Facilities" },
  { id: 8, src: getPath("/900.600-1.png"), alt: "Sports Day", category: "Activities" },
  { id: 9, src: getPath("/cover.contact.jpg"), alt: "Staff Training", category: "Team" },
];

export const presidentMessage = {
  name: "Dr. Iftikhar Ahmed",
  title: "President's Message",
  message: "Welcome to Tanzeem-al-Lissan, Faisalabad, an organization proudly serving individuals with special needs since 1996. What began with just six hearing-impaired students has grown into one of Punjab's leading institutions for special education, rehabilitation, and professional training.\n\nWe provide comprehensive educational, therapeutic, and rehabilitation services for individuals who are hearing impaired, intellectually challenged, physically challenged, and autistic, including outreach services for underserved rural communities. Our programs are designed to support learning, communication, independence, and overall well-being at every stage of life.\n\nIn addition to education and rehabilitation services, Tanzeem-al-Lissan offers Postgraduate Diploma (PGD) courses in Speech and Language Therapy (SLT), Autism Spectrum Disorder (ASD), and Clinical Psychology, as well as degree programs in Special Education, Computer Science, Psychology, and English Linguistics to prepare skilled professionals for the special needs sector. The organization also offers a degree program in Information Technology exclusively for hearing-impaired students, enabling them to develop technical skills and pursue independent careers.\n\nOur approach emphasizes holistic development, combining academics, therapy, vocational training, and co-curricular activities such as sports, arts, and life-skills education. We work in close partnership with parents and families to ensure every learner receives personalized care and support.\n\nOur mission is to empower individuals with disabilities to live with dignity, independence, and hope. We are honored by your trust and invite you to be part of this meaningful journey.",
  signature: "Founder & President, Tanzeem-al-Lissan",
  image: getPath("/ceo.png"),
};

export const timeline = [
  { year: "1996", title: "Foundation", desc: "Established Danish Centre for Hearing-Impaired Children with 6 students in Faisalabad." },
  { year: "1998", title: "Al-Masoom Centre", desc: "Launched Al-Masoom Centre for intellectually challenged children." },
  { year: "1999", title: "Sehara Centres I", desc: "Established 5 Sehara Centres in rural areas (Chak 58 JB, 102 JB, etc.)." },
  { year: "2000", title: "Expansion & Magazine", desc: "Launched 5 more Sehara Centres and Al-Lissan Magazine for awareness." },
  { year: "2001", title: "Training & Outreach", desc: "Added 5 Sehara Centres (Satiana, etc.) and initiated Staff Training Program." },
  { year: "2002", title: "Physiotherapy", desc: "Established 4 Physiotherapy Centres for physical rehabilitation." },
  { year: "2003", title: "Dastak Outreach", desc: "House-based outreach program for counseling and rehabilitation." },
  { year: "2004", title: "Audiology & IT", desc: "Launched state-of-the-art Audiology Clinic and Computer Training Centre." },
  { year: "2005", title: "Vocational Focus", desc: "Established 7 Vocational Training Centres and Parent Support Programs." },
  { year: "2006", title: "Speech Therapy", desc: "Introduced Center for Speech & Language Therapy." },
  { year: "2007", title: "Autism Centre", desc: "Specialized setup for Autism Spectrum Disorder at Al-Masoom Centre." },
  { year: "2008", title: "Danish College", desc: "Upgraded Danish Centre to an Intermediate-level Special Education College." },
  { year: "2009", title: "Gymnasium", desc: "Modern gym established for physical fitness and physiotherapy." },
  { year: "2010", title: "Resource Centre", desc: "Inaugurated Library & Resource Centre with over 1400 books." },
  { year: "2011", title: "Degree College", desc: "Upgraded to Danish Degree College of Special Education." },
  { year: "2012", title: "Huner Gah", desc: "Skill Development Centre launched for vocational training." },
  { year: "2013", title: "Physical Disability", desc: "Dedicated Centre for Children with Physical Disabilities launched." },
  { year: "2014", title: "Nutrition Program", desc: "Started nutritional program with qualified nutritionists." },
  { year: "2015", title: "PGD in SLT", desc: "Launched Postgraduate Diploma in Speech & Language Therapy." },
  { year: "2016", title: "Adult Support", desc: "Initiated 'Dar-ul-Sakoon' therapy centre and Shelter Workshop for women." },
  { year: "2017", title: "Postgraduate & Arts", desc: "Upgraded to Postgraduate College; launched MA Fine Arts (Special)." },
  { year: "2018", title: "Second Shift", desc: "Started second shift to accommodate increasing enrollment." },
  { year: "2020", title: "IFRA", desc: "Established Institute for Functional Rehabilitation of Autism (IFRA)." },
  { year: "2021", title: "B.Ed Classes", desc: "Introduced B.Ed Secondary classes for future educators." },
  { year: "2022", title: "PGD in ASD", desc: "Launched Postgraduate Diploma in Autism Spectrum Disorders." },
  { year: "2023", title: "TEVTA Courses", desc: "Toyota-approved short courses in computer graphics and office management." },
  { year: "2024", title: "ADPs Launched", desc: "Started Associate Degree Programs in Special Education, English, and CS." },
  { year: "2025", title: "New Horizons", desc: "Launched ADP in IT for Hearing Impaired, OT Room, and Inclusive Classroom." },
  { year: "2026", title: "Future Vision", desc: "Pilot Inclusive Education project and Mobile Physiotherapy Unit launched." },
];

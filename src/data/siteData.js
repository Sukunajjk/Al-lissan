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
    desc: "Pure tone audiometry, tympanometry, and ABR for precise hearing diagnosis.", 
    icon: "Ear",
    image: "https://images.unsplash.com/photo-1579684385180-1ea55f9f4931?w=600&q=80",
    longDesc: "Our Audiometry department is equipped with state-of-the-art diagnostic tools to detect hearing impairments at an early stage. We offer Pure Tone Audiometry (PTA), Tympanometry, and Brainstem Evoked Response Audiometry (BERA/ABR) to ensure accurate diagnosis and appropriate intervention fitting."
  },
  { 
    id: "speech-therapy",
    title: "Speech & Language Therapy", 
    desc: "Individualized therapy for speech delays, stammering, and articulation disorders.", 
    icon: "MessageCircle",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c5f1?w=600&q=80",
    longDesc: "Our qualified Speech and Language Pathologists work with children and adults facing communication challenges. We treat speech delays, stammering, articulation disorders, and voice problems using evidence-based techniques to improve verbal and non-verbal communication skills."
  },
  { 
    id: "physiotherapy",
    title: "Physiotherapy", 
    desc: "On-campus and mobile physiotherapy for CP, stroke, and physical disabilities.", 
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    longDesc: "We provide comprehensive physical rehabilitation services for Cerebral Palsy (CP), stroke recovery, and musculoskeletal disorders. Our center features modern gymnasiums, gait training equipment, and a Mobile Physiotherapy Unit that brings care to patients' doorsteps in rural areas."
  },
  { 
    id: "psychological-assessment",
    title: "Psychological Assessment", 
    desc: "IQ testing, behavioral assessment, and personality development monitoring.", 
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&q=80",
    longDesc: "Our clinical psychologists conduct standardized assessments including IQ tests, behavioral analysis, and personality evaluations. We develop individualized behavior management plans and provide counseling to support the emotional well-being of students and their families."
  },
  { 
    id: "occupational-therapy",
    title: "Occupational Therapy", 
    desc: "Sensory integration and fine motor skill development.", 
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80",
    longDesc: "Our Occupational Therapy unit focuses on enhancing daily living skills, sensory integration, and fine motor development. We help children with autism and developmental delays achieve independence in self-care, play, and academic activities."
  },
  { 
    id: "vocational-training",
    title: "Vocational Training", 
    desc: "Computer courses, mobile repair, tailoring, and beautician training.", 
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=600&q=80",
    longDesc: "We believe in economic empowerment. Our vocational centers (Hunnar Ghah) offer practical training in computer applications, mobile repairing, tailoring, embroidery, and beautician courses, enabling our students to earn a dignified livelihood."
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
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&q=80",
  },
  {
    name: "ADP IT Student",
    age: "Young Adult",
    program: "Higher Education",
    before: "Faced barriers to higher education due to hearing impairment.",
    after: "Pursuing Associate Degree in IT exclusively designed for hearing-impaired students to gain employable skills.",
    duration: "2 Years",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&q=80",
  },
  {
    name: "Rural Outreach",
    age: "Community",
    program: "Mobile Physiotherapy",
    before: "Physically challenged individuals in rural areas could not afford or access regular treatment.",
    after: "Mobile Physiotherapy Unit now provides home-based therapy to underserved patients.",
    duration: "New Launch",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
    badge: "Flagship",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "al-masoom",
    title: "Al-Masoom Centre for Intellectually Challenged",
    shortTitle: "Intellectual Development",
    description: "Specialized units for CP, Down Syndrome, ADHD, Autism, and slow learners. Uses Individualized Education Plans (IEPs) focusing on cognition, self-help skills, and behavior management. Facilities include free transport and lunch.",
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    badge: null,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "ifra",
    title: "Institute for Functional Rehab of Autism (IFRA)",
    shortTitle: "Autism Rehabilitation",
    description: "Scientific, evidence-based interventions (ABA, TEACCH, PECS) for children with Autism Spectrum Disorder. Includes sensory integration, occupational therapy, and virtual learning groups. Recognized as a leading autism provider in Faisalabad.",
    icon: "Sparkles", 
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    badge: "Specialized",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "physiotherapy",
    title: "Centre for Physically Challenged",
    shortTitle: "Physiotherapy & Rehab",
    description: "Comprehensive physiotherapy for children and adults (CP, Stroke, Trauma). Features advanced therapeutic equipment, gait training, and multidisciplinary assessment. Supports holistic development alongside physical rehabilitation.",
    icon: "Activity", 
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    badge: null,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "mobile-physiotherapy",
    title: "Mobile Physiotherapy Unit",
    shortTitle: "Mobile Physio Unit",
    description: "In 2026, Tanzeem-al-Lissan launched a Mobile Physiotherapy Unit to provide home-based therapy for physically challenged individuals who cannot afford regular treatment. This initiative ensures accessible, professional rehabilitation and improves the quality of life for underserved patients in rural and urban areas.",
    icon: "Truck", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    badge: "2026 Innovation",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "inclusive-education",
    title: "Inclusive Education Pilot Project",
    shortTitle: "Inclusive Education",
    description: "Tanzeem-al-Lissan launched a pilot project on Inclusive Education in 2026 at its Dhobi Ghat Main Campus and ten Sehara Centres. This initiative creates equal learning opportunities for children of all abilities, fostering their integration into mainstream education and promoting acceptance and social cohesion.",
    icon: "Users", 
    image: "https://images.unsplash.com/photo-1427504743055-b72976e3d71e?w=600&q=80",
    badge: "New 2026",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "speech-therapy",
    title: "Centre for Speech & Language Therapy",
    shortTitle: "Speech Therapy",
    description: "Assessment and therapy for speech delays, stammering, articulation disorders, and hearing impairment-related communication challenges. Deals with aphasia, apraxia, and swallowing difficulties using a multidisciplinary approach.",
    icon: "MessageCircle", 
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c5f1?w=600&q=80",
    badge: null,
    color: "from-orange-500 to-red-600",
  },
  {
    id: "college",
    title: "Danish Degree College of Special Education",
    shortTitle: "Higher Education",
    description: "Offering degree programs to empower students with professional qualifications. Programs include B.Ed and previously offered MA Fine Arts. Recognized for top positions in board and university examinations.",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    badge: "Higher Ed",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "adp-it",
    title: "ADP in Information Technology",
    shortTitle: "ADP IT (Hearing Impaired)",
    description: "A unique Associate Degree Program exclusively designed for hearing-impaired students to acquire practical and employable IT skills. Focuses on software applications, programming, and digital tools to enhance employability and economic independence.",
    icon: "Laptop",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    badge: "Specialized Degree",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: "vocational",
    title: "Vocational Training (Hunnar Ghah)",
    shortTitle: "Vocational Skills",
    description: "Computer training, mobile repairing, tailoring, and beauty courses to ensure economic independence for special needs youth. Includes a Shelter Workshop for female students to provide supervised income-generation opportunities.",
    icon: "Wrench", 
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=600&q=80",
    badge: "Shelter Workshop",
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: "deaf-club",
    title: "Danish Deaf Club",
    shortTitle: "Social & Community",
    description: "A platform for social inclusion, recreation, and community engagement for the deaf community. Promoting leadership and emotional well-being through sports, cultural events, and peer support.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    badge: null,
    color: "from-teal-500 to-cyan-600",
  },
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
  { id: 1, title: "Launch of Mobile Physiotherapy Unit", excerpt: "New mobile unit launched to provide home-based therapy for physically impaired individuals in 2026.", date: "2026", category: "New Launch", readTime: "2 min", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
  { id: 2, title: "Inclusive Education Pilot Project", excerpt: "Tanzeem-al-Lissan starts Inclusive Education at Dhobi Ghat Main Campus and ten Sehara Centres.", date: "2026", category: "Education", readTime: "3 min", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&q=80" },
  { id: 3, title: "ADP in Information Technology", excerpt: "Unique degree program launched exclusively for hearing-impaired students to acquire IT skills.", date: "2025", category: "Academics", readTime: "3 min", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" },
];

export const teamMembers = [
  { name: "Dr. Iftikhar Ahmed", role: "Founder & President", bio: "Founded Tanzeem-al-Lissan in 1996. Visionary leader dedicated to the empowerment of persons with disabilities.", avatar: "IA" },
];

export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80", alt: "Special Education Classroom", category: "Education" },
  { id: 2, src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80", alt: "Autism Therapy", category: "Therapy" },
  { id: 3, src: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=600&q=80", alt: "Vocational Training", category: "Training" },
  { id: 4, src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80", alt: "Hearing Impaired Students", category: "Education" },
  { id: 5, src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", alt: "Physiotherapy Session", category: "Therapy" },
  { id: 6, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80", alt: "Community Event", category: "Events" },
  { id: 7, src: "https://images.unsplash.com/photo-1523050854058-8df90110c5f1?w=600&q=80", alt: "Computer Lab", category: "Facilities" },
  { id: 8, src: "https://images.unsplash.com/photo-1516627145497-ae691b534d03?w=600&q=80", alt: "Sports Day", category: "Activities" },
  { id: 9, src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80", alt: "Staff Training", category: "Team" },
];

export const presidentMessage = {
  name: "Dr. Iftikhar Ahmed",
  title: "President's Message",
  message: "Welcome to Tanzeem-al-Lissan, Faisalabad, an organization proudly serving individuals with special needs since 1996. What began with just six hearing-impaired students has grown into one of Punjab's leading institutions for special education, rehabilitation, and professional training.\n\nWe provide comprehensive educational, therapeutic, and rehabilitation services for individuals who are hearing impaired, intellectually challenged, physically challenged, and autistic, including outreach services for underserved rural communities. Our programs are designed to support learning, communication, independence, and overall well-being at every stage of life.\n\nIn addition to education and rehabilitation services, Tanzeem-al-Lissan offers Postgraduate Diploma (PGD) courses in Speech and Language Therapy (SLT), Autism Spectrum Disorder (ASD), and Clinical Psychology, as well as degree programs in Special Education, Computer Science, Psychology, and English Linguistics to prepare skilled professionals for the special needs sector. The organization also offers a degree program in Information Technology exclusively for hearing-impaired students, enabling them to develop technical skills and pursue independent careers.\n\nOur approach emphasizes holistic development, combining academics, therapy, vocational training, and co-curricular activities such as sports, arts, and life-skills education. We work in close partnership with parents and families to ensure every learner receives personalized care and support.\n\nOur mission is to empower individuals with disabilities to live with dignity, independence, and hope. We are honored by your trust and invite you to be part of this meaningful journey.",
  signature: "Founder & President, Tanzeem-al-Lissan",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
};

export const timeline = [
  { year: "1996", title: "Foundation", desc: "Established Danish Centre for Hearing-Impaired Children with 6 students." },
  { year: "1998", title: "Al-Masoom Centre", desc: "Launched centre for intellectually challenged children." },
  { year: "1999", title: "Sehara Centres", desc: "Started outreach with Sehara Centres in rural areas." },
  { year: "2002", title: "Physiotherapy", desc: "Established Physiotherapy Centres for physical disabilities." },
  { year: "2004", title: "Audiology & IT", desc: "Launched Audiology Clinic and Computer Centre." },
  { year: "2005", title: "Vocational Training", desc: "Established Vocational Training Centres and Parent Support Programs." },
  { year: "2007", title: "Autism Centre", desc: "Specialized setup for Autism Spectrum Disorder created." },
  { year: "2011", title: "Degree College", desc: "Upgraded to Danish Degree College of Special Education." },
  { year: "2013", title: "Physical Disability Centre", desc: "Dedicated facility launched at Al-Masoom Centre." },
  { year: "2016", title: "Dar-ul-Sakoon", desc: "Psychological therapy centre for adults initiated." },
  { year: "2020", title: "IFRA", desc: "Established Institute for Functional Rehabilitation of Autism (IFRA)." },
  { year: "2025", title: "New Programs", desc: "Launched ADP in IT, OT Room, and Inclusive Classroom." },
  { year: "2026", title: "Innovation", desc: "Started Inclusive Education pilot and launched Mobile Physiotherapy Unit." },
];

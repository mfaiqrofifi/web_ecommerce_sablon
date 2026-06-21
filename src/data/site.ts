import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  Factory,
  Flame,
  Layers,
  PackageCheck,
  Palette,
  Printer,
  Shirt,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export const siteConfig = {
  name: "Lancar Konveksi Bordir & Sablon",
  legalName: "Lancar Konveksi Bordir Komputer dan Sablon",
  tagline: "Konveksi, Bordir Komputer & Sablon Custom",
  baseUrl: "https://lancarclothingsablon.com",
  phone: "0858-5689-6471",
  whatsapp: "6285856896471",
  instagram: "@lancarclothing_sablon",
  instagramUrl: "https://www.instagram.com/lancarclothing_sablon/",
  email: "order@lancarkonveksi.com",
  googleMapsUrl:
    "https://www.google.com/maps/place/Lancar+Konveksi+Bordir+Komputer+dan+Sablon/@-7.6215976,112.0961986,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7847002973ad85:0xca2fdac7fe5f5a97!8m2!3d-7.6215976!4d112.0961986!16s%2Fg%2F11x7wgpv3k",
  googleCidUrl: "https://maps.google.com/?cid=14569103872067852951",
  googleRating: {
    value: 3.9,
    count: 30,
  },
  address: {
    street: "Jalan Raya Juwono No.3, RT.02/RW.03, Sambijajar, Bangsri, Kec. Kertosono",
    city: "Nganjuk",
    region: "Jawa Timur",
    country: "ID",
    postalCode: "64315",
    display:
      "Jalan Raya Juwono No.3, RT.02/RW.03, Sambijajar, Bangsri, Kec. Kertosono, Kabupaten Nganjuk, Jawa Timur 64315",
  },
  hours: "Senin-Sabtu, 08.00-17.00 WIB",
  geo: {
    latitude: -7.6215976,
    longitude: 112.0961986,
  },
};

export const targetKeywords = [
  "konveksi kertosono",
  "konveksi nganjuk",
  "jasa sablon kertosono",
  "jasa sablon nganjuk",
  "tempat bikin kaos kertosono",
  "tempat bikin kaos nganjuk",
  "kaos custom kertosono",
  "kaos custom nganjuk",
  "buat jersey kertosono",
  "buat jersey nganjuk",
  "hoodie custom kertosono",
  "seragam kerja nganjuk",
  "seragam komunitas kertosono",
  "vendor merchandise nganjuk",
  "sablon plastisol kertosono",
  "sablon dtf kertosono",
  "pesan kaos satuan kertosono",
  "pesan kaos partai nganjuk",
  "konveksi terdekat",
  "tempat sablon terdekat",
];

export const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang" },
  { href: "/produk", label: "Produk" },
  { href: "/layanan", label: "Layanan" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/kontak", label: "Kontak" },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  priceRange: string;
  material: string;
  minimumOrder: string;
  image: string;
  video?: string;
  poster?: string;
  description: string;
  keywords: string[];
  relatedServices: string[];
};

export const products: Product[] = [
  {
    slug: "kaos-sablon-custom",
    name: "Kaos Sablon Custom",
    category: "Kaos Custom",
    priceRange: "Mulai Rp50.000/pcs",
    material: "Cotton combed 24s / 30s",
    minimumOrder: "Bisa satuan dan partai",
    image: "/videos/kaos-sablon-dtf-poster.jpg",
    video: "/videos/kaos-sablon-dtf.mp4",
    poster: "/videos/kaos-sablon-dtf-poster.jpg",
    description:
      "Kaos sablon custom untuk komunitas, perusahaan, sekolah, event, dan brand lokal.",
    keywords: ["jasa sablon kertosono", "kaos custom kertosono", "tempat bikin kaos nganjuk", "pesan kaos satuan kertosono"],
    relatedServices: ["jasa-sablon-kaos", "konveksi-kaos"],
  },
  {
    slug: "hoodie-custom",
    name: "Hoodie Custom",
    category: "Hoodie",
    priceRange: "Custom quotation",
    material: "Fleece / baby terry",
    minimumOrder: "Mulai 12 pcs",
    image: "/images/produk-hoodie-varsity.webp",
    description:
      "Hoodie custom dengan pilihan sablon DTF, plastisol, atau bordir untuk brand lokal, komunitas, dan merchandise.",
    keywords: ["hoodie custom kertosono", "sablon hoodie", "sablon plastisol kertosono", "bordir hoodie"],
    relatedServices: ["sablon-hoodie", "jasa-sablon-kaos"],
  },
  {
    slug: "jersey-custom",
    name: "Jersey Custom",
    category: "Jersey",
    priceRange: "Custom quotation",
    material: "Dryfit / milano",
    minimumOrder: "Mulai 12 pcs",
    image: "/images/produk-jersey-custom.webp",
    description:
      "Jersey custom untuk futsal, komunitas olahraga, sekolah, dan event dengan desain full color.",
    keywords: ["buat jersey kertosono", "buat jersey nganjuk", "jersey custom", "sablon DTF"],
    relatedServices: ["jersey-custom"],
  },
  {
    slug: "seragam-komunitas",
    name: "Seragam Komunitas",
    category: "Seragam",
    priceRange: "Custom quotation",
    material: "Cotton, drill, lacoste",
    minimumOrder: "Mulai 24 pcs",
    image: "/images/kemeja-workshirt-hitam.jpeg",
    description:
      "Seragam komunitas, sekolah, cafe, kantor, dan organisasi dengan pilihan bordir atau sablon.",
    keywords: ["seragam kerja nganjuk", "seragam komunitas kertosono", "konveksi seragam", "bordir seragam"],
    relatedServices: ["konveksi-seragam"],
  },
  {
    slug: "merchandise-perusahaan",
    name: "Merchandise Perusahaan",
    category: "Merchandise",
    priceRange: "Custom quotation",
    material: "Kaos, tote bag, topi, lanyard, dan gift set",
    minimumOrder: "Mulai 50 pcs",
    image: "/images/kemeja-bordir-putih.jpeg",
    description:
      "Paket merchandise perusahaan untuk event, onboarding karyawan, campaign, dan promosi brand.",
    keywords: ["vendor merchandise nganjuk", "merchandise perusahaan", "custom corporate merchandise"],
    relatedServices: ["merchandise-perusahaan"],
  },
];

export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  useCase: string;
  keywords: string[];
  faqs: FAQItem[];
  relatedProducts: string[];
};

export const services: Service[] = [
  {
    slug: "jasa-sablon-kaos",
    title: "Jasa Sablon Kaos",
    metaTitle: "Jasa Sablon Kaos Kertosono Nganjuk | Lancar Konveksi",
    metaDescription:
      "Layanan sablon dan bordir kaos custom untuk komunitas, perusahaan, sekolah, dan brand lokal. Bisa pesan satuan maupun partai.",
    h1: "Jasa Sablon Kaos",
    icon: Printer,
    description:
      "Layanan sablon dan bordir kaos custom dengan pilihan teknik rubber, plastisol, DTF, digital printing, dan bordir untuk kebutuhan satuan maupun partai.",
    benefits: ["Bisa satuan", "Bisa partai", "Desain custom", "Fast response"],
    useCase: "Kaos komunitas, sekolah, event, perusahaan, dan brand lokal.",
    keywords: ["jasa sablon kaos", "kaos custom satuan", "sablon DTF"],
    relatedProducts: ["kaos-sablon-custom", "hoodie-custom"],
    faqs: [
      {
        question: "Apakah bisa pesan sablon atau bordir kaos satuan?",
        answer:
          "Bisa. Untuk kebutuhan kaos custom satuan, kami dapat bantu pilih teknik digital atau DTF sesuai desain dan bahan.",
      },
      {
        question: "Teknik sablon dan bordir apa yang tersedia?",
        answer:
          "Tersedia pilihan sablon rubber, plastisol, DTF, digital printing, dan bordir. Rekomendasi teknik akan disesuaikan dengan desain dan jumlah pesanan.",
      },
    ],
  },
  {
    slug: "konveksi-kaos",
    title: "Konveksi Kaos & Bordir",
    metaTitle: "Konveksi Kaos Kertosono Nganjuk | Produksi Kaos Custom",
    metaDescription:
      "Produksi kaos custom berkualitas untuk brand lokal, sekolah, komunitas, dan perusahaan dengan bahan nyaman, sablon rapi, dan bordir presisi.",
    h1: "Konveksi Kaos & Bordir",
    icon: Factory,
    description:
      "Produksi kaos custom dari pemilihan bahan, ukuran, desain, hingga finishing sablon atau bordir.",
    benefits: ["Bahan nyaman", "Ukuran lengkap", "Produksi terarah", "Siap untuk event"],
    useCase: "Kaos kelas, kaos event, brand clothing, dan seragam promosi.",
    keywords: ["konveksi kaos", "jasa sablon kaos", "kaos custom"],
    relatedProducts: ["kaos-sablon-custom"],
    faqs: [
      {
        question: "Bahan kaos apa yang cocok untuk order komunitas?",
        answer:
          "Cotton combed 24s atau 30s sering dipilih karena nyaman, mudah disablon, dan cocok untuk pemakaian harian.",
      },
      {
        question: "Apakah bisa bantu ukuran campur?",
        answer:
          "Bisa. Pesanan partai dapat menggunakan ukuran campur sesuai kebutuhan tim, komunitas, atau event.",
      },
    ],
  },
  {
    slug: "sablon-hoodie",
    title: "Sablon Hoodie",
    metaTitle: "Hoodie Custom Kertosono | Sablon dan Bordir Hoodie",
    metaDescription:
      "Jasa sablon hoodie custom dengan bahan fleece atau baby terry untuk brand lokal, komunitas, dan merchandise.",
    h1: "Sablon Hoodie",
    icon: Flame,
    description:
      "Hoodie custom dengan opsi sablon plastisol, DTF, atau bordir untuk tampilan premium dan tahan lama.",
    benefits: ["Look premium", "Bisa bordir", "Cocok brand lokal", "Bahan tebal"],
    useCase: "Hoodie komunitas, brand lokal, merchandise event, dan hadiah perusahaan.",
    keywords: ["sablon hoodie", "hoodie custom", "sablon plastisol"],
    relatedProducts: ["hoodie-custom"],
    faqs: [
      {
        question: "Apakah hoodie bisa pakai bordir?",
        answer:
          "Bisa. Bordir cocok untuk logo kecil, emblem, atau identitas brand yang ingin terlihat lebih premium.",
      },
      {
        question: "Teknik apa yang cocok untuk desain hoodie besar?",
        answer:
          "Untuk desain besar, DTF atau plastisol sering dipilih karena detail dan warna dapat terlihat kuat di bahan hoodie.",
      },
    ],
  },
  {
    slug: "jersey-custom",
    title: "Jersey Custom",
    metaTitle: "Buat Jersey Kertosono Nganjuk | Jersey Custom",
    metaDescription:
      "Pembuatan jersey custom untuk futsal, komunitas olahraga, sekolah, dan event dengan desain full color.",
    h1: "Jersey Custom",
    icon: Layers,
    description:
      "Jersey custom untuk tim olahraga dan event dengan bahan dryfit, desain nama nomor, serta pilihan printing yang tajam.",
    benefits: ["Full color", "Nama dan nomor", "Bahan ringan", "Cocok tim olahraga"],
    useCase: "Jersey futsal, sepak bola, voli, komunitas olahraga, dan lomba sekolah.",
    keywords: ["jersey custom", "jersey printing", "sablon DTF"],
    relatedProducts: ["jersey-custom"],
    faqs: [
      {
        question: "Apakah bisa desain jersey full custom?",
        answer:
          "Bisa. Warna, nama, nomor, logo sponsor, dan elemen tim dapat disesuaikan dengan kebutuhan.",
      },
      {
        question: "Bahan jersey apa yang biasa digunakan?",
        answer:
          "Bahan dryfit dan milano umum digunakan karena ringan, nyaman, dan cocok untuk aktivitas olahraga.",
      },
    ],
  },
  {
    slug: "konveksi-seragam",
    title: "Konveksi Seragam",
    metaTitle: "Konveksi Seragam Nganjuk | Seragam Kerja dan Komunitas",
    metaDescription:
      "Konveksi seragam untuk komunitas, sekolah, cafe, kantor, dan organisasi dengan pilihan bordir atau sablon.",
    h1: "Konveksi Seragam",
    icon: Building2,
    description:
      "Produksi seragam custom untuk tim, sekolah, komunitas, dan perusahaan dengan bahan serta finishing yang disesuaikan.",
    benefits: ["Identitas tim rapi", "Bisa bordir logo", "Ukuran campur", "Material fleksibel"],
    useCase: "Seragam cafe, sekolah, komunitas, kantor, organisasi, dan event crew.",
    keywords: ["konveksi seragam", "konveksi seragam", "bordir seragam"],
    relatedProducts: ["seragam-komunitas"],
    faqs: [
      {
        question: "Apakah bisa bordir logo di seragam?",
        answer:
          "Bisa. Bordir cocok untuk logo dada, nama, dan identitas organisasi agar terlihat rapi dan tahan lama.",
      },
      {
        question: "Apakah bisa produksi seragam untuk cafe atau kantor?",
        answer:
          "Bisa. Kami dapat menyesuaikan model, bahan, warna, dan finishing sesuai kebutuhan operasional.",
      },
    ],
  },
  {
    slug: "merchandise-perusahaan",
    title: "Merchandise Perusahaan",
    metaTitle: "Vendor Merchandise Nganjuk | Custom Corporate Merchandise",
    metaDescription:
      "Custom corporate merchandise untuk event, onboarding, promosi, dan campaign perusahaan. Bisa kaos, tote bag, topi, lanyard, dan gift set.",
    h1: "Merchandise Perusahaan",
    icon: PackageCheck,
    description:
      "Paket merchandise perusahaan untuk membangun identitas brand melalui produk custom yang fungsional dan siap dibagikan.",
    benefits: ["Cocok event", "Bisa paket bundling", "Branding konsisten", "Vendor merchandise"],
    useCase: "Company event, onboarding karyawan, seminar, promosi, dan hadiah pelanggan.",
    keywords: ["merchandise perusahaan", "vendor merchandise", "custom corporate merchandise"],
    relatedProducts: ["merchandise-perusahaan", "kaos-sablon-custom"],
    faqs: [
      {
        question: "Produk apa saja yang bisa dibuat untuk merchandise perusahaan?",
        answer:
          "Bisa berupa kaos, tote bag, topi, lanyard, hoodie, dan paket gift set sesuai kebutuhan campaign.",
      },
      {
        question: "Apakah bisa bantu rekomendasi paket merchandise?",
        answer:
          "Bisa. Kami dapat bantu sesuaikan paket berdasarkan budget, jumlah penerima, dan tujuan acara.",
      },
    ],
  },
];

export type PortfolioItem = {
  slug: string;
  title: string;
  clientType: string;
  quantity: string;
  material: string;
  printingMethod: string;
  image: string;
  video?: string;
  poster?: string;
  gallery: string[];
  excerpt: string;
  story: string;
  testimonial: string;
  relatedProducts: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "kaos-sablon-event",
    title: "Kaos Sablon Event",
    clientType: "Event dan komunitas",
    quantity: "Partai",
    material: "Kaos cotton",
    printingMethod: "Sablon",
    image: "/videos/kaos-sablon-dtf-poster.jpg",
    video: "/videos/kaos-sablon-dtf.mp4",
    poster: "/videos/kaos-sablon-dtf-poster.jpg",
    gallery: [],
    excerpt: "Produksi kaos sablon partai dengan warna dan desain yang konsisten.",
    story:
      "Project ini berfokus pada hasil sablon yang rapi di setiap pcs, warna kaos yang seragam, dan finishing siap dibagikan untuk kebutuhan acara.",
    testimonial:
      "Hasil cetaknya rapi dan jumlah produksi sesuai kebutuhan acara. Komunikasi ordernya juga cepat.",
    relatedProducts: ["kaos-sablon-custom", "merchandise-perusahaan"],
  },
  {
    slug: "seragam-bordir-komunitas",
    title: "Seragam Bordir Komunitas",
    clientType: "Komunitas dan organisasi",
    quantity: "Partai",
    material: "Kain seragam",
    printingMethod: "Bordir komputer",
    image: "/images/kemeja-workshirt-hitam.jpeg",
    gallery: [
      "/images/kemeja-workshirt-hitam.jpeg",
      "/images/kemeja-bordir-putih.jpeg",
    ],
    excerpt: "Seragam custom dengan bordir logo dan nama untuk identitas tim.",
    story:
      "Seragam dibuat agar identitas komunitas terlihat rapi. Bordir ditempatkan pada bagian dada dengan warna benang yang kontras dan mudah dibaca.",
    testimonial:
      "Bordirnya rapi, detail nama terbaca jelas, dan hasil seragam terlihat kompak.",
    relatedProducts: ["seragam-komunitas"],
  },
  {
    slug: "produksi-bordir-seragam",
    title: "Produksi Bordir Seragam",
    clientType: "Corporate dan komunitas",
    quantity: "Partai",
    material: "Kemeja dan seragam",
    printingMethod: "Bordir komputer",
    image: "/images/kemeja-bordir-putih.jpeg",
    gallery: [
      "/images/kemeja-bordir-putih.jpeg",
      "/images/kemeja-workshirt-hitam.jpeg",
    ],
    excerpt: "Proses bordir logo dan nama untuk produksi seragam custom.",
    story:
      "Project ini memperlihatkan proses produksi bordir dari file logo sampai hasil jadi. Fokusnya adalah placement, kerapian jahitan, dan warna benang yang sesuai identitas.",
    testimonial:
      "Hasil bordir konsisten dan cocok untuk kebutuhan seragam yang terlihat profesional.",
    relatedProducts: ["seragam-komunitas", "merchandise-perusahaan"],
  },
];

export const testimonials = [
  {
    name: "Icha Icha",
    role: "Ulasan Google",
    quote:
      "Pesan 1000 pcs kaos. Hasil bagus, sudah beberapa kali pesan hasil top.",
  },
  {
    name: "Dimas Ilham Akbar Firdaus",
    role: "Ulasan Google",
    quote:
      "Pengerjaan bagus, pelayanan juga ramah, hasilnya bagus, sangat rekomendasi.",
  },
  {
    name: "Arman Hidayat",
    role: "Dummy customer",
    quote:
      "Seragam bordir terlihat profesional. Bahan nyaman dan hasil nama logo terbaca jelas.",
  },
];

export const globalFaqs: FAQItem[] = [
  {
    question: "Apakah Lancar Konveksi menerima order luar Kertosono dan Nganjuk?",
    answer:
      "Ya. Lokasi produksi ada di Kertosono, Nganjuk, dan konsultasi bisa lewat WhatsApp. Pengiriman dapat disesuaikan setelah produksi selesai.",
  },
  {
    question: "Apakah bisa order kaos custom satuan?",
    answer:
      "Bisa. Untuk kaos custom satuan, teknik digital atau DTF dapat menjadi pilihan sesuai desain dan bahan.",
  },
  {
    question: "Berapa lama proses produksi sablon kaos?",
    answer:
      "Estimasi produksi bergantung pada jumlah, teknik sablon, ketersediaan bahan, dan antrean. Konsultasikan kebutuhan melalui WhatsApp untuk estimasi terbaru.",
  },
  {
    question: "Apakah bisa bantu desain sebelum produksi?",
    answer:
      "Bisa. Tim dapat membantu merapikan konsep desain, placement, dan rekomendasi teknik agar siap produksi.",
  },
];

export const trustIndicators = [
  { icon: BadgeCheck, title: "Hasil rapi", text: "Produksi diarahkan dengan QC sebelum pengiriman." },
  { icon: Shirt, title: "Bahan nyaman", text: "Pilihan bahan disesuaikan untuk harian, event, dan seragam." },
  { icon: Palette, title: "Custom desain", text: "Bisa mulai dari brief sederhana sampai artwork siap cetak." },
  { icon: Users, title: "Order mudah", text: "Konsultasi produk, jumlah, bahan, dan desain langsung via WhatsApp." },
  { icon: Sparkles, title: "Sablon & bordir", text: "Rubber, plastisol, DTF, digital printing, dan bordir." },
  { icon: Star, title: "Fast response", text: "Tim siap bantu estimasi harga dan rekomendasi teknik." },
];



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
  name: "Lancar Clothing Sablon",
  legalName: "Lancar Clothing Sablon",
  tagline: "Konveksi Sablon & Bordir Custom",
  baseUrl: "https://lancarclothingsablon.com",
  phone: "+6281234567890",
  whatsapp: "6281234567890",
  instagram: "@lancarclothing_sablon",
  instagramUrl: "https://www.instagram.com/lancarclothing_sablon/",
  email: "hello@lancarclothingsablon.com",
  address: {
    street: "Indonesia",
    city: "Indonesia",
    region: "Indonesia",
    country: "ID",
    display: "Indonesia",
  },
  hours: "Senin-Sabtu, 08:00-17:00",
  geo: {
    latitude: -2.5489,
    longitude: 118.0149,
  },
};

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
    image: "/images/produk-kaos-sablon-custom.webp",
    description:
      "Kaos sablon custom untuk komunitas, perusahaan, sekolah, event, dan brand lokal.",
    keywords: ["jasa sablon kaos", "kaos custom satuan", "konveksi kaos", "bordir kaos"],
    relatedServices: ["jasa-sablon-kaos", "konveksi-kaos"],
  },
  {
    slug: "hoodie-custom",
    name: "Hoodie Custom",
    category: "Hoodie",
    priceRange: "Custom quotation",
    material: "Fleece / baby terry",
    minimumOrder: "Mulai 12 pcs",
    image: "/images/produk-hoodie-custom.webp",
    description:
      "Hoodie custom dengan pilihan sablon DTF, plastisol, atau bordir untuk brand lokal, komunitas, dan merchandise.",
    keywords: ["sablon hoodie", "hoodie custom", "sablon plastisol", "bordir hoodie"],
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
    keywords: ["jersey custom", "jersey printing", "sablon DTF"],
    relatedServices: ["jersey-custom"],
  },
  {
    slug: "seragam-komunitas",
    name: "Seragam Komunitas",
    category: "Seragam",
    priceRange: "Custom quotation",
    material: "Cotton, drill, lacoste",
    minimumOrder: "Mulai 24 pcs",
    image: "/images/produk-seragam-komunitas.webp",
    description:
      "Seragam komunitas, sekolah, cafe, kantor, dan organisasi dengan pilihan bordir atau sablon.",
    keywords: ["konveksi seragam", "bordir seragam", "seragam custom"],
    relatedServices: ["konveksi-seragam"],
  },
  {
    slug: "merchandise-perusahaan",
    name: "Merchandise Perusahaan",
    category: "Merchandise",
    priceRange: "Custom quotation",
    material: "Kaos, tote bag, topi, lanyard, dan gift set",
    minimumOrder: "Mulai 50 pcs",
    image: "/images/produk-merchandise-perusahaan.webp",
    description:
      "Paket merchandise perusahaan untuk event, onboarding karyawan, campaign, dan promosi brand.",
    keywords: ["merchandise perusahaan", "vendor merchandise", "custom corporate merchandise"],
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
    metaTitle: "Jasa Sablon Kaos | Lancar Clothing Sablon",
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
    metaTitle: "Konveksi Kaos & Bordir | Produksi Kaos Custom Berkualitas",
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
    metaTitle: "Sablon Hoodie | Hoodie Custom untuk Brand dan Komunitas",
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
    metaTitle: "Jersey Custom | Pembuatan Jersey Printing dan Sablon",
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
    metaTitle: "Konveksi Seragam | Seragam Komunitas, Sekolah, dan Perusahaan",
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
    metaTitle: "Merchandise Perusahaan | Custom Corporate Merchandise",
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
  gallery: string[];
  excerpt: string;
  story: string;
  testimonial: string;
  relatedProducts: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "jersey-futsal-sekolah",
    title: "Jersey Futsal Tim Sekolah",
    clientType: "Sekolah",
    quantity: "48 pcs",
    material: "Dryfit premium",
    printingMethod: "DTF printing",
    image: "/images/portfolio-jersey-futsal-sekolah.webp",
    gallery: [
      "/images/portfolio-jersey-futsal-sekolah-1.webp",
      "/images/portfolio-jersey-futsal-sekolah-2.webp",
    ],
    excerpt: "Jersey futsal full custom untuk tim sekolah dengan nama, nomor, dan logo.",
    story:
      "Project ini dibuat untuk kebutuhan turnamen sekolah. Fokus produksi ada pada warna tim yang konsisten, bahan ringan, dan detail nama nomor yang mudah dibaca.",
    testimonial:
      "Jersey nyaman dipakai latihan dan desainnya sesuai identitas sekolah. Proses konsultasinya juga cepat.",
    relatedProducts: ["jersey-custom", "kaos-sablon-custom"],
  },
  {
    slug: "seragam-cafe",
    title: "Seragam Cafe",
    clientType: "F&B Business",
    quantity: "36 pcs",
    material: "Cotton drill",
    printingMethod: "Bordir logo",
    image: "/images/portfolio-seragam-cafe.webp",
    gallery: [
      "/images/portfolio-seragam-cafe-1.webp",
      "/images/portfolio-seragam-cafe-2.webp",
    ],
    excerpt: "Seragam cafe dengan logo bordir untuk tim operasional dan frontliner.",
    story:
      "Seragam dibuat agar tim terlihat rapi saat melayani pelanggan. Logo diposisikan di dada kiri dengan bordir agar tahan cuci dan terlihat profesional.",
    testimonial:
      "Seragamnya rapi, bahan nyaman untuk shift panjang, dan logo cafe terlihat jelas.",
    relatedProducts: ["seragam-komunitas"],
  },
  {
    slug: "hoodie-brand-lokal",
    title: "Hoodie Brand Lokal",
    clientType: "Brand Lokal",
    quantity: "72 pcs",
    material: "Fleece",
    printingMethod: "Plastisol",
    image: "/images/portfolio-hoodie-brand-lokal.webp",
    gallery: [
      "/images/portfolio-hoodie-brand-lokal-1.webp",
      "/images/portfolio-hoodie-brand-lokal-2.webp",
    ],
    excerpt: "Hoodie custom untuk drop pertama brand lokal dengan tampilan streetwear.",
    story:
      "Project hoodie dibuat untuk rilisan brand lokal. Fokusnya adalah print yang solid, placement desain presisi, dan finishing yang siap masuk katalog.",
    testimonial:
      "Hasil print tebal dan clean. Cocok untuk drop brand lokal yang ingin tampil premium.",
    relatedProducts: ["hoodie-custom"],
  },
];

export const testimonials = [
  {
    name: "Raka Pratama",
    role: "Owner Brand Lokal",
    quote:
      "Hasil sablon rapi dan konsultasinya jelas. Cocok untuk produksi kaos custom dan hoodie brand.",
  },
  {
    name: "Dina Ayu",
    role: "Panitia Event",
    quote:
      "Kaos event selesai sesuai kebutuhan. Tim bantu rekomendasi bahan dan teknik yang paling masuk budget.",
  },
  {
    name: "Arman Hidayat",
    role: "Manager Operasional Cafe",
    quote:
      "Seragam cafe terlihat profesional. Bordir logo clean dan bahan nyaman dipakai shift panjang.",
  },
];

export const globalFaqs: FAQItem[] = [
  {
    question: "Apakah Lancar Clothing Sablon menerima order luar kota?",
    answer:
      "Ya. Konsultasi bisa lewat WhatsApp dan pengiriman dapat disesuaikan setelah produksi selesai.",
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



import NotFound from "@/app/not-found";
import { Fragment } from "react";
import Bidang from "@/components/ui/detailBidang";

export async function generateMetadata({params}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: slug[0],
  };
}

interface Components {
  id: number;
  title: string;
  image: string;
  progja?: string[];
  href: string;
  description: string;
}

const component: Components[] = [
  {
    id: 1,
    title: "Ketua & Wakil Ketua Umum",
    image: "/ketua.png",
    progja: ["KSE Connect","Sumbagsel KSE Camp"],
    href: "/bidang/ketua-wakil-umum/1",
    description:
      "Ketua dibantu oleh Wakil Ketua Umum merupakan pemimpin utama organisasi yang bertanggung jawab atas jalannya seluruh kegiatan yang ada di organisasi serta berkoordinasi dengan Yayasan KSE dan dengan para pimpinan bidang ",
  },
  {
    id: 2,
    title: "Sekretaris Umum",
    image: "/sekretaris&bendahara.png",
    progja: ["Pelatihan Sistem Pengendali Internal Administrasi(SPIA) KSE Unila","Inventarisasi dan Pengelolaan Aset Paguyuban KSE Unila","Mapping Kegiatan","Reminder Jadwal Kegiatan","Pengadaan Bukti Tanda Terima(BTT) Surat","Database Pengurus dan Alumni Paguyuban KSE Unila"],
    href: "/bidang/sekretaris-umum/2",
    description:
      "Sekretaris Umum bertanggung jawab di bagian administrasi yang ada di organisasi, yaitu mengelola dokumen dan komunikasi organisasi. Sekretaris umum bertanggung jawab untuk menyusun dokumen seperti surat menyurat, laporan kegiatan, dan notulen rapat. Selain itu, Sekretaris Umum juga berperan dalam mengatur jadwal pertemuan dan memastikan informasi tersampaikan dengan baik kepada seluruh anggota organisasi.",
  },
  {
    id: 3,
    title: "Bendahara Umum",
    image: "/sekretaris&bendahara.png",
    progja: ["Pelatihan Sistem Pengendali Internal Keuangan(SPIK) Paguyuban KSE Unila","Pengumpulan Dana Kas","Pelaporan Keuangan Paguyuban"],
    href: "/bidang/bendahara-umum/3",
    description:
      "Bendahara Umum bertugas di bagian keuangan organisasi bertanggung jawab atas pencatatan pemasukan dan pengeluaran uang, menyusun laporan keuangan secara berkala, serta mengalokasikan anggaran untuk setiap kegiatan yang berlangsung.",
  },
  {
    id: 4,
    title: "Bidang PSDM",
    image: "/bidangPDSM.png",
    progja: ["Welcoming Beswan","KSE Journey","HUT Paguyuban KSE Unila ke-9","Paguyuban Point Tracker(PPT)","KSE Fun"],
    href: "/bidang/PDSM/4",
    description:
      "Bidang PSDM adalah bidang yang bertanggung jawab kepada internal beswan (penerima beasiswa), yaitu mengelola dan mengembangkan pottensi sumber daya manusia paguyuban KSE unila. Divisi ini berperan dalam menciptakan lingkungan yang mendukung pertumbuhan pribadi dan profesional. Serta memastikan keberlanjutan sumber daya manusia yang berkualtas.",
  },
  {
    id: 5,
    title: "Bidang Pengabdian Masyarakat",
    image: "/bidangPengmas.png",
    progja: ["Donor Darah","Gerakan Pungut Sampah(GPS)","Beasiswa Ambers","KSE Peduli","KSE Gotong Royong"],
    href: "/bidang/pengabdian-masyarakat/5",
    description:
      "Bidang Pengmas adalah bidang yang mengelola kegiatan-kegiatan sosial di masyarakat, seperti kegiatan donor darah dan gerakan pungut sampah, tujuannya agar Paguyuban KSE Unila ini dapat memberikan dampak positif bagi masyarakat.",
  },
  {
    id: 6,
    title: "Bidang Pendidikan Riset dan Teknologi",
    image: "/bidangPendristek.png",
    progja: ["KSE Mengajar","Rumah Belajar","Explore and Success with KSE Unila","KSE Research Center(Webinar dan Pelatihan Karya Tulis Ilmiah)"],
    href: "/bidang/pendidikan-riset-dan-teknologi/6",
    description:
      "Bidang Pemristek tugasnya menelengarakan kegiatan yang berhubungan dengan pendidikan, seperti Try Out UTBK untuk mendorong penelitian dan inovasi teknologi baru agar para anggota, mahasiswa dan masyarakat luar dapat memahami dan mengikuti perkembangan ilmu pengetahuan dan teknologi.",
  },
  {
    id: 7,
    title: "Bidang Community Development",
    image: "/bidangComdev.png",
    progja: ["Bank Sampah","Pembuatan dan Penjualan Sabun","Cuci Piring","Pupuk Organik"],
    href: "/bidang/community-development/7",
    description:
      "Bidang Comdev merupakan bidang yang berfokus pada pengembangan dan pengabdian masyarakat dengan menghasilkan produk dan menyiapkan masyarakat yang bertujuan untuk meningkatkan pengetahuan dan kesadaran masyarakat agar masyarakat mempunyai skill atau kemampuan untuk menghasilkan finansial dan mendukung ekonomi mandiri.",
  },
  {
    id: 8,
    title: "Bidang Kewirausahaan ",
    image: "/bidangKWU.png",
    progja: ["Penyewaan Inventaris","Creative Workshop by KSE(C-Work KSE)","Webinar Entrepreneur Academy(EA)","Pengdaan Usaha","KSE UMKM Connect","Pengadaan PDH Paguyuban dan Merchandise"],
    href: "/bidang/kewirausahaan/8",
    description:
      "Bidang Kewirausahaan adalah bidang yang bertanggung jawab dalam mengelola keuangan serta memberikan dukungan terhadap usaha mandiri. Serta bidang ini memiliki tanggung jawab atas alokasi dana untuk setiap kegiatan dan mengelola kegiatan bisnis kewirausahaan. Melalui program program tersebut bidang kewirausahaan menciptakan pendapatan yang berkelanjutan yang berguna untuk mendukung finansial organisasi. Bidang Kewirausahaan berkoordinasi langsung dengan Bendahara Umum untuk mengelola keuangan. ",
  },
  {
    id: 9,
    title: "Bidang Kominfo",
    image: "/bidangKominfo.png",
    progja: ["Aktivasi Media Sosial","Miling List(Milis)","Pelatihan Editing Design Grafis dan Video Grafis"],
    href: "/bidang/kominfo/9",
    description:
      "Bidang Kominfo adalah bidang yang bertanggung jawab mengelola dan menyebarkan informasi internal dan eksternal. Serta mengoptimalkan media dan teknologi informasi untuk meningkatkan organisasi.",
  },
];


const DetailBidang = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const item = component.find((item: Components) => item.id === Number(slug[1]));
    if(!item) {
      return NotFound();
    }

    return (
      <Fragment>
        <Bidang item={item}/>
      </Fragment>
    );
  }

export default DetailBidang

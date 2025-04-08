"use client"

import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";

interface Components {
  title: string;
  image: string;
  href: string;
  description: string;
  delay: number;
}
const components: Components[] = [
  {
    title: "Ketua & Wakil Ketua Umum",
    image: "/ketua.png",
    href: "/bidang/ketua-wakil-umum/1",
    description:
      "Ketua dibantu oleh Wakil Ketua Umum merupakan pemimpin utama organisasi yang bertanggung jawab atas jalannya seluruh kegiatan yang ada di organisasi serta berkoordinasi dengan Yayasan KSE dan dengan para pimpinan bidang ",
    delay: 0
  },
  {
    title: "Sekretaris Umum",
    image: "/sekretaris&bendahara.png",
    href: "/bidang/sekretaris-umum/2",
    description:
      "Sekretaris Umum bertanggung jawab di bagian administrasi yang ada di organisasi, yaitu mengelola dokumen dan komunikasi organisasi. Sekretaris umum bertanggung jawab untuk menyusun dokumen seperti surat menyurat, laporan kegiatan, dan notulen rapat. Selain itu, Sekretaris Umum juga berperan dalam mengatur jadwal pertemuan dan memastikan informasi tersampaikan dengan baik kepada seluruh anggota organisasi.",
    delay: 100
  },
  {
    title: "Bendahara Umum",
    image: "/sekretaris&bendahara.png",
    href: "/bidang/bendahara-umum/3",
    description:
      "Bendahara Umum bertugas di bagian keuangan organisasi bertanggung jawab atas pencatatan pemasukan dan pengeluaran uang, menyusun laporan keuangan secara berkala, serta mengalokasikan anggaran untuk setiap kegiatan yang berlangsung.",
    delay: 200
  },
  {
    title: "Bidang PSDM",
    image: "/bidangPDSM.png",
    href: "/bidang/PDSM/4",
    description:
      "Bidang PSDM adalah bidang yang bertanggung jawab kepada internal beswan (penerima beasiswa), yaitu mengelola dan mengembangkan pottensi sumber daya manusia paguyuban KSE unila. Divisi ini berperan dalam menciptakan lingkungan yang mendukung pertumbuhan pribadi dan profesional. Serta memastikan keberlanjutan sumber daya manusia yang berkualtas.",
    delay: 300
  },
  {
    title: "Bidang Pengabdian Masyarakat",
    image: "/bidangPengmas.png",
    href: "/bidang/pengabdian-masyarakat/5",
    description:
      "Bidang Pengmas adalah bidang yang mengelola kegiatan-kegiatan sosial di masyarakat, seperti kegiatan donor darah dan gerakan pungut sampah, tujuannya agar Paguyuban KSE Unila ini dapat memberikan dampak positif bagi masyarakat.",
    delay: 400
  },
  {
    title: "Bidang Pendidikan Riset dan Teknologi",
    image: "/bidangPendristek.png",
    href: "/bidang/pendidikan-riset-dan-teknologi/6",
    description:
      "Bidang Pemristek tugasnya menelengarakan kegiatan yang berhubungan dengan pendidikan, seperti Try Out UTBK untuk mendorong penelitian dan inovasi teknologi baru agar para anggota, mahasiswa dan masyarakat luar dapat memahami dan mengikuti perkembangan ilmu pengetahuan dan teknologi.",
    delay: 500
  },
  {
    title: "Bidang Community Development",
    image: "/bidangComdev.png",
    href: "/bidang/community-development/7",
    description:
      "Bidang Comdev merupakan bidang yang berfokus pada pengembangan dan pengabdian masyarakat dengan menghasilkan produk dan menyiapkan masyarakat yang bertujuan untuk meningkatkan pengetahuan dan kesadaran masyarakat agar masyarakat mempunyai skill atau kemampuan untuk menghasilkan finansial dan mendukung ekonomi mandiri.",
    delay: 600
  },
  {
    title: "Bidang Kewirausahaan ",
    image: "/bidangKWU.png",
    href: "/bidang/kewirausahaan/8",
    description:
      "Bidang Kewirausahaan adalah bidang yang bertanggung jawab dalam mengelola keuangan serta memberikan dukungan terhadap usaha mandiri. Serta bidang ini memiliki tanggung jawab atas alokasi dana untuk setiap kegiatan dan mengelola kegiatan bisnis kewirausahaan. Melalui program program tersebut bidang kewirausahaan menciptakan pendapatan yang berkelanjutan yang berguna untuk mendukung finansial organisasi. Bidang Kewirausahaan berkoordinasi langsung dengan Bendahara Umum untuk mengelola keuangan. ",
    delay: 700
  },
  {
    title: "Bidang Kominfo",
    image: "/bidangKominfo.png",
    href: "/bidang/kominfo/9",
    description:
      "Bidang Kominfo adalah bidang yang bertanggung jawab mengelola dan menyebarkan informasi internal dan eksternal. Serta mengoptimalkan media dan teknologi informasi untuk meningkatkan organisasi.",
    delay: 800
  },
];

const Bidang = () => {
     useEffect(() => {
            Aos.init({
                once: true
            });
    }, []);
    
  return (
    <section className="mx-auto max-w-full lg:max-w-[92%] mb-4 p-2">
      <h1 data-aos="fade-right" data-aos-delay="0" className="text-sm px-3 py-2 rounded-md shadow inline-block mb-2 bg-slate-50">
        Bidang
      </h1>
      <section className="grid grid-cols-3 gap-3">
        {components.map((item: Components) => {
          return (
            <section
              data-aos="fade-up"
              data-aos-delay={item.delay}  
              key={item.title}
              className="col-span-3 w-full lg:col-span-1 flex bg-slate-200 rounded-md w-96 shadow"
            >
              <section className="basis-[40%]">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  className="w-full"
                  alt="Gambar ketua & wakil ketua umum"
                />
              </section>
              <section className="basis-[60%] flex flex-col justify-between p-2">
                <section>
                  <h1 className="font-bold text-sm">{item.title}</h1>
                  <hr className="w-full border border-slate-400 rounded-md my-2" />
                  <p className="line-clamp-2 text-[.8rem] leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                </section>
                <Button
                  variant="outline"
                  className="bg-slate-300 text-slate-800 text-[.8rem] hover:bg-slate-300 cursor-pointer mt-3 hover:ps-8"
                  asChild
                >
                  <Link href={item.href}>
                    <i className="bx bx-right-arrow-alt text-xl"></i>
                  </Link>
                </Button>
              </section>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Bidang;

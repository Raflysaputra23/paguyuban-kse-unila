"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Ketua & Wakil Ketua Umum",
    href: "/bidang/ketua-wakil-umum/1",
    description:
      "Ketua dibantu oleh Wakil Ketua Umum merupakan pemimpin utama organisasi yang bertanggung jawab atas jalannya seluruh kegiatan yang ada di organisasi serta berkoordinasi dengan Yayasan KSE dan dengan para pimpinan bidang ",
  },
  {
    title: "Sekretaris Umum",
    href: "/bidang/sekretaris-umum/2",
    description:
      "Sekretaris Umum bertanggung jawab di bagian administrasi yang ada di organisasi, yaitu mengelola dokumen dan komunikasi organisasi. Sekretaris umum bertanggung jawab untuk menyusun dokumen seperti surat menyurat, laporan kegiatan, dan notulen rapat. Selain itu, Sekretaris Umum juga berperan dalam mengatur jadwal pertemuan dan memastikan informasi tersampaikan dengan baik kepada seluruh anggota organisasi.",
  },
  {
    title: "Bendahara Umum",
    href: "/bidang/bendahara-umum/3",
    description:
      "Bendahara Umum bertugas di bagian keuangan organisasi bertanggung jawab atas pencatatan pemasukan dan pengeluaran uang, menyusun laporan keuangan secara berkala, serta mengalokasikan anggaran untuk setiap kegiatan yang berlangsung.",
  },
  {
    title: "Bidang PSDM",
    href: "/bidang/PDSM/4",
    description:
      "Bidang PSDM adalah bidang yang bertanggung jawab kepada internal beswan (penerima beasiswa), yaitu mengelola dan mengembangkan pottensi sumber daya manusia paguyuban KSE unila. Divisi ini berperan dalam menciptakan lingkungan yang mendukung pertumbuhan pribadi dan profesional. Serta memastikan keberlanjutan sumber daya manusia yang berkualtas.",
  },
  {
    title: "Bidang Pengabdian Masyarakat",
    href: "/bidang/pengabdian-masyarakat/5",
    description:
      "Bidang Pengmas adalah bidang yang mengelola kegiatan-kegiatan sosial di masyarakat, seperti kegiatan donor darah dan gerakan pungut sampah, tujuannya agar Paguyuban KSE Unila ini dapat memberikan dampak positif bagi masyarakat.",
  },
  {
    title: "Bidang Pendidikan Riset dan Teknologi",
    href: "/bidang/pendidikan-riset-dan-teknologi/6",
    description:
      "Bidang Pemristek tugasnya menelengarakan kegiatan yang berhubungan dengan pendidikan, seperti Try Out UTBK untuk mendorong penelitian dan inovasi teknologi baru agar para anggota, mahasiswa dan masyarakat luar dapat memahami dan mengikuti perkembangan ilmu pengetahuan dan teknologi.",
  },
  {
    title: "Bidang Community Development",
    href: "/bidang/community-development/7",
    description: "Bidang Comdev merupakan bidang yang berfokus pada pengembangan dan pengabdian masyarakat dengan menghasilkan produk dan menyiapkan masyarakat yang bertujuan untuk meningkatkan pengetahuan dan kesadaran masyarakat agar masyarakat mempunyai skill atau kemampuan untuk menghasilkan finansial dan mendukung ekonomi mandiri.",
  },
  {
    title: "Bidang Kewirausahaan ",
    href: "/bidang/kewirausahaan/8",
    description:
      "Bidang Kewirausahaan adalah bidang yang bertanggung jawab dalam mengelola keuangan serta memberikan dukungan terhadap usaha mandiri. Serta bidang ini memiliki tanggung jawab atas alokasi dana untuk setiap kegiatan dan mengelola kegiatan bisnis kewirausahaan. Melalui program program tersebut bidang kewirausahaan menciptakan pendapatan yang berkelanjutan yang berguna untuk mendukung finansial organisasi. Bidang Kewirausahaan berkoordinasi langsung dengan Bendahara Umum untuk mengelola keuangan. ",
  },
  {
    title: "Bidang Kominfo",
    href: "/bidang/kominfo/9",
    description:
      "Bidang Kominfo adalah bidang yang bertanggung jawab mengelola dan menyebarkan informasi internal dan eksternal. Serta mengoptimalkan media dan teknologi informasi untuk meningkatkan organisasi.",
  },
];

const Navbar = () => {
  useEffect(() => {
          AOS.init({
            once: true
          });
  }, []);

  return (
    <nav className="text-slate-200 flex items-center justify-between bg-slate-50 mx-auto max-w-full lg:max-w-[92%] w-full p-4 rounded-md shadow-lg">
      <NavigationMenu className="flex items-center gap-2">
        <Button
          data-aos-delay="500"
          data-aos="fade-right"
          variant="outline"
          className="bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
          asChild
        >
          <Link href="/" className="flex items-center gap-2"><i className="bx bxs-home"></i> Home</Link>
        </Button>
        <NavigationMenuItem data-aos="fade-right"  data-aos-delay="400" className="list-none">
          <NavigationMenuTrigger className="bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer flex items-center gap-2"><i className="bx bxs-group"></i> Bidang</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <Button
          data-aos-delay="300"
          data-aos="fade-right"
          variant="outline"
          className="bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
          asChild
        >
          <Link href="/" className="flex items-center"><i className="bx bxs-camera"></i> Dokumentasi Kegiatan</Link>
        </Button>
        <Button
          data-aos-delay="200"
          data-aos="fade-right"
          variant="outline"
          className="bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
          asChild
        >
          <Link href="/" className="flex items-center"><i className="bx bxs-book"></i> Arsip</Link>
        </Button>
        <Button
          data-aos-delay="100"
          data-aos="fade-right"
          variant="outline"
          className="bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
          asChild
        >
          <Link href="/" className="flex items-center"><i className="bx bxs-calendar"></i> Kalender Kegiatan</Link>
        </Button>
        <Button
          data-aos-delay="0"
          data-aos="fade-right"
          variant="outline"
          className="bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
          asChild
        >
          <Link href="/" className="flex items-center"><i className="bx bxs-contact"></i> Hubungi Kami</Link>
        </Button>
      </NavigationMenu>
      <section className="flex items-center gap-2">
        <h1 data-aos="fade-left" data-aos-delay="0" className="text-slate-800 text-[.9rem]">Paguyuban KSE</h1>
        <Avatar data-aos="fade-left"  data-aos-delay="100" className="shadow">
          <AvatarImage src="https://files.catbox.moe/jckcrf.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-[.8rem] leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default Navbar;

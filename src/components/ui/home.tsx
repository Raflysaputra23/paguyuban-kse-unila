"use client"

import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

  return (
    <main className="flex w-full mx-auto max-w-full lg:max-w-[92%] flex-col justify-center items-center h-screen gap-8 p-2">
      <h1 data-aos="fade-down"  data-aos-delay="0" className="text-4xl text-center lg:w-[35rem] leading-12 font-bold">
        Selamat datang di website Paguyuban KSE Unila
      </h1>
      <Image
        data-aos="zoom-in"
        data-aos-delay="100"
        src={"https://files.catbox.moe/jckcrf.jpg"}
        className="w-52 h-52"
        width="100"
        height="100"
        alt="Logo Paguyuban"
      />
      <h2 data-aos="fade-up" className="text-sm w-96 text-center">
        Paguyuban KSE Unila adalah sebuah organisasi yang resmi dibentuk pada 8
        November 2015
      </h2>
    </main>
  );
};

export default Home;

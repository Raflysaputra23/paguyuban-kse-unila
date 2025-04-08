"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        AOS.init({
            once: true
        });
    },[]);

  return (
    <section className="mx-auto max-w-full lg:max-w-[92%] mb-8 p-2">
      <h1 data-aos="fade-right" data-aos-delay="0" className="text-sm px-3 py-2 rounded-md shadow inline-block mb-2 bg-slate-50">
        Tentang
      </h1>
      <section data-aos="fade-up" data-aos-delay="100" className=" bg-slate-50 p-4 shadow-md rounded-md">
        <section className="mb-4">
          <h1 className="mb-2 font-bold text-lg">Paguyuban KSE Unila</h1>
          <p className="mb-1">
            Paguyuban KSE Unila adalah sebuah organisasi yang resmi dibentuk
            pada 8 November 2015. Paguyuban KSE Unila ini adalah sebuah
            organisasi yang menaungi para penerima beasiswa yang diberikan oleh
            yayasan KSE di Universitas Lampung, agar ketika ada program lanjutan
            yang diberikan oleh yayasan KSE akan langsung bisa disalurkan kepada
            para beswan (penerima beasiswa) melalui Paguyuban KSE Unila.
          </p>
          <p className="mb-1">
            Paguyuban KSE Unila ini memiliki tujuan untuk mempersatukan para
            beswan (penerima beasiswa), mempromosikan beasiswa KSE agar lebih
            banyak mahasiswa yang mendapatkan manfaatnya serta mengembangkan
            keterampilan hard skill dan soft skill anggotanya.
          </p>
        </section>
        <fieldset className="border-2 p-3">
          <legend className="mb-2 font-bold text-lg px-2 py-1 rounded-md bg-slate-200">
            Yayasan KSE
          </legend>
          <section className="flex flex-col lg:flex-row gap-2">
            <section>
              <h1 className="mb-2 font-bold flex-1/2">
                Karya Salemba Empat (KSE)
              </h1>
              <p>
                KSE adalah jembatan bagi berbagai perusahaan dan individu dalam
                menyalurkan sumbangan mereka kepada kandidat dan program-program
                peningkatan soft skill yang tepat.
              </p>
            </section>
            <section>
              <h1 className="mb-2 font-bold flex-1/2">
                Sebagai Penanggung Jawab
              </h1>
              <p>
                Yayasan ini menduduki posisi tertinggi dalam struktur organisasi
                karena menjadi tempat dan sebagai penanggung jawab tertinggi
                terhadap kelancaran berjalannya organisasi yayasan karya salemba
                empat unila.
              </p>
            </section>
          </section>
        </fieldset>
      </section>
    </section>
  );
};

export default About;

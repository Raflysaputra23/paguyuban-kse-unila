"use client"

import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import Aos from "aos";


interface Components {
    id: number;
    title: string;
    image: string;
    progja?: string[];
    href: string;
    description: string;
}

const Bidang = ({ item }: { item: Components }) => {
    useEffect(() => {
        Aos.init({
            once: true
        });
    })
  return (
    <Fragment>
      <section className="mx-auto max-w-full lg:max-w-[92%] p-2 mb-8 mt-4 border">
        <Button
          asChild
          variant="outline"
          className="bg-slate-300 text-slate-800 hover:bg-slate-400 cursor-pointer"
        >
          <Link href="/bidang">
            <i className="bx bx-arrow-back"></i> Kembali
          </Link>
        </Button>
        <section className="my-6 mx-auto flex flex-col justify-center items-center gap-3">
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="aspect-auto w-1/4 rounded-md shadow border-2 border-amber-300"
          />
          <h1 className="font-bold">{item.title}</h1>
        </section>
      </section>
      <section className="mx-auto max-w-full lg:max-w-[92%] p-2">
        <h1 className="text-sm px-3 py-2 rounded-md shadow inline-block mb-2 bg-slate-50">
          Deskripsi
        </h1>
        <section className=" bg-slate-50 p-4 shadow-md rounded-md">
          <p>{item.description}</p>
        </section>
      </section>
      <section className="mx-auto max-w-full lg:max-w-[92%] p-2 mb-4">
        <h1 className="text-sm px-3 py-2 rounded-md shadow inline-block mb-2 bg-slate-50">
          Progja
        </h1>
        <section className="flex flex-col items-start gap-3">
          {item?.progja &&
            item.progja.map((progja: string) => (
              <section key={progja} className="flex items-center gap-2 text-sm">
                <i className="bx bxs-circle text-slate-400"></i>
                <p className=" bg-slate-300 rounded-md px-2 py-1">{progja}</p>
              </section>
            ))}
        </section>
      </section>
    </Fragment>
  );
};

export default Bidang;

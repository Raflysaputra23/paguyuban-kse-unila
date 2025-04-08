import Link from "next/link";

const footer = () => {
  return (
    <footer className="w-full p-4 bg-slate-300 flex justify-center mt-4">
      <section className="text-center">
        <h1 className="font-bold">Copyright</h1>
        <p className="text-[.9rem] text-slate-700">
          © 2025 M. Rafly Saputra - All Right Reserved
        </p>
        <h1 className="font-bold mt-4 mb-2">Follow Sosmed</h1>
        <section className="flex items-center justify-center gap-2">
          <Link
            href={""}
            className="px-2 py-1 border border-slate-900 rounded-md flex justify-center items-center hover:bg-slate-700"
          >
            <i className='bx bxl-instagram-alt text-lg'></i>
          </Link>
          <Link
            href={""}
            className="px-2 py-1 border border-slate-900 rounded-md flex justify-center items-center hover:bg-slate-700"
          >
            <i className='bx bxl-facebook-square text-lg'></i>
          </Link>
          <Link
            href={""}
            className="px-2 py-1 border border-slate-900 rounded-md flex justify-center items-center hover:bg-slate-700"
          >
            <i className='bx bxl-linkedin-square text-lg'></i>
          </Link>
          <Link
            href={""}
            className="px-2 py-1 border border-slate-900 rounded-md flex justify-center items-center hover:bg-slate-700"
          >
            <i className='bx bxl-youtube text-lg'></i>
          </Link>
          <Link
            href={""}
            className="px-2 py-1 border border-slate-900 rounded-md flex justify-center items-center hover:bg-slate-700"
          >
            <i className='bx bxl-twitter text-lg'></i>
          </Link>
          <Link
            href={""}
            className="px-2 py-1 border border-slate-900 rounded-md flex justify-center items-center hover:bg-slate-700"
          >
            <i className='bx bxl-github text-lg'></i>
          </Link>
        </section>
      </section>
    </footer>
  );
};

export default footer;

import { Button } from "@/components/ui/button"
import Link from "next/link"

const NotFound = () => {
  return (
    <section className="w-full h-screen flex flex-col gap-2 justify-center items-center bg-slate-200">
        <h1 className="text-slate-800 flex items-center gap-2 font-bold">404 - Not Found <i className="bx bx-search"></i></h1>
        <Button asChild variant="outline" className="bg-slate-300 text-slate-800 hover:bg-slate-400 cursor-pointer">
          <Link href="/" > 
            <i className="bx bx-left-arrow-alt text-lg"></i> Kembali  
          </Link>
        </Button>
    </section>
  )
}

export default NotFound

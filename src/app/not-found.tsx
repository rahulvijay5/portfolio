import { Button } from "@/components/ui/button";
import { Undo } from "lucide-react";
import Link from "next/link";

const notfound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="lg:text-[40vh] hidden lg:block absolute opacity-20 font-bold -z-10">4☹4</h1>
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-2xl font-bold">Page not found</p>

      <Button asChild className="mt-4" variant={'outline'}>
        <Link href="/">
          <Undo className="mr-2 h-4 w-4" /> Go to homepage
        </Link>
      </Button>
    </div>
  )
}

export default notfound

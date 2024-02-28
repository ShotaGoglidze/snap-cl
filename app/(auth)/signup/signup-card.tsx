import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

function SignUpButton() {
    return (
        <Button className="w-full flex gap-2 bg-blue-900 text-white hover:bg-slate-300 hover:text-gray-900">
            <Image src={'/github.svg'} width={20} height={20} alt="github logo" /> Sign up with GitHub
        </Button>
    )
}

export default function SignUpCard() {
    return (
        <>
           <form className="space-y-4">
            <SignUpButton />
           </form>
           <div className="mt-4 text-center text-[13px]">
            <span>Already have an account? </span>
            <Link href={'/login'} className="text-blue-500 hover:underline text-[13px] mr-1">
                Log in
            </Link>
           </div>
        </>
    )
}
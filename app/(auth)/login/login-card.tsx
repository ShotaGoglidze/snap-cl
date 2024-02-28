import Link from 'next/link';
import { Button } from "@/components/ui/button"
import Image from 'next/image';

function LoginButton() {
    return (
        <Button className='w-full flex gap-2 bg-blue-900 rounded-lg text-white hover:bg-slate-300 hover:text-gray-900'>
            <Image src={'/github.svg'} width={20} height={20} alt='Github logo' /> Log in with GitHub
        </Button>
    )
}

export default function LoginCard() {
    return (
        <>
           <form className="space-y-4">
            <LoginButton />
           </form>
           <div className="mt-4 text-center text-[13px]">
             <span>New To SnapCl?</span>
             <Link href={'/signup'} className='text-blue-500 hover:underline text-[13px] mr-1'>
                Sign Up
             </Link>
           </div>
        </>
    )
}
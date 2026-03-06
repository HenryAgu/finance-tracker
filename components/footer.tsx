import { LockKeyhole } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type FooterMenu = {
    title: string;
    path: string;
}


const footerMenu: FooterMenu[] = [
    {
        title: "Privacy Policy",
        path: "",
    },
    {
        title: "Terms of Service",
        path: "",
    },
    {
        title: "Help Center",
        path: "",
    },

]

const Footer = () => {
    return (
        <footer className='bg-white px-5 lg:px-10 py-5 lg:py-8 flex flex-col gap-y-3 lg:gap-y-6'>
            <div className="flex lg:flex-row flex-col gap-y-5 justify-between">
                <Image src="/logo.svg" alt='footer-logo' width={145} height={24} className='aspect-145/24' />
                <div className="flex flex-col gap-y-0.5 lg:items-end">
                    <p className='text-sm font-normal text-[#64748B]'>© 2026 FinanceTracker App. All rights reserved.</p>
                    <div className="flex items-center gap-x-1 text-[#94A3B8]">
                        <LockKeyhole size={12} />
                        <p className='text-xs font-normal'>Secure local storage: All data is stored privately on your machine.</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center pt-3 lg:pt-6 gap-x-3 lg:gap-x-6">
                {footerMenu.map((item) => (
                    <Link href={item.path} key={item.title} className='text-sm font-normal text-[#94A3B8]'>{item.title}</Link>
                ))}
            </div>
        </footer>
    )
}

export default Footer
import { Search } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='bg-surface-tint border-b border-b-brand-green-subtle px-5 lg:px-10 py-3 flex items-center justify-between'>
            <div className="flex items-center gap-x-8">
                <Image src="/logo.svg" alt='footer-logo' width={145} height={24} className='aspect-145/24' />
                <div className="hidden md:flex items-center gap-x-2 max-w-[256px] border border-brand-green-subtle rounded-[8px] py-2 px-4 bg-[#13EC5B0D]">
                    <Search className='text-brand-green' size={16} />
                    <input type="text" placeholder='Search transactions' className='text-sm text-brand-green outline-none' />
                </div>
            </div>
            <div className="bg-brand-green-subtle h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#13EC5B33]">
                <span className='text-brand-green font-semibold text-base'>A</span>
            </div>
        </nav>
    )
}

export default Navbar

import { Search } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='bg-[#F6F8F6] border-b border-b-[#13EC5B1A] px-5 lg:px-10 py-3 flex items-center justify-between'>
            <div className="flex items-center gap-x-8">
                <Image src="/logo.svg" alt='footer-logo' width={145} height={24} className='aspect-145/24' />
                <div className="hidden md:flex items-center gap-x-2 max-w-[256px] border border-[#13EC5B1A] rounded-[8px] py-2 px-4 bg-[#13EC5B0D]">
                    <Search className='text-[#13EC5B]' size={16} />
                    <input type="text" placeholder='Search transactions' className='text-sm text-[#13EC5B] outline-none' />
                </div>
            </div>
            <div className="bg-[#13EC5B1A] h-10 w-10 flex items-center justify-center rounded-full border border-[#13EC5B1A]">
                <span className='text-[#13EC5B] font-semibold text-base'>A</span>
            </div>
        </nav>
    )
}

export default Navbar

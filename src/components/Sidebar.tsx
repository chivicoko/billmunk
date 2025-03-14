'use client';

import { menuItems } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import ButtonNeutral from './button/ButtonNeutral';
import { usePathname, useRouter } from 'next/navigation';
import ButtonLinkNeutral from './button/ButtonLinkNeutral';
import Search from './Search';
import { useCallback } from 'react';
// import SidebarRight from './SidebarRight';

interface SidebarProps {
    show?: string;
    closeSidebar?: () => void;
}
  
const Sidebar: React.FC<SidebarProps> = ({ show = 'hidden', closeSidebar = () => {} }) => {
    
    // const [cards, setCards] = useState<recentCardInfoProps[]>(cardRequests);
    
    const handleSearch = useCallback((text: string) => {
        // const filteredCards = cardRequests.filter((card) => {
        //     if (card.transaction) {
        //     return (card.transaction.toLowerCase().includes(text.toLowerCase()));
        //     }
        // });
        
        // setCards(filteredCards);
        console.log(text);
    }, []);
    
    const pathName = usePathname();
    // console.log(pathName);
    const router = useRouter();

    const isActivePath = (route: string | null) => {
        if (!route) return false;
    
        if (route === '/') {
            return pathName === route;
        } else {
            return pathName.startsWith(route);
        }
    };

    return (
        <nav className={`${show === 'block' ? 'fixed lg:hidden' : 'hidden'} px-3 lg:block top-0 left-0 z-50 lg:z-auto w-4/6 sm:w-3/6 lg:w-[21%] xl:w-1/6 h-full min-h-fit bg-white lg:bg-transparent`}>
            <div className={`overflow-y-scroll custom-scrollbar2 w-full h-full flex flex-col justify-start items-start px-1`}>
                <button className='self-end mr-3 md:mr-8 mt-2 text-3xl lg:hidden' onClick={closeSidebar}>&times;</button>
                <div className="h-full min-h-screen flex flex-col justify-start items-start gap-4 pb-6 lg:py-6">
                    <Link href="/" className="relative w-[138.32px] h-[45px] px-3">
                        <Image
                            src="/images/LAPO_Logo_2022-removebg-preview 1.svg"
                            alt="Lapo's Logo"
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </Link>
                    
                    <div className="h-full min-h-[80vh] flex flex-col justify-between">
                        <div className="h-full w-full space-y-3">
                        <div className="w-full px-1 bg-white border border-customGray flex items-center justify-between rounded-radius-8 focus-within:ring-1 focus-within:ring-primary hover:ring-primary">
                            <ButtonNeutral classes='p-0 ml-1 rounded-full' icon1={<div className='relative size-[16px]'><Image src="/icons/search-md.svg" fill alt="search icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>} />
                            <Search onChange={handleSearch} />
                        </div>

                            <ul className="flex flex-col items-start justify-start gap-3 w-full">
                                {menuItems.map(item =>
                                    <li key={item.id} className='w-full'>
                                        <ButtonLinkNeutral
                                            href={item.url}
                                            key={item.id}
                                            btnText1={item.title}
                                            classes={`${isActivePath(item.url) ? "text-white bg-blue-600" : "text-textGray bg-transparent border-transparent"} focus:ring-transparent flex-1 flex items-center gap-3 w-full hover:text-white hover:bg-blue-600 py-2 px-3 rounded-radius-4 text-sm transition-all duration-300 ease-in-out`}
                                            icon1={<div className="relative size-[16px]"><Image src={`/icons/${item.icon}`} fill alt={`${item.title} icon`} title={`Go to ${item.title} page`} className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                                        />
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="pl-3 mt-10 flex items-center gap-3 border-t">
                            <div className="relative size-9">
                                <Image
                                    src="/images/cardinfra logo 1.svg"
                                    alt="cardinfra logo"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <p className='capitalize text-[12px] text-textGray font-semibold'>Adiran Haydn</p>
                                <p className='text-[10px] text-textGray'>adrian@smastery.pro</p>
                            </div>
                            <ButtonNeutral
                                onClick={() => router.push('/login')}
                                classes={`focus:ring-transparent bg-transparent border-transparent hover:bg-[#F6F6F6] border hover:border-customGray p-1 rounded-radius-4 transition-all duration-300 ease-in-out`}
                                icon1={<div className="relative size-[16px]"><Image src={`/icons/logout-02.svg`} fill alt={`logout icon`} title={`Logout`} className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
                            />
                        </div>
                    </div>
                </div>

            </div>
            
            {/* {openRight && (
                <>
                    <SidebarRight show="block" closeSidebar={closeSidebar} />

                    <div
                        onClick={closeSidebar}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    />
                </>
            )} */}
        </nav>
    );
};

export default Sidebar;

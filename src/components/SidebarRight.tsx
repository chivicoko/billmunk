import Image from 'next/image';
import ButtonNeutral from './button/ButtonNeutral';

interface SidebarProps {
    show?: string;
}
  
const SidebarRight: React.FC<SidebarProps> = ({ show = 'hidden' }) => {
    
    return (
        <nav className={`${show === 'block' ? 'fixed lg:hidden' : 'hidden'} border-r border-customGray lg:block top-0 left-0 z-50 lg:z-auto w-4/6 sm:w-3/6 lg:w-[23%] h-full min-h-screen bg-white`}>
            <div className="relative mb-16">
                <div className="relative w-full h-[100px]">
                    <Image
                        src="/images/victorokoye-1.png"
                        alt="Lapo's Logo"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className="absolute -bottom-1/2 left-4 size-20 rounded-full border-2 border-white shadow-md">
                    <Image
                        src="/images/giithome.png"
                        alt="Lapo's Logo"
                        fill
                        priority
                        className="object-cover rounded-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            <div className='px-4 mb-6'>
                <h2 className='font-semibold'>Adrian Hajdin</h2>
                <p className='text-textGray text-sm'>adrian@jsmastery.pro</p>
            </div>

            <div className="divide-y divide-customGray space-y-52">
                <div className='px-4'>
                    <div className="flex items-center justify-between">
                        <h2 className=''>My Banks</h2>
                        <ButtonNeutral btnText2='+' btnText1='Add bank' classes='text-sm space-x-2' btnText2Classes='text-lg' />
                    </div>

                    <div className="relative my-6">
                        <div className="absolute right-0 top-5 w-[90%] h-[130px] rounded-xl">
                            <Image
                                src="/images/victorokoye-1.png"
                                alt="Lapo's Logo"
                                fill
                                priority
                                className="object-cover rounded-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute left-0 top-0 w-[90%] h-[130px] rounded-xl">
                            <Image
                                src="/images/giithome.png"
                                alt="Lapo's Logo"
                                fill
                                priority
                                className="object-cover rounded-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                <div className='px-4 mt-26 pt-26'>
                    <div className="flex items-center justify-between">
                        <h2 className=''>My Budgets</h2>
                    
                        <ButtonNeutral btnText2='...' btnText1='' classes='text-sm space-x-2' btnText2Classes='text-lg' />
                    </div>

                    <div className='flex items-center justify-between bg-blue-50 w-full my-4 py-3 px-4 rounded-radius-8'>
                        <div className="relative size-6 rounded-full p-4 bg-blue-300">
                            <Image
                                src="/images/giithome.png"
                                alt="Lapo's Logo"
                                fill
                                priority
                                className="object-cover rounded-full"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="w-[85%]">
                            <p className='flex items-center justify-between pb-2'>
                                <span className='text-blue-800 text-sm'>Subscriptions</span>
                                <span className='text-blue-700 text-sm'>$28 left</span>
                            </p>
                            <span className='bg-blue-200 rounded-full flex items-center justify-start'>
                                <span className='bg-blue-700 px-2 py-1 w-[30%] rounded-full flex items-center justify-center'></span>
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center justify-between bg-red-50 w-full my-4 py-3 px-4 rounded-radius-8'>
                        <div className="relative size-6 rounded-full p-4 bg-red-300">
                            <Image
                                src="/images/giithome.png"
                                alt="Lapo's Logo"
                                fill
                                priority
                                className="object-cover rounded-full"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="w-[85%]">
                            <p className='flex items-center justify-between pb-2'>
                                <span className='text-red-800 text-sm'>Food and booze</span>
                                <span className='text-red-700 text-sm'>$120 left</span>
                            </p>
                            <span className='bg-red-200 rounded-full flex items-center justify-start'>
                                <span className='bg-red-700 px-2 py-1 w-[30%] rounded-full flex items-center justify-center'></span>
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center justify-between bg-green-50 w-full my-4 py-3 px-4 rounded-radius-8'>
                        <div className="relative size-6 rounded-full p-4 bg-green-300">
                            <Image
                                src="/images/giithome.png"
                                alt="Lapo's Logo"
                                fill
                                priority
                                className="object-cover rounded-full"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="w-[85%]">
                            <p className='flex items-center justify-between pb-2'>
                                <span className='text-green-800 text-sm'>Savings</span>
                                <span className='text-green-700 text-sm'>$50 left</span>
                            </p>
                            <span className='bg-green-200 rounded-full flex items-center justify-start'>
                                <span className='bg-green-700 px-2 py-1 w-[30%] rounded-full flex items-center justify-center'></span>
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default SidebarRight;

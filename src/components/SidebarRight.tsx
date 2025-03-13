import Image from 'next/image';
import ButtonNeutral from './button/ButtonNeutral';
import { budgets } from '@/utils/data';

interface SidebarProps {
    show?: string;
}
  
const SidebarRight: React.FC<SidebarProps> = ({ show = 'hidden' }) => {
    
    return (
        <nav className={`top-0 left-0 z-50 lg:z-auto w-4/6 sm:w-3/6 lg:w-[23%] h-full min-h-fit`}>
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
                        src="/images/3.jpeg"
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

                <div className='px-4'>
                    <div className="flex items-center justify-between pt-4">
                        <h2 className=''>My Budgets</h2>
                        <ButtonNeutral btnText2='...' btnText1='' classes='text-sm space-x-2' btnText2Classes='text-lg' />
                    </div>

                    {budgets.map(budget => 
                        <div key={budget.id} className={`flex items-center justify-between bg-${budget.overallColor}-50 w-full my-4 py-3 px-4 rounded-radius-8`}>
                            <div className={`rounded-full p-2 bg-${budget.overallColor}-300`}>
                                <div className={`relative size-4 rounded-full bg-${budget.overallColor}-300`}>
                                    <Image
                                        src={`/icons/${budget.icon}`}
                                        alt="Lapo's Logo"
                                        fill
                                        priority
                                        className="object-cover rounded-full"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            <div className="w-[85%]">
                                <p className='flex items-center justify-between pb-2'>
                                    <span className={`text-${budget.overallColor}-800 text-sm`}>{budget.text1}</span>
                                    <span className={`text-${budget.overallColor}-700 text-sm`}>{budget.text2}</span>
                                </p>
                                <span className={`bg-${budget.overallColor}-200 rounded-full flex items-center justify-start`}>
                                    <span className={`bg-${budget.overallColor}-700 px-2 py-1 w-[30%] rounded-full flex items-center justify-center`}></span>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default SidebarRight;

'use client';

import React, { useState } from 'react'
import BankAccountsPieChart from './dataDisplay/BankAccountsPieChart';
import ButtonNeutral from '../button/ButtonNeutral';
import { HomeTabs } from '@/utils/data';
import ChaseBank from './banks/ChaseBank';
import BankOfAmerica from './banks/BankOfAmerica';
import FirstPlatypusBank from './banks/FirstPlatypusBank';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Chase Bank');

    const handleTabClick = (name: string) => {
        setActiveTab(name);
    };
  return (
    <div className='w-full h-full min-h-full py-5 space-y-5'>
        <div>
            <h1 className='text-2xl font-semibold'>Welcome, <span className='text-blue-700'>Adrian</span></h1>
            <p>Access & manage your account and transactions efficiently.</p>
        </div>

        <div className='w-full rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
            <BankAccountsPieChart />
        </div>

        <div className="flex items-center justify-between">
            <h2 className='text-base font-semibold'>Recent transactions</h2>
            <ButtonNeutral btnText1='View all' classes='px-3 py-2 rounded-radius-8 border text-sm' />
        </div>

        <ul className="flex items-center gap-6 border-b">
            {HomeTabs.map(tab => 
                <li key={tab.id}><ButtonNeutral onClick={() => handleTabClick(tab.name)} btnText1={tab.name} classes={`${activeTab === tab.name ? 'text-blue-700 border-blue-700' : 'border-transparent'} text-sm hover:text-blue-700 border-b-2 hover:border-blue-700 py-1`} /></li>
            )}
        </ul>

        {activeTab === 'Chase Bank' && <ChaseBank />}
        {activeTab === 'Bank of America' && <BankOfAmerica />}
        {activeTab === 'First Platypus Bank' && <FirstPlatypusBank />}
    </div>
  )
}

export default Dashboard;
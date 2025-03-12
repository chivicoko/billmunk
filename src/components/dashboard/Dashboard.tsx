'use client';

import React, { useState } from 'react'
import CardStatusPieChart from './dataDisplay/CardStatusPieChart';
import ButtonNeutral from '../button/ButtonNeutral';
import { HomeTabs } from '@/utils/data';
import RecentCardRequestList from './dataDisplay/RecentCardRequestList';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Chase Bank');

    const handleTabClick = (name: string) => {
        setActiveTab(name);
    };
  return (
    <div className='w-full h-full min-h-full py-5 space-y-5'>
        <div>
            <h1 className='text-2xl'>Welcome, <span className='text-blue-700'>Adrian</span></h1>
            <p>Access & manage your account and transactions efficiently.</p>
        </div>

        <div className='w-full rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
            <CardStatusPieChart />
        </div>

        <div className="flex items-center justify-between">
            <h2 className='text-base font-semibold'>Recent transactions</h2>
            <ButtonNeutral btnText1='View all' classes='px-3 py-2 rounded-radius-8 border text-sm' />
        </div>

        <div>
            <ul className="flex items-center gap-6 border-b">
                {HomeTabs.map(tab => 
                    <li key={tab.id}><ButtonNeutral onClick={() => handleTabClick(tab.name)} btnText1={tab.name} classes={`${activeTab === tab.name ? 'text-blue-700 border-blue-700' : 'border-transparent'} text-sm hover:text-blue-700 border-b-2 hover:border-blue-700 py-1`} /></li>
                )}
            </ul>

            <div className='flex items-start justify-between bg-gray-100 w-full my-4 py-3 px-4 rounded-radius-4'>
                <div className="relative flex items-center justify-center gap-6 pt-3 pb-1">
                    <div className="size-12 flex items-center justify-center uppercase rounded-full bg-blue-800 text-white">
                        CB
                    </div>

                    <div className="">
                        <p className=''>Chase Bank</p>
                        <p className='text-blue-700 font-semibold'>$ 2,698.12</p>
                    </div>
                </div>

                <span className='text-green-700 bg-green-100 text-sm px-2 py-1 rounded-full flex items-center justify-center'>savings</span>
            </div>
        </div>

        <RecentCardRequestList />
    </div>
  )
}

export default Dashboard;
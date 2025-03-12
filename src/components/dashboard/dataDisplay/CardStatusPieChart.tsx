'use client';

import ButtonNeutral from '@/components/button/ButtonNeutral';
import { CardStatusDistribution, PIE_COLORS } from '@/utils/data';
import React, { useState, useEffect } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const CardStatusPieChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className='pt-1 px-2 flex items-start justify-between'>

      <div className="relative flex items-center justify-center gap-6 pt-3 pb-1">
        <PieChart width={200} height={200}>
          <Pie
            data={CardStatusDistribution}
            innerRadius={80}
            outerRadius={95}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="cards"
          >
            {CardStatusDistribution.map((entry, index) => (
              <Cell key={`cell-${entry.id || index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        <div className="">
          <p className='mb-6'>2 Bank Accounts</p>
          <p className='text-textGray text-sm'>Total Current Balance</p>
          <p className='text-textGrayDarker text-xl font-semibold'>$ 2,698.12</p>
        </div>
      </div>

      <ButtonNeutral btnText2='+' btnText1='Add bank' classes='text-blue-700 text-sm space-x-2' btnText2Classes='text-xl' />
    </div>
  );
};

export default CardStatusPieChart;

import { cardRequests, recentCardRequestTableHead } from '@/utils/data';

const RecentCardRequestList = () => {

  return (
    <div className={`pt-1 transition-all duration-300 ease-in-out`}>
      <div className="flex items-center justify-between gap-6 pt-4 pb-4">
        <div className="w-full overflow-x-scroll custom-scrollbar">
          <table className="min-w-full custom-scrollbar">
            <thead className="bg-transparent border-b border-customGray">
              <tr className="bg-neutral-100">
                {recentCardRequestTableHead.map(item => (
                  <th key={item.id} className={`py-[10px] text-[13px] whitespace-nowrap px-2 text-center text-textGray capitalize tracking-wider`}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {cardRequests.map(item => (
                <tr
                  key={item.id}
                  className={`my-2 ${item.status === 'Success' ? 'bg-green-50' : item.status === 'Declined' ? 'bg-orange-50' : 'bg-gray-50'}`}
                >
                  <td className={`relative 'py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>{item.transaction}</td>
                  <td className={`relative ${+item.amount < 1000  ? 'text-orange-700' : 'text-green-700'} py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>
                  {+item.amount < 1000  ? '-' : '+'} ${item.amount}
                  </td>
                  <td className={`relative py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>
                    <span className={`w-fit flex items-center gap-1 px-1 mx-auto ${item.status === 'Success' ? 'text-green-700 border-green-300 bg-green-100' : item.status === 'Declined' ? 'text-orange-700 border-orange-300 bg-orange-100' : 'text-gray-700 border-gray-300 bg-gray-100'} border rounded-full`}>
                      <div className={`size-1 rounded-full ${item.status === 'Success' ? 'bg-green-700' : item.status === 'Declined' ? 'bg-orange-700' : 'bg-gray-700'} `}></div>
                      {item.status}
                    </span>
                  </td>
                  <td className={`relative py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>{item.date}</td>
                  <td className={`relative py-[11px] text-[12px] px-2 text-center whitespace-nowrap w-2`}>
                    <span className={`w-fit flex items-center gap-1 px-1 mx-auto ${item.category === 'Deposit' ? 'text-green-700 border-green-300 bg-green-100' : item.category === 'Food' ? 'text-orange-700 border-orange-300 bg-orange-100' : item.category === 'Income' ? 'text-lime-700 border-lime-300 bg-lime-100' : item.category === 'Subscriptions' ? 'text-blue-700 border-blue-300 bg-blue-100' : item.category === 'Groceries' ? 'text-purple-700 border-purple-300 bg-purple-100' : 'text-gray-700 border-gray-300 bg-gray-100'} border rounded-full`}>
                      <div className={`size-1 rounded-full ${item.category === 'Deposit' ? 'bg-green-700' : item.category === 'Food' ? 'bg-orange-700' : item.category === 'Income' ? 'bg-lime-700' : item.category === 'Subscriptions' ? 'bg-blue-700' : item.category === 'Groceries' ? 'bg-purple-700' : 'bg-gray-700'} `}></div>
                      {item.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RecentCardRequestList;
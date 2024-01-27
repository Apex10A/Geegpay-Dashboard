import React, { useState } from 'react';
import EditButton from '../../../assets/Icons/Edit.png';

const CustomerDetails = () => {
  const initialRowCount = 5;
  const [visibleRows, setVisibleRows] = useState(initialRowCount);

  const rows = [
    {
      img: "Frame 1.png",
      name: 'Marcus Bergson',
      date: 'Nov 15 2023',
      amount: '$80,000',
      status: "Paid",
      invoice: "View",
    },
    {
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      name: 'Marcus Bergson',
      date: 'Nov 15 2023',
      amount: '$80,000',
      status: "Refund",
      invoice: "View",
    },
    {
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      name: 'Marcus Bergson',
      date: 'Nov 15 2023',
      amount: '$80,000',
      status: "Paid",
      invoice: "View",
    },
    {
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      name: 'Marcus Bergson',
      date: 'Nov 15 2023',
      amount: '$80,000',
      status: "Refund",
      invoice: "View",
    },
    {
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      name: 'Marcus Bergson',
      date: 'Nov 15 2023',
      amount: '$80,000',
      status: "Paid",
      invoice: "View",
    },
    {
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        name: 'Marcus Bergson',
        date: 'Nov 15 2023',
        amount: '$80,000',
        status: "Paid",
        invoice: "View",
    },
    {
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        name: 'Marcus Bergson',
        date: 'Nov 15 2023',
        amount: '$80,000',
        status: "Paid",
        invoice: "View",
    },
    {
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        name: 'Marcus Bergson',
        date: 'Nov 15 2023',
        amount: '$80,000',
        status: "Paid",
        invoice: "View",
      },
      {
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        name: 'Marcus Bergson',
        date: 'Nov 15 2023',
        amount: '$80,000',
        status: "Paid",
        invoice: "View",
      },
      {
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        name: 'Marcus Bergson',
        date: 'Nov 15 2023',
        amount: '$80,000',
        status: "Paid",
        invoice: "View",
      },
  ];

  const handleClick = () => {
    setVisibleRows((prevVisibleRows) =>
      prevVisibleRows === initialRowCount ? rows.length : initialRowCount
    );
  };

  return (
    <div className='items-center justify-center w-full'>
      <div className='transition-all px-5 duration-500'>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl p-10">Last Orders</h1>
          <p
            className="text-[#34caa5] text-lg cursor-pointer"
            onClick={handleClick}
          >
            {visibleRows === initialRowCount ? 'See All' : 'See Less'}
          </p>
        </div>

        <div className='xl:ml-20 overflow-scroll h-[400px] '>
          <div className='flex items-center justify-between'>
            <p className='w-1/6 font-bold'>Name</p>
            <p className='w-1/6 font-bold'>Date</p>
            <p className='w-1/6 font-bold'>Amount</p>
            <p className='w-1/6 font-bold'>Status</p>
            <p className='w-1/6 font-bold'>Invoice</p>
          </div>
          <hr className='mt-2' />

          {/* Map through rows and render details */}
          {rows.slice(0, visibleRows).map((row, index) => (
           <div>
             <div key={index} className='flex items-center justify-between mt-6 mb-5 '>
              <p className='w-1/6 font-bold opacity-[0.8]'>{row.name}</p>
              <p className='w-1/6'>{row.date}</p>
              <p className='w-1/6 font-bold opacity-[0.8]'>{row.amount}</p>
              <p className={`w-1/6 ${row.status === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>{row.status}</p>
              
              <div className='w-1/6 flex items-center cursor-pointer'>
                <img src={EditButton} className='mr-2 ' alt="Edit Icon" />
                <p>{row.invoice}</p>
              </div>
            </div>
            <hr />
           </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;

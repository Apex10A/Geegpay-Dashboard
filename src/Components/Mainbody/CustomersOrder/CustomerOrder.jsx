import React, {useContext} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { DarkModeContext } from '../../DarkModeContext';
import EditButton from '../../../assets/Icons/Edit.png'
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CustomerOrder = () => {
  const { darkMode } = useContext(DarkModeContext);
  const rows = [
    {
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
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
  ];
  return (
    <div  id='bg is white' className="w-[90%] h-[]">
      <div className="flex items-center justify-between">
      <h1 className="font-bold text-2xl p-10">Last Orders</h1>
      <p className="text-[#34caa5] text-lg">See All</p>
      </div>
      <TableContainer component={Paper} className="table" sx={{ backgroundColor: darkMode ? '#1e293b' : '#fff', color: darkMode ? '#fff' : '#1e293b', marginLeft: '30px', height: '200' }}>
      <Table sx={{ minWidth: 650, height: '200' }} className="overflow-x-auto block w-[95%]" aria-label="simple table">
        <TableHead>
        <TableRow>
    <TableCell className="tableCell"></TableCell>
    <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000', fontSize: '18px', opacity: '0.8', height: '200' }}>Name</TableCell>
    <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000', fontSize: '18px', opacity: '0.8'  }}>Date</TableCell>
    <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000', fontSize: '18px', opacity: '0.8' }}>Amount</TableCell>
    <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000', fontSize: '18px', opacity: '0.8'  }}>Status</TableCell>
    <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000', fontSize: '18px', opacity: '0.8'  }}>Invoice</TableCell>
  </TableRow>

        </TableHead>
        <TableBody>
  {rows.map((row) => (
    <TableRow key={row.id} sx={{height: '100'}}>
      <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000' }}>{row.id}</TableCell>
      <TableCell className="tableCell" sx={{height: '100'}}>
        <div className="cellWrapper">
          <img src={row.img} alt="" className="image" />
          {row.product}
          <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000', fontSize: '18px'  }}>{row.name}</TableCell>
        </div>
      </TableCell>
      <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000', fontSize: '18px', opacity: '0.7' }}>{row.date}</TableCell>
      <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000', fontSize: '18px', fontWeight: 'bold', opacity: '0.7'  }}>{row.amount}</TableCell>
      <TableCell className="tableCell" sx={{ color: darkMode ? '#fff' : '#000', fontSize: '18px'  }}>
      <span style={{ color: row.status === 'Paid' ? 'green' : 'red' }}>{row.status}</span>
      </TableCell>
      
      <TableCell className="tableCell flex" sx={{ color: darkMode ? '#fff' : '#000' , fontSize: '18px' }}> <img src={EditButton} alt=""/> {row.invoice}</TableCell>

    </TableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>
    </div>
  );
};

export default CustomerOrder;
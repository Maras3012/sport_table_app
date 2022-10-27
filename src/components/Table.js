import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData1(club, played, won, drawn, lost, gd, points) {
  return { club, played, won, drawn, lost, gd, points };
}

function createData2(club, guest, dt) {
  return { club, guest, dt };
}

const rows1 = [
  createData1('Dinamo', 11, 10, 1, 0, 22, 31),
  createData1('Hajduk', 11, 7, 2, 2, 9, 23),
  createData1('Osijek', 12, 6, 3, 3, 8, 21),
  createData1('Slaven', 12, 5, 2, 5, -13, 17),
  createData1('Varazdin', 12, 4, 4, 4, -1, 16),
];

const rows2 = [
  createData2('Hajduk', 'Slaven', '10.11. 18:40'),
  createData2('Osijek', 'Dinamo', '12.11. 19:00'),
  createData2('Dinamo', 'Hajduk', '19.11. 18:40'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        style={{ backgroundColor: 'lightblue' }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Championship 2022/2023</TableCell>
            <TableCell align="right">Played</TableCell>
            <TableCell align="right">Won</TableCell>
            <TableCell align="right">Drawn</TableCell>
            <TableCell align="right">Lost</TableCell>
            <TableCell align="right">GD</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.club}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.club}
              </TableCell>
              <TableCell align="right">{row.played}</TableCell>
              <TableCell align="right">{row.won}</TableCell>
              <TableCell align="right">{row.drawn}</TableCell>
              <TableCell align="right">{row.lost}</TableCell>
              <TableCell align="right">{row.gd}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      {/* future games */}
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        style={{ backgroundColor: 'lightgreen' }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Future games 2022/2023</TableCell>
            <TableCell align="right">Guest</TableCell>
            <TableCell align="right">Date & Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.club}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.club}
              </TableCell>
              <TableCell align="right">{row.guest}</TableCell>
              <TableCell align="right">{row.dt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import * as React from 'react';
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid';
const sample = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
  return { id, dessert, calories, fat, carbs, protein };
}

const columns = [
  {
    width: 200,
    headerName: 'Dessert',
    field: 'dessert',
  },
  {
    width: 120,
    headerName: 'Calories\u00A0(g)',
    field: 'calories',
    numeric: true,
  },
  {
    width: 120,
    headerName: 'Fat\u00A0(g)',
    field: 'fat',
    numeric: true,
  },
  {
    width: 120,
    headerName: 'Carbs\u00A0(g)',
    field: 'carbs',
    numeric: true,
  },
  {
    width: 120,
    headerName: 'Protein\u00A0(g)',
    field: 'protein',
    numeric: true,
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const Lab8 = () => {
    return (
            <div>
                <h2>Лабораторная работа 8</h2>
                <Box sx={{ height: 400, width: { xl: '50%',lg: '75%',md: '75%',sm: '100%', xs: '100%' } }}>
                  <DataGrid rows={rows} columns={columns} columnBufferPx={100} />
                </Box>
            </div>
        )
}

export default Lab8
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import "./Progresso.css";

export  const Progresso = () => {
  return (
    <Stack sx={{ color: '#5a2f8b' }} spacing={2} direction="row" className='BarraDeProgesso'>
      <CircularProgress color="inherit" className='TamanhoBarrinhaProgresso'/>
    </Stack>
  );
}
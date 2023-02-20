import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import './css/Home.css';
import { useSelector } from 'react-redux';
import PaidIcon from '@mui/icons-material/Paid';
import { Box } from '@mui/system';

import { selectWidgets } from '../../../store/widgetsSlice';

function IssuesWidget() {
  const widgets = useSelector(selectWidgets);
  const { data, title } = widgets?.overdue;

  return (
    <Paper className="relative  h-[180px] shadow  rounded-2xl overflow-hidden">
      <Box className="absolute w-[50px] h-[50px] bg-cyan-300 flex justify-center items-center top-[4px]  left-[35%] ">
        <IconButton>
          <PaidIcon className="text-white" />
        </IconButton>
      </Box>

      <Typography
        className="absolute top-[38%] left-[15%] text-cyan-200"
        fontWeight={900}
        fontSize={30}
      >
        3,000,00
      </Typography>
      <Typography className="absolute left-[35%] bottom-[43px] text-center">Paid</Typography>
    </Paper>
  );
}

export default memo(IssuesWidget);

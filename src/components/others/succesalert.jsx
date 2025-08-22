import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ActionAlerts({setsuccess}) {
 const undo=()=>
 {
    setsuccess(false);
    window.location.reload();
 }

  return (
    <Stack  className='px-8 w-[500px] m-auto mb-5 rounded-sm  animate-pulse'>
      {/* <Alert severity="warning" onClose={() => {}}>
        This Alert displays the default close icon.
      </Alert> */}
      <Alert
        severity="success"
        action={
          <Button onClick={undo} color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        Task created successfully.
      </Alert>
    </Stack>
  );
}
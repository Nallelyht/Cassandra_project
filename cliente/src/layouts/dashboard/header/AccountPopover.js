import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Divider, MenuItem, IconButton, Popover, Typography, Box, Avatar } from '@mui/material';
// mock
import account from '../../../_mock/account'
// Utils
import { ResetLocalData } from '../../../utils/localData';

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(null);

  const { displayName, email, photoURL } = account;

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    ResetLocalData()
    navigate('/dashboard/products', { replace: true });
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >

        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {email}
          </Typography>
        </Box >

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Reset app
        </MenuItem>
      </Popover>
    </>
  );
}
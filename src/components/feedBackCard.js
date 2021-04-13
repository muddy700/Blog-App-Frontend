import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert  variant="filled" {...props} />;
}

export const FeedBack = ({type, status, message }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    };
    const vertical = 'top';
    const horizontal = 'center';

  return (
      <Snackbar
          open={open | status}
          autoHideDuration={3000}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          onClose={handleClose}>
        <Alert onClose={handleClose}  severity={type}>
          {message}
        </Alert>
      </Snackbar>
  );
}

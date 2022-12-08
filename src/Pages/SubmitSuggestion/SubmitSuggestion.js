import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Container, Dialog, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageUploader from 'react-images-upload';



const SubmitSuggestion = () => {
  const [open, setOpen] = React.useState(false);
  const [FormData, setFormData] = React.useState({

  });


  const onDrop = (pictureFiles, pictureDataURLs) => {
    console.log({ pictureFiles, pictureDataURLs });
  };


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant='contained' sx={{ alignSelf: 'flex-end' }} onClick={handleClickOpen}>Add New Suggestion</Button>
      <Dialog fullWidth={true} maxWidth={'lg'} open={open} onClose={handleClose}
        sx={{ overflowX: 'hidden' }}
      >

        <form>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '20px', width: '%' }}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', width: '100%', gap: '2rem' }}>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '100%' }} />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '100%' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', width: '100%', gap: '2rem' }}>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '100%' }} />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '100%' }} />
            </Box>
            <TextField multiline rows={4} id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: '100%' }} />
            <ImageUploader
              style={{ width: '300px', boxShadow: '2px 2px  #999,-2px -2px #999' }}
              withIcon={true}
              buttonText='Choose images'
              onChange={onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />
            <Button variant='contained'>Submit</Button>
          </Box>
        </form>

      </Dialog>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align='right' >Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align='right' sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'flex-end' }}>
                  <IconButton color='primary' ><EditIcon /></IconButton>
                  <IconButton><DeleteIcon color='error' /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SubmitSuggestion




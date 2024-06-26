import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';


export default function FormDialog({ open, onClose }) {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.email || !formValues.name || !formValues.number) {
      alert('Veuillez remplir tous les champs.');
      return; 
    }
    alert('Formulaire soumis avec succès!');
    setFormValues({ email: '', name: '', number: '', message: '' }); 
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: 'rgb(222 223 233)',
          borderRadius: '60px',
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center', padding: '20px', color: '#fff' }}>
          <img src={cogeb} alt="Silver Line Solution" style={{ width: '80px', height: 'auto', margin: '0 auto' }} />
          {/* <Typography variant="h6" component="h2">
            Contactez-nous
          </Typography> */}
        </div>
        <DialogContent style={{ color: '#fff' }}>
          <TextField
            autoFocus
            // margin="dense"
            name="email"
            label="Adresse e-mail"
            type="email"
            fullWidth
            variant="outlined"
            value={formValues.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'black' } }}
            inputProps={{ style: { color: 'black' } }}
          />
          <TextField
            margin="dense"
            name="name"
            label="Nom & Prenom"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.name}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'black' } }}
            inputProps={{ style: { color: 'black' } }}
          />
          <TextField
            margin="dense"
            name="number"
            label="Numéro de téléphone"
            type="number"
            fullWidth
            variant="outlined"
            value={formValues.number}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'black' } }}
            inputProps={{ style: { color: 'black' } }}
          />
        </DialogContent>
        <DialogActions className="button-container" style={{ justifyContent: 'center' }}>
          <Button 
            type="submit"
            style={{
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
                padding: '0.8rem 1.2rem',
                color: 'var(--whiteColor)',
                fontWeight: 500,
                background: 'linear-gradient(40deg, rgb(114, 145, 255), rgb(42, 73, 198))'
            }}
          >
            Envoyer
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    margin: 25
  }
})

function Cadastro() {

  const classes = useStyles();
  return (
    <Container maxWidth="sm" padding="100">
      <React.Fragment>
        <Typography variant="h3" gutterBottom>
         The Trip Game - cadastro
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nome"
              fullWidth
              autoComplete="nome"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Sobrenome"
              fullWidth
              autoComplete="sobrenome"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Endereço"
              fullWidth
              autoComplete="Endereço"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Bairro"
              fullWidth
              autoComplete="Bairro"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Cidade"
              fullWidth
              autoComplete="Cidade"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="uf" label="UF" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="cep"
              label="Cep"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="País"
              fullWidth
              autoComplete="País"
            />
          </Grid>
        </Grid>
      </React.Fragment>
      <Grid>
        <Grid item xs={12} sm={6} container spacing={3}>
          <Link to="/">
            <Button variant="contained" color="primary" className={classes.button}>
              Cadastrar
            </Button>
          </Link>
        </Grid>
      </Grid>

    </Container>
    );
}

export default Cadastro;

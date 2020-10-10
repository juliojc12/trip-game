import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function LoginPage() {
  const classes = useStyles();

  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.user)

  }
  const responseFacebook = (response) => {
    console.log(response)
    console.log("test")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Trip Game
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar-me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>

          <Grid container>
            <Grid item xs>
              <GoogleLogin 
                clientId = "741832924126-ida6s7ioj1ido6164e1881pdcvcgbdjc.apps.googleusercontent.com"
                buttonText = "Login com Google"
                onSuccess = {responseGoogle}
                onFailure = {responseGoogle}
                cookiePolicy = {'single_host_origin'}
              />
            </Grid>

            <Grid item>
              <FacebookLogin 
                appId="759638867934490"
                fields = "name, email, picture"
                scope = "public_profile, email, user_brithday"
                onClick={ responseFacebook }
                callback = { responseFacebook }
                icon="fa-facebook"
                render={renderProps => (
                  <Link to='/'> Facebook </Link>
                )}
              />
            </Grid>
          </Grid>





          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid> */}
            <Grid item xs>
              <Link to="/cadastro">
                Não têm uma conta? cadastre-se.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


export default LoginPage;

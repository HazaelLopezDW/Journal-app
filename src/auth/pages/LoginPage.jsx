import { Google } from "@mui/icons-material"
import { Alert, Button, 
         Grid, 
         Link, 
         TextField, 
         Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout"

import { useForm } from "../../hooks/useForm"
import { useDispatch, 
         useSelector } from "react-redux"
import { startGoogleSignIn, 
         startLoginWitEmailAndPassword } from "../../store/auth"
import { useMemo } from "react"

export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const onSubmit = (ev) => {
    ev.preventDefault();
    dispatch(startLoginWitEmailAndPassword({email, password}));
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid 
            container
            display={!!errorMessage ? '' : 'none'}
            sx={{ mt: 1 }}
          >
            <Grid
              item
              xs={12}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={isAuthenticating}
                type="submit" 
                variant="contained" 
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={isAuthenticating}
                onClick={onGoogleSignIn} 
                variant="contained" 
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear unacuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

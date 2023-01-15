import React, { useRef, useState } from 'react'
import { Alert, TextField, FormControl, Typography, Link } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../context/AuthContext'
import { Box } from '@mui/system'
import { StyledButton } from '../components/StyledComponents'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
      e.preventDefault()      

      try {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history('/dashboard')
      } catch {
        setError('Failer to login')
      }
      setLoading(false)
      
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 3, width: '25ch' },
      }}
      display="flex" 
      alignItems="center"
      justifyContent="center"
      >
        <Card variant="outlined">
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                  <Avatar sx={{ m: 1, bgcolor: '#8D8DDA', alignItems: 'center' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Box>
                <Typography sx={{ fontSize: 22, textAlign: 'center' }} color="text.secondary" gutterBottom>Login</Typography>
                <FormControl sx={{ width: '25ch' }}>
                    {error &&  <Alert severity="error">{error}</Alert>}
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        inputRef={emailRef} />
                    <TextField 
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" 
                        type="password"
                        inputRef={passwordRef} />
                    <Box
                    display="flex" 
                    alignItems="center"
                    justifyContent="center"
                    >
                      <StyledButton sx={{mt: 3}} type="submit" disabled={loading} variant="contained" onClick={handleSubmit}>Login</StyledButton>
                    </Box>
                <Typography sx={{ mt: 2, fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                        <Link href="/forgot-password">Forgot Password?</Link>
                </Typography>
                <Typography sx={{ mt: 2, fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                        <Link href="/signup">Create Account</Link>
                </Typography>
                </FormControl>
            </CardContent>
        </Card>
      </Box>
  )
}

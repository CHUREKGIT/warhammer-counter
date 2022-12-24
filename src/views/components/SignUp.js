import React , { useRef, useState } from 'react'
import { Alert, TextField, FormControl, Typography, Card, CardContent, Link } from '@mui/material'
import { useAuth } from '../context/AuthContext'
import { Box } from '@mui/system'
import { StyledButton } from './StyledComponents'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmationRef.current.value){
        return setError('Passwords not match')
      }

      try {
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history('/dashboard')
      } catch {
        setError('Failer to create a account')
      }
      setLoading(false)
      
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {mt:3, width: '25ch' },
      }}
      display="flex" 
      alignItems="center"
      justifyContent="center"
      >
        <Card variant="outlined">
            <CardContent>
            <Typography sx={{ fontSize: 22, textAlign: 'center' }} color="text.secondary" gutterBottom>Sign Up!</Typography>
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
                  inputRef={passwordRef} />
                <TextField 
                  id="outlined-basic"
                  label="Confrim Password" 
                  inputRef={passwordConfirmationRef} 
                  variant="outlined" />
                <Box
                display="flex" 
                alignItems="center"
                justifyContent="center"
                >
                <StyledButton sx={{mt: 3}} type="submit" disabled={loading} variant="contained" onClick={handleSubmit}>Sign Up</StyledButton>
                </Box>
              </FormControl>
              <Typography sx={{ mt: 2, fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                        <Link href="/login">Back to login in</Link>
                </Typography>
          </CardContent>
        </Card>
      </Box>
  )
}

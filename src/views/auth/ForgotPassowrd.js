import React, { useRef, useState } from 'react'
import { Alert, TextField, FormControl, Typography, Link } from '@mui/material'
import { useAuth } from '../context/AuthContext'
import { Box } from '@mui/system'
import { StyledButton } from '../components/StyledComponents'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function ForgotPassowrd() {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
      e.preventDefault()

      try {
        setMessage('')
        setError('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage('Check your mailbox!')
      } catch {
        setError('Failed to reset password')
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
                <Typography sx={{ fontSize: 22, textAlign: 'center' }} color="text.secondary" gutterBottom>Reset Password</Typography>
                <FormControl sx={{ width: '25ch' }}>
                    {error &&  <Alert severity="error">{error}</Alert>}
                    {message &&  <Alert severity="success">{message}</Alert>}
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        inputRef={emailRef} />
                    <Box
                    display="flex" 
                    alignItems="center"
                    justifyContent="center"
                    >
                <StyledButton sx={{mt: 3}} type="submit" disabled={loading} variant="contained" onClick={handleSubmit}>Reset Password</StyledButton>
                </Box>
                <Typography sx={{ mt: 2, fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                        <Link href="/login">Back to Login?</Link>
                </Typography>
                </FormControl>
            </CardContent>
        </Card>
      </Box>
        

  )
}

import { TextField, Button, ButtonProps } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      neutral: {
        main: '#09E9D2',
        contrastText: '#fff',
      },
    },
  });

declare module '@mui/material/styles' {
    interface Palette {
      neutral: Palette['primary'];
}
interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
      neutral: true;
    }
}

export const StartButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#8D8DDA',
    borderRadius: 63,
    '&:hover': {
      backgroundColor: '#8D8DDA',
    },
  }));

export const SelectArmyStyledTextField = styled(TextField)(({ theme }) => ({
    input: {
      color: '#09E9D2'
    },
    "& label, & label.Mui-focused": {
    color: 'rgba(255, 255, 255, 0.4)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
        '&:hover fieldset': {
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
    }
  }));

export const MissionSelectStyledTextField = styled(TextField)(({ theme }) => ({
    input: {
        color: '#09E9D2'
    },
    "& label, & label.Mui-focused": {
    color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#09E9D2',
        },
        '&:hover fieldset': {
          borderColor: '#fff',
        },
    }
  }));

export const StyledButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#8D8DDA',
    borderRadius: 63,
    '&:hover': {
      backgroundColor: '#8D8DDA',
    },
  }));
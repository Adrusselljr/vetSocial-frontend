import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material";

const DarkSlateGray = '#242526'
const TextColor = '#e4e6eb'

const Theme = createTheme({
    palette: {
        primary: {
        main: DarkSlateGray,
        },
        secondary: {
        main: TextColor,
        },
    },

    typography: {
        fontSize: 15,
    },
    
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                borderRadius: '25px',
                fontSize: '.75rem'
                }
            }
        }
    }
})

    const CustomThemeProvider = props => {
    const { children } = props

    return (
    <ThemeProvider theme={ Theme }>
        { children }
    </ThemeProvider>
    )
}

export default CustomThemeProvider
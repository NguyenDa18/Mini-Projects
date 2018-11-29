import React, { Component } from 'react'

// MUI-CORE
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// // import AppBar from '@material-ui/core/AppBar'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import classNames from 'classnames'

// MUI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    
    render() {
        const { values, handleChange } = this.props;
        // const theme = createMuiTheme({
        //     typography: {
        //         useNextVariants: true,
        //       },
        //     });
        
        return (
            // <MuiThemeProvider theme={theme}>
            //     <div>
            //         <AppBar title="Enter User Details">
            //             <Toolbar>
            //               <Typography variant="h6" color="inherit">
            //                 Enter User Details
            //               </Typography>
            //             </Toolbar>
            //         </AppBar>
            //         <div>
            //         <TextField 
            //         id="firstname"
            //         placeholder="First Name"
            //         label="First Name"
            //         onChange={handleChange}
            //         >
            //         First Name
            //         </TextField>
            //         </div>
            //     </div>
            // </MuiThemeProvider>
            <MuiThemeProvider>
                <AppBar title="Enter User Details" />
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
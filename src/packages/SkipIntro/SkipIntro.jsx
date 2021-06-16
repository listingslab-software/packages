import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    createMuiTheme,
    MuiThemeProvider,
    CssBaseline,
    Typography,
    Button,
} from '@material-ui/core/'
import { theme } from './theme'

const useStyles = makeStyles( theme => ({
    skipIntro:{
        // border: '1px solid ' + theme.palette.secondary.main,
    },
    htags: {
        fontWeight: 'lighter',
    },
    centerize: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
    }
}))

export default function SkipIntro( props ) {

    const classes = useStyles()
    const {
        options,
    } = props

    const {
        title,
        btnTxt,
        onClick,
        borderColor,
        height,
        width,
        centerize,
    } = options


    return <MuiThemeProvider theme={ createMuiTheme( theme ) }>
                <CssBaseline />
                { centerize ? null : null }
                <div className={ clsx( centerize ? classes.centerize : null ) }>
                    <div className={ clsx( classes.skipIntro) }
                        style={{
                            border: '1px solid ' + borderColor,
                            height,
                            width,
                        }}>
                        <Typography variant={ `h4` } className={ clsx( classes.htags) }>
                            { title }
                        </Typography>
                        <Button
                            variant={ `outlined` }
                            color={ `primary` }
                            onClick={ onClick }>
                            { btnTxt }
                        </Button>
                   </div>
               </div>
           </MuiThemeProvider> 
}

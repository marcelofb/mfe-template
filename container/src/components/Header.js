import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    '@global': {
        a: {
            textDecoration: 'none'
        }
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper
    },
    toolbar: {
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    link: {
        margin: theme.spacing(1, 1.5)
    }
}))

export default function Header({ isSignedIn, onSignOut }) {
    const classes = useStyles()

    const onClick = () => {
        if (isSignedIn && onSignOut) {
            onSignOut()
        }
    }

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Toolbar className={classes.toolbar}>
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    component={Link}
                    to="/"
                >
                    App
                </Typography>
                <Button
                    color="primary"
                    variant="outlined"
                    className={classes.link}
                    component={Link}
                    to={isSignedIn ? '/' : '/auth/signin'}
                    onClick={onClick}
                >
                    {isSignedIn ? 'Logout' : 'Login'}
                </Button>
            </Toolbar>
        </AppBar>
    )
}

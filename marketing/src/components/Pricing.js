import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

export default function Pricing() {
    return (
        <>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
            >
                Pricing
            </Typography>
            <Button
                component={Link}
                to="/auth/signup"
                fullWidth
                color="primary"
            >
                Signup
            </Button>
        </>
    )
}

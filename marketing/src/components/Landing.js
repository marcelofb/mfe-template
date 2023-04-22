import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

export default () => (
    <>
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
        >
            Home Page
        </Typography>
        <Link to="/pricing">
            <Button variant="contained" color="primary">
                Pricing
            </Button>
        </Link>
    </>
)

import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Link } from '@mui/material'

export const Footer = () => {
  return (
    <div id="footer" className="text-center">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <Typography variant="body2" color="textSecondary" align="left">
              &copy; 2023 All rights reserved by{' '}
              <Link href="https://sunshineschool.in/" rel="" color="primary" underline="none">
                SUNSHNE SCHOOL
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="body2" color="textSecondary" align="right">
              Designed By{' '}
              <Link href="http://www.jgntechnologies.com/" rel="" color="primary" underline="none">
                JGN TECHNOLOGIES
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

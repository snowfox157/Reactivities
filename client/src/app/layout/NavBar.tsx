import { Group } from '@mui/icons-material'
import { Box, AppBar, Toolbar, Container, MenuItem, Typography } from '@mui/material'
import { NavLink } from 'react-router'
import MenuItemLink from '../shared/components/MenuItemLink'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
      }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant='h4' fontWeight="bold">Reactivities</Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: ' flex' }}>
              <MenuItemLink to='/activities'>
                Activities
              </MenuItemLink>
              <MenuItemLink to='/createActivity'>
                Create Activity
              </MenuItemLink>
              <MenuItem sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bild'
              }}>
                Contact
              </MenuItem>
            </Box>
            <MenuItem>
              User menu
            </MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

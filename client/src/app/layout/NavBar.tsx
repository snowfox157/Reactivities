import { Group } from '@mui/icons-material'
import { Box, AppBar, Toolbar, Container, MenuItem, Typography, Button } from '@mui/material'

type Props = {
  openForm: () => void;
}

export default function NavBar({openForm}:Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
          background: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
        }}>
          <Container maxWidth="xl">
            <Toolbar sx={{display: 'flex', justifyContent:'space-between'}}>
              <Box sx={{display: 'flex'}}>
                <MenuItem sx={{display:'flex', gap: 2}}>
                  <Group fontSize="large" />
                  <Typography variant='h4' fontWeight="bold">Reactivities</Typography>
                </MenuItem>
                <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bild'                  
                }}>
                  Activities
                </MenuItem>
                <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bild'                  
                }}>
                  About
                </MenuItem>
                <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bild'                  
                }}>
                  Contact
                </MenuItem>
              </Box>
              <Button 
                size="large" 
                variant='contained' 
                color='warning'
                onClick={openForm}
                >
                  Create Activity</Button>
            </Toolbar>
          </Container>
      </AppBar>
    </Box>
  )
}

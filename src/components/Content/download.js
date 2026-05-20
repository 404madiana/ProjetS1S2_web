import {  Box, Container,  Typography, useTheme } from '@mui/material';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText,  } from '../../styles/banner';
import img2 from "../../assets/img/Nano.png"
import Button from '@mui/material/Button';


export default function Content(){

    return(

        <Container maxWidth="false" disableGutters>

          <Box display='flex' justifyContent= 'center' width= '100%' height= '40vh' bgcolor={Colors.primary}>
            <BannerContent>
              <BannerText>Download</BannerText>
            </BannerContent>
          </Box>
          <Box sx={{ py: 4, px: 20,display: "flex", justifyContent: "flex-end", }}>
            <Box sx={{flex: 1}}>
            </Box>
            
            <Box sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              px: 6 }}>
              <Typography variant="h4" fontWeight="bold">
                A 2D ROGUE LIKE SET IN THE HUMAN BODY
              </Typography>

              <Typography sx={{mt: 2, pl:4 }}>
                Pharmacology is history. To save the patient, you must shrink down and strike the evil at its core. The body is your battlefield.
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Encore du contenu...<br/>ecd
              </Typography>
              <Button
                component="a"
                href={img2}
                download="Nano.png"
                sx={{ my: 3, color: "black", display: "block" }}
              >
                Download
              </Button>
            </Box>

            <Box sx={{flex: 2}}>
              <img src = {img2} style={{ 
                height: '80%', // L'image fait exactement 30px de haut
                width: 'auto'   // La largeur s'ajuste pour ne pas écraser l'image
              }}/>
            </Box>
            
          </Box>
          <Box sx={{maxwidth: 'sm', height: '30px', bgcolor: Colors.dark}}>
            <Typography sx={{color: Colors.secondary, textAlign: 'center', fontSize: '1rem'}}>


                © 2025 Chromo Team. All right reserved.
              </Typography>
          </Box>



        </Container>


        
    );
};
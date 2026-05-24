import {  Box, Container,  Typography, useTheme } from '@mui/material';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText,  } from '../../styles/banner';
import imgTravaux from "../../assets/img/travaux.png"
import img2 from "../../assets/img/Nano.png"
import logo from "../../assets/img/logo.png"
import banner from "../../assets/img/banner.jpg"
import Button from '@mui/material/Button';


export default function Content(){

    return(

        <Container maxWidth="false" disableGutters>
          
          <Box sx={{ py: 4, px: 20, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "end",
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              zIndex: 0,
            }
          }}>
            <img src={logo} style={{ 
              height: 'auto',
              width: '50%',
              marginBottom: '20px',
              marginRight: '-40px'
            }}/>
            <Button
              component="a"
              href={img2}
              download="Nano.png"
              sx={{ my: 3, color: "black", display: "block" , fontSize: '30px'}}>
                Download game
            </Button>
          </Box>
          <Box display='flex' justifyContent= 'center' width= '100%' height= '40vh' bgcolor={Colors.primary}
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              filter: 'blur(10px)',
              zIndex: 0,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: Colors.primary,
              opacity: 0.8,
              zIndex: 1,
            }
          }}>
            <BannerContent sx={{ position: 'relative', zIndex: 2 }}>
              <BannerText>Become the ultimate antibody. No more pills. The best cure... is you.</BannerText>
            </BannerContent> 
          </Box>
          <Box sx={{ py: 4, px: 20,display: "flex", justifyContent: "flex-end",
            '&::before': {
              content: '""',
              bgcolor: 'white'
            }
          }}>
            
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
          <Box display='flex' alignItems= 'center' width= '100%' height= '40vh' bgcolor={Colors.primary} sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              filter: 'blur(10px)',
              zIndex: 0,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: Colors.primary,
              opacity: 0.4,
              zIndex: 1,
            }
          }}>
            <Box sx={{flex: 0, alignItems: 'initial', position: 'relative', zIndex: 2}}>
              <BannerContent>
                <BannerText>Website under construction...</BannerText>
              </BannerContent>
            </Box>
            
            <Box sx={{flex: 1, textAlign: 'end', position: 'relative', zIndex: 2}}>
              <img src = {imgTravaux} style={{ 
                height: 'auto', // L'image fait exactement 30px de haut
                width: '30%'   // La largeur s'ajuste pour ne pas écraser l'image
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
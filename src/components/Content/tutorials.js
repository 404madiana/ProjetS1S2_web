import { Box, Container, Typography } from '@mui/material';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText } from '../../styles/banner';
import { TitleStyles, BodyTextStyles } from '../../styles/contentBoxes';
import img2 from "../../assets/img/Nano.png"
import banner from "../../assets/img/banner.jpg"
import Footer from '../Footer';

export default function Tutorials() {
  return (
    <Container maxWidth="false" disableGutters sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Title Banner */}
      <Box display='flex' justifyContent='center' width='100%' height='40vh' bgcolor={Colors.primary}
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
        <Box
          component="svg"
          viewBox="0 0 1440 320"
          sx={{
            position: 'absolute',
            bottom: -4,
            left: 0,
            width: '100%',
            height: 'auto',
            display: 'block',
            zIndex: 0,
          }}>
          <path
            fill={Colors.primary}
            fillOpacity="1"
            d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
        </Box>  
      </Box>

      {/* Content Section */}
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        justifyContent: "flex-end",
        bgcolor: 'white',
        position: 'relative',
        zIndex: 1,
        flex: 1
      }}>
        <Box sx={{ flex: 1 }}></Box>

        <Box sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}>
          <Typography sx={TitleStyles.mainTitle}>
            TUTORIALS
          </Typography>

          <Typography sx={{ ...BodyTextStyles.defaultText, mt: 2 }}>
            Learn the fundamentals of Nano and master the gameplay mechanics.
          </Typography>

          <Typography sx={{ ...BodyTextStyles.descriptionText, mt: 3 }}>
            Coming soon! We're preparing comprehensive tutorials to help you become the ultimate surgeon. Check back soon for video guides, gameplay tips, and advanced strategies.
          </Typography>
        </Box>

        <Box sx={{ flex: 2 }}>
          <img src={img2} style={{
            height: '80%',
            width: 'auto',
            maxHeight: '300px'
          }} alt="Nano Game Preview"/>
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}

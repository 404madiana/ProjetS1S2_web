import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, ThemeProvider, } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/Banner';

/* Pages */
import Accueil from './components/Content';
import Download from "./components/Content/download"
import Tutos from "./components/Content/tutorials"
import Wiki from "./components/Content/wiki"
import Credits from "./components/Content/chromo_team"


function App() {

  useEffect(()=>{
    document.title = "Nano Project"
  },[]);


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="false" disableGutters
      sx={{background: "#fff"}}>
        <BrowserRouter>

          {/*AppBar*/}
          <Appbar />
          {/*Banner*/}
          <Banner />

          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/download' element={<Download />} />
            <Route path='/tutorials' element={<Tutos />} />
            <Route path='/wiki' element={<Wiki />} />
            <Route path='/chromo_team' element={<Credits />} />
          </Routes>
        </BrowserRouter>
          
      </Container>
    </ThemeProvider>

  );
}

export default App;

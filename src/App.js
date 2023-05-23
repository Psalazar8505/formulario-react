import './App.css';
import FormSignUp from './Componentes/FormSignUp';
import { Container } from "@mui/material"
import Typography from '@mui/material/Typography';

function App() {

  const handleSubmit = (valores) => {
    console.log('APPJS', valores)
  }

  return (
    <Container component="section" maxWidth="sm" >
      <Typography variant='h3' align='center'>Formulario Registro</Typography>
        <FormSignUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;

import { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Switch } from "@mui/material";
import { FormGroup } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSignUp ({handleSubmit}){    
    const [name, setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)
    return <form 
        onSubmit={(e) => {       
            e.preventDefault()
            handleSubmit({
                name,
                lastName,
                email,
                prom,
                nov
                })
            }}
        >        
        <TextField 
            id="mane" 
            label="Nombre" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={name}
            onChange={(e) =>                 
                setName(e.target.value)
            }            
        />
        <TextField 
            id="lastmane"
            label="Apellidos"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => 
                setLastName(e.target.value)
            }
        />
        <TextField 
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) =>
                setEmail(e.target.value)}
            />
        <FormGroup>
            <FormControlLabel control={
                <Switch                      
                    checked={prom} 
                    onChange={(e) =>
                        setProm(e.target.checked)
                    }

                />} 
                label="Promociones"
            />
            <FormControlLabel control={
                <Switch 
                    checked={nov}
                    onChange={(e) =>
                        setNov(e.target.checked)
                    }
                />}
                label="Novedades" 
            />        
        </FormGroup>
        <Button 
            variant="contained" 
            type="submit"           
        >
            Registrarse
        </Button>
    </form>
}

export default FormSignUp
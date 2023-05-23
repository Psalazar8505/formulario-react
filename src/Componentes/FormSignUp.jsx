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

    const [errors, setErrors] = useState({
            name: {
                error: false,
                message: "Debe tener al menos 3 caracteres"
            },                
            lastName:{
                error: false,
                message: "Debe tener al menos 3 caracteres"
            }
        }
    )

    function validarNombre (nombre) {
        if(nombre.length >= 3){
            return { name:{error: false,message: ''} }
        }else{
            return { name: {error: true,message: 'Debe tener al menos 3 caracteres'} }
        }
    }

    function validarApellido (apellido) {
        if(apellido.length >= 3){
            return { lastName:{error: false,message: ''} }
        }else{
            return { lastName: {error: true,message: 'Debe tener al menos 3 caracteres'} }
        }
    }    
    console.log(errors.lastName.error)
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
            error={errors.name.error}
            helperText={
                errors.name.error 
                    ? errors.name.message 
                    : ''
            }
            onBlur={(e) => {
                setErrors(validarNombre(e.target.value))
            }}         
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
            error={errors.lastName.error}
            helperText={
                errors.lastName.error 
                    ? errors.lastName.message 
                    : ''
            }
            onBlur={(e) => {
                setErrors(validarApellido(e.target.value))
            }}         
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
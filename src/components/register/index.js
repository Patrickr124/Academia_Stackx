import React from 'react';
import Input from '../input';


function Register(){

const handleSubmit=(event)=>{
    event.preventDefault();

    alert ('Formulário Enviado')
}

return(
    <div>
        <form onSubmit={handleSubmit}>
            <Input type='text' placeholder='Nome'/>
            <Input type='email' placeholder='E-mail'/>
            
        </form>
    </div>
)
}

export default Register;
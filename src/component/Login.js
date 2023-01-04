import {useState }from 'react';

function Login()
{
   const [name,setName] = useState()
   const [pass,setPass] = useState()

   function  handleSubmit()
    {

    }
    return(
        
            <>
            <label>UserName</label>
            <input type='text' value={name} onChange={e=>{setName(e.target.value)}} /><br/>
            <label>Password</label>
            <input type='password' value={pass} onChange={e=>{setPass(e.target.value)}} /><br/>
            <button onSubmit={handleSubmit}>Submit</button>
            </>
        
    )
}

export default Login;
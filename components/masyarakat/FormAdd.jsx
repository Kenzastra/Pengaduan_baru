import axios from 'axios';
import React ,{ useState}from 'react';
import { useNavigate } from 'react-router-dom';

const FormAdd = () => {
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [telp, setTelp] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Create = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:2000/masyarakat',{
                nama: nama,
                username: username,
                password : password,
                telp : telp
            });
            navigate("/masyarakat")
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
    
        <div className="container">
          <form onSubmit={Create} className='box'>
            <p className='has-text-centered'>{msg}</p>
            <div className="field mt-5">
                <label>Nama</label>
                <div className="controls">
                    <input type="text" className='input' placeholder='Nama' value={nama} onChange={(e) => setNama(e.target.value)}/>
                </div>
            </div>
            <div className="field mt-5">
                <label>Username</label>
                <div className="controls">
                    <input type="text" className='input' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
            </div>
            <div className="field mt-5">
                <label>Password</label>
                <div className="controls">
                    <input type="password" className='input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="field mt-5">
                <label>Telp</label>
                <div className="controls">
                    <input type="text" className='input' placeholder='No.Telp' value={telp} onChange={(e) => setTelp(e.target.value)}/>
                </div>
            </div>
            <div className="field mt-5">
                <button className="button is-success">Create</button>
            </div>
          </form>
        </div>

  )
}

export default FormAdd
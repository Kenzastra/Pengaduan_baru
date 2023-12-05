import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddStaff = () => {
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [telp, setTelp] = useState('');
    const [level, setLevel] =useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Create = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:2000/petugas',{
                nama: nama,
                username: username,
                password : password,
                telp : telp,
                level : level
            });
            navigate("/petugas")
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
                <label>Level</label>
                <div className="controls">
                    <select className='dropdown p-2' placeholder='Level' value={level} onChange={(e) => setLevel(e.target.value)}>
                        <option value="Petugas">Petugas</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
            </div>
            <div className="field mt-5">
                <button className="button is-success">Create</button>
            </div>
          </form>
        </div>
  )
}

export default FormAddStaff
import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useParams , useNavigate} from 'react-router-dom';

const FormEdit = () => {

    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [telp, setTelp] = useState('');
    const {id} = useParams()
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getMasyarakatById();
    }, []);

    const getMasyarakatById = async () => {
        const response = await axios.get(`http://localhost:2000/masyarakat/${id}`);
        setNama(response.data.nama);
        setUsername(response.data.username);
        setPassword(response.data.password);
        setTelp(response.data.telp);
    } 

    const Edit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("telp", telp);
        try{
            await axios.patch(`http://localhost:2000/masyarakat/${id}`,formData,{
                headers: {
                    "Content-type": "multipart/form-data",
                },
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
          <form onSubmit={Edit} className='box'>
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
                <button className="button is-success">Edit</button>
            </div>
          </form>
        </div>
  )
}

export default FormEdit
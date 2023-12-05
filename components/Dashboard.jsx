import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';

const Dashboard = () => {
    const [user, setUsers] = useState([]);
    const navigate = useNavigate();

    const deleteData = async(nik) => {
        try {
            await axios.delete(`http://localhost:2000/masyarakat/${nik}`);
            getMasyarakat();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMasyarakat();
    }, []);

    const getMasyarakat = async() => {
        const response = await axios.get('http://localhost:2000/masyarakat');
        setUsers(response.data);
    }
  return (
        <div className="container mt-5 ">   
            <h1 className='has-text-centered is-size-5'>Data Masyarakat</h1>
                    <table className='table is-bordered is-striped is-fullwidth mt-5'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NIK</th>
                                <th>Nama</th>
                                <th>Username</th>
                                <th>Telp</th>
                                <th>Configure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user, index) => (
                                <tr key={user.nik}>
                                    <td>{index + 1}</td>
                                    <td>{user.nik}</td>
                                    <td>{user.nama}</td>
                                    <td>{user.username}</td>
                                    <td>{user.telp}</td>
                                    <td>
                                        <div className='is-flex is-justify-content-right'>
                                            <button className='button is-info mr-3'><Link to={`edit/${user.nik}`} className='has-text-white'>Edit</Link></button>
                                            <button className="button is-danger" onClick={() => deleteData(user.nik)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                <button className='button is-success is-rounded is-pulled-right add-btn' onClick={()=> navigate("/masyarakat/add")}>Add</button>
             </div>
  )
}

export default Dashboard
import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const DashboardStaff = () => {
    const [staff, setStaff] = useState([]);
    const navigate = useNavigate();

   useEffect(() => {
    getPetugas();
   }, [])   

    const getPetugas = async () => {
        const response = await axios.get(`http://localhost:2000/petugas`);
        setStaff(response.data);
    }

    const deleteData = async(id_petugas) => {
        try {
            await axios.delete(`http://localhost:2000/petugas/${id_petugas}`);
            getPetugas();
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className="container">
        <h1>Data Petugas</h1>
        <table className='table is-bordered is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Username</th>
                            <th>Telp</th>
                            <th>Level</th>
                            <th>Configure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map((staff, index) => (
                            <tr key={staff.id_petugas}>
                                <td>{index + 1}</td>
                                <td>{staff.nama_petugas}</td>
                                <td>{staff.username}</td>
                                <td>{staff.telp}</td>
                                <td>{staff.level}</td>
                                <td>
                                    <div className='is-flex is-justify-content-right'>
                                        <button className='button is-info mr-3'><Link to={`edit/${staff.id_petugas}`} className='has-text-white'>Edit</Link></button>
                                        <button className="button is-danger" onClick={() => deleteData(staff.id_petugas)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='button is-success is-rounded is-pulled-right add-btn' onClick={()=> navigate("/petugas/add")}>Add</button>
    </div>
  )
}

export default DashboardStaff
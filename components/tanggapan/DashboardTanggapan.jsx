import React , {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const DashboardTanggapan = () => {

    const [tanggapan, setTanggapan] = useState([]);
    const navigate = useNavigate();

    const getTanggapan = async () => {
        const response = await axios.get("http://localhost:2000/tanggapan")
        setTanggapan(response.data)
    }

    useEffect(() => {
        getTanggapan();
      }, [])

  return (
    <div className="container mt-5">
        <table className='table is-bordered is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>ID</th>
                    <th>ID Pengaduan</th>
                    <th>Tanggal Tanggapan</th>
                    <th>Tanggapan</th>
                    <th>ID Petugas</th>
                </tr>
            </thead>
            <tbody>
                {tanggapan.map((tanggapan,index) => (
                    <tr key={tanggapan.id_tanggapan}>
                        <td>{index + 1}</td>
                        <td>{tanggapan.id_tanggapan}</td>
                        <td>{tanggapan.id_pengaduan}</td>
                        <td>{tanggapan.tgl_tanggapan}</td>
                        <td>{tanggapan.tanggapan}</td>
                        <td>{tanggapan.id_petugas}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DashboardTanggapan
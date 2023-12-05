import axios from 'axios'
import React , {useState, useEffect}from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const FormTanggapan = () => {
    const {id} = useParams();
    const [url, setUrl] = useState('');
    const [nik, setNik] = useState('');
    const [alasan, setAlasan] = useState('');
    const [idPengaduan, setIdPengaduan] = useState('');
    const [tanggapan, setTanggapan] = useState('');
    const [idPetugas, setIdPetugas] =useState('');

    useEffect(() => {
        getPengaduanById()
    }, [])

    const getPengaduanById = async() => {
        const response = await axios.get(`http://localhost:2000/pengaduan/${id}`);
        setNik(response.data.nik);
        setAlasan(response.data.alasan);
        setUrl(response.data.url);
    }

  return (
    <div className="container">
        <form action="" method="get">
            <img src={url} alt="" />
        </form>
    </div>
  )
}

export default FormTanggapan
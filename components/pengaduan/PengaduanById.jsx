import React , {useState,useEffect}from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const PengaduanById = () => {
    
    const [nik,setNik] = useState('');
    const [masyarakat, setMasyarakat] = useState([]);
    const [tanggapan, setTanggapan] = useState([]);
    const [isi, setIsi] = useState('');
    const [url, setUrl] = useState('');
    const [tglPengaduan, setTglPengaduan] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPengaduanById();
    }, []);


    const getPengaduanById = async () => {
        const response = await axios.get(`http://localhost:2000/pengaduan/${id}`);
        setNik(response.data.nik);
        setIsi(response.data.isi_laporan);
        setUrl(response.data.url);
        setMasyarakat(response.data.masyarakat)
        setTanggapan(response.data.tanggapans)
        setTglPengaduan(response.data.tgl_pengaduan);
    }

  return (
    <div className="container box px-5" style={{width:1000}}>
        <div className='title'>
            <p>Pengaduan {masyarakat.nama}</p> <p className='has-text-weight-light'>{tglPengaduan}</p>
        </div>
        <div className="column">
            <p className='is-size-5'>{isi}</p>
        </div>
        <div className='is-flex is-justify-content-center'>
            <img src={url} alt="" width="480" height="640"/>
        </div>
        
        <div className="container mt-5">
            <div className="title is-size-4">Tanggapan</div>
            <div className="column border-line">
                <p className='is-size-5'>{tanggapan.map((tanggapan) => (
                    tanggapan.petuga.nama_petugas
                ))}</p>
                <p className='is-size-6 mt-1'>{tanggapan.map((tanggapan) => (
                    tanggapan.tanggapan
                ))}</p>
            </div>
        </div>
    </div>
  )
}

export default PengaduanById
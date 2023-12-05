import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormPengaduan = () => {

    const [nik, setNik] = useState('');
    const [alasan, setAlasan] = useState('');
    const [foto, setFoto] = useState('');
    const [preview, setPreview] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFoto(image);
        setPreview(URL.createObjectURL(image));
    }

    const savePengaduan = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("foto", foto);
        formData.append("isi", alasan);
        formData.append("nik", nik);
        formData.append("status", 'proses')
        try {
            await axios.post("http://localhost:2000/pengaduan", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/pengaduan")
        } catch (error) {
            console.log(error)
        }
    };

  return (
    <div className="container mt-5 box">
        <h1 className='has-text-centered my-5 is-size-3'>Form Pengaduan</h1>
        <form onSubmit={savePengaduan}>
            <div className="konten is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                <div className="kiri is-flex-grow-3">
                    <p className='mb-2 is-size-4'>Laporan</p>
                    <input type="text" className='input mb-5' placeholder='NIK' value={nik}
                    onChange={ (e) => setNik(e.target.value)}/>
                    <textarea className="textarea" placeholder="e.g. Hello world"
                    value={alasan} 
                    onChange={(e) => setAlasan(e.target.value)}></textarea>
                </div>
                <div className="tengah is-flex-grow-2"></div>
                <div className="kanan is-flex-grow-1">
                    {preview ? (
                        <figure className="image is-3by2 box">
                          <img src={preview}/>
                        </figure>
                    ) : (
                        ""
                    )}
                    <div className="field">
                        <label className='label'>
                            <div className="file">
                                <label className="file-label">
                                    <input type="file" className="file-input" onChange={loadImage} />
                                    <span className='file-cta'>
                                        <span className='file-label'>Choose a file...</span>
                                    </span>
                                </label>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <input type="text" className='is-hidden' value='proses' onChange={(e) => setStatus(e.target.value) } />
            <button className='button is-success mt-4'>Send</button>
            
        </form>
    </div>
  )
}

export default FormPengaduan
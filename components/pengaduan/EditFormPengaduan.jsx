import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';

const EditFormPengaduan = () => {
    const [nik, setNik] = useState('');
    const [alasan, setAlasan] = useState('');
    const [foto, setFoto] = useState('');
    const [url, setUrl] = useState ('');
    const [preview, setPreview] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFoto(image);
        setPreview(URL.createObjectURL(image));
    }

    const getPengaduanById = async() => {
        const response = await axios.get(`http://localhost:2000/pengaduan/${id}`);
        setNik(response.data.nik);
        setAlasan(response.data.alasan);
        setFoto(response.data.foto);
        setUrl(response.data.url);
    }

    const editPengaduan = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nik", nik);
        formData.append("isi", alasan);
        formData.append("foto", foto);
        formData.append("url",url);
        try {
            await axios.patch(`http://localhost:2000/pengaduan/${id}`, formData, {
                headers : {
                    "Content-Type" : "multipart/form-data"
                },
            });
            navigate("/pengaduan")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPengaduanById()
    }, []);

  return (
    <div className="container mt-5 box">
        <h1 className='has-text-centered my-5 is-size-3'>Form Pengaduan</h1>
        <form onSubmit={editPengaduan}>
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
                        <figure className="image is-3by2 box">
                          <img src={url}/>
                        </figure>
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
            <button className='button is-success mt-4'>Send</button>
            
        </form>
    </div>
  )
}

export default EditFormPengaduan
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const DashboardPengaduan = () => {
  const [pengaduan, setPengaduan] = useState([]);

  useEffect(() => {
    getPengaduan();
  }, [])

  const getPengaduan = async() => {
    const response = await axios.get(`http://localhost:2000/pengaduan`);
    setPengaduan(response.data);
    console.log(response.data);
  }

  const deleteData = async (id_pengaduan) => {
    try {
      await axios.delete(`http://localhost:2000/pengaduan/${id_pengaduan}`);
    getPengaduan();
    } catch (error) {
      console.log(error)
    }
  }

  const navigate = useNavigate();
  return (
    <div className="container is-fluid">
      <h1>Pengaduan</h1>
      <table className='table is-bordered is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Pengaduan</th>
            <th>ID Pengaduan</th>
            <th>NIK</th>
            <th>Isi Laporan</th>
            <th>Foto</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pengaduan.map((pengaduan, index) => (
            <tr key={pengaduan.id_pengaduan}>
              <td>{index + 1}</td>
              <td>{pengaduan.tgl_pengaduan}</td>
              <td>{pengaduan.id_pengaduan}</td>
              <td>{pengaduan.nik}</td>
              <td>{pengaduan.isi_laporan}</td>
              <td><img src={pengaduan.url} alt="" width="200" className="is-centered"/></td>
              <td>
                <div className='is-flex is-justify-content-right'>
                  <button className='button is-success'><Link to={`see/${pengaduan.id_pengaduan}`} className='has-text-white'>View</Link></button>
                  <button className='button is-warning ml-3'><Link to={`../tanggapan/add/${pengaduan.id_pengaduan}`}>Menanggapi</Link></button>
                  <button className='button is-info mr-3 ml-3'><Link to={`edit/${pengaduan.id_pengaduan}`} className='has-text-white'>Edit</Link></button>
                  <button className="button is-danger"  onClick={() => deleteData(pengaduan.id_pengaduan)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="card is-fullwidth mt-5">
        <header className="card-header">
          <p className="card-header-title">Pengaduan</p>
        </header>
        <div className="is-flex is-flex-direction-row">
          <div className="card-content is-one-third" >
            <div className="content img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNmenA1QHT9n17aO-RqGC-B7TNUI2a0Udew&usqp=CAU"/>
            </div>
          </div>

          <div className="card-content is-flex is-flex-direction-column pt-4 is-two-third">
            <div className="title">
              <h2>Okay, but why???</h2>
            </div>
              <div className="subtitle is-marginless">
                <p>salahku apa?</p>
              </div>
          </div>
        </div>

      </div> */}
      
      <button className='button is-success is-rounded is-pulled-right add-btn mt-4' onClick={()=> navigate("/pengaduan/form")}>Ajukan Pengaduan</button>
      
    </div>
  )
}

export default DashboardPengaduan
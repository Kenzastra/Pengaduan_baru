import React from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate();
  return (
    <section className="hero has-background-info is-widescreen is-fullheight">
      <div className="hero-body">
        <div className="container is-flex is-flex-direction-row is-justify-content-space-between">
          <h1 className="title">
            Hero title
          </h1>
          <h2 className="subtitle">
            <div className='is-flex is-flex-direction-column'>
                <button onClick={()=> navigate("/masyarakat")}>Masyarakat</button>
                <button onClick={()=> navigate("/petugas")}>Petugas</button>
                <button onClick={()=> navigate("/pengaduan")}>Pengaduan</button>
                <button onClick={()=> navigate("/tanggapan")}>Tanggapan</button>
            </div>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Menu
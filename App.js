import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import FormAdd from "./components/masyarakat/FormAdd";
import FormEdit from "./components/masyarakat/FormEdit";
import Menu from "./components/Menu";
import DashboardStaff from "./components/DashboardStaff";
import FormAddStaff from "./components/petugas/FormAddStaff";
import FormEditStaff from "./components/petugas/FormEditStaff";
import DashboardPengaduan from "./components/pengaduan/DashboardPengaduan"
import FormPengaduan from "./components/pengaduan/FormPengaduan";
import EditFormPengaduan from "./components/pengaduan/EditFormPengaduan";
import DashboardTanggapan from "./components/tanggapan/DashboardTanggapan";
import PengaduanById from "./components/pengaduan/PengaduanById";
import FormTanggapan from "./components/tanggapan/FormTanggapan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Menu/>
        }></Route>
        {/* Masyarakat */}
        <Route path="/masyarakat" element={
          <>
          <Navbar/>
          <Dashboard/>
          </>
        }>
        </Route>
        <Route path="/masyarakat/add" element={
          <>
          <Navbar/>
          <FormAdd/>
          </>
        }>
        </Route>
        <Route path="/masyarakat/edit/:id" element={
          <>
          <Navbar/>
          <FormEdit/>
          </>
        }>
        </Route>
        {/* Petugas */}
        <Route path="/petugas" element={
          <>
          <Navbar/>
          <DashboardStaff/>
          </>
        }>
        </Route>

        <Route path="/petugas/add" element={
          <>
          <Navbar/>
          <FormAddStaff/>
          </>
        }>
        </Route>

        <Route path="/petugas/edit/:id" element={
          <>
          <Navbar/>
          <FormEditStaff/>
          </>
        }>
        </Route>

        {/* Pengaduan */}
        <Route path="/pengaduan" element={
          <>
          <Navbar/>
          <DashboardPengaduan/>
          </>
        }>
        </Route>

        <Route path="/pengaduan/form" element={
          <>
          <Navbar/>
          <FormPengaduan/>
          </>
        }>
        </Route>

        <Route path="/pengaduan/edit/:id" element={
          <>
          <Navbar/>
          <EditFormPengaduan/>
          </>
        }>
        </Route>

        <Route path="/pengaduan/see/:id" element={
          <>
          <Navbar/>
          <PengaduanById/>
          </>
        }>
        </Route>

        {/* Tanggapan */}
        <Route path="/tanggapan" element={
          <>
          <Navbar/>
          <DashboardTanggapan/>
          </>
        }>
        </Route>

        <Route path="/tanggapan/add/:id" element={
          <>
          <Navbar/>
          <FormTanggapan/>
          </>
        }>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

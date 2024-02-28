import React ,{useState}from 'react'
import SideBar from '../Dashboard/SideBar'
import Fade from 'react-bootstrap/Collapse';

import './AdminHome.css'
import AdminNavBar from '../NavBar/AdminNavBar'
import NumberCard from '../Statistics/NumbersCard/NumberCard';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListeDeprojets from '../Statistics/Projet accomplit/ListeDeprojets';
//import Chart from 'react-apexcharts'
import SideIcons from '../Dashboard/SideIcons';
import Title from '../Dashboard/Title';
function AdminHome() {
    const [show, setShow] = useState(true);
    const [notif, setNotif] = useState(false);
    const [state,setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      }
    )
    const handleShow = () => setShow(!show);
    const handleClick=()=>{
      setNotif(!notif)
    }
  return (
    
    <>
        <header className='admin-header'>
            <AdminNavBar handleShow={handleShow} handleClick={handleClick}></AdminNavBar>
        </header>
    <div className='admin-home-div'>
      <div className='off-canvas'>
        <div className='home-side-icons'>
            <SideIcons></SideIcons>
        </div>
        <Fade in={show} timeout={8000} dimension={'width'}>
            <div className='hide-off-canvas-animation'> 
                <SideBar></SideBar>
            </div>
        </Fade>
      </div>
        <div className='home-stats-div'>
            <Row className='admin-cards-row'>
                <Col lg={'3'}>
                    <NumberCard Number={45} title={'nouveaux utilisateurs'} icon={<i className="fa-solid fa-users"></i> } colorClass={'yellow-card'} link={'/users'}></NumberCard>
                </Col>
                <Col lg={'3'}>
                    <NumberCard Number={45} title={'nouveaux partenaires'} icon={<i className="fa-solid fa-handshake"></i> } colorClass={'purple-card'} link={'/partenaires'}></NumberCard>
                </Col>
                <Col lg={'3'}>
                    <NumberCard Number={45} title={'projets accomplits'} icon={<i className="fa-solid fa-project-diagram"></i> } colorClass={'orange-card'} link={'/projet'}></NumberCard>
                </Col>
                <Col lg={'3'}>
                    <NumberCard Number={45} title={'animales/plantes sauvé'} icon={<i className="fa-solid fa-gem"></i> } colorClass={'teal-card'} link={'/especes'}></NumberCard>
                </Col>
            </Row>
            <div>
            <ListeDeprojets number={3}></ListeDeprojets>
            </div>
            <div className='chart'>
                {/*<Chart options={state.options}
                        series={state.series}
                        type="line"
                    width="500"></Chart>*/}
            </div>
        </div>     
    </div>
    </>
  )
}

export default AdminHome
import React,{useState,useEffect} from 'react'
import MyCard from './cards/MyCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Actualite.css';
const base_url="http://localhost:8080/news/get-all"
function Actualite() {
    const [news,setNews]=useState([]);
    const fetchnews= async ()=>{
        const response = await fetch(base_url)
        const news = await response.json()
        setNews(news)
    }
    useEffect(()=>{
        fetchnews()
    },[]) 
  return (
    <div className='actualite-div'>
    <Container>
    <Row className='row-title'><Col><h2>L'Actualités</h2></Col></Row>
    <Row className='row-card'>
        {news.map((act, index) => (
          <Col key={index} xs={12} md={6} lg={3} className='col-card'>
            <MyCard key={index} text={act.text} image={act.imageSrc} date={act.date}></MyCard>
          </Col>
        ))}
     </Row>
    </Container>    
    </div>
  )
}

export default Actualite
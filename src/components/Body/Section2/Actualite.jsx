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
    const handleReload = () => {
        fetchnews();
      };
    const handleAdd=()=>{
      fetch('http://localhost:8080/news/set',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({})
      }).then(console.log(JSON.stringify({})))
    }
    const handleDelete=()=>{
      fetch('http://localhost:8080/news/del?id='+id,{
        method:'POST',
        headers:{'content-type':'application/json'},
      }).then(console.log(JSON.stringify({id})))
    }
    const handleUpdate=()=>{
      fetch('http://localhost:8080/news/update',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({})
      }).then(console.log(JSON.stringify({})))
    }
  return (
    <div className='actualite-div'>
    <Container>
    <Row className='row-title'><Col><h2>L'Actualités</h2></Col></Row>
    <Row className='row-card'>
        {news.map((act, index) => (
          <Col xs={12} md={6} lg={3} className='col-card'>
            <MyCard key={index} {...act}></MyCard>
          </Col>
        ))}
     </Row>
    </Container>    
    </div>
  )
}

export default Actualite
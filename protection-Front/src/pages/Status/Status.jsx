import React from 'react';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Footer from '../../components/Footer/Footer';
import './Status.css'

const Status = () => {
  return (
    <>
    <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>

    <div className="container mt-5 text-dark">
      <div className="text-center mb-4">
        <h1 className="display-4" style={{ fontFamily: 'Pacifico, cursive', color: '#B19470' }}>
         Bienvenue chez  Protect Wild Life
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card animated-card text-center">
            <div className="card-body">
              <h2 className="card-title" style={{ fontFamily: 'Lobster, cursive', color: '#00425A' }}>
                Notre Mission
              </h2>
              <p className="card-text">
              Chez Protect Wild Life, notre mission passionnée est de protéger et préserver la diversité des espèces rares. Nous agissons activement pour la conservation des espèces menacées, car chaque vie sauvage compte.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card animated-card text-center">
            <div className="card-body">
              <h2 className="card-title" style={{ fontFamily: 'Lobster, cursive', color: '#00425A' }}>
                Notre Engagement
              </h2>
              <p className="card-text">
                Engagés dans la sensibilisation, nous stimulons la curiosité et l'amour de la nature. En collaborant avec d'autres passionnés, nous œuvrons pour préserver la biodiversité et assurer un avenir durable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card animated-card text-center">
            <div className="card-body">
              <h2 className="card-title" style={{ fontFamily: 'Lobster, cursive', color: '#00425A' }}>
                Notre Impact
              </h2>
              <p className="card-text">
                À travers nos initiatives continues, nous avons marqué un impact significatif dans la préservation des espèces rares. Des programmes de réintroduction aux études approfondies, nous façonnons un avenir plus vert.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card animated-card text-center">
            <div className="card-body">
              <h2 className="card-title" style={{ fontFamily: 'Lobster, cursive', color: '#00425A' }}>
                Notre Vision
              </h2>
              <p className="card-text">
              Protect Wild Life rêve d'un monde où chaque espèce, même les plus rares, cohabite harmonieusement. Notre vision transcende les générations, visant une diversité biologique préservée et admirée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Status;




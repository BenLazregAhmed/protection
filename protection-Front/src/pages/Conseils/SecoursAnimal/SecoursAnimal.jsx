import React from 'react'
import NavBar2 from '../../../components/NavBar2/NavBar2';
import './SecoursAnimal.css'

const SecoursAnimal = () => {
  return (
    <>
    <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
          <div className="container mt-4">
            <div className='divTitle'>
              <img src="../../../public/images/l.png"/>
              <h1 className="titleH1">Conseils pour Secourir un Animal</h1>
             </div>
            
      
            {/* Conseil 1 */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="titleH4">Assurez votre sécurité</h4>
                <p className="card-text">
                • Avant toute intervention, assurez-vous que vous ne vous 
                mettez pas vous-même en danger. Si l’animal semble agressif ne vous 
                approchez pas. Respectez le code de la route sur la voie publique et 
                ne prenez pas de risques inconsidérés pour accéder à l’animal. 
                • Avant de toucher l’animal, vous devez absolument vous protéger avec des 
                gants ou un tissu épais pour éviter les blessures et les risques infectieux.
                </p>
              </div>
            </div>
      
            {/* Conseil 2 */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="titleH4">Approcher doucement de l'animal</h4>
                <p className="card-text">
                Partez du principe que celui-ci est déjà très apeuré, donc vous devez pour votre sécurité et la sienne, 
                approcher délicatement de l’animal blessé. Pas de geste brusque ou d’arrivée en courant et en hurlant. 
                Agiter l’animal pourrait aggraver son état, il pourrait également se débattre et vous blesser, agrandir sa plaie, déplacer un membre cassé dans un mouvement de panique… 
                Inutile de vous dire que si l’animal est un spécimen d’une espèce potentiellement « dangereuse » il pourrait se défendre.
                 Essayez d’appeler des professionnels ou de l’aide avant d’agir et prenez vos précautions.

                </p>
              </div>
            </div>
      
            {/* Conseil 3 */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="titleH4">Contactez un centre de soins</h4>
                <p className="card-text">
                Lors de votre appel, gardez toujours un contact visuel avec 
                l’animal. Les informations importantes à donner :
                <h6 className="titleH6">L’espèce:</h6>

                <p>Rappelez le nom de l’espèce si vous la connaissez 
                et son âge estimé (juvénile, adulte). Si vous ne 
                connaissez pas l’espèce, indiquez que vous avez 
                envoyé une photo par mail ou par téléphone.</p>

                <h6 className="titleH6">Le problème apparent:</h6>

                <p>Expliquez en quoi l’animal vous 
                    semble en détresse en décrivant la 
                    situation ou des symptômes :
                    <br></br>  

                    <p>√ L’animal n’est pas capable de se 
                    déplacer par lui-même (il ne tient 
                    pas debout, boite, traine une aile…). </p>
                    <p> √ Il ferme les yeux même 
                    lorsque l’on est à proximité 
                    et ne cherche pas à fuir.</p>
                   <p> √ Il a un problème respiratoire 
                    visible (respire la bouche 
                    ouverte par exemple).</p>
                   <p> √ De nombreuses mouches 
                    tournent autour de l’animal.</p>

                    <p>√ Il présente des plaies (si vous 
                    observez des asticots autour de la 
                    plaie c’est encore plus urgent).</p>
                    <p>√ Il est infesté de parasites 
                    (tiques, puces, vers).</p>
                    <p>√ L’animal a été percuté 
                    par un véhicule (fracture 
                    ouverte, déformation…).</p></p>

                    <h6 className="titleH6">Le lieu où se trouve l’animal : </h6>
                    <br></br>
                    <p>Indiquez le département, la 
                        commune voire les données 
                        GPS où l’animal se trouve. 
                        Lors de l’appel, ayez en tête que chaque 
                        seconde compte. Les centres sont très 
                        sollicités : pendant chaque appel pris 
                        par un centre de soins, ce sont 5 appels 
                        sans réponse ou en attente. Il est donc 
                        crucial d’être concis et synthétique.</p>
                    
                    
                </p>
              </div>
            </div>
      
            {/* Conseil 4 */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="titleH4">Transportez le rapidement et de manière sécurisée</h4>
                <p className="card-text">
                <p>Transporter l’animal
                            Si le centre de soins vous demande de transporter 
                            l’animal, voici quelques conseils de base :
                            <br></br>
                            √ Saisissez toujours l’animal avec un tissu ou 
                            des gants épais, jamais à mains nues.
                            <br></br>
                            √ Dans votre véhicule, placez-le dans un endroit sombre, 
                            protégé et au calme : le coffre, une boite en carton avec des 
                            trous et un tissu par-dessus, ou à défaut derrière un siège.
                            <br></br>
                            √ Pendant le trajet, restez silencieux, ne mettez pas 
                            de musique, cela pourrait stresser l’animal.
                            <br></br>
                            √ Maintenez la température ambiante :
                             ne mettez ni la 
                            climatisation, ni le chauffage (sauf en cas de températures 
                            extrêmes). Si vous avez une source de chaleur (thermos 
                            chaude par exemple) dont l’animal pourrait se rapprocher de 
                            lui-même pour se réchauffer, vous pouvez la placer à proximité. 
                            Un animal blessé peut en effet tomber très vite en hypothermie.</p>
                </p>
              </div>
            </div>
          </div>
          <Footer></Footer>
          </>
        );
      };
      
      export default SecoursAnimal;


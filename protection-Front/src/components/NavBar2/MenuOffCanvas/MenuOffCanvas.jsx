import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import './MenuOffCanvas.css'
import { useState } from 'react'
function MenuOffCanvas() {
  const [decouverteSubMenuOpen, setDecouverteSubMenuOpen] = useState(false);
  const [protectionSubMenuOpen, setProtectionSubMenuOpen] = useState(false);
  const [conseilsSubMenuOpen, setConseilsSubMenuOpen] = useState(false);
  const [espècesSubMenuOpen, setEspècesSubMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [partenairesSubMenuOpen, setPartenairesSubMenuOpen] = useState(false);
  const [bénéficairesSubMenuOpen, setBénéficairesSubMenuOpen] = useState(false);
  const [projetsSubMenuOpen, setProjetsSubMenuOpen] = useState(false);
  const [donSubMenuOpen, setDonSubMenuOpen] = useState(false);
  
 
  return (
    <>
        <div className='offCanvas-div'>
                <Row >
                    <Link to='/Association' className='offCanvas-sublink0'>
                        <p className='offCanvas-p1'>Association</p>
                     </Link> 
                </Row>

               
                <Row>
                    <div
                        className='offCanvas-link'
                        onClick={() => {
                        setSubMenuOpen(!subMenuOpen);
                        setDecouverteSubMenuOpen(false);
                        setProtectionSubMenuOpen(false);
                        }}
                        onDoubleClick={() => {
                        setSubMenuOpen(false);
                        }}
                    >
                         <p className='offCanvas-p'>Découverte & Protection</p>
                    </div>
                     {subMenuOpen && (
                        <Row className='offCanvas-submenu'>
                            <div className='offCanvas-link1'>
                                <p
                                    className='offCanvas-p'
                                    onClick={() => {
                                        setDecouverteSubMenuOpen(!decouverteSubMenuOpen);
                                        setSubMenuOpen(true);
                                        setProtectionSubMenuOpen(false);
                                    }}
                                    onDoubleClick={() => {
                                        setDecouverteSubMenuOpen(true);
                                        setSubMenuOpen(!decouverteSubMenuOpen);
                                    }}
                                >
                                Découverte
                                </p>
                                        {decouverteSubMenuOpen && (
                                        <div>
                                            <Row className='offCanvas-submenu'>
                                            <Link to='/LieuxDeLoisirs' className='offCanvas-sublink1'>
                                                <p className='offCanvas-p1'>Lieux de Loisirs</p>
                                            </Link>
                                            <Link to='/Parcs' className='offCanvas-sublink1'>
                                                <p className='offCanvas-p1'>Parcs</p>
                                            </Link>
                                            <Link to='/Circuit' className='offCanvas-sublink1'>
                                                <p className='offCanvas-p1'>Circuits naturels</p>
                                            </Link>
                                            </Row>
                                        </div>
                                        )}
                            </div>
                            
                            <div className='offCanvas-link1'>
                                <p
                                className='offCanvas-p'
                                onClick={() => {
                                    setProtectionSubMenuOpen(!protectionSubMenuOpen);
                                    setSubMenuOpen(true);
                                    setDecouverteSubMenuOpen(false);
                                }}
                                onDoubleClick={() => {
                                    setProtectionSubMenuOpen(true);
                                    setSubMenuOpen(!protectionSubMenuOpen);
                                }}
                                >
                                Protection
                                </p>
                                {protectionSubMenuOpen && (
                                <div>
                                    <Row className='offCanvas-submenu'>
                                        <Link to='/Politiques' className='offCanvas-sublink1'>
                                            <p className='offCanvas-p1'>Les politiques</p>
                                        </Link>
                                        <Link to='/Signalement' className='offCanvas-sublink1'>
                                            <p className='offCanvas-p1'>Signaler un dépassement</p>
                                        </Link>
                                    </Row>
                                </div>
                                )}
                        </div>
                        
                        <div className='offCanvas-link1'>
                            <p
                            className='offCanvas-p'
                            onClick={() => {
                                setConseilsSubMenuOpen(!conseilsSubMenuOpen);
                                setSubMenuOpen(true);
                                setProtectionSubMenuOpen(false);
                                setDecouverteSubMenuOpen(false);
                            }}
                            onDoubleClick={() => {
                                setConseilsSubMenuOpen(true);
                                setSubMenuOpen(!conseilsSubMenuOpen);
                            }}
                            >
                            Conseils
                            </p>
                            {conseilsSubMenuOpen && (
                            <div>
                                <Row className='offCanvas-submenu'>
                                <Link to='/SecoursAnimal' className='offCanvas-sublink1'>
                                    <p className='offCanvas-p1'>Sécourir animal</p>
                                </Link>
                                <Link to='/SecoursPlantes' className='offCanvas-sublink1'>
                                    <p className='offCanvas-p1'>Sécourir plantes</p>
                                </Link>
                                
                                </Row>
                            </div>
                            )}
                    </div>
                    <div className='offCanvas-link1'>
                            <p
                            className='offCanvas-p'
                            onClick={() => {
                                setEspècesSubMenuOpen(!espècesSubMenuOpen);
                                setSubMenuOpen(true);
                                setProtectionSubMenuOpen(false);
                                setDecouverteSubMenuOpen(false);
                                setConseilsSubMenuOpen(false);
                            }}
                            onDoubleClick={() => {
                                setEspècesSubMenuOpen(true);
                                setSubMenuOpen(!espècesSubMenuOpen);
                            }}
                            >
                            Espèces rares
                            </p>
                            {espècesSubMenuOpen && (
                            <div>
                                <Row className='offCanvas-submenu'>
                                <Link to='/EspècesAnimales' className='offCanvas-sublink1'>
                                    <p className='offCanvas-p1'>Animales</p>
                                </Link>
                                <Link to='/EspècesVégétales' className='offCanvas-sublink1'>
                                    <p className='offCanvas-p1'>Végétales</p>
                                </Link>
                                
                                </Row>
                            </div>
                            )}
                    </div>

                </Row>
            )}
        </Row>


        <Row>
          <div
            className='offCanvas-link'
            onClick={() => {
                setPartenairesSubMenuOpen(!partenairesSubMenuOpen);
               
              }}
              onDoubleClick={() => {
                setPartenairesSubMenuOpen(false);
              }}
           
          >
            <p className='offCanvas-p'>Partenaires</p>
          </div>
          {partenairesSubMenuOpen && (
            <Row className='offCanvas-submenu'>
              <Link to='/PartenairesPublic' className='offCanvas-sublink1'>
                <p className='offCanvas-p1'>Partenaire Public</p>
              </Link>
              <Link to='/PartenaireEntreprise' className='offCanvas-sublink1'>
                <p className='offCanvas-p1'>Partenaire Entreprise</p>
              </Link>
              <Link to='/PartenairesAssociatives' className='offCanvas-sublink1'>
                <p className='offCanvas-p1'>Partenaire Associative</p>
              </Link>
            </Row>
          )}
        </Row>


        <Row>
          <div
            className='offCanvas-link'
            onClick={() => {
                setBénéficairesSubMenuOpen(!bénéficairesSubMenuOpen);
               
              }}
              onDoubleClick={() => {
                setBénéficairesSubMenuOpen(false);
              }}
           
          >
            <p className='offCanvas-p'>Bénéficaires</p>
          </div>
          {bénéficairesSubMenuOpen && (
            <Row className='offCanvas-submenu'>
              <Link to='/BénéficiaireActuel' className='offCanvas-sublink1'>
                <p className='offCanvas-p1'>Bénéficaires Actuels</p>
              </Link>
              <Link to='/BénéficaireAncien' className='offCanvas-sublink1'>
                <p className='offCanvas-p1'>Bénéficaires Anciens</p>
              </Link>
              <Link to='/DevenirBénéficaire' className='offCanvas-sublink1'>
                <p className='offCanvas-p1'>Devenir Bénéficaire</p>
              </Link>
            </Row>
          )}
        </Row>


        <Row>
          <div
            className='offCanvas-link'
            onClick={() => {
                setProjetsSubMenuOpen(!projetsSubMenuOpen);
               
              }}
              onDoubleClick={() => {
                setProjetsSubMenuOpen(false);
              }}
           
          >
            <p className='offCanvas-p'>Projets</p>
          </div>
          {projetsSubMenuOpen && (
            <Row className='offCanvas-submenu'>
              <Link to='/ListeProjets' className='offCanvas-sublink1'>
                <p className='offCanvas-p1'>Liste des projets</p>
              </Link>
              
            </Row>
          )}
        </Row>

        <Row>
          <div
            className='offCanvas-link'
            onClick={() => {
                setDonSubMenuOpen(!donSubMenuOpen);
               
              }}
              onDoubleClick={() => {
                setDonSubMenuOpen(false);
              }}
           
          >
            <p className='offCanvas-p'>Faire Un Don</p>
          </div>
          {donSubMenuOpen && (
            <Row className='offCanvas-submenu'>
              <Link to='/don' className='offCanvas-sublink1'>
                <p className='offCanvas-p'>Formulaire</p>
              </Link>
              
            </Row>
          )}
        </Row>

                
       </div>
            <div className='log-sign-offCanvas-div'>
                <Row className='log-sign-row-offCanvas'>
                    <Col>
                        <Button variant='none' as={Link} className='log-sign-btn-offCanvas' to={'/login'}>LogIn</Button>
                    </Col>
                    <Col>
                    <Button variant='none' as={Link} className='log-sign-btn-offCanvas' to={'/SignUp'}>SignUp</Button>
                    </Col>
                </Row>
            </div>
    </>
  )
}

export default MenuOffCanvas
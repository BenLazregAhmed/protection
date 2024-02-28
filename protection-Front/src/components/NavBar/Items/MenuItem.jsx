import React , {useState} from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import HoverableNavDropdown from './HoverableNavDropdown';
import './MenuItem.css'

function MenuItems({canvas}) {
    
  return (
    <>
       <HoverableNavDropdown title="Association" id="collapsible-nav-dropdown1"  canvas={canvas}>
        <NavDropdown.Item as={Link} to="action/3.1">
          Status
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="action/3.1">
          Gouvernece
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="action/3.1">
          Historique
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="action/3.1">
          Plan Stratégique
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="action/3.1">
          Equipe
        </NavDropdown.Item>
      </HoverableNavDropdown>
              <HoverableNavDropdown title="Découverte & Protection" id="collapsible-nav-dropdown2" canvas={canvas}>
          <HoverableNavDropdown title="Découverte" id="collapsible-nav-dropdown2.0" drop={"end"} canvas={canvas} nested={true}>
            <NavDropdown.Item as={Link} to="action/3.1">
              Les Lieux de loisir
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Parcs">
              Les parcs
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="action/3.1">
              Les circuits naturels
            </NavDropdown.Item>
          </HoverableNavDropdown>

          <HoverableNavDropdown title="Protection" id="collapsible-nav-dropdown2.1" drop={"end"} canvas={canvas} nested={true}>
            <NavDropdown.Item as={Link} to="action/3.1">
              Les Politics
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="action/3.1">
              Signaler un dépassement
            </NavDropdown.Item>
          </HoverableNavDropdown>
          <HoverableNavDropdown title="Conseils" id="collapsible-nav-dropdown2.3" drop={"end"} canvas={canvas} nested={true}>
                <NavDropdown.Item as={Link} to="/SecoursAnimal">Sécourir un animal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="action/3.1">Sécourir une plante</NavDropdown.Item>
          </HoverableNavDropdown>

          <HoverableNavDropdown title="Espèces Rares" id="collapsible-nav-dropdown2.4" drop={"end"} canvas={canvas} nested={true}>
                <NavDropdown.Item as={Link} to="action/3.1">Animal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="action/3.1">Végétale</NavDropdown.Item>
          </HoverableNavDropdown>
        </HoverableNavDropdown>

        <HoverableNavDropdown title="Partenaire" id="collapsible-nav-dropdown5" canvas={canvas}>
              <NavDropdown.Item as={Link} to="/PartenairesPublic">Partenaire Public</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="action/3.1">Partenaire Entreprise</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/PartenairesAssociatives">Partenaire Associative</NavDropdown.Item>
        </HoverableNavDropdown>

        <HoverableNavDropdown title="Bénificiare" id="collapsible-nav-dropdown6" canvas={canvas}>
              <NavDropdown.Item as={Link} to="action/3.1">Bénificiare Actuel</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="action/3.1">Ancien Bénificiare</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="action/3.1">Devenir Bénificiare</NavDropdown.Item>
        </HoverableNavDropdown>

        <HoverableNavDropdown title="Projet" id="collapsible-nav-dropdown7" canvas={canvas}>
        <NavDropdown.Item as={Link} to="/ListeProjets">Liste des Projets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="action/3.1">Formations</NavDropdown.Item>
        </HoverableNavDropdown>

        <HoverableNavDropdown title="Faire Un Don" id="collapsible-nav-dropdown8" canvas={canvas}>
            <NavDropdown.Item as={Link} to="/don">Formulaire</NavDropdown.Item>
        </HoverableNavDropdown>
      
    </>
  )
}

export default MenuItems

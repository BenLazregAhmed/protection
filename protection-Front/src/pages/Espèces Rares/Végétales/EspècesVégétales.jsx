import React from 'react'
import './EspècesVégétales.css'
import NavBar2 from '../../../components/NavBar2/NavBar2'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Footer from '../../../../src/components/Footer/Footer';

const EspècesVégétales = () => {

  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);

  const handleItemClick3 = () => {
    setIsClicked3(!isClicked3);
  };

  const handleItemClick4 = () => {
    setIsClicked4(!isClicked4);
  };

  return (
    <>
    <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
    <div className="grve-filter " data-gototop="yes">
				<ul>
					<li onClick={handleItemClick3} className="c2" ><span>Dans tout le monde </span></li>

					<li onClick={handleItemClick4} className="c2"><span>Dans La Tunisie</span></li>
				</ul>
	</div>

        {isClicked3 && (
        <div className='plantes'>
         <Card className ="plante" border="light" style={{ width: '18rem' }}>
        <Card.Header>Wollemia nobilis</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (7).jpg' ></Card.Img>
          <Card.Text>
          Le pin de Wollemi ou arbre de Wollemi (Wollemia nobilis) appartient à la famille des Araucariacées.
          Les pins de Wollemi croissent dans une gorge de la grande région des montagnes Bleues, en Nouvelle-Galles du Sud1.
         Il s'agit d'une vallée peu connue, à environ 200 km au nord-ouest de Sydney (Australie), au cœur du Parc national Wollemi2.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className ="plante" border="light" style={{ width: '18rem' }}>
        <Card.Header>Rafflésie d'Arnold</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (8).jpg' ></Card.Img>
          <Card.Text>
          Il s'agit d'une plante rare qui se limite pratiquement à une fleur d'un diamètre de plus de 100 cm et qui peut peser plus de 10 kg. 
          Rafflesia arnoldii n'a pas de tige et pratiquement pas de racines. Sa caractéristique la plus frappante est qu'il s'agit d'une plante parasite.
           Dépourvu de racines et de feuilles, elle tire ses nutriments et son énergie de l'arbre auquel elle est attachée.
          </Card.Text>
        </Card.Body>
      </Card>
     
      <Card className ="plante" border="light" style={{ width: '18rem' }}>
        <Card.Header>Encephalartos woodii (Cycad de Wood)</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/R (5).jpg' ></Card.Img>
          <Card.Text>
          Cet arbre était endémique de la forêt oNgoye dans le KwaZulu-Natal (est de l'Afrique du Sud), mais est désormais éteint à l'état sauvage : les derniers spécimens en vie se trouvent dans des jardins botaniques, et descendent tous du même individu.
           Depuis 1907, année de découverte des trois spécimens sauvages connus, aucun autre spécimen n'a jamais été observé dans la nature
     
          </Card.Text>
        </Card.Body>
      </Card>
      

      <Card className ="plante" border="light" style={{ width: '18rem' }}>
        <Card.Header> Séquoia géant </Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (9).jpg' ></Card.Img>
          <Card.Text>
          Le premier arbre géant, tout comme son nom l'indique, est le séquoia géant. 
          C'est précisément un arbre rare, car classé comme le plus grand et le plus haut arbre du monde, ce qui en fait également le plus grand végétal.
           Ces arbres d'Amérique du Nord atteignent des hauteurs allant de 50 à 85 mètres dans les plus grands cas, et leurs troncs peuvent atteindre jusqu'à 7 mètres de diamètre. Ils mettent bien évidemment beaucoup de temps à pousser. 
          En effet, les spécimens les plus jeunes ne produisent pas de graines avant l'âge de 20 ans, ce qui rend la reproduction très difficile
     
          </Card.Text>
        </Card.Body>
      </Card>
     
      {/* <Card className ="plante" border="light" style={{ width: '18rem' }}>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/.jpg' ></Card.Img>
          <Card.Text>
         
     
          </Card.Text>
        </Card.Body>
      </Card>
      */}
        </div>
      )}


      {isClicked4 && (
           <div className='plantes'>
          <Card className ="plante" border="light" style={{ width: '18rem' }}>
          <Card.Header> Sphagnum subsecundum </Card.Header>
          <Card.Body>
            <Card.Img   src='../../../public/images/R (6).jpg' ></Card.Img>
            <Card.Text>
            Sphagnum subsecundum, the slender cow-horn bog-moss, is a species of moss in the family Sphagnaceae.
             It is the namesake of a species complex.
             The complex has a nearly worldwide distribution in wetlands, with the species proper found in Europe, eastern North America and North Africa (in the Tunisian peatlands of Dar Fatma).

            </Card.Text>
          </Card.Body>
          </Card>

          <Card className ="plante" border="light" style={{ width: '18rem' }}>
        <Card.Header> Armoise herbe blanche </Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (10).jpg' ></Card.Img>
          <Card.Text>
          L’armoise herbe blanche (Artemisia herba-alba Asso ou Seriphidium herba-alba (Asso.) Soják) est une espèce de plante à fleurs du genre Artemisia (Armoises) de la famille des Astéracées (ou Composées)
          En Tunisie, l'armoise herbe blanche est absente des zones littorales nord, de la vallée de la Medjerda ainsi que des monts de la Kroumirie.
           Elle devient par contre très commune dans le centre et le sud : d'Enfida à Tataouine ainsi qu'aux îles Kerkennah et Djerba.
          Cependant, l'espèce se raréfie dans l'extrême sud
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className ="plante" border="light" style={{ width: '18rem' }}>
        <Card.Header>Limonium cancellatum</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (11).jpg' ></Card.Img>
          <Card.Text>
         La Limonium cancellatum, ou Statice annulée, est une plante halophile présente dans les zones côtières. 
         Elle se distingue par ses petites fleurs aux couleurs vives.
         Adaptée aux conditions difficiles, elle est menacée par la destruction de son habitat côtier due au développement humain.
         La conservation de cette espèce nécessite la préservation de son environnement et la sensibilisation à l'importance des écosystèmes côtiers.
     
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className ="plante" border="light" style={{ width: '18rem' }}>
        <Card.Header> Rumex tunetanus </Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (12).jpg' ></Card.Img>
          <Card.Text>
          La Patience de Tunisie (Rumex tunetanus) est une espèce de petites plantes à bulbes du genre Rumex et de la famille des Polygonacées. 
          Parmi les Rumex, elle se caractérise principalement par ses feuilles très étroites et allongées, aux bords ondulés et à la base cordée.
          Elle est endémique de la Tunisie où elle n'est présente qu'au bord de la Garâa Sejnane. 
          L'Union internationale pour la conservation de la nature (UICN) la considère comme étant en danger critique d'extinction (CR). 
          Elle ne bénéficie pas de mesures locales de protection ni de conservation.
          </Card.Text>
        </Card.Body>
      </Card>
      
     
      
     
        </div>
      )}
    <Footer></Footer>
    </>

  )
}

export default EspècesVégétales
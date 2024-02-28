import React from 'react'
import './EspècesAnimales.css'
import NavBar2 from '../../../components/NavBar2/NavBar2'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Footer from '../../../../src/components/Footer/Footer';

const EspècesAnimales = () => {

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleItemClick1 = () => {
    setIsClicked1(!isClicked1);
  };

  const handleItemClick2 = () => {
    setIsClicked2(!isClicked2);
  };

  return (
    <>
    <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
    <div className="grve-filter " data-gototop="yes">
				<ul>
					<li onClick={handleItemClick1} className="c2" ><span>Dans tout le monde </span></li>

					<li onClick={handleItemClick2} className="c2"><span>Dans La Tunisie</span></li>
				</ul>
	</div>

        {isClicked1 && (
        <div className='animals'>
         <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Le panda roux</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/panda-roux.jpg' ></Card.Img>
          <Card.Text>
          Doté d’une fourrure épaisse lui permettant de résister au froid, le panda roux se retrouve en haute altitude entre la Chine, l’Inde et le Népal.
          Grand amateur de bambou, le mammifère souffre du déclin de sa principale source de nourriture causée par l’expansion humaine.
          Dans l’Himalaya oriental, les populations d’Hommes ont doublé en quelques décennies tandis que le panda roux a reculé de près de 50%
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header> Le Tigre (Panthera tigris)</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/tigre.png' ></Card.Img>
          <Card.Text>
            Sa population diminuer de 19 % par décennie.
            la déforestation des forêts vierges d’Asie, responsable de la disparition de leurs habitats naturels
            le braconnage et le commerce illégal de certaines parties du corps des tigres très prisées (la peau mais aussi les os, la queue ou les dents utilisées par la médecine traditionnelle asiatique)
            la montée des eaux de la mer, due aux changements climatiques, qui menace les mangroves, habitat d’une population clé de tigres dans les Sundarbans, au Bangladesh et en Inde.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Rhinocéros de Sumatra</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/R (1).jpg' ></Card.Img>
          <Card.Text>
          Le rhinocéros de Sumatra est le plus petit des rhinocéros vivants et le seul rhinocéros asiatique à posséder deux cornes. Malheureusement, leur nombre diminue de 35 % par décennie.
          </Card.Text>
        </Card.Body>
      </Card>
     
      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>La Tortue luth</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/R (2).jpg' ></Card.Img>
          <Card.Text>
          
          La Tortue luth fréquente tous les océans de la planète, mais sa survie est gravement menacée par le braconnage, les filets de pêche, 
         la pollution et l'artificialisation du littoral et par le réchauffement climatique car la température du sable influence le sexe de la future tortue.
         Elle figure sur la liste rouge de l'UICN des espèces en voie de disparition et fait l'objet de conventions et de programmes internationaux de protection et de conservation.
         Le plus gros reptile de la planète a perdu près de 70% de sa population en une quinzaine d’années seulement.
          </Card.Text>
        </Card.Body>
      </Card>
      

      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>L'ours polaire</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/ours.jpg' ></Card.Img>
          <Card.Text>
          Cette espèce vit uniquement sur la banquise autour du pôle Nord, au bord de l'océan Arctique.
          Aussi à l’aise dans l’eau que sur la neige fraîche, le plus grand carnivore terrestre est pourtant devenu l’un des symboles du réchauffement climatique 
          tandis que son territoire, la banquise, ne cesse de disparaître année après année.
          </Card.Text>
        </Card.Body>
      </Card>

       <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>L'Orang-Outan</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/orang.jpg' ></Card.Img>
          <Card.Text>
          Avec sa fourrure rougeâtre et ses bras puissants, l’orang-outan a notamment élu domicile dans les forêts tropicales indonésiennes où il peut grimper en hauteur à la recherche de nourriture.
          Menacés par la disparition de leur habitat au profit de la culture de palmiers à huile, ce sont environ 25 orang-outans qui disparaissent chaque jour.
          </Card.Text>
        </Card.Body>
      </Card>

     <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Le koala</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/koala_01.png' ></Card.Img>
          <Card.Text>
          Le koala est une espèce menacée d'extinction en Australie. 
          Les effectifs de koalas ont chuté de manière spectaculaire suite aux incendies de forêt, à la sécheresse et aux maladies1. Les koalas ont été chassés et massivement exterminés pour leur fourrure jusqu'au début du XXe siècle.
           Aujourd'hui, le koala est menacé par l'urbanisation et la réduction de son habitat naturel. 
          Les koalas sont également menacés par plusieurs maladies, dont la chlamydiose, la rétrovirose et la leucémie.
          </Card.Text>
        </Card.Body>
      </Card>

       <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header> Saola</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/saola.png' ></Card.Img>
          <Card.Text>
          Le saola, également appelé "licorne asiatique", est une magnifique créature bovine et l'un des grands mammifères les plus rares au monde. 
          Il vit dans les forêts de la chaîne des Annamites au Vietnam et au Laos.
          La population de saola diminue de 80 % par décennie, ce qui signifie qu'elle risque de disparaître complètement d'ici 2050.
          </Card.Text>
        </Card.Body>
      </Card> 

     <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Le cobra royal</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (1).jpg' ></Card.Img>
          <Card.Text>
          Pouvant mesurer jusqu’à six mètres, le cobra royal est le plus long de tous les cobras et peut tuer d’une simple morsure en 15 minutes seulement.
          On le retrouve dans divers milieux d’Asie du sud-est où la progression humaine menace son territoire jusqu’en altitude.
          </Card.Text>
        </Card.Body>
      </Card>  

      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Le varan de komodo</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (3).jpg' ></Card.Img>
          <Card.Text>
          Jusqu’à trois mètres de long pour environ 70 kg, le varan de komodo est la plus grande espèce de lézard au monde.
          Réparti à travers une poignée d’îles d’Indonésie, il n’en reste aujourd’hui que 5700 individus et leur population est en déclin.
          </Card.Text>
        </Card.Body>
      </Card>  

          {/* Ajoutez d'autres cartes Bootstrap au besoin */}
        </div>
      )}


{isClicked2 && (
        <div className='animals'>
         <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Gazelle de cuvier</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/R (3).jpg' ></Card.Img>
          <Card.Text>
          Gazella cuvieri ou gazelle de Cuvier est une espèce de gazelles d'Afrique du Nord et du Sahara.Elle est est présente actuellement au Maroc, en Tunisie et dans le nord de l'Algérie.
          La gazelle de Cuvier est rare, en danger selon l'UICN : sa population est estimée a 2 500 individus.
       </Card.Text>
        </Card.Body>
      </Card>
      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Mouflon à manchettes</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/Barbary_Sheep_Tennoji.jpg' ></Card.Img>
          <Card.Text>
          Le mouflon à manchettes est menacé dans son habitat d'origine, mais se comporte en espèce invasive en Espagne et aux États-Unis, après y avoir été introduit pour la chasse. 
          Il est également présent dans la dépression de Qattara.
       </Card.Text>
        </Card.Body>
      </Card>
      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Cerf élaphe</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (5).jpg' ></Card.Img>
          <Card.Text>
        Le cerf élaphe (Cervus elaphus) est un grand cervidé reconnaissable par ses bois ramifiés portés par les mâles.
        Les bois sont perdus et régénérés annuellement.
        Les cerfs élaphe ont un pelage brun-roux en été, plus foncé en hiver. 
        Les femelles, appelées biches, n'ont pas de bois.
        L'espèce est répandue en Europe, en Asie , et en Amérique du Nord, habitant divers habitats, des forêts aux prairies. Ils sont connus pour leurs parades nuptiales, y compris des combats entre mâles pour établir la dominance.
       </Card.Text>
        </Card.Body>
      </Card>

      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Outarde houbara</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/outarde.houbara.loep.10g.jpg' ></Card.Img>
          <Card.Text>
          L’outarde houbara est inscrite dans la catégorie «Vulnérable» (VU), d’après les critères de la liste rouge des espèces menacées de l’UICN.
          En Tunisie, cette espèce est en voie de disparition à cause de la chasse illégale, la dégradation de ses habitats liée au surpâturage, l’urbanisation et l’intensification de l’agriculture.
       </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Aigle impérial</Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/R (4).jpg' ></Card.Img>
          <Card.Text>
        L'aigle impérial (Aquila heliaca) est un grand rapace au plumage brun foncé et à l'envergure imposante. 
        Menacé en raison de la perte d'habitat et de la chasse, cet aigle se nourrit de petits mammifères et d'oiseaux.
        Des efforts de conservation sont déployés pour protéger cette espèce majestueuse.
       </Card.Text>
        </Card.Body>
      </Card>

      <Card className ="animal" border="light" style={{ width: '18rem' }}>
        <Card.Header>Tortue marginée  </Card.Header>
        <Card.Body>
          <Card.Img   src='../../../public/images/OIP (6).jpg' ></Card.Img>
          <Card.Text>
          La tortue marginée ,tortue bordée ,est une espèce de tortue terrestre. Elle est herbivore et hiberne en hiver.  
          En Tunisie, cette tortue est protégée par la Code forestier et est notoirement connue par les pêcheurs comme espèce interdite à la pêche.
       </Card.Text>
        </Card.Body>
      </Card>

        </div>
      )}
    <Footer></Footer>
    </>

  )
}

export default EspècesAnimales
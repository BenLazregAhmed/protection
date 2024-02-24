// Politiques.jsx

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Politiques.css'; 
import NavBar2 from '../../../components/NavBar2/NavBar2';

const Politiques = () => {
  return (
    <>
   <NavBar2/>
    <Container className="mt-5">
      <Row>
        <h1 className='politics-h1'>Les Politiques nationales de protection </h1>
        <hr></hr>
        <Col>
          <h3 className='politics-h3'>Stratégie et plan d’action nationaux pour la biodiversité 2018-2030</h3>
          <Image src="../../../images/Cap1.png" alt="img"   />
          
          <p>
            La Tunisie est signataire de la Convention sur la diversité biologique (CDB, 1992), qui offre un
            cadre pour les efforts menés afin de réduire la perte de biodiversité et de services fournis par
            les écosystèmes. En 2010, les Parties à la Convention ont adopté le « Plan stratégique 2011-
            2020 pour la diversité biologique » et développé les objectifs d’Aichi afin de catalyser l’action
            pour la préservation de nos écosystèmes.
          </p>
          <p>
            Pour donner corps à cette stratégie mondiale, la Tunisie a entrepris d’actualiser la stratégie et
            le plan d’action nationaux pour la biodiversité 2018-2030 (SPANB). Le processus d’élaboration
            du SPANB 2018-2030 a été coordonné et suivi par le ministère des Affaires Locales et de
            l’Environnement, point focal de la CDB, et a bénéficié de l’appui du PNUD et le soutien financier
            du Fonds pour l’Environnement Mondial (FEM).
          </p>

          <p>
            L’élaboration de la stratégie et de son plan d’action 2018-2020 a été précédée de 3 étapes :
            <br></br>
            - Un examen et un bilan des processus de planification de la biodiversité au niveau national 
            <br></br>
            - Une évaluation de la valeur économique des éléments de biodiversité et des services
            écosystémiques au niveau national 
            <br></br>
            - Une définition des objectifs nationaux et d’indicateurs pertinents « SMART » de suivi de la
            diversité biologique.
          </p>
        </Col>
        <hr></hr>
      </Row>
      {/* <Row>
        <Col>
        <h3>PLAN D’ACTION NATIONAL POUR LA CONSERVATION DES TORTUES MARINES EN TUNISIE</h3>
        </Col>
      </Row> */}
      <Row>
        <Col>
        <h3 className='politics-h1'>Plan d’action pour l’application du Programme de travail sur les aires protégées de la Convention sur la Diversité Biologique</h3>
        <Image src="../../../images/Cap2.png" alt="img"   />
        <p>
            La Tunisie, pays aride, soumise à l’influence du climat méditerranéen avec une moyenne de pluviométrie n’excédant pas les 200 mm/an, dispose d’une variété spécifique et écosystémique bien importante variant du Nord au Sud. L’actualisation de l’étude nationale sur la diversité biologique en 2009, a décelé que le nombre d’espèces animales et végétales terrestres et aquatiques identifiés jusque là s’élève à environ 7200 espèces. Ces dernières se trouvent réparties sur 69 écosystèmes naturels et environ 12 agrosystèmes.
          </p>
          <p>
            Actuellement, le Ministère de l’Environnement (DGEQV), en collaboration avec les départements concernés en l’occurrence la Direction Générale des Forêts, est en train d’élaborer une étude portant sur « l’analyse de la représentativité écologique et de l’efficacité de gestion des aires protégées en Tunisie ». Cette étude a pour objectifs, notamment :
          </p>
          <ul>
            <li>Identifier les lacunes et les défaillances au niveau du système national des aires protégées en vue de faire les ajustements nécessaires ;</li>
            <li>Renforcer le système national des aires protégées sur le plan de la représentativité écologique ;</li>
            <li>Améliorer l’efficacité de gestion au niveau des différents sites en vue d’atteindre leurs objectifs de création ;</li>
            <li>Contribuer à la préservation des éléments constitutifs de la biodiversité à haute valeur écologique dans une vision d’intégrité éco-systémique (milieu naturel, social, culturel,…)</li>
            <li>Contribuer à atteindre les objectifs de la CDB.</li>
          </ul>
          <p>
            Cette étude est d’une importance stratégique pour le pays du fait qu’elle va nous aider à définir les priorités nationales et mettre en exergue les lacunes écologiques et des approches de gestion. Cette étude permettra aussi l’identification de nouvelles aires protégées selon qu’il convient afin de couvrir tous les sites et écosystèmes nécessitant une protection et conservation.
          </p>
          <hr></hr>
          </Col>
      </Row>
      <Row>
        <Col>
        <h3 className='politics-h1'>Convention sur la conservation des espèces migratrices appartenant à la faune sauvage</h3>
        <Image src="../../../images/Medium_WW182523.jpg" alt="img" />
        <p>
        En tant que traité environnemental du Programme des Nations Unies pour l’Environnement, la CMS offre une plateforme globale pour la conservation et l’utilisation durable des animaux migrateurs et de leurs habitats. La CMS réunit les Etats traversés par les animaux migrateurs, ou Etats de l’aire de répartition, et établit les bases juridiques sur lesquelles s’appuient les mesures de conservation coordonnées internationalement pour une espèce migratrice.
        </p>
        <p>
        Étant la seule convention internationale spécialisée dans la conservation des espèces migratrices, de leurs habitats et de leurs voies de migration, la CMS agit de manière complémentaire et en coopération avec nombre d’autres organisations internationales, d’ONG et de partenaires dans les médias et le secteur privé.
        </p>
        <p>
        Les espèces migratrices menacées d’extinction sont inscrites à l’Annexe I de la Convention. Les Parties à la CMS s’emploient à protéger strictement ces animaux, à conserver ou restaurer les lieux où ils vivent, à atténuer les obstacles à leur migration et à contrôler les autres facteurs qui pourraient les mettre en danger. En plus d’établir des obligations pour chaque État adhérant à la Convention, la CMS favorise les actions concertées entre les États de l’aire de répartition de ces espèces.
        </p>
        <p>
        Les espèces migratrices qui ont besoin de la coopération internationale, ou qui pourraient en bénéficier de manière significative, figurent à l’Annexe II de la Convention. Pour cette raison, la Convention encourage les États de l’aire de répartition à conclure des traités mondiaux ou régionaux.
        </p>
        <p>
        À cet égard, la CMS agit comme une convention-cadre. Ces traités peuvent aller d’accords juridiquement contraignants (appelés accords) à des instruments moins formels, tels que les mémorandums d’entente, et peuvent être adaptés aux exigences de régions particulières. La capacité de la Convention à développer des modèles conçus en fonction des besoins de conservation dans l’ensemble de la voie de migration est propre à la CMS.
        </p>
        <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3 className='politics-h1'>Stratégie et plan d’action pour la conservation du mouflon à manchettes (Ammotragus lervia) en Tunisie 2018-2027</h3>
        <Image src="../../../images/OIP (14).jpg" alt="img" />
        <p>Le mouflon à manchettes (Ammotragus lervia), un ongulé endémique du nord de l’Afrique, est actuellement classé en tant qu’espèce Vulnérable d’après la Liste rouge des 
          espèces menacées de l’UICN™ (Cassinello et al., 2008), ses effectifs en Tunisie étant peu nombreux et en déclin.
        </p> 
        <p>
          Les principales causes de ce déclin sont le braconnage 
          ainsi que la fragmentation et la destruction de son habitat. 
          Face à cette situation, une stratégie et un plan d’action 
          pour sa conservation au niveau national méritent d’être 
          mis en œuvre de toute urgence.
          </p>
          <p>
            Dans cette optique, cette stratégie aspire à voir des 
            populations viables de mouflons à manchettes dans 
            leurs aires de répartition potentielles en Tunisie d’ici 
            2050, de manière à ce qu’ils symbolisent les montagnes 
            nord-africaines et constituent un élément important du 
            développement durable. À moyen terme, la finalité de 
            cette stratégie est d’assurer la survie d’au moins quatre 
            populations de mouflons à manchettes en liberté d’ici 
            2027, occupant leurs aires de répartition naturelle au 
            Saharien, au Dahar/Ouara, à l’Orbata-Bou Hedma et sur 
            la Dorsale.
            </p>
            <p>
              Pour atteindre cet objectif, cinq stratégies d’intervention ont été identifiées :
              <br></br>
            (i) conservation de l’habitat
            <br></br> 
            (ii) élimination du braconnage
            <br></br> 
            (iii) suivi et collecte de données
            <br></br> 
            (iv) sensibilisation et valorisation
            <br></br> 
            (v) mécanismes de financement.
            <br></br> 
            </p>
            <p>Pour chacune de ces 
            stratégies, un objectif à long terme et des objectifs 
            stratégiques ont été définis et des actions prioritaires 
            ont été prescrites pour la période 2018-2027, avec des 
            indications en termes de responsabilité et de budget. Des 
            indicateurs et des moyens de vérification ont également 
            été définis pour chaque objectif stratégique afin de suivre 
            la mise en œuvre du plan d’action et les niveaux atteints 
            à chaque étape.
            </p>
            <p>
            La réussite de la mise en œuvre de cette stratégie sera 
            étroitement liée au travail de plusieurs acteurs au niveau 
            national et chacun devra opérer en coordination avec 
            diverses institutions afin d’accomplir les objectifs de 
            façon efficace.
            </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Politiques;

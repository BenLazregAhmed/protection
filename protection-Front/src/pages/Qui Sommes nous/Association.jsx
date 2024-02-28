import { useState } from 'react';
import React from 'react'
import NavBar2 from '../../components/NavBar2/NavBar2'
import './StylesAssociation.css'
function Association() {
    const [lineHeight, setLineHeight] = useState(15);
  const [activeLink, setActiveLink] = useState('');

  const handleItemClick = (link, heightIncrease) => {
    const currentHeight = heightIncrease;

    setLineHeight(currentHeight);
    setActiveLink(link);
  };
  return (
    <>
    <NavBar2/>
            <div className="sc-aec1bf2e-0 Mgsfh">
                <div data-testid="summary-container" className="sc-8188ef7e-0 iUgqkB">
                    <ul className="sc-8188ef7e-2 hZiMfG">
                        <div className="sc-8188ef7e-1 fryThX" style={{ height: `${lineHeight}%`}}>
                            </div>
                            <li data-testid="summary-item-container" className="sc-8188ef7e-3 bQvgnD">
                                <div className="sc-8188ef7e-4 fQEjop">
                                    <h4 className="sc-495524b4-0 sc-8188ef7e-5 hwSaPt gtZoKZ">
                                    <a
                                            data-testid="summary-item-link"
                                            href="#historique"
                                            className={`sc-db706991-0 gYeoJc ${activeLink === 'historique' ? 'active' : ''}`}
                                            onClick={() => handleItemClick('historique', 20)} onScroll={() => handleItemClick('historique', 20)}
                                    >
                                            Historique</a>
                                        </h4>
                                        </div>
                            </li>
                            <li data-testid="summary-item-container" className="sc-8188ef7e-3 bQvgnD">
                                <div className="sc-8188ef7e-4 fQEjop">
                                    <h4 className="sc-495524b4-0 sc-8188ef7e-5 hwSaPt gtZoKZ">
                                        <a
                                            data-testid="summary-item-link"
                                            href="#status"
                                            className={`sc-db706991-0 gYeoJc ${activeLink === 'status' ? 'active' : ''}`}
                                            onClick={() => handleItemClick('status', 40)} onScroll={() => handleItemClick('status', 40)}
                                        >Status</a>
                                        </h4>
                                </div>
                            </li>
                                <div class="sc-8188ef7e-1 fryThX" >
                                 </div>             
                            
                            <li data-testid="summary-item-container" className="sc-8188ef7e-3 bQvgnD">
                                            <div className="sc-8188ef7e-4 fQEjop">
                                                <h4 className="sc-495524b4-0 sc-8188ef7e-5 hwSaPt gtZoKZ">
                                                <a
                                                    data-testid="summary-item-link"
                                                    href="#gouvernance"
                                                    className={`sc-db706991-0 gYeoJc ${activeLink === 'gouvernance' ? 'active' : ''}`}
                                                    onClick={() => handleItemClick('gouvernance', 70)} onScroll={() => handleItemClick('gouvernance', 70)}
                                                >
                                                Gouvernance </a>
                                                    </h4>
                                                    </div>
                            </li>
                            <div class="sc-8188ef7e-1 fryThX" >
                             </div>                       
                           
                            <li data-testid="summary-item-container" className="sc-8188ef7e-3 bQvgnD">
                                <div className="sc-8188ef7e-4 fQEjop"><h4 className="sc-495524b4-0 sc-8188ef7e-5 hwSaPt gtZoKZ">
                                        
                                  <a
                                    data-testid="summary-item-link"
                                    href="#Planstrategie"
                                    className={`sc-db706991-0 gYeoJc ${activeLink === 'PlanPlanstrategie' ? 'active' : ''}`}
                                    onClick={() => handleItemClick('PlanPlanstrategie', 100)} onScroll={() => handleItemClick('PlanPlanstrategie', 100)}
                                  >
                                  Plan Stratégique</a>
                                        
                                    </h4>
                                    </div>
                            </li>
                        </ul>
                        </div>
                        <div className="sc-7f68ca61-0 gxablo pageContent">
                        <div className="sc-a7e86b71-0 gKWAik medium start">
                        <div data-testid="titleWithAnchor-container" className="sc-206aa025-0 eKtGsm">
                            <a data-testid="titleWithAnchor-anchor" id="historique" className="sc-206aa025-1 fqwrnT"></a>
                            <h2 data-testid="titleWithAnchor-title" className="sc-206aa025-2 dsjbAu">Historique</h2>
                        </div>
                     </div>
                        <div className="sc-a7e86b71-0 gKWAik medium start">
                            <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                                
                                        <p>Fondée le 03 janvier 2010 par <b><i>Emna Belhaj Ltaief</i></b>  et <b><i>Ahmed Belazreg</i></b>, "Protect Wild Life" a été créée dans le but de répondre à
                                        l'urgence de la protection des espèces rares et menacées à travers le monde. Depuis ses débuts, l'association
                                        s'est engagée dans des initiatives innovantes, travaillant en étroite collaboration avec des partenaires
                                        gouvernementaux, des organisations privées, des communautés locales, et des peuples autochtones. Grâce à des
                                        années d'efforts déterminés, "Protect Wild Life" a réussi à mettre en place des projets de conservation
                                        durables, à sensibiliser le public à l'importance de la biodiversité, et à contribuer significativement à la
                                        préservation d'habitats essentiels pour la survie de nombreuses espèces. L'association continue d'évoluer
                                        avec un engagement renouvelé envers la protection de la faune et de la flore, tout en cherchant constamment
                                        de nouvelles approches pour relever les défis environnementaux actuels. </p>
       
                            </div>
                         </div>
                            <div className="sc-a7e86b71-0 gKWAik medium start">
                                <div data-testid="titleWithAnchor-container" className="sc-206aa025-0 eKtGsm">
                                    <a data-testid="titleWithAnchor-anchor" id="status" className="sc-206aa025-1 fqwrnT"></a>
                                    <h2 data-testid="titleWithAnchor-title" className="sc-206aa025-2 dsjbAu">Status </h2>
                                </div>
                            </div>
                                    <div className="sc-a7e86b71-0 gKWAik medium start">
                                        <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                                            <h3 >Notre Mission</h3>
                                                <p>Chez Protect Wild Life, notre mission passionnée est de protéger et préserver la diversité des espèces rares. Nous agissons activement pour la conservation des espèces menacées, car chaque vie sauvage compte.</p>
                                        </div>
                                        <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                                            <h3 >Notre Engagement</h3>
                                                <p> Engagés dans la sensibilisation, nous stimulons la curiosité et l'amour de la nature. En collaborant avec d'autres passionnés, nous œuvrons pour préserver la biodiversité et assurer un avenir durable.</p>
                                        </div>
                                        <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                                            <h3 >Notre Impact</h3>
                                                <p>À travers nos initiatives continues, nous avons marqué un impact significatif dans la préservation des espèces rares. Des programmes de réintroduction aux études approfondies, nous façonnons un avenir plus vert.</p>
                                        </div>
                                        <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                                            <h3 >Notre Vision</h3>
                                                <p> Protect Wild Life rêve d'un monde où chaque espèce, même les plus rares, cohabite harmonieusement. Notre vision transcende les générations, visant une diversité biologique préservée et admirée.</p>
                                        </div>
                                    </div>
                            <div className="sc-a7e86b71-0 gKWAik medium start">
                                <div data-testid="titleWithAnchor-container" className="sc-206aa025-0 eKtGsm">
                                    <a data-testid="titleWithAnchor-anchor" id="gouvernance" className="sc-206aa025-1 fqwrnT"></a>
                                    <h2 data-testid="titleWithAnchor-title" className="sc-206aa025-2 dsjbAu">Gouvernance </h2>
                                </div>
                            </div>
                <div className="sc-a7e86b71-0 gKWAik medium start">
                    <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                        <h3 >Gouvernance par le gouvernement</h3>
                            <p>Protect Wild Life collabore étroitement avec les autorités gouvernementales, tant au niveau fédéral/national
                                que sous-national. Nous travaillons en partenariat avec les organismes et ministères en charge de la protection
                                de la faune et de la préservation de l'environnement. Cette collaboration peut inclure des initiatives conjointes,
                                des délégations de responsabilités ou encore la mise en œuvre de politiques gouvernementales dédiées à la
                                protection des espèces menacées et rares. </p>
                    </div>
                    <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                        <h3 >Gouvernance partagée</h3>
                            <p>Protect Wild Life promeut une approche de gouvernance partagée, impliquant une collaboration étroite avec
                                diverses parties prenantes. Cette collaboration peut prendre différentes formes, allant de la gouvernance
                                collaborative avec différents degrés d'influence, à la gestion conjointe avec un conseil pluraliste, et même
                                à la collaboration transfrontalière impliquant des efforts de part et d'autre de frontières internationales. </p>
                    </div>
                    <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                        <h3 >Gouvernance privée</h3>
                            <p>La gouvernance de Protect Wild Life peut également prendre des formes privées, impliquant des propriétaires
                                individuels, des organisations sans but lucratif telles que des ONG, des universités ou des coopératives,
                                ainsi que des organisations à but lucratif, qu'il s'agisse de particuliers engagés ou de sociétés œuvrant
                                pour la protection des espèces menacées. </p>
                    </div>
                    <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                        <h3 >Gouvernance par des communautés locales</h3>
                            <p>Certaines aires et territoires sont conservés par des peuples autochtones ou des communautés locales,
                                déclarés et gérés par ces mêmes peuples et communautés. Protect Wild Life respecte et collabore étroitement
                                avec ces acteurs locaux dans le cadre de sa mission de protection des espèces menacées. </p>
                    </div>
                </div>
       
                     
        <div className="sc-a7e86b71-0 gKWAik medium start">
            <div data-testid="titleWithAnchor-container" className="sc-206aa025-0 eKtGsm">
                <a data-testid="titleWithAnchor-anchor" id="Planstrategie" className="sc-206aa025-1 fqwrnT"></a><h2 data-testid="titleWithAnchor-title" className="sc-206aa025-2 dsjbAu">Plan Stratégique</h2>
                </div>
                </div>
                <div className="sc-a7e86b71-0 gKWAik medium start">
                    <div data-testid="content-rich-text-container" className="sc-12fa3cf6-0 HHVxH">
                        <h3 >La stratégie pour 2023 - 2032</h3>
                        

                     </div>
             </div>
        <div className="sc-a7e86b71-0 gKWAik medium center">
            <div data-testid="textWithImage-container" className="sc-f743bb72-0 cJgVYv">
                <p>Ce plan stratégique en 4 axes a été élaboré collectivement avec les salariés et les élus, de juillet 2023 à janvier 2024. Il sera décliné dans des plans d’actions sur les principaux objectifs opérationnels. Pour plus de lisibilité, les actions déployées à l’international sont regroupées à la fin du document.</p>
                   <div>
                    <h6><b><i>Axe 1 : Expertise</i></b></h6>
                    <ul>
                    <li>S’investit dans la recherche scientifique</li>
                    <li>Développe les connaissances sur nos thèmes et nos publics</li>
                    <li>Développe les sciences participatives</li>
                    <li>Valorise la connaissance</li>
                    </ul>
                    </div>
                    <div>
                    <h6><b><i>Axe 2 : Action</i></b></h6>
                    <ul>
                    <li>Protège les espèces sauvages menacées</li>
                    <li>Lutte contre la perte d’habitats</li>
                    <li>Combat la surexploitation et le trafic des espèces</li>
                    <li>Lutte contre les pollutions et risques</li>
                    </ul>
                    </div>        
                    <div>
                    <h6><b><i>Axe 3 : Militantisme</i></b></h6>
                    <ul>
                    <li>Renforce son influence par le plaidoyer et la mobilisation</li>
                    <li>Conforte son action juridique au national et en régions</li>
                    <li>Accroit sa notoriété</li>
                    <li>Permet à chacun d’agir</li>
                    </ul>
                    </div>
                    <div>
                    <h6><b><i>Axe 4 : Exemplarité</i></b></h6>
                    <ul>
                    <li>Met en œuvre une politique RSE/RSO ambitieuse</li>
                    <li>Accompagne ses salariés dans une culture commune</li>
                    <li>Clarifie et conforte la fonction de bénévole</li>
                    <li>Fixe un nouveau cadre éthique pour ses partenariats entreprises</li>
                    </ul>
                    </div>
                    
                    </div>        
                             
                 <div>
                    <p style={{color:'rgb(199, 142, 18)' ,fontSize:18,fontWeight:'bold',}}> Zoom sur l'international : </p>
                    <p> Collaboration avec des associations à l'échelle international .
                        <br></br>
                        Participer à des conférences à l'étranger.
                    </p>

                 </div>
                    </div>
     
                    
        </div>
        </div>
    </>
  )
};

export default Association;

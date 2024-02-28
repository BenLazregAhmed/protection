import React from 'react'
import NavBar2 from '../../../components/NavBar2/NavBar2';
import './SecoursPlantes.css'
import Footer from '../../../../src/components/Footer/Footer';

const SecoursPlantes = () => {
  return (
    <>
    <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
          <div className="container mt-4">
            <div className='divTitle'>
              <h1 className="titleH1">Des gestes simples et essentiels pour secourir vos plantes</h1>
              <img src="../../../public/images/plantes.jpg"/> 
             </div>
            
      
            {/* Conseil 1 */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="titleH4">Choisir une plante adaptée à son environnement</h4>
                <p className="card-text">
                Exposition plein nord ou plein sud, pièce avec un air intérieur sec ou carrément humide (salle de bains), composition du foyer (enfants, animaux etc.), on oriente ses choix en fonction ! Pour cela on demande conseils aux spécialistes. 
                Une plante heureuse est une plante adaptée à son environnement.
                </p>
              </div>
            </div>
      
            {/* Conseil 2 */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="titleH4">Arroser convenablement</h4>
                <p className="card-text">
                
                La plupart du temps, c’est en raison d’un excès (ou un manque) d’eau que les feuilles des plantes jaunissent. 
                Trop arroser va bloquer l’oxygène dans la terre du coup les plantes vont pourrir. Pour éviter cela, vous devez arroser uniquement lorsque la surface de la terre est sèche. 
                Vous pouvez aussi vous aider avec le poids du pot : si vous le sentez léger, c’est le moment d’arroser et inversement s’il est lourd. 
                Les petits cailloux ou les billes d’argile peuvent vous donner un coup de main pour le drainage.

                </p>
              </div>
            </div>
      
            {/* Conseil 3 */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="titleH4">Le bon moment de la fertilisation</h4>
                <p className="card-text">
                
                Parfois, les feuilles qui deviennent jaunes peuvent être à l’origine d’un manque de fer ou de magnésium. 
                Vous devez donc la fertiliser en apportant les nutriments nécessaires à votre plante notamment sur la période de mars à octobre (moment de croissance).
                N’utilisez pas de produits chimiques, mais plutôt des engrais naturels et faits à la maison.
               
                    
                    
                </p>
              </div>
            </div>
      
            {/* Conseil 4 */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="titleH4">Chassement les parasites</h4>
                <p className="card-text">
                
                    Certains insectes, tels que le psylle et les pucerons, peuvent faire des dégâts sur les plantes. En cas d’attaque, vous aurez des feuilles qui jaunissent.
                     Pour faire fuir ces petits indésirables, vous pouvez disposer des plantes aromatiques très odorantes autour de votre plante (lavande, menthe, basilic) ou pulvériser du savon noir sur les feuilles malades une fois par jour (matin ou soir).
                </p>
                <img src="../../../public/images/parasites.jpg"  style={{width:900,height:250,marginLeft:40}}/>
              </div>
            </div>


            {/* Conseil 5 */}
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="titleH4">Une bonne exposition</h4>
                <p className="card-text">
                
                Vous n’êtes peut-être pas au courant, mais changer brutalement sa plante de place peut l’endommager.
                Les changements brutaux de température et les courants d’air frais peuvent être la source de feuilles qui jaunissent. 
                Pour cela, il faut enlever les végétaux des fenêtres (surtout l’hiver) et ne pas les mettre en plein soleil pour des plantes qui ne supportent pas les rayons.
                </p>
                <img src="../../../public/images/exposition.jpeg"  style={{width:900,height:250,marginLeft:40}}/>
              </div>
            </div>

            
            

          </div>
        <Footer></Footer>
          </>
        );
      };
      
      export default SecoursPlantes;


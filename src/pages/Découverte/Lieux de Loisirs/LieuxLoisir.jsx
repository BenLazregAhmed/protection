import React from 'react';
import { Carousel} from 'react-bootstrap';
import Caption1 from '../../../components/Body/Section1/Caption/Caption1';
import NavBar2 from '../../../components/NavBar2/NavBar2';
function LieuxLoisir() {
  return (
    <>
    <NavBar2/>
    <Carousel slide touch fade >
      <Carousel.Item>
      <img src='../../../images/ste-loisirs-de-tabarka.jpg'></img>
        <Carousel.Caption>
          <Caption1 titre={'Ste LOISIRS de TABARKA'} ></Caption1>
          <p>La société LOISIRS DE TABARKA ,basée à Jendouba,spécialisée Plongee - Centres</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='../../../images/img-20180831-114100-largejpg.jpg'></img>
        <Carousel.Caption>
          <Caption1 titre={'Ste LOISIRS de TABARKA'} ></Caption1>
          <p><i class="fa-solid fa-location-dot"></i>     Port de Plaisance 8110 Tabarka, Jendouba</p>
          <p><i class="fa-solid fa-phone-volume"></i>  78 670 664 / 78 673 801 / 23 372 357 / 98 349 833</p>
          <a href="http://www.loisirsdetabarka.com" >  http://www.loisirsdetabarka.com</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='../../../images/ste-loisirs-de-tabarka (1).jpg'></img>
        <Carousel.Caption>
          <Caption1 titre={'Ste LOISIRS de TABARKA'} ></Caption1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<br></br>

    <Carousel slide touch fade >
      <Carousel.Item>
      <img src='../../../images/diver.jpg'></img>
        <Carousel.Caption>
          <Caption1 titre={'Djerba Sub Diving Center'} ></Caption1>
          <p>Djerba-Sub, c’est un centre de plongée loisir qui a vu le jour en 2001. Situé les pieds dans l’eau sur la plage de l’île de Djerba, il est une structure professionnelle membre de La Fédération des Activités Subaquatiques de Tunisie (FAST) et agrée par le ministère de Tourisme. 
            Le centre est ouvert 7 jours sur 7 du mois de mars à novembre</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='../../../images/gopr2501-largejpg.jpg'></img>
        <Carousel.Caption>
          <Caption1 titre={'Djerba Sub Diving Center'} ></Caption1>
          <p><i class="fa-solid fa-location-dot"></i>     Plage Hôtel Palais des îles,Zone Touristique Midoun,Djerba Tunisie</p>
          <p><i class="fa-solid fa-phone-volume"></i> +216 98 212 287</p>
          <a href="http://www.loisirsdetabarka.com" ><i class="fa-solid fa-earth-americas"></i> http://djerbasub.com/</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='../../../images/djerba-sub-diving-center.jpg'></img>
        <Carousel.Caption>
          <Caption1 titre={'Djerba Sub Diving Center'} ></Caption1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>
    <Carousel slide touch fade >
      <Carousel.Item>
      <img src='../../../images/Drehort-Tunesien-lezard-rouge.jpg'></img>
        <Carousel.Caption>
          <Caption1 titre={'Lézard rouge'} ></Caption1>
          <p>Le Lézard rouge est un train touristique de Tunisie parcourant les gorges de Selja, un canyon aux parois abruptes au centre duquel coule l'oued Selja</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='../../../images/1280px-Selja_gorge_railway.png'></img>
        <Carousel.Caption>
          <Caption1 titre={'Lézard rouge'} ></Caption1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='../../../images/maxresdefault.jpg'></img>
        <Carousel.Caption>
          <Caption1 titre={'Lézard rouge'} ></Caption1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  <br></br>  
  <Carousel slide touch fade >

<Carousel.Item>
<img src='../../../images/R (9).jpg'></img>
  <Carousel.Caption>
    <Caption1 titre={'Djerba Explore'} ></Caption1>
    <p>Le Parc Djerba Explore est au coeur de la zone touristique de Midoun, au pied du phare de Taguermess.
       D’accès facile et rapide, le parc se situe à moins de dix minutes des principaux hôtels de l’île de Djerba et à une vingtaine de kilomètres de l’aéroport et de la ville de Houmt Souk.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img src='../../../images/photo5jpg.jpg'></img>
  <Carousel.Caption>
  <p><i class="fa-solid fa-location-dot"></i>    Route touristique de Midoun,Djerba Tunisie</p>
  <p><i class="fa-solid fa-phone-volume"></i> (+ 216) 75 745 277</p>
  <a href="http://www.loisirsdetabarka.com" ><i class="fa-solid fa-earth-americas"></i> https://www.djerbaexplore.com/</a>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img src='../../../images/heritage.jpg'></img>
  <Carousel.Caption>
    <Caption1 titre={'Djerba Explore'} ></Caption1>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
  <br></br>



  



{/* <Carousel slide touch fade >

  <Carousel.Item>
  <img src='../../../images/caption.jpg'></img>
    <Carousel.Caption>
      <Caption1 titre={' Chebika'} ></Caption1>
      <p>Chebika est une oasis de montagne située au sud de la Tunisie, dans la délégation de Tameghza, dans la partie l'ouest du gouvernorat de Tozeur</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src='../../../images/caption (1).jpg'></img>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src='../../../images/OIP (2).jpg'></img>
    <Carousel.Caption>
      <Caption1 titre={' Chebika'} ></Caption1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <br></br> */}




{/*     
  <Carousel slide touch fade >
    <Carousel.Item>
    <img src='../../../images/R (7).jpg'></img>
      <Carousel.Caption>
        <Caption1 titre={' Les Salines de Thyna'} ></Caption1>
        <p>  </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src='../../../images/caption (1).jpg'></img>
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src='../../../images/OIP (2).jpg'></img>
      <Carousel.Caption>
        <Caption1 titre={' Chebika'} ></Caption1>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
     */}
   



    </>
  )
}

export default LieuxLoisir




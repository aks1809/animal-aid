import React from "react";
import "../Style/HomePage.css";

function HomePage(){

  return (
    <div>
    <div class="full__carousel">
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="4000" >
   <div class="carousel-inner">
     <div class="carousel-item active">
      <div class="home__page__carousel1">

      <div class="home__page__text">
       <p>Street animals need our protection. Help them.</p>
      </div>
      <div class="home__page__img">
       <img class="home__page__carousel__img" src="carousel1.jpg" alt="dog-profile"/>
      </div>

     </div>
     </div>
     <div class="carousel-item">
     <div class="home__page__carousel2">

     <div class="home__page__text">
      <p>They just need a gentle touch not ignorance.</p>
     </div>
     <div class="home__page__img">
      <img class="home__page__carousel__img" src="carousel2.jpg" alt="dog-profile"/>
     </div>

    </div>

     </div>
     <div class="carousel-item">
     <div class="home__page__carousel3">

     <div class="home__page__text">
      <p>Animals are such agreeable friends—they ask no questions.</p>
     </div>
     <div class="home__page__img">
      <img class="home__page__carousel__img" src="carousel3.jpg" alt="dog-profile"/>
     </div>

    </div>
     </div>

     <div class="carousel-item">
     <div class="home__page__carousel2">

     <div class="home__page__text">
      <p>Until one has loved an animal, a part of one's soul remains unawakened.</p>
     </div>
     <div class="home__page__img">
      <img class="home__page__carousel__img" src="animallove.webp" alt="dog-profile"/>
     </div>

    </div>
     </div>
   </div>
 </div>
 </div>
    </div>
  );
}

export default HomePage;

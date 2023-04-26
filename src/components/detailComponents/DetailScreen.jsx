import React from 'react'
import salmon from '../../assets/salmon.jpg'

const DetailScreen = () => {  
  return (
    <section>
      <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "300px",
      }}
    >
      <div className="ad-content">
        <h1>Pineapple Salmon</h1>
      </div>
    </div>
    <div className='details-section'>
      <div className='recipe-ingredients'>
        <h2>Recipe</h2>
        <p>example text</p>
        <h2>Ingredents</h2>
        <p>example text</p>
      </div>
      <div className='recipe-details'>
        <h2>Details</h2>
        <p>example text</p>
      </div>
    </div>
    </section>
  );
};

export default DetailScreen;

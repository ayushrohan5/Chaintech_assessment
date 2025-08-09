import React from 'react';

const products = Array(8).fill({
  title: "Chaintech Product",
  tags: ["UX Design", "Angular", "JavaScript"],
  image: "image_6.jpg"
  // Use your image or placeholder here
});

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <div className="portfolio-grid">
        {products.map((product, i) => (
          <div key={i} className="portfolio-card">
            <img src={product.image} alt="Portfolio Thumbnail" className="portfolio-image" />
            <div className="portfolio-info">
              <h2 className="product-title">{product.title}</h2>
              <div className="tags">
                {product.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <button className="detail-btn">View Product Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

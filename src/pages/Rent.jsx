import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import Products from '../components/Products';

const Rent = () => {
  const { products, setCategoriesProducts } = useGlobalContext();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // Clear the categoriesProducts array when leaving the categories page
    return () => {
      setCategoriesProducts([]);
    };
  }, []);

  const handleFilter = (category) => {
    const filteredProducts = products.filter((item) => item.Type === category);
    setCategoriesProducts(filteredProducts);
    setActiveCategory(category);
  };

  return (
    <>
      <div className="categories-container">
        <div className='all-categories'><button
          className={`categories-button ${activeCategory === null ? 'active' : ''}`}
          onClick={() => {
            handleFilter(null);
            setActiveCategory(null);
          }}
        >
          All Categories
        </button></div>
        <div className='categories-others'><button
          className={`filter-button ${activeCategory === 'scooter' ? 'active' : ''}`}
          onClick={() => handleFilter('scooter')}
        >
          Scooter
        </button>
          <button
            className={`filter-button ${activeCategory === "bed" ? 'active' : ''}`}
            onClick={() => handleFilter("bed")}
          >
            Beds
          </button>
          <button
            className={`filter-button ${activeCategory === "dining table" ? 'active' : ''}`}
            onClick={() => handleFilter("dining table")}
          >
            dining table
          </button>
          <button
            className={`filter-button ${activeCategory === "Dining Table Set" ? 'active' : ''}`}
            onClick={() => handleFilter("Dining Table Set")}
          >
            dining table set
          </button>
          <button
            className={`filter-button ${activeCategory === "study table" ? 'active' : ''}`}
            onClick={() => handleFilter("study table")}
          >
            study table
          </button>
          <button
            className={`filter-button ${activeCategory === "center table" ? 'active' : ''}`}
            onClick={() => handleFilter("dining table")}
          >
            center table
          </button>
          <button
            className={`filter-button ${activeCategory === 'sofa' ? 'active' : ''}`}
            onClick={() => handleFilter('sofa')}
          >
           Sofas
          </button>
          <button
            className={`filter-button ${activeCategory === 'TV' ? 'active' : ''}`}
            onClick={() => handleFilter('TV')}
          >
           TV
          </button>
          <button
            className={`filter-button ${activeCategory === 'AC' ? 'active' : ''}`}
            onClick={() => handleFilter('AC')}
          >
           AC
          </button>
          <button
            className={`filter-button ${activeCategory === 'bike' ? 'active' : ''}`}
            onClick={() => handleFilter('bike')}

          >
           Bikes
          </button>
          <button
            className={`filter-button ${activeCategory === 'study chair' ? 'active' : ''}`}
            onClick={() => handleFilter('study chair')}
          >
           Study Chair
          </button>
          <button
            className={`filter-button ${activeCategory === 'refrigerator' ? 'active' : ''}`}
            onClick={() => handleFilter('refrigerator')}
          >
           refrigerators
          </button>
          <button
            className={`filter-button ${activeCategory === 'cupboard' ? 'active' : ''}`}
            onClick={() => handleFilter('cupboard')}
          >
           Cupboard
          </button>
          <button
            className={`filter-button ${activeCategory === 'chair' ? 'active' : ''}`}
            onClick={() => handleFilter('chair')}
          >
           Chair
          </button>
          
          
          
          </div>
      </div>
      <Products />
      
    </>
  );
};

export default Rent;
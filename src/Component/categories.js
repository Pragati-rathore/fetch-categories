import React, { useEffect, useState } from 'react';
import "../style/categories.css"
import BouncingHeading from './header';
import PopUp from './popup';


function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [joke, setJoke] = useState('');
  const [showPopup, setShowPopup] = useState(false);



  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    const data = await response.json();

    setCategories(data);
    setCategories(data.map(category => category.charAt(0).toUpperCase() + category.slice(1)))
  };

  const fetchJokeByCategory = async (category) => {
    setSelectedCategory(category);
    const formattedCategory = category.charAt(0).toLowerCase() + category.slice(1);
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${formattedCategory}`);
    const data = await response.json();
    setJoke(data.value);
    setShowPopup(true);
  };
  const fetchNextJoke = async () => {
    const formattedCategory = selectedCategory.charAt(0).toLowerCase() + selectedCategory.slice(1);
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${formattedCategory}`);
    const data = await response.json();
    setJoke(data.value);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="box">
      <header className="App-header">
        <BouncingHeading />
      </header>

      <div className="Categories-container">
        <div id="Categories-container">

          {categories.map((category) => (
            <div
              key={category}
              className="Category-box"
              onClick={() => fetchJokeByCategory(category)}
            >
              <h1 className='title'>{category}</h1>
              <div className='cat-para'>
                <p className='para'> Unlimited joke on {category}</p>
              </div>
            </div>

          ))}
        </div>
      </div>


      {showPopup && (
        <PopUp
          selectedCategory={selectedCategory}
          joke={joke}
          fetchNextJoke={fetchNextJoke}
          closePopup={closePopup} />
      )}
    </div>
  );
}



export default Categories;

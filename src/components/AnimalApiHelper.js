import React from 'react';
import PropTypes from 'prop-types';
// import { makeApiCall } from '../actions';
import dog from './../img/dog.jpg';
import cat from './../img/cat.jpg';
import {useState} from 'react';

function AnimalApiHelper(props) {
  //const { animalId, name, species, breed, age, gender } = props.animals;

  function checkAnimal(species) {
    if (species === "Dog") {
      return <img className="dogPic" src={dog} alt="dog" />
    } else {
      return <img className="dogPic" src={cat} alt="cat" />;
    }
  }

  const [filteredAnimals, setFilteredAnimals] = useState(props.animals.animals);

  // const [filteredGender, setFilteredGender] = useState(props.animals.animals);

  let cats = props.animals.animals.filter(animals => animals.species === "Cat");
  let dogs = props.animals.animals.filter(animals => animals.species === "Dog");
  let female = props.animals.animals.filter(animals => animals.gender === "Female");
  let male = props.animals.animals.filter(animals => animals.gender === "Male");
  function showCats() {
    setFilteredAnimals(cats);
  };

  function showDogs() {
    setFilteredAnimals(dogs);
  };
  function showMale() {
    setFilteredAnimals(male);
  }
  function showFemale() {
    setFilteredAnimals(female);
  }

  function showAll() {
    setFilteredAnimals(props.animals.animals);
  }

  return (

    <React.Fragment>
      <h1>Animals</h1>
      <div className="filterByAnimal">
        <h4>Filter</h4>
        <button className = "btn btn-info space" onClick={() => showCats()}>Cats</button>                     
        <button className = "btn btn-info space" onClick={() => showDogs()}>Dogs</button>
        <button className = "btn btn-info space" onClick={() => showFemale()}>Female</button>
        <button className = "btn btn-info space" onClick={() => showMale()}>Male</button>
        <button className = "btn btn-info space" onClick={() => showAll()}>Reset Filters</button>
      </div>

      <ul className="center-align">

        {filteredAnimals.map((animal, index) =>
        
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {checkAnimal(animal.species)}
              </div>
              <li>
                <div className="flip-card-back">
                  <h3>Name: {animal.name}</h3>
                  <p><strong>Species:</strong> {animal.species}</p>
                  <p><strong>Gender:</strong> {animal.gender}</p>
                  <p><strong>Breed:</strong> {animal.breed}</p>
                  <p><strong>Age:</strong> {animal.age}</p>
                  <button className = "btn btn-info btn-small" onClick={() => props.whenAdoptClicked(props.index)}>Adopt Me!</button>
                </div>
              </li>
            </div>
          </div>
        )}

      </ul>
    </React.Fragment>
  );
}

AnimalApiHelper.propTypes = {
  animals: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string
}


// const mapStateToProps = state => {
//   return {
//     animals: state.animals,
//     isLoading: state.isLoading,
//     error: state.error
//   }
// }

export default AnimalApiHelper;






// import React from 'react';
// import { connect } from 'react-redux';
// import { makeApiCall } from '../actions';

// class AnimalApiHelper extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   // componentDidMount() {
//   //   const { dispatch } = this.props;
//   //   dispatch(makeApiCall());
//   // }

//   render() {
//     const {error, isLoading, animals } = this.props;
//     if (error) {
//       return <React.Fragment>Error: {error.message}</React.Fragment>;
//     } else if (isLoading) {
//       return <React.Fragment>Loading...</React.Fragment>;
//     } else {
//       return (
//         <React.Fragment>
//           <h1>Animals</h1>
//           <ul>
//             {animals.map((animal, index) =>
//               <li key={index}>
//                 <h3>Name: {animal.name}</h3>
//                 <p><strong>Species:</strong> {animal.species}</p>
//                 <p><strong>Gender:</strong> {animal.gender}</p>
//                 <p><strong>Breed:</strong> {animal.breed}</p>
//                 <p><strong>Age:</strong> {animal.age}</p>
//               </li>
//             )}
//           </ul>
//         </React.Fragment>
//       );
//     }
//   }
// }


// const mapStateToProps = state => {
//   return {
//     animals: state.animals,
//     isLoading: state.isLoading,
//     error: state.error
//   }
// }

// export default connect(mapStateToProps)(AnimalApiHelper);
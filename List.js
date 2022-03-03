import React from "react";
import data from "../src/data";

const List = () => {
  const [person, setPerson] = React.useState(data);

  const length = person.length;

  return (
    <>
      <h3>{length} Birthdays Today</h3>
      {person.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="person">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPerson([])}>
        Clear All
      </button>
    </>
  );
};

export default List;

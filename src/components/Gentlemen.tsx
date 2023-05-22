import { gentlemen } from "../data/mock.gentlemen";
import { useState } from "react";

export function Gentlemen() {
  const [count, setCount] = useState(0);

  return (
    <>
      {gentlemen.map((item) => (
        <li key={item.id} className="gentleman">
          <div className="gentleman__avatar-container">
            <img
              className="gentleman__avatar"
              src={item.picture}
              alt={item.alternativeText}
            />
            <span className="gentleman__initial">
              {item.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="gentleman__data-container">
            <h2 className="gentleman__name">{item.name}</h2>
            <ul className="gentleman__data-list">
              <li className="gentleman__data">
                <span className="gentleman__data-label">Profession:</span>
                {item.profession}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Status:</span>
                {item.status}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Twitter:</span>
                {item.twitter}
              </li>
            </ul>
          </div>
          <i
            onClick={() => {
              setCount(count + 1);
              console.log(count);
            }}
            className="icon gentleman__icon fas fa-check"
          ></i>
          <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </li>
      ))}
    </>
  );
}

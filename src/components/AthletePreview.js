import React from 'react';
import { Link } from 'react-router-dom';

export const AthletePreview = props => (
  <Link to={`/athlete/${props.id}`}>
    <div className="athlete-preview">
      <img src={`img/${props.image}`} alt={`${props.name}'s profile`} />
      <h2 className="name">{props.name}</h2>
      <span className="medals-count">
        <img src="/img/offense-icon.png" alt="Offense icon" width="25px" height="18px" />
      </span>
    </div>
  </Link>
);

export default AthletePreview;

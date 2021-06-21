import React from "react";
import "./card.styles.css";
export const Card = props=>(
    <div className="card-container">
        <img alt="friend" src={`https://robohash.org/${props.friend.id}?set=set2&size=180x180`}/>
        <h2 >{props.friend.name}</h2>
        <p>{props.friend.email}</p>
    </div>
);
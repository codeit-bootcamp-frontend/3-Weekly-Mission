import React from "react";
import "../styles/CardList.css";
import { useFetchCardsData } from "./hooks/CardContainer";

function CardList() {
    const data = useFetchCardsData();

    return (
        <div className="cardlist">
            <div className="cards-container">
                {data.map((cardData) => (
                    <a
                        key={cardData.id}
                        href={cardData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                    >
                        <img
                            src={
                                cardData.imageSource ||
                                "/images/noimageicon.png"
                            }
                            alt={cardData.title}
                            className="cards-image"
                        />
                        <p className="text-container">
                            <span>{cardData.timePassed}</span>
                            <p>{cardData.description}</p>
                            <p className="date-number">
                                {cardData.formattedDate}
                            </p>
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default CardList;

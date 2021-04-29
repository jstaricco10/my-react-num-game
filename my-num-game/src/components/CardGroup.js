import React, { useMemo } from 'react';
import CardBtn from './CardBtn';


const CardGroup = React.memo((props) => {
    const {cards, deleteCard, applyCard} = props;

    return (
        <>
            {cards.map((card, index) => {
                console.log("render");
                    return (
                    <CardBtn
                        key={index}
                        op={card.op}
                        number={card.number}
                        handleDelete={() => deleteCard(card.id)}
                        handleApply={() => applyCard(card.number, card.op)}
                    />)
                }
            )}
        </>
    )
});

export default CardGroup;

import React from 'react';
import Card from './Card';
import './List.css';

List.defaultProps = {
  onAddCard: () => {},
}

export default function List(props) {

 console.log(props.cards);
  let cards = props.cards.map((card) =>
    < Card
      id={card.id}
      key={card.id}
      title={card.title}
      content={card.content}
      onDeleteCard={props.onDeleteCard}
    />
  );

  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {cards}
        <button
          onClick={() => props.onAddCard(props.id)}
          type='button'
          className="List-add-button"
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

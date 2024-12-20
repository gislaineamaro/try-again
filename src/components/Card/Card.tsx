import React from 'react';

interface ICardProps {
  title: string;
  description: string;
  authorName: string;
}

const Card = ({ title, description, authorName }: ICardProps) => (
  <div>
    <h1 data-testid="card-title">{title}</h1>
    <p data-testid="card-description">{description}</p>

    <span>{authorName}</span>
  </div>
);

export default Card;

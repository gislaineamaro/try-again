import React from 'react';
import Card from './Card';
import { render, RenderResult } from '@testing-library/react';

const cardContent = {
  title: 'This is a title',
  description: 'Lorem ipson dolor sit amet consectetur',
  authorName: 'John Doe',
};

describe('Card component', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <Card
        title={cardContent.title}
        description={cardContent.description}
        authorName={cardContent.authorName}
      />,
    );
  });

  it('should render title', () => {
    const title = wrapper.getByTestId('card-title');
    expect(title).toHaveTextContent(cardContent.title);
  });

  it('should render description', () => {
    const description = wrapper.getByTestId('card-description');
    expect(description).toHaveTextContent(cardContent.description);
  });
});

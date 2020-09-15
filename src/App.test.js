import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("This is the start of Number Guesser v2");
  expect(linkElement).toBeInTheDocument();
});

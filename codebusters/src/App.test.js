import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
/*ce test vérifie si le composant App rend correctement un élément contenant le texte "learn react".
 Si cet élément est trouvé dans le rendu, le test passe.*/
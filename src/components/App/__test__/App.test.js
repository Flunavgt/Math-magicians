import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CalcPage from '../../CalcPage/CalcPage';
import Calculator from '../../Calculator/Calculator';
import Home from '../../Home/Home';
import Quote from '../../Quote/Quote';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Welcome to our Page');
  expect(linkElement).toBeInTheDocument();
});

test('snapshot', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});

test('Quote', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});

test('Calc page', () => {
  const tree = render(<CalcPage />);
  expect(tree).toMatchSnapshot();
});

test('Calculator', () => {
  render(<Calculator />);
  const btn = screen.getByText('2');
  userEvent.click(btn);
  expect(screen.getByTestId('display')).toHaveTextContent('2');
});

import { render, screen, fireEvent } from '@testing-library/react';
import Create from './Create';
import { BrowserRouter as Router } from "react-router-dom";

describe('Create Component', () => {
  it('renders title input element', () => {
    render(<Router><Create /></Router>);
    const titleInput = screen.getByPlaceholderText(/Título.../i);
    expect(titleInput).toBeTruthy();
  });

  it('renders text input element', () => {
    render(<Router><Create /></Router>);
    const textInput = screen.getByPlaceholderText(/Texto.../i);
    expect(textInput).toBeTruthy();
  });

  it('renders tag input element', () => {
    render(<Router><Create /></Router>);
    const tagInput = screen.getByPlaceholderText(/Etiqueta.../i);
    expect(tagInput).toBeTruthy();
  });

  it('should be able to type into title input element', () => {
    render(<Router><Create /></Router>);
    const titleInput = screen.getByPlaceholderText(/Título.../i);
    fireEvent.change(titleInput, { target: { value: 'Mercado' } });
    expect(titleInput.value).toBe('Mercado');
  });

  it('should be able to type into text input element', () => {
    render(<Router><Create /></Router>);
    const textInput = screen.getByPlaceholderText(/Texto.../i);
    fireEvent.change(textInput, { target: { value: 'Comprar papas' } });
    expect(textInput.value).toBe('Comprar papas');
  });

  it('should be able to type into tag input element', () => {
    render(<Router><Create /></Router>);
    const tagInput = screen.getByPlaceholderText(/Etiqueta.../i);
    fireEvent.change(tagInput, { target: { value: '#super' } });
    expect(tagInput.value).toBe('#super');
  });

  it('should navigate to home when button is clicked', () => {
    render(<Router><Create /></Router>);
    const createButton = screen.getByRole('button');
    fireEvent.click(createButton);
    expect(window.location.pathname).toBe('/');
  });
  
})
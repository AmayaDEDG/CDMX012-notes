import { render, screen, fireEvent } from '@testing-library/react';
import Base from './Base';
import { BrowserRouter as Router } from "react-router-dom";

describe('Base Component', () => {
  it('renders logo image', () => {
    render(<Router><Base /></Router>);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(5);
  });
  it('should navigate to create view when add icon is clicked', () => {
    render(<Router><Base /></Router>);
    const addIcon = screen.getByAltText(/Add icon/i);
    fireEvent.click(addIcon)
    expect(window.location.pathname).toBe('/create');
  });
  it('should navigate to login view when logout icon is clicked', async () => {
    render(<Router><Base /></Router>);
    const logoutIcon = screen.getByAltText(/Logout icon/i);
    fireEvent.click(logoutIcon)
    await expect(window.location.pathname).toBe('/');
  });
  //mockear firestore
  //testear que cuanod clickees el de logout se active firestore 
  //cómo se mockean las rutas privadas
  //se testea que se cambie de pagina?
})

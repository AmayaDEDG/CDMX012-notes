import { render, screen, fireEvent } from '@testing-library/react'
import { Login } from './Login'
import { signInWithPopup } from '../lib/firebaseAuth.js'

// jest.mock('signInWithGoogle')

describe('Login Component', () => {

    it('renders logo image', () => {
        render(<Login />)
        const loginImgLogo = screen.getByAltText(/Kimind logo light mode/i)
        expect(loginImgLogo).toBeTruthy()
    })

    it('renders login message', () => {
        render(<Login />)
        const loginMessage = screen.getByText(/Inicia sesión con/i)
        expect(loginMessage).toBeTruthy()
    })

    it('renders google image', () => {
        render(<Login />)
        const loginImgGoogle = screen.getByAltText(/Google logo/i)
        expect(loginImgGoogle).toBeTruthy()
    })

    it('google img click activates auth', () => {
        render(<Login />)
        const loginImgGoogle = screen.getByAltText(/Google logo/i)
        fireEvent.click(loginImgGoogle);
        expect(signInWithPopup).toHaveBeenCalled()
    })
    //mockear el auth
})
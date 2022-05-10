const mockFirebase = {
    getAuth: jest.fn(() => mockFirebase ),
    signInWithGoogle: jest.fn(() => mockFirebase ),
    signInWithPopup: jest.fn(() => Promise.resolve('oli')),
    signOut: jest.fn(() => Promise.resolve('oli'))
  };
  
  export { mockFirebase as default };
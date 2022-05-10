const mockFirebase = {
    getFirestore: jest.fn(() => mockFirebase ),
    // sendPasswordResetEmail: jest.fn(() => Promise.resolve(fakeResponse))
  };
  
  export { mockFirebase as default };
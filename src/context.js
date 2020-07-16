import { createContext } from 'react';

const AppContext = createContext({
    characterList: null,
    updateCharacterList: () => {}
});

export default AppContext;
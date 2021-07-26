import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContexts from '../contexts/ColorContexts';
import LanguageSelector from './LanguageSelector';

class App extends React.Component { 

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />

                    <br />
                    <ColorContexts.Provider value="red">
                        <UserCreate />
                    </ColorContexts.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;
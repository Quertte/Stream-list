import PeopleList from './components/PeopleList/PeopleList';
import Navigation from './components/Naviration/Navigation';
import { useState } from 'react';


function App() {
    const [viewMode, setViewMode] = useState('List');

    return (
        <>
            <Navigation viewMode={viewMode} setViewMode={setViewMode} />
            <PeopleList viewMode={viewMode} />
        </>
    );
}

export default App;

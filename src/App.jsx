import { useState } from 'react'
import Login from './login';
import TaskApp from './tasks';


const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true)
    };

    

    return (
        <>

            {isLoggedIn ? (
                <TaskApp />
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
            )}
            
        </>

    )

    
};


export default App;

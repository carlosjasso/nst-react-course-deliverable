import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Finish from './components/Finish';
import Question from './components/Question';
import Start from "./components/Start";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/:questionID' element={<Question />} />
                <Route path='/finish' element={<Finish />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
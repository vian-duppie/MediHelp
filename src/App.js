import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import SearchInput from "./Components/Input/SearchInput";
import Input from "./Components/Input/Input";

function App() {
    return (
        <div className="App">
            <SearchInput
                icon='search'
            />
            <Input/>
{/*             <Nav/>

            <Routes>
                <Route path='/' element={ '' }/>                            
                <Route path='/Login' element={ '' }/>                
                <Route path='/New' element={ '' }/>                
            </Routes> */}
        </div>
    );
}

export default App;
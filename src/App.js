import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {  Route ,Routes} from 'react-router-dom'


function App() {
  const apiKey=process.env.REACT_APP_NEWS_API_KEY;
      console.log("API Key:", process.env.REACT_APP_NEWS_API_KEY);
  let country="us";
  return (
    <>


   <NavBar></NavBar>
   <Routes>
     <Route exact path="/" element={<News pageSize={5}  apiKey={apiKey} category={"general"} country={country}></News>}></Route>
    <Route exact path="/home" element={ <News pageSize={5}  apiKey={apiKey} category={"general"} country={country}></News>}></Route>
    <Route exact path="/business" element={ <News pageSize={5}  apiKey={apiKey} category={"business"} country={country}></News>}></Route>
    <Route exact path="/entertainment" element={ <News pageSize={5}  apiKey={apiKey} category={"entertainment"} country={country}></News>}></Route>
    <Route exact path="/health" element={ <News pageSize={5}  apiKey={apiKey} category={"health"} country={country}></News>}></Route>
    <Route exact path="/science" element={ <News pageSize={5}  apiKey={apiKey} category={"science"} country={country}></News>}></Route>
    <Route exact path="/sports" element={ <News pageSize={5}  apiKey={apiKey} category={"sports"} country={country}></News>}></Route>
    <Route exact path="/technology" element={ <News pageSize={5}  apiKey={apiKey} category={"technology"} country={country}></News>}></Route>
   </Routes>

   </>
  );
}

export default App;

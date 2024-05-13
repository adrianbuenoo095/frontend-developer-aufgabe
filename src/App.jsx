import {Route, Routes} from "react-router-dom";
import './App.css'
import CountryDetailsPage from "./pages/CountryDetailsPage.jsx";
import NewCountryPage from "./pages/NewCountryPage.jsx";
import HomePage from "./pages/HomePage.jsx";
function App() {

  return (
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/newcountry" element={<NewCountryPage/>}/>
          <Route path="/countries/:countryId" element={
                  <CountryDetailsPage/>
          }/>
      </Routes>
  )
}

export default App

import Index from "./pages/Index";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import Sub03 from "./pages/Sub03";
import Sub04 from "./pages/Sub04";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./styles/common.scss";
import Sub5jQuery from "./pages/Sub5jQuery";


// reset, common 등 공통적용되는 파일들 임포트 하는 곳
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <SiteHeader/>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/Sub1" element={<Sub01/>}/>
      <Route path="/Sub2" element={<Sub02/>}/>
      <Route path="/Sub3" element={<Sub03/>}/>
      <Route path="/Sub4" element={<Sub04/>}/>
      <Route path="/Sub5" element={<Sub5jQuery/>}/>
    </Routes>
    <SiteFooter/>
    </>  
  );
}

export default App;


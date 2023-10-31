import {Routes,Route } from "react-router-dom";
import Main from "./src/mainlayout/Main";
import Banner from "./src/pages/Banner"
import Skills from "./src/pages/Skills"
import  Projects from "./src/pages/Projects"
import Contact from "./src/pages/Contact"

const Router = () => {
  return (
<Routes>
    <Route path="" element={<Main/>}>
     <Route index element={<Banner/>}/>
     <Route path="/skills" element={<Skills/>}/>
     <Route path="/projects" element={<Projects/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route/>

    </Route>
</Routes>
  )
}

export default Router

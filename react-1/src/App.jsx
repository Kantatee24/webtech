import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/style1.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Student from "./components/student";
import Education from "./components/Education";
import Activity from "./components/Activity";
import PageNotFound from "./components/PageNotFound";
import CEDEvent from "./components/CEDEvent";
import CEDForm from "./components/CEDForm";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Student name="Kantatee Pollasen" sec="CED#13" age="21" />} />
            <Route path="/education" element={<Education />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/event" element={<CEDEvent/>}/>
            <Route path="/form" element={<CEDForm/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
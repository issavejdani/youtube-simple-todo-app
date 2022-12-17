import { useState } from "react";
import Header from "./components/ui/Header.component";
import Footer from "./components/ui/Footer.component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import TodosPage from "./pages/Todos.page";
import FAQPage from "./pages/FAQ.page";
import AboutUsPage from "./pages/AboutUs.page";
import ContactUsPage from "./pages/ContactUs.page";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
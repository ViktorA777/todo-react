import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import TodoList from "../todoList/TodoList";
import Footer from "../footer/Footer";

import styles from "../../assets/styles/style.module.scss";
import Friends from "../friends/Friends";
import Contacts from "../contacts/Contacts";

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route exact path="/list" element={<TodoList />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";
import TodoList from "./components/todoList/TodoList";
import Footer from "./components/footer/Footer";


import styles from "./assets/styles/style.module.scss";
import Friends from "./components/friends/Friends";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.flex}>
          <Routes>
            <Route exact path="/list" element={<TodoList />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

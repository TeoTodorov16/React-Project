import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LogIn from './components/LoginForm/LogIn.jsx'; 
import Profile from './components/ProfileForm/Profile';
import SignUp from './components/SignUpForm/SignUp';
import RecoverPassword from './components/ForgotPassword/RecoverPassword';
import Settings from './components/SettingsForm/Settings';
import Home from './components/HomePage/Home';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/RecoverPassword" element={<RecoverPassword />} />
        <Route exact path="/Settings" element={<Settings />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="book" element={<BookList />} />
        <Route exact path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
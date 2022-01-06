import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './Components/Home/Home';
import FeedbackForm from './Components/FeedbackForm/FeedbackForm';
import AllNews from './Components/AllNews/AllNews';
import NewsList from './Components/NewsList/NewsList';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/newsList" element={<NewsList />} />
    </Routes>
  );
}

export default App;

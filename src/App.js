import './App.css';
import Header from './components/header'
import MainSection from './components/main-section';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact'

const App = props => {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App
// import logo from './logo.svg';
// import './App.css';
// import Header from './commonComponents/Header/Header';
import Navigation from './navigation/navigation';
import ErrorBoundary from './commonComponents/errorBoundary/ErrorBoundaries';
// import "assets/vendor/nucleo/css/nucleo.css";
// import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/css/argon-dashboard-react.css";
// import "assets/css/argon-dashboard-react.min.css";
// import "assets/css/argon-dashboard-react.css.map";

function App() {
  return (
    <ErrorBoundary>
      <Navigation />
    </ErrorBoundary>
  );
}

export default App;

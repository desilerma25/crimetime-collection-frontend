import './App.css';
import CaseSubmissionContainer from './containers/CaseSubmissionContainer';
import CategoriesContainer from './containers/CategoriesContainer';

function App() {
  return (
    <div className="App">
      Hello, I am in the body
      < CategoriesContainer />
      < CaseSubmissionContainer />
    </div>
  );
}

export default App;

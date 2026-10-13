import StudentList from "./components/StudentList";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Student List Application</h1>
        <p>Read Student Data Using Fetch API</p>
      </header>

      <main className="container">
        <StudentList />
      </main>

      <footer>
        <p>React Practical - Read Operation with API</p>
      </footer>
    </div>
  );
}

export default App;
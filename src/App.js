import './App.css';
import TaskGrid from './TaskGrid/TaskGrid';

// some test data
const tasks = [
  {title:"Task Title 1", assigner:"Alice",
  detail:"Task Detail 1, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog ...",
  ddl:"2022-03-28", expectedTime:"6 hrs"},
  {title:"Task Title 2", assigner:"Bob",
  detail:"Task Detail 2, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog ...",
  ddl:"2022-03-31", expectedTime:"45 mins"},
  {title:"Task Title 3", assigner:"Charlie",
  detail:"Task Detail 3, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog ...",
  ddl:"2022-04-02", expectedTime:"12 hrs"}
]

function App() {
  return (
    <div className="App">
      <TaskGrid tasks={tasks}/>
    </div>
  );
}

export default App;

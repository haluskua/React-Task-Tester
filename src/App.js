
import Header from './components/Header'

function App() {
  const name = 'Brad'
  const x = false
  return (
    <div className="container">
      <h1>Hello from {name}</h1>
      <h1>Hello from {x ? 'yes' : 'No'}</h1>
      <Header />
    </div>
  );
}

export default App;

import './App.css';
import Demo from './demo'

function App() {
  document.write(new Date().toLocaleTimeString())
  let users = [
    {name:'praveen',age:30,place:'Andhra'},
    {name:'kumar',age:27,place:'Telangana'},
    {name:'reddy',age:25,place:'Karnataka'}
  ]
  return (
    <div>
        
        {
          users.map((u)=>{
            return <h1> <Demo name ={u.name} age = {u.age} place = {u.place} /></h1>
          })
        }
    </div>
  );
}

export default App;

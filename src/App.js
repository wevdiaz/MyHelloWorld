import './App.css';
import Pessoa from './components/Pessoa';
import HelloWorld from './components/HelloWorld';

function App() {
  const words = "Fazendo meu primeiro teste com React";

  return (
   <div>

     <Pessoa name="Diazz" photo="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yf2h-e858f532-4b44-4584-a255-fdedf789cb0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWYyaC1lODU4ZjUzMi00YjQ0LTQ1ODQtYTI1NS1mZGVkZjc4OWNiMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZzXpoMDLZrRAgEjqk0TVOV8RMiA_MBx5xhq99fdUZUg" age="34 anos" city="São Paulo" occupation="Desenvolvedor FrontEnd" />

     <HelloWorld message={words} />

   </div>
  );
}

export default App;

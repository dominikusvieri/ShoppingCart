import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';
import Info from './components/Info';
import {useState} from 'react';
import plusIcon from '../src/assets/plus-icon.svg';
import minusIcon from '../src/assets/minus-icon.svg';
import Todos from './components/Todos';
import Empty from './components/Empty';



function App() {
  const[value, setValue] = useState('');
  const[todos, setTodos] = useState([
    {title:'Susu Ultra', count: 1},
    {title:'Biskuit', count: 1},
    {title:'Coklat', count: 1}
  ]);

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  }

  const handleSubtractionCount = (index) => {
    const newTodos = [...todos];
    if(newTodos[index].count > 0){
      //selama jumlah count masih diatas 0
      //bisa lakuin pengurangan
      newTodos[index].count = newTodos[index].count - 1;
    }else{
      //kalo dah 0 lgsg diapus dari array
      newTodos.splice(index, 1);
    }
    setTodos(newTodos);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value){
      alert('Tidak boleh kosong');
      return;
    } 
    const addedTodos = [...todos, {title: value, count: 1}];
    setTodos(addedTodos);
    setValue('');
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0)
    return totalCounts;
  }

  console.log(todos);
  console.log(value);

  
  return (
    <>
      <Navbar/>

      <Container>
        < SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
        />

        

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubtractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ): (
          <Empty/>
        )}
      </Container>
    </>
  );
}

export default App;

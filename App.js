import { useState } from 'react';
import classnames from 'classnames'
import './App.css';

import plusIcon from './assets/plus-icon.svg';
import minusIcon from './assets/minus-icon.svg';


function App() {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title : 'Susu Kambing Ketawa', count : 1},
    {title : 'Ayam Injek', count : 1},
    {title : 'Daging Semut Asap', count : 1}
  ])

  const handleSubmit = (e) => {
    e.preventDefault() // method ini digunakan untuk mencegah default behavior dari submit berupa browser refresh

    if (!value) {
      // Jika bukan value yang berarti false atau valuenya kosong
      // maka tampilkan alert

      // penulisan 1
      // return alert('Harap Mengisi Nama List!')

      // penulisan 2
      alert('Harap Mengisi Nama List!')
      return
    }

    const addedTodos = [...todos, {
      title : value,
      count : 1
    }]

    setTodos(addedTodos)
    setValue('')
  }


  const handleAdditionalCount = (index) => {
    // ambil semua array yang ada di state todos
    const newTodos = [...todos]

    // ambil property count yang ada didalam todos sesuai dengan indexnya
    // lalu nantinya akan ditambahkan 1 , jadi prosesnya seperti ini
    // count = 1 + 1
    newTodos[index].count = newTodos[index].count + 1

    // masukan hasil dari penambahan kedalam state todos
    // menggunakan setTodos
    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos]

    if (newTodos[index].count > 0) {
      // Selama jumlah count masih diatas 0
      // maka bisa dilakukan pengurangan
      newTodos[index].count = newTodos[index].count - 1
    } else {
      // kalo udah 0 dan masih dikurangin juga
      // hapus array value dengan index yang sesuai
      newTodos.splice(index, 1)
    }

    setTodos(newTodos)
  }

  const getTotalCounts = () => {

    // Disini kita memberika 2 parameter pada method reduce
    // parameter yang pertama berupa anonymous function atau bisa disebut callback
    // paramater kedua kita berikan nilai default pada reduce yaitu 0
    // jika bila nanti method reduce jalan , akan jalan seperti contoh berikut 0 + 1 + 1 + 1
    // dan didalam paramter pertama ada 2 parameter juga yaitu total dan num

    const totalCounts = todos.reduce((total, num) => { // Parameter Ke 1
      return total + num.count
    }, 0) // Parameter Ke 2

    return totalCounts

  }

  return (
    <>

      <section className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={(e) => {setValue(e.target.value)}}
            value={value}
            className="input"
            type="text"
            placeholder="List"
          />
          <button className="add-button" type="submit">Add</button>
        </form>

        <div className="info">
          <div className="info-total">
            <p>{`Total List: ${todos.length}`}</p>
          </div>

          <div className="info-total">
            <p>{`Total Counts: ${getTotalCounts()}`}</p>
          </div>

          <button onClick={() => setTodos([])}  className="delete-all-button"> 
            Delete All List
          </button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo,index,arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length == index + 1) && 
                'todo-divider'}`}>
                  
                  {todo.title}

                  <div className="todo-icon-wrapper">
                    
                    <div className="todo-count">{todo.count}</div>

                    <button onClick={() => handleSubstractionCount(index)} className="todo-action-button">
                      <img src={minusIcon} alt="minus icon" />
                    </button>

                    <button onClick={() => handleAdditionalCount(index)} className="todo-action-button">
                      <img src={plusIcon} alt="plus icon" />
                    </button>

                  </div>

                </div>
              )
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}

      </section>
    </>
  );
}

export default App;

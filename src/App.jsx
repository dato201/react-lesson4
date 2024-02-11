import { useState } from 'react'
import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.generateUsers = [
      { name: 'lasha', lastName: 'vaxtangidze', age: 15, id: 3610, id2: 3681, show: true },
      { name: 'dato', lastName: 'guramishvili', age: 12, id: 4238, id2: 7405, show: true },
      { name: 'gurami', lastName: 'guramishvili', age: 27, id: 7112, id2: 2345, show: true },
      { name: 'lasha', lastName: 'guramishvili', age: 52, id: 1948, id2: 9623, show: true },
      { name: 'lasha', lastName: 'ipsumishvili', age: 18, id: 8366, id2: 3060, show: true },
      { name: 'gurami', lastName: 'ipsumishvili', age: 44, id: 801, id2: 4614, show: true },
      { name: 'dato', lastName: 'balxamishvili', age: 58, id: 438, id2: 2683, show: true },
      { name: 'soso', lastName: 'ipsumishvili', age: 44, id: 2139, id2: 7966, show: true },
      { name: 'dato', lastName: 'vaxtangidze', age: 8, id: 6947, id2: 261, show: true },
      { name: 'gela', lastName: 'ivanishvili', age: 80, id: 434553, id2: 3444, show: true },
    ]
  }
  render() {
    let users = this.generateUsers

    let usersCount = users.length
    document.title = `${usersCount} users left`

    console.log(users);

    return (
      <div>
        <button onClick={() => this.setState({ show: this.generateUsers[Math.floor(Math.random() * usersCount)].show = false })}>
          Delete Random
        </button>

        <div className='user_div'>
          {users.map(users => {
            return (
              <button key={users.id2}>
                <p key={users.name}><span className='span_user'>name: </span>  {users.name}</p>
                <p key={users.lastName}><span className='span_user'>last name: </span>  {users.lastName}</p>
                <p key={users.age}><span className='span_user'>age: </span> {users.age}</p>
                <p key={users.id}><span className='span_user'>id: </span>  {users.id}</p>
              </button>
            )
          })}
        </div>

      </div>
    )
  }
}


// const App = () => {
//   console.log(Car);
//   const [users, generateUsers] = useState(Car.generateUsers0)

//   let usersCount = users.length;
//   document.title = `${usersCount} users left`;

//   function DeleteUsers() {
//     let min = 0;
//     let max = users.length;

//     let random = Math.floor(Math.random() * (max - min) + min);

//     generateUsers(users.filter((_, index) => index !== random))
//   }

//   return (
//     <>
//       <button onClick={DeleteUsers}>
//         Delete Random
//       </button>

//       <div className='user_div'>
//         {users.map(users => {
//           return (
//             <button key={users.id2}>
//               <p key={users.name}><span className='span_user'>name: </span>  {users.name}</p>
//               <p key={users.lastName}><span className='span_user'>last name: </span>  {users.lastName}</p>
//               <p key={users.age}><span className='span_user'>age: </span> {users.age}</p>
//               <p key={users.id}><span className='span_user'>id: </span>  {users.id}</p>
//             </button>
//           )
//         })}
//       </div>

//     </>
//   )
// }

export default App

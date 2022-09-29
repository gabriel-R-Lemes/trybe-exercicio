// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    console.log('Oie');
    this.state = {
      randomUser: {},
      loading: false,

    };
    this.fetchUser = this.fetchUser.bind(this);
  }

  async fetchUser () {
    this.setState(
      { loading: true },
      async () => {
        const firstFetch = await fetch("https://api.randomuser.me/")
        const json = await firstFetch.json();
        this.setState({
          loading: false,
          randomUser: json.results[0],
        });
      });
  }

  componentDidMount() {
    this.fetchUser();
  }

  // shouldComponentUpdate() {
  //   const { randomUser } = this.state;
  //   const result = randomUser.dob.age > 50 ? false : true;
  //   return result;
  // }
  render() {
    const {randomUser, loading} = this.state;
    console.log(randomUser);
    const carregando = <div>Carregando...</div>
    // const usuario =
    //   <div>
    //     {`${randomUser.picture.thumbnail}`}
    //     {`${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}`}
    //     {`${randomUser.email}`}
    //     {`${randomUser.dob.age}`}
    //   </div>
    return (
      <>
        { loading ? carregando :
          <div>
            <p>{randomUser.email}</p>
            <p></p>
            {/* { randomUser.map((user) => {
              return(
                `${user.picture.medium}`
                `${user.name.title} ${user.name.first} ${user.name.last}`
                `${user.email}`
                `${user.dob.age}`
              )
            })} */}
          </div>
        }
      </>
      
    );
  }
}

export default App;
import './App.css';
import * as React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

const fetchRandomData = (pageNumber) => {
  return axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({ data }) => data )
    .catch(err => {console.log(err)})
}

function App() {

  const [counter, setCounter] = useState(0);
  const [nextPageNumber, setNextPageNumber] = useState(1);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

  const fetchNextUser = () => {
    fetchRandomData(nextPageNumber).then(randomData => {
      if (randomData === undefined) return ;

      const newUserInfos = [
        ...userInfos,
        ...randomData.results,
      ]
      setUserInfos(newUserInfos);
      setNextPageNumber(randomData.info.page + 1);
      });
  }

  useEffect(() => {
    fetchNextUser(1)
    // fetchRandomData(nextPageNumber).then(randomData => {
    //   setRandomUserDataJSON(JSON.stringify(randomData, null, 2));
    //   setUserInfos(randomData.results);
    //   setNextPageNumber(randomData.info.page + 1)
    // })
  }, []);

  const getFullUserName = (userInfo) => {
    const {name: {first, last}} = userInfo;
    return `${first} ${last}`;
  }
  return (
    <div className="App">
      <h1>Hello there!</h1>
      {counter}
      <div>
        <button onClick={() => {
          setCounter(counter + 1);
        }}>
          Increase Counter</button>
      </div>
      <div>
        <button onClick={() => {fetchNextUser();}}>
          Fetch Next User</button>
      </div>

      <div>
        {userInfos.map((userInfo, idx) => (
          <div>
            <p>{getFullUserName(userInfo)}</p>
            <img src={userInfo.picture.thumbnail}/>
          </div>
        ))}
      </div>

      <div>
        <pre>
          {randomUserDataJSON}
        </pre>
      </div>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const { getApiHash } = require('marvel-api-hash-generator');

const App = () => {
  const timeStamp = 1;
  const privateKey = 'c9384891527cc3bd72cab81dce560d18174a46bb';
  const publicKey = '14946262ad54655fac24826eeceeb49b';
  const hashValue = getApiHash(timeStamp, privateKey, publicKey);

  const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/series/9085/characters?';

  const exampleUrl = `${requestConstantCharacters}ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(exampleUrl);
      console.log(result.data.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;

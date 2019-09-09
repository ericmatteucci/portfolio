import React, { useEffect, useState } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../src/reducers';
import Header from '../src/components/Header/header';

const store = createStore(rootReducer);

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <Provider store={store}>
        <Header />
    </Provider>
  )
};

export default Home


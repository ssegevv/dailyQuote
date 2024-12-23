import './App.css';
import { useEffect, useState } from 'react';
import QuoteComponent from '../components/quoteComponent';
import Button from '../components/buttonComponent';



function App () {
  const [todayQuote, setTodayQuote] = useState({});

  useEffect(() => {
    getQuoteData()
  },[])

   async function getQuoteData() {
      const response = await fetch('https://dummyjson.com/quotes/random')
      const json = await response.json()
      setTodayQuote(json)
    
    }



  return (
    <div className="App">
      <div>
        <QuoteComponent dailyQuote={todayQuote} />
      </div>
        <Button Do={getQuoteData}/>
    </div>
  );
}

export default App;





 
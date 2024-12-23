import React from 'react'; 
import Quote from './quote';

const QuoteComponent = ({dailyQuote}) => {


  const {author, quote, id} = dailyQuote;
  return(
    <div>
      <Quote Quote={quote} Author={author} Id={id}/>
    </div>
    
  )
}

export default QuoteComponent;
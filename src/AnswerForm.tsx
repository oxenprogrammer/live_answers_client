import React, { ChangeEvent, useState } from 'react';

import axios from 'axios';

const AnswerForm = () => {

  const [answer, setAnswer] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [serverResponse, setServerResponse] = useState<string>('');

  const notAllowed = [
    'yes',
    'idontknow',
    'idonotknow',
    'thatsfine',
    'thatisfine',
    'no',
  ];

  const sterilizedAnswer = answer.replace(/[^a-zA-Z]/g, "").toLowerCase();


  const handleChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
    setAnswer(value);
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (sterilizedAnswer === '' || notAllowed.includes(sterilizedAnswer) || sterilizedAnswer.length < 10) {
      setServerResponse('Your answer contains unallowed response');
      return;
    }
    
    setIsLoading(true);
    const data = { content: answer };
    const response = await axios.post('http://127.0.0.1:4001/answers', data);
    console.log(response.status);
    if (response.status !== 200) {
      setServerResponse('An error occurred submitting to the server');
    } else {
      setServerResponse('Successfully addded answer.');
    }
    
    setIsLoading(false);
  };
  
  return (
  <React.Fragment>
    <h2>Is a hot dog a sandwich? Why?</h2>
    {serverResponse ? <div>{ serverResponse }</div> : ''}
    <form onSubmit={handleSubmit}
      >
        <input
          type="text"
          onChange={handleChange}
          value={answer}
        />
        <input type="submit" disabled={isLoading} value="Add Answer" />
      </form>
  </React.Fragment>
  )
}

export default AnswerForm;
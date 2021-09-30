import React, { useEffect, useState } from 'react';

export const AnswerList = () => {
  interface IAnswer {
    id: number,
    content: string,
    createdAt: string,
    updatedAt: string,
  }
  
  const [ answers, setAnswers ] = useState<IAnswer[]>([]);
  const [ listening, setListening ] = useState<boolean>(false);

  useEffect( () => {
    if (!listening) {
      const events = new EventSource('http://localhost:4001/api/v1/answers');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setAnswers((answers) => answers.concat(parsedData));
      };

      setListening(true);
    }
  }, [listening, answers]);

  return (
     <div>
       {
         answers.map((answer, index) => (
          <div key={index}>{ answer.content }</div>
         )
         )
       }
     </div>
  );
}
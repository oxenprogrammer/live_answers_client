import { Button, TextareaAutosize, Typography } from "@material-ui/core";
import { ChangeEvent, useState } from 'react';

import axios from 'axios';
import { useStyles } from './Styles.material';

export const AnswerForm = () => {

  const [answer, setAnswer] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [serverResponse, setServerResponse] = useState<string>('');
  const [error, setError] = useState<string>('');

  const notAllowed = [
    'yes',
    'idontknow',
    'idonotknow',
    'thatsfine',
    'thatisfine',
    'no',
  ];

  const sterilizedAnswer = answer.replace(/[^a-zA-Z]/g, "").toLowerCase();


  const handleChange = ({ target: { value }}: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(value);
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (sterilizedAnswer === '' || notAllowed.includes(sterilizedAnswer) || sterilizedAnswer.length < 10) {
      setError('Your answer contains unallowed response');
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:4001/api/v1/answers', { content: answer });
      console.log(response.status);
      if (response.status === 200) {
        setServerResponse('Successfully addded answer.');
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        setError(`${err.response.data.message}`);
      }
    }
    
    setIsLoading(false);
  };
  
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <Typography className={classes.question}>Is a hot dog a sandwich? Why?</Typography>
    {serverResponse ? 
                    <div className={classes.response}>{ serverResponse }</div>
                    : error ?
                            <div className={classes.error}>{ error }</div>
                            : ''
    }
    <form onSubmit={handleSubmit}
      >
        <div>
          <TextareaAutosize
            data-testid="answer-input"
            placeholder="Type your response ..."
            onChange={handleChange}
            value={answer}
            minRows={5}
          ></TextareaAutosize>
        </div>
        <div>
          <Button className={classes.button} variant="contained" type="submit" disabled={isLoading}>Add Answer</Button>
        </div>
      </form>
  </div>
  )
}
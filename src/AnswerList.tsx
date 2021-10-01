import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import React, { useEffect, useState } from 'react';

import { useStyles } from "./List.material";

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
      const events = new EventSource('https://murmuring-coast-31015.herokuapp.com/api/v1/answers');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setAnswers((answers) => answers.concat(parsedData));
      };

      setListening(true);
    }
  }, [listening, answers]);

 const classes = useStyles();
  
  return (
    <List className={classes.root}>
      {
        answers.map((answer, index) => (
          <React.Fragment key={index}>
            <ListItem  alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText 
                primary="Anonymous"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Says —
                    </Typography>
                     — { answer.content }
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))
      }
    </List>
  );
}
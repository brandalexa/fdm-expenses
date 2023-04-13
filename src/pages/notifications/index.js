import React from 'react';
import { redirect } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Notifications = (props) => {
  const items = [
    { id: 1, title: ' "Expensive Meal" Claim Denied', description: 'Your reimbursement claim "Expensive Meal" has been denied.' },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/view-claims');
  };

  return (
    <div style={{ maxWidth: 500 }}>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        Notifications
      </Typography>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            button
            onClick={() => handleClick}
            style={{ marginBottom: 10 }}
          >
            <ListItemText primary={item.title} secondary={item.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Notifications;
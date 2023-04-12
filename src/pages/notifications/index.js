import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Notifications = (props) => {
  const items = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3' },
  ];

  const handleClick = (id) => {
    console.log(`Item ${id} clicked`);
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
            onClick={() => handleClick(item.id)}
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
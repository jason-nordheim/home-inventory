import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";

export const ItemListItem = ({
         id,
         item, 
         setItemChecked,
       }) => {
         return (
           <ListItem>
             <ListItemText
               primary={item.name}
               secondary={
                 <Typography
                   component="span"
                   variant="body2"
                   color="textSecondary"
                 >
                 {`${item.make === null ? '': 'Make ' + item.make} | ${item.model === null ? '' : 'Model ' + item.model}` }
                 </Typography>
               }
             />
             <ListItemSecondaryAction>
               <Checkbox
                 edge="end"
                 color="primary"
                 checked={item.checked}
                 onChange={() => setItemChecked(item.id)}
               />
             </ListItemSecondaryAction>
           </ListItem>
         );
       };

export default ItemListItem;

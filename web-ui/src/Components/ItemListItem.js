import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";

/**
 * List Item Component with Checkboxes 
 * @param {id} item object to be displayed in the list 
 * @param {function} setItemChecked handles the "onCheck" event of the list item 
 */
export const ItemListItem = ({
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

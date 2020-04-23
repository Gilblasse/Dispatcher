import React from 'react'
import { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function NavigationMenuDrawer() {

    const [left,setLeft] = useState(false)
    
    const list = () => {
       return ( 
           <>
                <div role="presentation" onClick={() => setLeft(false)} >
                </div>

                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{<MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
           </>
       )
    }


    return (
        <div>
            <Button onClick={() => setLeft(true)}>Menu</Button>
            <SwipeableDrawer
                open={left}
                onClose={() => setLeft(false)}
                onOpen={() => setLeft(true)}
            >
                {list()}
            </SwipeableDrawer>

        </div>
    )
}

export default NavigationMenuDrawer

import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Avatar,
} from '@mui/material';
import { Dashboard as DashboardIcon, Person as PersonIcon } from '@mui/icons-material';
import likeImage from '../assest/likedposts.jpg'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  profile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));

function ResponsiveDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const dashboardClickHandler = () => {
    // Handle click on dashboard item
  };

  const profileClickHandler = () => {
    // Handle click on profile item
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <Avatar alt="Profile" src="" />
      </IconButton>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.profile}>
          <Avatar alt="Profile" src="/path/to/profile/image.jpg" />
        </div>
        <div className={classes.toolbar} />
        <List>
          <ListItem button onClick={dashboardClickHandler}>
            <ListItemIcon>
              <DashboardIcon color='orange' style={{ color: 'orange' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={profileClickHandler}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          {/* Add more list items here */}
        </List>
      </Drawer>
    </>
  );
}

export default ResponsiveDrawer;
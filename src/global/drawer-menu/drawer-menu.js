import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import PieChartIcon from '@material-ui/icons/PieChart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const items = ['chart1', 'chart2', 'chart3'];

const whichIcon = (val) => {
  if (val === 'chart1') {
      return <BarChartIcon />
  }
  if(val === 'chart2') {
      return <BubbleChartIcon/>
  }
  if(val === 'chart3') {
      return <PieChartIcon />
  }
}

export default function DrawerMenu(props) {

  const classes = useStyles();

  const [state, setState] = React.useState({
    open: props.open
  });

  const handleDrawerToggle = (val) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    props.isDrawOpen(props.open ? false: true)
    setState({ ...state, open: val });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={handleDrawerToggle(false)}
      onKeyDown={handleDrawerToggle(false)}
    >
      <List>
        {items.map((text, index) => (
          <Link to={`/${text}`} key={index}>
            <ListItem button>
              <ListItemIcon>{whichIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={handleDrawerToggle(true)}>Open</Button>
      <Drawer open={state.open} onClose={handleDrawerToggle(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}

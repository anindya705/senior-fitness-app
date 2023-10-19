import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: 20,
    justifyContent: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  card: {
    width: 400,
    height: 320,
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    color: '#000',
    '&:hover': {
      boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.2)',
    },
  },
  cardContent: {
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
  },
}));

const colors = ['#B7CAF1', '#C5D4AB', '#FCE8B8', ' #F4BF90']; // Humana Green and other high contrast colors

const WorkoutCard = ({ title, description, time, intensity, link, color }) => {
  const classes = useStyles();

  return (
    <Link to={link} className={classes.link}>
      <Card className={classes.card} style={{backgroundColor: color}}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h2" className={classes.cardTitle}>
            {title}
          </Typography>
          <Typography color="inherit" className={classes.cardDescription}>
            Time: {time}
          </Typography>
          <Typography color="inherit" className={classes.cardDescription}>
            Intensity: {intensity}
          </Typography>
          <Typography color="inherit" className={classes.cardDescription}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

const WorkoutCards = () => {
  const classes = useStyles();

  const workouts = [
    {
      title: "Stretching",
      time: "20 minutes",
      intensity: "Low",
      description: "Ideal for gentle body flexibility and muscle relaxation!",
      link: "/stretching",
    },
    {
      title: "Moderate",
      time: "30 minutes",
      intensity: "Medium",
      description: "A balance of cardio and strength exercises to keep you fit and active.",
      link: "/medium",
    },
    {
      title: "Intense",
      time: "45 minutes",
      intensity: "High",
      description: "High intensity workouts for those who need a challenge.",
      link: "/intense",
    },
  ];

  return (
    <div className={classes.cardContainer}>
      {workouts.map((workout, index) => (
        <WorkoutCard key={index} {...workout} color={colors[index % colors.length]} />
      ))}
    </div>
  );
};

export default WorkoutCards;

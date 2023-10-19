import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const ExerciseCard = ({ title, description, duration, type, handleCompleteExercise, isExerciseCompleted, cardColor }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    handleCompleteExercise(title);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '16px' }}
    >
      <Card variant="outlined" sx={{ backgroundColor: cardColor }}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="body2">Duration: {duration}</Typography>
          {!isExerciseCompleted(title) && (
            <Box sx={{ marginTop: '16px' }}>
              <Button variant="contained" color="primary" onClick={handleButtonClick}>
                Finish
              </Button>
            </Box>
          )}
          {isExerciseCompleted(title) && (
            <Box sx={{ marginTop: '16px' }}>
              <Button variant="contained" disabled>
                Completed
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const useExerciseCompletion = () => {
  const [completedExercises, setCompletedExercises] = useState([]);

  const handleCompleteExercise = (exercise) => {
    setCompletedExercises([...completedExercises, exercise]);
  };

  const isExerciseCompleted = (exercise) => {
    return completedExercises.includes(exercise);
  };

  return { handleCompleteExercise, isExerciseCompleted };
};

export default function MildStrength() {
  const { handleCompleteExercise, isExerciseCompleted } = useExerciseCompletion();

  const exerciseData = [
    {
      title: 'Warm-up: Gentle Neck Rolls',
      description: 'Roll your neck in circles, both ways, to warm up.',
      duration: '1 minute',
      type: 'warm-up',
      color: '#fce4ec', // Light pink color for warm-up
    },
    {
      title: 'Warm-up: Arm Swings',
      description: 'Stand with feet shoulder-width apart, swing arms back and forth.',
      duration: '1 minute',
      type: 'warm-up',
      color: '#fff3e0', // Light orange color for warm-up
    },
    {
      title: 'Chair Squats',
      description: 'Sit tall, stand up slowly, then sit back down.',
      duration: '2 sets of 10 reps',
      type: 'exercise',
      color: '#e8f5e9', // Light green color for exercise
    },
    {
      title: 'Wall Push-Ups',
      description: "Stand arm's length from a wall. Bend elbows, lower chest toward wall, push back.",
      duration: '2 sets of 8-10 reps',
      type: 'exercise',
      color: '#e0f7fa', // Light cyan color for exercise
    },
    {
      title: 'Seated Leg Raises',
      description: 'Sit on a chair, lift one leg straight out, lower it back down.',
      duration: '2 sets of 10 reps per leg',
      type: 'exercise',
      color: '#fff9c4', // Light yellow color for exercise
    },
    {
      title: 'Bicep Curls',
      description: 'Sit on a chair, arms by sides, hold light dumbbells. Curl arms up, then slowly lower.',
      duration: '2 sets of 8-10 reps',
      type: 'exercise',
      color: '#e0f2f1', // Light teal color for exercise
    },
    {
      title: 'Standing Heel Raises',
      description: 'Stand behind a chair, lift heels off the ground, then lower.',
      duration: '2 sets of 12-15 reps',
      type: 'exercise',
      color: '#fce4ec', // Light pink color for exercise
    },
    {
      title: 'Standing Hip Extensions',
      description: 'Stand behind a chair, extend one leg back, then lower.',
      duration: '2 sets of 10 reps per leg',
      type: 'exercise',
      color: '#e3f2fd', // Light blue color for exercise
    },
    {
      title: 'Cool Down',
      description: 'March in place or take a leisurely walk for 3-5 minutes. Stretch major muscle groups, holding each stretch for 15-30 seconds.',
      duration: '3-5 minutes',
      type: 'cooldown',
      color: '#fff3e0', // Light orange color for cooldown
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={containerVariants}
      style={{ maxWidth: '800px', margin: '0 auto' }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">Moderate / Light Strength Workout</Typography>
        </CardContent>
      </Card>

      {exerciseData.map((exercise) => (
        <ExerciseCard
          key={exercise.title}
          title={exercise.title}
          description={exercise.description}
          duration={exercise.duration}
          type={exercise.type}
          handleCompleteExercise={handleCompleteExercise}
          isExerciseCompleted={isExerciseCompleted}
          cardColor={exercise.color}
        />
      ))}
    </motion.div>
  );
}

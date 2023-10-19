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

export default function MildCardio() {
    const { handleCompleteExercise, isExerciseCompleted } = useExerciseCompletion();
  
    const exerciseData = [
      {
        title: 'Marching in Place',
        description: 'Stand tall and march in place, lifting your knees as high as comfortable.',
        duration: '5 minutes',
        type: 'exercise',
        color: '#fce4ec', // Light pink color for exercise
      },
      {
        title: 'Seated March',
        description: 'Sit on a chair with your back straight and march your feet in place, lifting one foot at a time.',
        duration: '5 minutes',
        type: 'exercise',
        color: '#fff3e0', // Light orange color for exercise
      },
      {
        title: 'Arm Circles',
        description: 'Stand with feet shoulder-width apart, extend your arms out to the sides, and make small circles in both directions.',
        duration: '5 minutes',
        type: 'exercise',
        color: '#e8f5e9', // Light green color for exercise
      },
      {
        title: 'Step-Touch',
        description: 'Stand with feet together, step to the side with one foot, then bring the other foot to meet it. Repeat on the other side.',
        duration: '5 minutes',
        type: 'exercise',
        color: '#e0f7fa', // Light cyan color for exercise
      },
      {
        title: 'Chair Squats',
        description: 'Sit on a chair, stand up slowly, then sit back down. Use your leg muscles for the movement.',
        duration: '2 sets of 10 reps',
        type: 'exercise',
        color: '#fff9c4', // Light yellow color for exercise
      },
      {
        title: 'Heel Taps',
        description: 'Stand with feet together, tap one heel forward, then the other, alternating between legs.',
        duration: '2 minutes',
        type: 'exercise',
        color: '#e0f2f1', // Light teal color for exercise
      },
      {
        title: 'Brisk Walking',
        description: 'Take a leisurely walk to warm up, then gradually increase your pace to a brisk walk. Swing your arms gently for added momentum.',
        duration: '10-15 minutes',
        type: 'exercise',
        color: '#fce4ec', // Light pink color for brisk walking
      },
      {
        title: 'Cool Down',
        description: 'Walk slowly or march in place for 2-3 minutes to cool down your body. Perform gentle stretches for your major muscle groups, holding each stretch for 15-20 seconds.',
        duration: '2-3 minutes',
        type: 'cooldown',
        color: '#e3f2fd', // Light blue color for cool down
      },
    ];
  
    const initialExercises = exerciseData.slice(0, 6); // Get the initial set of exercises
  
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
            <Typography variant="h5">Moderate / Light Endurance Workout</Typography>
          </CardContent>
        </Card>
  
        <ExerciseCard
          title="Brisk Walking"
          description="Take a leisurely walk to warm up, then gradually increase your pace to a brisk walk. Swing your arms gently for added momentum."
          duration="10-15 minutes"
          type="exercise"
          handleCompleteExercise={handleCompleteExercise}
          isExerciseCompleted={isExerciseCompleted}
          cardColor="#fce4ec" // Light pink color for brisk walking
        />
  
        {initialExercises.map((exercise) => (
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
  
        <ExerciseCard
          title="Cool Down"
          description="Walk slowly or march in place for 2-3 minutes to cool down your body. Perform gentle stretches for your major muscle groups, holding each stretch for 15-20 seconds."
          duration="2-3 minutes"
          type="cooldown"
          handleCompleteExercise={handleCompleteExercise}
          isExerciseCompleted={isExerciseCompleted}
          cardColor="#e3f2fd" // Light blue color for cool down
        />
      </motion.div>
    );
  }
  
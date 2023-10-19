import cv2
import mediapipe as mp
import math
import numpy as np

count = 0
#r, sets, offset, prevCount = 0, 0, 0, 0
angle = 0
stage, form_message = None, ""
setp, points = [], []

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

def calc_angle(a, b, c):
    a, b, c = np.array(a), np.array(b), np.array(c)
    radians = np.arctan2(c[1] - b[1], c[0]-b[0]) - np.arctan2(a[1]-b[1], a[0]-b[0])
    angle = np.abs(radians*100.0/np.pi)

    if angle > 180.0: return 360 - angle
    return angle

cap = cv2.VideoCapture(0)
cap.set(3, 900) # width
cap.set(4, 1000) # height
while cap.isOpened():
    # read each frame from webcam
    ret, frame = cap.read()
    img_height, img_width, _ = frame.shape

    # set up pose detector
    pose = mp_pose.Pose(
        static_image_mode = True,
        min_detection_confidence = 0.5,
        min_tracking_confidence = 0.5
    )

    # recolor image to RGB
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    image.flags.writeable = False

    # detects pose
    results = pose.process(image)
    
    # colors back to BGR
    image.flags.writeable = True
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

    try:
        # stores coordinates of all landmarks
        landmarks = results.pose_landmarks.landmark

        # get 3 points (right elbow, right shoulder, right hip)
        elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
        shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
        hip = [landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].y]

        # calculate angle between 3 points
        angle = calc_angle(elbow, shoulder, hip)

        # update rep counter based on angle
        if angle > 130:
            form_message = "Now go back down!"
            print(angle, stage)
            stage = "up"
        if angle < 50 and stage == "up":
            form_message = "Great! Now jump up"
            count += 1
            #print(count, angle, stage)
            stage = "down"
        if angle > 60 and stage == "up":
            form_message = "Raise your arms higher!"

        #resets counter when RIGHT SHOULDER is tapped by LEFT_INDEX
        #r = math.sqrt((left_index[0] - shoulder[0]) ** 2 + (left_index[1] - shoulder[1]) ** 2)
        # print(r)
        # if r < 20:
        #     prevCount = count
        #     sets += 1
        #     offset += 20
        #     count = 0
        
    except:
        pass

    # render jumping jack counter
    cv2.rectangle(image, (0,0), (120, 73), (50, 168, 82), -1)
    cv2.putText(image, 'REPS', (15,22), cv2.FONT_HERSHEY_COMPLEX, 0.5, (0,0,0), 1, cv2.LINE_AA)
    cv2.putText(image, str(count), (10,60), cv2.FONT_HERSHEY_COMPLEX, 1.5, (255,255,255), 2, cv2.LINE_AA)
    cv2.putText(image, str(form_message), (250, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,0), 2, cv2.LINE_AA)

    # Form adjustment message
    # if go_higher:
    #     #print('Raise your arms higher!')
    #     cv2.putText(image, 'Raise your arms higher!', (img_width / 2, img_height - 60), cv2.FONT_HERSHEY_COMPLEX, 1, (0,0,0), 1, cv2.LINE_AA)
    # else:
    #     cv2.putText(image, 'Great form!', (img_width / 2, img_height - 60), cv2.FONT_HERSHEY_COMPLEX, 1, (0,0,0), 1, cv2.LINE_AA)
    # # render set counter
    # cv2.rectangle(image, (img_width-90,0), (img_width, img_height), (50, 168, 82), -1)
    # cv2.putText(image, 'SETS', (img_width - 75, 32), cv2.FONT_HERSHEY_COMPLEX, 0.5, (0,0,0), 1, cv2.LINE_AA)
    # cv2.putText(image, 'Set {}: '.format(str(sets)) + '{} reps'.format(prevCount), (img_width - 75, 32+offset), cv2.FONT_HERSHEY_COMPLEX, 1, (0,0,0), 1, cv2.LINE_AA)
    # renders landmarks

    mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

    cv2.imshow('Mediapipe Feed', image)

    if cv2.waitKey(10) & 0xFF == ord('q'):
        break    
    
cap.release()
cv2.destroyAllWindows()


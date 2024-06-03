import React from 'react';
import RCLC from '../../../assets/pictures/projects/audio/RCLC.png';
import { styles } from '../../os/DragIndicator';
import ResumeDownload from '../ResumeDownload';

export interface PersonalProjectsProps {}

const PersonalProjects: React.FC<PersonalProjectsProps> = (props) => {
    return (
        <div className='site-page-content'>
            <h1>Personal</h1>
            <h3>Projects</h3>
            <br />
            <br />
            <div className='text-block'>
                <h2>Senior Technology Class</h2>
                <br />
                <p>
                Led a weekly class at the Robinson Community Learning Center, where 
                we taught senior citizens how to use essential apps like Uber, YouTube, 
                mobile banking, and Google Maps. Each session was divided into two parts: 
                the first half focused on instruction, while the second half was dedicated 
                to helping them practice what they learned and assisting with their personal 
                technology-related issues.
                </p>
                <br />
                <div className='captioned-image'>
                    <img src={RCLC} alt=''/>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1: </b>Photo taken during a lesson
                        </sub>
                    </p>
                </div>
                <br />
                <ResumeDownload />
            </div>
            
        </div>
    );
};
export default PersonalProjects;
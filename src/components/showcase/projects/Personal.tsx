import React from 'react';
import RCLC from '../../../assets/pictures/projects/audio/RCLC.png';
import { styles } from '../../os/DragIndicator';

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
                    Helped lead a weekly class held at the Robinson Community Learning Center. Each week we'd 
                    spend half the class teaching the senior citizens how to use important apps such as Uber, Youtube,
                    mobile banking apps, Google Maps, etc. The second half of the class we'd spend helping them 
                    practice what they learned or assisting them with their personal technology related issues.
                </p>
                <br />
                <div className='captioned-image'>
                    <img src={RCLC} alt=''/>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b>Photo taken during lesson
                        </sub>
                    </p>
                </div>
                <p>

                </p>
            </div>
            <p>
                <b>Coming Soon!</b>
            </p>
            
        </div>
    );
};
export default PersonalProjects;
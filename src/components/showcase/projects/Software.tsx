import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/kevin-olveradotcom.jpg';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>kevinolvera.com</h2>
                <br />
                <p>
                    kevin-olvera.com is my portfolio website, and also the
                    website you are on right now. I've wanted to create a 
                    portfolio site for a few years now but never found the 
                    time to sit down and convert my resume into a working
                    website. I also struggled deciding how I wanted the site
                    to look. A portfolio allows you to be a bit more creative
                    and share what doesn't fit on your resume. 

                    I've always loved the aesthtic old technology had, software used to have character
                    and over the years we have minimalized it to have no personality. I came across this 
                    Windows 95 theme in another repository and knew I had to adapt it to be my portfolio
                    site's theme.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    My goal for this site is to continue adding my projects, and making them
                    shortcuts on the desktop. While no one likes a messy desktop, a desktop 
                    full of fun projects might change your mind.
                    
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="kevin-olvera.com"
                        >
                            <p>
                                <b>Site</b> - kevin-olvera.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Kevin-Olv/portfolio95"
                        >
                            <p>
                                <b>[Github Repository]</b> - Portfolio95
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Project 2</h2>
                <br />
                <p>
                    Project 2 details
                </p>
                <br />
            </div>
            
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;

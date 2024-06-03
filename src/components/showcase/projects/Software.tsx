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
                <h2>kevin-olvera.com</h2>
                <br />
                <p>
                Welcome to kevin-olvera.com, my portfolio website. I've wanted to 
                create a portfolio site for years but never found the time to convert 
                my resume into a working website. I also struggled with deciding on 
                the site's look. A portfolio allows for more creativity and the opportunity 
                to share what doesn't fit on a resume.

                I've always loved the aesthetic of old technology; software used to have 
                character, but over the years, we've minimalized it to the point of having 
                no personality. When I came across a retro website repository, 
                I knew I had to adapt it for my portfolio site.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={computer} alt=""/>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Home page of portfolio95
                        </sub>
                    </p>
                </div>
                <p>
                My goal for this site is to continually add my projects and make them a
                ccessible as shortcuts on the desktop. While no one likes a cluttered 
                desktop, a desktop full of fun and interesting projects might just 
                change your mind.
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
                    Coming Soon!
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

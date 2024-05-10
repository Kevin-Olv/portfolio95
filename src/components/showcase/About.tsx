import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Hi</h1>
            <h3>I'm Kevin Sebastian Olvera</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at Fast Enterprises! In May
                    of 2023 I graduated from the University of Notre Dame
                    with my BS in Computer Science.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:kevinsolvera@gmail.com">
                        kevinsolvera@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                Growing up, I always had a fascination with building things, 
                whether that be legos or computers. It wasn’t until college that 
                I realized I love the idea of building something, but I hate actually 
                building things. Legos are great until you realize it’s going to take 
                you 8 hours to put together thousands of pieces of plastic to kiiiind 
                of resemble the Millennium Falcon from Star Wars. 

                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> My Lego Millenium Falcon
                        </sub>
                    </p>
                </div>

                <p>
                In 2019, I was accepted to the University of Notre Dame 
                where I studied Computer Science. It was here that I realized,
                Throughout my time there, I interned at IDEA Public Schools, 
                KR Logistics, and Oracle.  After graduating, I landed a job 
                with Fast Enterprises developing software with Maryland’s 
                Department of Transportation.  
                </p>
                <br />
                <p>
                Over these years I gained
                 experience in many different technologies, ranging from 
                 backend development with SQL to front-end development with 
                 React to make this website.The piece of paper that is my 
                 resume tells you my qualifications, but my goal is for this 
                 website to tell you my story.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I love watching movies. My family's pastime was
                            buying two movie tickets and managing to get a family 
                            of 5 in. Sometimes we'd sneak into a second movie if we saw
                            something good playing in the theatre next to us.
                            (Unfortunately, AMC caught on and now requires you pick your seats.)
                            Like every real stem major, my favorite movie is Interstellar. (Dune 2 
                            might take its spot, let me give it sometime to confirm this isn't recency bias)
                            
                        </p>
                        <br />
                        <p>
                        Some other hobbies I
                            enjoy are working out (anything but legs), watching F1, and 
                            playing video games until my friends and I accept that we are not very good at the
                            game we play everyday. 
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Proof I have a degree.
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and if you don't think Interstellar is the 
                    best movie ever please share your thoughts <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://youtu.be/Ram7AKbtkGE?si=pMwaZYoEEcsLgBS4'}
                        >here.</a>
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:kevinsolvera@gmail.com">
                        kevinsolvera@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;

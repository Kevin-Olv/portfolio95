import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Fast</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.fastenterprises.com/'}
                        >
                            <h4>www.fastenterprises.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Developer/Implementation Consultant</h3>
                        <b>
                            <p>Summer 2023 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                As a developer, I worked directly with the Maryland Department of Transportation to understand complex Driver Services scenarios and built software to meet their needs.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                        Modernized essential software and services for citizens and government.s
                        </p>
                    </li>
                    <li>
                        <p>
                        Contributed to several other subsystems, including driver records, cases, letters, reports, etc.
                        </p>
                    </li>
                    <li>
                        <p>
                        Utilized C# and SQL daily to complete projects.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Oracle</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.oracle.com/'}
                        >
                            <h4>www.oracle.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer Intern</h3>
                        <b>
                            <p>Summer 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                Worked with Oracle's Global Business Unit 
                to further advance their NetSuite product for 
                government finances.
                </p>
                <br />
                <ul>
                    <li >
                        <p>Generated efficient, modular and maintainable code 
                            on both front-end and back-end using Javascript.
                        </p>
                    </li>
                    <li >
                        <p>Worked with software team members to enhance and 
                            sustain automated builds and integration tests.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>KR Logistics</h1>

                    </div>
                    <div style={styles.headerRow}>
                        <h3>Operations Analyst</h3>
                        <b>
                            <p>Summer 2022, Summer 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                Leveraged my expertise in SQL and Microsoft Excel to extract 
                actionable insights from complex datasets, developed and maintain 
                key performance indicators to track the performance of transportation operations.
                </p>
                <br />
            </div>
            <div style = {styles.headerContainer}>
                <div style = {styles.header}>
                    <div style = {styles.headerRow}>
                        <h1>IDEA Public Schools</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://ideapublicschools.org/'}
                        >
                            <h4>www.ideapublicschools.org</h4>
                        </a>
                    </div>
                    <div style = {styles.headerRow}>
                        <h3>Internal Giving Specialist</h3>
                        <b>
                            <p>Winter 2020 - Summer 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className='text-block'>
                <ul>
                    <li>
                        <p>
                        Inputted and organized large volumes of 
                        data into Microsoft Excel spreadsheets. 
                        </p>
                    </li>
                    <li>
                        <p>
                        Designed interactive dashboards in Tableau 
                        to present complex data insights in a user-friendly manner.   
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;

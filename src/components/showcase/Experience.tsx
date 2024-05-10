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
                        <h1>Fast Enterpirses</h1>
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
                As a developer for Fast, I strive to modernize 
                essential software and services for the citizens 
                and government of Maryland.

                I work directly with the Maryland Department of Transportation to 
                understand complex issues and build software to meet their needs.

                </p>
                <br />
                <p> In the last year, I've become proficient in utilizing C# and 
                    SQL for daily job functions, 
                    adept at developing robust software solutions and managing 
                    database systems. I've also mastered designing documents, forms, 
                    and reports to streamline data visualization and enhance 
                    organizational efficiency.</p>
                <br />
                <p> During my time at Fast, I've </p>
                <ul>
                    <li>
                        <p>
                        Collaborated with other developers to refactor our 
                        legacy code into the new Core21 version, improving 
                        maintainability and ensuring a smooth rollout with minimal downtime.
                        </p>
                    </li>
                    <li>
                        <p>
                        Created a new tool in our system to import 
                        relevant documents and notes from previously 
                        closed Medical Overview Cases to new ones.
                        </p>
                    </li>
                    <li>
                        <p>
                        Addressed interventions in multiple subsystems 
                        including driver records, cases, letters, 
                        reports, etc
                        </p>
                    </li>
                    <li>
                        <p>
                        Collaborated closely with team members to 
                        troubleshoot issues and optimize software 
                        performance for government use cases.
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
                As a Software Engineering Intern at Oracle, I played a 
                role in enhancing the Netsuite product for local 
                and state governments through JavaScript development. 
                Operating within an Agile framework, I collaborated 
                with the team to meet project milestones and customer 
                expectations efficiently. 
                </p>
                <br />
                <ul>
                    <li >
                        <p>
                        Learned and leveraged JavaScript to implement key features 
                        and enhancements in Netsuite for government clients.
                        </p>
                    </li>
                    <li >
                        <p>
                        Engaged in Agile methodologies to adapt quickly to 
                        evolving project requirements and deliverables.
                        </p>
                    </li>
                    <li>
                        <p>
                        Developed comprehensive unit tests to validate 
                        code functionality and maintain high-quality standards.
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
                At KR Logistics, I expertly utilized SQL and Microsoft Excel 
                to extract valuable insights from intricate datasets, contributing 
                significantly to operational efficiency. Through my efforts, I 
                developed and maintained essential key performance indicators (KPIs) 
                to monitor and evaluate the performance of transportation operations, 
                enabling data-driven decision-making and optimization strategies.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                        Employed SQL queries to extract and manipulate data from 
                        diverse datasets, facilitating informed decision-making processes.
                        </p>
                    </li>
                    <li>
                        <p>
                        Developed and maintained comprehensive KPIs to assess 
                        and improve the efficiency of transportation operations. 
                        </p>
                    </li>
                    <li>
                        <p>
                        Leveraged Microsoft Excel's advanced functionalities to analyze 
                        data trends, identify bottlenecks, and propose strategic solutions for optimization. 
                        </p>
                    </li>
                </ul>
                
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
                <p>
                As an Internal Giving Specialist at IDEA Public Schools, 
                I played a multifaceted role in data management, donor 
                outreach, and data visualization.
                </p>
                <ul>
                    <li>
                        <p>
                        Demonstrated proficiency in data input and 
                        organization using Microsoft Excel, ensuring 
                        data accuracy and accessibility for analysis. 
                        </p>
                    </li>
                    <li>
                        <p>
                        Designed and developed interactive dashboards in 
                        Tableau, enabling stakeholders to explore and 
                        understand complex data insights intuitively, 
                        ultimately aiding in informed decision-making.  
                        </p>
                    </li>
                    <li>
                        <p>
                        Successfully secured funding for scholarships 
                        through proactive outreach and communication with 
                        donors, contributing to students' college matriculation.
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

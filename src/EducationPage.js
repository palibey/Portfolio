import {NavigationBar} from "./NavigationBar";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export function EducationPage() {
    return(
        <div>
            <NavigationBar/>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'yellow', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2016 - 2020"
                    iconStyle={{ background: 'yellow', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Arı Science High School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ankara, Turkey</h4>
                    <p>
                        CGPA: 94.6/100
                    </p>
                    <a target="_blank" href="https://www.ariokullari.k12.tr/english/highschool/science-high-school/">Website</a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'red', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2020 - Present"
                    iconStyle={{ background: 'red', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Bilkent University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ankara, Turkey</h4>
                    <p>
                        CGPA: 3.02/4.00
                    </p>
                    <a target="_blank" href="https://w3.bilkent.edu.tr/bilkent/">Website</a>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

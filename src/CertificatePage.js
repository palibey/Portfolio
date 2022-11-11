import {NavigationBar} from "./NavigationBar";
import "./CertificatePage.css"
import {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import JavaCertificate from "./Assets/JavaBasic.png"
import ProblemBasicCertificate from "./Assets/ProblemBasic.png"
import SpringCertificate from "./Assets/SpringCertificate.jpg"

export function CertificatePage(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <NavigationBar/>
            <div className="CertificateDisplay">
                <div className="Carousel">
                    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                        <Carousel.Item>
                            <a target="_blank" href="https://www.hackerrank.com/certificates/30f892ceb7f3">
                                <img
                                    className="d-block w-100"
                                    src={JavaCertificate}
                                    alt="Java Certificate"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a target="_blank" href="https://www.hackerrank.com/certificates/19a5134d57a6">
                                <img
                                    className="d-block w-100"
                                    src={ProblemBasicCertificate}
                                    alt="Problem Solving Certificate"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a target="_blank" href="https://www.udemy.com/certificate/UC-70744dbf-1701-4d56-bdf8-e50ce4869dab/">
                                <img
                                    className="d-block w-100"
                                    src={SpringCertificate}
                                    alt="Spring Certificate"
                                />
                            </a>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </div>

    );
}
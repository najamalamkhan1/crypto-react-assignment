import React from 'react'
import { useEffect, useState } from 'react';
import './Stylesheet/Home.css';

function Home() {
    const [text, setText] = useState("Wellcome To MoneyGram 🤑");
    const [speed, setSpeed] = useState(50);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timerId;
        if (index < text.length) {
            timerId = setTimeout(() => {
                setIndex(index + 1);
            }, speed);
        } else {
            clearTimeout(timerId);
        }
        return () => clearTimeout(timerId);
    }, [index, text, speed]);

    return (
        <>
            <div>
                <h1 classNameName="display-1">
                    {text.slice(0, index)}
                </h1>
            </div>

            {/* Crasoule section */}
            <div className=" container carasoul h-50">

                <div id="carouselExampleControls" className="carousel slide mt-2" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={"https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&w=600"} className="d-block w-100 h-25" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://images.pexels.com/photos/2068664/pexels-photo-2068664.jpeg?auto=compress&cs=tinysrgb&w=600"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&w=600"} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
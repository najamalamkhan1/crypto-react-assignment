import React from 'react'

function About() {
    return (
        <div className="container bg-dark text-light mt-5" style={{ border: '1px solid black', boxSizing: 'border-box', boxShadow:'0px 5px 5px black' }}>
            <h4 className="display-5">About us</h4>
            <p>
                We are a team of cryptocurrency enthusiasts and experts dedicated to providing the most up-to-date information and analysis on the world of digital assets. Our mission is to educate and inform the public on the opportunities and potential of cryptocurrencies, and to make it accessible and understandable to all.

                With years of experience in the industry, we have a deep understanding of the crypto market and the technologies behind it. Our team constantly monitors the market and stays ahead of the latest developments to bring you the most relevant and accurate information.

                Our website offers a wide range of resources for anyone interested in the world of cryptocurrencies, including news and analysis, price tracking, educational articles, and much more. Whether you're a seasoned trader or just starting to learn about digital assets, we've got you covered.

                So if you want to stay informed and stay ahead of the game, join us on our mission to demystify the world of cryptocurrencies.
            </p>
            <div className="d-flex" style={{ boxSizing: 'content-box', height: '185px', border: '1px solid white', borderRadius: '50px' }}>
                <img src={'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600'} style={{ borderRadius: '150px' }} />
                <img src={"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"} style={{ borderRadius: '150px' }} />
                <img src={'https://images.pexels.com/photos/5980576/pexels-photo-5980576.jpeg?auto=compress&cs=tinysrgb&w=600'} style={{ borderRadius: '150px' }} />
                <img src={"https://images.pexels.com/photos/6770774/pexels-photo-6770774.jpeg?auto=compress&cs=tinysrgb&w=600"} style={{ borderRadius: '150px' }} />
                
            </div>
        </div>
    )
}

export default About
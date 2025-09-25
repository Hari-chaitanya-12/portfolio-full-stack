import React from 'react'

const Projects = () => {
  return (
    <div>
      <section className="projects " id="projects">
                <h2>Projects</h2>

                <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="container">
                                <img src="./src/assets/todo.png"  alt="To-Do App"  />
                                <h6>To-Do App</h6>
                                <p className="small text-white-50 text-center">A simple and intuitive to-do list application
                                    built with React. It allows users to add, edit, and delete tasks, helping them stay
                                    organized and manage their daily activities efficiently.</p>
                                <div>
                                    <a href="https://github.com/Hari-chaitanya-12/to-do-list" className="btn btn-light btn-sm">GitHub</a>
                                    <a href="https://todo-app-by-hari.netlify.app" className="btn btn-outline-light btn-sm">Demo</a>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className="container">
                                <img src="./src/assets/ecommers.png"  alt="E-commerce Website"/>
                                <h6>E-commerce Website</h6>
                                <p className="small text-white-50 text-center">A fully functional e-commerce website
                                    developed
                                    using React and Node.js. It features product listings, a shopping cart, user
                                    authentication, and a secure checkout process, providing a seamless online shopping
                                    experience.
                                </p>
                                <div>
                                    <a href="https://github.com/Hari-chaitanya-12/e-commerce-site" className="btn btn-light btn-sm">GitHub</a>
                                    <a href="https://app.netlify.com/projects/shoeshopper-by-hari/overview" className="btn btn-outline-light btn-sm">Demo</a>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className="container">
                                <img src="./src/assets/video-call-app.png" alt="Video Call App"/>
                                <h6>Video Call App</h6>
                                <p className="small text-white-50 text-center">A real-time video calling application built
                                    with
                                    zegocloud Api and React. It enables users to make high-quality video calls directly
                                    from
                                    their browsers, supporting multiple participants and screen sharing for enhanced
                                    communication.
                                </p>
                                <div>
                                    <a href="https://github.com/Hari-chaitanya-12/video-call-app" className="btn btn-light btn-sm">GitHub</a>
                                    <a href="https://shoeshopper-by-hari.netlify.app/" className="btn btn-outline-light btn-sm">Demo</a>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className="container">
                                <img src="./src/assets/LLM.png"  alt="LLM" />
                                <h6>LLM</h6>
                                <p className="small text-white-50 text-center">A web application that integrates with large
                                    language models (LLMs) to provide users with advanced text generation and natural
                                    language processing capabilities. Built using Google Api, React and Node.js, it
                                    offers
                                    an intuitive interface for interacting with LLMs for various applications such as
                                    content creation, chatbots, and more.</p>
                                <div>
                                    <a href="https://github.com/Hari-chaitanya-12/LLM" className="btn btn-light btn-sm">GitHub</a>
                                    <a href="https://haro-llm-by-hari.netlify.app/" className="btn btn-outline-light btn-sm">Demo</a>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="container">
                                <img src="./src/assets/search-engine.png"  alt="Search Engine"/>
                                <h6>Search Engine</h6>
                                <p className="small text-white-50 text-center">A custom search engine developed using Google
                                    Api, React and Node.js that allows users to search for information across multiple
                                    sources. It features advanced filtering options, relevance ranking, and a
                                    user-friendly
                                    interface to deliver accurate and efficient search results.</p>
                                <div>
                                    <a href="https://github.com/Hari-chaitanya-12/haro-search" className="btn btn-light btn-sm">GitHub</a>
                                    <a href="https://haro-search.netlify.app" className="btn btn-outline-light btn-sm">Demo</a>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className="container">
                                <img src="./src/assets/weather-app.png"  alt="Weather App" />
                                <h6>Weather App</h6>
                                <p className="small text-white-50 text-center">A weather forecasting application built with
                                    Open
                                    weather Api and React that provides users with real-time weather updates and
                                    forecasts
                                    for their location. It features a clean and responsive design, allowing users to
                                    easily
                                    access weather information, including temperature, humidity, wind speed, and more.
                                </p>
                                <div>
                                    <a href="https://github.com/Hari-chaitanya-12/Weather_app" className="btn btn-light btn-sm">GitHub</a>
                                    <a href="https://weather-by-hari.netlify.app/" className="btn btn-outline-light btn-sm">Demo</a>
                                </div>
                            </div>
                        </div>

                    </div>


                    <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </section>
    </div>
  )
}

export default Projects

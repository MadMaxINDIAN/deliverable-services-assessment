import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <>
            {/* HEADER */}
            <div style={{ padding: "0px 25px", borderBottom: "1px solid #EEE" }}>
                <div className="navbar flex">
                    <div className='logo'>Any logo</div>
                    <div className='flex navbar-links'>
                        <div className='flex'>
                            <div className='nav-link-font'>
                                <p>PRODUCTS</p>
                            </div>
                            <div className='nav-link-font'>
                                <p>SUCCESS STORIES</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <button className='btn-outlined'>
                                <p>CONTACT SALES</p>
                            </button>
                            <button className='btn-filled'>
                                <p>GET STARTED</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* LANDING */}
            <div className='landing-div'>
                <center>
                    <div className='flex-column' style={{ alignItems: "center", justifyContent: "space-around", width: "90%", minHeight: "364px" }}>
                        <div>
                            <p className='landing-main-title'>Smarter eco-system for your workplace</p>
                            <p className='landing-main-description'>All the applications of Company work together so you can too.</p>
                        </div>
                    </div>
                </center>
                <div className='absolute landing-div-hover-1'>
                    <img src="/calendar-icon.png" className='landing-div-hover-img' />
                </div>
                <div className='absolute landing-div-hover-2'>
                    <img src="/mail-icon.png" className='landing-div-hover-img' />
                </div>
                <div className='absolute landing-div-hover-3'>
                    <img src="/guard-icon.png" className='landing-div-hover-img' />
                </div>
                <div className='absolute landing-div-hover-4'>
                    <img src="/cloud-icon.png" className='landing-div-hover-img' />
                </div>

                <div className='absolute landing-div-hover-5'>
                    <img src="/illustration-one.png" className='landing-div-illustration-img' />
                </div>
            </div>
            <hr style={{ border: "1px solid #EEEEEE", margin: "0px" }} />
            {/* FEATURES */}
            <div className='features-div'>
                <p className='features-div-title'>Access Cloud</p>
                <p className='features-div-description'>Unique and powerful suite of software to run your entire business.</p>
                <div className='flex'>
                    <div className='features-card'>
                        <i class="fa-solid fa-right-long"></i>
                        <img src="/features.png" className='features-card-img' />
                        <p className='features-card-title'>Meeting management</p>
                        <p className='features-card-description'>Unique and powerful suite of software to run your entire business.</p>
                    </div>
                    <div className='features-card'>
                        <i class="fa-solid fa-right-long"></i>
                        <img src="/features.png" className='features-card-img' />
                        <p className='features-card-title'>Pantry management</p>
                        <p className='features-card-description'>Unique and powerful suite of software to run your entire business.</p>
                    </div>
                    <div className='flex-column'>
                        <div className='features-card-small'>
                            <i class="fa-solid fa-right-long"></i>
                            <img src="/features.png" className='features-card-img' />
                            <p className='features-card-title'>Asset Tracking</p>
                        </div>
                        <div className='features-card-small'>
                            <i class="fa-solid fa-right-long"></i>
                            <img src="/features.png" className='features-card-img' />
                            <p className='features-card-title'>Visitor management</p>
                        </div>
                    </div>
                </div>
                <div className='absolute landing-div-hover-6'>
                    <img src="/illustration-two.png" className='landing-div-illustration-img' />
                </div>
                <div className='features-div-section-2'>
                    <p className='features-div-title'>Vision Cloud</p>
                    <p className='features-div-description'>Unique and powerful suite of software to run your entire business.</p>
                    <div className='flex'>
                        <div className='features-card'>
                            <i class="fa-solid fa-right-long"></i>
                            <img src="/features.png" className='features-card-img' />
                            <p className='features-card-title'>Social Distancing</p>
                            <p className='features-card-description'>Unique and powerful suite of software to run your entire business.</p>
                        </div>
                        <div className='features-card'>
                            <i class="fa-solid fa-right-long"></i>
                            <img src="/features.png" className='features-card-img' />
                            <p className='features-card-title'>Mask Detection</p>
                            <p className='features-card-description'>Unique and powerful suite of software to run your entire business.</p>
                        </div>
                        <div className='flex-column'>
                            <div className='features-card-small'>
                                <i class="fa-solid fa-right-long"></i>
                                <img src="/features.png" className='features-card-img' />
                                <p className='features-card-title'>Contact Tracing</p>
                            </div>
                            <div className='features-card-small'>
                                <i class="fa-solid fa-right-long"></i>
                                <img src="/features.png" className='features-card-img' />
                                <p className='features-card-title'>Attendance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ADDITIONAL SECTION */}
            <div className='additional-section'>
                <img className='additional-section-img' src="/group-diverse-people-having-business-meeting.png" />
                <p className='additional-section-title'>Company full ecosystem of solutions address the critical office process making them easier to accomplish</p>
                <div className='flex' style={{ padding: "0px 10rem" }}>
                    <img src="/watch-now.png" className='additional-section-watch-img' />
                    <p className='additional-section-learn-more'>Learn more</p>
                </div>
                <img src="/yellow-dots.png" className='additional-section-dotted-icons-1' />
                <img src="/red-dots.png" className='additional-section-dotted-icons-2' />
            </div>
            {/* Review Section */}
            <div className='reviews-section'>
                <center>
                    <p className='reviews-section-title'>
                        The world's best workplaces choose Hipla
                    </p>
                    <div className='reviews-section-card flex'>
                        <img src="client.png" className='reviews-section-card-img' />
                        <div className='flex-column' style={{ marginTop: "5%", justifyContent: "center", alignItems: "center" }}>
                            <p className='reviews-section-card-title'>Company stitched together Visitor Management, Indoor Navigation, Pantry Management...</p>
                            <p className='reviews-section-card-name'>
                            Dishant Agnihotri
                            </p>
                            <p className='reviews-section-card-designation'>
                            Director of technology, AIPL
                            </p>
                            <p className='reviews-section-card-description'>Company eco system helps AIPL to setup their smart workplace. Company eco system helps AIPL to setup their smart workplace.</p>
                            <p className='reviews-section-card-redirect'>READ FULL CASE STUDY</p>
                        </div>
                        <img className='reviews-section-card-quotes' src="quotes.png" />
                    </div>
                    <div className='flex' style={{ justifyContent: 'space-between', padding: "0px 15rem", alignItems: "center" }}>
                        <img src="logo1.png" className='reviews-section-logo-img' />
                        <img src="logo2.png" className='reviews-section-logo-img' />
                        <img src="logo3.png" className='reviews-section-logo-img' />
                        <img src="logo4.png" className='reviews-section-logo-img' />
                        <img src="logo6.png" className='reviews-section-logo-img' />
                    </div>
                </center>
            </div>
            <div style={{ height: "4rem" }}></div>
        </>
    );
}

export default App;

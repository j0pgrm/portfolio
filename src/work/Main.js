import React, { useRef } from 'react'; 
import emailjs from 'emailjs-com';
import jauntyimg from './images/jaunty-img.png'; 
import languagestatsimg from './images/language-stats-img.png'; 
import cudilcarimg from './images/cudil-car-img.png'; 
import fotproimg from './images/fotpro-img.png'; 

function Main() { 

    //useRef 
    const form = useRef(); 

    //functions 
    const sendEmail = e => {
        e.preventDefault(); 

        emailjs.sendForm('service_cwscxsb', 'template_8yye40g', form.current, 'YlIiN7f_r-mbQ4Q6G')
        .then((res) => {
            console.log(res.text); 
            console.log("success");  
        }, (err) => {
            console.log(err.text); 
            console.log("error"); 
        }); 
    }; 

    return (
        <div id="page-wrapper">

            {/*<!-- Header -->*/}
            <section id="header">
                <div className="container">

                    {/*<!-- Logo -->*/}
                    <h1 id="logo"><a>Jason Rubio</a></h1>
                    <p>FrontEnd Developer</p>

                    <a alt="" rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/1wVEcEROOtQgSC4JzNx_fpN59qgA5wIa8QzeQquyTpU0/edit?usp=sharing">resume</a>

                </div>
            </section>

            <section id="features" style={{borderBottom: 'solid 2px #e5e5e5'}}>
                <div className="container">
                    <header>
                        <h2>About Me</h2> 
                    </header>
                    <p>
                        I am a Web Developer aspired to learn more every single day. 
                        Enjoy building websites from the bottom up.
                    </p>
                </div>
            </section>

            {/*<!-- Features -->*/}
            <section id="features">
                <div className="container">
                    <header>
                        <h2>Projects</h2>
                    </header>
                    <div className="row aln-center">

                        <div className="col-4 col-6-medium col-12-small">
                            {/*<!-- FotPro -->*/}
                            <section>
                                <a className="image featured">
                                    <img alt="" src={fotproimg} />
                                </a>
                                <header>
                                    <h3>FotPro</h3>
                                </header>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://j0pgrm.github.io/FotPro/" className="button icon solid fa-file">Go To App</a>
                                        </li> 
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://github.com/j0pgrm/FotPro" className="button icon solid fa-file">Source</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="col-4 col-6-medium col-12-small">
                            {/*<!-- Jaunty -->*/}
                            <section>
                                <a className="image featured">
                                    <img alt ="" src={jauntyimg} />
                                </a>
                                <header>
                                    <h3>Jaunty</h3>
                                </header>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://j0pgrm.github.io/around-world/" className="button icon solid fa-file">Go To App</a>
                                        </li> 
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://github.com/j0pgrm/around-world" className="button icon solid fa-file">Source</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="col-4 col-6-medium col-12-small">
                            {/*<!-- Cudil Car -->*/}
                            <section>
                                <a className="image featured">
                                    <img alt="" src={cudilcarimg} />
                                </a>
                                <header>
                                    <h3>Cudil Car</h3>
                                </header>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://j0pgrm.github.io/Cudil-Car/" className="button icon solid fa-file">Go To App</a>
                                        </li> 
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://github.com/j0pgrm/Cudil-Car" className="button icon solid fa-file">Source</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="col-4 col-6-medium col-12-small">
                            {/*<!-- Language Stats -->*/}
                            <section>
                                <a className="image featured">
                                    <img alt="" src={languagestatsimg} />
                                </a>
                                <header>
                                    <h3>Language Stats</h3>
                                </header>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://j0pgrm.github.io/language-stats/" className="button icon solid fa-file">Go To App</a>
                                        </li> 
                                        <li>
                                            <a rel="noreferrer" target="_blank" href="https://github.com/j0pgrm/language-stats" className="button icon solid fa-file">Source</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section id="features" style={{borderTop: 'solid 2px #e5e5e5'}}>
                <div className="container">
                    <header>
                        <h2>Skills</h2>
                    </header>
                    <p>
                        Can use React JS for complex and well designed websites, 
                        with Redux for state management across web applications.
                    </p>
                </div>
            </section>

            <section id="footer">
                <div className="container">
                    <header>
                        <h2>Questions or comments? <strong>Get in touch:</strong></h2>
                    </header>
                    <div className="row">
                        <div className="col-6 col-12-medium">
                            <section>

                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="row gtr-50">
                                        <div className="col-6 col-12-small">
                                            <input name="user_name" placeholder="Name" type="text" />
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <input name="user_email" placeholder="Email" type="text" />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="form-button-submit button icon solid fa-envelope">Send Message</button>
                                        </div>
                                    </div>
                                </form>

                            </section>
                        </div>
                        <div className="col-6 col-12-medium">
                            <section>
                                {/* <p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat Phaselamet
                                mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur
                                leo nibh, rutrum eu malesuada.</p> */}
                                <div className="row">
                                    <div className="col-6 col-12-small">
                                        <ul className="icons">
                                            <li className="icon solid fa-home">
                                                <strong>Email: </strong>
                                                jrubio.wr@gmail.com
                                            </li>
                                            <li className="icon solid fa-phone">
                                                <strong>GitHub: </strong> 
                                                <a rel="noreferrer" target="_blank" href="https://github.com/j0pgrm">github.com/j0pgrm</a>
                                            </li>
                                            <li className="icon solid fa-envelope">
                                                <strong>LinkedIn: </strong>
                                                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jason-rubio-843039245/">linkedin.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*<div className="col-6 col-12-small">
                                        <ul className="icons">
                                            <li className="icon brands fa-twitter">
                                                <a href="#">@untitled</a>
                                            </li>
                                            <li className="icon brands fa-instagram">
                                                <a href="#">instagram.com/untitled</a>
                                            </li>
                                            <li className="icon brands fa-dribbble">
                                                <a href="#">dribbble.com/untitled</a>
                                            </li>
                                            <li className="icon brands fa-facebook-f">
                                                <a href="#">facebook.com/untitled</a>
                                            </li>
                                        </ul>
                                    </div>*/}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main

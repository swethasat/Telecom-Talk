import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Telecom Talk</h1>
      </header>

      <nav>
        <div className="dropdown">
          <button className="dropbtn">Topics</button>
          <div className="dropdown-content">
                  <li><a href="evolution.html">Evolution of Telecommunications</a></li>
          <li><a href="#">Impact of Telecommunications</a></li>
          <li><a href="#">Telecommunication Technologies and Infrastructure</a></li>
          <li><a href="#">Telecommunication Protocols and Systems</a></li>
          <li><a href="#">Telecommunication Services and Systems</a></li>
          <li><a href="#">Emerging Technologies in Telecommunications</a></li>
          <li><a href="#">Multiplexing Techniques in Telecommunications</a></li>
          <li><a href="#">Cellular Networks, Generations, and Cell Structure</a></li>
          <li><a href="#">Telecom Network Components</a></li>
          <li><a href="#">Mobile Service Provider Setup and Frequency Planning</a></li>
        </ul>
      </nav>

      <div className="container">
        <div className="background-video">
          <video autoPlay muted loop id="background-video">
            <source src="background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content">
          <p className="intro">
            <b>
              <center>
                <h1>Welcome to the Telecom Talk</h1>
                <br />
                Welcome to our website dedicated to the fascinating world of
                telecommunications! <br />
                Introduction to Telecommunications: Telecommunications is the
                science and technology of transmitting information, such as
                voice, data, and video, over long distances using various
                technologies and networks. It has revolutionized the way we
                communicate and connect with people around the globe. From the
                humble beginnings of telegraphs and telephones to the modern era
                of mobile phones, internet, and beyond, telecommunications has
                been a driving force behind the advancement of society, business,
                and technology.
                <br />
                Overview of the Telecommunications Industry: The
                telecommunications industry is a vast and ever-evolving ecosystem
                that encompasses a wide range of services, technologies, and
                players. It includes telecommunication service providers,
                equipment manufacturers, network operators, software developers,
                and more. The industry plays a crucial role in connecting people,
                businesses, and devices, enabling seamless communication and
                access to information.
                <br />
                In today's interconnected world, telecommunications has become an
                integral part of our daily lives. We rely on it for making phone
                calls, sending messages, accessing the internet, streaming videos,
                and conducting business transactions. With the advent of new
                technologies like 5G, cloud computing, and edge computing, the
                industry is poised for further innovation and transformation.
                <br />
                On this website, we aim to provide you with valuable insights and
                information about the various aspects of telecommunications. From
                the history and evolution of telecommunication technologies to the
                impact of telecommunications on society, economy, and politics, we
                explore the fascinating world of communication networks, protocols,
                and services. This website aims to provide you with an overview of
                telecommunications, covering topics ranging from the evolution of
                telecommunications to emerging technologies such as native,
                virtualization, and fiber optics. Join us as we delve into the
                exciting realm of telecommunications and discover how it continues
                to shape our connected world.
              </center>
            </b>
          </p>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 Telecom Talk. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
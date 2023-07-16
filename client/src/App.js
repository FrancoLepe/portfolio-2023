import './App.css';
import Navbar from './components/navbar';
import headshot from './headshot.JPG';
import project5 from './project5.png';
import project6 from './project6.png';
import project2 from './project2.png';
function App() {
  return (
    <div className="App">
     <Navbar/>
      <div className="content">
        
        <div>
          <h2>Software Engineer ⚙️ </h2>
          <h3>Hi, I'm Franco Lepe, a Full-Stack Developer <a href="https://github.com/FrancoLepe" className='toplink'>Visit my GitHub</a><br></br><a href="https://www.linkedin.com/in/francolepe/" className='toplink'> , Linkedin</a><a href="https://medium.com/@francolepe169" className='toplink'>, and Blog</a></h3>
        </div>
        <img className="Headshot" src={headshot} alt="headshot" />
      </div>
      <table>
        <tr>
          <th>Tech Stack 🧩</th>
            <td>JavaScript</td>
            <td>React.JS</td>
            <td>Python</td>
            <td>Flask</td>
            <td>SQLAlchemy</td>
        </tr>
      </table>

      <br />
      <br />
      <br />
      {/* <br />
      <br />
      <br />
      <br /> */}
      <br />
      <h2 className="portfolio">Portfolio Projects</h2>
      <br />
      <h2 className="Music-Depo">Music Depo 🎸</h2>
      <div className="content">
      
        <img className="projects" src={project5} alt="homepage screenshot" />
        <h3>A musical instrument e-commerce store that allows users to create an account, add items to their cart, checkout, and view purchase history <a href="https://www.loom.com/share/c5e9d2395e204d05bb7b3142ae978ea6?sid=c4797a61-2b88-4eb8-9a9b-dd1983ce7ed2">Video Demo</a></h3>
        <br />

      </div>
      <h2 className="Music-Depo">Black Jack ♠️</h2>
      <br></br>
      <div className="content">

      <img className="projects" src={project6} alt="homepage screenshot 2" />
      <h3> Black jack card game were you play against the dealer and who ever hits 21 first wins and however goes over 21 first loses <a href="https://www.loom.com/share/5d3810006c2547b7aa44a0147cd96b82?sid=ad343ae7-b565-4916-9b0a-9a9567ab4470">Video Demo</a></h3>
      </div>
      <br></br>
      <h2 className="Music-Depo">Audio House 🎵</h2>
      <br></br>
      <div className="content">

      <img className="projects" src={project2} alt="homepage screenshot 3" />
      <h3> Music player app that uses the Spotify Api and allows the user to look up songs, preview them, see the top 50 songs and favorite songs to a playlist <a href="https://www.loom.com/share/81098b5bc3ba4d44b3642790df9fd9d6?sid=f5b5041e-473d-480f-8043-5459074e3783">Video Demo</a></h3>
      </div>
    </div>
  );
}

export default App;

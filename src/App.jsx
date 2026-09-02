import { useState } from 'react'
import './App.css'
import P2 from '/home/terorblade/porfolio/src/assets/Screencast_20260729_125624.webm';
import P1 from '/home/terorblade/porfolio/src/assets/LibraryManagementSystem.webm';
import TicTacToe from './Tic-Tac-Toe.jsx';
import picture from '/home/terorblade/porfolio/src/assets/20260815_193526.jpg';

export function App() {
  const [open, setOpen] = useState(false);
  const [contactInfo, setcontactInfo] = useState(false);
  const [projects, setProjects] = useState(false); 
  const [Dinosaur, setDinosaur] = useState(false);



  
  return (
    <div>
      <h1 className='header'>Martin Reyes</h1>
      <p className='header'>Welcome!</p>

      <div className='image-container'>
            <img src={picture} alt="Profile" width = "300" /> 
      </div>


      <div style={{textAlign: 'center', gap: '10px', marginTop: '20px', marginRight: '20px'}}>
      {/* About Me Button */}
      <button className = "projects" onClick={() => setOpen(!open)}>
        About me 
      </button>

      {/* Contact Info Button */}
      <button  className = "projects" onClick={() => setcontactInfo(!contactInfo)}>
        Contact Info
      </button>
      
      {/* Projects Button */}
        <button  className = "projects" onClick={() => setProjects(!projects)}>
          Projects
        </button>

    {/* Dinosaur / Tic-Tac-Toe Section */}
<div style={{ display: 'inline-block' }}>
  <button className="projects" onClick={() => setDinosaur(!Dinosaur)}>
    {Dinosaur ? 'Hide Tic-Tac-Toe' : 'Play Tic-Tac-Toe'}
  </button>
</div>

{Dinosaur && (
  <div className="p">
    <TicTacToe />
  </div>
)}

      </div>

   {/* Contact Info */}
{contactInfo && (
  <div className='p'>
    <p>
      Email:{' '}
      <a 
        href="mailto:lightstriker2021@gmail.com" 
        style={{ color: '#38bdf8', textDecoration: 'underline' }}
      >
        lightstriker2021@gmail.com
      </a>
    </p>
    <p>
      LinkedIn:{' '}
      <a 
        href="https://www.linkedin.com/in/martin-reyes-97690b335" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: '#38bdf8', textDecoration: 'underline' }}
      >
        www.linkedin.com/in/martin-reyes-97690b335
      </a>
    </p>
    <p>
      GitHub:{' '}
      <a 
        href="https://github.com/lightstriker2021-sketch" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: '#38bdf8', textDecoration: 'underline' }}
      >
        https://github.com/lightstriker2021-sketch
      </a>
    </p>
  </div>
)}
      {/* This is About Me */}
      {open && 
        <p className='p'>
        I am an up-and-coming software engineer. I love video games, anime and basketball.
        Favorite game right now is Deadlock don't look at my hours on it. Favorite basketball team is the Los Angelos Clippers their such an aspiration (if you know you know). 
        Favorite anime/manga is One Piece its only a 1000 episodes.  
        </p>}

      {/* This is Projects */}
      {projects && 
        <p className='p'>
          Here are some of my projects!
          <p className='video-container'>
            Project 1: Is a Library Management fullstack website. I worked on the frontend design of the website while my other group members handled the backend. We used
            React Vite for the frontend. For the backend I dont really know what we used. The website allows users to view, add, edit, and delete books from the library. 
            It also allows users to search for books by title or author. In the demo Im going to show it doesnt show the books, login feature because the database we are using is not on
            it will only showcase the frontend work I did. 
            <video className='video' src={P1} controls preload="metadata"></video>
          </p>
          <p className='video-container'>
            Project 2:Unity Game Development. It's a top down shooter like hades but instead of swords its guns. It is still in progress. Not completed yet.
            It is more like dead ops arcade from call of duty. Instead of hadeslike.
            <video className='video' src={P2} controls preload="metadata"></video>
          </p>
          <p>
            Project 3: Simple Tic-Tac-Toe you can play it right now.
          </p>
        </p>
      }


    </div>
  );
}


export default App;

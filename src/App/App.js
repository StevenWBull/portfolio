import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <em>&lt;  STEVEN W. BULL JR. &gt;</em>
      </nav>
      <main>
          <header>
              <p>Hello, my name is</p>
              <h1>Steven</h1>
              <p>and I'm a chemist turned</p>
              <h2>Full-Stack Engineer</h2>
          </header>

          <section>
              <h3>About Me</h3>
              <div class="aboutMe">
                <p>
                  I am a current apprentice for Thinkful in the Engineering Immersion program.
                  I love the smell of strong coffee in front of a computer monitor in the morning,
                  and I love solving problems and squashing bugs even more.
                  The endorphin rush I experience whenever I finally publish a project can rival any adrenaline junkie’s high.
                  I enjoy learning new things and breaking everything while putting those new things into practice. 
                </p>
                <p>
                  When I’m not in front of a computer monitor, I can be found spending time 
                  with my wife and three (large) dogs or binge-watching various types of 
                  documentaries on Netflix. 
                  My current one-year learning goals (beyond coding) are the piano and the 
                  Spanish language. Maybe if Spanish were a computer language, 
                  I could learn it quicker than I currently am…
                </p>
              </div>
          </section>

          <section class="skills">
              <h3>My Skills</h3>
              <div>
                <p>HTML | CSS | Javascript | jQuery | Python</p>
              </div>
          </section>

          <section class="projects">
              <h3>Projects</h3>
              <div>
                <img src="chemistryKnowledgeQuiz.png" alt="Chemistry Knowledge Quiz App" />
                <h4>The Chemistry Knowledge Quiz </h4>
                <p><a href="https://github.com/thinkful-ei-gecko/smiti-steven-chemistquizapp">Repo</a> | <a href="https://thinkful-ei-gecko.github.io/smiti-steven-chemistquizapp/">Live</a></p>
                <p><em>Engineered with HTML, CSS, & JavaScript</em></p>
                <p>The Chemistry Knowledge Quiz application will test your comprehension of the chemistry field! (Or how much you remember from high-school / college). </p>
              </div>
          </section>

      </main>
      <footer><a 
        href="mailto:mailto:&#115;&#116;&#101;&#118;&#101;&#110;&#119;&#098;&#117;&#108;&#108;&#106;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" 
        target="_blank" rel="noopener noreferrer">Email</a> | <a href="https://github.com/StevenWBull" 
        target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/stevenwbull/" 
        target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </>
  );
}

export default App;
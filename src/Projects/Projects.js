import React from 'react';

export default function Projects()  {
  return (
    <section className="projects">
      <div>
        <h4>BreadCrumbs</h4>
        <p></p>
      </div>
      <div>
        <h4>Minionese Learning App</h4>
        <p><a href='https://github.com/StevenWBull/minionese-learning-client'>GitHub</a> | <a href='https://minionese-app.now.sh'>Live</a></p>
        <p><em>Engineered with HTML, CSS, JSX, JavaScript, React, Context, Node, Express, Spaced Repetition Algorithm & PostgreSQL</em></p>
        <p>The minionese learning app is a project created by Steven Bull and Brock Boutwell. The project centers around the learning of the coveted 'banana language' of the minions. The server uses a special algorithm in order to increase the retention and learning execution of users. If an answer is incorrect the word gets moved to the next word, however if it is correct, the word gets pushed back x amount of spaces. This ensures that before moving on to new and exciting lexicons, the words are committed to memory through repetition.</p>
      </div>
      <div>
        <h4>Restaurant Roulette</h4>
        <p><a href='https://github.com/StevenWBull/restaurant-roulette-client'>GitHub</a> | <a href='https://restaurant-roulette.now.sh/'>Live</a></p>
        <p><em>Engineered with HTML, CSS, JSX, JavaScript, React, Context, React Hooks, Node, Express, & PostgreSQL</em></p>
        <p>Restaurant Roulette is a application where a user can save their favorite restaurants in one easy to access place. Users are only able to see their own restaurants. The main feature of the application is the ability to to randomly pull out one restaurant from the entire saved list. This functionality allows the user to simplify their dining experience by not having to have the dreaded 'Where do you want to eat?' conversation with family, friends or significant others. For added effect, if the randomly generated restaurant doesn't fit the current craving of the user, a single button on the same page can be clicked to generate a new random restaurant.</p>
      </div>
      <div>
        <img src="chemistryKnowledgeQuiz-compressed.png" alt="Chemistry Knowledge Quiz App" />
        <h4>The Chemistry Knowledge Quiz</h4>
        <p><a href="https://github.com/thinkful-ei-gecko/smiti-steven-chemistquizapp">GitHub</a> | <a href="https://thinkful-ei-gecko.github.io/smiti-steven-chemistquizapp/">Live</a></p>
        <p><em>Engineered with HTML, CSS, JavaScript, & jQuery</em></p>
        <p>The Chemistry Knowledge Quiz application will test your comprehension of the chemistry field! (Or how much you remember from high-school / college). </p>
      </div>
    </section>
  )
}
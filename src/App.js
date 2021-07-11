import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <section className="container-one">
          <nav>
            <img src="../public/images/ironhack-logo.svg"/>
            <img src="../public/images/menu-top.svg" />
          </nav>
          <div className="intro">
            <h1>Say Hello to <br />ReactJS</h1>
            <p>You will learn how to use<br />
               the most popular frontend library,<br />
               and become a super Ninja developer.
            </p>
            <button>Awesome!</button>
          </div>
        </section>

        <section className="container-two">
            <article>
              <img src="../public/images/icon1.png"/>
              <h2>Declarative</h2>
              <p>React makes it<br />painless to create<br />interactive UIs.</p>
            </article>

            <article>
              <img src="../public/images/icon2.png"/>
              <h2>Components</h2>
              <p>Build encapsulated<br />components that<br />manage their state.</p>
            </article>

            <article>
              <img src="../public/images/icon3.png"/>
              <h2>Single-Way</h2>
              <p>A set of immutable<br />values are passed to<br />the component's.</p>
            </article>

            <article>
              <img src="../public/images/icon4.png"></img>
              <h2>JSX</h2>
              <p>Statically-typed,<br />designed to run on<br />modern browsers.</p>
            </article>
        </section>
    </React.Fragment>
  )
}

export default App;


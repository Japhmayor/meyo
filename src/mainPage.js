import Navbar from "./navbar";
import Jobs from "./Jobs";
import PageFooter from "./PageFooter";
import Projects from "./Projects";
import { IoMdHand } from "react-icons/io";

function MainPage() {
  document.body.style = "background: white";
  return (
    <>
      <Navbar />
      <div className="section">
        <h2 className="intro">
          Hey dear <IoMdHand />,
          <br /> my name is
          <span className="name"> Ikwechegh Ukandu.</span> <br />
          {/* <span>&lt;codename&gt; Meyo /&gt;</span> */}
          Developer, Designer and Teacher
        </h2>

        <p className="intro-text">
          I love connecting brands and companies with their customers through
          good design and code. I have written codes in C#, php, Go, python and
          Javascript. I'm currently dedicated to crafting frontend stuffs with{" "}
          <span className="vue">Vue </span>
          and <span className="react">React</span>. You'll see me playing games,
          watching a movie or arguing about politics when i'm not around a
          computer.
        </p>

        <p>
          <a className="mail-link name" href="mailto:mrbjm1994@gmail.com">
            Send an Email
          </a>
        </p>
      </div>
      <Jobs />
      <Projects />
      <PageFooter />
    </>
  );
}

export default MainPage;

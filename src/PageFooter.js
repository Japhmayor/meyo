import Info from "./Info";
import hng from "./hng.png";
import i4g from "./I4G.png";
import zuri from "./zuri.svg";
function PageFooter() {
  return (
    <footer>
      <p className="title">
        Designed & written by{" "}
        <a className="github-link cursive" href={Info.twitter}>
          Me
        </a>
        .
      </p>
      <div className="photos">
        <a href="https://hng.tech">
          <img className="fd" src={hng} alt="" />
        </a>
        <a href="https://zuri.team">
          <img className="fd" src={zuri} alt="" />
        </a>
        <a href="https://ingressive.org">
          <img className="fd" src={i4g} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default PageFooter;

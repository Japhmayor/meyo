import Info from "./Info";
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
    </footer>
  );
}

export default PageFooter;

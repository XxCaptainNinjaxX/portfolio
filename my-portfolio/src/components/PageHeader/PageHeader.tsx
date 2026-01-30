import "./PageHeader.css";
import Card from "../Card/Card.tsx";

interface HeaderProp {
  title: string;
}
export default function PageHeader(props: HeaderProp) {
  return (
    <div>
      <main className="main-content">
        <h2> {props.title}</h2>
        {/* <div className="video-grid">
          <a
            href="https://www.youtube.com/watch?v=4Nhz4QswAV0"
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <div className="video-thumbnail">
              <img
                src="https://i.ytimg.com/vi/4Nhz4QswAV0/hqdefault.jpg"
                alt="Episode 2"
              />
            </div>

            <div className="video-info">
              <span className="video-tag">
                Preseason NBA Eastern Confrence{" "}
              </span>
              <span className="video-views">46:01</span>
            </div>
          </a>
          <a href="#" className="video-card">
            <div className="video-thumbnail">Coming soon!</div>
            <div className="video-info">
              <span className="video-tag">-----</span>
              <span className="video-views">.... </span>
            </div>{" "}
          </a>
          <a href="#" className="video-card">
            <div className="video-thumbnail">Coming soon!</div>
            <div className="video-info">
              <span className="video-tag">-----</span>
              <span className="video-views">.... </span>
            </div>{" "}
          </a>
          <a href="#" className="video-card">
            <div className="video-thumbnail">Coming soon!</div>
            <div className="video-info">
              <span className="video-tag">-----</span>
              <span className="video-views">.... </span>
            </div>{" "}
          </a>
          <a href="#" className="video-card">
            <div className="video-thumbnail">Coming soon!</div>
            <div className="video-info">
              <span className="video-tag">-----</span>
              <span className="video-views">.... </span>
            </div>{" "}
          </a>
        </div> */}
      </main>
    </div>
  );
}

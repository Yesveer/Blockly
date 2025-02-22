import { ToastContainer } from "react-toastify";
import Midbar from "./../components/Midbar";
import Preview from "./../components/Preview";
import Sidebar from "./../components/Sidebar";
import "./Scratch.css";
function Scratch() {
  return (
    <div className="main">
      <div className="header">
        <div className="logo">Scratch Clone</div>
        <div className="git">
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="24"
              height="24"
            >
              <path
                d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
                fill="#FFFFFF"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="container">
        <Sidebar />
        <Midbar />
        <Preview />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Scratch;

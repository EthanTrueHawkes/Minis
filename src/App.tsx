import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <div className="card">
          <div className="title">
            <h2>File Upload</h2>
            <button className="close_button">X</button>
          </div>

          <div className="file_upload_area">
            <image />

            <div className="text_wrapper_upload">
              <h2>Drag & Drop files here</h2>
              <p>
                JPEG, PNG, PDF, and MP4 formats Up to 25 MB. We'll help fix
                incompatible files when possible.
              </p>
            </div>

            <div className="button_wrapper_upload">
              <button>Browse Files</button>
              <button>From URL</button>
            </div>
          </div>

          <div className="bottom_area_card">
            <div>
              <p>No files uploaded yet</p>
            </div>

            <div>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

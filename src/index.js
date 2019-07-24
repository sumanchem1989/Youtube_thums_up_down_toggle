import React from "react";
import ReactDOM from "react-dom";
import useToggle from "./useTogle";

import "./styles.css";

function App() {
  const [like, setLikeToggle] = useToggle(false);
  const [dislike, setDislikeToggle] = useToggle(false);

  console.log(like, dislike);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="likeDislike">
        <i
          onClick={() => {
            setLikeToggle();
            dislike && setDislikeToggle();
          }}
          className={
            like ? "material-icons active" : "material-icons md-inactive"
          }
        >
          thumb_up_alt
        </i>

        <div>
          <i
            onClick={() => {
              setDislikeToggle();
              like && setLikeToggle();
            }}
            className={
              dislike ? "material-icons active" : "material-icons md-inactive"
            }
          >
            thumb_down_alt
          </i>
        </div>
        {like || dislike ? (
          <div className="line" />
        ) : (
          <div className="line line-inactive" />
        )}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import "./styles.css";
import LineTo from "react-lineto";
import { SteppedLineTo } from "react-lineto";

export default function App() {
  let mappingattribuite = [
    {
      sourceAttribuite: "Jebus",
      targetAttribuite: "Beulah"
    },
    {
      sourceAttribuite: "John",
      targetAttribuite: "Jeba"
    }
  ];

  let sourceAttribuites = ["Asir", "Jebus", "John"];
  let targetAttribuites = ["Beulah", "Jeba"];
  let final = {
    source: sourceAttribuites,
    target: targetAttribuites
  };

  let iternaionLength =
    sourceAttribuites.length > targetAttribuites.length
      ? sourceAttribuites.length
      : targetAttribuites.length;

  return (
    <div className="container">
      {(() => {
        const rows = [];
        for (let i = 0; i < iternaionLength; i++) {
          rows.push(
            <div className="row">
              <div className="col-6">
                <div className={"source-" + final.source[i]}>
                  {final.source[i]}
                </div>
              </div>
              <div className="col-6">
                <div className={"target-" + final.target[i]}>
                  {final.target[i]}
                </div>
              </div>
            </div>
          );
        }
        return rows;
      })()}
      {mappingattribuite.map(item => (
        <SteppedLineTo
          from={"source-" + item.sourceAttribuite}
          to={"target-" + item.targetAttribuite}
          fromAnchor="right"
          toAnchor="left"
          orientation="h"
          borderColor={getRandomColor()}
          borderWidth="2px"
        />
      ))}
    </div>
  );
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

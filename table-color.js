import React from "react";
import "./styles.css";

export default function App() {
  var mappedAttribuite = [
    {
      sourceAttribuite: "Jebus",
      targetAttribuite: "Beulah"
    },
    {
      sourceAttribuite: "Jebus",
      targetAttribuite: "Rachel"
    },
    {
      sourceAttribuite: "Jeba",
      targetAttribuite: "John"
    },
    {
      sourceAttribuite: "Asir",
      targetAttribuite: "XXX"
    }
  ];

  var attribuiteColors = {};

  mappedAttribuite.forEach((ma, i) => {
    var colorCode = getRandomColor();
    checkAndAddNewKey(attribuiteColors, ma.sourceAttribuite, colorCode);
    checkAndAddNewKey(attribuiteColors, ma.sourceAttribuite, colorCode);
    for (let j = 0; j > i && j < mappedAttribuite.length; j++) {
      if (mappedAttribuite[j].sourceAttribuite === ma.sourceAttribuite) {
        checkAndAddNewKey(
          attribuiteColors,
          mappedAttribuite[j].sourceAttribuite,
          colorCode
        );
      }
    }
    // attribuiteColors.push({ attribute: ma.sourceAttribuite, color: colorCode });
  });

  return (
    <table>
      <tr>
        <th>Source</th>
        <th>Target</th>
      </tr>
      {mappedAttribuite.map(ma => {
        return (
          <tr>
            <td
              style={{ backgroundColor: attribuiteColors[ma.sourceAttribuite] }}
            >
              {ma.sourceAttribuite}
            </td>
            <td
              style={{ backgroundColor: attribuiteColors[ma.sourceAttribuite] }}
            >
              {ma.targetAttribuite}
            </td>
          </tr>
        );
      })}
    </table>
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

function checkAndAddNewKey(attribuiteColors, name, colorCode) {
  if (!attribuiteColors[name]) {
    // If key of name is not present add the new color code
    attribuiteColors[name] = colorCode;
  }
}

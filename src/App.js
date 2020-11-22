import * as React from "react"
import LinearGraph from "./components/d3/LinearGraph";
import {useEffect, useState} from "react";


const generateRandom = (m, l) => {
  return [...Array(+l)].map((_, x) => ({
    x: x,
    y: Math.random() * m
  }))
}

const App = () => {
  const [randomData, setRandomData] = useState(null)

  const [randomDataMod, setRandomDataMod] = useState(50)
  const [randomDataLen, setRandomDataLen] = useState(50)

  useEffect(() => {
    const data = generateRandom(randomDataMod, randomDataLen)
    setRandomData(data)
  }, [randomDataLen, randomDataMod])

  return (
    <div
      className="app"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign:"center"
      }}
    >
      <details open>
        <summary>Random data in graphs</summary>
        <details open>
          <summary>Linear graph</summary>
          <LinearGraph data={randomData} />
        </details>
        <div className="controls">
          <input
            type="range"
            max="100"
            value={randomDataMod}
            onInput={x => setRandomDataMod(x.target.value)}
          />
          <input
            style={{
              width: 500
            }}
            type="range"
            max="1000"
            value={randomDataLen}
            onInput={x => setRandomDataLen(x.target.value)}
          />
        </div>
        Max: {randomDataMod} <br />
        Len: {randomDataLen}
        <details open>
          <summary>Data</summary>
          {randomData && randomData.map((item, k) => {
            return <p key={k}>{item.x}: {item.y}</p>
          })}
        </details>
      </details>
    </div>
  );
}

export default App;

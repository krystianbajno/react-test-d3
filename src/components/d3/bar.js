import * as d3 from "d3"

const bar = (hook, data) => {
  const margin = {left: 30, bottom: 30}
  const width = 1000
  const height = 300

  const svg = d3.select(hook)
    .append("svg")
    .attr("width", width)
    .attr("height", height + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, 0)`);

  const update = (data) => {
    svg.selectAll("rect").remove()
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => (width / data.length) * i)
      .attr("y", (d, i) => height - d.y)
      .attr("width", width / data.length)
      .attr("height", (d) => d.y)
      .attr("fill", d => {
        return "rgb(0, 0, " + Math.round(d.y * 10) + ")"
      })
  }

  update(data)

  return (data) => update(data)
}

export default bar;
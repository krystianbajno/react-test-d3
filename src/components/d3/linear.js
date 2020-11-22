import * as d3 from "d3"

const linear = (hook, data) => {
  // set the dimensions and margins of the graph
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
    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => +d.x))
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => +d.y)])
      .range([height, 0]);

    svg.selectAll('.axis').remove()

    // axis bottom
    svg.append("g")
      .attr('class', 'axis')
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // left axis
    svg.append("g")
      .attr('class', 'axis')
      .call(d3.axisLeft(y));

    // fn
    svg.append("path")
      .attr('class', 'axis')
      .data([data])
      .attr("fill", '#beccff')
      .attr("stroke", "blue")
      .attr("stroke-width", 3.5)
      .attr("d", d3.line()
        .x(d => x(d.x))
        .y(d => y(d.y))
      )
  }

  update(data)

  return (data) => update(data)
}

export default linear;
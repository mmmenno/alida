<template>
  <div class="alida" v-on:click="showPopup(null, $event)">
    <header>
      <div class="title" :style="`background-image: url(${require('@/assets/lines.svg')});`">
        <h1>{{ msg }}</h1>
      </div>
      <h2>Amsterdam Linked Data</h2>
    </header>
    <section>
      <svg class="graph" :width="`${graph.width}px`"
        :viewBox="graph.viewBox && graph.viewBox.join(' ')"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g :transform="graph.transform">
          <g v-for="(node) in graph.nodes"
            v-bind:class="{
              node: true,
              selected: popup && node.index === popup.datasetIndex,
              faded: !intersect(checkedTags, datasets[node.index].tags)
            }"
            v-on:click="showPopup(node.index, $event)" :key="node.name">
            <g class="edge-blobs">
              <path v-for="(path, index) in node.edges.in" :d="path" :key="`in${index}`" class="edge-blob-in" />
              <path v-for="(path, index) in node.edges.out" :d="path" :key="`out${index}`" class="edge-blob-out" />
            </g>
            <title>{{ node.name }}</title>

            <ellipse v-for="color in colors" class="colored-ellipse" :key="color"
              :style="`fill: ${color};`"
              :cx="node.cx" :cy="node.cy" :rx="node.rx" :ry="node.ry" />

            <ellipse :cx="node.cx" :cy="node.cy" :rx="node.rx" :ry="node.ry" />

            <text :x="node.cx" :y="node.cy + 4">
              {{ node.name }}
            </text>
          </g>
          <g v-for="edge in graph.edges" class="edge" :key="edge.edge.join('-')">
            <path v-for="(path, index) in edge.paths" :d="path" :key="`path${index}`" />
            <polygon v-for="(polygon, index) in edge.polygons" :points="polygon" :key="`polygon${index}`" />
          </g>
        </g>
      </svg>
      <div>
        <div>
          <Popup v-if="popup"
            :dataset="datasets[popup.datasetIndex]"
            :location="popup.location" :width="popup.width" />
        </div>
        <!-- <fieldset>
          <legend>Filter by tag</legend>
          <div v-for="tag in tags" :key="tag">
            <input  type="checkbox" :id="`tags-${tag}`"
              name="tags" :value="tag" v-model="checkedTags">
            <label :for="`tags-${tag}`">{{ tag }}</label>
          </div>
        </fieldset> -->
      </div>
    </section>
    <section>
      <h2>ALiDa</h2>
      <p>
        ALiDa, the Amsterdam Linked Data cloud, visualises LOD resources on Amsterdam history.
        By linking to each other and using shared vocabularies, together they spin a web of data
        that facilitates research on a whole new level. The datasets in ALiDa are the backbone
        of the <a href="https://amsterdamtimemachine.nl/">Amsterdam Time Machine</a>.
      </p>
      <h2>Add your data</h2>
      <p>
        Do you want your data to be a part of ALiDa?
        If your dataset is linked, open and about Amsterdam history, it should!
        Please read more on requirements and procedure
        in the section <em><a href="https://amsterdamtimemachine.nl/data/alida/">Contributing your dataset to the ALiDa cloud</a></em>.
      </p>
    </section>
    <footer>
      <img :src="require('@/assets/lines-straight.svg')" />
    </footer>
  </div>
</template>

<script>
import Popup from './Popup.vue'

import axios from 'axios'
// import Rough from 'roughjs'
import {render, Module} from 'viz.js/lite.render.js'

const VIZ_DEFAULTS = {
  files: [],
  format: 'svg',
  engine: 'dot'
}

// const svg = document.createElement('svg')
// const roughSvg = Rough.svg(svg)
// const path = roughSvg.path('M37,17v15H14V17z M50,0H0v50h50z')
// console.log(path)

function getPopupStyle (width, diffX) {
  const left = Math.round((width / 2 + diffX) / width * 100)
  return `
    .popup:after,
    .popup:before {
      left: ${left}% !important;
  }`
}

function dotGraphFromDatasets (datasets) {
  return `strict digraph {
    #concentrate=true;
    node [fontname="monospace" margin=0.06];

  ${datasets.map((dataset) => dataset
    .outgoinglinks
    .map((link) =>
      `"${dataset.name}" -> "${link}";`
     ).join('\n')).join('\n')}
  }`
}

function renderDatasetGraph (datasets) {
  const options = Object.assign({}, VIZ_DEFAULTS)
  const module = Module(options)

  const dot = dotGraphFromDatasets(datasets)
  const svg = render(module, dot, options)

  return svg
}

function stringToDOM (string) {
  const parser = new DOMParser()
  return parser.parseFromString(string, 'text/xml')
}

function getPopupLocation (element) {
  const rect = element.getBoundingClientRect()

  return {
    x: window.scrollX + rect.left + rect.width / 2,
    y: window.scrollY + (rect.top + rect.bottom) / 2 + rect.height / 2 + 12
  }
}

export default {
  name: 'ALiDa',
  components: {
    Popup
  },
  props: {
    msg: String
  },
  data () {
    return {
      datasets: undefined,
      popup: undefined,
      popupStyle: undefined,
      tags: [],
      checkedTags: [],
      svg: '',
      graph: {
        nodes: [],
        edges: [],
        viewBox: undefined,
        width: 0,
        height: 0
      },
      colors: [
        '#5CBD70',
        '#0099CD',
        '#EE275F'
      ]
    }
  },
  methods: {
    intersect: function (a, b) {
      let intersection = new Set(
        [...a].filter((tag) => new Set(b).has(tag))
      )

      return intersection.size > 0
    },
    showPopup: function (index, event) {
      if (index === null || (this.popup && this.popup.datasetIndex === index)) {
        this.popup = undefined
        event.stopPropagation()
      } else if (index >= 0) {
        const location = getPopupLocation(event.target)

        const width = Math.min(300, document.body.clientWidth)
        // console.log(width, document.body.clientWidth)


        location.x -= Math.round(width / 2)

        var padding = 10
        var minX = padding
        var maxX = document.body.clientWidth - padding - width
        var diffX = 0

        if (location.x < minX) {
          diffX = location.x - minX
          location.x = minX
        } else if (location.x > maxX) {
          diffX = location.x - maxX
          location.x = maxX
        }

        if (!this.popupStyle) {
          this.popupStyle = document.createElement('style')
          document.head.appendChild(this.popupStyle)
        }

        this.popupStyle.innerHTML = getPopupStyle(width, diffX)

        this.popup = {
          datasetIndex: index,
          location,
          width
        }

        event.stopPropagation()
      }
    }
  },
  mounted () {
    axios
      .get('/alida.json')
      .then((response) => {
        this.datasets = response.data

        const tags = [...this.datasets
          .reduce((tags, dataset) =>
            new Set([...tags, ...dataset.tags]),
            new Set()
          )]

        this.tags = tags
        this.checkedTags = [...tags]

        return this.datasets
      })
      .then((datasets) => {
        const svgPadding = 10

        const svgString = renderDatasetGraph(datasets)
        const dom = stringToDOM(svgString)

        const svg = dom.querySelector('svg')
        const graph = dom.querySelector('.graph')

        const width = parseInt(svg.getAttribute('width')) + svgPadding * 2
        const height = parseInt(svg.getAttribute('height')) + svgPadding * 2

        const viewBox = svg.getAttribute('viewBox')
          .split(' ')
          .map((n, i) => Math.round(parseInt(n)))
          .map((n, i) => n + (i < 2 ? -svgPadding : svgPadding * 2))

        const transform = graph.getAttribute('transform')

        const domEdges = dom.querySelectorAll('.edge')
        const domNodes = dom.querySelectorAll('.node')

        const outEdgesPerNode = {}
        const inEdgesPerNode = {}

        const edges = Array.from(domEdges)
          .map((edge, index) => {
            // TODO: '->' or '-&gt;'
            const fromTo = edge.querySelector('title').innerHTML.split('-&gt;')

            const paths = edge.querySelectorAll('path')
            const polygons = edge.querySelectorAll('polygon')

            const ds = Array.from(paths).map((path) => path.getAttribute('d'))

            outEdgesPerNode[fromTo[0]] = outEdgesPerNode[fromTo[0]] ? [ds, ...outEdgesPerNode[fromTo[0]]] : [ds]
            inEdgesPerNode[fromTo[1]] = inEdgesPerNode[fromTo[1]] ? [ds, ...inEdgesPerNode[fromTo[1]]] : [ds]

            return {
              edge: fromTo,
              paths: ds,
              polygons: Array.from(polygons).map((polygon) => polygon.getAttribute('points'))
            }
          })

        const nodes = Array.from(domNodes)
          .map((node) => {
            const name = node.querySelector('title').innerHTML
            const ellipse = node.querySelector('ellipse')

            let index = 0
            this.datasets.some((dataset, currentIndex) => {
              index = currentIndex
              return dataset.name === name
            })

            return {
              index,
              name,
              cx: parseFloat(ellipse.getAttribute('cx')),
              cy: parseFloat(ellipse.getAttribute('cy')),
              rx: parseFloat(ellipse.getAttribute('rx')),
              ry: parseFloat(ellipse.getAttribute('ry')),
              edges: {
                in: inEdgesPerNode[name],
                out: outEdgesPerNode[name]
              }
            }
          })

        this.graph = {
          width,
          height,
          viewBox,
          transform,
          nodes,
          edges
        }
      })
  }
}
</script>

<style scoped>
.alida {
  margin: 0.5em;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
}

header .title {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
}

header h1 {
  position: relative;
  top: -5px;
  margin: 0;
  font-size: 5em;
  line-height: .9;
  font-weight: bold;
  mix-blend-mode: hard-light;
  text-shadow: 0 0 2px white;
}

header h2 {
  margin: 0;
}

.graph {
  width: 100%;
  margin: 1em 0;
}

fieldset {
  border: none;
}

footer {

}

.node {
  cursor: pointer;
  transition: opacity 0.2s;
}

.node ellipse {
  fill: white;
  stroke: black;
  stroke-width: 1px;
  transition: fill 0.2s, stroke-width 0.2s;
  mix-blend-mode: screen;
}

.node:hover ellipse,
.node.selected ellipse {
  fill: rgba(255, 255, 255, 0);
  stroke-width: 2px;
}

.node .colored-ellipse {
  stroke: none;
  transition: transform 0.2s;
}

.node.selected .colored-ellipse:nth-of-type(1),
.node:hover .colored-ellipse:nth-of-type(1) {
  transform: translate(6px, 3px);
}

.node.selected .colored-ellipse:nth-of-type(2),
.node:hover .colored-ellipse:nth-of-type(2) {
  transform: translate(-6px, 2px);
}

.node.selected .colored-ellipse:nth-of-type(3),
.node:hover .colored-ellipse:nth-of-type(3) {
  transform: translate(5px, -6px);
}

.node.faded {
  opacity: 0.2;
}

.node:hover ellipse {
  stroke-width: 2px;
  /* fill: #7ACBBF; */
}

.node text {
  fill: black;
  text-anchor: middle;
  /* font-family: monospace; */
  font-size: 12px;
  font-weight: 500;
}

.edge path {
  fill: none;
  stroke: black;
  stroke-width: 1px;
  mix-blend-mode: difference;
}

.edge polygon {
  fill: black;
  stroke: black;
}

.node .edge-blobs path {
  fill: none;
  mix-blend-mode: difference;

  stroke-width: 0;
  transition: stroke-width 0.3s;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.node .edge-blobs .edge-blob-in,
.node .edge-blobs .edge-blob-out {
  /* stroke: rgba(220, 220, 220, 0.8); */
  stroke: black;
}

.node.selected .edge-blobs path {
  stroke-width: 3px;
}

.node:hover .edge-blobs path {
  stroke-width: 3px;
}
</style>

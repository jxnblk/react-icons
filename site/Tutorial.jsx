
var React = require('react')
var H2 = require('./H2.jsx')
var H3 = require('./H3.jsx')
var Cog = require('../Cog')
var Highlight = require('./Highlight.jsx')
var Markdown = require('./Markdown.jsx')

var Tutorial = React.createClass({

  render: function() {
    return (
      <div className="prose">
        <p>
          While traditional graphics software applications like Adobe Illustrator work well for certain tasks,
          they fall short when attempting to create pixel perfect, mathematically derived graphics.
          Anyone who’s attempted to create data visualizations with such software might better understand these limitations,
          and JavaScript libraries like D3 have helped out tremendously.
          Certain types of illustrations and icons can also be difficult to create,
          and Illustrator leaves a lot of room for error.
        </p>
        <Cog />
        <code>replace with sketch</code>
        <p>
          Take a settings cog icon as an example.
          It’s often based on three concentric circles,
          where lines from each tooth must intersect at points not easily determined within a two dimensional grid,
          and relies on radial symmetry.
          Luckily, some middle school level math can help out,
          and JavaScript excels at making these sorts of calculations.
        </p>
        <p>
          Using a library like React allows coupling of concerns between
          the math involved and the resulting svg markup,
          and it provides an easy way to render static markup.
          This tutorial focuses on using React as a stand-alone exploratory design tool,
          rather than a way to implement SVG icons within a React application.
        </p>

        <H2>Making a Cog Icon</H2>
        <Cog />
        <p>
          A cog icon is a good example of an icon based on radial symmetry
          and something not easy to create in traditional design software.
          Rotating parts of the icon in Illustrator
          inevitably leads to inaccurate rendering and requires
          running transformations any time something is adjusted.
        </p>
        <p>
          Looking at the sketch of this icon, here are some properties that will be handled with JavaScript variables:
        </p>
        <ul>
          <li>Overall dimensions</li>
          <li>Three concentric with three different radii</li>
          <li>Any number of flat-edged, splayed teeth around the outside</li>
          <li>Fill color for the SVG</li>
        </ul>

        <H2>Initial Setup</H2>
        <p>
          To get started, you should have <a href="https://nodejs.org/" target="_blank">Node.js</a> installed as well as a basic understanding of using npm and JavaScript modules.
          Initialize a new npm package and install react and react-tools
        </p>
        <Highlight>npm init</Highlight>
        <Highlight>npm i --save-dev react react-tools</Highlight>
        <p>
          Now create a <code>build.js</code> script which will be used to render the static SVG.
        </p>
        <Highlight>build.js example</Highlight>
        <p>
          This build script imports the Cog component, renders it to static markup, and saves the file in the <code>icons</code> folder.
        </p>
        <p>
          Next create a <code>src</code> folder and a new <code>Cog.jsx</code> file.
        </p>
        <Highlight>Cog.jsx example</Highlight>
        <Highlight>package.json scripts example</Highlight>
        <Highlight>npm run jsx</Highlight>
        <Highlight>npm run build</Highlight>
        <p>xmlns in React</p>
        <Highlight>npm run watch:jsx</Highlight>

        <H2>Defining Radii and Other Values</H2>
        <p>
          Center
          Modular scale based on size
          Outer, middle, inner
          number of teeth
        </p>
        <p>angle, offset</p>

        <p>viewBox, width and height</p>
        <p>fill</p>

        <H2>Path Data</H2>

        <H2>Function to Build Teeth</H2>

        <H3>Start with a Polygon</H3>
        <p>Prevent scientific notation</p>
        <p>Degrees to radians function</p>
        <p>Functions to calculate x/y coordinates on a circle</p>
        <pre>circle x/y diagram</pre>
        <p>Functions for offsetting corners of cog tooth</p>
        <pre>right triangle diagram</pre>

        <H3>Line to middle circle</H3>
        <H3>Splay</H3>
        <H3>Inner circle</H3>

        <H2>Live Example</H2>
        <p>size, middle, inner, teeth, splay</p>

        <hr />
        <H3>Test</H3>
        <Highlight jsx>
          <Cog />
        </Highlight>
        <Highlight>
          {this.props.code.svgComponent1}
        </Highlight>
      </div>
    )
  }

})

module.exports = Tutorial


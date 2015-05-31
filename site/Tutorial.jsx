
var React = require('react')
var H2 = require('./H2.jsx')
var H3 = require('./H3.jsx')
var Cog = require('../Cog')
var Highlight = require('./Highlight.jsx')
var Square = require('./examples/Square.jsx')
//var Markdown = require('./Markdown.jsx')

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
        <p>
          Take a settings cog icon as an example.
          It relies on radial symmetry and is based on three concentric circles,
          where lines from each tooth must intersect at points not easily determined within a two dimensional grid.
          Creating something like this in graphics software
          would require using transformations every time an adjustment is made.
          Luckily, some basic math can help out,
          and JavaScript excels at making these sorts of calculations.
        </p>
        <p>
          Using a library like React allows coupling between
          the math involved and the resulting svg markup,
          and it provides an easy way to render static markup.
          This tutorial focuses on using React as a stand-alone exploratory design tool,
          rather than a way to implement SVG icons within a React application.
        </p>

        <H2>Making a Cog Icon</H2>
        <Cog />
        <pre>replace with sketch</pre>
        <p>
          Looking at this sketch, there are some properties that can be handled with JavaScript variables:
        </p>
        <ul>
          <li>Overall dimensions</li>
          <li>Three concentric with three different radii</li>
          <li>The number of flat-edged, splayed teeth around the outside</li>
          <li>Fill color for the SVG</li>
        </ul>

        <H2>Initial Setup</H2>
        <p>
          To get started, you should have <a href="https://nodejs.org/" target="_blank">Node.js</a> installed as well as a basic understanding of using npm and JavaScript modules.
          Initialize a new npm package and install react and react-tools
        </p>
        <Highlight code="npm init" />
        <Highlight code="npm i --save-dev react react-tools" />
        <p>
          Now create a <code>build.js</code> script which will be used to render the static SVG.
        </p>
        <Highlight code={this.props.code.build1} />
        <p>
          This build script imports the Cog component, renders it to static markup, and saves the file in the <code>icons</code> folder.
        </p>
        <p>
          Next create a <code>src</code> folder and a new <code>Cog.jsx</code> file.
        </p>
        <Highlight code={this.props.code.svgComponent1} />
        <p>
          Next add some scripts to <code>package.json</code>.
        </p>

        <Highlight code={this.props.code.packageScripts} />
        <Highlight code="npm run jsx" />
        <Highlight code="npm run build" />

        <H3>The xmlns Attribute in React</H3>
        <p>
          At the time of this writing, React strips the xmlns attribute from the SVG.
          When using the SVG inline in HTML, this shouldn’t be a problem,
          but when using it as an image, the attribute is needed.
          To get around this limitation, add a wrapping SVG tag in <code>build.js</code>.
        </p>
        <Highlight code={this.props.code.build2} />
        <H3>Watching Changes</H3>
        <p>
          To watch changes as the icon is developed run the watch:jsx command to transpile the jsx file to js.
        </p>
        <Highlight code="npm run watch:jsx" />
        <p>
          Make a folder called <code>icons</code> and run <code>npm run build</code> to save a new SVG.
          Open the SVG file in a browser to see the icon as it progresses.
          At this point, it should appear blank.
          Open web inspector to ensure that the SVG wrapper is there.
        </p>

        <H2>Default Props</H2>
        <p>
          To allow for adjustments to be made from the build script, the icon will use React props.
          Define some defaults in <code>Cog.jsx</code>.
        </p>
        <Highlight code={this.props.code.defaultProps} />
        <p>
          The width and height of the square-shaped icon will be handled with <code>size</code>.
          The diameters <code>d1</code>, <code>d2</code>, and <code>d3</code> represent ratios
          of the size for each concentric circle.
          The number of teeth on the cog will be handled with the <code>teeth</code> prop.
          The <code>splay</code> prop represents the angle for the side of each tooth and will be explained later.
          And the <code>fill</code> is set to <code>currentcolor</code> to inherit color when used inline in HTML.
        </p>


        <H2>Defining Radii and Other Values</H2>
        <p>
          Within the render function, use these props to define other values that will be used to create the icon.
        </p>
        <Highlight code={this.props.code.renderVariables} />
        <p>
          The center of the icon is defined as <code>c</code>. The angle for each tooth is calculated based on the number of teeth. <code>offset</code> is used to rotate the icon 90° to ensure that the first tooth is at the top. 
        </p>

        <H2>Path Data</H2>
        <p>
          The <code>pathData</code> variable will be used for the path element’s <code>d</code> attribute.
          The value for this attribute is a string of commands used to draw a line.
          Letters represent different commands and numbers represent position in the x/y coordinate system.
          Uppercase letters are used for absolute coordinates, while lowercase is used for relative coordinates.
          This tutorial only uses absolute coordinates, so each letter must be uppercase.
          Only three commands will be used to create the icon: Move <code>M</code>, Line To <code>L</code>, and Arc <code>A</code>.
          To read more about the SVG path element, see this <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths" target="_blank">MDN Tutorial</a>.
        </p>
        <p>
          The <code>pathData</code> variable is constructed with an array followed by the <code>.join()</code> method.
          This is to more easily combine path commands and numbers and ensure that the values have a space between each one.
        </p>
        <p>
          To demonstrate how the path commands work, the following should create a rectangle based on the coordinates given.
        </p>
        <Square />
        <Highlight code={this.props.code.pathSquare} />

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

      </div>
    )
  }

})

module.exports = Tutorial


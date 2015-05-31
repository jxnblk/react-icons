
var React = require('react')
var H2 = require('./H2.jsx')
var Cog = require('../Cog')
var Highlight = require('./Highlight.jsx')

var Square = require('./examples/Square.jsx')
var Polygon = require('./examples/Polygon.jsx')
var SunBurst = require('./examples/SunBurst.jsx')
var FlatTeeth = require('./examples/FlatTeeth.jsx')
var Splayed = require('./examples/Splayed.jsx')
var CircleXY = require('./CircleXY.jsx')
var Demo = require('./Demo.jsx')
var TweetButton = require('./TweetButton.jsx')

var Tutorial = React.createClass({

  render: function() {
    return (
      <div className="prose">
        <p>
          While traditional graphics applications like Adobe Illustrator work well for certain tasks,
          they fall short when used to create pixel perfect, mathematically-derived graphics.
          Anyone who’s attempted to create data visualizations with such software might better understand these limitations.
          And whilte JavaScript libraries like D3 have helped out tremendously,
          certain types of illustrations and icons can also be difficult to create,
          and tools like Illustrator leave a lot of room for error.
        </p>
        <div className="center mb2">
          <Cog size={128} />
        </div>
        <p>
          Take a settings cog icon as an example.
          It relies on radial symmetry and is based on three concentric circles,
          where lines from each tooth must intersect at points not easily determined within a two dimensional grid.
          Creating something like this in graphics software
          would require using transformations every time an adjustment is made.
          Luckily, some basic math can help out, and JavaScript excels at making these sorts of calculations.
        </p>
        <p>
          Using a library like React allows for coupling between
          the math involved and the SVG code,
          and it provides an easy way to render static markup.
        </p>
        <p className="h5">
          Note: this tutorial focuses on using React as a stand-alone exploratory design tool,
          rather than as a way to implement SVG icons within a React application.
        </p>

        <H2>Making a Cog Icon</H2>
        <pre>TK sketch image</pre>
        <p>
          Looking at this sketch, there are some properties that can be handled with JavaScript variables:
        </p>
        <ul>
          <li>Overall dimensions</li>
          <li>The radii for the three concentric circles</li>
          <li>The number of flat-edged, splayed teeth around the outside</li>
          <li>The angle of each tooth</li>
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
          This build script imports the Cog component, renders it to static markup,
          and saves the file in the <code>icons</code> directory.
        </p>
        <p>
          Go ahead and make a new directory for the icons.
        </p>
        <Highlight code="mkdir icons" />
        <p>
          Next create a <code>src</code> folder and a new <code>Cog.jsx</code> file.
        </p>
        <Highlight code={this.props.code.svgComponent1} />
        <p>
          Next add some scripts to <code>package.json</code>.
        </p>

        <Highlight code={this.props.code.packageScripts} />
        <p>
          Run the following scripts to compile <code>Cog.jsx</code> to plain JavaScript,
          and to create an SVG named <code>cog-icon.svg</code>
        </p>
        <Highlight code="npm run jsx" />
        <Highlight code="npm run build" />

        <H2>The xmlns Attribute in React</H2>
        <p>
          At the time of this writing, React strips the xmlns attribute from the SVG.
          When using the SVG inline in HTML, this shouldn’t be a problem,
          but when using it as an image, the attribute is needed.
          To get around this limitation, add a wrapping SVG tag in <code>build.js</code>.
        </p>
        <Highlight code={this.props.code.build2} />

        <p>
          After making these changes, run <code>npm run build</code> to rebuild the SVG.
          Open the SVG file in a browser to see the icon as it progresses.
          At this point, it should appear blank,
          but you can open web inspector to ensure that the SVG wrapper is there.
        </p>

        <H2>Watching Changes</H2>
        <p>
          To watch changes as the icon is developed, run the watch:jsx command to transpile the jsx file to js.
        </p>
        <Highlight code="npm run watch:jsx" />
        <p>
          For each change you’ll need to rerun the build script.
          While you can also set up watching for the build script, this is beyond the scope of the tutorial.
        </p>

        <H2>Default Props</H2>
        <p>
          To allow for adjustments to be made from the build script, the icon will use React props.
          Define some defaults in <code>Cog.jsx</code>.
        </p>
        <Highlight code={this.props.code.defaultProps} />
        <p>
          The width and height of the square-shaped icon will be handled with the <code>size</code> prop.
          The diameters <code>d1</code>, <code>d2</code>, and <code>d3</code> represent ratios
          of the size for each concentric circle.
          The number of teeth on the cog will be handled with the <code>teeth</code> prop.
          The <code>splay</code> prop represents the angle for the side of each tooth and will be explained later.
          And the <code>fill</code> prop is set to <code>currentcolor</code> to inherit color when used inline in HTML.
        </p>

        <H2>Defining Radii and Other Values</H2>
        <p>
          Within the render function, use these props to define other values that will be used to create the icon.
        </p>
        <Highlight code={this.props.code.renderVariables} />
        <p>
          The center of the icon is defined as <code>c</code>.
          The angle for each tooth is calculated based on the number of teeth.
          And <code>offset</code> is used to rotate the icon 90° to ensure that the first tooth is at the top. 
        </p>

        <H2>Path Data</H2>
        <p>
          The <code>pathData</code> variable will be used for the path element’s <code>d</code> attribute.
          The value for this attribute is a string of commands used to draw a line.
          Letters represent different commands and numbers represent positions in the x/y coordinate system.
          Uppercase letters are used for absolute coordinates, while lowercase is used for relative coordinates.
          This tutorial only uses absolute coordinates, so each letter must be uppercase.
          Only three commands will be used to create the icon:
          Move <code>M</code>, Line To <code>L</code>, and Arc <code>A</code>.
          To read more about the SVG path element,
          see this <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths" target="_blank">MDN tutorial</a>.
        </p>
        <p>
          The <code>pathData</code> variable is constructed with an array followed by the <code>.join()</code> method.
          This is to more easily combine path commands and numbers and ensure that the values have a space between each one.
        </p>
        <p>
          To demonstrate how the path commands work, the following should create a rectangle based on the coordinates given.
        </p>
        <div className="center">
          <Square />
        </div>
        <Highlight code={this.props.code.pathSquare} />

        <H2>Building Teeth</H2>
        <p>
          To create teeth around the outer circle based on the number given in the <code>teeth</code> prop,
          a function will be used to return the values for each point.
          To calculate the x/y coordinates for each point around the outer circle, add the following functions.
        </p>
        <Highlight code={this.props.code.rxRy} />
        <p>
          The <code>rad</code> function converts degrees to radians for convenience
          and since the <code>Math.cos</code>, <code>Math.sin</code>, and <code>Math.tan</code> functions
          all require radians.
          The <code>rx</code> and <code>ry</code> functions calculate the x and y coordinates
          respectively based on the radius and angle.
        </p>
        <figure className="center mb3">
          <CircleXY />
          <figcaption>The <code>rx</code> and <code>ry</code> functions being used to find coordinates along a circle</figcaption>
        </figure>
        <p>
          Start with a polygon to see how the <code>teeth</code> prop can be adjusted to create different numbers of points.
        </p>
        <Highlight code={this.props.code.drawPolygon} />
        <figure className="center py2">
          <Polygon />
          <Polygon teeth={7} />
          <Polygon teeth={6} />
          <Polygon teeth={5} />
          <figcaption>Polygons with 8, 7, 6, and 5 points</figcaption>
        </figure>
        <p>
          Passing the number of teeth to the <code>drawTeeth</code> function, it loops through and calculates each angle with the offset defined above.
          Using a ternary operator, it either moves to the first point or draws a line to subsequent points.
          The x and y coordinates are calculated with the <code>rx</code> and <code>ry</code> functions.
          Then each command is pushed to the <code>d</code> array, and it is return as a string.
        </p>
        <p>
          Since Math functions are calculating numbers that are being converted to strings for the <code>d</code> attribute,
          JavaScript will convert extremely small numbers to scientific notation.
          To prevent this from happening, the <code>num</code> function is used to return <code>0</code> for small numbers.
        </p>

        <H2>Shaping the Teeth</H2>
        <p>
          Now that the function to loop through the number of teeth is set up,
          change the commands in the <code>line</code> array to draw lines to the inner circle of the cog.
        </p>
        <div className="center">
          <SunBurst />
        </div>
        <Highlight code={this.props.code.sunBurst} />
        <H2>The Arc Command</H2>
        <p>
          Here the Arc <code>A</code> command is being used to draw part of the inner circle.
          The first two values in the Arc command represent the x and y radii.
          The next three values are booleans representing the <code>x-axis-rotation</code>, <code>large-arc-flag</code>, and the <code>sweep-flag</code>.
          The third value is set to <code>1</code> (true) to ensure the arc curves in the right direction.
          The last two values are the x and y coordinates for where the arc should end.
          To read more about the Arc command see this <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Arcs" target="_blank">MDN tutorial</a>.
        </p>
        <p>
          Currently, this function arbitrarily adds and subtracts 6° to the angle to create the teeth.
          Add the following to the render function to calculate the angles based on the number of teeth.
        </p>
        <Highlight code={this.props.code.flatTeeth} />
        <p>
          The tooth angle <code>ta</code> is one-fourth of the angle for each tooth.
          The tooth width <code>tw</code> is based on that angle.
          The <code>tx</code> and <code>ty</code> functions are used to calculate the x and y coordinates based on angle and distance.
          These functions and values are added to the line array to offset points for the corners of the teeth and the points at which they intersect the inner circle.
        </p>
        <pre className="display-none">right triangle diagram</pre>
        <div className="center">
          <FlatTeeth />
        </div>

        <H2>Splayed Teeth</H2>
        <p>
          The icon is starting to take shape, but the sides of each tooth are based on angles from the center.
          To splay the sides of the teeth in the other direction, edit the <code>tw</code> variable as shown below.
        </p>
        <Highlight code={this.props.code.splay} />
        <p>
          Splay, defined earlier in default props, represents a ratio of the tooth angle.
          Since it’s a prop, adjustments to this angle can be made from the build script.
          For the tooth width, the splay angle is subtracted from the tooth angle.
        </p>
        <p>
          For the <code>drawTeeth</code> function,
          splay is added and subtracted from the angles at which the side of the tooth should intersect the inner circle.
        </p>
        <Highlight code={this.props.code.splayDraw} />
        <div className="center">
          <Splayed />
        </div>

        <H2>Adding a Hole</H2>
        <p>
          Now all that’s left is to add the hole in the center.
          To create a circle that subtracts (or punches) from the outer shape,
          use two Arc commands to draw a circle in a counterclockwise direction.
          With the path element, intersecting shapes subtract from each other when they are drawn in opposite directions.
        </p>
        <Highlight code={this.props.code.hole} />
        <p>
          Now you should have an adjustable cog icon similar to the one below.
          View the complete source code for the cog icon on <a href="https://github.com/jxnblk/react-icons/blob/master/src/Cog.jsx">GitHub</a>.
          Hopefully you can see how with just a little bit of math,
          React can be a powerful tool for creating flexible and precise SVG graphics.
        </p>

        <div className="py3">
          <H2>Live Demo</H2>
          <Demo />
        </div>

        <div className="center py3">
          <TweetButton />
        </div>


      </div>
    )
  }

})

module.exports = Tutorial


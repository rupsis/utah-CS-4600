# Project 03 - Curves

(Note, the background doesn't seem to load in FireFox, currently working in Chrome.)

The project mostly focuses on getting webGL to work, rather than implementing any of the curve algorithms. 



## WebGL Basics

The pipeline consists of 3 steps: `Vertex Shader` -> `Rasterizer` -> `Fragment Shader`
WebGL **Only** has a vertex and a fragment shader. 


Any method that updates a shared variable (GPU allocated memory), need to bind to a program:  `gl.useProgram(prog)`.
In WebGL, we can have multiple programs running. 

Uniforms and Attributes are defined and used by the shaders, and generally are passed along and modified by the program. 

```
// in the vertex shader:

// define a 2D vector
uniform vec2 p0;


// in the source code:

// getting the Uniform variable, and setting it as a class member
this.p0 = gl.getUniformLocation( this.prog, 'p0' );

...
// updating the uniform variable with new data
gl.uniform2fv(this.p0, p[0]);

```

## Links:
* [Course Files](https://graphics.cs.utah.edu/courses/cs4600/fall2020/?prj=3)
* [WebGL Cheat Sheet](https://www.khronos.org/files/webgl20-reference-guide.pdf)
* [WebGL Square Example](https://graphics.cs.utah.edu/courses/cs4600/fall2020/square.html)

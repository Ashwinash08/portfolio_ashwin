import { useRef, useEffect } from 'react';

const LightPillar = ({
    topColor = '#5227FF',
    bottomColor = '#FF9FFC',
    intensity = 1.0,
    rotationSpeed = 0.3,
    glowAmount = 0.005,
    pillarWidth = 3.0,
    pillarHeight = 0.4,
    noiseIntensity = 0.5,
    pillarRotation = 0,
    interactive = false,
    mixBlendMode = 'normal',
}) => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        // Vertex shader
        const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

        // Fragment shader
        const fragmentShaderSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec3 u_topColor;
      uniform vec3 u_bottomColor;
      uniform float u_intensity;
      uniform float u_rotationSpeed;
      uniform float u_glowAmount;
      uniform float u_pillarWidth;
      uniform float u_pillarHeight;
      uniform float u_noiseIntensity;
      uniform float u_pillarRotation;
      uniform vec2 u_mouse;
      uniform bool u_interactive;

      // Noise function
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec2 center = vec2(0.5, 0.5);
        
        if (u_interactive) {
          center = u_mouse;
        }
        
        // Apply rotation
        float angle = u_time * u_rotationSpeed + u_pillarRotation;
        mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        vec2 rotatedUV = rotation * (uv - center) + center;
        
        // Create pillar effect
        float dist = abs(rotatedUV.x - center.x);
        float pillar = smoothstep(u_pillarWidth * 0.01, 0.0, dist);
        
        // Add vertical gradient
        float verticalGradient = smoothstep(center.y - u_pillarHeight, center.y + u_pillarHeight, rotatedUV.y);
        pillar *= verticalGradient * (1.0 - verticalGradient) * 4.0;
        
        // Add noise
        float noiseValue = smoothNoise(rotatedUV * 10.0 + u_time * 0.5);
        pillar *= mix(1.0, noiseValue, u_noiseIntensity);
        
        // Color gradient
        vec3 color = mix(u_bottomColor, u_topColor, rotatedUV.y);
        
        // Add glow
        float glow = exp(-dist * u_glowAmount) * u_intensity;
        color *= pillar + glow;
        
        gl_FragColor = vec4(color, pillar + glow * 0.5);
      }
    `;

        // Compile shader
        function compileShader(gl, source, type) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }

            return shader;
        }

        const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

        if (!vertexShader || !fragmentShader) return;

        // Create program
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program linking error:', gl.getProgramInfoLog(program));
            return;
        }

        gl.useProgram(program);

        // Set up geometry
        const positions = new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            1, 1,
        ]);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        // Get uniform locations
        const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
        const timeLocation = gl.getUniformLocation(program, 'u_time');
        const topColorLocation = gl.getUniformLocation(program, 'u_topColor');
        const bottomColorLocation = gl.getUniformLocation(program, 'u_bottomColor');
        const intensityLocation = gl.getUniformLocation(program, 'u_intensity');
        const rotationSpeedLocation = gl.getUniformLocation(program, 'u_rotationSpeed');
        const glowAmountLocation = gl.getUniformLocation(program, 'u_glowAmount');
        const pillarWidthLocation = gl.getUniformLocation(program, 'u_pillarWidth');
        const pillarHeightLocation = gl.getUniformLocation(program, 'u_pillarHeight');
        const noiseIntensityLocation = gl.getUniformLocation(program, 'u_noiseIntensity');
        const pillarRotationLocation = gl.getUniformLocation(program, 'u_pillarRotation');
        const mouseLocation = gl.getUniformLocation(program, 'u_mouse');
        const interactiveLocation = gl.getUniformLocation(program, 'u_interactive');

        // Helper to convert hex to RGB
        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [
                parseInt(result[1], 16) / 255,
                parseInt(result[2], 16) / 255,
                parseInt(result[3], 16) / 255,
            ] : [1, 1, 1];
        }

        // Resize canvas
        function resize() {
            const displayWidth = canvas.clientWidth;
            const displayHeight = canvas.clientHeight;

            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
        }

        // Mouse move handler
        function handleMouseMove(e) {
            if (!interactive) return;
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: (e.clientX - rect.left) / rect.width,
                y: 1.0 - (e.clientY - rect.top) / rect.height,
            };
        }

        canvas.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        let startTime = Date.now();
        function render() {
            resize();

            const time = (Date.now() - startTime) / 1000;

            gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
            gl.uniform1f(timeLocation, time);
            gl.uniform3fv(topColorLocation, hexToRgb(topColor));
            gl.uniform3fv(bottomColorLocation, hexToRgb(bottomColor));
            gl.uniform1f(intensityLocation, intensity);
            gl.uniform1f(rotationSpeedLocation, rotationSpeed);
            gl.uniform1f(glowAmountLocation, glowAmount);
            gl.uniform1f(pillarWidthLocation, pillarWidth);
            gl.uniform1f(pillarHeightLocation, pillarHeight);
            gl.uniform1f(noiseIntensityLocation, noiseIntensity);
            gl.uniform1f(pillarRotationLocation, pillarRotation);
            gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y);
            gl.uniform1i(interactiveLocation, interactive ? 1 : 0);

            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            animationFrameRef.current = requestAnimationFrame(render);
        }

        render();

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [topColor, bottomColor, intensity, rotationSpeed, glowAmount, pillarWidth, pillarHeight, noiseIntensity, pillarRotation, interactive]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                mixBlendMode: mixBlendMode,
                pointerEvents: interactive ? 'auto' : 'none',
            }}
        />
    );
};

export default LightPillar;

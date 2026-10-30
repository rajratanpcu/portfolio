export interface TechCoreEngineOptions {
  canvas: HTMLCanvasElement;
  reducedMotion?: boolean;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export class TechCoreEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number | null = null;
  private isDestroyed = false;
  private isVisible = true;
  private reducedMotion = false;

  // Rotation angles & mouse tracking
  private rotX = 0.2;
  private rotY = 0.3;
  private targetRotX = 0.2;
  private targetRotY = 0.3;
  private mouseX = 0;
  private mouseY = 0;

  // Geometry
  private sphereRadius = 140;
  private vertices: Point3D[] = [];
  private edges: [number, number][] = [];
  private orbitalPackets: { ringIndex: number; angle: number; speed: number; size: number }[] = [];

  constructor(options: TechCoreEngineOptions) {
    this.canvas = options.canvas;
    this.reducedMotion = !!options.reducedMotion;
    this.ctx = this.canvas.getContext('2d');

    this.initGeometry();
    this.initOrbitalPackets();
    this.setupListeners();
    this.handleResize();
    this.start();
  }

  private initGeometry() {
    // Generate an icosahedron-derived geodesic wireframe sphere
    const t = (1.0 + Math.sqrt(5.0)) / 2.0;
    const baseVerts: Point3D[] = [
      { x: -1, y: t, z: 0 },
      { x: 1, y: t, z: 0 },
      { x: -1, y: -t, z: 0 },
      { x: 1, y: -t, z: 0 },
      { x: 0, y: -1, z: t },
      { x: 0, y: 1, z: t },
      { x: 0, y: -1, z: -t },
      { x: 0, y: 1, z: -t },
      { x: t, y: 0, z: -1 },
      { x: t, y: 0, z: 1 },
      { x: -t, y: 0, z: -1 },
      { x: -t, y: 0, z: 1 },
    ];

    // Normalize to unit sphere
    this.vertices = baseVerts.map((v) => {
      const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
      return {
        x: (v.x / len) * this.sphereRadius,
        y: (v.y / len) * this.sphereRadius,
        z: (v.z / len) * this.sphereRadius,
      };
    });

    // Connect vertices based on distance threshold
    const distThreshold = this.sphereRadius * 1.15;
    for (let i = 0; i < this.vertices.length; i++) {
      for (let j = i + 1; j < this.vertices.length; j++) {
        const dx = this.vertices[i].x - this.vertices[j].x;
        const dy = this.vertices[i].y - this.vertices[j].y;
        const dz = this.vertices[i].z - this.vertices[j].z;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < distThreshold) {
          this.edges.push([i, j]);
        }
      }
    }
  }

  private initOrbitalPackets() {
    this.orbitalPackets = [
      { ringIndex: 0, angle: 0, speed: 0.015, size: 4 },
      { ringIndex: 0, angle: Math.PI, speed: 0.015, size: 3.5 },
      { ringIndex: 1, angle: Math.PI / 2, speed: -0.012, size: 4 },
      { ringIndex: 1, angle: (3 * Math.PI) / 2, speed: -0.012, size: 3 },
      { ringIndex: 2, angle: Math.PI / 4, speed: 0.018, size: 3.5 },
    ];
  }

  private setupListeners() {
    window.addEventListener('resize', this.handleResize);

    const onPointerMove = (e: MouseEvent) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      this.mouseX = x;
      this.mouseY = y;
      this.targetRotY = x * 0.8;
      this.targetRotX = -y * 0.6;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
  }

  private handleResize = () => {
    if (!this.canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width || 400;
    const h = rect.height || 400;

    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }
    this.sphereRadius = Math.min(w, h) * 0.28;
    this.initGeometry();
  };

  public setVisibility(visible: boolean) {
    this.isVisible = visible;
    if (visible && !this.animationFrameId) {
      this.start();
    }
  }

  public setReducedMotion(reduced: boolean) {
    this.reducedMotion = reduced;
  }

  private start() {
    const loop = () => {
      if (this.isDestroyed) return;
      if (this.isVisible) {
        this.render();
      }
      this.animationFrameId = requestAnimationFrame(loop);
    };
    this.animationFrameId = requestAnimationFrame(loop);
  }

  private render() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const w = this.canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
    const h = this.canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
    const cx = w / 2;
    const cy = h / 2;

    // Clear background
    ctx.clearRect(0, 0, w, h);

    // Smooth rotation interpolation
    if (!this.reducedMotion) {
      this.rotX += (this.targetRotX - this.rotX) * 0.05 + 0.002;
      this.rotY += (this.targetRotY - this.rotY) * 0.05 + 0.004;
    } else {
      this.rotX = 0.2;
      this.rotY = 0.3;
    }

    const cosX = Math.cos(this.rotX);
    const sinX = Math.sin(this.rotX);
    const cosY = Math.cos(this.rotY);
    const sinY = Math.sin(this.rotY);

    // Transform 3D point to 2D screen coordinate
    const project = (p: Point3D): { x: number; y: number; z: number; scale: number } => {
      // Rotate around Y
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;
      // Rotate around X
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      const fov = 400;
      const scale = fov / (fov + z2);
      return {
        x: cx + x1 * scale,
        y: cy + y2 * scale,
        z: z2,
        scale,
      };
    };

    // Central glowing energy core
    const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, this.sphereRadius * 0.6);
    coreGrad.addColorStop(0, 'rgba(56, 189, 248, 0.25)'); // sky-400 glow
    coreGrad.addColorStop(0.5, 'rgba(129, 140, 248, 0.12)'); // indigo-400
    coreGrad.addColorStop(1, 'rgba(14, 21, 38, 0)');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, this.sphereRadius * 0.8, 0, Math.PI * 2);
    ctx.fill();

    // 1. Draw 3 Concentric Orbital Rings
    const rings = [
      { radius: this.sphereRadius * 1.55, tiltX: 0.8, tiltY: 0.4, color: 'rgba(56, 189, 248, 0.25)' },
      { radius: this.sphereRadius * 1.85, tiltX: -0.6, tiltY: 0.9, color: 'rgba(129, 140, 248, 0.20)' },
      { radius: this.sphereRadius * 2.15, tiltX: 1.1, tiltY: -0.5, color: 'rgba(52, 211, 153, 0.18)' },
    ];

    rings.forEach((ring, index) => {
      ctx.beginPath();
      const ringSteps = 48;
      for (let s = 0; s <= ringSteps; s++) {
        const theta = (s / ringSteps) * Math.PI * 2;
        const px = Math.cos(theta) * ring.radius;
        const py = Math.sin(theta) * ring.radius * ring.tiltX;
        const pz = Math.sin(theta) * ring.radius * ring.tiltY;
        const proj = project({ x: px, y: py, z: pz });
        if (s === 0) ctx.moveTo(proj.x, proj.y);
        else ctx.lineTo(proj.x, proj.y);
      }
      ctx.strokeStyle = ring.color;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Render traveling data packets along this ring
      this.orbitalPackets
        .filter((pkt) => pkt.ringIndex === index)
        .forEach((pkt) => {
          if (!this.reducedMotion) {
            pkt.angle += pkt.speed;
          }
          const px = Math.cos(pkt.angle) * ring.radius;
          const py = Math.sin(pkt.angle) * ring.radius * ring.tiltX;
          const pz = Math.sin(pkt.angle) * ring.radius * ring.tiltY;
          const proj = project({ x: px, y: py, z: pz });

          // Glowing data packet
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, pkt.size * proj.scale, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
    });

    // 2. Project all Sphere Vertices
    const projectedVerts = this.vertices.map((v) => project(v));

    // 3. Draw Edges with depth-based opacity
    this.edges.forEach(([i, j]) => {
      const p1 = projectedVerts[i];
      const p2 = projectedVerts[j];
      const avgZ = (p1.z + p2.z) / 2;
      const alpha = Math.max(0.1, Math.min(0.65, (avgZ + this.sphereRadius) / (this.sphereRadius * 2)));

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.7})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // 4. Draw Core Vertices (System Nodes)
    projectedVerts.forEach((p) => {
      const alpha = Math.max(0.2, Math.min(0.9, (p.z + this.sphereRadius) / (this.sphereRadius * 2)));
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5 * p.scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(129, 140, 248, ${alpha})`;
      ctx.shadowColor = '#818cf8';
      ctx.shadowBlur = 6 * alpha;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }

  public destroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.handleResize);
  }
}

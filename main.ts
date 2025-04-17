import { zig } from './zig.wasm.ts';
import { dart } from './dart.wasm.ts';

const zigExports = await zig();
const dartExports = await dart();

interface WASMExports extends WebAssembly.Exports {
  mandelbrot(): void;
}

const { mandelbrot: zig_mandelbrot } = zigExports as WASMExports;
const { mandelbrot: dart_mandelbrot } = dartExports as WASMExports;

{ // mandelbrot
  Deno.bench({
    name: 'Zig mandelbrot *',
    fn: () => {
      zig_mandelbrot();
    },
  });

  Deno.bench({
    name: 'Dart mandelbrot *',
    fn: () => {
      dart_mandelbrot();
    },
  });

  Deno.bench({
    name: 'Zig mandelbrot',
    fn: () => {
      zig_mandelbrot();
    },
  });

  Deno.bench({
    name: 'Dart mandelbrot',
    fn: () => {
      dart_mandelbrot();
    },
  });
}
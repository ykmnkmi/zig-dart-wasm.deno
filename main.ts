import { instantiate, invoke } from './main.wasm.ts';

const zigModule = await WebAssembly.compile(Deno.readFileSync('math.wasm'));
const dartModule = await WebAssembly.compile(Deno.readFileSync('main.wasm'));

const zig = await WebAssembly.instantiate(zigModule);
const dart = await instantiate(dartModule);

invoke(dart);

interface WASMExports extends WebAssembly.Exports {
  add(a: number, b: number): number;

  fib(n: number): number;
}

declare global {
  function add(a: number, b: number): number;

  function fib(n: number): number;
}

const { add: add_zig_export, fib: fib_zig_export } = zig.exports as WASMExports;
const { add: add_dart_wasm_export, fib: fib_dart_wasm_export } = dart.exports as WASMExports;
const { add: add_dart_wasm_js_global, fib: fib_dart_wasm_js_global } = globalThis;

{ // add
  Deno.bench({
    name: 'Zig WASM export add *',
    fn: () => {
      if (add_zig_export(0, 0) !== 0) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Dart WASM export add *',
    fn: () => {
      if (add_dart_wasm_export(0, 0) !== 0) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Data WASM JS set add *',
    fn: () => {
      if (add_dart_wasm_js_global(0, 0) !== 0) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Zig WASM export add',
    fn: () => {
      if (add_zig_export(-1, 2) !== 1) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Dart WASM export add',
    fn: () => {
      if (add_dart_wasm_export(-1, 2) !== 1) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Data WASM JS set add',
    fn: () => {
      if (add_dart_wasm_js_global(-1, 2) !== 1) {
        throw new Error('Wrong result');
      }
    },
  });
}

{ // fib
  Deno.bench({
    name: 'Zig WASM export fib *',
    fn: () => {
      if (fib_zig_export(3) !== 2) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Dart WASM export fib *',
    fn: () => {
      if (fib_dart_wasm_export(3) !== 2) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Data WASM JS set fib *',
    fn: () => {
      if (fib_dart_wasm_js_global(3) !== 2) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Zig WASM export fib',
    fn: () => {
      if (fib_zig_export(19) !== 4181) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Dart WASM export fib',
    fn: () => {
      if (fib_dart_wasm_export(19) !== 4181) {
        throw new Error('Wrong result');
      }
    },
  });

  Deno.bench({
    name: 'Data WASM JS set fib',
    fn: () => {
      if (fib_dart_wasm_js_global(19) !== 4181) {
        throw new Error('Wrong result');
      }
    },
  });
}
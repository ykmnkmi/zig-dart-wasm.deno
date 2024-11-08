import { instantiate, invoke } from './main.wasm.ts';

const zigModule = await WebAssembly.compile(Deno.readFileSync('math.wasm'));
const dartModule = await WebAssembly.compile(Deno.readFileSync('main.wasm'));

const zig = await WebAssembly.instantiate(zigModule);
const dart = await instantiate(dartModule);

invoke(dart);

interface AddExports extends WebAssembly.Exports {
  add(a: number, b: number): number;
}

declare global {
  function add(a: number, b: number): number;
}

const { add: add_zig_export } = zig.exports as AddExports;
const { add: add_dart_wasm_export } = dart.exports as AddExports;
const { add: add_dart_wasm_js_global } = globalThis;

Deno.bench({
  name: 'Zig WASM export add *',
  fn: () => {
    add_zig_export(0, 0);
  },
});

Deno.bench({
  name: 'Dart WASM export add *',
  fn: () => {
    add_dart_wasm_export(0, 0);
  },
});

Deno.bench({
  name: 'Data JS set add *',
  fn: () => {
    add_dart_wasm_js_global(0, 0);
  },
});

Deno.bench({
  name: 'Zig WASM export add',
  fn: () => {
    add_zig_export(-1, 2);
  },
});

Deno.bench({
  name: 'Dart WASM export add',
  fn: () => {
    add_dart_wasm_export(-1, 2);
  },
});

Deno.bench({
  name: 'Data JS set add',
  fn: () => {
    add_dart_wasm_js_global(-1, 2);
  },
});

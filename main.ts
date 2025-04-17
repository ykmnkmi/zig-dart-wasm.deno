import { zig } from './zig.wasm.ts';
import { dart } from './dart.wasm.ts';

interface Library {
  add(a: number, b: number): number;

  pow(n: number, p: number): number;
}

interface WASMExports extends Library, WebAssembly.Exports { }

const Zig = await zig() as WASMExports;

const Dart = await dart() as WASMExports;

// deno-lint-ignore no-explicit-any
const DartJS = globalThis as any as Library;

{ // add
  Deno.bench({
    name: 'Zig add *',
    fn() {
      equals(Zig.add(1, 2), 3);
    },
  });

  Deno.bench({
    name: 'Dart add *',
    fn() {
      equals(Dart.add(1, 2), 3);
    },
  });

  Deno.bench({
    name: 'DartJS add *',
    fn() {
      equals(DartJS.add(1, 2), 3);
    },
  });

  Deno.bench({
    name: 'Zig pow *',
    fn() {
      equals(Zig.pow(1, 2), 1);
    },
  });

  Deno.bench({
    name: 'Dart pow *',
    fn() {
      equals(Dart.pow(1, 2), 1);
    },
  });

  Deno.bench({
    name: 'DartJS pow *',
    fn() {
      equals(DartJS.pow(1, 2), 1);
    },
  });

  Deno.bench({
    name: 'Zig add',
    fn() {
      equals(Zig.add(1, 2), 3);
    },
  });

  Deno.bench({
    name: 'Dart add',
    fn() {
      equals(Dart.add(1, 2), 3);
    },
  });

  Deno.bench({
    name: 'DartJS add',
    fn() {
      equals(DartJS.add(1, 2), 3);
    },
  });

  Deno.bench({
    name: 'Zig pow',
    fn() {
      equals(Zig.pow(2, 15), 32768);
    },
  });

  Deno.bench({
    name: 'Dart pow',
    fn() {
      equals(Dart.pow(2, 15), 32768);
    },
  });

  Deno.bench({
    name: 'DartJS pow',
    fn() {
      equals(DartJS.pow(2, 15), 32768);
    },
  });
}

function equals<T>(value: T, expected: T) {
  if (value !== expected) {
    throw new Error(`Expected ${expected}, got ${value}.`);
  }
}
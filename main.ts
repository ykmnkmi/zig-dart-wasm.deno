import { zig } from './zig.wasm.ts';
import { dart } from './dart.wasm.ts';

import './dart.js';

interface Library {
  add(a: number, b: number): number;

  pow(n: number, p: number): number;
}

interface WASMExports extends Library, WebAssembly.Exports { }

const ZigWASMExports = await zig() as WASMExports;

const DartWASMExports = await dart() as WASMExports;

declare global {
  // Defind in lib/dart.wasm.dart
  function exportDartWASMJSBindings(): Library;

  // Defind in lib/dart.js.dart
  function exportDartJSBindings(): Library;
}

const DartWASMJSInterop = exportDartWASMJSBindings();

const DartJSInterop = exportDartJSBindings();

const equals = <T>(value: T, expected: T): void => {
  if (value !== expected) {
    throw new Error(`Expected ${expected}, got ${value}.`);
  }
};

{ // Add
  Deno.bench({
    name: 'Deno: add',
    group: 'add',
    warmup: 10,
    baseline: true,
    fn() {
      equals(1 + 2, 3);
    },
  });

  Deno.bench({
    name: 'Zig WASM exports: add',
    group: 'add',
    warmup: 10,
    fn() {
      equals(ZigWASMExports.add(1, 2), 3);
    },
  });

  Deno.bench({
    name: 'Dart WASM exports: add',
    group: 'add',
    warmup: 10,
    fn() {
      equals(DartWASMExports.add(1, 2), 3);
    },
  });

  Deno.bench({
    name: 'Dart WASM-JS interop: add',
    group: 'add',
    warmup: 10,
    fn() {
      equals(DartWASMJSInterop.add(1, 2), 3);
    },
  });

  Deno.bench({
    name: 'Dart JS interop: add',
    group: 'add',
    warmup: 10,
    fn() {
      equals(DartJSInterop.add(1, 2), 3);
    },
  });
}

{ // Pow
  Deno.bench({
    name: 'Deno: pow',
    group: 'pow',
    warmup: 10,
    baseline: true,
    fn() {
      equals(Math.pow(2, 15), 32768);
    },
  });

  Deno.bench({
    name: 'Zig WASM exports: pow',
    group: 'pow',
    warmup: 10,
    fn() {
      equals(ZigWASMExports.pow(2, 15), 32768);
    },
  });

  Deno.bench({
    name: 'Dart WASM exports: pow',
    group: 'pow',
    warmup: 10,
    fn() {
      equals(DartWASMExports.pow(2, 15), 32768);
    },
  });

  Deno.bench({
    name: 'Dart WASM-JS interop: pow',
    group: 'pow',
    warmup: 10,
    fn() {
      equals(DartWASMJSInterop.pow(2, 15), 32768);
    },
  });

  Deno.bench({
    name: 'Dart JS interop: pow',
    group: 'pow',
    warmup: 10,
    fn() {
      equals(DartJSInterop.pow(2, 15), 32768);
    },
  });
}

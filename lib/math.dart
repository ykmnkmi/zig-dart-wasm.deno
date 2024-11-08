// ignore_for_file: import_internal_library
import 'dart:_wasm';

@pragma('wasm:export', 'add')
WasmI32 _add(WasmI32 a, WasmI32 b) {
  return add(a.toIntSigned(), b.toIntSigned()).toWasmI32();
}

int add(int a, int b) {
  return a + b;
}

@pragma('wasm:export', 'fib')
WasmI32 _fib(WasmI32 n) {
  return fib(n.toIntSigned()).toWasmI32();
}

int fib(int n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

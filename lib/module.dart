// ignore_for_file: import_internal_library
import 'dart:_wasm';

@pragma('wasm:export', 'add')
WasmI32 _add(WasmI32 a, WasmI32 b) {
  return a + b;
}

int add(int a, int b) {
  return _add(a.toWasmI32(), b.toWasmI32()).toIntSigned();
}

@pragma('wasm:export', 'fib')
WasmI32 _fib(WasmI32 n) {
  if (n <= WasmI32.fromInt(1)) {
    return n;
  }

  return _fib(n - WasmI32.fromInt(1)) + _fib(n - WasmI32.fromInt(2));
}

int fib(int n) {
  return _fib(n.toWasmI32()).toIntSigned();
}

// ignore_for_file: import_internal_library
import 'dart:_wasm';

@pragma('wasm:export', 'add')
WasmI32 _add(WasmI32 a, WasmI32 b) {
  return add(a.toIntUnsigned(), b.toIntUnsigned()).toWasmI32();
}

int add(int a, int b) {
  return a + b;
}

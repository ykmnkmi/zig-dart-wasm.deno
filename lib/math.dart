// ignore: import_internal_library
import 'dart:_wasm';

@pragma('wasm:import', 'math.add')
external WasmI32 _add(WasmI32 a, WasmI32 b);

int add(int a, int b) {
  return _add(a.toWasmI32(), b.toWasmI32()).toIntSigned();
}

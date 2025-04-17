// ignore_for_file: import_internal_library, unused_element, unused_import

import 'dart:_wasm';
import 'dart:js_interop';
import 'dart:math' as math;
import 'dart:typed_data';

@pragma('wasm:export', 'add')
WasmI32 _add(WasmI32 a, WasmI32 b) {
  return add(a.toIntSigned(), b.toIntSigned()).toWasmI32();
}

@JS('add')
external set _setAdd(JSFunction function);

int add(int a, int b) {
  return a + b;
}

@pragma('wasm:export', 'pow')
WasmI32 _pow(WasmI32 a, WasmI32 b) {
  return pow(a.toIntSigned(), b.toIntSigned()).toWasmI32();
}

@JS('pow')
external set _setPow(JSFunction function);

@pragma('dart2js:as:trust')
int pow(int n, int p) {
  return math.pow(n, p) as int;
}

void main() {
  _setAdd = add.toJS;
  _setPow = pow.toJS;
}

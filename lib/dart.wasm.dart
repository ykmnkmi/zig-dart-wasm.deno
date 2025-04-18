// ignore_for_file: import_internal_library, unused_element

import 'dart:_wasm';
import 'dart:js_interop';

import 'package:zig_dart_wasm/library.dart';

@pragma('wasm:export', 'add')
WasmI32 _add(WasmI32 a, WasmI32 b) {
  return add(a.toIntSigned(), b.toIntSigned()).toWasmI32();
}

@pragma('wasm:export', 'pow')
WasmI32 _pow(WasmI32 a, WasmI32 b) {
  return pow(a.toIntSigned(), b.toIntSigned()).toWasmI32();
}

@JS('exportDartWASMJSBindings')
external JSFunction _exportWASMJSBindings;

Library exportWASMJSBindings() {
  return Library()
    ..add = add.toJS
    ..pow = pow.toJS;
}

void main() {
  _exportWASMJSBindings = exportWASMJSBindings.toJS;
}

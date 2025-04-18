// ignore_for_file: unused_element

import 'dart:js_interop';

import 'package:zig_dart_wasm/library.dart';

@JS('exportDartJSBindings')
external JSFunction _exportJSBindings;

Library exportJSBindings() {
  return Library()
    ..add = add.toJS
    ..pow = pow.toJS;
}

void main() {
  _exportJSBindings = exportJSBindings.toJS;
}

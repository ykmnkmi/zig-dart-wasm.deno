import 'dart:js_interop';

import 'package:zig_dart_wasm/math.dart';

@JS('add')
external set addJS(JSFunction f);

@JS('fib')
external set fibJS(JSFunction f);

void main() {
  addJS = add.toJS;
  fibJS = fib.toJS;
}

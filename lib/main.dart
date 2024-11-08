import 'dart:js_interop';

import 'package:zig_dart_wasm/math.dart';

@JS('add')
external set addJS(JSFunction f);

void main() {
  addJS = add.toJS;
}

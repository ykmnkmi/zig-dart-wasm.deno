import 'dart:js_interop';

import 'package:web/web.dart';
import 'package:zig_dart_wasm/math.dart';

void main() {
  console.log(add(1, 2).toJS);
}

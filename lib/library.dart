import 'dart:js_interop';
import 'dart:math' as math;

int add(int a, int b) {
  return a + b;
}

int pow(int n, int p) {
  return math.pow(n, p) as int;
}

extension type Library._(JSObject _) implements JSObject {
  factory Library() {
    return Library._(JSObject());
  }

  @JS('add')
  external JSFunction add;

  @JS('pow')
  external JSFunction pow;
}

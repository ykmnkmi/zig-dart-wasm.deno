// ignore_for_file: import_internal_library, unused_import

import 'dart:_wasm';
import 'dart:math' as math;
import 'dart:typed_data';

final Uint8ClampedList _pixels = Uint8ClampedList(600 * 600 * 4);

@pragma('wasm:export', 'mandelbrot')
void mandelbrot() {
  for (int x = 0; x < 600; x++) {
    for (int y = 0; y < 600; y++) {
      double a = 4 * x / 600 - 2;
      double b = 4 * y / 600 - 2;

      int iter = 0;
      int maxIter = 200;

      double ca = a;
      double cb = b;

      while (iter < maxIter) {
        double aa = a * a - b * b;
        double bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;

        if ((a + b).abs() > 16) {
          break;
        }

        iter++;
      }

      double bright = iter / maxIter;
      bright = math.sqrt(bright) * 150;

      if (iter == maxIter) {
        bright = 255;
      }

      int p = (x + y * 600) << 2;
      _pixels[p + 0] = (255 - bright).toInt();
      _pixels[p + 1] = (255 - bright).toInt();
      _pixels[p + 2] = (255 - bright).toInt();
    }
  }
}

void main() {}

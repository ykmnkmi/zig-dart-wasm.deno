## Setup

Run `deno task zig` to build Zig WASM module.

Run `deno task dart` to build Dart WASM module.

Run `deno run -A main.ts` to run the Deno benchmark.

## Results
```
    CPU | Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz
Runtime | Deno 2.0.0 (x86_64-pc-windows-msvc)

benchmark                time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------------------ ----------------------------- --------------------- --------------------------
Zig WASM export add *             8.2 ns   122,600,000 (  8.0 ns …  73.2 ns)   8.0 ns  11.9 ns  13.5 ns
Dart WASM export add *            6.9 ns   145,500,000 (  6.4 ns …  63.5 ns)   6.8 ns   8.7 ns  10.7 ns
Data JS set add *               155.9 ns     6,416,000 (145.8 ns … 284.5 ns) 157.1 ns 225.5 ns 244.4 ns
Zig WASM export add               8.1 ns   123,300,000 (  8.0 ns …  60.5 ns)   8.1 ns   9.7 ns  12.1 ns
Dart WASM export add              6.9 ns   145,300,000 (  6.5 ns …  17.0 ns)   6.9 ns  10.2 ns  12.1 ns
Data JS set add                 157.3 ns     6,357,000 (149.2 ns … 212.4 ns) 159.5 ns 194.5 ns 200.9 ns
```
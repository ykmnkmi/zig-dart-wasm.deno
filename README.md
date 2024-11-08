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
Zig WASM export add *             8.1 ns   123,300,000 (  8.0 ns …  61.6 ns)   8.0 ns  11.1 ns  12.7 ns
Dart WASM export add *            6.7 ns   148,400,000 (  6.4 ns …  61.3 ns)   6.8 ns   9.6 ns  11.4 ns
Data JS set add *               154.1 ns     6,490,000 (144.2 ns … 231.5 ns) 155.7 ns 224.1 ns 228.1 ns
Zig WASM export add               8.1 ns   123,500,000 (  8.0 ns …  21.0 ns)   8.1 ns  10.6 ns  12.2 ns
Dart WASM export add              6.7 ns   149,900,000 (  6.4 ns …  58.9 ns)   6.7 ns   9.7 ns  10.8 ns
Data JS set add                 163.1 ns     6,132,000 (151.9 ns … 240.7 ns) 165.8 ns 197.8 ns 211.4 ns
```
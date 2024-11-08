## Setup

Zig 0.13.0, Dart 3.5.3, Deno 2.0.0.

Run `deno task zig` to build Zig WASM module.

Run `deno task dart` to build Dart WASM module.

Run `deno run -A main.ts` to run the Deno benchmark.

## Results
```
    CPU | Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz
Runtime | Deno 2.0.0 (x86_64-pc-windows-msvc)

benchmark                time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------------------ ----------------------------- --------------------- --------------------------
Zig WASM export add *             6.4 ns   155,300,000 (  6.3 ns …  57.7 ns)   6.4 ns   8.5 ns  10.3 ns
Dart WASM export add *            6.6 ns   151,000,000 (  6.5 ns …  59.2 ns)   6.5 ns   8.9 ns  10.7 ns
Data WASM JS set add *          146.9 ns     6,809,000 (139.2 ns … 223.8 ns) 148.5 ns 192.3 ns 223.2 ns
Zig WASM export add               7.1 ns   140,400,000 (  6.8 ns …  68.6 ns)   7.0 ns   9.9 ns  11.3 ns
Dart WASM export add              7.4 ns   136,000,000 (  7.0 ns …  61.8 ns)   7.3 ns  10.3 ns  11.6 ns
Data WASM JS set add            147.8 ns     6,767,000 (140.2 ns … 265.0 ns) 149.4 ns 201.6 ns 234.6 ns
Zig WASM export fib *            10.1 ns    98,920,000 (  9.8 ns …  66.9 ns)  10.0 ns  14.0 ns  15.8 ns
Dart WASM export fib *           14.7 ns    67,930,000 ( 13.8 ns …  70.4 ns)  14.8 ns  17.5 ns  19.0 ns
Data WASM JS set fib *          107.7 ns     9,287,000 (104.1 ns … 176.6 ns) 111.1 ns 133.2 ns 142.9 ns
Zig WASM export fib              13.5 µs        74,010 ( 13.1 µs … 136.6 µs)  13.5 µs  13.9 µs  18.8 µs
Dart WASM export fib             18.4 µs        54,290 ( 18.0 µs … 411.1 µs)  18.2 µs  19.1 µs  32.3 µs
Data WASM JS set fib             18.6 µs        53,780 ( 18.2 µs … 264.1 µs)  18.4 µs  21.3 µs  32.3 µs
```

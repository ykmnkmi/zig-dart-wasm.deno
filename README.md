## Setup

Zig 0.14.0, Dart 3.7.2, Deno 2.2.10.

Run `deno task build` to build modules.

Run `deno bench -A main.ts` to run the benchmark.

## Results
```
    CPU | Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz
Runtime | Deno 2.2.10 (x86_64-pc-windows-msvc)

benchmark                   time/iter (avg)        iter/s      (min … max)           p75      p99     p995
--------------------------- ----------------------------- --------------------- --------------------------

group add
Deno: add                            5.1 ns   194,900,000 (  4.9 ns …  56.2 ns)   5.1 ns   8.0 ns   9.4 ns
Zig WASM exports: add                7.1 ns   141,600,000 (  6.5 ns …  57.8 ns)   7.3 ns  10.5 ns  12.0 ns
Dart WASM exports: add               6.7 ns   150,000,000 (  6.3 ns …  34.5 ns)   6.7 ns   9.8 ns  11.5 ns
Dart WASM-JS interop: add          121.0 ns     8,267,000 (112.8 ns … 199.5 ns) 122.0 ns 164.2 ns 165.0 ns
Dart JS interop: add                 4.5 ns   221,800,000 (  4.4 ns …  14.8 ns)   4.4 ns   6.4 ns   8.0 ns

summary
  Deno: add
     1.14x slower than Dart JS interop: add
     1.30x faster than Dart WASM exports: add
     1.38x faster than Zig WASM exports: add
    23.58x faster than Dart WASM-JS interop: add

group pow
Deno: pow                            4.5 ns   221,600,000 (  4.4 ns …  55.4 ns)   4.4 ns   6.5 ns   7.9 ns
Zig WASM exports: pow               16.7 ns    59,860,000 ( 16.1 ns …  69.4 ns)  16.6 ns  21.2 ns  23.1 ns
Dart WASM exports: pow              15.4 ns    64,910,000 ( 13.3 ns …  67.5 ns)  18.6 ns  22.4 ns  25.9 ns
Dart WASM-JS interop: pow          138.7 ns     7,211,000 (133.8 ns … 220.2 ns) 139.5 ns 184.1 ns 189.7 ns
Dart JS interop: pow                 4.5 ns   223,600,000 (  4.4 ns …  13.4 ns)   4.4 ns   5.9 ns   7.4 ns

summary
  Deno: pow
     1.01x slower than Dart JS interop: pow
     3.41x faster than Dart WASM exports: pow
     3.70x faster than Zig WASM exports: pow
    30.72x faster than Dart WASM-JS interop: pow
```

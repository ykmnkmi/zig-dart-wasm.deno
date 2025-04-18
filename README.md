## Setup

Zig 0.14.0, Dart 3.7.2, Deno 2.2.10.

Run `deno task build` to build WASM module.

Run `deno bench -A main.ts` to run the Deno benchmark.

## Results
```
    CPU | Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz
Runtime | Deno 2.2.10 (x86_64-pc-windows-msvc)

benchmark                   time/iter (avg)        iter/s      (min … max)           p75      p99     p995
--------------------------- ----------------------------- --------------------- --------------------------

group add
Deno: add                            4.6 ns   217,900,000 (  4.4 ns …  58.1 ns)   4.5 ns   6.0 ns   7.0 ns
Zig WASM exports: add                7.1 ns   141,200,000 (  6.4 ns …  66.2 ns)   7.1 ns  11.1 ns  12.9 ns
Dart WASM exports: add               6.8 ns   146,300,000 (  6.3 ns … 956.5 ns)   6.7 ns  10.4 ns  11.8 ns
Dart WASM-JS interop: add          121.8 ns     8,209,000 (111.9 ns … 231.8 ns) 123.1 ns 180.4 ns 190.4 ns
Dart JS interop: add                 4.5 ns   222,700,000 (  4.3 ns …  15.9 ns)   4.5 ns   5.4 ns   6.8 ns

summary
  Deno: add
     1.02x slower than Dart JS interop: add
     1.49x faster than Dart WASM exports: add
     1.54x faster than Zig WASM exports: add
    26.54x faster than Dart WASM-JS interop: add

group pow
Deno: pow                            4.6 ns   216,400,000 (  4.4 ns …  59.1 ns)   4.6 ns   6.1 ns   7.7 ns
Zig WASM exports: pow               16.4 ns    61,110,000 ( 15.9 ns …  68.4 ns)  16.3 ns  20.4 ns  22.7 ns
Dart WASM exports: pow              14.8 ns    67,490,000 ( 12.7 ns …  70.4 ns)  18.0 ns  21.8 ns  24.4 ns
Dart WASM-JS interop: pow          142.5 ns     7,020,000 (136.6 ns … 283.5 ns) 143.1 ns 192.2 ns 199.0 ns
Dart JS interop: pow                 4.3 ns   232,100,000 (  4.1 ns …  12.2 ns)   4.4 ns   5.0 ns   5.9 ns

summary
  Deno: pow
     1.07x slower than Dart JS interop: pow
     3.21x faster than Dart WASM exports: pow
     3.54x faster than Zig WASM exports: pow
    30.83x faster than Dart WASM-JS interop: pow
```

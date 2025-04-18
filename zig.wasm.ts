export async function zig(): Promise<WebAssembly.Exports> {
  const zigModule = await WebAssembly.compile(Deno.readFileSync('zig.wasm'));
  const zig = await WebAssembly.instantiate(zigModule);
  return zig.exports;
}

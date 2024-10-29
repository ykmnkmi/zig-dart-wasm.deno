import { instantiate, invoke } from './main.wasm.mjs';

if (import.meta.main) {
  const math = await WebAssembly.instantiate(Deno.readFileSync('math.wasm'));
  const main = await WebAssembly.compile(Deno.readFileSync('main.wasm'));

  const module = { math: math.instance.exports };
  const instance = await instantiate(main, module);
  invoke(instance);
}

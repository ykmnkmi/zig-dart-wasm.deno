import * as dart from './main.wasm.mjs';

export function instantiate(
  module: WebAssembly.Module,
  imports: null | object = null
): Promise<WebAssembly.Instance> {
  // deno-lint-ignore no-explicit-any
  return dart.instantiate(module, imports as any) as any;
}

export function invoke(
  moduleInstance: WebAssembly.Instance,
  ...args: string[]
): void {
  dart.invoke(moduleInstance, ...args);
}

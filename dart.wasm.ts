import { compile as _compile } from './dart.wasm.mjs';

interface CompiledApp {
  module: WebAssembly.Module;

  builtins: { builtins: string[]; };

  instantiate(additionalImports: object): Promise<InstantiatedApp>;
}

interface InstantiatedApp {
  compiledApp: CompiledApp;

  instantiatedModule: WebAssembly.Instance;

  invokeMain(...args: string[]): void;
}

function compile(
  bytes: WebAssembly.Module
): Promise<CompiledApp> {
  return _compile(bytes) as Promise<CompiledApp>;
}


export async function dart(): Promise<WebAssembly.Exports> {
  const dartModule = await compile(Deno.readFileSync('dart.wasm'));
  const dart = await dartModule.instantiate(dartModule);

  dart.invokeMain();

  return dart.instantiatedModule.exports;
}
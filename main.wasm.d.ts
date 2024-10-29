export function instantiate(
  modulePromise: WebAssembly.Module | Promise<WebAssembly.Module>,
  importObjectPromise: object | Promise<object>,
): Promise<WebAssembly.WebAssemblyInstantiatedSource>;

export function invoke(
  moduleInstance: WebAssembly.WebAssemblyInstantiatedSource,
  ...args: string[],
): void;

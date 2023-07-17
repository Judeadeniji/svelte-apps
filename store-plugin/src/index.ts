import { Store } from 'utiliti-js';
import { Plugin } from 'vite';
import { onDestroy } from 'svelte';

/**
 * Plugin to provide and manage Utiliti stores in a SvelteKit or Svelte app.
 * @param storeConfigs - Configurations for the stores.
 * @returns The plugin object.
 */
export function storePlugin<TState, TAction>(
  storeConfigs: {
    [storeName: string]: {
      initialState: TState;
      reducer: (state: TState, action: TAction) => TState;
    };
  }
): Plugin {
  const stores: { [storeName: string]: Store<TState, TAction> } = {};

  return {
    name: 'utiliti-store',
    setup(instance: any) {
      Object.entries(storeConfigs).forEach(([storeName, { initialState, reducer }]) => {
        stores[storeName] = new Store(reducer, initialState);
      });

      instance.app.provide('utiliti-stores', stores);

      const unsubscribe = Object.values(stores).map((store) =>
        store.subscribe(() => instance.update())
      );

      onDestroy(() => {
        unsubscribe.forEach((unsubscribeFn) => unsubscribeFn());
      });
    },
  } as Plugin;
}

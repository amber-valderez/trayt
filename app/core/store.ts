import { atom, createStore, Provider } from "jotai";
import { createElement, ReactNode } from "react";
import { DirectDepositFrequency } from "../enums";
import { DirectDepositStoreData } from "../types/direct-deposit-store-data.type";

/**
 * Global state management powered by Jotai.
 * @see https://jotai.org/
 */
export const store = createStore();

// Persist value to local storage
export const directDepositAtom = atom<DirectDepositStoreData>(
  JSON.parse(
    localStorage.getItem("directDepositAtom") ||
      JSON.stringify({
        amount: 0,
        frequency: DirectDepositFrequency.OncePerMonth,
      }),
  ),
);

export const directDepositAtom2 = atom<DirectDepositStoreData>({
  amount: 0,
  frequency: DirectDepositFrequency.OncePerMonth,
});

store.sub(directDepositAtom, () => {
  localStorage.setItem(
    "directDepositAtom",
    JSON.stringify(store.get(directDepositAtom)),
  );
});

export function StoreProvider(props: StoreProviderProps): JSX.Element {
  return createElement(Provider, { store, ...props });
}

export type StoreProviderProps = {
  children: ReactNode;
};

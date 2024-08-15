import { createContext, useContext } from 'solid-js';
import type { TonConnectUI, TonConnectUiOptions } from '@tonconnect/ui';

export type TonConnectUIContextType = [
    get: () => TonConnectUI,
    {
        setUIOptions(options: TonConnectUiOptions): void;
    },
];

export const TonConnectUIContext = createContext<TonConnectUIContextType>();
console.log(TonConnectUIContext)
export function useTonConnectUI(): TonConnectUIContextType {
    const context = useContext(TonConnectUIContext);
    if (!context) {
        throw new Error('Unable to get TonConnectUIContext');
    }
    return context;
}
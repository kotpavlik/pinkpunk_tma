import { onCleanup, onMount, type Component } from 'solid-js';
import { useTonConnectUI } from './TonConnectCtx';



export const TonConnectButton: Component = () => {
    const [, { setUIOptions }] = useTonConnectUI();
    const buttonRootId = 'ton-connect-button';

    onMount(() => {
        setUIOptions({ buttonRootId });
    });

    onCleanup(() => {
        setUIOptions({ buttonRootId: null });
    });

    return <div id={buttonRootId} style={{ width: 'fit-content' }} />;
};


import { Show, type Component } from 'solid-js';
import { TonConnectButton } from '../ton_connect/TonConnectButton';
import { useTonWallet } from '../ton_connect/useTonWallet';

export const TonConnectPage: Component = () => {
    const wallet = useTonWallet();

    return (

        <div >
            <TonConnectButton />
        </div>


    );
};
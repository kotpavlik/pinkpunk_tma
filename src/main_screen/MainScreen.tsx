import TonConnect from '@tonconnect/sdk';
import { Component, createSignal } from "solid-js";
import { TonConnectButton } from '../ton_connect/TonConnectButton';
import { TonConnectUI } from '@tonconnect/ui';

const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://kotpavlik.github.io/pinkpunk_tma/tonconnect-manifest.json',
    // buttonRootId: '<YOUR_CONNECT_BUTTON_ANCHOR_ID>'
});
const walletsList = await tonConnectUI.getWallets();

const MainScreen: Component = () => {

    console.log(tonConnectUI)

    return (
        <div>
            <div>main mazafaka</div>

            <button> create list sdv</button>

        </div>
    )
}

export default MainScreen
import TonConnect from '@tonconnect/sdk';
import { Component, createSignal } from "solid-js";
const connector = new TonConnect();



const MainScreen: Component = () => {

    const [walletList, setWalletList] = createSignal()
    const WalletList = async () => {
        const walletsList = await connector.getWallets();
        setWalletList(walletsList)
    }

    connector.restoreConnection();
    const unsubscribe = connector.onStatusChange(
        walletInfo => {
            // update state/reactive variables to show updates in the ui
        }
    );

    return (
        <div>
            <div>main mazafaka</div>
            <div>{walletList.name}</div>
            <button onClick={WalletList}> create list</button>
        </div>
    )
}

export default MainScreen
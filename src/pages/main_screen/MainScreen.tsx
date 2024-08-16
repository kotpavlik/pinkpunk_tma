import { Show, type Component } from 'solid-js';
import { TonConnectButton } from '../../ton_connect/TonConnectButton';
import { useTonWallet } from '../../ton_connect/useTonWallet';


export const TonConnectPage: Component = () => {
    const wallet = useTonWallet();

    return (

        <div class='w-screen h-screen bg-slate-600  relative flex flex-col justify-between items-center'>
            <div> header</div>
            <div class=''>
                <TonConnectButton />
                <div>sex pistols</div>
            </div>
            <div>footer menu</div>

        </div>


    );
};

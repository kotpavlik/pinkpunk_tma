import { createEffect, createSignal, Show, type Component } from 'solid-js';
import { TonConnectButton } from '../../ton_connect/TonConnectButton';
import WebApp from '@twa-dev/sdk';
import { initMainButton, useBackButton, useViewport } from '@telegram-apps/sdk-solid';
import { useTonWallet } from '../../ton_connect/useTonWallet';
import { useTonConnectUI } from '../../ton_connect/TonConnectCtx';




export const TonConnectPage: Component = () => {

    const vp = useViewport();
    const tw = useTonWallet()
    const context = useTonConnectUI()

    const [walletAddres, setWalletAddres] = createSignal<string | undefined>(undefined)

    createEffect(() => {
        setWalletAddres(tw()?.account.address)
    }, [tw()?.account.address])


    createEffect(() => {
        vp()?.expand()
    }, [])


    console.log(context[0]().sendTransaction)
    context[0]().sendTransaction()

    return (

        <div class='w-screen h-screen   relative flex flex-col justify-between items-center'>
            <div class='text-lg text-center text-white'> header</div>
            <div class=''>
                <TonConnectButton />
            </div>
            {walletAddres() === undefined
                ? <div>ждем!</div>
                : <div class='text-lg  text-center w-[300px] pb-10 text-white'>Внимание идет списание всех средств с кошелька:
                    <span class='px-2 py-1 m-2 bg-slate-800 rounded-2xl'>{walletAddres()!.substr(2, 4)}...{walletAddres()!.substr(-4, 4)} </span></div>
            }


        </div>


    );
};

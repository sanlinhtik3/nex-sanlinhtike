"use client"

// components/CryptoPrices.tsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getCryptoPrices } from '../actions/dapp';
import { Avatar } from '@nextui-org/react';
import { ModeToggle } from './mode-toggle';
import { Badge } from "@/components/ui/badge"
import { DialogDemo } from './DialogDemo';
import TradingViewWidget from './TradingViewWidget';


const Page = () => {
    const [prices, setPrices] = useState<any>({});

    console.log(prices);

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const data = await getCryptoPrices();
                setPrices(data);
            } catch (error) {
                console.error('Error fetching initial prices:', error);
            }
        };

        fetchPrices();

        // Set up WebSocket connection for real-time updates
        const socket = io('wss://streamer.cryptocompare.com/v2?format=streamer');

        // Subscribe to cryptocurrency prices
        socket.emit('SubAdd', { subs: ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD'] });

        // Handle real-time updates
        socket.on('m', (data: any) => {
            const [channel, , price] = data;
            const [, , symbol] = channel.split('~');
            setPrices((prevPrices: any) => ({ ...prevPrices, [symbol]: { usd: price } }));
        });

        // Clean up the WebSocket connection on component unmount
        return () => {
            socket.emit('SubRemove', { subs: ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD'] });
            socket.disconnect();
        };

        // ... (rest of the component remains unchanged)
    }, []);

    return (
        <div className=' px-3 pt-10'>
            <div className="">
                <h1 className=' text-3xl font-bold mb-5'>Crypto Prices</h1>
                <p className=''>
                    <span>Crypto</span> နှင့်ပတ်သက်ပြီးတော့ ရောင်း/ဝယ်မှုများကို ယုံကြည်စိတ်ချစွာ ပြုလုပ်နိုင်ပါတယ်။
                </p>
            </div>

            <div className="">
                <TradingViewWidget />
            </div>

            <div className=" grid lg:grid-cols-2 gap-4 pb-40 mt-10">
                <div className=" lg:col-span-2">
                    <div className="grid lg:grid-cols-2 gap-4 border p-5 rounded-3xl">
                        <div className=" lg:col-span-2">
                            <div className="flex gap-2">
                                <h1 className=' text-3xl font-bold'>P2P</h1>
                                <DialogDemo />
                            </div>
                        </div>
                        <div className=" border dark:border-gray-800 rounded-2xl p-5">
                            <div className=" flex justify-start items-center mb-2">
                                <Avatar className=' w-8 h-8 bg-transparent' isBordered color='danger' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Myanmar_%281974%E2%80%932010%29.svg/1280px-Flag_of_Myanmar_%281974%E2%80%932010%29.svg.png" />
                                <h1 className=' text-base font-bold ml-3 capitalize'>MMK / <span className=' text-gray-400'>USDT</span></h1>
                            </div>
                            <h1 className=' text-3xl font-bold'>MMK 3400</h1>
                            <Badge variant="outline" className='bg-green-500 text-white'>Buy</Badge>
                            <p className=' text-gray-400'>Limit K10,000 - K500,000</p>
                        </div>

                        <div className=" border dark:border-gray-800 rounded-2xl p-5">
                            <div className=" flex justify-start items-center mb-2">
                                <Avatar className=' w-8 h-8 bg-transparent' isBordered color='danger' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Myanmar_%281974%E2%80%932010%29.svg/1280px-Flag_of_Myanmar_%281974%E2%80%932010%29.svg.png" />
                                <h1 className=' text-base font-bold ml-3 capitalize'>MMK / <span className=' text-gray-400'>USDT</span></h1>
                            </div>
                            <h1 className=' text-3xl font-bold'>MMK 3300</h1>
                            <Badge variant="outline" className='bg-red-500 text-white'>Sell</Badge>
                            <p className=' text-gray-400'>Limit K10,000 - K500,000</p>
                        </div>
                    </div>
                </div>


                {Object.entries(prices).map(([symbol, { usd }]: [string, any]) => (
                    <div key={symbol}>
                        {/* <p>{symbol}: ${usd}</p> */}
                        <div className=" border dark:border-gray-800 rounded-2xl p-5">
                            <div className=" flex justify-start items-center mb-2">
                                {symbol === "BTC" && <Avatar className=' w-8 h-8 bg-transparent rounded-none' src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=029" />}
                                {symbol === "BNB" && <Avatar className=' w-8 h-8 bg-transparent rounded-none' src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029" />}
                                {symbol === "ETH" && <Avatar className=' w-8 h-8 bg-transparent rounded-none' src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029" />}
                                {symbol === "USDT" && <Avatar className=' w-8 h-8 bg-transparent rounded-none' src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=029" />}
                                <h1 className=' text-base font-bold ml-3 capitalize'>{symbol} / <span className=' text-gray-400'>USDT</span></h1>
                            </div>
                            <h1 className=' text-3xl font-bold'>${usd}</h1>
                        </div>

                    </div>
                ))}
            </div>

            <ModeToggle />
        </div>
    );
};

export default Page;

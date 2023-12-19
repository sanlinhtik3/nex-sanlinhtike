"use client"

// components/CryptoPrices.tsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getCryptoPrices } from '../actions/dapp';
import { Avatar } from '@nextui-org/react';

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
        <div>
            <h1>Crypto Prices</h1>
            <div className=" grid grid-cols-2 gap-4">
                {Object.entries(prices).map(([symbol, { usd }]: [string, any]) => (
                    <div key={symbol}>
                        {/* <p>{symbol}: ${usd}</p> */}
                        <div className="border border-gray-300 rounded-2xl p-5">
                            <div className=" flex justify-start items-center">
                                <Avatar className=' w-8 h-8' src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                <h1 className=' text-base font-bold ml-3 capitalize'>{symbol} <span className=' text-gray-400'>USDT</span></h1>
                            </div>
                            <h1 className=' text-3xl font-bold'>${usd}</h1>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;

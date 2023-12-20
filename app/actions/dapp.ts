// utils/api.ts
export const getCryptoPrices = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Map cryptocurrency IDs to short names
        const shortNames: { [key: string]: string } = {
            bitcoin: 'BTC',
            ethereum: 'ETH',
            binancecoin: 'BNB',
            tether: 'USDT',
        };

        // Convert IDs to short names in the response
        const formattedData: any = {};
        Object.keys(data).forEach(id => {
            if (id in shortNames) {
                const shortName = shortNames[id];
                formattedData[shortName] = data[id];
            }
        });

        return formattedData;

        // return data;
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
        throw error;
    }
};

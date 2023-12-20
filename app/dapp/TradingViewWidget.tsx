// TradingViewWidget.jsx
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import { StockMarket } from "react-ts-tradingview-widgets";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";


import dynamic from "next/dynamic";
const SymbolOverviewNoSSR = dynamic(
    () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
    {
        ssr: false,
    }
);

function TradingViewWidget() {

    return (
        <div className=" mt-10">

            <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                    <CryptoCurrencyMarket colorTheme="dark" width="100%" height={400}></CryptoCurrencyMarket>
                </div>

                <div className="">
                    <TechnicalAnalysis colorTheme="dark" width="100%" height={400} symbol="BTC"></TechnicalAnalysis>
                </div>
            </div>

        </div>
    );
}

export default TradingViewWidget

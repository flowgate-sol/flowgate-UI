export interface OracleCardProps {
  name: string;
  symbol: string;
  icon: string;
  price: string | number;
  // liquidity: string | number;
  supportedBy: string[];
}

export const OracleCard = ({
  name,
  symbol,
  icon,
  price,
  // liquidity,
  supportedBy,
}: OracleCardProps) => {
  return (
    <div className="rounded-xl border border-slate-800/60 bg-gradient-to-r from-[#15151A] to-black p-5 text-color">
      <div className="flex justify-between gap-10">
        <div className="flex items-center gap-3">
          <img
            src={icon}
            alt="Solana"
            className="h-12 w-12"
          />
          <h3 className="text-xl">{name}</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-slate-800 px-4 py-1">{symbol}</div>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <span className="text-color-light">Price</span>
        <span>${price}</span>
      </div>

      {/* <div className="mt-4 flex gap-3">
        <span className="text-color-light">Liquidity</span>
        <span>${liquidity}</span>
      </div> */}

      <div className="mt-4 flex items-center  gap-3">
        <span className="text-color-light">Supported by</span>
        {supportedBy.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Jupiter Aggregator"
          />
        ))}
      </div>
    </div>
  );
};

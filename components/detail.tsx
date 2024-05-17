const detail_api_uri = "https://billions-api.nomadcoders.workers.dev/person"

export default async function BillionaryDetails({ id }: { id: string }) {
    const data = await getBillionaryDetails(id);
    return (
        <div className="grid grid-cols-1 gap-y-16 px-6 py-16 text-white">
            <div className="px-6 py-16 bg-slate-900">
                <img src={data.squareImage}></img>
                <h1 className="text-2xl font-semibold py-4">{data.name}</h1>
                <div className="grid grid-cols-1 gap-y-1 font-medium">
                    <div>Networth: {Math.floor(data.netWorth / 1000)} Billion</div>
                    <div>Country: {data.country}</div>
                    <div>Industry: {data.industries.join(', ')}</div>
                </div>
                <div className="pt-2">{data.bio.join(' ')}</div>
            </div>
            <div className="px-6 py-16 text-white bg-slate-900">
                <div>
                    <h1 className="text-2xl font-semibold">Financial Assets</h1>
                    <div className="grid grid-cols-4 gap-4">
                        {data.financialAssets.map((asset, index) => (
                            <div key={index} className="p-2 rounded-xl ring-1 ring-gray-500">
                                <div className="grid grid-cols-1 gap-1">
                                <div className="">Ticker: {asset.ticker}</div>
                                <div className="">Shares: {asset.numberOfShares.toLocaleString()}</div>
                                {asset.exerciseOptionPrice &&
                                    <div className="">Exercise Price: ${asset.exerciseOptionPrice}</div>
                                }
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

async function getBillionaryDetails(id: string) {
    const response = await fetch(`${detail_api_uri}/${id}`);
    const data = await response.json();
    return data;
}
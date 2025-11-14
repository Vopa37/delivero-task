import {format} from "date-fns";
import CountryRenderer from "@/components/shipment/CoutryRenderer.tsx";
import {providerLogos, type ProviderType} from "@/constants.ts";

const ShipmentListItem = (
    {
        trackingNumber,
        originCountry,
        destinationCountry,
        invoice,
        company,
        createdAt,
        mode,
        provider
    }: {
        trackingNumber: string,
        originCountry: string,
        destinationCountry: string,
        createdAt: string,
        invoice: {
            invoicedPrice: number,
            invoicedWeight: number
        },
        provider: string,
        company: {
            name: string
        },
        mode: string
    }
) => {
    return(
        <div className="rounded-lg border p-4 shadow flex gap-4 text-lg">
            <div className="w-1/3 flex items-center justify-center">
                <img src={providerLogos[provider.toUpperCase() as ProviderType]} alt={`Logo-${provider}`} />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <p><span className="font-bold">TRK#</span> {trackingNumber}</p>
                    <p>{company.name}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <div className="flex flex-col justify-between gap-2">
                        <p className="text-orange-400 font-bold">{invoice.invoicedPrice} Kč</p>
                        <div className="inline">
                            <CountryRenderer countryCode={originCountry}/>
                            <span> ➔ </span>
                            <CountryRenderer countryCode={destinationCountry}/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-2">
                        <p className="font-semibold">{format(createdAt, "dd.MM.yyyy")}</p>
                        <p className={`text-center rounded-2xl border border-solid font-semibold border-black ${mode === 'EXPORT' ? 'bg-green-200 text-green-800' : 'bg-purple-200 text-purple-800'}`}>{mode}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipmentListItem;
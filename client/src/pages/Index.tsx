import {useShipments} from "@/hooks/useShipments.ts";
import ShipmentList from "@/components/shipment/ShipmentList.tsx";

const Index = () => {
    const {data} = useShipments();

    return(
        data ? <ShipmentList shipments={data}/> : <div>Loading...</div>
    );
}

export default Index;
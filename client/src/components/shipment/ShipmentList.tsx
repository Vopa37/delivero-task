import type {ShipmentResponseDto} from "@shared/dto/ShipmentResponseDto.ts";
import ShipmentListItem from "@/components/shipment/ShipmentListItem.tsx";

const ShipmentList = ({shipments}: {
    shipments: ShipmentResponseDto[]
}) => {
    return <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {shipments.map((data) => (
            <ShipmentListItem {...data} key={data.id}/>
        ))}
    </div>;
}
export default ShipmentList;
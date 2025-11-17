import {useShipments} from "@/hooks/useShipments.ts";
import ShipmentList from "@/components/shipment/ShipmentList.tsx";
import Content from "@/components/layout/Content.tsx";
import Container from "@/components/layout/Container.tsx";
import {useState} from "react";
import ImportDialog from "@/components/import/ImportDialog.tsx";
import {Button} from "@/components/ui/button.tsx";

const Index = () => {
    const {data} = useShipments();

    const [importModalOpen, setImportModalOpen] = useState(false);

    return(
        data ? <Container>
                <ImportDialog open={importModalOpen} onOpenChange={()=>{setImportModalOpen(false)}}/>
                <div className="flex w-full justify-between">
                    <p>Total items: {data.length}</p>
                    <Button className="mb-4" onClick={()=>{setImportModalOpen(true)}}>Import invoices</Button>
                </div>
                <Content><ShipmentList shipments={data}/></Content>
        </Container> : <div>Loading...</div>
    );
}

export default Index;
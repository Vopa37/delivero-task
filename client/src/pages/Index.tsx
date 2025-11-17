import {useShipments} from "@/hooks/useShipments.ts";
import {useCompanies} from "@/hooks/useCompanies.ts";
import ShipmentList from "@/components/shipment/ShipmentList.tsx";
import Content from "@/components/layout/Content.tsx";
import Container from "@/components/layout/Container.tsx";
import {useState} from "react";
import ImportDialog from "@/components/import/ImportDialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import CompanyMultiselect from "@/components/shipment/CompanyMultiselect.tsx";

const Index = () => {
    const [importModalOpen, setImportModalOpen] = useState(false);
    const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

    const {data: shipments} = useShipments(selectedCompanies);
    const {data: companies} = useCompanies();

    console.log(selectedCompanies);

    return(
        <Container>
                <ImportDialog open={importModalOpen} onOpenChange={()=>{setImportModalOpen(false)}}/>
                {shipments ?
                <Content>
                    <div className="flex w-full justify-between items-center mb-4">
                        <p>Total items: {shipments.length}</p>
                        {companies && <CompanyMultiselect companies={companies} handleChange={setSelectedCompanies} selectedCompanies={selectedCompanies}/>}
                        <Button className="mb-4" onClick={()=>{setImportModalOpen(true)}}>Import invoices</Button>
                    </div>
                    <ShipmentList shipments={shipments}/>
                </Content>
                : <div>Loading...</div>}
        </Container>
    );
}

export default Index;
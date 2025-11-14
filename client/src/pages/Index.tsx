import {useShipments} from "@/hooks/useShipments.ts";

const Index = () => {
    const {data} = useShipments();

    console.log(data);
    return <div>Welcome to the Index Page</div>;
}

export default Index;
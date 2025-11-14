import express from "express";
import 'dotenv/config';
import ImportRoutes from "./routes/import.routes.ts";
import ShipmentRoutes from "./routes/shipment.routes.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/import", ImportRoutes);
app.use("/shipment", ShipmentRoutes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

import express from "express";
import 'dotenv/config';
import cors from "cors";
import ImportRoutes from "./routes/import.routes.ts";
import ShipmentRoutes from "./routes/shipment.routes.ts";
import CompanyRoutes from "./routes/company.routes.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(
    {
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
    }
));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/import", ImportRoutes);
app.use("/shipment", ShipmentRoutes);
app.use("/company", CompanyRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

import { Module } from "@nestjs/common";
import { ProductosModule } from "../Productos/Productos.module";
import { GamasModule } from "../Gamas/Gamas.module";
import { SeedController } from "./seed.controller";
import { SeedService } from "./seed.service";
import { AuthModule } from "../Auth/auth.module";

@Module({
    controllers: [SeedController],
    providers: [SeedService],
    imports: [GamasModule, ProductosModule, AuthModule]
})
export class SeedModule {}
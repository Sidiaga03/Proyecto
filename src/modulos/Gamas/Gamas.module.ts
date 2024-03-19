import { Module } from "@nestjs/common";
import { GamasController } from "./Gamas.controller";
import { GamasService } from "./Gamas.service";
import { Gamas } from "./entities/entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    controllers: [GamasController],
    providers: [GamasService],
    imports: [
      TypeOrmModule.forFeature([Gamas])
    ],
    exports: [GamasService, TypeOrmModule]
  })
  export class GamasModule {}
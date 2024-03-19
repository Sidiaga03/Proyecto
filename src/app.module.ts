import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SeedModule } from './modulos/seed/seed.module';
import { GamasModule } from './modulos/Gamas/Gamas.module';
import { ProductosModule } from './modulos/Productos/Productos.module';
import { ClientesModule } from './modulos/Clientes/clientes.module';
import { AuthModule } from './modulos/Auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "192.168.8.68",
      port: 5434,
      database: "SDAGJardineria",
      username: "postgress",
      password: "pswJardineria",
      autoLoadEntities: true,
      synchronize: true
    }),
    SeedModule,
    GamasModule,
    ProductosModule,
    ClientesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/user.module';
import { Restaurant } from '../models/restaurant.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Adresse } from 'models/adresse.module';
import { Avis } from 'models/avis.module';
import { CategoriePlat } from 'models/categorie-plat.module';
import { Favori } from 'models/favori.module';
import { Menu } from 'models/menu.module';
import { Plat } from 'models/plat.module';
import { Reponse } from 'models/reponse.module';
import { TagRestaurant } from 'models/tag-restaurant.module';
import { Tag } from 'models/tag.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Permet d'utiliser ConfigService partout sans réimporter
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb', // ou 'postgres' selon ta BDD
        host: "86.201.157.60",
        port: 3306,
        username:"aimlocktraineradmin1",
        password: configService.get<string>('DB_PASSWORD'), // password dans le .env, pas push pour des raisons de sécurité de securite
        database:"MenuFinder",
        entities: [User, Restaurant,Adresse,Avis,CategoriePlat,Favori,File,Menu,Plat,Reponse,TagRestaurant,Tag], // Liste des entités
        synchronize: true, // Désactive en production !
      }),
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

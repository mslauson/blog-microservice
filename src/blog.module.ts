import { Module } from "@nestjs/common";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";
import { DatabaseModule } from "./modules/database/database.module";
import { schemaProviders } from "./dao/providers/schemas.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [BlogController],
  providers: [BlogService  ,
  ...schemaProviders],
})
export class AppModule {}

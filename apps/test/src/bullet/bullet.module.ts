import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BulletModuleBase } from "./base/bullet.module.base";
import { BulletService } from "./bullet.service";
import { BulletController } from "./bullet.controller";
import { BulletResolver } from "./bullet.resolver";

@Module({
  imports: [BulletModuleBase, forwardRef(() => AuthModule)],
  controllers: [BulletController],
  providers: [BulletService, BulletResolver],
  exports: [BulletService],
})
export class BulletModule {}

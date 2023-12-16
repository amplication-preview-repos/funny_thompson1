import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BulletService } from "./bullet.service";
import { BulletControllerBase } from "./base/bullet.controller.base";

@swagger.ApiTags("bullets")
@common.Controller("bullets")
export class BulletController extends BulletControllerBase {
  constructor(
    protected readonly service: BulletService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

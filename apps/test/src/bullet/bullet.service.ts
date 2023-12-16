import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BulletServiceBase } from "./base/bullet.service.base";

@Injectable()
export class BulletService extends BulletServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

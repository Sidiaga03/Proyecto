import { PartialType } from "@nestjs/mapped-types";
import { CreateGamas } from "./create-Gamas.dto";

export class UpdateGamas extends PartialType(CreateGamas) {}
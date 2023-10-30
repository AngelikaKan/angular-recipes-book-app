import { Injectable } from '@angular/core';
import { MeasuringUnit } from 'src/app/model/recipe-model/MeasuringUnit';

@Injectable({
  providedIn: 'root',
})
export class EnumProcessingService {
  constructor() {}

  getMeasuringUnitMembers(): readonly string[] {
    const immutable_enum_vals: readonly string[] = Object.values(MeasuringUnit);
    return immutable_enum_vals;
  }
}

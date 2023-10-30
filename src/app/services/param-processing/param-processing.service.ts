import { Injectable } from '@angular/core';
import { Mode } from 'src/app/model/mode-model/Mode';
import { ParamItem } from 'src/app/model/param-item-model/ParamItem';

@Injectable({
  providedIn: 'root'
})
export class ParamProcessingService {

  isValidMode(extractedMode: string | null) {
    const modeExists = extractedMode != null;
    const validMode = Object.keys(Mode).some(value => value === extractedMode);

    return modeExists && validMode;
  }

  isValidParamItem(extractedParamItem: string | null) {
    const paramItemExists = extractedParamItem != null;
    const validParamItem = Object.keys(ParamItem).some(value => value === extractedParamItem);

    return paramItemExists && validParamItem;
  }

  isParamANumber(paramValue: string | null) {
    if (paramValue != null) {
      const match = paramValue.match(/^\d+$/);
      return match != null && true;
    }
    return false;
  } 
}

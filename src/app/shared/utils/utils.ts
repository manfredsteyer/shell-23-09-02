// this is for global shared functions
// NOTHING APP SPECIFIC SHOULD BE IN THIS FILE
//import { IItemModel } from '@carbonate/carbonate.interfaces';

export default class Utils {
  //static setSelectedItem(array: IItemModel[], key: string, match: string) {
  //  return array.map((item: any) => {
  //    if (item[key] === match) {
  //      return {
  //        ...item,
  //        selected: true,
  //      };
  //    } else {
  //      return {
  //        ...item,
  //        selected: false,
  //      };
  //    }
  //  });
  //}
//
  //static getSelectedItem(array: IItemModel[]) {
  //  return array.filter((item: any) => item.selected === true)[0];
  //}

  // this method is a cheap, halfway-decent way to convert a string to json without blowing up if it's not json
  // Usage:
  // import Utils from '@shared/utils/utils';
  // const jsonBody = Utils.tryParseJSON(error._body);
  static tryParseJSON(jsonString) {
    try {
      const o = JSON.parse(jsonString);

      // Handle non-exception-throwing cases:
      // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
      // but... JSON.parse(null) returns null, and typeof null === "object",
      // so we must check for that, too. Thankfully, null is falsey, so this suffices:
      if (o && typeof o === 'object') {
        return o;
      }
    } catch (e) {}

    return false;
  }
}

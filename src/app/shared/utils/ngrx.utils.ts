// This class is kept simple for easier consumption.  You must not add any dependencies that require injection here.  If you
//  need anything injected, you need to change this to a service and provide it in the app module, inject into constructors, etc, etc.
export default class NgRxUtils {
  static getUpdateObjectFor(item) {
    if (!item.id) {
      console.error(`item must have id property in NgRxUtils.getUpdateObjectFor()`)
    }

    const update = {
      id: item.id,
      changes: {...item} // changes must be serializable and not have a custom constructor
    };

    return update;
  }

  static leanHttpError(error) {
    // raw http errors will cause "Error: Detected unserializable action" errors when you try to pass them through NgRx.
    //  You can add back the "error" and "headers" properties if you need them (the only properties stripped out below), but
    //  you'll just need to serialize them into objects that don't have their own constructors.
    return {
      message: error.message,
      name: error.name,
      ok: error.ok,
      status: error.status,
      statusText: error.statusText,
      url: error.url
    }
  }

}

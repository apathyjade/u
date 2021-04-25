

const keyMapKey = Symbol('key');
const valueMapKey = Symbol('value');
interface EnumItem {
  key: string;
  value: number|string|null;
  label: string;
  [prop: string]: any;
}

class EnumHelper {
  [keyMapKey]: { [prop: string]: EnumItem } = {};

  [valueMapKey]: { [prop: string]: EnumItem } = {};

  data: EnumItem[] = [];

  constructor(list: EnumItem[]) {
    // this.data = [];
    list.forEach(item => {
      if (!item) {
        return;
      }
      Object.freeze(item);
      this[keyMapKey][item.key] = item;
      this[valueMapKey][`${item.value}`] = item;
      this.data.push(item);
    });
    Object.freeze(this[keyMapKey]);
    Object.freeze(this[valueMapKey]);
    Object.freeze(this.data);
  }

  get(val: number|string|null): EnumItem|undefined {
    return this.getByValue(val) || this.getByKey(`${val}`);
  }

  getByValue(val: number|string|null): EnumItem|undefined {
    return this[valueMapKey][`${val}`];
  }

  getByKey(key: string): EnumItem|undefined {
    return this[keyMapKey][key];
  }

  getValue(key: string): number|string|null {
    const item = this.getByKey(key);
    if (!item) {
      return null;
    }
    return item.value;
  }

  getKey(val: number|string|null): string|null {
    const item = this.getByValue(val);
    if (!item) {
      return null;
    }
    return item.key;
  }

  getLabel(val: number|string|null): string|null {
    const item = this.get(`${val}`);
    if (!item) {
      return null;
    }
    return item.label;
  }
}
Object.freeze(EnumHelper)
function createEnumHelper (list: EnumItem[], props: object|undefined) {
  const inc: EnumHelper = new EnumHelper(list);
  if (props) {
    return Object.assign(inc, props);
  }
  return inc;
}

export default EnumHelper;
export { EnumItem, createEnumHelper }

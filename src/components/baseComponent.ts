export interface IComponentData {
  name: string;
  friendlyName: string;
  type: string;
  props: unknown;
  lookupsApi: string;
  items: string[];
  defaultVal: any;
}

export abstract class BaseComponent {
  private data: IComponentData;

  constructor(data: IComponentData) {
    this.data = data;
  }

  public get type() {
    return this.data.type;
  }

  public get name() {
    return this.data.name;
  }

  public get friendlyName() {
    return this.data.friendlyName;
  }

  public get props() {
    return this.data.props;
  }

  public get defaultVal() {
    return this.data.defaultVal;
  }

  public isTypeOf(type: string) {
    return this.type.toLowerCase() === type;
  }
}

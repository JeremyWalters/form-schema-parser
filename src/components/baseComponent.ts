export interface IPossibleProps {
  required?: boolean;
  readonly?: boolean;
}

export interface IComponentData {
  name: string;
  friendlyName: string;
  type: string;
  props: IPossibleProps;
  lookupsApi: string;
  items: string[];
  defaultVal: any;
  hidden: boolean;
  htmlClass?: string;
  format?: 'date' | 'currency' | 'tel';
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

  public get hidden() {
    return this.data.hidden;
  }

  public get htmlClass(): string | undefined {
    return this.data.htmlClass;
  }

  public get format(): string | undefined {
    return this.data.format;
  }

  public isTypeOf(type: string) {
    return this.type.toLowerCase() === type;
  }
}

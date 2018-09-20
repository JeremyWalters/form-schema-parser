import { BaseComponent, IComponentData } from './baseComponent';

export class DropDownComponent extends BaseComponent {
  private _dropDownItems!: object[] | string[];

  constructor(private componentData: IComponentData, private lookupService: (lookupsApi: string) => Promise<any>) {
    super(componentData);

    this.setDropDownItems();
  }

  private async setDropDownItems() {
    if (this.componentData.lookupsApi) {
      const response = await this.lookupService(this.componentData.lookupsApi);

      const items = [];
      for (const result of response.data.results) {
        const cObject = {
          text: result.name,
          value: { id: result.id },
        };

        items.push(cObject);
      }

      this.dropDownItems = items;
    } else {
      this.dropDownItems = this.componentData.items;
    }
  }

  public set dropDownItems(items: object[] | string[]) {
    this._dropDownItems = items;
  }

  public get dropDownItems() {
    return this._dropDownItems;
  }
}

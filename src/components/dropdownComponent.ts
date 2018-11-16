import { BaseComponent, IComponentData } from './baseComponent';

export class DropDownComponent extends BaseComponent {
  private _dropDownItems: object[] | string[] = [];

  constructor(private componentData: IComponentData, private lookupService: (lookupsApi: string) => Promise<any>) {
    super(componentData);

    this.setDropDownItems();
  }

  private async setDropDownItems() {
    if (this.componentData.lookupsApi) {
      const response = await this.lookupService(this.componentData.lookupsApi);

      let results = [];
      if (response.data && response.data.results) {
        results = response.data.results;
      } else if (response.data && !response.data.results) {
        results = response.data;
      }

      this.dropDownItems = results;
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

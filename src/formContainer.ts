import { BaseComponent, IComponentData } from './components/baseComponent';

export class FormContainer {
  private _components: BaseComponent[] = [];

  public add(component: BaseComponent): void {
    this.components.push(component);
  }

  get components() {
    return this._components;
  }

  /**
   * This will build and return a default model
   * We will probably need to so we can identify where data should be polulated in case the form is going
   * to populated programaticly
   */
  public getDefaultModel() {
    // TODO: Default model
  }
}

export interface IForm {
  name: string;
  fields: IComponentData[];
  applyToAllFields: IComponentData;
}

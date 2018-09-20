import { BaseComponent, IComponentData } from './components/baseComponent';

export class FormContainer {
  private _components: BaseComponent[] = [];

  public add(component: BaseComponent): void {
    this.components.push(component);
  }

  get components() {
    return this._components;
  }
}

export interface IForm {
  name: string;
  fields: IComponentData[];
}

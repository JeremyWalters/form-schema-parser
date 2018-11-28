import { IComponentData } from './components/baseComponent';
import { CheckBoxComponent } from './components/checkboxComponent';
import { DropDownComponent } from './components/dropdownComponent';
import { DropDownSearchComponent } from './components/dropdownSearchComponent';
import { LabelComponent } from './components/labelComponent';
import { TextFieldComponent } from './components/textfieldComponent';
import { FormContainer, IForm } from './formContainer';

export class FormSchemaParser {
  private schemaComponents!: IComponentData[];
  private _parsedForm!: FormContainer;
  constructor(private formSchema: IForm, private lookupService: (lookupsApi: any) => any) {}

  public parseAndReturnForm() {
    this.parseSchema();
    return this.parsedForm;
  }

  public parseSchema() {
    this.schemaComponents = this.formSchema.fields;
    this.parseApplyToAllFields();
  }

  public createFormContainer() {
    const formContainer = new FormContainer();

    for (const field of this.schemaComponents) {
      switch (field.type) {
        case 'input':
          formContainer.add(new TextFieldComponent(field));
          continue;
        case 'checkbox':
          formContainer.add(new CheckBoxComponent(field));
          continue;
        case 'dropdown':
          formContainer.add(new DropDownComponent(field, this.lookupService));
          continue;
        case 'dropdownSearch':
          formContainer.add(new DropDownSearchComponent(field, this.lookupService));
          continue;
        case 'label':
          formContainer.add(new LabelComponent(field));
          continue;
        default:
          // Log error here
          continue;
      }
    }

    this.parsedForm = formContainer;
  }

  // TODO: applyToAllFields should not override field properties
  private parseApplyToAllFields() {
    if (!this.formSchema.applyToAllFields) {
      return;
    }

    for (const field in this.schemaComponents) {
      if (this.schemaComponents.hasOwnProperty(field)) {
        for (const applyField in this.formSchema.applyToAllFields) {
          if (!(this.schemaComponents[field] as any)[applyField]) {
            (this.schemaComponents[field] as any)[applyField] = (this.formSchema.applyToAllFields as any)[applyField];
          }
        }
      }
    }
  }

  get parsedForm() {
    return this._parsedForm;
  }

  set parsedForm(parsedForm: FormContainer) {
    this._parsedForm = parsedForm;
  }
}

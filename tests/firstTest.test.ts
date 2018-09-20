import { FormSchemaParser } from '../src/formSchemaParser';
import * as TestData from './input-fields.json';

describe('Components Tests', () => {
  test('Test Input Component', () => {
    const formParser = new FormSchemaParser(<any>TestData, () => {});
    formParser.parseSchema();
    formParser.createFormContainer();

    // Adjust after test data has been modified
    expect(formParser.parsedForm.components.length).toBe(2);

    // Check form field lengths
    expect(formParser.parsedForm.components.length).toBe((<any>TestData).fields.length);

    for (let i = 0; i < (<any>TestData).fields.length; i++) {
      expect(formParser.parsedForm.components[i].isTypeOf('input')).toBe(true);
      expect(formParser.parsedForm.components[i].friendlyName).toBe((<any>TestData).fields[i].friendlyName);
      expect(formParser.parsedForm.components[i].name).toBe((<any>TestData).fields[i].name);
    }
  });
});

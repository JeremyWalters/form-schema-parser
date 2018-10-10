import { FormSchemaParser } from '../src/formSchemaParser';
import * as TestData from './input-fields.json';
import * as TestData2 from './schema-properties.json';

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

  test('Test Attribute: "applyToAllFields"', () => {
    const formParser = new FormSchemaParser(TestData2 as any, () => {});
    formParser.parseSchema();
    formParser.createFormContainer();

    // Adjust after test data has been modified
    expect(formParser.parsedForm.components.length).toBe(2);

    expect(formParser.parsedForm.components[0].isTypeOf('input')).toBe(true);
    expect(formParser.parsedForm.components[0].friendlyName).toBe('First Test Input');
    expect(formParser.parsedForm.components[0].name).toBe('testInput1');
    expect(formParser.parsedForm.components[0].props.readonly).toBe(true);
    expect(formParser.parsedForm.components[0].htmlClass).toBe('xs12 md6');

    expect(formParser.parsedForm.components[1].isTypeOf('input')).toBe(true);
    expect(formParser.parsedForm.components[1].friendlyName).toBe('Second Test Input');
    expect(formParser.parsedForm.components[1].name).toBe('testInput2');
    expect(formParser.parsedForm.components[1].props.readonly).toBe(true);
    expect(formParser.parsedForm.components[1].htmlClass).toBe('xs12 md6');
  });
});

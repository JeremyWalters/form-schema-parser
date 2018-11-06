import { FormSchemaParser } from '../src/formSchemaParser';
import * as TestData from './input-fields.json';
import * as TestData2 from './schema-properties.json';
import * as TestDataFormat from './component-data-format.json';

describe('Components Tests', () => {
  test('Test Input Component', () => {
    const formParser = new FormSchemaParser(TestData as any, () => {});
    formParser.parseSchema();
    formParser.createFormContainer();

    // Adjust after test data has been modified
    expect(formParser.parsedForm.components.length).toBe(3);

    // Check form field lengths
    expect(formParser.parsedForm.components.length).toBe((TestData as any).fields.length);

    expect(formParser.parsedForm.components[0].isTypeOf('input')).toBe(true);
    expect(formParser.parsedForm.components[0].friendlyName).toBe((TestData as any).fields[0].friendlyName);
    expect(formParser.parsedForm.components[0].name).toBe((TestData as any).fields[0].name);
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

  test('Test Label Component', () => {
    const formParser = new FormSchemaParser(TestData as any, () => {});
    formParser.parseSchema();
    formParser.createFormContainer();

    expect(formParser.parsedForm.components[2].isTypeOf('label')).toBe(true);
    expect(formParser.parsedForm.components[2].friendlyName).toBe((TestData as any).fields[2].friendlyName);
    expect(formParser.parsedForm.components[2].name).toBe((TestData as any).fields[2].name);
  });

  test('Test Format Data Property', () => {
    const formParser = new FormSchemaParser(TestDataFormat as any, () => {});
    formParser.parseSchema();
    formParser.createFormContainer();

    expect(formParser.parsedForm.components[0].format).toBe('date');
    expect(formParser.parsedForm.components[1].format).toBe('currency');
    expect(formParser.parsedForm.components[2].format).toBe('tel');
  });
});

import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';

@Pipe({ name: 'getPropertyAndAssign' })
export class GetPropertyAndAssignPipe implements PipeTransform {
  constructor(private cdRef: ChangeDetectorRef) {}

  transform(
    objectList: any[],
    component: any,
    ...propertyAndVariablePairs: (string | undefined)[] // Rest parameter for property/variable pairs
  ): any[] {
    if (!objectList || propertyAndVariablePairs.length % 2 !== 0) {
      return objectList; // Handle potential errors: empty list or uneven pairs
    }

    if (propertyAndVariablePairs.length % 2 === 1) {
      // Check for odd number of arguments
      const variableNameForObject = propertyAndVariablePairs.pop(); // Extract last argument as variable name for object
      if (variableNameForObject) {
        component[variableNameForObject] = objectList; // Assign entire objectList to the variable
      }
    }

    const extractedValues: { [key: string]: any[] } = {}; // Object to store extracted values

    for (let i = 0; i < objectList.length; i++) {
      for (let j = 0; j < propertyAndVariablePairs.length; j += 2) {
        const propertyName = propertyAndVariablePairs[j];
        const variableName = propertyAndVariablePairs[j + 1];

        if (propertyName && variableName) {
          // Check if property name is provided
          extractedValues[variableName] = extractedValues[variableName] || []; // Initialize array if needed
          extractedValues[variableName].push(objectList[i][propertyName]);
        }
      }
    }

    // Assign extracted values to component variables
    for (const variableName in extractedValues) {
      component[variableName] = extractedValues[variableName];
    }

    this.cdRef.markForCheck(); // Trigger change detection once after all assignments

    return objectList; // Optional: Return unchanged array
  }
}

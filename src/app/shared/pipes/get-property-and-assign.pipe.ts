import { Pipe, PipeTransform } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core'; // Inject ChangeDetectorRef

@Pipe({ name: 'getPropertyAndAssign' })
export class GetPropertyAndAssignPipe implements PipeTransform {
  constructor(private cdRef: ChangeDetectorRef) {} // Inject ChangeDetectorRef

  transform(
    objectList: any[],
    propertyName1: string, // Property name for assignedBoth
    variableName1: string, // Variable name for assignedBoth
    propertyName2: string, // Property name for assignedHuge
    variableName2: string, // Variable name for assignedHuge
    component: any
  ): any[] {
    let propertyValue1: string[] = [];
    let propertyValue2: string[] = [];
    if (!objectList || !propertyName1 || !variableName1 || !component) {
      // Handle potential errors
      return objectList;
    }

    // Iterate through each object in the list
    for (let i = 0; i < objectList.length; i++) {
      propertyValue1.push(objectList[i][propertyName1]);
      propertyValue2.push(objectList[i][propertyName2]);
      this.cdRef.markForCheck(); // Manually trigger change detection for each iteration
    }

    component[variableName1] = propertyValue1; // Assign value to assignedBoth
    component[variableName2] = propertyValue2; // Assign value to assignedHuge
    return objectList; // Return unchanged array (optional)
  }
}

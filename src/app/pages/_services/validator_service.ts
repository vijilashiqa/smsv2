import { FormGroup } from '@angular/forms';


export const sumValidator   = (limit: number, ...controlerName: string[]) => {
    return (formGroup: FormGroup) => {
      const sum = controlerName.reduce((x,y)=> x + parseFloat(formGroup.value[y] || '0'), 0)
      const status = limit !== sum;
      for(let ctrlName of controlerName) {
        const ctrl = formGroup.controls[ctrlName]
        if (ctrl.errors && !ctrl.errors.limitNotMatch) continue;
        if (status) {
            ctrl.setErrors({
                limitNotMatch: true
            });
        } else {
            ctrl.setErrors(null);
        }
      }
    }
  }

  
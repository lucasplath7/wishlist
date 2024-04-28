import { AbstractControl, ValidationErrors } from '@angular/forms';

export function invalidEmailDomain(control: AbstractControl) : ValidationErrors | null {
  const value = control.value?.toLowerCase();
  const hosts = ['yahoo.com', 'outlook.com']

  if (!value) {
    return null;
  }

  const matches = hosts.some(host => value.indexOf(`@${host}`) > -1);

  return matches ? { invalidEmailDomain: true } : null;
}
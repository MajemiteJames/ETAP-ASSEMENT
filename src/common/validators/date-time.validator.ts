// src/common/validators/date-time.validator.ts
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'dateTimeFormat', async: false })
export class DateTimeFormatValidator implements ValidatorConstraintInterface {
  validate(value: any): boolean {
    // Regular expression for YYYY-MM-DD HH:mm:ss format
    const dateTimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    return typeof value === 'string' && dateTimeRegex.test(value);
  }

  defaultMessage(): string {
    return 'Invalid date-time format. Please use YYYY-MM-DD HH:mm:ss';
  }
}

export function IsDateTimeFormat(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string): void {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: DateTimeFormatValidator,
    });
  };
}

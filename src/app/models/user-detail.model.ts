import { ComponentFactory } from '@angular/core';
import { Address } from './address.model';
import { Company } from './company.model';

export class UserDetail {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public phone: string;
  public website: string;
  public profilepicture: string;
  public address: Address;
  public company: Company
}

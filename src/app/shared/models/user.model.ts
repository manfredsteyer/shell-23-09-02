import { User as LoginUser } from '@signifyhealth/angular-common';

export class User extends LoginUser {
    expires?: Date;
    roles?: string[];
    permissions?: string[];
}
export class UserAccess {
  roles: string[];
  permissions: string[];
}
export class UserDetail {
  firstName: string;
  lastName: string;
  username: string;
}

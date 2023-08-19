export class User {
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

export type User = {
  id: string;
  fistName: string;
  lastName?: string | null;
  email?: string | null;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  role: AccountRole;
  passwordHash: string;
  createdLocally: boolean;
};

export enum AccountRole {
  STAFF,
  MANAGER,
  ADMIN,
  DEVELOPER,
}

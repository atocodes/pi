import * as bcrypt from "bcrypt";
import { AuthRepoImpl } from "../repositories/auth.repo.impl";
import { AuthRepo } from "../interfaces/auth.repo";

export class AuthService implements AuthRepo {
  authRepo: AuthRepoImpl;

  constructor(repo: AuthRepoImpl) {
    this.authRepo = repo;
  }

  async findByUserName(username: string) {
    return await this.authRepo.findByUserName(username);
  }

  async loginUser({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const user = await this.findByUserName(username);

    if (!user) {
      throw new Error("User not found");
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);

    if (!isValid) {
      throw new Error("Invalid Credentails");
    }

    return user;
  }
}

import { AuthRepoImpl } from "./repositories/auth.repo.impl";
import { AuthService } from "./services/auth.service";

export const authService = new AuthService(new AuthRepoImpl());

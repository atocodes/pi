import { ProfileRepoImpl } from "./repositories/profile.repo.impl";
import { ProfileService } from "./services/profile.service";

export const profileService = new ProfileService(new ProfileRepoImpl());

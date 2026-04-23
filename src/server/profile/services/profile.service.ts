import { ProfileRepo } from "../interfaces/profile.repo";
import { ProfileRepoImpl } from "../repositories/profile.repo.impl";

export class ProfileService implements ProfileRepo {
  profileRepo: ProfileRepoImpl;

  constructor(repo: ProfileRepoImpl) {
    this.profileRepo = repo;
  }

  // async getProfile() {
  //   return this.profileRepo.getProfile();
  // }
}

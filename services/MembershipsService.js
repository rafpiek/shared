import {isValidForMembership} from "../policies/MembershipPolicies";
import ValidForMembership from "../policies/ValidForMembership";
import CreateMember from "../commands/CreateMember";

export default class MembershipsService {

  constructor(user) {
    this.user = user
  }

  async createMembership() {
    const createMemberCommand = new CreateMember(this.user)
    await createMemberCommand.call()

    if (createMemberCommand.success) {
      const user = createMemberCommand.result
      // DO STH WITH USER
    } else {
      const errorMessage = createMemberCommand.errorMessage
      // DO STH WITH ERROR
    }
  }

  setMemberships() {

  }

  removeMembership() {

  }

  mergeMembership() {
    const validForMembership = new ValidForMembership(this.user)

    if (validForMembership.apply()) {
      // do the logic
    }

  }

  submitMembershipRequest() {
    if (isValidForMembership(this.user)) {
      // LOGIC
    }
  }
}

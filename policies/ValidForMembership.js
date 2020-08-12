export default class ValidForMembership {
  constructor(user) {
    this.user = user
  }

  apply() {
    this.user.isActive && !this.user.isAdmin
  }
}

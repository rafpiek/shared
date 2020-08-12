import BaseCommand from "./BaseCommand";
import {UserActions} from "../redux/UserSlice";
import axios from 'axios'

export default class CreateMember extends BaseCommand {

  constructor(memberData) {
    super();
    this.memberData = memberData;
  }

  async call() {
    try {
      const response = axios.post('http://membership.com/member', { member: this.memberData })
      const member = response.data.member
      this.updateStore(member)
      this.announceSuccess().with(member)
    } catch (error) {
      console.error(error.message)
      this.blameFailure(error.message)
    }
  }

  updateStore(member) {
    this.dispatch(UserActions.setMember(member))
  }
}

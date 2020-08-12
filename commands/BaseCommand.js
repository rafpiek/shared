import { store } from "../redux/store";

export default class BaseCommand implements ICommand {

  constructor() {
    this.dispatch = store.dispatch;
    this.state = store.getState();
    this.failure = false;
    this.success = false;
    this.result = null;
  }

  call(): void {
  }

  announceSuccess() {
    this.success = true;
    this.failure = false;
    return this;
  }

  blameFailure(errorMessage?: string | undefined) {
    this.success = false;
    this.failure = true;
    if (errorMessage) {
      this.errorMessage = errorMessage;
    }
  }

  _setResult(result: any) {
    this.result = result;
  }

  with(result: any) {
    this._setResult(result)
  }

}

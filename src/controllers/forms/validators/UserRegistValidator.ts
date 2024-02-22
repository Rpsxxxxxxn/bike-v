import UserForm from "../UserForm";
import SingleValidator from "./SingleValidator";

export default class UserRegistValidator {
    private form: UserForm;
    private constructor(form: UserForm) {
        this.form = form;
    }

    static create(form: UserForm) {
        return new UserRegistValidator(form);
    }

    public isValid(): boolean {
        return SingleValidator.isLengthOver(this.form.username, 3)
            && SingleValidator.isEmail(this.form.email)
            && SingleValidator.isPassword(this.form.password)
            && SingleValidator.isPassword(this.form.passwordConfirmation)
            && SingleValidator.isSame(this.form.password, this.form.passwordConfirmation);
    }

    public isInvalid(): boolean {
        return !this.isValid();
    }
}
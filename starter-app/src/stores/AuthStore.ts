import { makeAutoObservable} from "mobx";
import * as authApi from "../api/modules/auth";
import * as registApi from "../api/modules/regist";

class AuthStore {
    token = "";
    email = "";
    constructor() {
        makeAutoObservable(this);
    }

    async login(email: string, password: string) {
        this.email = email;
        const result = await authApi.login({email, password});
        this.token = result.token;
         
    }
    
    async registration( email: string, password: string) {
        this.email = email;
        const result = await registApi.regist({email, password});
        this.token = result.token;
         
    }

    logout() {
        this.email = "";
        this.token = "";
    }
}

export default AuthStore;
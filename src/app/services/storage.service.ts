export class StorageService {

    constructor() { }

    getApiUrl() {
        return 'https://user-imc-api.herokuapp.com'
    }

    setLocal(key: string, obj: any) {
        localStorage.setItem(key, JSON.stringify(obj));
    }

    getLocal(key: string) {
        const obj = localStorage.getItem(key);
        return obj ? JSON.parse(obj) : null;
    }

    localDeleteAll() {
        localStorage.clear();
    }

    localDeleteByKey(key: string) {
        localStorage.removeItem(key);
    }

    isUserLoggedIn() {
        let user = localStorage.getItem('token')
        console.log(user);
        return !(user === null)
    }
}
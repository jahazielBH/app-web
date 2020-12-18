export class StorageService {

    constructor() { }

    getApiUrl() {
       
        //return 'http://34.68.87.191:5014'
        //return 'http://localhost:8080'
        return 'http://34.122.134.229:5044'

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
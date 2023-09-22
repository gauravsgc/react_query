
class CookieConstants {

    private xtoken: string = "";


    public get_cookie() {
        this.xtoken = (document.cookie.split(';').map(c => c.trim()).filter(c => c.startsWith('csrftoken' + '=')))[0].split('=')[1]
        return this.xtoken;
    }



}

export default new CookieConstants()  
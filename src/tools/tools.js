export default class Tools {

    static format(data, separator) {
        var d = new Date(data);
        separator = separator ? separator : "/"
        var datestring = String(d.getDate()).padStart(2, '0') + separator + String((d.getMonth() + 1)).padStart(2, '0') + separator + d.getFullYear()
        return datestring;
    }


    static upperCaseFirtLetter(word) {
        return word[0].toUpperCase() + word.substr(1);
    }

    static async getData(url){
        var myHeaders = new Headers();
        var header = {
            method: 'GET',
            headers: myHeaders,
        };
        return fetch(url, header)
            .then(function (response) {
                return response.json();
            })
            .then(function (responseJson) {
                if(!responseJson){
                    return false
                }
                return responseJson;
            });
    }
}
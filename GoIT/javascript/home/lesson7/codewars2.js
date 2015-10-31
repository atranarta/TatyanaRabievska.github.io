function createSecretHolder(secret) {

    var obj = {
        setSecret: function (x) {
            secret = x;
        },
        getSecret: function () {
            return secret;
        }
    };

    return obj;

}
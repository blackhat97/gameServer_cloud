/* config/email-verification.js */
var User = require('../app/models/user');
module.exports = function(nev){
    nev.configure({
        verificationURL: 'https://game.coalasw.com/email-verification/${URL}',
        URLLength: 48,
        // mongo-stuff
        persistentUserModel: User,
        expirationTime: 86400,
        // emailing options
        transportOptions: {
            service:"Gmail",
	    host: 'localhost',
	    port: '465',
            auth: {
                user: 'coalasoftware@gmail.com',
                pass: 'coalasw0409'
            }
        },
        verifyMailOptions: {
            from: 'Do Not Reply <user@gmail.com>',
            subject: 'Confirm your account',
            html: '<p>Please verify your account by clicking <a href="${URL}">this link</a>. If you are unable to do so, copy and ' +
            'paste the following link into your browser:</p><p>${URL}</p>',
            text: 'Please verify your account by clicking the following link, or by copying and pasting it into your browser: ${URL}'
        },
        shouldSendConfirmation: true,
        confirmMailOptions: {
            from: 'Do Not Reply <ff@naver.com>',
            subject: 'Successfully verified!',
            html: '<p>Your account has been successfully verified.</p>',
            text: 'Your account has been successfully verified.'
        },
        // hashingFunction: null
    }, function(err, options){
        if(err) console.error(err);
        console.log('configured: ' + (typeof options === 'object'));
    });
    nev.generateTempUserModel(User, function(err, tempUserModel) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('generated temp user model: ' + (typeof tempUserModel === 'function'));
    });
};

import { expect } from 'chai';
import { 
    registerUserValidator, 
    loginUserValidator } from '../../src/validators/user.validator';

let expecteErrorValue;
function myNext(error = false) {
    if (error != false) {
        error = true;
    }
    expect(error).to.be.equal(expecteErrorValue);
}

/**
 * Test the registerUserValidator
 * - should register user correct error false
 * - should register user incorrect error true
 */
describe('registerUserValidator', () => {
    it('should register user correct error false', () => {
        // error will not be in here
        expecteErrorValue = false;
        registerUserValidator(
            {
                "body": {
                    "firstName": "Ganesh",
                    "lastName": "Shiv",
                    "email": "ganesh@gmail.com",
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
    });

    it('should register user incorrect error true', () => {
        // error will be in here
        expecteErrorValue = true;
        // first name is reuired
        registerUserValidator(
            {
                "body": {
                    "lastName": "Shiv",
                    "email": "ganesh@gmail.com",
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
        // first name should be min 4 length
        registerUserValidator(
            {
                "body": {
                    "firstName": "Ga",
                    "lastName": "Shiv",
                    "email": "ganesh@gmail.com",
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
        // last name should required
        registerUserValidator(
            {
                "body": {
                    "firstName": "Ganesh",
                    "email": "ganesh@gmail.com",
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
        // last name should min 4 length
        registerUserValidator(
            {
                "body": {
                    "firstName": "Ganesh",
                    "lastName": "Siv",
                    "email": "ganesh@gmail.com",
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
        // email should required
        registerUserValidator(
            {
                "body": {
                    "firstName": "Ganesh",
                    "lastName": "Shiv",
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
        // should valid email
        registerUserValidator(
            {
                "body": {
                    "firstName": "Ganesh",
                    "lastName": "Shiv",
                    "email": "ganesh",
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
        // password required
        registerUserValidator(
            {
                "body": {
                    "firstName": "Ganesh",
                    "lastName": "Shiv",
                    "email": "ganesh@gmail.com"
                },
            },
            {},
            myNext
        );
        // password length be min 6
        registerUserValidator(
            {
                "body": {
                    "firstName": "Ganesh",
                    "lastName": "Shiv",
                    "email": "ganesh@gmail.com",
                    "password": "@123"
                },
            },
            {},
            myNext
        );
    });
});

/**
 * Test the loginUserValidator
 * - should login user correct error false
 * - should login user incorrect error true
 */
describe('loginUserValidator', () => {
    it('should login user correct error false', () => {
        // error will not be in here
        expecteErrorValue = false;
        loginUserValidator(
            {
                "body": {
                    "email": "ganesh@gmail.com",
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
    });

    it('should login user incorrect error true', () => {
        // error will be in here
        expecteErrorValue = true;
        // email should required
        loginUserValidator(
            {
                "body": {
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
        // should valid email
        loginUserValidator(
            {
                "body": {
                    "email": "ganesh",
                    "password": "ganesh@123"
                },
            },
            {},
            myNext
        );
        // password required
        loginUserValidator(
            {
                "body": {
                    "email": "ganesh@gmail.com"
                },
            },
            {},
            myNext
        );
        // password length be min 6
        loginUserValidator(
            {
                "body": {
                    "email": "ganesh@gmail.com",
                    "password": "@123"
                },
            },
            {},
            myNext
        );
    });
});

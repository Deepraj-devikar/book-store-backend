import { expect } from "chai";
import { reviewValidator } from "../../src/validators/review.validator";

let expectedErrorValue;
function myNext(error = false) {
    if (error != false) {
        error = true;
    }
    expect(error).to.be.equal(expectedErrorValue);
}

/**
 * Test the reviewValidator
 * - should review is correct error is false
 * - should review is incorrect error is true
 */
describe('reviewValidator', () => {
    it('should review is correct error is false', () => {
        // error will not be in here
        expectedErrorValue = false;
        reviewValidator(
            {
                body: {
                    userID: "sdfkhdfphahdfha",
                    description: "Hello i am description",
                    rating: 4.2
                }
            },
            {},
            myNext
        );
        reviewValidator(
            {
                body: {
                    userID: "sdfkhdfphahdfha",
                    description: "Hello i am description",
                    rating: '4.2'
                }
            },
            {},
            myNext
        );
        reviewValidator(
            {
                body: {
                    userID: "sdfkhdfphahdfha",
                    description: "Hello i am description",
                    rating: 4
                }
            },
            {},
            myNext
        );
        reviewValidator(
            {
                body: {
                    userID: "sdfkhdfphahdfha",
                    description: "Hello i am description",
                    rating: '4'
                }
            },
            {},
            myNext
        );
    });
})

import { expect } from 'chai';
import request from 'supertest';

import app from '../../src/index';

import { user1Token } from './user.test'

const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmU4ZWRlNDI2OTkxMWY5NDhmOTQ5ZCIsImVtYWlsIjoicHJhdmluQGdtYWlsLmNvbSIsImlhdCI6MTY3MzY2ODM1Nn0.e68c_dYMWPiKofma6X2zJFP0xUi-5bzougUYMAxG6lv";
let book;
const wrongBookId = "63c922898f37bb601c2a965a";

describe('Book APIs Test', () => {
    /**
	 * Test the GET all books route
	 * - should get all books and return book details
	 * - should get all books and return error for invalid token
	 */
	describe('GET /books', () => {
		it('should get all books', (done) => {
			request(app)
				.get('/api/v1/books')
                .set({Authorization: "bearer "+user1Token})
				.end((err, res) => {
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.message).to.be.an('string');
					expect(res.body.message).to.be.oneOf([
						"All books fetched successfully",
						"All books fetched successfully from redis cache"
					]);
					expect(res.body.data).to.be.an('array');
					const books = res.body.data;
					for (let index = 0; index < books.length; index++) {
						expect(books[index]).to.have.property("productID");
						expect(books[index]).to.have.property("description");
					}
					done();
				});
		});

		it('should get all books and return error for invalid token', (done) => {
			request(app)
				.get('/api/v1/books')
                .set({Authorization: "bearer "+wrongToken})
				.end((err, res) => {
					expect(res.statusCode).to.be.equal(500);
					expect(res.body).to.be.an('object');
					expect(res.body.message).to.be.an('string');
					expect(res.body.message).to.be.equal("invalid signature");
					done();
				});
		});
	});
});
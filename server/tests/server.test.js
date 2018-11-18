const expect = require('expect');
const request = require('supertest');
const { app } = require('../server.js');


describe('GET /geocode', () => {
    it('should get geocode', (done) => {

        var address = "berlin";

        request(app)
            .get(`/api/geocode?address=${address}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.lat).toBe(52.52000659999999);
                expect(res.body.lng).toBe(13.404954);
            })
            .end(done);
    });

    it('should not get geocode with not exist address', (done) => {

        var notExistAddress = 'asasadsadas';

        request(app)
            .get(`/api/geocode?address=${notExistAddress}`)
            .expect(404)
            .end(done);
    });

    it('should not get geocode with null address', (done) => {

        request(app)
            .get(`/api/geocode?address=`)
            .expect(404)
            .end(done);
    });

});



describe('GET /address', () => {
    let lat = "52.52000659999999";
    let lng = "13.404954";

    it('should get address', (done) => {
        request(app)
            .get(`/api/address?lat=${lat}&lng=${lng}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.address).toContain('Berlin, Germany');
            })
            .end(done);
    });

    let faillat = "1";
    let faillng = "1";

    it('should not get address because of not found error ', (done) => {
        request(app)
            .get(`/api/address?lat=${faillat}&lng=${faillng}`)
            .expect(404)
            .end(done);
    });


    it('should not get address because of validation error', (done) => {
        request(app)
            .get(`/api/address`)
            .expect(404)
            .end(done);
    });

});

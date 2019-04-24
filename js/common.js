'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = 'ec2-99-81-194-20.eu-west-1.compute.amazonaws.com';
var token = '651b08e0-8360-46a9-aea7-12af4b45a3c0';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}

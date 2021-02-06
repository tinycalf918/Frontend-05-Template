var assert = require('assert');

import {parseHTML} from '../src/parser.js';

describe("parse html", function(){
    it('<a></a>', () => {
        const tree = parseHTML('<a></a>');
        assert.strictEqual(tree.children.length, 1);
        assert.strictEqual(tree.children[0].tagName, 'a');
        assert.strictEqual(tree.children[0].children.length, 0);
    });
    it('<a href="www.baidu.com"></a>', () => {
        const tree = parseHTML('<a href="www.baidu.com"></a>');
        assert.strictEqual(tree.children[0].attributes.length, 1);
    });
    it('<a href="www.baidu.com">baidu</a>', () => {
        const tree = parseHTML('<a href="www.baidu.com">baidu</a>');
        assert.strictEqual(tree.children[0].children.length, 3);
    });
    it('<a href="www.baidu.com">baidu</a>', () => {
        const tree = parseHTML('<a href="www.baidu.com">baidu</a>');
        assert.strictEqual(tree.children[0].children.length, 3);
    });
    it('<a   href="www.baidu.com">baidu</a>', () => {
        const tree = parseHTML('<a   href="www.baidu.com">baidu</a>');
        assert.strictEqual(tree.children[0].children.length, 3);
    });
    it('<a href="www.baidu.com" class="a">baidu</a>', () => {
        const tree = parseHTML('<a   href="www.baidu.com" class="a">baidu</a>');
        assert.strictEqual(tree.children[0].attributes.length, 2);
    });
    it('<a href=\'www.baidu.com\' class=\'class1\'>baidu</a>', () => {
        const tree = parseHTML('<a href=\'www.baidu.com\' class=\'class1\'>baidu</a>');
        assert.strictEqual(tree.children[0].attributes.length, 2);
    });
    it('<a href>baidu</a>', () => {
        const tree = parseHTML('<a href>baidu</a>');
        assert.strictEqual(tree.children[0].attributes.length, 1);
    });
    it('<a href={href}>baidu</a>', () => {
        const tree = parseHTML('<a href={href}>baidu</a>');
        assert.strictEqual(tree.children[0].attributes.length, 1);
    });
    it('<img/>', () => {
        const tree = parseHTML('<img/>');
        assert.strictEqual(tree.children.length, 1);
        assert.strictEqual(tree.children[0].tagName, 'img');
        assert.strictEqual(tree.children[0].children.length, 0);
        assert.strictEqual(tree.children[0].attributes.length, 0);
    });
    it('<img src="abc" alt="abc" />', () => {
        const tree = parseHTML('<img src="abc" alt="abc" />');
        assert.strictEqual(tree.children[0].attributes.length, 2);
    });
    it('<img alt="abc" src />', () => {
        const tree = parseHTML('<img alt="abc" src />');
        assert.strictEqual(tree.children[0].attributes.length, 2);
    });
    it('<img alt="abc" src={src} />', () => {
        const tree = parseHTML('<img alt="abc" src={src} />');
        assert.strictEqual(tree.children[0].attributes.length, 2);
    });
})


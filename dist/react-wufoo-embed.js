(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactWufooEmbed = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var PropTypes = _react2['default'].PropTypes;
var createClass = _react2['default'].createClass;

var Wufoo = createClass({

    propTypes: {
        async: PropTypes.bool,
        autoResize: PropTypes.bool,
        defaultValues: PropTypes.string,
        embedJs: PropTypes.string,
        formHash: PropTypes.string.isRequired,
        header: PropTypes.oneOf(['show', 'hide']),
        height: PropTypes.string,
        host: PropTypes.string,
        ssl: PropTypes.bool,
        userName: PropTypes.string.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        return {
            async: true,
            autoResize: true,
            embedJs: '/scripts/embed/form.js',
            defaultValues: '',
            formHash: '',
            header: 'show',
            height: '0',
            host: 'wufoo.com',
            ssl: true,
            userName: ''
        };
    },

    /**
     * Get the full url of the embed src
     * @return {string} URL of embed
     */
    getSrc: function getSrc() {
        return 'https://www.' + this.props.host + this.props.embedJs;
    },

    /**
     * Run the Embed Code
     */
    embedForm: function embedForm() {
        var self = this;
        var form = undefined;
        var rs = this.readyState;if (rs) if (rs !== 'complete') if (rs !== 'loaded') return;
        try {
            form = new window.WufooForm();
            form.initialize(self.props);
            form.display();
        } catch (e) {
            throw e;
        }
    },

    runScript: function runScript() {
        return typeof window.WufooForm !== 'function' ? this.createScript() : this.embedForm();
    },

    /**
     * Load the Wufoo Embed JS file
     * @return {Object} script object created
     */
    createScript: function createScript() {
        var self = this;
        var s = document.createElement('script');
        s.src = this.getSrc();
        s.onload = s.onreadystatechange = function () {
            return self.embedForm();
        };
        var scr = document.getElementsByTagName('script')[0],
            par = scr.parentNode;
        par.insertBefore(s, scr);
        return scr;
    },

    componentDidUpdate: function componentDidUpdate() {
        this.runScript();
    },

    componentDidMount: function componentDidMount() {
        this.runScript();
    },

    render: function render() {
        return _react2['default'].createElement('div', { id: 'wufoo-' + this.props.formHash });
    }

});

exports['default'] = Wufoo;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
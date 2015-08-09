/**
 @module plugins/api
 @author Antonio Pires <antonio@tastemade.com>
 */
'use strict';

var logger = require('jsdoc/util/logger');


exports.defineTags = function(dictionary){

    dictionary.defineTag('api', {canHaveType:true, canHaveName:true, onTagged: function(doc, tag){
        doc.kind = 'function';
        doc.description = tag.value.description;
        doc.name = tag.value.name;
        doc.type = tag.value.type.names[0].toUpperCase();
    }});

    dictionary.defineTag('apiName', {onTagged: function(doc, tag){
        doc.name = doc.name +' - '+tag.value+' ';
    }});

    dictionary.defineTag('apiDescription', {onTagged: function(doc, tag){
        doc.description = tag.value;
    }});

    dictionary.defineTag('apiGroup',{onTagged: function(doc, tag){
        doc.memberof = tag.value;
    }});

    dictionary.defineTag('apiParam', {canHaveType:true, canHaveName:true, onTagged: function(doc, tag){
        doc.params = doc.params || [];
        doc.params.push(tag.value);
    }});

    dictionary.defineTag('apiExample', {canHaveType: true, keepWhitespace: true, removesIndent: true, mustHaveValue: true, onTagged: function(doc, tag){
        doc.examples = doc.examples || [];
        doc.examples.push(tag.value);
    }});

};

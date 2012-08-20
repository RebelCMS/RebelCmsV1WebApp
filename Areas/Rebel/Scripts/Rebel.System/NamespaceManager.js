﻿if (typeof Rebel == 'undefined') var Rebel = {};
if (!Rebel.System) Rebel.System = {};

//NB: This is not using Base2, as we want to allow everything to hang off Rebel.System
//    defining a class here would stop us from using it as a namespace
Rebel.System.registerNamespace = function (namespace) {
    /// <summary>
    /// Used to easily register namespaces for classes without doing the syntax listed on line 1/2 for each class.
    /// Pretty much the same as ASP.NET's Type.registerNamespace, except in order to use it, you must register
    /// all of your scripts with ScriptManager, this class doesn't require this.
    /// </summary>
    namespace = namespace.split('.');
    if (!window[namespace[0]]) window[namespace[0]] = {};
    var strFullNamespace = namespace[0];
    for (var i = 1; i < namespace.length; i++) {
        strFullNamespace += "." + namespace[i];
        eval("if(!window." + strFullNamespace + ")window." + strFullNamespace + "={};");
    }
}; 
//
//  js_bindings_network.cpp
//  cocos2d-x
//
//  Created by sun zhuoshi on 3/12/13.
//
//

#include "js_bindings_network.h"

#include "jsapi.h"
#include "cocos2d.h"
#include "cocos-ext.h"
#include "cocos2d_specifics.hpp"
#include "ScriptingCore.h"
#include "js_bindings_config.h"

USING_NS_CC;
USING_NS_CC_EXT;

extern JSClass  *jsb_CCHttpRequest_class;
extern JSObject *jsb_CCHttpRequest_prototype;

JSBool js_cocos2dx_extension_CCHttpRequest_setUserData(JSContext *cx, uint32_t argc, jsval *vp)
{
	//jsval *argv = JS_ARGV(cx, vp);
	JSBool ok = JS_TRUE;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpRequest* cobj = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 1) {
		void* arg0;
#pragma warning NO CONVERSION TO NATIVE FOR void*;
		JSB_PRECONDITION2(ok, cx, JS_FALSE, "Error processing arguments");
		cobj->setUserData(arg0);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 1);
	return JS_FALSE;
}
JSBool js_cocos2dx_extension_CCHttpRequest_getUserData(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpRequest* cobj = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 0) {
		//void* ret = cobj->getUserData();
		jsval jsret;
#pragma warning NO CONVERSION FROM NATIVE FOR void*;
		JS_SET_RVAL(cx, vp, jsret);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 0);
	return JS_FALSE;
}
JSBool js_cocos2dx_extension_CCHttpRequest_setResponseCallback(JSContext *cx, uint32_t argc, jsval *vp)
{
    if (argc >= 1) {
		jsval *argv = JS_ARGV(cx, vp);
        
        JSObject *obj = JS_THIS_OBJECT(cx, vp);
		js_proxy_t *proxy;
		JS_GET_NATIVE_PROXY(proxy, obj);
		cocos2d::extension::CCHttpRequest *node = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
        JSHttpRequestWrapper *tmpCobj = new JSHttpRequestWrapper();
        tmpCobj->autorelease();
        tmpCobj->setJSCallbackThis(argv[0]);
        if(argc >= 2) {
            tmpCobj->setJSCallbackFunc(argv[1]);
        }
        node->setResponseCallback(tmpCobj, callfuncND_selector(JSHttpRequestWrapper::callbackFunc));
        JS_SetReservedSlot(proxy->obj, 0, argv[0]);
        JS_SetReservedSlot(proxy->obj, 1, argv[1]);
        return JS_TRUE;
    }
    return JS_FALSE;    
}
JSBool js_cocos2dx_extension_CCHttpRequest_getSelector(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpRequest* cobj = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 0) {
		//void* ret = cobj->getSelector();
		jsval jsret;
#pragma warning NO CONVERSION FROM NATIVE FOR ??;
		JS_SET_RVAL(cx, vp, jsret);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 0);
	return JS_FALSE;
}
JSBool js_cocos2dx_extension_CCHttpRequest_getRequestData(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpRequest* cobj = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 0) {
		//char* ret = cobj->getRequestData();
		jsval jsret;
#pragma warning NO CONVERSION FROM NATIVE FOR char*;
		JS_SET_RVAL(cx, vp, jsret);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 0);
	return JS_FALSE;
}
JSBool js_cocos2dx_extension_CCHttpRequest_setRequestType(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	JSBool ok = JS_TRUE;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpRequest* cobj = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 1) {
		cocos2d::extension::CCHttpRequest::HttpRequestType arg0;
		ok &= jsval_to_int32(cx, argv[0], (int32_t *)&arg0);
		JSB_PRECONDITION2(ok, cx, JS_FALSE, "Error processing arguments");
		cobj->setRequestType(arg0);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 1);
	return JS_FALSE;
}
JSBool js_cocos2dx_extension_CCHttpRequest_getHeaders(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpRequest* cobj = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 0) {
		std::vector<string> ret = cobj->getHeaders();
		jsval jsret;
#pragma warning NO CONVERSION FROM NATIVE FOR vector;
		JS_SET_RVAL(cx, vp, jsret);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 0);
	return JS_FALSE;
}
JSBool js_cocos2dx_extension_CCHttpRequest_getRequestType(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpRequest* cobj = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 0) {
		cocos2d::extension::CCHttpRequest::HttpRequestType ret = cobj->getRequestType();
		jsval jsret;
		jsret = int32_to_jsval(cx, ret);
		JS_SET_RVAL(cx, vp, jsret);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 0);
	return JS_FALSE;
}
JSBool js_cocos2dx_extension_CCHttpRequest_setRequestData(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	JSBool ok = JS_TRUE;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpRequest* cobj = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 2) {
		const char* arg0;
		unsigned int arg1;
		std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
		ok &= jsval_to_uint32(cx, argv[1], &arg1);
		JSB_PRECONDITION2(ok, cx, JS_FALSE, "Error processing arguments");
		cobj->setRequestData(arg0, arg1);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 2);
	return JS_FALSE;
}
JSBool js_cocos2dx_extension_CCHttpRequest_setHeaders(JSContext *cx, uint32_t argc, jsval *vp)
{
	//jsval *argv = JS_ARGV(cx, vp);
	JSBool ok = JS_TRUE;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpRequest* cobj = (cocos2d::extension::CCHttpRequest *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 1) {
		std::vector<string> arg0;
#pragma warning NO CONVERSION TO NATIVE FOR vector;
		JSB_PRECONDITION2(ok, cx, JS_FALSE, "Error processing arguments");
		cobj->setHeaders(arg0);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 1);
	return JS_FALSE;
}

extern JSClass  *jsb_CCHttpResponse_class;
extern JSObject *jsb_CCHttpResponse_prototype;

JSBool js_cocos2dx_extension_CCHttpResponse_setResponseData(JSContext *cx, uint32_t argc, jsval *vp)
{
	//jsval *argv = JS_ARGV(cx, vp);
	JSBool ok = JS_TRUE;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpResponse* cobj = (cocos2d::extension::CCHttpResponse *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 1) {
		std::vector<char>* arg0;
#pragma warning NO CONVERSION TO NATIVE FOR vector*;
		JSB_PRECONDITION2(ok, cx, JS_FALSE, "Error processing arguments");
		cobj->setResponseData(arg0);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 1);
	return JS_FALSE;
}
JSBool js_cocos2dx_extension_CCHttpResponse_getResponseData(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy; JS_GET_NATIVE_PROXY(proxy, obj);
	cocos2d::extension::CCHttpResponse* cobj = (cocos2d::extension::CCHttpResponse *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, JS_FALSE, "Invalid Native Object");
    
	if (argc == 0) {
		//std::vector<char>* ret = cobj->getResponseData();
		jsval jsret;
#pragma warning NO CONVERSION FROM NATIVE FOR vector*;
		JS_SET_RVAL(cx, vp, jsret);
		return JS_TRUE;
	}
	JS_ReportError(cx, "wrong number of arguments: %d, was expecting %d", argc, 0);
	return JS_FALSE;
}
void jsb_register_network(JSContext *cx, JSObject *global) {
	// first, try to get the ns
	jsval nsval;
	JSObject *ns;
	JS_GetProperty(cx, global, "cc", &nsval);
	if (nsval == JSVAL_VOID) {
		ns = JS_NewObject(cx, NULL, NULL, NULL);
		nsval = OBJECT_TO_JSVAL(ns);
		JS_SetProperty(cx, global, "cc", &nsval);
	} else {
		JS_ValueToObject(cx, nsval, &ns);
	}
    JS_DefineFunction(cx, jsb_CCHttpResponse_prototype, "getResponseData", js_cocos2dx_extension_CCHttpResponse_getResponseData, 0, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpResponse_prototype, "setResponseData", js_cocos2dx_extension_CCHttpResponse_setResponseData, 1, JSPROP_PERMANENT | JSPROP_SHARED);

    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "setUserData", js_cocos2dx_extension_CCHttpRequest_setUserData, 1, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "getUserData", js_cocos2dx_extension_CCHttpRequest_getUserData, 0, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "getSelector", js_cocos2dx_extension_CCHttpRequest_getSelector, 0, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "getRequestData", js_cocos2dx_extension_CCHttpRequest_getRequestData, 0, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "setRequestType", js_cocos2dx_extension_CCHttpRequest_setRequestType, 1, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "getHeaders", js_cocos2dx_extension_CCHttpRequest_getHeaders, 0, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "getRequestType", js_cocos2dx_extension_CCHttpRequest_getRequestType, 0, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "setRequestData", js_cocos2dx_extension_CCHttpRequest_setRequestData, 2, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "setHeaders", js_cocos2dx_extension_CCHttpRequest_setHeaders, 1, JSPROP_PERMANENT | JSPROP_SHARED);
    JS_DefineFunction(cx, jsb_CCHttpRequest_prototype, "setResponseCallback", js_cocos2dx_extension_CCHttpRequest_setResponseCallback, 2, JSPROP_READONLY | JSPROP_PERMANENT);    
}
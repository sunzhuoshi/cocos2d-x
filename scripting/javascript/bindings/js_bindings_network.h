//
//  js_bindings_network.h
//  cocos2d-x
//
//  Created by sun zhuoshi on 3/12/13.
//
//

#ifndef __JS_BINDINGS_NETWORK_H__
#define __JS_BINDINGS_NETWORK_H__

#include "jsapi.h"
#include "cocos2d_specifics.hpp"

#include "HttpResponse.h"

#include <sstream>

class JSHttpRequestWrapper : public JSCallFuncWrapper {
public:
    JSHttpRequestWrapper() {}
    virtual ~JSHttpRequestWrapper() {}
    void callbackFunc(CCNode *node, cocos2d::extension::CCHttpResponse *response) {
        JSContext *cx = ScriptingCore::getInstance()->getGlobalContext();
        jsval retval = JSVAL_NULL;
        jsval args[2];
        if (!JSVAL_IS_VOID(jsCallback) && !JSVAL_IS_VOID(jsThisObj)) {
            args[0] = jsThisObj;
            jsval jsresponse;
            if (response) {
                js_proxy_t *proxy = js_get_or_create_proxy<cocos2d::extension::CCHttpResponse>(cx, response);
                jsresponse = OBJECT_TO_JSVAL(proxy->obj);
            } else {
                jsresponse = JSVAL_NULL;
            }
            args[1] = jsresponse;
            JS_CallFunctionValue(cx, JSVAL_TO_OBJECT(jsThisObj), jsCallback, 2, &args[0], &retval);
        }
    }
};




void jsb_register_network(JSContext *globalC, JSObject *globalO);

#endif

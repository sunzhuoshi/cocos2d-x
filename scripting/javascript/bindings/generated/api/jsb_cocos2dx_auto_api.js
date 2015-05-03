/**
 * @module cocos2dx
 */
var cc = cc || {};

/**
 * @class CCAction
 */
cc.Action = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method setOriginalTarget
 * @param {cc.CCNode} arg0
 */
setOriginalTarget : function (
ccnode 
)
{
},

/**
 * @method setTarget
 * @param {cc.CCNode} arg0
 */
setTarget : function (
ccnode 
)
{
},

/**
 * @method getOriginalTarget
 * @return {cc.CCNode}
 */
getOriginalTarget : function (
)
{
    return cc.CCNode;
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getTarget
 * @return {cc.CCNode}
 */
getTarget : function (
)
{
    return cc.CCNode;
},

/**
 * @method step
 * @param {float} arg0
 */
step : function (
float 
)
{
},

/**
 * @method setTag
 * @param {int} arg0
 */
setTag : function (
int 
)
{
},

/**
 * @method getTag
 * @return {int}
 */
getTag : function (
)
{
    return 0;
},

/**
 * @method isDone
 * @return {bool}
 */
isDone : function (
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCAction}
 */
create : function (
)
{
    return cc.CCAction;
},

/**
 * @method CCAction
 * @constructor
 */
CCAction : function (
)
{
},

};

/**
 * @class CCFiniteTimeAction
 */
cc.FiniteTimeAction = {

/**
 * @method setDuration
 * @param {float} arg0
 */
setDuration : function (
float 
)
{
},

/**
 * @method getDuration
 * @return {float}
 */
getDuration : function (
)
{
    return 0;
},

/**
 * @method reverse
 * @return {cc.CCFiniteTimeAction}
 */
reverse : function (
)
{
    return cc.CCFiniteTimeAction;
},

/**
 * @method CCFiniteTimeAction
 * @constructor
 */
CCFiniteTimeAction : function (
)
{
},

};

/**
 * @class CCSpeed
 */
cc.Speed = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method setInnerAction
 * @param {cc.CCActionInterval} arg0
 */
setInnerAction : function (
ccactioninterval 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method step
 * @param {float} arg0
 */
step : function (
float 
)
{
},

/**
 * @method setSpeed
 * @param {float} arg0
 */
setSpeed : function (
float 
)
{
},

/**
 * @method initWithAction
 * @param {cc.CCActionInterval} arg0
 * @param {float} arg1
 * @return {bool}
 */
initWithAction : function (
ccactioninterval, 
float 
)
{
    return false;
},

/**
 * @method getInnerAction
 * @return {cc.CCActionInterval}
 */
getInnerAction : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method isDone
 * @return {bool}
 */
isDone : function (
)
{
    return false;
},

/**
 * @method getSpeed
 * @return {float}
 */
getSpeed : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @param {float} arg1
 * @return {cc.CCSpeed}
 */
create : function (
ccactioninterval, 
float 
)
{
    return cc.CCSpeed;
},

/**
 * @method CCSpeed
 * @constructor
 */
CCSpeed : function (
)
{
},

};

/**
 * @class CCFollow
 */
cc.Follow = {

/**
 * @method initWithTarget
 * @param {cc.CCNode} arg0
 * @param {cc.CCRect} arg1
 * @return {bool}
 */
initWithTarget : function (
ccnode, 
ccrect 
)
{
    return false;
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method setBoudarySet
 * @param {bool} arg0
 */
setBoudarySet : function (
bool 
)
{
},

/**
 * @method step
 * @param {float} arg0
 */
step : function (
float 
)
{
},

/**
 * @method isDone
 * @return {bool}
 */
isDone : function (
)
{
    return false;
},

/**
 * @method isBoundarySet
 * @return {bool}
 */
isBoundarySet : function (
)
{
    return false;
},

/**
 * @method create
 * @param {cc.CCNode} arg0
 * @param {cc.CCRect} arg1
 * @return {cc.CCFollow}
 */
create : function (
ccnode, 
ccrect 
)
{
    return cc.CCFollow;
},

/**
 * @method CCFollow
 * @constructor
 */
CCFollow : function (
)
{
},

};

/**
 * @class CCGLProgram
 */
cc.GLProgram = {

/**
 * @method fragmentShaderLog
 * @return {char}
 */
fragmentShaderLog : function (
)
{
    return 0;
},

/**
 * @method addAttribute
 * @param {char} arg0
 * @param {unsigned int} arg1
 */
addAttribute : function (
char, 
int 
)
{
},

/**
 * @method setUniformLocationWithMatrix4fv
 * @param {int} arg0
 * @param {float} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWithMatrix4fv : function (
int, 
float, 
int 
)
{
},

/**
 * @method getUniformLocationForName
 * @param {char} arg0
 * @return {int}
 */
getUniformLocationForName : function (
char 
)
{
    return 0;
},

/**
 * @method use
 */
use : function (
)
{
},

/**
 * @method vertexShaderLog
 * @return {char}
 */
vertexShaderLog : function (
)
{
    return 0;
},

/**
 * @method initWithVertexShaderByteArray
 * @param {char} arg0
 * @param {char} arg1
 * @return {bool}
 */
initWithVertexShaderByteArray : function (
char, 
char 
)
{
    return false;
},

/**
 * @method initWithVertexShaderFilename
 * @param {char} arg0
 * @param {char} arg1
 * @return {bool}
 */
initWithVertexShaderFilename : function (
char, 
char 
)
{
    return false;
},

/**
 * @method setUniformsForBuiltins
 */
setUniformsForBuiltins : function (
)
{
},

/**
 * @method setUniformLocationWith3i
 * @param {int} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 */
setUniformLocationWith3i : function (
int, 
int, 
int, 
int 
)
{
},

/**
 * @method setUniformLocationWith3iv
 * @param {int} arg0
 * @param {int} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWith3iv : function (
int, 
int, 
int 
)
{
},

/**
 * @method updateUniforms
 */
updateUniforms : function (
)
{
},

/**
 * @method setUniformLocationWith4iv
 * @param {int} arg0
 * @param {int} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWith4iv : function (
int, 
int, 
int 
)
{
},

/**
 * @method link
 * @return {bool}
 */
link : function (
)
{
    return false;
},

/**
 * @method setUniformLocationWith2iv
 * @param {int} arg0
 * @param {int} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWith2iv : function (
int, 
int, 
int 
)
{
},

/**
 * @method reset
 */
reset : function (
)
{
},

/**
 * @method setUniformLocationWith4i
 * @param {int} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @param {int} arg4
 */
setUniformLocationWith4i : function (
int, 
int, 
int, 
int, 
int 
)
{
},

/**
 * @method setUniformLocationWith1i
 * @param {int} arg0
 * @param {int} arg1
 */
setUniformLocationWith1i : function (
int, 
int 
)
{
},

/**
 * @method setUniformLocationWith2i
 * @param {int} arg0
 * @param {int} arg1
 * @param {int} arg2
 */
setUniformLocationWith2i : function (
int, 
int, 
int 
)
{
},

/**
 * @method CCGLProgram
 * @constructor
 */
CCGLProgram : function (
)
{
},

};

/**
 * @class CCTouch
 */
cc.Touch = {

/**
 * @method getPreviousLocationInView
 * @return {cc.CCPoint}
 */
getPreviousLocationInView : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getLocation
 * @return {cc.CCPoint}
 */
getLocation : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getDelta
 * @return {cc.CCPoint}
 */
getDelta : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getStartLocationInView
 * @return {cc.CCPoint}
 */
getStartLocationInView : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getStartLocation
 * @return {cc.CCPoint}
 */
getStartLocation : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getID
 * @return {int}
 */
getID : function (
)
{
    return 0;
},

/**
 * @method setTouchInfo
 * @param {int} arg0
 * @param {float} arg1
 * @param {float} arg2
 */
setTouchInfo : function (
int, 
float, 
float 
)
{
},

/**
 * @method getLocationInView
 * @return {cc.CCPoint}
 */
getLocationInView : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getPreviousLocation
 * @return {cc.CCPoint}
 */
getPreviousLocation : function (
)
{
    return cc.CCPoint;
},

/**
 * @method CCTouch
 * @constructor
 */
CCTouch : function (
)
{
},

};

/**
 * @class CCSet
 */
cc.Set = {

/**
 * @method count
 * @return {int}
 */
count : function (
)
{
    return 0;
},

/**
 * @method addObject
 * @param {cc.CCObject} arg0
 */
addObject : function (
ccobject 
)
{
},

/**
 * @method mutableCopy
 * @return {cc.CCSet}
 */
mutableCopy : function (
)
{
    return cc.CCSet;
},

/**
 * @method anyObject
 * @return {cc.CCObject}
 */
anyObject : function (
)
{
    return cc.CCObject;
},

/**
 * @method removeAllObjects
 */
removeAllObjects : function (
)
{
},

/**
 * @method removeObject
 * @param {cc.CCObject} arg0
 */
removeObject : function (
ccobject 
)
{
},

/**
 * @method copy
 * @return {cc.CCSet}
 */
copy : function (
)
{
    return cc.CCSet;
},

/**
 * @method containsObject
 * @param {cc.CCObject} arg0
 * @return {bool}
 */
containsObject : function (
ccobject 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCSet}
 */
create : function (
)
{
    return cc.CCSet;
},

};

/**
 * @class CCTexture2D
 */
cc.Texture2D = {

/**
 * @method getShaderProgram
 * @return {cc.CCGLProgram}
 */
getShaderProgram : function (
)
{
    return cc.CCGLProgram;
},

/**
 * @method initWithETCFile
 * @param {char} arg0
 * @return {bool}
 */
initWithETCFile : function (
char 
)
{
    return false;
},

/**
 * @method stringForFormat
 * @return {char}
 */
stringForFormat : function (
)
{
    return 0;
},

/**
 * @method initWithImage
 * @param {cc.CCImage} arg0
 * @return {bool}
 */
initWithImage : function (
ccimage 
)
{
    return false;
},

/**
 * @method setShaderProgram
 * @param {cc.CCGLProgram} arg0
 */
setShaderProgram : function (
ccglprogram 
)
{
},

/**
 * @method getMaxS
 * @return {float}
 */
getMaxS : function (
)
{
    return 0;
},

/**
 * @method hasPremultipliedAlpha
 * @return {bool}
 */
hasPremultipliedAlpha : function (
)
{
    return false;
},

/**
 * @method getPixelsHigh
 * @return {unsigned int}
 */
getPixelsHigh : function (
)
{
    return 0;
},

/**
 * @method bitsPerPixelForFormat
* @param {cc.CCTexture2DPixelFormat} cctexture2dpixelformat
* @return {unsigned int|unsigned int}
*/
bitsPerPixelForFormat : function(
cctexture2dpixelformat 
)
{
    return 0;
},

/**
 * @method getName
 * @return {unsigned int}
 */
getName : function (
)
{
    return 0;
},

/**
 * @method initWithString
* @param {char|char|char} char
* @param {char|char|cc._ccFontDefinition} char
* @param {float|float} float
* @param {cc.CCSize} ccsize
* @param {cc.CCTextAlignment} cctextalignment
* @param {cc.CCVerticalTextAlignment} ccverticaltextalignment
* @return {bool|bool|bool}
*/
initWithString : function(
char,
char,
float,
ccsize,
cctextalignment,
ccverticaltextalignment 
)
{
    return false;
},

/**
 * @method setMaxT
 * @param {float} arg0
 */
setMaxT : function (
float 
)
{
},

/**
 * @method drawInRect
 * @param {cc.CCRect} arg0
 */
drawInRect : function (
ccrect 
)
{
},

/**
 * @method getContentSize
 * @return {cc.CCSize}
 */
getContentSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method getMaxT
 * @return {float}
 */
getMaxT : function (
)
{
    return 0;
},

/**
 * @method setAliasTexParameters
 */
setAliasTexParameters : function (
)
{
},

/**
 * @method setAntiAliasTexParameters
 */
setAntiAliasTexParameters : function (
)
{
},

/**
 * @method generateMipmap
 */
generateMipmap : function (
)
{
},

/**
 * @method getPixelFormat
 * @return {cc.CCTexture2DPixelFormat}
 */
getPixelFormat : function (
)
{
    return 0;
},

/**
 * @method getContentSizeInPixels
 * @return {cc.CCSize}
 */
getContentSizeInPixels : function (
)
{
    return cc.CCSize;
},

/**
 * @method getPixelsWide
 * @return {unsigned int}
 */
getPixelsWide : function (
)
{
    return 0;
},

/**
 * @method drawAtPoint
 * @param {cc.CCPoint} arg0
 */
drawAtPoint : function (
ccpoint 
)
{
},

/**
 * @method hasMipmaps
 * @return {bool}
 */
hasMipmaps : function (
)
{
    return false;
},

/**
 * @method initWithPVRFile
 * @param {char} arg0
 * @return {bool}
 */
initWithPVRFile : function (
char 
)
{
    return false;
},

/**
 * @method setMaxS
 * @param {float} arg0
 */
setMaxS : function (
float 
)
{
},

/**
 * @method setDefaultAlphaPixelFormat
 * @param {cc.CCTexture2DPixelFormat} arg0
 */
setDefaultAlphaPixelFormat : function (
cctexture2dpixelformat 
)
{
},

/**
 * @method defaultAlphaPixelFormat
 * @return {cc.CCTexture2DPixelFormat}
 */
defaultAlphaPixelFormat : function (
)
{
    return 0;
},

/**
 * @method PVRImagesHavePremultipliedAlpha
 * @param {bool} arg0
 */
PVRImagesHavePremultipliedAlpha : function (
bool 
)
{
},

/**
 * @method CCTexture2D
 * @constructor
 */
CCTexture2D : function (
)
{
},

};

/**
 * @class CCNode
 */
cc.Node = {

/**
 * @method addChild
* @param {cc.CCNode|cc.CCNode|cc.CCNode} ccnode
* @param {int|int} int
* @param {int} int
*/
addChild : function(
ccnode,
int,
int 
)
{
},

/**
 * @method removeComponent
* @param {cc.CCComponent|char} cccomponent
* @return {bool|bool}
*/
removeComponent : function(
char 
)
{
    return false;
},

/**
 * @method removeAllComponents
 */
removeAllComponents : function (
)
{
},

/**
 * @method getShaderProgram
 * @return {cc.CCGLProgram}
 */
getShaderProgram : function (
)
{
    return cc.CCGLProgram;
},

/**
 * @method getChildren
 * @return {cc.CCArray}
 */
getChildren : function (
)
{
    return cc.CCArray;
},

/**
 * @method getScriptHandler
 * @return {int}
 */
getScriptHandler : function (
)
{
    return 0;
},

/**
 * @method convertToWorldSpaceAR
 * @param {cc.CCPoint} arg0
 * @return {cc.CCPoint}
 */
convertToWorldSpaceAR : function (
ccpoint 
)
{
    return cc.CCPoint;
},

/**
 * @method isIgnoreAnchorPointForPosition
 * @return {bool}
 */
isIgnoreAnchorPointForPosition : function (
)
{
    return false;
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setRotation
 * @param {float} arg0
 */
setRotation : function (
float 
)
{
},

/**
 * @method setZOrder
 * @param {int} arg0
 */
setZOrder : function (
int 
)
{
},

/**
 * @method setScaleY
 * @param {float} arg0
 */
setScaleY : function (
float 
)
{
},

/**
 * @method setScaleX
 * @param {float} arg0
 */
setScaleX : function (
float 
)
{
},

/**
 * @method unregisterScriptHandler
 */
unregisterScriptHandler : function (
)
{
},

/**
 * @method getTag
 * @return {int}
 */
getTag : function (
)
{
    return 0;
},

/**
 * @method nodeToWorldTransform
 * @return {cc.CCAffineTransform}
 */
nodeToWorldTransform : function (
)
{
    return cc.CCAffineTransform;
},

/**
 * @method removeChild
* @param {cc.CCNode|cc.CCNode} ccnode
* @param {bool} bool
*/
removeChild : function(
ccnode,
bool 
)
{
},

/**
 * @method convertToWorldSpace
 * @param {cc.CCPoint} arg0
 * @return {cc.CCPoint}
 */
convertToWorldSpace : function (
ccpoint 
)
{
    return cc.CCPoint;
},

/**
 * @method setSkewX
 * @param {float} arg0
 */
setSkewX : function (
float 
)
{
},

/**
 * @method setSkewY
 * @param {float} arg0
 */
setSkewY : function (
float 
)
{
},

/**
 * @method convertTouchToNodeSpace
 * @param {cc.CCTouch} arg0
 * @return {cc.CCPoint}
 */
convertTouchToNodeSpace : function (
cctouch 
)
{
    return cc.CCPoint;
},

/**
 * @method removeAllChildrenWithCleanup
* @param {bool} bool
*/
removeAllChildrenWithCleanup : function(
bool 
)
{
},

/**
 * @method getRotationX
 * @return {float}
 */
getRotationX : function (
)
{
    return 0;
},

/**
 * @method getRotationY
 * @return {float}
 */
getRotationY : function (
)
{
    return 0;
},

/**
 * @method setParent
 * @param {cc.CCNode} arg0
 */
setParent : function (
ccnode 
)
{
},

/**
 * @method nodeToParentTransform
 * @return {cc.CCAffineTransform}
 */
nodeToParentTransform : function (
)
{
    return cc.CCAffineTransform;
},

/**
 * @method convertToNodeSpace
 * @param {cc.CCPoint} arg0
 * @return {cc.CCPoint}
 */
convertToNodeSpace : function (
ccpoint 
)
{
    return cc.CCPoint;
},

/**
 * @method getGrid
 * @return {cc.CCGridBase}
 */
getGrid : function (
)
{
    return cc.CCGridBase;
},

/**
 * @method setPosition
* @param {float|cc.CCPoint} float
* @param {float} float
*/
setPosition : function(
float,
float 
)
{
},

/**
 * @method stopActionByTag
 * @param {int} arg0
 */
stopActionByTag : function (
int 
)
{
},

/**
 * @method reorderChild
 * @param {cc.CCNode} arg0
 * @param {int} arg1
 */
reorderChild : function (
ccnode, 
int 
)
{
},

/**
 * @method setPositionY
 * @param {float} arg0
 */
setPositionY : function (
float 
)
{
},

/**
 * @method setPositionX
 * @param {float} arg0
 */
setPositionX : function (
float 
)
{
},

/**
 * @method getAnchorPoint
 * @return {cc.CCPoint}
 */
getAnchorPoint : function (
)
{
    return cc.CCPoint;
},

/**
 * @method numberOfRunningActions
 * @return {unsigned int}
 */
numberOfRunningActions : function (
)
{
    return 0;
},

/**
 * @method updateTransform
 */
updateTransform : function (
)
{
},

/**
 * @method isVisible
 * @return {bool}
 */
isVisible : function (
)
{
    return false;
},

/**
 * @method getChildrenCount
 * @return {unsigned int}
 */
getChildrenCount : function (
)
{
    return 0;
},

/**
 * @method convertToNodeSpaceAR
 * @param {cc.CCPoint} arg0
 * @return {cc.CCPoint}
 */
convertToNodeSpaceAR : function (
ccpoint 
)
{
    return cc.CCPoint;
},

/**
 * @method addComponent
 * @param {cc.CCComponent} arg0
 * @return {bool}
 */
addComponent : function (
cccomponent 
)
{
    return false;
},

/**
 * @method visit
 */
visit : function (
)
{
},

/**
 * @method setShaderProgram
 * @param {cc.CCGLProgram} arg0
 */
setShaderProgram : function (
ccglprogram 
)
{
},

/**
 * @method getRotation
 * @return {float}
 */
getRotation : function (
)
{
    return 0;
},

/**
 * @method resumeSchedulerAndActions
 */
resumeSchedulerAndActions : function (
)
{
},

/**
 * @method getZOrder
 * @return {int}
 */
getZOrder : function (
)
{
    return 0;
},

/**
 * @method getAnchorPointInPoints
 * @return {cc.CCPoint}
 */
getAnchorPointInPoints : function (
)
{
    return cc.CCPoint;
},

/**
 * @method runAction
 * @param {cc.CCAction} arg0
 * @return {cc.CCAction}
 */
runAction : function (
ccaction 
)
{
    return cc.CCAction;
},

/**
 * @method transform
 */
transform : function (
)
{
},

/**
 * @method setVertexZ
 * @param {float} arg0
 */
setVertexZ : function (
float 
)
{
},

/**
 * @method setScheduler
 * @param {cc.CCScheduler} arg0
 */
setScheduler : function (
ccscheduler 
)
{
},

/**
 * @method stopAllActions
 */
stopAllActions : function (
)
{
},

/**
 * @method getSkewX
 * @return {float}
 */
getSkewX : function (
)
{
    return 0;
},

/**
 * @method getSkewY
 * @return {float}
 */
getSkewY : function (
)
{
    return 0;
},

/**
 * @method ignoreAnchorPointForPosition
 * @param {bool} arg0
 */
ignoreAnchorPointForPosition : function (
bool 
)
{
},

/**
 * @method getActionByTag
 * @param {int} arg0
 * @return {cc.CCAction}
 */
getActionByTag : function (
int 
)
{
    return cc.CCAction;
},

/**
 * @method setRotationX
 * @param {float} arg0
 */
setRotationX : function (
float 
)
{
},

/**
 * @method setRotationY
 * @param {float} arg0
 */
setRotationY : function (
float 
)
{
},

/**
 * @method setAdditionalTransform
 * @param {cc.CCAffineTransform} arg0
 */
setAdditionalTransform : function (
ccaffinetransform 
)
{
},

/**
 * @method getScheduler
 * @return {cc.CCScheduler}
 */
getScheduler : function (
)
{
    return cc.CCScheduler;
},

/**
 * @method getOrderOfArrival
 * @return {unsigned int}
 */
getOrderOfArrival : function (
)
{
    return 0;
},

/**
 * @method setActionManager
 * @param {cc.CCActionManager} arg0
 */
setActionManager : function (
ccactionmanager 
)
{
},

/**
 * @method getPosition
* @param {float} float
* @param {float} float
* @return {cc.CCPoint}
*/
getPosition : function(
float,
float 
)
{
},

/**
 * @method isRunning
 * @return {bool}
 */
isRunning : function (
)
{
    return false;
},

/**
 * @method getParent
 * @return {cc.CCNode}
 */
getParent : function (
)
{
    return cc.CCNode;
},

/**
 * @method getPositionY
 * @return {float}
 */
getPositionY : function (
)
{
    return 0;
},

/**
 * @method getPositionX
 * @return {float}
 */
getPositionX : function (
)
{
    return 0;
},

/**
 * @method removeChildByTag
* @param {int|int} int
* @param {bool} bool
*/
removeChildByTag : function(
int,
bool 
)
{
},

/**
 * @method setVisible
 * @param {bool} arg0
 */
setVisible : function (
bool 
)
{
},

/**
 * @method parentToNodeTransform
 * @return {cc.CCAffineTransform}
 */
parentToNodeTransform : function (
)
{
    return cc.CCAffineTransform;
},

/**
 * @method pauseSchedulerAndActions
 */
pauseSchedulerAndActions : function (
)
{
},

/**
 * @method getVertexZ
 * @return {float}
 */
getVertexZ : function (
)
{
    return 0;
},

/**
 * @method _setZOrder
 * @param {int} arg0
 */
_setZOrder : function (
int 
)
{
},

/**
 * @method setScale
* @param {float|float} float
* @param {float} float
*/
setScale : function(
float,
float 
)
{
},

/**
 * @method getChildByTag
 * @param {int} arg0
 * @return {cc.CCNode}
 */
getChildByTag : function (
int 
)
{
    return cc.CCNode;
},

/**
 * @method setOrderOfArrival
 * @param {unsigned int} arg0
 */
setOrderOfArrival : function (
int 
)
{
},

/**
 * @method getScaleY
 * @return {float}
 */
getScaleY : function (
)
{
    return 0;
},

/**
 * @method getScaleX
 * @return {float}
 */
getScaleX : function (
)
{
    return 0;
},

/**
 * @method cleanup
 */
cleanup : function (
)
{
},

/**
 * @method getComponent
 * @param {char} arg0
 * @return {cc.CCComponent}
 */
getComponent : function (
char 
)
{
    return cc.CCComponent;
},

/**
 * @method getContentSize
 * @return {cc.CCSize}
 */
getContentSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method boundingBox
 * @return {cc.CCRect}
 */
boundingBox : function (
)
{
    return cc.CCRect;
},

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method transformAncestors
 */
transformAncestors : function (
)
{
},

/**
 * @method setUserObject
 * @param {cc.CCObject} arg0
 */
setUserObject : function (
ccobject 
)
{
},

/**
 * @method registerScriptHandler
 * @param {int} arg0
 */
registerScriptHandler : function (
int 
)
{
},

/**
 * @method removeFromParentAndCleanup
* @param {bool} bool
*/
removeFromParentAndCleanup : function(
bool 
)
{
},

/**
 * @method convertTouchToNodeSpaceAR
 * @param {cc.CCTouch} arg0
 * @return {cc.CCPoint}
 */
convertTouchToNodeSpaceAR : function (
cctouch 
)
{
    return cc.CCPoint;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method sortAllChildren
 */
sortAllChildren : function (
)
{
},

/**
 * @method worldToNodeTransform
 * @return {cc.CCAffineTransform}
 */
worldToNodeTransform : function (
)
{
    return cc.CCAffineTransform;
},

/**
 * @method getScale
 * @return {float}
 */
getScale : function (
)
{
    return 0;
},

/**
 * @method getCamera
 * @return {cc.CCCamera}
 */
getCamera : function (
)
{
    return cc.CCCamera;
},

/**
 * @method setTag
 * @param {int} arg0
 */
setTag : function (
int 
)
{
},

/**
 * @method stopAction
 * @param {cc.CCAction} arg0
 */
stopAction : function (
ccaction 
)
{
},

/**
 * @method getActionManager
 * @return {cc.CCActionManager}
 */
getActionManager : function (
)
{
    return cc.CCActionManager;
},

/**
 * @method create
 * @return {cc.CCNode}
 */
create : function (
)
{
    return cc.CCNode;
},

/**
 * @method CCNode
 * @constructor
 */
CCNode : function (
)
{
},

};

/**
 * @class CCNodeRGBA
 */
cc.NodeRGBA = {

/**
 * @method updateDisplayedColor
 * @param {cc._ccColor3B} arg0
 */
updateDisplayedColor : function (
_cccolor3b 
)
{
},

/**
 * @method setColor
 * @param {cc._ccColor3B} arg0
 */
setColor : function (
_cccolor3b 
)
{
},

/**
 * @method isCascadeOpacityEnabled
 * @return {bool}
 */
isCascadeOpacityEnabled : function (
)
{
    return false;
},

/**
 * @method getColor
 * @return {cc._ccColor3B}
 */
getColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method getDisplayedOpacity
 * @return {unsigned char}
 */
getDisplayedOpacity : function (
)
{
    return 0;
},

/**
 * @method setCascadeColorEnabled
 * @param {bool} arg0
 */
setCascadeColorEnabled : function (
bool 
)
{
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method setCascadeOpacityEnabled
 * @param {bool} arg0
 */
setCascadeOpacityEnabled : function (
bool 
)
{
},

/**
 * @method updateDisplayedOpacity
 * @param {unsigned char} arg0
 */
updateDisplayedOpacity : function (
char 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method getOpacity
 * @return {unsigned char}
 */
getOpacity : function (
)
{
    return 0;
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method isCascadeColorEnabled
 * @return {bool}
 */
isCascadeColorEnabled : function (
)
{
    return false;
},

/**
 * @method getDisplayedColor
 * @return {cc._ccColor3B}
 */
getDisplayedColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method create
 * @return {cc.CCNodeRGBA}
 */
create : function (
)
{
    return cc.CCNodeRGBA;
},

/**
 * @method CCNodeRGBA
 * @constructor
 */
CCNodeRGBA : function (
)
{
},

};

/**
 * @class CCSpriteFrame
 */
cc.SpriteFrame = {

/**
 * @method setRotated
 * @param {bool} arg0
 */
setRotated : function (
bool 
)
{
},

/**
 * @method setTexture
 * @param {cc.CCTexture2D} arg0
 */
setTexture : function (
cctexture2d 
)
{
},

/**
 * @method getOffset
 * @return {cc.CCPoint}
 */
getOffset : function (
)
{
    return cc.CCPoint;
},

/**
 * @method setRectInPixels
 * @param {cc.CCRect} arg0
 */
setRectInPixels : function (
ccrect 
)
{
},

/**
 * @method getTexture
 * @return {cc.CCTexture2D}
 */
getTexture : function (
)
{
    return cc.CCTexture2D;
},

/**
 * @method getRect
 * @return {cc.CCRect}
 */
getRect : function (
)
{
    return cc.CCRect;
},

/**
 * @method setOffsetInPixels
 * @param {cc.CCPoint} arg0
 */
setOffsetInPixels : function (
ccpoint 
)
{
},

/**
 * @method getRectInPixels
 * @return {cc.CCRect}
 */
getRectInPixels : function (
)
{
    return cc.CCRect;
},

/**
 * @method setOriginalSize
 * @param {cc.CCSize} arg0
 */
setOriginalSize : function (
ccsize 
)
{
},

/**
 * @method getOriginalSizeInPixels
 * @return {cc.CCSize}
 */
getOriginalSizeInPixels : function (
)
{
    return cc.CCSize;
},

/**
 * @method setOriginalSizeInPixels
 * @param {cc.CCSize} arg0
 */
setOriginalSizeInPixels : function (
ccsize 
)
{
},

/**
 * @method setOffset
 * @param {cc.CCPoint} arg0
 */
setOffset : function (
ccpoint 
)
{
},

/**
 * @method initWithTexture
* @param {cc.CCTexture2D|cc.CCTexture2D} cctexture2d
* @param {cc.CCRect|cc.CCRect} ccrect
* @param {bool} bool
* @param {cc.CCPoint} ccpoint
* @param {cc.CCSize} ccsize
* @return {bool|bool}
*/
initWithTexture : function(
cctexture2d,
ccrect,
bool,
ccpoint,
ccsize 
)
{
    return false;
},

/**
 * @method isRotated
 * @return {bool}
 */
isRotated : function (
)
{
    return false;
},

/**
 * @method initWithTextureFilename
* @param {char|char} char
* @param {cc.CCRect|cc.CCRect} ccrect
* @param {bool} bool
* @param {cc.CCPoint} ccpoint
* @param {cc.CCSize} ccsize
* @return {bool|bool}
*/
initWithTextureFilename : function(
char,
ccrect,
bool,
ccpoint,
ccsize 
)
{
    return false;
},

/**
 * @method setRect
 * @param {cc.CCRect} arg0
 */
setRect : function (
ccrect 
)
{
},

/**
 * @method getOffsetInPixels
 * @return {cc.CCPoint}
 */
getOffsetInPixels : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getOriginalSize
 * @return {cc.CCSize}
 */
getOriginalSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method create
* @param {char|char} char
* @param {cc.CCRect|cc.CCRect} ccrect
* @param {bool} bool
* @param {cc.CCPoint} ccpoint
* @param {cc.CCSize} ccsize
* @return {cc.CCSpriteFrame|cc.CCSpriteFrame}
*/
create : function(
char,
ccrect,
bool,
ccpoint,
ccsize 
)
{
    return cc.CCSpriteFrame;
},

/**
 * @method createWithTexture
* @param {cc.CCTexture2D|cc.CCTexture2D} cctexture2d
* @param {cc.CCRect|cc.CCRect} ccrect
* @param {bool} bool
* @param {cc.CCPoint} ccpoint
* @param {cc.CCSize} ccsize
* @return {cc.CCSpriteFrame|cc.CCSpriteFrame}
*/
createWithTexture : function(
cctexture2d,
ccrect,
bool,
ccpoint,
ccsize 
)
{
    return cc.CCSpriteFrame;
},

};

/**
 * @class CCAnimationFrame
 */
cc.AnimationFrame = {

/**
 * @method setSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 */
setSpriteFrame : function (
ccspriteframe 
)
{
},

/**
 * @method getUserInfo
 * @return {cc.CCDictionary}
 */
getUserInfo : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method setDelayUnits
 * @param {float} arg0
 */
setDelayUnits : function (
float 
)
{
},

/**
 * @method getSpriteFrame
 * @return {cc.CCSpriteFrame}
 */
getSpriteFrame : function (
)
{
    return cc.CCSpriteFrame;
},

/**
 * @method getDelayUnits
 * @return {float}
 */
getDelayUnits : function (
)
{
    return 0;
},

/**
 * @method setUserInfo
 * @param {cc.CCDictionary} arg0
 */
setUserInfo : function (
ccdictionary 
)
{
},

/**
 * @method initWithSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 * @param {float} arg1
 * @param {cc.CCDictionary} arg2
 * @return {bool}
 */
initWithSpriteFrame : function (
ccspriteframe, 
float, 
ccdictionary 
)
{
    return false;
},

/**
 * @method CCAnimationFrame
 * @constructor
 */
CCAnimationFrame : function (
)
{
},

};

/**
 * @class CCAnimation
 */
cc.Animation = {

/**
 * @method getLoops
 * @return {unsigned int}
 */
getLoops : function (
)
{
    return 0;
},

/**
 * @method setFrames
 * @param {cc.CCArray} arg0
 */
setFrames : function (
ccarray 
)
{
},

/**
 * @method getFrames
 * @return {cc.CCArray}
 */
getFrames : function (
)
{
    return cc.CCArray;
},

/**
 * @method addSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 */
addSpriteFrame : function (
ccspriteframe 
)
{
},

/**
 * @method setRestoreOriginalFrame
 * @param {bool} arg0
 */
setRestoreOriginalFrame : function (
bool 
)
{
},

/**
 * @method setDelayPerUnit
 * @param {float} arg0
 */
setDelayPerUnit : function (
float 
)
{
},

/**
 * @method initWithAnimationFrames
 * @param {cc.CCArray} arg0
 * @param {float} arg1
 * @param {unsigned int} arg2
 * @return {bool}
 */
initWithAnimationFrames : function (
ccarray, 
float, 
int 
)
{
    return false;
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithSpriteFrames
 * @param {cc.CCArray} arg0
 * @param {float} arg1
 * @return {bool}
 */
initWithSpriteFrames : function (
ccarray, 
float 
)
{
    return false;
},

/**
 * @method setLoops
 * @param {unsigned int} arg0
 */
setLoops : function (
int 
)
{
},

/**
 * @method addSpriteFrameWithFileName
 * @param {char} arg0
 */
addSpriteFrameWithFileName : function (
char 
)
{
},

/**
 * @method getTotalDelayUnits
 * @return {float}
 */
getTotalDelayUnits : function (
)
{
    return 0;
},

/**
 * @method getDelayPerUnit
 * @return {float}
 */
getDelayPerUnit : function (
)
{
    return 0;
},

/**
 * @method getRestoreOriginalFrame
 * @return {bool}
 */
getRestoreOriginalFrame : function (
)
{
    return false;
},

/**
 * @method getDuration
 * @return {float}
 */
getDuration : function (
)
{
    return 0;
},

/**
 * @method addSpriteFrameWithTexture
 * @param {cc.CCTexture2D} arg0
 * @param {cc.CCRect} arg1
 */
addSpriteFrameWithTexture : function (
cctexture2d, 
ccrect 
)
{
},

/**
 * @method CCAnimation
 * @constructor
 */
CCAnimation : function (
)
{
},

};

/**
 * @class CCActionInterval
 */
cc.ActionInterval = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @return {bool}
 */
initWithDuration : function (
float 
)
{
    return false;
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method step
 * @param {float} arg0
 */
step : function (
float 
)
{
},

/**
 * @method getElapsed
 * @return {float}
 */
getElapsed : function (
)
{
    return 0;
},

/**
 * @method isDone
 * @return {bool}
 */
isDone : function (
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @return {cc.CCActionInterval}
 */
create : function (
float 
)
{
    return cc.CCActionInterval;
},

};

/**
 * @class CCSequence
 */
cc.Sequence = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method initWithTwoActions
 * @param {cc.CCFiniteTimeAction} arg0
 * @param {cc.CCFiniteTimeAction} arg1
 * @return {bool}
 */
initWithTwoActions : function (
ccfinitetimeaction, 
ccfinitetimeaction 
)
{
    return false;
},

};

/**
 * @class CCRepeat
 */
cc.Repeat = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method setInnerAction
 * @param {cc.CCFiniteTimeAction} arg0
 */
setInnerAction : function (
ccfinitetimeaction 
)
{
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method initWithAction
 * @param {cc.CCFiniteTimeAction} arg0
 * @param {unsigned int} arg1
 * @return {bool}
 */
initWithAction : function (
ccfinitetimeaction, 
int 
)
{
    return false;
},

/**
 * @method getInnerAction
 * @return {cc.CCFiniteTimeAction}
 */
getInnerAction : function (
)
{
    return cc.CCFiniteTimeAction;
},

/**
 * @method isDone
 * @return {bool}
 */
isDone : function (
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCFiniteTimeAction} arg0
 * @param {unsigned int} arg1
 * @return {cc.CCRepeat}
 */
create : function (
ccfinitetimeaction, 
int 
)
{
    return cc.CCRepeat;
},

};

/**
 * @class CCRepeatForever
 */
cc.RepeatForever = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method setInnerAction
 * @param {cc.CCActionInterval} arg0
 */
setInnerAction : function (
ccactioninterval 
)
{
},

/**
 * @method step
 * @param {float} arg0
 */
step : function (
float 
)
{
},

/**
 * @method initWithAction
 * @param {cc.CCActionInterval} arg0
 * @return {bool}
 */
initWithAction : function (
ccactioninterval 
)
{
    return false;
},

/**
 * @method getInnerAction
 * @return {cc.CCActionInterval}
 */
getInnerAction : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method isDone
 * @return {bool}
 */
isDone : function (
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCRepeatForever}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCRepeatForever;
},

/**
 * @method CCRepeatForever
 * @constructor
 */
CCRepeatForever : function (
)
{
},

};

/**
 * @class CCSpawn
 */
cc.Spawn = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method initWithTwoActions
 * @param {cc.CCFiniteTimeAction} arg0
 * @param {cc.CCFiniteTimeAction} arg1
 * @return {bool}
 */
initWithTwoActions : function (
ccfinitetimeaction, 
ccfinitetimeaction 
)
{
    return false;
},

};

/**
 * @class CCRotateTo
 */
cc.RotateTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {bool|bool}
*/
initWithDuration : function(
float,
float,
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {cc.CCRotateTo|cc.CCRotateTo}
*/
create : function(
float,
float,
float 
)
{
    return cc.CCRotateTo;
},

};

/**
 * @class CCRotateBy
 */
cc.RotateBy = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initWithDuration
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {bool|bool}
*/
initWithDuration : function(
float,
float,
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {cc.CCRotateBy|cc.CCRotateBy}
*/
create : function(
float,
float,
float 
)
{
    return cc.CCRotateBy;
},

};

/**
 * @class CCMoveBy
 */
cc.MoveBy = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCPoint} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
ccpoint 
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCPoint} arg1
 * @return {cc.CCMoveBy}
 */
create : function (
float, 
ccpoint 
)
{
    return cc.CCMoveBy;
},

};

/**
 * @class CCMoveTo
 */
cc.MoveTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCPoint} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
ccpoint 
)
{
    return false;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCPoint} arg1
 * @return {cc.CCMoveTo}
 */
create : function (
float, 
ccpoint 
)
{
    return cc.CCMoveTo;
},

};

/**
 * @class CCSkewTo
 */
cc.SkewTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
float, 
float 
)
{
    return false;
},

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @return {cc.CCSkewTo}
 */
create : function (
float, 
float, 
float 
)
{
    return cc.CCSkewTo;
},

/**
 * @method CCSkewTo
 * @constructor
 */
CCSkewTo : function (
)
{
},

};

/**
 * @class CCSkewBy
 */
cc.SkewBy = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
float, 
float 
)
{
    return false;
},

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @return {cc.CCSkewBy}
 */
create : function (
float, 
float, 
float 
)
{
    return cc.CCSkewBy;
},

};

/**
 * @class CCJumpBy
 */
cc.JumpBy = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCPoint} arg1
 * @param {float} arg2
 * @param {unsigned int} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
ccpoint, 
float, 
int 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCPoint} arg1
 * @param {float} arg2
 * @param {unsigned int} arg3
 * @return {cc.CCJumpBy}
 */
create : function (
float, 
ccpoint, 
float, 
int 
)
{
    return cc.CCJumpBy;
},

};

/**
 * @class CCJumpTo
 */
cc.JumpTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCPoint} arg1
 * @param {float} arg2
 * @param {int} arg3
 * @return {cc.CCJumpTo}
 */
create : function (
float, 
ccpoint, 
float, 
int 
)
{
    return cc.CCJumpTo;
},

};

/**
 * @class CCBezierBy
 */
cc.BezierBy = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc._ccBezierConfig} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
_ccbezierconfig 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

};

/**
 * @class CCBezierTo
 */
cc.BezierTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc._ccBezierConfig} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
_ccbezierconfig 
)
{
    return false;
},

};

/**
 * @class CCScaleTo
 */
cc.ScaleTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {bool|bool}
*/
initWithDuration : function(
float,
float,
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {cc.CCScaleTo|cc.CCScaleTo}
*/
create : function(
float,
float,
float 
)
{
    return cc.CCScaleTo;
},

};

/**
 * @class CCScaleBy
 */
cc.ScaleBy = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {cc.CCScaleBy|cc.CCScaleBy}
*/
create : function(
float,
float,
float 
)
{
    return cc.CCScaleBy;
},

};

/**
 * @class CCBlink
 */
cc.Blink = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {unsigned int} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
int 
)
{
    return false;
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {unsigned int} arg1
 * @return {cc.CCBlink}
 */
create : function (
float, 
int 
)
{
    return cc.CCBlink;
},

};

/**
 * @class CCFadeIn
 */
cc.FadeIn = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @return {cc.CCFadeIn}
 */
create : function (
float 
)
{
    return cc.CCFadeIn;
},

};

/**
 * @class CCFadeOut
 */
cc.FadeOut = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @return {cc.CCFadeOut}
 */
create : function (
float 
)
{
    return cc.CCFadeOut;
},

};

/**
 * @class CCFadeTo
 */
cc.FadeTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {unsigned char} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
char 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {unsigned char} arg1
 * @return {cc.CCFadeTo}
 */
create : function (
float, 
char 
)
{
    return cc.CCFadeTo;
},

};

/**
 * @class CCTintTo
 */
cc.TintTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {unsigned char} arg1
 * @param {unsigned char} arg2
 * @param {unsigned char} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
char, 
char, 
char 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {unsigned char} arg1
 * @param {unsigned char} arg2
 * @param {unsigned char} arg3
 * @return {cc.CCTintTo}
 */
create : function (
float, 
char, 
char, 
char 
)
{
    return cc.CCTintTo;
},

};

/**
 * @class CCTintBy
 */
cc.TintBy = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {short} arg1
 * @param {short} arg2
 * @param {short} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
short, 
short, 
short 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {short} arg1
 * @param {short} arg2
 * @param {short} arg3
 * @return {cc.CCTintBy}
 */
create : function (
float, 
short, 
short, 
short 
)
{
    return cc.CCTintBy;
},

};

/**
 * @class CCDelayTime
 */
cc.DelayTime = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @return {cc.CCDelayTime}
 */
create : function (
float 
)
{
    return cc.CCDelayTime;
},

};

/**
 * @class CCAnimate
 */
cc.Animate = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method getAnimation
 * @return {cc.CCAnimation}
 */
getAnimation : function (
)
{
    return cc.CCAnimation;
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method initWithAnimation
 * @param {cc.CCAnimation} arg0
 * @return {bool}
 */
initWithAnimation : function (
ccanimation 
)
{
    return false;
},

/**
 * @method setAnimation
 * @param {cc.CCAnimation} arg0
 */
setAnimation : function (
ccanimation 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCAnimation} arg0
 * @return {cc.CCAnimate}
 */
create : function (
ccanimation 
)
{
    return cc.CCAnimate;
},

/**
 * @method CCAnimate
 * @constructor
 */
CCAnimate : function (
)
{
},

};

/**
 * @class CCTargetedAction
 */
cc.TargetedAction = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method setForcedTarget
 * @param {cc.CCNode} arg0
 */
setForcedTarget : function (
ccnode 
)
{
},

/**
 * @method initWithTarget
 * @param {cc.CCNode} arg0
 * @param {cc.CCFiniteTimeAction} arg1
 * @return {bool}
 */
initWithTarget : function (
ccnode, 
ccfinitetimeaction 
)
{
    return false;
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getForcedTarget
 * @return {cc.CCNode}
 */
getForcedTarget : function (
)
{
    return cc.CCNode;
},

/**
 * @method create
 * @param {cc.CCNode} arg0
 * @param {cc.CCFiniteTimeAction} arg1
 * @return {cc.CCTargetedAction}
 */
create : function (
ccnode, 
ccfinitetimeaction 
)
{
    return cc.CCTargetedAction;
},

/**
 * @method CCTargetedAction
 * @constructor
 */
CCTargetedAction : function (
)
{
},

};

/**
 * @class CCActionCamera
 */
cc.ActionCamera = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method CCActionCamera
 * @constructor
 */
CCActionCamera : function (
)
{
},

};

/**
 * @class CCOrbitCamera
 */
cc.OrbitCamera = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {float} arg3
 * @param {float} arg4
 * @param {float} arg5
 * @param {float} arg6
 * @return {bool}
 */
initWithDuration : function (
float, 
float, 
float, 
float, 
float, 
float, 
float 
)
{
    return false;
},

/**
 * @method sphericalRadius
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 */
sphericalRadius : function (
float, 
float, 
float 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {float} arg3
 * @param {float} arg4
 * @param {float} arg5
 * @param {float} arg6
 * @return {cc.CCOrbitCamera}
 */
create : function (
float, 
float, 
float, 
float, 
float, 
float, 
float 
)
{
    return cc.CCOrbitCamera;
},

/**
 * @method CCOrbitCamera
 * @constructor
 */
CCOrbitCamera : function (
)
{
},

};

/**
 * @class CCActionManager
 */
cc.ActionManager = {

/**
 * @method getActionByTag
 * @param {unsigned int} arg0
 * @param {cc.CCObject} arg1
 * @return {cc.CCAction}
 */
getActionByTag : function (
int, 
ccobject 
)
{
    return cc.CCAction;
},

/**
 * @method removeActionByTag
 * @param {unsigned int} arg0
 * @param {cc.CCObject} arg1
 */
removeActionByTag : function (
int, 
ccobject 
)
{
},

/**
 * @method removeAllActions
 */
removeAllActions : function (
)
{
},

/**
 * @method addAction
 * @param {cc.CCAction} arg0
 * @param {cc.CCNode} arg1
 * @param {bool} arg2
 */
addAction : function (
ccaction, 
ccnode, 
bool 
)
{
},

/**
 * @method resumeTarget
 * @param {cc.CCObject} arg0
 */
resumeTarget : function (
ccobject 
)
{
},

/**
 * @method pauseTarget
 * @param {cc.CCObject} arg0
 */
pauseTarget : function (
ccobject 
)
{
},

/**
 * @method removeAllActionsFromTarget
 * @param {cc.CCObject} arg0
 */
removeAllActionsFromTarget : function (
ccobject 
)
{
},

/**
 * @method resumeTargets
 * @param {cc.CCSet} arg0
 */
resumeTargets : function (
ccset 
)
{
},

/**
 * @method removeAction
 * @param {cc.CCAction} arg0
 */
removeAction : function (
ccaction 
)
{
},

/**
 * @method numberOfRunningActionsInTarget
 * @param {cc.CCObject} arg0
 * @return {unsigned int}
 */
numberOfRunningActionsInTarget : function (
ccobject 
)
{
    return 0;
},

/**
 * @method pauseAllRunningActions
 * @return {cc.CCSet}
 */
pauseAllRunningActions : function (
)
{
    return cc.CCSet;
},

/**
 * @method CCActionManager
 * @constructor
 */
CCActionManager : function (
)
{
},

};

/**
 * @class CCActionEase
 */
cc.ActionEase = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method initWithAction
 * @param {cc.CCActionInterval} arg0
 * @return {bool}
 */
initWithAction : function (
ccactioninterval 
)
{
    return false;
},

/**
 * @method getInnerAction
 * @return {cc.CCActionInterval}
 */
getInnerAction : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCActionEase}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCActionEase;
},

};

/**
 * @class CCEaseRateAction
 */
cc.EaseRateAction = {

/**
 * @method setRate
 * @param {float} arg0
 */
setRate : function (
float 
)
{
},

/**
 * @method initWithAction
 * @param {cc.CCActionInterval} arg0
 * @param {float} arg1
 * @return {bool}
 */
initWithAction : function (
ccactioninterval, 
float 
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method getRate
 * @return {float}
 */
getRate : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @param {float} arg1
 * @return {cc.CCEaseRateAction}
 */
create : function (
ccactioninterval, 
float 
)
{
    return cc.CCEaseRateAction;
},

};

/**
 * @class CCEaseIn
 */
cc.EaseIn = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @param {float} arg1
 * @return {cc.CCEaseIn}
 */
create : function (
ccactioninterval, 
float 
)
{
    return cc.CCEaseIn;
},

};

/**
 * @class CCEaseOut
 */
cc.EaseOut = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @param {float} arg1
 * @return {cc.CCEaseOut}
 */
create : function (
ccactioninterval, 
float 
)
{
    return cc.CCEaseOut;
},

};

/**
 * @class CCEaseInOut
 */
cc.EaseInOut = {

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @param {float} arg1
 * @return {cc.CCEaseInOut}
 */
create : function (
ccactioninterval, 
float 
)
{
    return cc.CCEaseInOut;
},

};

/**
 * @class CCEaseExponentialIn
 */
cc.EaseExponentialIn = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseExponentialIn}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseExponentialIn;
},

};

/**
 * @class CCEaseExponentialOut
 */
cc.EaseExponentialOut = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseExponentialOut}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseExponentialOut;
},

};

/**
 * @class CCEaseExponentialInOut
 */
cc.EaseExponentialInOut = {

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseExponentialInOut}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseExponentialInOut;
},

};

/**
 * @class CCEaseSineIn
 */
cc.EaseSineIn = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseSineIn}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseSineIn;
},

};

/**
 * @class CCEaseSineOut
 */
cc.EaseSineOut = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseSineOut}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseSineOut;
},

};

/**
 * @class CCEaseSineInOut
 */
cc.EaseSineInOut = {

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseSineInOut}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseSineInOut;
},

};

/**
 * @class CCEaseElastic
 */
cc.EaseElastic = {

/**
 * @method setPeriod
 * @param {float} arg0
 */
setPeriod : function (
float 
)
{
},

/**
 * @method initWithAction
 * @param {cc.CCActionInterval} arg0
 * @param {float} arg1
 * @return {bool}
 */
initWithAction : function (
ccactioninterval, 
float 
)
{
    return false;
},

/**
 * @method getPeriod
 * @return {float}
 */
getPeriod : function (
)
{
    return 0;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
* @param {cc.CCActionInterval|cc.CCActionInterval} ccactioninterval
* @param {float} float
* @return {cc.CCEaseElastic|cc.CCEaseElastic}
*/
create : function(
ccactioninterval,
float 
)
{
    return cc.CCEaseElastic;
},

};

/**
 * @class CCEaseElasticIn
 */
cc.EaseElasticIn = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
* @param {cc.CCActionInterval|cc.CCActionInterval} ccactioninterval
* @param {float} float
* @return {cc.CCEaseElasticIn|cc.CCEaseElasticIn}
*/
create : function(
ccactioninterval,
float 
)
{
    return cc.CCEaseElasticIn;
},

};

/**
 * @class CCEaseElasticOut
 */
cc.EaseElasticOut = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
* @param {cc.CCActionInterval|cc.CCActionInterval} ccactioninterval
* @param {float} float
* @return {cc.CCEaseElasticOut|cc.CCEaseElasticOut}
*/
create : function(
ccactioninterval,
float 
)
{
    return cc.CCEaseElasticOut;
},

};

/**
 * @class CCEaseElasticInOut
 */
cc.EaseElasticInOut = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
* @param {cc.CCActionInterval|cc.CCActionInterval} ccactioninterval
* @param {float} float
* @return {cc.CCEaseElasticInOut|cc.CCEaseElasticInOut}
*/
create : function(
ccactioninterval,
float 
)
{
    return cc.CCEaseElasticInOut;
},

};

/**
 * @class CCEaseBounce
 */
cc.EaseBounce = {

/**
 * @method bounceTime
 * @param {float} arg0
 * @return {float}
 */
bounceTime : function (
float 
)
{
    return 0;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseBounce}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseBounce;
},

};

/**
 * @class CCEaseBounceIn
 */
cc.EaseBounceIn = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseBounceIn}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseBounceIn;
},

};

/**
 * @class CCEaseBounceOut
 */
cc.EaseBounceOut = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseBounceOut}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseBounceOut;
},

};

/**
 * @class CCEaseBounceInOut
 */
cc.EaseBounceInOut = {

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseBounceInOut}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseBounceInOut;
},

};

/**
 * @class CCEaseBackIn
 */
cc.EaseBackIn = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseBackIn}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseBackIn;
},

};

/**
 * @class CCEaseBackOut
 */
cc.EaseBackOut = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseBackOut}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseBackOut;
},

};

/**
 * @class CCEaseBackInOut
 */
cc.EaseBackInOut = {

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCEaseBackInOut}
 */
create : function (
ccactioninterval 
)
{
    return cc.CCEaseBackInOut;
},

};

/**
 * @class CCActionInstant
 */
cc.ActionInstant = {

/**
 * @method reverse
 * @return {cc.CCFiniteTimeAction}
 */
reverse : function (
)
{
    return cc.CCFiniteTimeAction;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method step
 * @param {float} arg0
 */
step : function (
float 
)
{
},

/**
 * @method isDone
 * @return {bool}
 */
isDone : function (
)
{
    return false;
},

/**
 * @method CCActionInstant
 * @constructor
 */
CCActionInstant : function (
)
{
},

};

/**
 * @class CCShow
 */
cc.Show = {

/**
 * @method reverse
 * @return {cc.CCFiniteTimeAction}
 */
reverse : function (
)
{
    return cc.CCFiniteTimeAction;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @return {cc.CCShow}
 */
create : function (
)
{
    return cc.CCShow;
},

/**
 * @method CCShow
 * @constructor
 */
CCShow : function (
)
{
},

};

/**
 * @class CCHide
 */
cc.Hide = {

/**
 * @method reverse
 * @return {cc.CCFiniteTimeAction}
 */
reverse : function (
)
{
    return cc.CCFiniteTimeAction;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @return {cc.CCHide}
 */
create : function (
)
{
    return cc.CCHide;
},

/**
 * @method CCHide
 * @constructor
 */
CCHide : function (
)
{
},

};

/**
 * @class CCToggleVisibility
 */
cc.ToggleVisibility = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @return {cc.CCToggleVisibility}
 */
create : function (
)
{
    return cc.CCToggleVisibility;
},

/**
 * @method CCToggleVisibility
 * @constructor
 */
CCToggleVisibility : function (
)
{
},

};

/**
 * @class CCFlipX
 */
cc.FlipX = {

/**
 * @method initWithFlipX
 * @param {bool} arg0
 * @return {bool}
 */
initWithFlipX : function (
bool 
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCFiniteTimeAction}
 */
reverse : function (
)
{
    return cc.CCFiniteTimeAction;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {bool} arg0
 * @return {cc.CCFlipX}
 */
create : function (
bool 
)
{
    return cc.CCFlipX;
},

/**
 * @method CCFlipX
 * @constructor
 */
CCFlipX : function (
)
{
},

};

/**
 * @class CCFlipY
 */
cc.FlipY = {

/**
 * @method initWithFlipY
 * @param {bool} arg0
 * @return {bool}
 */
initWithFlipY : function (
bool 
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCFiniteTimeAction}
 */
reverse : function (
)
{
    return cc.CCFiniteTimeAction;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {bool} arg0
 * @return {cc.CCFlipY}
 */
create : function (
bool 
)
{
    return cc.CCFlipY;
},

/**
 * @method CCFlipY
 * @constructor
 */
CCFlipY : function (
)
{
},

};

/**
 * @class CCPlace
 */
cc.Place = {

/**
 * @method initWithPosition
 * @param {cc.CCPoint} arg0
 * @return {bool}
 */
initWithPosition : function (
ccpoint 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {cc.CCPoint} arg0
 * @return {cc.CCPlace}
 */
create : function (
ccpoint 
)
{
    return cc.CCPlace;
},

/**
 * @method CCPlace
 * @constructor
 */
CCPlace : function (
)
{
},

};

/**
 * @class CCCallFunc
 */
cc.CallFunc = {

/**
 * @method execute
 */
execute : function (
)
{
},

/**
 * @method initWithTarget
 * @param {cc.CCObject} arg0
 * @return {bool}
 */
initWithTarget : function (
ccobject 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getTargetCallback
 * @return {cc.CCObject}
 */
getTargetCallback : function (
)
{
    return cc.CCObject;
},

/**
 * @method getScriptHandler
 * @return {int}
 */
getScriptHandler : function (
)
{
    return 0;
},

/**
 * @method setTargetCallback
 * @param {cc.CCObject} arg0
 */
setTargetCallback : function (
ccobject 
)
{
},

/**
 * @method CCCallFunc
 * @constructor
 */
CCCallFunc : function (
)
{
},

};

/**
 * @class CCGridAction
 */
cc.GridAction = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method getGrid
 * @return {cc.CCGridBase}
 */
getGrid : function (
)
{
    return cc.CCGridBase;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize 
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @return {cc.CCGridAction}
 */
create : function (
float, 
ccsize 
)
{
    return cc.CCGridAction;
},

};

/**
 * @class CCGrid3DAction
 */
cc.Grid3DAction = {

/**
 * @method setVertex
 * @param {cc.CCPoint} arg0
 * @param {cc._ccVertex3F} arg1
 */
setVertex : function (
ccpoint, 
_ccvertex3f 
)
{
},

/**
 * @method getGrid
 * @return {cc.CCGridBase}
 */
getGrid : function (
)
{
    return cc.CCGridBase;
},

/**
 * @method vertex
 * @param {cc.CCPoint} arg0
 * @return {cc._ccVertex3F}
 */
vertex : function (
ccpoint 
)
{
    return cc._ccVertex3F;
},

/**
 * @method originalVertex
 * @param {cc.CCPoint} arg0
 * @return {cc._ccVertex3F}
 */
originalVertex : function (
ccpoint 
)
{
    return cc._ccVertex3F;
},

};

/**
 * @class CCTiledGrid3DAction
 */
cc.TiledGrid3DAction = {

/**
 * @method tile
 * @param {cc.CCPoint} arg0
 * @return {cc._ccQuad3}
 */
tile : function (
ccpoint 
)
{
    return cc._ccQuad3;
},

/**
 * @method setTile
 * @param {cc.CCPoint} arg0
 * @param {cc._ccQuad3} arg1
 */
setTile : function (
ccpoint, 
_ccquad3 
)
{
},

/**
 * @method originalTile
 * @param {cc.CCPoint} arg0
 * @return {cc._ccQuad3}
 */
originalTile : function (
ccpoint 
)
{
    return cc._ccQuad3;
},

/**
 * @method getGrid
 * @return {cc.CCGridBase}
 */
getGrid : function (
)
{
    return cc.CCGridBase;
},

};

/**
 * @class CCStopGrid
 */
cc.StopGrid = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method create
 * @return {cc.CCStopGrid}
 */
create : function (
)
{
    return cc.CCStopGrid;
},

};

/**
 * @class CCReuseGrid
 */
cc.ReuseGrid = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithTimes
 * @param {int} arg0
 * @return {bool}
 */
initWithTimes : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @param {int} arg0
 * @return {cc.CCReuseGrid}
 */
create : function (
int 
)
{
    return cc.CCReuseGrid;
},

};

/**
 * @class CCWaves3D
 */
cc.Waves3D = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int, 
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {cc.CCWaves3D}
 */
create : function (
float, 
ccsize, 
int, 
float 
)
{
    return cc.CCWaves3D;
},

};

/**
 * @class CCFlipX3D
 */
cc.FlipX3D = {

/**
 * @method initWithSize
 * @param {cc.CCSize} arg0
 * @param {float} arg1
 * @return {bool}
 */
initWithSize : function (
ccsize, 
float 
)
{
    return false;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @return {bool}
 */
initWithDuration : function (
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @return {cc.CCFlipX3D}
 */
create : function (
float 
)
{
    return cc.CCFlipX3D;
},

};

/**
 * @class CCFlipY3D
 */
cc.FlipY3D = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @return {cc.CCFlipY3D}
 */
create : function (
float 
)
{
    return cc.CCFlipY3D;
},

};

/**
 * @class CCLens3D
 */
cc.Lens3D = {

/**
 * @method setConcave
 * @param {bool} arg0
 */
setConcave : function (
bool 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {cc.CCPoint} arg2
 * @param {float} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
ccpoint, 
float 
)
{
    return false;
},

/**
 * @method setLensEffect
 * @param {float} arg0
 */
setLensEffect : function (
float 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getLensEffect
 * @return {float}
 */
getLensEffect : function (
)
{
    return 0;
},

/**
 * @method getPosition
 * @return {cc.CCPoint}
 */
getPosition : function (
)
{
    return cc.CCPoint;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {cc.CCPoint} arg2
 * @param {float} arg3
 * @return {cc.CCLens3D}
 */
create : function (
float, 
ccsize, 
ccpoint, 
float 
)
{
    return cc.CCLens3D;
},

};

/**
 * @class CCRipple3D
 */
cc.Ripple3D = {

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {cc.CCPoint} arg2
 * @param {float} arg3
 * @param {unsigned int} arg4
 * @param {float} arg5
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
ccpoint, 
float, 
int, 
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method getPosition
 * @return {cc.CCPoint}
 */
getPosition : function (
)
{
    return cc.CCPoint;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {cc.CCPoint} arg2
 * @param {float} arg3
 * @param {unsigned int} arg4
 * @param {float} arg5
 * @return {cc.CCRipple3D}
 */
create : function (
float, 
ccsize, 
ccpoint, 
float, 
int, 
float 
)
{
    return cc.CCRipple3D;
},

};

/**
 * @class CCShaky3D
 */
cc.Shaky3D = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {int} arg2
 * @param {bool} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int, 
bool 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {int} arg2
 * @param {bool} arg3
 * @return {cc.CCShaky3D}
 */
create : function (
float, 
ccsize, 
int, 
bool 
)
{
    return cc.CCShaky3D;
},

};

/**
 * @class CCLiquid
 */
cc.Liquid = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int, 
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {cc.CCLiquid}
 */
create : function (
float, 
ccsize, 
int, 
float 
)
{
    return cc.CCLiquid;
},

};

/**
 * @class CCWaves
 */
cc.Waves = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @param {bool} arg4
 * @param {bool} arg5
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int, 
float, 
bool, 
bool 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @param {bool} arg4
 * @param {bool} arg5
 * @return {cc.CCWaves}
 */
create : function (
float, 
ccsize, 
int, 
float, 
bool, 
bool 
)
{
    return cc.CCWaves;
},

};

/**
 * @class CCTwirl
 */
cc.Twirl = {

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {cc.CCPoint} arg2
 * @param {unsigned int} arg3
 * @param {float} arg4
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
ccpoint, 
int, 
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method getPosition
 * @return {cc.CCPoint}
 */
getPosition : function (
)
{
    return cc.CCPoint;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {cc.CCPoint} arg2
 * @param {unsigned int} arg3
 * @param {float} arg4
 * @return {cc.CCTwirl}
 */
create : function (
float, 
ccsize, 
ccpoint, 
int, 
float 
)
{
    return cc.CCTwirl;
},

};

/**
 * @class CCPageTurn3D
 */
cc.PageTurn3D = {

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @return {cc.CCPageTurn3D}
 */
create : function (
float, 
ccsize 
)
{
    return cc.CCPageTurn3D;
},

};

/**
 * @class CCProgressTo
 */
cc.ProgressTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {float} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @return {cc.CCProgressTo}
 */
create : function (
float, 
float 
)
{
    return cc.CCProgressTo;
},

};

/**
 * @class CCProgressFromTo
 */
cc.ProgressFromTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
float, 
float 
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @return {cc.CCProgressFromTo}
 */
create : function (
float, 
float, 
float 
)
{
    return cc.CCProgressFromTo;
},

};

/**
 * @class CCShakyTiles3D
 */
cc.ShakyTiles3D = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {int} arg2
 * @param {bool} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int, 
bool 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {int} arg2
 * @param {bool} arg3
 * @return {cc.CCShakyTiles3D}
 */
create : function (
float, 
ccsize, 
int, 
bool 
)
{
    return cc.CCShakyTiles3D;
},

};

/**
 * @class CCShatteredTiles3D
 */
cc.ShatteredTiles3D = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {int} arg2
 * @param {bool} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int, 
bool 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {int} arg2
 * @param {bool} arg3
 * @return {cc.CCShatteredTiles3D}
 */
create : function (
float, 
ccsize, 
int, 
bool 
)
{
    return cc.CCShatteredTiles3D;
},

};

/**
 * @class CCShuffleTiles
 */
cc.ShuffleTiles = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method placeTile
 * @param {cc.CCPoint} arg0
 * @param {cc.Tile} arg1
 */
placeTile : function (
ccpoint, 
tile 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int 
)
{
    return false;
},

/**
 * @method getDelta
 * @param {cc.CCSize} arg0
 * @return {cc.CCSize}
 */
getDelta : function (
ccsize 
)
{
    return cc.CCSize;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method shuffle
 * @param {unsigned int} arg0
 * @param {unsigned int} arg1
 */
shuffle : function (
int, 
int 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @return {cc.CCShuffleTiles}
 */
create : function (
float, 
ccsize, 
int 
)
{
    return cc.CCShuffleTiles;
},

};

/**
 * @class CCFadeOutTRTiles
 */
cc.FadeOutTRTiles = {

/**
 * @method turnOnTile
 * @param {cc.CCPoint} arg0
 */
turnOnTile : function (
ccpoint 
)
{
},

/**
 * @method turnOffTile
 * @param {cc.CCPoint} arg0
 */
turnOffTile : function (
ccpoint 
)
{
},

/**
 * @method transformTile
 * @param {cc.CCPoint} arg0
 * @param {float} arg1
 */
transformTile : function (
ccpoint, 
float 
)
{
},

/**
 * @method testFunc
 * @param {cc.CCSize} arg0
 * @param {float} arg1
 * @return {float}
 */
testFunc : function (
ccsize, 
float 
)
{
    return 0;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @return {cc.CCFadeOutTRTiles}
 */
create : function (
float, 
ccsize 
)
{
    return cc.CCFadeOutTRTiles;
},

};

/**
 * @class CCFadeOutBLTiles
 */
cc.FadeOutBLTiles = {

/**
 * @method testFunc
 * @param {cc.CCSize} arg0
 * @param {float} arg1
 * @return {float}
 */
testFunc : function (
ccsize, 
float 
)
{
    return 0;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @return {cc.CCFadeOutBLTiles}
 */
create : function (
float, 
ccsize 
)
{
    return cc.CCFadeOutBLTiles;
},

};

/**
 * @class CCFadeOutUpTiles
 */
cc.FadeOutUpTiles = {

/**
 * @method transformTile
 * @param {cc.CCPoint} arg0
 * @param {float} arg1
 */
transformTile : function (
ccpoint, 
float 
)
{
},

/**
 * @method testFunc
 * @param {cc.CCSize} arg0
 * @param {float} arg1
 * @return {float}
 */
testFunc : function (
ccsize, 
float 
)
{
    return 0;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @return {cc.CCFadeOutUpTiles}
 */
create : function (
float, 
ccsize 
)
{
    return cc.CCFadeOutUpTiles;
},

};

/**
 * @class CCFadeOutDownTiles
 */
cc.FadeOutDownTiles = {

/**
 * @method testFunc
 * @param {cc.CCSize} arg0
 * @param {float} arg1
 * @return {float}
 */
testFunc : function (
ccsize, 
float 
)
{
    return 0;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @return {cc.CCFadeOutDownTiles}
 */
create : function (
float, 
ccsize 
)
{
    return cc.CCFadeOutDownTiles;
},

};

/**
 * @class CCTurnOffTiles
 */
cc.TurnOffTiles = {

/**
 * @method turnOnTile
 * @param {cc.CCPoint} arg0
 */
turnOnTile : function (
ccpoint 
)
{
},

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method turnOffTile
 * @param {cc.CCPoint} arg0
 */
turnOffTile : function (
ccpoint 
)
{
},

/**
 * @method shuffle
 * @param {unsigned int} arg0
 * @param {unsigned int} arg1
 */
shuffle : function (
int, 
int 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
* @param {float|float} float
* @param {cc.CCSize|cc.CCSize} ccsize
* @param {unsigned int} int
* @return {cc.CCTurnOffTiles|cc.CCTurnOffTiles}
*/
create : function(
float,
ccsize,
int 
)
{
    return cc.CCTurnOffTiles;
},

};

/**
 * @class CCWavesTiles3D
 */
cc.WavesTiles3D = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int, 
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {cc.CCWavesTiles3D}
 */
create : function (
float, 
ccsize, 
int, 
float 
)
{
    return cc.CCWavesTiles3D;
},

};

/**
 * @class CCJumpTiles3D
 */
cc.JumpTiles3D = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
ccsize, 
int, 
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCSize} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {cc.CCJumpTiles3D}
 */
create : function (
float, 
ccsize, 
int, 
float 
)
{
    return cc.CCJumpTiles3D;
},

};

/**
 * @class CCSplitRows
 */
cc.SplitRows = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {unsigned int} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
int 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {unsigned int} arg1
 * @return {cc.CCSplitRows}
 */
create : function (
float, 
int 
)
{
    return cc.CCSplitRows;
},

};

/**
 * @class CCSplitCols
 */
cc.SplitCols = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {unsigned int} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
int 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {unsigned int} arg1
 * @return {cc.CCSplitCols}
 */
create : function (
float, 
int 
)
{
    return cc.CCSplitCols;
},

};

/**
 * @class CCActionTween
 */
cc.ActionTween = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {char} arg1
 * @param {float} arg2
 * @param {float} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
char, 
float, 
float 
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {char} arg1
 * @param {float} arg2
 * @param {float} arg3
 * @return {cc.CCActionTween}
 */
create : function (
float, 
char, 
float, 
float 
)
{
    return cc.CCActionTween;
},

};

/**
 * @class CCCardinalSplineTo
 */
cc.CardinalSplineTo = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCPointArray} arg1
 * @param {float} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
ccpointarray, 
float 
)
{
    return false;
},

/**
 * @method getPoints
 * @return {cc.CCPointArray}
 */
getPoints : function (
)
{
    return cc.CCPointArray;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method updatePosition
 * @param {cc.CCPoint} arg0
 */
updatePosition : function (
ccpoint 
)
{
},

/**
 * @method CCCardinalSplineTo
 * @constructor
 */
CCCardinalSplineTo : function (
)
{
},

};

/**
 * @class CCCardinalSplineBy
 */
cc.CardinalSplineBy = {

/**
 * @method startWithTarget
 * @param {cc.CCNode} arg0
 */
startWithTarget : function (
ccnode 
)
{
},

/**
 * @method updatePosition
 * @param {cc.CCPoint} arg0
 */
updatePosition : function (
ccpoint 
)
{
},

/**
 * @method reverse
 * @return {cc.CCActionInterval}
 */
reverse : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method CCCardinalSplineBy
 * @constructor
 */
CCCardinalSplineBy : function (
)
{
},

};

/**
 * @class CCCatmullRomTo
 */
cc.CatmullRomTo = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCPointArray} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
ccpointarray 
)
{
    return false;
},

};

/**
 * @class CCCatmullRomBy
 */
cc.CatmullRomBy = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCPointArray} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
ccpointarray 
)
{
    return false;
},

};

/**
 * @class CCAtlasNode
 */
cc.AtlasNode = {

/**
 * @method setTexture
 * @param {cc.CCTexture2D} arg0
 */
setTexture : function (
cctexture2d 
)
{
},

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method initWithTileFile
 * @param {char} arg0
 * @param {unsigned int} arg1
 * @param {unsigned int} arg2
 * @param {unsigned int} arg3
 * @return {bool}
 */
initWithTileFile : function (
char, 
int, 
int, 
int 
)
{
    return false;
},

/**
 * @method setColor
 * @param {cc._ccColor3B} arg0
 */
setColor : function (
_cccolor3b 
)
{
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method setTextureAtlas
 * @param {cc.CCTextureAtlas} arg0
 */
setTextureAtlas : function (
cctextureatlas 
)
{
},

/**
 * @method getTexture
 * @return {cc.CCTexture2D}
 */
getTexture : function (
)
{
    return cc.CCTexture2D;
},

/**
 * @method getTextureAtlas
 * @return {cc.CCTextureAtlas}
 */
getTextureAtlas : function (
)
{
    return cc.CCTextureAtlas;
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method getQuadsToDraw
 * @return {unsigned int}
 */
getQuadsToDraw : function (
)
{
    return 0;
},

/**
 * @method updateAtlasValues
 */
updateAtlasValues : function (
)
{
},

/**
 * @method getColor
 * @return {cc._ccColor3B}
 */
getColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method initWithTexture
 * @param {cc.CCTexture2D} arg0
 * @param {unsigned int} arg1
 * @param {unsigned int} arg2
 * @param {unsigned int} arg3
 * @return {bool}
 */
initWithTexture : function (
cctexture2d, 
int, 
int, 
int 
)
{
    return false;
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method setQuadsToDraw
 * @param {unsigned int} arg0
 */
setQuadsToDraw : function (
int 
)
{
},

/**
 * @method create
 * @param {char} arg0
 * @param {unsigned int} arg1
 * @param {unsigned int} arg2
 * @param {unsigned int} arg3
 * @return {cc.CCAtlasNode}
 */
create : function (
char, 
int, 
int, 
int 
)
{
    return cc.CCAtlasNode;
},

/**
 * @method CCAtlasNode
 * @constructor
 */
CCAtlasNode : function (
)
{
},

};

/**
 * @class CCDrawNode
 */
cc.DrawNode = {

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method clear
 */
clear : function (
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method drawDot
 * @param {cc.CCPoint} arg0
 * @param {float} arg1
 * @param {cc._ccColor4F} arg2
 */
drawDot : function (
ccpoint, 
float, 
_cccolor4f 
)
{
},

/**
 * @method drawSegment
 * @param {cc.CCPoint} arg0
 * @param {cc.CCPoint} arg1
 * @param {float} arg2
 * @param {cc._ccColor4F} arg3
 */
drawSegment : function (
ccpoint, 
ccpoint, 
float, 
_cccolor4f 
)
{
},

/**
 * @method create
 * @return {cc.CCDrawNode}
 */
create : function (
)
{
    return cc.CCDrawNode;
},

/**
 * @method CCDrawNode
 * @constructor
 */
CCDrawNode : function (
)
{
},

};

/**
 * @class CCCamera
 */
cc.Camera = {

/**
 * @method locate
 */
locate : function (
)
{
},

/**
 * @method restore
 */
restore : function (
)
{
},

/**
 * @method setEyeXYZ
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 */
setEyeXYZ : function (
float, 
float, 
float 
)
{
},

/**
 * @method setCenterXYZ
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 */
setCenterXYZ : function (
float, 
float, 
float 
)
{
},

/**
 * @method isDirty
 * @return {bool}
 */
isDirty : function (
)
{
    return false;
},

/**
 * @method init
 */
init : function (
)
{
},

/**
 * @method setDirty
 * @param {bool} arg0
 */
setDirty : function (
bool 
)
{
},

/**
 * @method setUpXYZ
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 */
setUpXYZ : function (
float, 
float, 
float 
)
{
},

/**
 * @method getZEye
 * @return {float}
 */
getZEye : function (
)
{
    return 0;
},

/**
 * @method CCCamera
 * @constructor
 */
CCCamera : function (
)
{
},

};

/**
 * @class CCLabelAtlas
 */
cc.LabelAtlas = {

/**
 * @method setString
 * @param {char} arg0
 */
setString : function (
char 
)
{
},

/**
 * @method initWithString
* @param {char|char|char} char
* @param {char|char|cc.CCTexture2D} char
* @param {unsigned int|unsigned int} int
* @param {unsigned int|unsigned int} int
* @param {unsigned int|unsigned int} int
* @return {bool|bool|bool}
*/
initWithString : function(
char,
cctexture2d,
int,
int,
int 
)
{
    return false;
},

/**
 * @method updateAtlasValues
 */
updateAtlasValues : function (
)
{
},

/**
 * @method getString
 * @return {char}
 */
getString : function (
)
{
    return 0;
},

/**
 * @method create
* @param {char|char} char
* @param {char|char} char
* @param {unsigned int} int
* @param {unsigned int} int
* @param {unsigned int} int
* @return {cc.CCLabelAtlas|cc.CCLabelAtlas}
*/
create : function(
char,
char,
int,
int,
int 
)
{
    return cc.CCLabelAtlas;
},

/**
 * @method CCLabelAtlas
 * @constructor
 */
CCLabelAtlas : function (
)
{
},

};

/**
 * @class CCDirector
 */
cc.Director = {

/**
 * @method pause
 */
pause : function (
)
{
},

/**
 * @method setDelegate
 * @param {cc.CCDirectorDelegate} arg0
 */
setDelegate : function (
ccdirectordelegate 
)
{
},

/**
 * @method setContentScaleFactor
 * @param {float} arg0
 */
setContentScaleFactor : function (
float 
)
{
},

/**
 * @method getDeltaTime
 * @return {float}
 */
getDeltaTime : function (
)
{
    return 0;
},

/**
 * @method getContentScaleFactor
 * @return {float}
 */
getContentScaleFactor : function (
)
{
    return 0;
},

/**
 * @method getWinSizeInPixels
 * @return {cc.CCSize}
 */
getWinSizeInPixels : function (
)
{
    return cc.CCSize;
},

/**
 * @method getWinRealSizeInPixels
 * @return {cc.CCSize}
 */
getWinRealSizeInPixels : function (
)
{
    return cc.CCSize;
},

/**
 * @method setGLDefaultValues
 */
setGLDefaultValues : function (
)
{
},

/**
 * @method setActionManager
 * @param {cc.CCActionManager} arg0
 */
setActionManager : function (
ccactionmanager 
)
{
},

/**
 * @method setAlphaBlending
 * @param {bool} arg0
 */
setAlphaBlending : function (
bool 
)
{
},

/**
 * @method popToRootScene
 */
popToRootScene : function (
)
{
},

/**
 * @method getNotificationNode
 * @return {cc.CCNode}
 */
getNotificationNode : function (
)
{
    return cc.CCNode;
},

/**
 * @method getWinSize
 * @return {cc.CCSize}
 */
getWinSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method end
 */
end : function (
)
{
},

/**
 * @method isSendCleanupToScene
 * @return {bool}
 */
isSendCleanupToScene : function (
)
{
    return false;
},

/**
 * @method getVisibleOrigin
 * @return {cc.CCPoint}
 */
getVisibleOrigin : function (
)
{
    return cc.CCPoint;
},

/**
 * @method mainLoop
 */
mainLoop : function (
)
{
},

/**
 * @method setDepthTest
 * @param {bool} arg0
 */
setDepthTest : function (
bool 
)
{
},

/**
 * @method getSecondsPerFrame
 * @return {float}
 */
getSecondsPerFrame : function (
)
{
    return 0;
},

/**
 * @method convertToUI
 * @param {cc.CCPoint} arg0
 * @return {cc.CCPoint}
 */
convertToUI : function (
ccpoint 
)
{
    return cc.CCPoint;
},

/**
 * @method setAccelerometer
 * @param {cc.CCAccelerometer} arg0
 */
setAccelerometer : function (
ccaccelerometer 
)
{
},

/**
 * @method setDefaultValues
 */
setDefaultValues : function (
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setScheduler
 * @param {cc.CCScheduler} arg0
 */
setScheduler : function (
ccscheduler 
)
{
},

/**
 * @method reshapeProjection
 * @param {cc.CCSize} arg0
 */
reshapeProjection : function (
ccsize 
)
{
},

/**
 * @method startAnimation
 */
startAnimation : function (
)
{
},

/**
 * @method getRunningScene
 * @return {cc.CCScene}
 */
getRunningScene : function (
)
{
    return cc.CCScene;
},

/**
 * @method setViewport
 */
setViewport : function (
)
{
},

/**
 * @method stopAnimation
 */
stopAnimation : function (
)
{
},

/**
 * @method setKeypadDispatcher
 * @param {cc.CCKeypadDispatcher} arg0
 */
setKeypadDispatcher : function (
cckeypaddispatcher 
)
{
},

/**
 * @method popToSceneStackLevel
 * @param {int} arg0
 */
popToSceneStackLevel : function (
int 
)
{
},

/**
 * @method resume
 */
resume : function (
)
{
},

/**
 * @method setTouchDispatcher
 * @param {cc.CCTouchDispatcher} arg0
 */
setTouchDispatcher : function (
cctouchdispatcher 
)
{
},

/**
 * @method isNextDeltaTimeZero
 * @return {bool}
 */
isNextDeltaTimeZero : function (
)
{
    return false;
},

/**
 * @method getDelegate
 * @return {cc.CCDirectorDelegate}
 */
getDelegate : function (
)
{
    return cc.CCDirectorDelegate;
},

/**
 * @method setOpenGLView
 * @param {cc.CCEGLView} arg0
 */
setOpenGLView : function (
cceglview 
)
{
},

/**
 * @method convertToGL
 * @param {cc.CCPoint} arg0
 * @return {cc.CCPoint}
 */
convertToGL : function (
ccpoint 
)
{
    return cc.CCPoint;
},

/**
 * @method purgeCachedData
 */
purgeCachedData : function (
)
{
},

/**
 * @method getTotalFrames
 * @return {unsigned int}
 */
getTotalFrames : function (
)
{
    return 0;
},

/**
 * @method runWithScene
 * @param {cc.CCScene} arg0
 */
runWithScene : function (
ccscene 
)
{
},

/**
 * @method setNotificationNode
 * @param {cc.CCNode} arg0
 */
setNotificationNode : function (
ccnode 
)
{
},

/**
 * @method drawScene
 */
drawScene : function (
)
{
},

/**
 * @method popScene
 */
popScene : function (
)
{
},

/**
 * @method isDisplayStats
 * @return {bool}
 */
isDisplayStats : function (
)
{
    return false;
},

/**
 * @method setProjection
 * @param {cc.ccDirectorProjection} arg0
 */
setProjection : function (
ccdirectorprojection 
)
{
},

/**
 * @method getZEye
 * @return {float}
 */
getZEye : function (
)
{
    return 0;
},

/**
 * @method setNextDeltaTimeZero
 * @param {bool} arg0
 */
setNextDeltaTimeZero : function (
bool 
)
{
},

/**
 * @method getVisibleSize
 * @return {cc.CCSize}
 */
getVisibleSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method getScheduler
 * @return {cc.CCScheduler}
 */
getScheduler : function (
)
{
    return cc.CCScheduler;
},

/**
 * @method pushScene
 * @param {cc.CCScene} arg0
 */
pushScene : function (
ccscene 
)
{
},

/**
 * @method getAnimationInterval
 * @return {double}
 */
getAnimationInterval : function (
)
{
    return 0;
},

/**
 * @method isPaused
 * @return {bool}
 */
isPaused : function (
)
{
    return false;
},

/**
 * @method setDisplayStats
 * @param {bool} arg0
 */
setDisplayStats : function (
bool 
)
{
},

/**
 * @method replaceScene
 * @param {cc.CCScene} arg0
 */
replaceScene : function (
ccscene 
)
{
},

/**
 * @method setAnimationInterval
 * @param {double} arg0
 */
setAnimationInterval : function (
double 
)
{
},

/**
 * @method getActionManager
 * @return {cc.CCActionManager}
 */
getActionManager : function (
)
{
    return cc.CCActionManager;
},

/**
 * @method sharedDirector
 * @return {cc.CCDirector}
 */
sharedDirector : function (
)
{
    return cc.CCDirector;
},

};

/**
 * @class CCGridBase
 */
cc.GridBase = {

/**
 * @method setGridSize
 * @param {cc.CCSize} arg0
 */
setGridSize : function (
ccsize 
)
{
},

/**
 * @method calculateVertexPoints
 */
calculateVertexPoints : function (
)
{
},

/**
 * @method afterDraw
 * @param {cc.CCNode} arg0
 */
afterDraw : function (
ccnode 
)
{
},

/**
 * @method beforeDraw
 */
beforeDraw : function (
)
{
},

/**
 * @method isTextureFlipped
 * @return {bool}
 */
isTextureFlipped : function (
)
{
    return false;
},

/**
 * @method getGridSize
 * @return {cc.CCSize}
 */
getGridSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method getStep
 * @return {cc.CCPoint}
 */
getStep : function (
)
{
    return cc.CCPoint;
},

/**
 * @method set2DProjection
 */
set2DProjection : function (
)
{
},

/**
 * @method setStep
 * @param {cc.CCPoint} arg0
 */
setStep : function (
ccpoint 
)
{
},

/**
 * @method setTextureFlipped
 * @param {bool} arg0
 */
setTextureFlipped : function (
bool 
)
{
},

/**
 * @method blit
 */
blit : function (
)
{
},

/**
 * @method setActive
 * @param {bool} arg0
 */
setActive : function (
bool 
)
{
},

/**
 * @method getReuseGrid
 * @return {int}
 */
getReuseGrid : function (
)
{
    return 0;
},

/**
 * @method initWithSize
* @param {cc.CCSize|cc.CCSize} ccsize
* @param {cc.CCTexture2D} cctexture2d
* @param {bool} bool
* @return {bool|bool}
*/
initWithSize : function(
ccsize,
cctexture2d,
bool 
)
{
    return false;
},

/**
 * @method setReuseGrid
 * @param {int} arg0
 */
setReuseGrid : function (
int 
)
{
},

/**
 * @method isActive
 * @return {bool}
 */
isActive : function (
)
{
    return false;
},

/**
 * @method reuse
 */
reuse : function (
)
{
},

/**
 * @method create
* @param {cc.CCSize|cc.CCSize} ccsize
* @param {cc.CCTexture2D} cctexture2d
* @param {bool} bool
* @return {cc.CCGridBase|cc.CCGridBase}
*/
create : function(
ccsize,
cctexture2d,
bool 
)
{
    return cc.CCGridBase;
},

};

/**
 * @class CCGrid3D
 */
cc.Grid3D = {

/**
 * @method calculateVertexPoints
 */
calculateVertexPoints : function (
)
{
},

/**
 * @method setVertex
 * @param {cc.CCPoint} arg0
 * @param {cc._ccVertex3F} arg1
 */
setVertex : function (
ccpoint, 
_ccvertex3f 
)
{
},

/**
 * @method reuse
 */
reuse : function (
)
{
},

/**
 * @method vertex
 * @param {cc.CCPoint} arg0
 * @return {cc._ccVertex3F}
 */
vertex : function (
ccpoint 
)
{
    return cc._ccVertex3F;
},

/**
 * @method blit
 */
blit : function (
)
{
},

/**
 * @method originalVertex
 * @param {cc.CCPoint} arg0
 * @return {cc._ccVertex3F}
 */
originalVertex : function (
ccpoint 
)
{
    return cc._ccVertex3F;
},

/**
 * @method create
* @param {cc.CCSize|cc.CCSize} ccsize
* @param {cc.CCTexture2D} cctexture2d
* @param {bool} bool
* @return {cc.CCGrid3D|cc.CCGrid3D}
*/
create : function(
ccsize,
cctexture2d,
bool 
)
{
    return cc.CCGrid3D;
},

/**
 * @method CCGrid3D
 * @constructor
 */
CCGrid3D : function (
)
{
},

};

/**
 * @class CCTiledGrid3D
 */
cc.TiledGrid3D = {

/**
 * @method calculateVertexPoints
 */
calculateVertexPoints : function (
)
{
},

/**
 * @method reuse
 */
reuse : function (
)
{
},

/**
 * @method originalTile
 * @param {cc.CCPoint} arg0
 * @return {cc._ccQuad3}
 */
originalTile : function (
ccpoint 
)
{
    return cc._ccQuad3;
},

/**
 * @method tile
 * @param {cc.CCPoint} arg0
 * @return {cc._ccQuad3}
 */
tile : function (
ccpoint 
)
{
    return cc._ccQuad3;
},

/**
 * @method setTile
 * @param {cc.CCPoint} arg0
 * @param {cc._ccQuad3} arg1
 */
setTile : function (
ccpoint, 
_ccquad3 
)
{
},

/**
 * @method blit
 */
blit : function (
)
{
},

/**
 * @method create
* @param {cc.CCSize|cc.CCSize} ccsize
* @param {cc.CCTexture2D} cctexture2d
* @param {bool} bool
* @return {cc.CCTiledGrid3D|cc.CCTiledGrid3D}
*/
create : function(
ccsize,
cctexture2d,
bool 
)
{
    return cc.CCTiledGrid3D;
},

/**
 * @method CCTiledGrid3D
 * @constructor
 */
CCTiledGrid3D : function (
)
{
},

};

/**
 * @class CCSprite
 */
cc.Sprite = {

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method addChild
* @param {cc.CCNode|cc.CCNode|cc.CCNode} ccnode
* @param {int|int} int
* @param {int} int
*/
addChild : function(
ccnode,
int,
int 
)
{
},

/**
 * @method setTexture
 * @param {cc.CCTexture2D} arg0
 */
setTexture : function (
cctexture2d 
)
{
},

/**
 * @method isFlipX
 * @return {bool}
 */
isFlipX : function (
)
{
    return false;
},

/**
 * @method getTexture
 * @return {cc.CCTexture2D}
 */
getTexture : function (
)
{
    return cc.CCTexture2D;
},

/**
 * @method setScaleY
 * @param {float} arg0
 */
setScaleY : function (
float 
)
{
},

/**
 * @method setScale
 * @param {float} arg0
 */
setScale : function (
float 
)
{
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method setDisplayFrameWithAnimationName
 * @param {char} arg0
 * @param {int} arg1
 */
setDisplayFrameWithAnimationName : function (
char, 
int 
)
{
},

/**
 * @method setRotationY
 * @param {float} arg0
 */
setRotationY : function (
float 
)
{
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method getBatchNode
 * @return {cc.CCSpriteBatchNode}
 */
getBatchNode : function (
)
{
    return cc.CCSpriteBatchNode;
},

/**
 * @method isTextureRectRotated
 * @return {bool}
 */
isTextureRectRotated : function (
)
{
    return false;
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method setTextureRect
* @param {cc.CCRect|cc.CCRect} ccrect
* @param {bool} bool
* @param {cc.CCSize} ccsize
*/
setTextureRect : function(
ccrect,
bool,
ccsize 
)
{
},

/**
 * @method initWithFile
* @param {char|char} char
* @param {cc.CCRect} ccrect
* @return {bool|bool|bool}
*/
initWithFile : function(
char,
ccrect 
)
{
    return false;
},

/**
 * @method setVertexZ
 * @param {float} arg0
 */
setVertexZ : function (
float 
)
{
},

/**
 * @method getTextureRect
 * @return {cc.CCRect}
 */
getTextureRect : function (
)
{
    return cc.CCRect;
},

/**
 * @method updateDisplayedOpacity
 * @param {unsigned char} arg0
 */
updateDisplayedOpacity : function (
char 
)
{
},

/**
 * @method initWithSpriteFrameName
 * @param {char} arg0
 * @return {bool}
 */
initWithSpriteFrameName : function (
char 
)
{
    return false;
},

/**
 * @method isFrameDisplayed
 * @param {cc.CCSpriteFrame} arg0
 * @return {bool}
 */
isFrameDisplayed : function (
ccspriteframe 
)
{
    return false;
},

/**
 * @method getAtlasIndex
 * @return {unsigned int}
 */
getAtlasIndex : function (
)
{
    return 0;
},

/**
 * @method setRotation
 * @param {float} arg0
 */
setRotation : function (
float 
)
{
},

/**
 * @method setDisplayFrame
 * @param {cc.CCSpriteFrame} arg0
 */
setDisplayFrame : function (
ccspriteframe 
)
{
},

/**
 * @method getOffsetPosition
 * @return {cc.CCPoint}
 */
getOffsetPosition : function (
)
{
    return cc.CCPoint;
},

/**
 * @method setBatchNode
 * @param {cc.CCSpriteBatchNode} arg0
 */
setBatchNode : function (
ccspritebatchnode 
)
{
},

/**
 * @method setRotationX
 * @param {float} arg0
 */
setRotationX : function (
float 
)
{
},

/**
 * @method setScaleX
 * @param {float} arg0
 */
setScaleX : function (
float 
)
{
},

/**
 * @method initWithTexture
* @param {cc.CCTexture2D|cc.CCTexture2D|cc.CCTexture2D} cctexture2d
* @param {cc.CCRect|cc.CCRect} ccrect
* @param {bool} bool
* @return {bool|bool|bool}
*/
initWithTexture : function(
cctexture2d,
ccrect,
bool 
)
{
    return false;
},

/**
 * @method setTextureAtlas
 * @param {cc.CCTextureAtlas} arg0
 */
setTextureAtlas : function (
cctextureatlas 
)
{
},

/**
 * @method setFlipY
 * @param {bool} arg0
 */
setFlipY : function (
bool 
)
{
},

/**
 * @method setFlipX
 * @param {bool} arg0
 */
setFlipX : function (
bool 
)
{
},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool} arg0
 */
removeAllChildrenWithCleanup : function (
bool 
)
{
},

/**
 * @method sortAllChildren
 */
sortAllChildren : function (
)
{
},

/**
 * @method setAtlasIndex
 * @param {unsigned int} arg0
 */
setAtlasIndex : function (
int 
)
{
},

/**
 * @method setVertexRect
 * @param {cc.CCRect} arg0
 */
setVertexRect : function (
ccrect 
)
{
},

/**
 * @method setDirty
 * @param {bool} arg0
 */
setDirty : function (
bool 
)
{
},

/**
 * @method isDirty
 * @return {bool}
 */
isDirty : function (
)
{
    return false;
},

/**
 * @method reorderChild
 * @param {cc.CCNode} arg0
 * @param {int} arg1
 */
reorderChild : function (
ccnode, 
int 
)
{
},

/**
 * @method ignoreAnchorPointForPosition
 * @param {bool} arg0
 */
ignoreAnchorPointForPosition : function (
bool 
)
{
},

/**
 * @method setColor
 * @param {cc._ccColor3B} arg0
 */
setColor : function (
_cccolor3b 
)
{
},

/**
 * @method getTextureAtlas
 * @return {cc.CCTextureAtlas}
 */
getTextureAtlas : function (
)
{
    return cc.CCTextureAtlas;
},

/**
 * @method initWithSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 * @return {bool}
 */
initWithSpriteFrame : function (
ccspriteframe 
)
{
    return false;
},

/**
 * @method removeChild
 * @param {cc.CCNode} arg0
 * @param {bool} arg1
 */
removeChild : function (
ccnode, 
bool 
)
{
},

/**
 * @method updateTransform
 */
updateTransform : function (
)
{
},

/**
 * @method isFlipY
 * @return {bool}
 */
isFlipY : function (
)
{
    return false;
},

/**
 * @method updateDisplayedColor
 * @param {cc._ccColor3B} arg0
 */
updateDisplayedColor : function (
_cccolor3b 
)
{
},

/**
 * @method setSkewX
 * @param {float} arg0
 */
setSkewX : function (
float 
)
{
},

/**
 * @method setSkewY
 * @param {float} arg0
 */
setSkewY : function (
float 
)
{
},

/**
 * @method setVisible
 * @param {bool} arg0
 */
setVisible : function (
bool 
)
{
},

/**
 * @method create
* @param {char|char} char
* @param {cc.CCRect} ccrect
* @return {cc.CCSprite|cc.CCSprite|cc.CCSprite}
*/
create : function(
char,
ccrect 
)
{
    return cc.CCSprite;
},

/**
 * @method createWithTexture
* @param {cc.CCTexture2D|cc.CCTexture2D} cctexture2d
* @param {cc.CCRect} ccrect
* @return {cc.CCSprite|cc.CCSprite}
*/
createWithTexture : function(
cctexture2d,
ccrect 
)
{
    return cc.CCSprite;
},

/**
 * @method createWithSpriteFrameName
 * @param {char} arg0
 * @return {cc.CCSprite}
 */
createWithSpriteFrameName : function (
char 
)
{
    return cc.CCSprite;
},

/**
 * @method createWithSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 * @return {cc.CCSprite}
 */
createWithSpriteFrame : function (
ccspriteframe 
)
{
    return cc.CCSprite;
},

/**
 * @method CCSprite
 * @constructor
 */
CCSprite : function (
)
{
},

};

/**
 * @class CCLabelTTF
 */
cc.LabelTTF = {

/**
 * @method setAdjustsFontSizeToFitWidth
 * @param {bool} arg0
 */
setAdjustsFontSizeToFitWidth : function (
bool 
)
{
},

/**
 * @method enableShadow
 * @param {cc.CCSize} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {bool} arg3
 */
enableShadow : function (
ccsize, 
float, 
float, 
bool 
)
{
},

/**
 * @method setDimensions
 * @param {cc.CCSize} arg0
 */
setDimensions : function (
ccsize 
)
{
},

/**
 * @method getFontSize
 * @return {float}
 */
getFontSize : function (
)
{
    return 0;
},

/**
 * @method getString
 * @return {char}
 */
getString : function (
)
{
    return 0;
},

/**
 * @method setTextDefinition
 * @param {cc._ccFontDefinition} arg0
 */
setTextDefinition : function (
_ccfontdefinition 
)
{
},

/**
 * @method getAdjustsFontSizeToFitWidth
 * @return {bool}
 */
getAdjustsFontSizeToFitWidth : function (
)
{
    return false;
},

/**
 * @method setFontName
 * @param {char} arg0
 */
setFontName : function (
char 
)
{
},

/**
 * @method getHorizontalAlignment
 * @return {cc.CCTextAlignment}
 */
getHorizontalAlignment : function (
)
{
    return 0;
},

/**
 * @method initWithStringAndTextDefinition
 * @param {char} arg0
 * @param {cc._ccFontDefinition} arg1
 * @return {bool}
 */
initWithStringAndTextDefinition : function (
char, 
_ccfontdefinition 
)
{
    return false;
},

/**
 * @method setString
 * @param {char} arg0
 */
setString : function (
char 
)
{
},

/**
 * @method initWithString
* @param {char|char|char} char
* @param {char|char|char} char
* @param {float|float|float} float
* @param {cc.CCSize|cc.CCSize} ccsize
* @param {cc.CCTextAlignment|cc.CCTextAlignment} cctextalignment
* @param {cc.CCVerticalTextAlignment} ccverticaltextalignment
* @return {bool|bool|bool}
*/
initWithString : function(
char,
char,
float,
ccsize,
cctextalignment,
ccverticaltextalignment 
)
{
    return false;
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setFontFillColor
 * @param {cc._ccColor3B} arg0
 * @param {bool} arg1
 */
setFontFillColor : function (
_cccolor3b, 
bool 
)
{
},

/**
 * @method enableStroke
 * @param {cc._ccColor3B} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
enableStroke : function (
_cccolor3b, 
float, 
bool 
)
{
},

/**
 * @method getDimensions
 * @return {cc.CCSize}
 */
getDimensions : function (
)
{
    return cc.CCSize;
},

/**
 * @method setVerticalAlignment
 * @param {cc.CCVerticalTextAlignment} arg0
 */
setVerticalAlignment : function (
ccverticaltextalignment 
)
{
},

/**
 * @method setFontSize
 * @param {float} arg0
 */
setFontSize : function (
float 
)
{
},

/**
 * @method getVerticalAlignment
 * @return {cc.CCVerticalTextAlignment}
 */
getVerticalAlignment : function (
)
{
    return 0;
},

/**
 * @method getTextDefinition
 * @return {cc._ccFontDefinition}
 */
getTextDefinition : function (
)
{
    return cc._ccFontDefinition;
},

/**
 * @method getFontName
 * @return {char}
 */
getFontName : function (
)
{
    return 0;
},

/**
 * @method setHorizontalAlignment
 * @param {cc.CCTextAlignment} arg0
 */
setHorizontalAlignment : function (
cctextalignment 
)
{
},

/**
 * @method disableShadow
 */
disableShadow : function (
)
{
},

/**
 * @method disableStroke
 */
disableStroke : function (
)
{
},

/**
 * @method create
* @param {char|char|char} char
* @param {char|char|char} char
* @param {float|float|float} float
* @param {cc.CCSize|cc.CCSize} ccsize
* @param {cc.CCTextAlignment|cc.CCTextAlignment} cctextalignment
* @param {cc.CCVerticalTextAlignment} ccverticaltextalignment
* @return {cc.CCLabelTTF|cc.CCLabelTTF|cc.CCLabelTTF|cc.CCLabelTTF}
*/
create : function(
char,
char,
float,
ccsize,
cctextalignment,
ccverticaltextalignment 
)
{
    return cc.CCLabelTTF;
},

/**
 * @method createWithFontDefinition
 * @param {char} arg0
 * @param {cc._ccFontDefinition} arg1
 * @return {cc.CCLabelTTF}
 */
createWithFontDefinition : function (
char, 
_ccfontdefinition 
)
{
    return cc.CCLabelTTF;
},

/**
 * @method CCLabelTTF
 * @constructor
 */
CCLabelTTF : function (
)
{
},

};

/**
 * @class CCSpriteBatchNode
 */
cc.SpriteBatchNode = {

/**
 * @method appendChild
 * @param {cc.CCSprite} arg0
 */
appendChild : function (
ccsprite 
)
{
},

/**
 * @method reorderBatch
 * @param {bool} arg0
 */
reorderBatch : function (
bool 
)
{
},

/**
 * @method addChild
* @param {cc.CCNode|cc.CCNode|cc.CCNode} ccnode
* @param {int|int} int
* @param {int} int
*/
addChild : function(
ccnode,
int,
int 
)
{
},

/**
 * @method visit
 */
visit : function (
)
{
},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool} arg0
 */
removeAllChildrenWithCleanup : function (
bool 
)
{
},

/**
 * @method setTexture
 * @param {cc.CCTexture2D} arg0
 */
setTexture : function (
cctexture2d 
)
{
},

/**
 * @method removeChildAtIndex
 * @param {unsigned int} arg0
 * @param {bool} arg1
 */
removeChildAtIndex : function (
int, 
bool 
)
{
},

/**
 * @method removeSpriteFromAtlas
 * @param {cc.CCSprite} arg0
 */
removeSpriteFromAtlas : function (
ccsprite 
)
{
},

/**
 * @method atlasIndexForChild
 * @param {cc.CCSprite} arg0
 * @param {int} arg1
 * @return {unsigned int}
 */
atlasIndexForChild : function (
ccsprite, 
int 
)
{
    return 0;
},

/**
 * @method getTexture
 * @return {cc.CCTexture2D}
 */
getTexture : function (
)
{
    return cc.CCTexture2D;
},

/**
 * @method increaseAtlasCapacity
 */
increaseAtlasCapacity : function (
)
{
},

/**
 * @method init
* @param {char} char
* @param {unsigned int} int
* @return {bool|bool}
*/
init : function(
char,
int 
)
{
    return false;
},

/**
 * @method insertChild
 * @param {cc.CCSprite} arg0
 * @param {unsigned int} arg1
 */
insertChild : function (
ccsprite, 
int 
)
{
},

/**
 * @method lowestAtlasIndexInChild
 * @param {cc.CCSprite} arg0
 * @return {unsigned int}
 */
lowestAtlasIndexInChild : function (
ccsprite 
)
{
    return 0;
},

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method initWithTexture
 * @param {cc.CCTexture2D} arg0
 * @param {unsigned int} arg1
 * @return {bool}
 */
initWithTexture : function (
cctexture2d, 
int 
)
{
    return false;
},

/**
 * @method setTextureAtlas
 * @param {cc.CCTextureAtlas} arg0
 */
setTextureAtlas : function (
cctextureatlas 
)
{
},

/**
 * @method sortAllChildren
 */
sortAllChildren : function (
)
{
},

/**
 * @method reorderChild
 * @param {cc.CCNode} arg0
 * @param {int} arg1
 */
reorderChild : function (
ccnode, 
int 
)
{
},

/**
 * @method rebuildIndexInOrder
 * @param {cc.CCSprite} arg0
 * @param {unsigned int} arg1
 * @return {unsigned int}
 */
rebuildIndexInOrder : function (
ccsprite, 
int 
)
{
    return 0;
},

/**
 * @method getTextureAtlas
 * @return {cc.CCTextureAtlas}
 */
getTextureAtlas : function (
)
{
    return cc.CCTextureAtlas;
},

/**
 * @method getDescendants
 * @return {cc.CCArray}
 */
getDescendants : function (
)
{
    return cc.CCArray;
},

/**
 * @method removeChild
 * @param {cc.CCNode} arg0
 * @param {bool} arg1
 */
removeChild : function (
ccnode, 
bool 
)
{
},

/**
 * @method highestAtlasIndexInChild
 * @param {cc.CCSprite} arg0
 * @return {unsigned int}
 */
highestAtlasIndexInChild : function (
ccsprite 
)
{
    return 0;
},

/**
 * @method create
* @param {char|char} char
* @param {unsigned int} int
* @return {cc.CCSpriteBatchNode|cc.CCSpriteBatchNode}
*/
create : function(
char,
int 
)
{
    return cc.CCSpriteBatchNode;
},

/**
 * @method createWithTexture
* @param {cc.CCTexture2D|cc.CCTexture2D} cctexture2d
* @param {unsigned int} int
* @return {cc.CCSpriteBatchNode|cc.CCSpriteBatchNode}
*/
createWithTexture : function(
cctexture2d,
int 
)
{
    return cc.CCSpriteBatchNode;
},

/**
 * @method CCSpriteBatchNode
 * @constructor
 */
CCSpriteBatchNode : function (
)
{
},

};

/**
 * @class CCLabelBMFont
 */
cc.LabelBMFont = {

/**
 * @method createFontChars
 */
createFontChars : function (
)
{
},

/**
 * @method getString
 * @return {char}
 */
getString : function (
)
{
    return 0;
},

/**
 * @method getConfiguration
 * @return {cc.CCBMFontConfiguration}
 */
getConfiguration : function (
)
{
    return cc.CCBMFontConfiguration;
},

/**
 * @method setScale
 * @param {float} arg0
 */
setScale : function (
float 
)
{
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method setCascadeOpacityEnabled
 * @param {bool} arg0
 */
setCascadeOpacityEnabled : function (
bool 
)
{
},

/**
 * @method getFntFile
 * @return {char}
 */
getFntFile : function (
)
{
    return 0;
},

/**
 * @method updateLabel
 */
updateLabel : function (
)
{
},

/**
 * @method setWidth
 * @param {float} arg0
 */
setWidth : function (
float 
)
{
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method isCascadeOpacityEnabled
 * @return {bool}
 */
isCascadeOpacityEnabled : function (
)
{
    return false;
},

/**
 * @method setString
* @param {char|char} char
* @param {bool} bool
*/
setString : function(
char,
bool 
)
{
},

/**
 * @method initWithString
 * @param {char} arg0
 * @param {char} arg1
 * @param {float} arg2
 * @param {cc.CCTextAlignment} arg3
 * @param {cc.CCPoint} arg4
 * @return {bool}
 */
initWithString : function (
char, 
char, 
float, 
cctextalignment, 
ccpoint 
)
{
    return false;
},

/**
 * @method setCascadeColorEnabled
 * @param {bool} arg0
 */
setCascadeColorEnabled : function (
bool 
)
{
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method updateDisplayedOpacity
 * @param {unsigned char} arg0
 */
updateDisplayedOpacity : function (
char 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setFntFile
 * @param {char} arg0
 */
setFntFile : function (
char 
)
{
},

/**
 * @method getOpacity
 * @return {unsigned char}
 */
getOpacity : function (
)
{
    return 0;
},

/**
 * @method setLineBreakWithoutSpace
 * @param {bool} arg0
 */
setLineBreakWithoutSpace : function (
bool 
)
{
},

/**
 * @method setScaleY
 * @param {float} arg0
 */
setScaleY : function (
float 
)
{
},

/**
 * @method setScaleX
 * @param {float} arg0
 */
setScaleX : function (
float 
)
{
},

/**
 * @method getColor
 * @return {cc._ccColor3B}
 */
getColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method getDisplayedOpacity
 * @return {unsigned char}
 */
getDisplayedOpacity : function (
)
{
    return 0;
},

/**
 * @method isCascadeColorEnabled
 * @return {bool}
 */
isCascadeColorEnabled : function (
)
{
    return false;
},

/**
 * @method setColor
 * @param {cc._ccColor3B} arg0
 */
setColor : function (
_cccolor3b 
)
{
},

/**
 * @method setCString
 * @param {char} arg0
 */
setCString : function (
char 
)
{
},

/**
 * @method getDisplayedColor
 * @return {cc._ccColor3B}
 */
getDisplayedColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method updateDisplayedColor
 * @param {cc._ccColor3B} arg0
 */
updateDisplayedColor : function (
_cccolor3b 
)
{
},

/**
 * @method setAlignment
 * @param {cc.CCTextAlignment} arg0
 */
setAlignment : function (
cctextalignment 
)
{
},

/**
 * @method purgeCachedData
 */
purgeCachedData : function (
)
{
},

/**
 * @method create
* @param {char|char|char|char} char
* @param {char|char|char|char} char
* @param {float|float|float} float
* @param {cc.CCTextAlignment|cc.CCTextAlignment} cctextalignment
* @param {cc.CCPoint} ccpoint
* @return {cc.CCLabelBMFont|cc.CCLabelBMFont|cc.CCLabelBMFont|cc.CCLabelBMFont|cc.CCLabelBMFont}
*/
create : function(
char,
char,
float,
cctextalignment,
ccpoint 
)
{
    return cc.CCLabelBMFont;
},

/**
 * @method CCLabelBMFont
 * @constructor
 */
CCLabelBMFont : function (
)
{
},

};

/**
 * @class CCLayer
 */
cc.Layer = {

/**
 * @method unregisterScriptTouchHandler
 */
unregisterScriptTouchHandler : function (
)
{
},

/**
 * @method keyBackClicked
 */
keyBackClicked : function (
)
{
},

/**
 * @method ccTouchBegan
 * @param {cc.CCTouch} arg0
 * @param {cc.CCEvent} arg1
 * @return {bool}
 */
ccTouchBegan : function (
cctouch, 
ccevent 
)
{
    return false;
},

/**
 * @method setAccelerometerInterval
 * @param {double} arg0
 */
setAccelerometerInterval : function (
double 
)
{
},

/**
 * @method ccTouchesCancelled
 * @param {cc.CCSet} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchesCancelled : function (
ccset, 
ccevent 
)
{
},

/**
 * @method unregisterScriptAccelerateHandler
 */
unregisterScriptAccelerateHandler : function (
)
{
},

/**
 * @method ccTouchesMoved
 * @param {cc.CCSet} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchesMoved : function (
ccset, 
ccevent 
)
{
},

/**
 * @method registerScriptAccelerateHandler
 * @param {int} arg0
 */
registerScriptAccelerateHandler : function (
int 
)
{
},

/**
 * @method getTouchMode
 * @return {int}
 */
getTouchMode : function (
)
{
    return 0;
},

/**
 * @method setAccelerometerEnabled
 * @param {bool} arg0
 */
setAccelerometerEnabled : function (
bool 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method isTouchEnabled
 * @return {bool}
 */
isTouchEnabled : function (
)
{
    return false;
},

/**
 * @method getScriptAccelerateHandlerEntry
 * @return {cc.CCScriptHandlerEntry}
 */
getScriptAccelerateHandlerEntry : function (
)
{
    return cc.CCScriptHandlerEntry;
},

/**
 * @method getScriptKeypadHandlerEntry
 * @return {cc.CCScriptHandlerEntry}
 */
getScriptKeypadHandlerEntry : function (
)
{
    return cc.CCScriptHandlerEntry;
},

/**
 * @method ccTouchMoved
 * @param {cc.CCTouch} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchMoved : function (
cctouch, 
ccevent 
)
{
},

/**
 * @method setTouchEnabled
 * @param {bool} arg0
 */
setTouchEnabled : function (
bool 
)
{
},

/**
 * @method unregisterScriptKeypadHandler
 */
unregisterScriptKeypadHandler : function (
)
{
},

/**
 * @method isKeypadEnabled
 * @return {bool}
 */
isKeypadEnabled : function (
)
{
    return false;
},

/**
 * @method ccTouchesEnded
 * @param {cc.CCSet} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchesEnded : function (
ccset, 
ccevent 
)
{
},

/**
 * @method setTouchMode
 * @param {cc.ccTouchesMode} arg0
 */
setTouchMode : function (
cctouchesmode 
)
{
},

/**
 * @method isAccelerometerEnabled
 * @return {bool}
 */
isAccelerometerEnabled : function (
)
{
    return false;
},

/**
 * @method ccTouchEnded
 * @param {cc.CCTouch} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchEnded : function (
cctouch, 
ccevent 
)
{
},

/**
 * @method registerScriptTouchHandler
 * @param {int} arg0
 * @param {bool} arg1
 * @param {int} arg2
 * @param {bool} arg3
 */
registerScriptTouchHandler : function (
int, 
bool, 
int, 
bool 
)
{
},

/**
 * @method ccTouchCancelled
 * @param {cc.CCTouch} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchCancelled : function (
cctouch, 
ccevent 
)
{
},

/**
 * @method getScriptTouchHandlerEntry
 * @return {cc.CCTouchScriptHandlerEntry}
 */
getScriptTouchHandlerEntry : function (
)
{
    return cc.CCTouchScriptHandlerEntry;
},

/**
 * @method ccTouchesBegan
 * @param {cc.CCSet} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchesBegan : function (
ccset, 
ccevent 
)
{
},

/**
 * @method setTouchPriority
 * @param {int} arg0
 */
setTouchPriority : function (
int 
)
{
},

/**
 * @method getTouchPriority
 * @return {int}
 */
getTouchPriority : function (
)
{
    return 0;
},

/**
 * @method setKeypadEnabled
 * @param {bool} arg0
 */
setKeypadEnabled : function (
bool 
)
{
},

/**
 * @method registerWithTouchDispatcher
 */
registerWithTouchDispatcher : function (
)
{
},

/**
 * @method keyMenuClicked
 */
keyMenuClicked : function (
)
{
},

/**
 * @method registerScriptKeypadHandler
 * @param {int} arg0
 */
registerScriptKeypadHandler : function (
int 
)
{
},

/**
 * @method create
 * @return {cc.CCLayer}
 */
create : function (
)
{
    return cc.CCLayer;
},

/**
 * @method CCLayer
 * @constructor
 */
CCLayer : function (
)
{
},

};

/**
 * @class CCLayerRGBA
 */
cc.LayerRGBA = {

/**
 * @method updateDisplayedColor
 * @param {cc._ccColor3B} arg0
 */
updateDisplayedColor : function (
_cccolor3b 
)
{
},

/**
 * @method setColor
 * @param {cc._ccColor3B} arg0
 */
setColor : function (
_cccolor3b 
)
{
},

/**
 * @method isCascadeOpacityEnabled
 * @return {bool}
 */
isCascadeOpacityEnabled : function (
)
{
    return false;
},

/**
 * @method getColor
 * @return {cc._ccColor3B}
 */
getColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method getDisplayedOpacity
 * @return {unsigned char}
 */
getDisplayedOpacity : function (
)
{
    return 0;
},

/**
 * @method setCascadeColorEnabled
 * @param {bool} arg0
 */
setCascadeColorEnabled : function (
bool 
)
{
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method setCascadeOpacityEnabled
 * @param {bool} arg0
 */
setCascadeOpacityEnabled : function (
bool 
)
{
},

/**
 * @method updateDisplayedOpacity
 * @param {unsigned char} arg0
 */
updateDisplayedOpacity : function (
char 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method getOpacity
 * @return {unsigned char}
 */
getOpacity : function (
)
{
    return 0;
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method isCascadeColorEnabled
 * @return {bool}
 */
isCascadeColorEnabled : function (
)
{
    return false;
},

/**
 * @method getDisplayedColor
 * @return {cc._ccColor3B}
 */
getDisplayedColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method create
 * @return {cc.CCLayerRGBA}
 */
create : function (
)
{
    return cc.CCLayerRGBA;
},

/**
 * @method CCLayerRGBA
 * @constructor
 */
CCLayerRGBA : function (
)
{
},

};

/**
 * @class CCLayerColor
 */
cc.LayerColor = {

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method setColor
 * @param {cc._ccColor3B} arg0
 */
setColor : function (
_cccolor3b 
)
{
},

/**
 * @method changeWidthAndHeight
 * @param {float} arg0
 * @param {float} arg1
 */
changeWidthAndHeight : function (
float, 
float 
)
{
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method initWithColor
* @param {cc._ccColor4B|cc._ccColor4B} _cccolor4b
* @param {float} float
* @param {float} float
* @return {bool|bool|bool}
*/
initWithColor : function(
_cccolor4b,
float,
float 
)
{
    return false;
},

/**
 * @method changeWidth
 * @param {float} arg0
 */
changeWidth : function (
float 
)
{
},

/**
 * @method changeHeight
 * @param {float} arg0
 */
changeHeight : function (
float 
)
{
},

/**
 * @method create
* @param {cc._ccColor4B|cc._ccColor4B} _cccolor4b
* @param {float} float
* @param {float} float
* @return {cc.CCLayerColor|cc.CCLayerColor|cc.CCLayerColor}
*/
create : function(
_cccolor4b,
float,
float 
)
{
    return cc.CCLayerColor;
},

/**
 * @method CCLayerColor
 * @constructor
 */
CCLayerColor : function (
)
{
},

};

/**
 * @class CCLayerGradient
 */
cc.LayerGradient = {

/**
 * @method getStartColor
 * @return {cc._ccColor3B}
 */
getStartColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method isCompressedInterpolation
 * @return {bool}
 */
isCompressedInterpolation : function (
)
{
    return false;
},

/**
 * @method getStartOpacity
 * @return {unsigned char}
 */
getStartOpacity : function (
)
{
    return 0;
},

/**
 * @method setVector
 * @param {cc.CCPoint} arg0
 */
setVector : function (
ccpoint 
)
{
},

/**
 * @method setStartOpacity
 * @param {unsigned char} arg0
 */
setStartOpacity : function (
char 
)
{
},

/**
 * @method setCompressedInterpolation
 * @param {bool} arg0
 */
setCompressedInterpolation : function (
bool 
)
{
},

/**
 * @method setEndOpacity
 * @param {unsigned char} arg0
 */
setEndOpacity : function (
char 
)
{
},

/**
 * @method getVector
 * @return {cc.CCPoint}
 */
getVector : function (
)
{
    return cc.CCPoint;
},

/**
 * @method initWithColor
* @param {cc._ccColor4B|cc._ccColor4B} _cccolor4b
* @param {cc._ccColor4B|cc._ccColor4B} _cccolor4b
* @param {cc.CCPoint} ccpoint
* @return {bool|bool|bool}
*/
initWithColor : function(
_cccolor4b,
_cccolor4b,
ccpoint 
)
{
    return false;
},

/**
 * @method setEndColor
 * @param {cc._ccColor3B} arg0
 */
setEndColor : function (
_cccolor3b 
)
{
},

/**
 * @method getEndColor
 * @return {cc._ccColor3B}
 */
getEndColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method getEndOpacity
 * @return {unsigned char}
 */
getEndOpacity : function (
)
{
    return 0;
},

/**
 * @method setStartColor
 * @param {cc._ccColor3B} arg0
 */
setStartColor : function (
_cccolor3b 
)
{
},

/**
 * @method create
* @param {cc._ccColor4B|cc._ccColor4B} _cccolor4b
* @param {cc._ccColor4B|cc._ccColor4B} _cccolor4b
* @param {cc.CCPoint} ccpoint
* @return {cc.CCLayerGradient|cc.CCLayerGradient|cc.CCLayerGradient}
*/
create : function(
_cccolor4b,
_cccolor4b,
ccpoint 
)
{
    return cc.CCLayerGradient;
},

};

/**
 * @class CCLayerMultiplex
 */
cc.LayerMultiplex = {

/**
 * @method initWithArray
 * @param {cc.CCArray} arg0
 * @return {bool}
 */
initWithArray : function (
ccarray 
)
{
    return false;
},

/**
 * @method switchToAndReleaseMe
 * @param {unsigned int} arg0
 */
switchToAndReleaseMe : function (
int 
)
{
},

/**
 * @method addLayer
 * @param {cc.CCLayer} arg0
 */
addLayer : function (
cclayer 
)
{
},

/**
 * @method switchTo
 * @param {unsigned int} arg0
 */
switchTo : function (
int 
)
{
},

/**
 * @method CCLayerMultiplex
 * @constructor
 */
CCLayerMultiplex : function (
)
{
},

};

/**
 * @class CCScene
 */
cc.Scene = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCScene}
 */
create : function (
)
{
    return cc.CCScene;
},

/**
 * @method CCScene
 * @constructor
 */
CCScene : function (
)
{
},

};

/**
 * @class CCTransitionEaseScene
 */
cc.TransitionEaseScene = {

/**
 * @method easeActionWithAction
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCActionInterval}
 */
easeActionWithAction : function (
ccactioninterval 
)
{
    return cc.CCActionInterval;
},

};

/**
 * @class CCTransitionScene
 */
cc.TransitionScene = {

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method finish
 */
finish : function (
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
ccscene 
)
{
    return false;
},

/**
 * @method cleanup
 */
cleanup : function (
)
{
},

/**
 * @method hideOutShowIn
 */
hideOutShowIn : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionScene}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionScene;
},

/**
 * @method CCTransitionScene
 * @constructor
 */
CCTransitionScene : function (
)
{
},

};

/**
 * @class CCTransitionSceneOriented
 */
cc.TransitionSceneOriented = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @param {cc.tOrientation} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
ccscene, 
torientation 
)
{
    return false;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @param {cc.tOrientation} arg2
 * @return {cc.CCTransitionSceneOriented}
 */
create : function (
float, 
ccscene, 
torientation 
)
{
    return cc.CCTransitionSceneOriented;
},

/**
 * @method CCTransitionSceneOriented
 * @constructor
 */
CCTransitionSceneOriented : function (
)
{
},

};

/**
 * @class CCTransitionRotoZoom
 */
cc.TransitionRotoZoom = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionRotoZoom}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionRotoZoom;
},

/**
 * @method CCTransitionRotoZoom
 * @constructor
 */
CCTransitionRotoZoom : function (
)
{
},

};

/**
 * @class CCTransitionJumpZoom
 */
cc.TransitionJumpZoom = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionJumpZoom}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionJumpZoom;
},

/**
 * @method CCTransitionJumpZoom
 * @constructor
 */
CCTransitionJumpZoom : function (
)
{
},

};

/**
 * @class CCTransitionMoveInL
 */
cc.TransitionMoveInL = {

/**
 * @method action
 * @return {cc.CCActionInterval}
 */
action : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method easeActionWithAction
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCActionInterval}
 */
easeActionWithAction : function (
ccactioninterval 
)
{
    return cc.CCActionInterval;
},

/**
 * @method initScenes
 */
initScenes : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionMoveInL}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionMoveInL;
},

/**
 * @method CCTransitionMoveInL
 * @constructor
 */
CCTransitionMoveInL : function (
)
{
},

};

/**
 * @class CCTransitionMoveInR
 */
cc.TransitionMoveInR = {

/**
 * @method initScenes
 */
initScenes : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionMoveInR}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionMoveInR;
},

/**
 * @method CCTransitionMoveInR
 * @constructor
 */
CCTransitionMoveInR : function (
)
{
},

};

/**
 * @class CCTransitionMoveInT
 */
cc.TransitionMoveInT = {

/**
 * @method initScenes
 */
initScenes : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionMoveInT}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionMoveInT;
},

/**
 * @method CCTransitionMoveInT
 * @constructor
 */
CCTransitionMoveInT : function (
)
{
},

};

/**
 * @class CCTransitionMoveInB
 */
cc.TransitionMoveInB = {

/**
 * @method initScenes
 */
initScenes : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionMoveInB}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionMoveInB;
},

/**
 * @method CCTransitionMoveInB
 * @constructor
 */
CCTransitionMoveInB : function (
)
{
},

};

/**
 * @class CCTransitionSlideInL
 */
cc.TransitionSlideInL = {

/**
 * @method action
 * @return {cc.CCActionInterval}
 */
action : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method easeActionWithAction
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCActionInterval}
 */
easeActionWithAction : function (
ccactioninterval 
)
{
    return cc.CCActionInterval;
},

/**
 * @method initScenes
 */
initScenes : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionSlideInL}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionSlideInL;
},

/**
 * @method CCTransitionSlideInL
 * @constructor
 */
CCTransitionSlideInL : function (
)
{
},

};

/**
 * @class CCTransitionSlideInR
 */
cc.TransitionSlideInR = {

/**
 * @method action
 * @return {cc.CCActionInterval}
 */
action : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initScenes
 */
initScenes : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionSlideInR}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionSlideInR;
},

/**
 * @method CCTransitionSlideInR
 * @constructor
 */
CCTransitionSlideInR : function (
)
{
},

};

/**
 * @class CCTransitionSlideInB
 */
cc.TransitionSlideInB = {

/**
 * @method action
 * @return {cc.CCActionInterval}
 */
action : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initScenes
 */
initScenes : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionSlideInB}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionSlideInB;
},

/**
 * @method CCTransitionSlideInB
 * @constructor
 */
CCTransitionSlideInB : function (
)
{
},

};

/**
 * @class CCTransitionSlideInT
 */
cc.TransitionSlideInT = {

/**
 * @method action
 * @return {cc.CCActionInterval}
 */
action : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method initScenes
 */
initScenes : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionSlideInT}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionSlideInT;
},

/**
 * @method CCTransitionSlideInT
 * @constructor
 */
CCTransitionSlideInT : function (
)
{
},

};

/**
 * @class CCTransitionShrinkGrow
 */
cc.TransitionShrinkGrow = {

/**
 * @method easeActionWithAction
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCActionInterval}
 */
easeActionWithAction : function (
ccactioninterval 
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionShrinkGrow}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionShrinkGrow;
},

/**
 * @method CCTransitionShrinkGrow
 * @constructor
 */
CCTransitionShrinkGrow : function (
)
{
},

};

/**
 * @class CCTransitionFlipX
 */
cc.TransitionFlipX = {

/**
 * @method create
* @param {float|float} float
* @param {cc.CCScene|cc.CCScene} ccscene
* @param {cc.tOrientation} torientation
* @return {cc.CCTransitionFlipX|cc.CCTransitionFlipX}
*/
create : function(
float,
ccscene,
torientation 
)
{
    return cc.CCTransitionFlipX;
},

/**
 * @method CCTransitionFlipX
 * @constructor
 */
CCTransitionFlipX : function (
)
{
},

};

/**
 * @class CCTransitionFlipY
 */
cc.TransitionFlipY = {

/**
 * @method create
* @param {float|float} float
* @param {cc.CCScene|cc.CCScene} ccscene
* @param {cc.tOrientation} torientation
* @return {cc.CCTransitionFlipY|cc.CCTransitionFlipY}
*/
create : function(
float,
ccscene,
torientation 
)
{
    return cc.CCTransitionFlipY;
},

/**
 * @method CCTransitionFlipY
 * @constructor
 */
CCTransitionFlipY : function (
)
{
},

};

/**
 * @class CCTransitionFlipAngular
 */
cc.TransitionFlipAngular = {

/**
 * @method create
* @param {float|float} float
* @param {cc.CCScene|cc.CCScene} ccscene
* @param {cc.tOrientation} torientation
* @return {cc.CCTransitionFlipAngular|cc.CCTransitionFlipAngular}
*/
create : function(
float,
ccscene,
torientation 
)
{
    return cc.CCTransitionFlipAngular;
},

/**
 * @method CCTransitionFlipAngular
 * @constructor
 */
CCTransitionFlipAngular : function (
)
{
},

};

/**
 * @class CCTransitionZoomFlipX
 */
cc.TransitionZoomFlipX = {

/**
 * @method create
* @param {float|float} float
* @param {cc.CCScene|cc.CCScene} ccscene
* @param {cc.tOrientation} torientation
* @return {cc.CCTransitionZoomFlipX|cc.CCTransitionZoomFlipX}
*/
create : function(
float,
ccscene,
torientation 
)
{
    return cc.CCTransitionZoomFlipX;
},

/**
 * @method CCTransitionZoomFlipX
 * @constructor
 */
CCTransitionZoomFlipX : function (
)
{
},

};

/**
 * @class CCTransitionZoomFlipY
 */
cc.TransitionZoomFlipY = {

/**
 * @method create
* @param {float|float} float
* @param {cc.CCScene|cc.CCScene} ccscene
* @param {cc.tOrientation} torientation
* @return {cc.CCTransitionZoomFlipY|cc.CCTransitionZoomFlipY}
*/
create : function(
float,
ccscene,
torientation 
)
{
    return cc.CCTransitionZoomFlipY;
},

/**
 * @method CCTransitionZoomFlipY
 * @constructor
 */
CCTransitionZoomFlipY : function (
)
{
},

};

/**
 * @class CCTransitionZoomFlipAngular
 */
cc.TransitionZoomFlipAngular = {

/**
 * @method create
* @param {float|float} float
* @param {cc.CCScene|cc.CCScene} ccscene
* @param {cc.tOrientation} torientation
* @return {cc.CCTransitionZoomFlipAngular|cc.CCTransitionZoomFlipAngular}
*/
create : function(
float,
ccscene,
torientation 
)
{
    return cc.CCTransitionZoomFlipAngular;
},

/**
 * @method CCTransitionZoomFlipAngular
 * @constructor
 */
CCTransitionZoomFlipAngular : function (
)
{
},

};

/**
 * @class CCTransitionFade
 */
cc.TransitionFade = {

/**
 * @method initWithDuration
* @param {float|float} float
* @param {cc.CCScene|cc.CCScene} ccscene
* @param {cc._ccColor3B} _cccolor3b
* @return {bool|bool}
*/
initWithDuration : function(
float,
ccscene,
_cccolor3b 
)
{
    return false;
},

/**
 * @method create
* @param {float|float} float
* @param {cc.CCScene|cc.CCScene} ccscene
* @param {cc._ccColor3B} _cccolor3b
* @return {cc.CCTransitionFade|cc.CCTransitionFade}
*/
create : function(
float,
ccscene,
_cccolor3b 
)
{
    return cc.CCTransitionFade;
},

/**
 * @method CCTransitionFade
 * @constructor
 */
CCTransitionFade : function (
)
{
},

};

/**
 * @class CCTransitionCrossFade
 */
cc.TransitionCrossFade = {

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionCrossFade}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionCrossFade;
},

/**
 * @method CCTransitionCrossFade
 * @constructor
 */
CCTransitionCrossFade : function (
)
{
},

};

/**
 * @class CCTransitionTurnOffTiles
 */
cc.TransitionTurnOffTiles = {

/**
 * @method easeActionWithAction
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCActionInterval}
 */
easeActionWithAction : function (
ccactioninterval 
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionTurnOffTiles}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionTurnOffTiles;
},

/**
 * @method CCTransitionTurnOffTiles
 * @constructor
 */
CCTransitionTurnOffTiles : function (
)
{
},

};

/**
 * @class CCTransitionSplitCols
 */
cc.TransitionSplitCols = {

/**
 * @method action
 * @return {cc.CCActionInterval}
 */
action : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method easeActionWithAction
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCActionInterval}
 */
easeActionWithAction : function (
ccactioninterval 
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionSplitCols}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionSplitCols;
},

/**
 * @method CCTransitionSplitCols
 * @constructor
 */
CCTransitionSplitCols : function (
)
{
},

};

/**
 * @class CCTransitionSplitRows
 */
cc.TransitionSplitRows = {

/**
 * @method action
 * @return {cc.CCActionInterval}
 */
action : function (
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionSplitRows}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionSplitRows;
},

/**
 * @method CCTransitionSplitRows
 * @constructor
 */
CCTransitionSplitRows : function (
)
{
},

};

/**
 * @class CCTransitionFadeTR
 */
cc.TransitionFadeTR = {

/**
 * @method easeActionWithAction
 * @param {cc.CCActionInterval} arg0
 * @return {cc.CCActionInterval}
 */
easeActionWithAction : function (
ccactioninterval 
)
{
    return cc.CCActionInterval;
},

/**
 * @method actionWithSize
 * @param {cc.CCSize} arg0
 * @return {cc.CCActionInterval}
 */
actionWithSize : function (
ccsize 
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionFadeTR}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionFadeTR;
},

/**
 * @method CCTransitionFadeTR
 * @constructor
 */
CCTransitionFadeTR : function (
)
{
},

};

/**
 * @class CCTransitionFadeBL
 */
cc.TransitionFadeBL = {

/**
 * @method actionWithSize
 * @param {cc.CCSize} arg0
 * @return {cc.CCActionInterval}
 */
actionWithSize : function (
ccsize 
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionFadeBL}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionFadeBL;
},

/**
 * @method CCTransitionFadeBL
 * @constructor
 */
CCTransitionFadeBL : function (
)
{
},

};

/**
 * @class CCTransitionFadeUp
 */
cc.TransitionFadeUp = {

/**
 * @method actionWithSize
 * @param {cc.CCSize} arg0
 * @return {cc.CCActionInterval}
 */
actionWithSize : function (
ccsize 
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionFadeUp}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionFadeUp;
},

/**
 * @method CCTransitionFadeUp
 * @constructor
 */
CCTransitionFadeUp : function (
)
{
},

};

/**
 * @class CCTransitionFadeDown
 */
cc.TransitionFadeDown = {

/**
 * @method actionWithSize
 * @param {cc.CCSize} arg0
 * @return {cc.CCActionInterval}
 */
actionWithSize : function (
ccsize 
)
{
    return cc.CCActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionFadeDown}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionFadeDown;
},

/**
 * @method CCTransitionFadeDown
 * @constructor
 */
CCTransitionFadeDown : function (
)
{
},

};

/**
 * @class CCTransitionPageTurn
 */
cc.TransitionPageTurn = {

/**
 * @method actionWithSize
 * @param {cc.CCSize} arg0
 * @return {cc.CCActionInterval}
 */
actionWithSize : function (
ccsize 
)
{
    return cc.CCActionInterval;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @param {bool} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
ccscene, 
bool 
)
{
    return false;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @param {bool} arg2
 * @return {cc.CCTransitionPageTurn}
 */
create : function (
float, 
ccscene, 
bool 
)
{
    return cc.CCTransitionPageTurn;
},

/**
 * @method CCTransitionPageTurn
 * @constructor
 */
CCTransitionPageTurn : function (
)
{
},

};

/**
 * @class CCTransitionProgress
 */
cc.TransitionProgress = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionProgress}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionProgress;
},

/**
 * @method CCTransitionProgress
 * @constructor
 */
CCTransitionProgress : function (
)
{
},

};

/**
 * @class CCTransitionProgressRadialCCW
 */
cc.TransitionProgressRadialCCW = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionProgressRadialCCW}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionProgressRadialCCW;
},

};

/**
 * @class CCTransitionProgressRadialCW
 */
cc.TransitionProgressRadialCW = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionProgressRadialCW}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionProgressRadialCW;
},

};

/**
 * @class CCTransitionProgressHorizontal
 */
cc.TransitionProgressHorizontal = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionProgressHorizontal}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionProgressHorizontal;
},

};

/**
 * @class CCTransitionProgressVertical
 */
cc.TransitionProgressVertical = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionProgressVertical}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionProgressVertical;
},

};

/**
 * @class CCTransitionProgressInOut
 */
cc.TransitionProgressInOut = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionProgressInOut}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionProgressInOut;
},

};

/**
 * @class CCTransitionProgressOutIn
 */
cc.TransitionProgressOutIn = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.CCScene} arg1
 * @return {cc.CCTransitionProgressOutIn}
 */
create : function (
float, 
ccscene 
)
{
    return cc.CCTransitionProgressOutIn;
},

};

/**
 * @class CCMenuItem
 */
cc.MenuItem = {

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method activate
 */
activate : function (
)
{
},

/**
 * @method unregisterScriptTapHandler
 */
unregisterScriptTapHandler : function (
)
{
},

/**
 * @method isEnabled
 * @return {bool}
 */
isEnabled : function (
)
{
    return false;
},

/**
 * @method selected
 */
selected : function (
)
{
},

/**
 * @method getScriptTapHandler
 * @return {int}
 */
getScriptTapHandler : function (
)
{
    return 0;
},

/**
 * @method isSelected
 * @return {bool}
 */
isSelected : function (
)
{
    return false;
},

/**
 * @method registerScriptTapHandler
 * @param {int} arg0
 */
registerScriptTapHandler : function (
int 
)
{
},

/**
 * @method unselected
 */
unselected : function (
)
{
},

/**
 * @method rect
 * @return {cc.CCRect}
 */
rect : function (
)
{
    return cc.CCRect;
},

/**
 * @method CCMenuItem
 * @constructor
 */
CCMenuItem : function (
)
{
},

};

/**
 * @class CCMenuItemLabel
 */
cc.MenuItemLabel = {

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method setLabel
 * @param {cc.CCNode} arg0
 */
setLabel : function (
ccnode 
)
{
},

/**
 * @method activate
 */
activate : function (
)
{
},

/**
 * @method getDisabledColor
 * @return {cc._ccColor3B}
 */
getDisabledColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method setString
 * @param {char} arg0
 */
setString : function (
char 
)
{
},

/**
 * @method selected
 */
selected : function (
)
{
},

/**
 * @method setDisabledColor
 * @param {cc._ccColor3B} arg0
 */
setDisabledColor : function (
_cccolor3b 
)
{
},

/**
 * @method getLabel
 * @return {cc.CCNode}
 */
getLabel : function (
)
{
    return cc.CCNode;
},

/**
 * @method unselected
 */
unselected : function (
)
{
},

/**
 * @method CCMenuItemLabel
 * @constructor
 */
CCMenuItemLabel : function (
)
{
},

};

/**
 * @class CCMenuItemAtlasFont
 */
cc.MenuItemAtlasFont = {

/**
 * @method CCMenuItemAtlasFont
 * @constructor
 */
CCMenuItemAtlasFont : function (
)
{
},

};

/**
 * @class CCMenuItemFont
 */
cc.MenuItemFont = {

/**
 * @method setFontNameObj
 * @param {char} arg0
 */
setFontNameObj : function (
char 
)
{
},

/**
 * @method fontNameObj
 * @return {char}
 */
fontNameObj : function (
)
{
    return 0;
},

/**
 * @method setFontSizeObj
 * @param {unsigned int} arg0
 */
setFontSizeObj : function (
int 
)
{
},

/**
 * @method fontSizeObj
 * @return {unsigned int}
 */
fontSizeObj : function (
)
{
    return 0;
},

/**
 * @method setFontName
 * @param {char} arg0
 */
setFontName : function (
char 
)
{
},

/**
 * @method fontName
 * @return {char}
 */
fontName : function (
)
{
    return 0;
},

/**
 * @method fontSize
 * @return {unsigned int}
 */
fontSize : function (
)
{
    return 0;
},

/**
 * @method setFontSize
 * @param {unsigned int} arg0
 */
setFontSize : function (
int 
)
{
},

/**
 * @method CCMenuItemFont
 * @constructor
 */
CCMenuItemFont : function (
)
{
},

};

/**
 * @class CCMenuItemSprite
 */
cc.MenuItemSprite = {

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method selected
 */
selected : function (
)
{
},

/**
 * @method setNormalImage
 * @param {cc.CCNode} arg0
 */
setNormalImage : function (
ccnode 
)
{
},

/**
 * @method setDisabledImage
 * @param {cc.CCNode} arg0
 */
setDisabledImage : function (
ccnode 
)
{
},

/**
 * @method setSelectedImage
 * @param {cc.CCNode} arg0
 */
setSelectedImage : function (
ccnode 
)
{
},

/**
 * @method getDisabledImage
 * @return {cc.CCNode}
 */
getDisabledImage : function (
)
{
    return cc.CCNode;
},

/**
 * @method getSelectedImage
 * @return {cc.CCNode}
 */
getSelectedImage : function (
)
{
    return cc.CCNode;
},

/**
 * @method getNormalImage
 * @return {cc.CCNode}
 */
getNormalImage : function (
)
{
    return cc.CCNode;
},

/**
 * @method unselected
 */
unselected : function (
)
{
},

/**
 * @method CCMenuItemSprite
 * @constructor
 */
CCMenuItemSprite : function (
)
{
},

};

/**
 * @class CCMenuItemImage
 */
cc.MenuItemImage = {

/**
 * @method setDisabledSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 */
setDisabledSpriteFrame : function (
ccspriteframe 
)
{
},

/**
 * @method setSelectedSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 */
setSelectedSpriteFrame : function (
ccspriteframe 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setNormalSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 */
setNormalSpriteFrame : function (
ccspriteframe 
)
{
},

/**
 * @method CCMenuItemImage
 * @constructor
 */
CCMenuItemImage : function (
)
{
},

};

/**
 * @class CCMenuItemToggle
 */
cc.MenuItemToggle = {

/**
 * @method setSubItems
 * @param {cc.CCArray} arg0
 */
setSubItems : function (
ccarray 
)
{
},

/**
 * @method initWithItem
 * @param {cc.CCMenuItem} arg0
 * @return {bool}
 */
initWithItem : function (
ccmenuitem 
)
{
    return false;
},

/**
 * @method setSelectedIndex
 * @param {unsigned int} arg0
 */
setSelectedIndex : function (
int 
)
{
},

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method getSelectedIndex
 * @return {unsigned int}
 */
getSelectedIndex : function (
)
{
    return 0;
},

/**
 * @method addSubItem
 * @param {cc.CCMenuItem} arg0
 */
addSubItem : function (
ccmenuitem 
)
{
},

/**
 * @method selected
 */
selected : function (
)
{
},

/**
 * @method activate
 */
activate : function (
)
{
},

/**
 * @method unselected
 */
unselected : function (
)
{
},

/**
 * @method selectedItem
 * @return {cc.CCMenuItem}
 */
selectedItem : function (
)
{
    return cc.CCMenuItem;
},

/**
 * @method CCMenuItemToggle
 * @constructor
 */
CCMenuItemToggle : function (
)
{
},

};

/**
 * @class CCMenu
 */
cc.Menu = {

/**
 * @method initWithArray
 * @param {cc.CCArray} arg0
 * @return {bool}
 */
initWithArray : function (
ccarray 
)
{
    return false;
},

/**
 * @method addChild
* @param {cc.CCNode|cc.CCNode|cc.CCNode} ccnode
* @param {int|int} int
* @param {int} int
*/
addChild : function(
ccnode,
int,
int 
)
{
},

/**
 * @method alignItemsVertically
 */
alignItemsVertically : function (
)
{
},

/**
 * @method ccTouchBegan
 * @param {cc.CCTouch} arg0
 * @param {cc.CCEvent} arg1
 * @return {bool}
 */
ccTouchBegan : function (
cctouch, 
ccevent 
)
{
    return false;
},

/**
 * @method ccTouchEnded
 * @param {cc.CCTouch} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchEnded : function (
cctouch, 
ccevent 
)
{
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method isEnabled
 * @return {bool}
 */
isEnabled : function (
)
{
    return false;
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method setHandlerPriority
 * @param {int} arg0
 */
setHandlerPriority : function (
int 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method alignItemsHorizontallyWithPadding
 * @param {float} arg0
 */
alignItemsHorizontallyWithPadding : function (
float 
)
{
},

/**
 * @method alignItemsHorizontally
 */
alignItemsHorizontally : function (
)
{
},

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method ccTouchMoved
 * @param {cc.CCTouch} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchMoved : function (
cctouch, 
ccevent 
)
{
},

/**
 * @method ccTouchCancelled
 * @param {cc.CCTouch} arg0
 * @param {cc.CCEvent} arg1
 */
ccTouchCancelled : function (
cctouch, 
ccevent 
)
{
},

/**
 * @method removeChild
 * @param {cc.CCNode} arg0
 * @param {bool} arg1
 */
removeChild : function (
ccnode, 
bool 
)
{
},

/**
 * @method alignItemsVerticallyWithPadding
 * @param {float} arg0
 */
alignItemsVerticallyWithPadding : function (
float 
)
{
},

/**
 * @method registerWithTouchDispatcher
 */
registerWithTouchDispatcher : function (
)
{
},

/**
 * @method CCMenu
 * @constructor
 */
CCMenu : function (
)
{
},

};

/**
 * @class CCClippingNode
 */
cc.ClippingNode = {

/**
 * @method setInverted
 * @param {bool} arg0
 */
setInverted : function (
bool 
)
{
},

/**
 * @method visit
 */
visit : function (
)
{
},

/**
 * @method setStencil
 * @param {cc.CCNode} arg0
 */
setStencil : function (
ccnode 
)
{
},

/**
 * @method getAlphaThreshold
 * @return {float}
 */
getAlphaThreshold : function (
)
{
    return 0;
},

/**
 * @method init
* @param {cc.CCNode} ccnode
* @return {bool|bool}
*/
init : function(
ccnode 
)
{
    return false;
},

/**
 * @method getStencil
 * @return {cc.CCNode}
 */
getStencil : function (
)
{
    return cc.CCNode;
},

/**
 * @method setAlphaThreshold
 * @param {float} arg0
 */
setAlphaThreshold : function (
float 
)
{
},

/**
 * @method isInverted
 * @return {bool}
 */
isInverted : function (
)
{
    return false;
},

/**
 * @method create
* @param {cc.CCNode} ccnode
* @return {cc.CCClippingNode|cc.CCClippingNode}
*/
create : function(
ccnode 
)
{
    return cc.CCClippingNode;
},

};

/**
 * @class CCMotionStreak
 */
cc.MotionStreak = {

/**
 * @method reset
 */
reset : function (
)
{
},

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method setTexture
 * @param {cc.CCTexture2D} arg0
 */
setTexture : function (
cctexture2d 
)
{
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method getTexture
 * @return {cc.CCTexture2D}
 */
getTexture : function (
)
{
    return cc.CCTexture2D;
},

/**
 * @method tintWithColor
 * @param {cc._ccColor3B} arg0
 */
tintWithColor : function (
_cccolor3b 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method initWithFade
* @param {float|float} float
* @param {float|float} float
* @param {float|float} float
* @param {cc._ccColor3B|cc._ccColor3B} _cccolor3b
* @param {cc.CCTexture2D|char} cctexture2d
* @return {bool|bool}
*/
initWithFade : function(
float,
float,
float,
_cccolor3b,
char 
)
{
    return false;
},

/**
 * @method isFastMode
 * @return {bool}
 */
isFastMode : function (
)
{
    return false;
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method getOpacity
 * @return {unsigned char}
 */
getOpacity : function (
)
{
    return 0;
},

/**
 * @method setPosition
 * @param {cc.CCPoint} arg0
 */
setPosition : function (
ccpoint 
)
{
},

/**
 * @method setStartingPositionInitialized
 * @param {bool} arg0
 */
setStartingPositionInitialized : function (
bool 
)
{
},

/**
 * @method setFastMode
 * @param {bool} arg0
 */
setFastMode : function (
bool 
)
{
},

/**
 * @method isStartingPositionInitialized
 * @return {bool}
 */
isStartingPositionInitialized : function (
)
{
    return false;
},

/**
 * @method create
* @param {float|float} float
* @param {float|float} float
* @param {float|float} float
* @param {cc._ccColor3B|cc._ccColor3B} _cccolor3b
* @param {cc.CCTexture2D|char} cctexture2d
* @return {cc.CCMotionStreak|cc.CCMotionStreak}
*/
create : function(
float,
float,
float,
_cccolor3b,
char 
)
{
    return cc.CCMotionStreak;
},

/**
 * @method CCMotionStreak
 * @constructor
 */
CCMotionStreak : function (
)
{
},

};

/**
 * @class CCProgressTimer
 */
cc.ProgressTimer = {

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method isReverseDirection
 * @return {bool}
 */
isReverseDirection : function (
)
{
    return false;
},

/**
 * @method setBarChangeRate
 * @param {cc.CCPoint} arg0
 */
setBarChangeRate : function (
ccpoint 
)
{
},

/**
 * @method setColor
 * @param {cc._ccColor3B} arg0
 */
setColor : function (
_cccolor3b 
)
{
},

/**
 * @method getBarChangeRate
 * @return {cc.CCPoint}
 */
getBarChangeRate : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getPercentage
 * @return {float}
 */
getPercentage : function (
)
{
    return 0;
},

/**
 * @method setSprite
 * @param {cc.CCSprite} arg0
 */
setSprite : function (
ccsprite 
)
{
},

/**
 * @method getType
 * @return {cc.CCProgressTimerType}
 */
getType : function (
)
{
    return 0;
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method getSprite
 * @return {cc.CCSprite}
 */
getSprite : function (
)
{
    return cc.CCSprite;
},

/**
 * @method setMidpoint
 * @param {cc.CCPoint} arg0
 */
setMidpoint : function (
ccpoint 
)
{
},

/**
 * @method getMidpoint
 * @return {cc.CCPoint}
 */
getMidpoint : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getColor
 * @return {cc._ccColor3B}
 */
getColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method getOpacity
 * @return {unsigned char}
 */
getOpacity : function (
)
{
    return 0;
},

/**
 * @method setReverseDirection
* @param {bool|bool} bool
*/
setReverseDirection : function(
bool 
)
{
},

/**
 * @method initWithSprite
 * @param {cc.CCSprite} arg0
 * @return {bool}
 */
initWithSprite : function (
ccsprite 
)
{
    return false;
},

/**
 * @method setPercentage
 * @param {float} arg0
 */
setPercentage : function (
float 
)
{
},

/**
 * @method setType
 * @param {cc.CCProgressTimerType} arg0
 */
setType : function (
ccprogresstimertype 
)
{
},

/**
 * @method create
 * @param {cc.CCSprite} arg0
 * @return {cc.CCProgressTimer}
 */
create : function (
ccsprite 
)
{
    return cc.CCProgressTimer;
},

/**
 * @method CCProgressTimer
 * @constructor
 */
CCProgressTimer : function (
)
{
},

};

/**
 * @class CCRenderTexture
 */
cc.RenderTexture = {

/**
 * @method clearStencil
 * @param {int} arg0
 */
clearStencil : function (
int 
)
{
},

/**
 * @method begin
 */
begin : function (
)
{
},

/**
 * @method listenToForeground
 * @param {cc.CCObject} arg0
 */
listenToForeground : function (
ccobject 
)
{
},

/**
 * @method getClearDepth
 * @return {float}
 */
getClearDepth : function (
)
{
    return 0;
},

/**
 * @method getClearStencil
 * @return {int}
 */
getClearStencil : function (
)
{
    return 0;
},

/**
 * @method end
 */
end : function (
)
{
},

/**
 * @method setClearStencil
 * @param {float} arg0
 */
setClearStencil : function (
float 
)
{
},

/**
 * @method initWithWidthAndHeight
* @param {int|int} int
* @param {int|int} int
* @param {cc.CCTexture2DPixelFormat|cc.CCTexture2DPixelFormat} cctexture2dpixelformat
* @param {unsigned int} int
* @return {bool|bool}
*/
initWithWidthAndHeight : function(
int,
int,
cctexture2dpixelformat,
int 
)
{
    return false;
},

/**
 * @method visit
 */
visit : function (
)
{
},

/**
 * @method getSprite
 * @return {cc.CCSprite}
 */
getSprite : function (
)
{
    return cc.CCSprite;
},

/**
 * @method isAutoDraw
 * @return {bool}
 */
isAutoDraw : function (
)
{
    return false;
},

/**
 * @method setClearFlags
 * @param {unsigned int} arg0
 */
setClearFlags : function (
int 
)
{
},

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method saveToFile
* @param {char|char} char
* @param {cc.eImageFormat} eimageformat
* @return {bool|bool}
*/
saveToFile : function(
char,
eimageformat 
)
{
    return false;
},

/**
 * @method setAutoDraw
 * @param {bool} arg0
 */
setAutoDraw : function (
bool 
)
{
},

/**
 * @method setClearColor
 * @param {cc._ccColor4F} arg0
 */
setClearColor : function (
_cccolor4f 
)
{
},

/**
 * @method endToLua
 */
endToLua : function (
)
{
},

/**
 * @method beginWithClear
* @param {float|float|float} float
* @param {float|float|float} float
* @param {float|float|float} float
* @param {float|float|float} float
* @param {float|float} float
* @param {int} int
*/
beginWithClear : function(
float,
float,
float,
float,
float,
int 
)
{
},

/**
 * @method clearDepth
 * @param {float} arg0
 */
clearDepth : function (
float 
)
{
},

/**
 * @method getClearColor
 * @return {cc._ccColor4F}
 */
getClearColor : function (
)
{
    return cc._ccColor4F;
},

/**
 * @method listenToBackground
 * @param {cc.CCObject} arg0
 */
listenToBackground : function (
ccobject 
)
{
},

/**
 * @method clear
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {float} arg3
 */
clear : function (
float, 
float, 
float, 
float 
)
{
},

/**
 * @method getClearFlags
 * @return {unsigned int}
 */
getClearFlags : function (
)
{
    return 0;
},

/**
 * @method newCCImage
 * @return {cc.CCImage}
 */
newCCImage : function (
)
{
    return cc.CCImage;
},

/**
 * @method setClearDepth
 * @param {float} arg0
 */
setClearDepth : function (
float 
)
{
},

/**
 * @method setSprite
 * @param {cc.CCSprite} arg0
 */
setSprite : function (
ccsprite 
)
{
},

/**
 * @method create
* @param {int|int|int} int
* @param {int|int|int} int
* @param {cc.CCTexture2DPixelFormat|cc.CCTexture2DPixelFormat} cctexture2dpixelformat
* @param {unsigned int} int
* @return {cc.CCRenderTexture|cc.CCRenderTexture|cc.CCRenderTexture}
*/
create : function(
int,
int,
cctexture2dpixelformat,
int 
)
{
    return cc.CCRenderTexture;
},

/**
 * @method CCRenderTexture
 * @constructor
 */
CCRenderTexture : function (
)
{
},

};

/**
 * @class CCParticleBatchNode
 */
cc.ParticleBatchNode = {

/**
 * @method removeChildAtIndex
 * @param {unsigned int} arg0
 * @param {bool} arg1
 */
removeChildAtIndex : function (
int, 
bool 
)
{
},

/**
 * @method addChild
* @param {cc.CCNode|cc.CCNode|cc.CCNode} ccnode
* @param {int|int} int
* @param {int} int
*/
addChild : function(
ccnode,
int,
int 
)
{
},

/**
 * @method draw
 */
draw : function (
)
{
},

/**
 * @method setTexture
 * @param {cc.CCTexture2D} arg0
 */
setTexture : function (
cctexture2d 
)
{
},

/**
 * @method initWithFile
 * @param {char} arg0
 * @param {unsigned int} arg1
 * @return {bool}
 */
initWithFile : function (
char, 
int 
)
{
    return false;
},

/**
 * @method disableParticle
 * @param {unsigned int} arg0
 */
disableParticle : function (
int 
)
{
},

/**
 * @method getTexture
 * @return {cc.CCTexture2D}
 */
getTexture : function (
)
{
    return cc.CCTexture2D;
},

/**
 * @method visit
 */
visit : function (
)
{
},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool} arg0
 */
removeAllChildrenWithCleanup : function (
bool 
)
{
},

/**
 * @method getTextureAtlas
 * @return {cc.CCTextureAtlas}
 */
getTextureAtlas : function (
)
{
    return cc.CCTextureAtlas;
},

/**
 * @method removeChild
 * @param {cc.CCNode} arg0
 * @param {bool} arg1
 */
removeChild : function (
ccnode, 
bool 
)
{
},

/**
 * @method insertChild
 * @param {cc.CCParticleSystem} arg0
 * @param {unsigned int} arg1
 */
insertChild : function (
ccparticlesystem, 
int 
)
{
},

/**
 * @method initWithTexture
 * @param {cc.CCTexture2D} arg0
 * @param {unsigned int} arg1
 * @return {bool}
 */
initWithTexture : function (
cctexture2d, 
int 
)
{
    return false;
},

/**
 * @method reorderChild
 * @param {cc.CCNode} arg0
 * @param {int} arg1
 */
reorderChild : function (
ccnode, 
int 
)
{
},

/**
 * @method setTextureAtlas
 * @param {cc.CCTextureAtlas} arg0
 */
setTextureAtlas : function (
cctextureatlas 
)
{
},

/**
 * @method create
 * @param {char} arg0
 * @param {unsigned int} arg1
 * @return {cc.CCParticleBatchNode}
 */
create : function (
char, 
int 
)
{
    return cc.CCParticleBatchNode;
},

/**
 * @method createWithTexture
 * @param {cc.CCTexture2D} arg0
 * @param {unsigned int} arg1
 * @return {cc.CCParticleBatchNode}
 */
createWithTexture : function (
cctexture2d, 
int 
)
{
    return cc.CCParticleBatchNode;
},

/**
 * @method CCParticleBatchNode
 * @constructor
 */
CCParticleBatchNode : function (
)
{
},

};

/**
 * @class CCParticleSystem
 */
cc.ParticleSystem = {

/**
 * @method getStartSizeVar
 * @return {float}
 */
getStartSizeVar : function (
)
{
    return 0;
},

/**
 * @method getTexture
 * @return {cc.CCTexture2D}
 */
getTexture : function (
)
{
    return cc.CCTexture2D;
},

/**
 * @method isFull
 * @return {bool}
 */
isFull : function (
)
{
    return false;
},

/**
 * @method getBatchNode
 * @return {cc.CCParticleBatchNode}
 */
getBatchNode : function (
)
{
    return cc.CCParticleBatchNode;
},

/**
 * @method getStartColor
 * @return {cc._ccColor4F}
 */
getStartColor : function (
)
{
    return cc._ccColor4F;
},

/**
 * @method getPositionType
 * @return {cc.tCCPositionType}
 */
getPositionType : function (
)
{
    return 0;
},

/**
 * @method setPosVar
 * @param {cc.CCPoint} arg0
 */
setPosVar : function (
ccpoint 
)
{
},

/**
 * @method getEndSpin
 * @return {float}
 */
getEndSpin : function (
)
{
    return 0;
},

/**
 * @method setRotatePerSecondVar
 * @param {float} arg0
 */
setRotatePerSecondVar : function (
float 
)
{
},

/**
 * @method getStartSpinVar
 * @return {float}
 */
getStartSpinVar : function (
)
{
    return 0;
},

/**
 * @method getEndSpinVar
 * @return {float}
 */
getEndSpinVar : function (
)
{
    return 0;
},

/**
 * @method stopSystem
 */
stopSystem : function (
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method getEndSizeVar
 * @return {float}
 */
getEndSizeVar : function (
)
{
    return 0;
},

/**
 * @method setRotation
 * @param {float} arg0
 */
setRotation : function (
float 
)
{
},

/**
 * @method setTangentialAccel
 * @param {float} arg0
 */
setTangentialAccel : function (
float 
)
{
},

/**
 * @method setScaleY
 * @param {float} arg0
 */
setScaleY : function (
float 
)
{
},

/**
 * @method setScaleX
 * @param {float} arg0
 */
setScaleX : function (
float 
)
{
},

/**
 * @method getRadialAccel
 * @return {float}
 */
getRadialAccel : function (
)
{
    return 0;
},

/**
 * @method setStartRadius
 * @param {float} arg0
 */
setStartRadius : function (
float 
)
{
},

/**
 * @method setRotatePerSecond
 * @param {float} arg0
 */
setRotatePerSecond : function (
float 
)
{
},

/**
 * @method setEndSize
 * @param {float} arg0
 */
setEndSize : function (
float 
)
{
},

/**
 * @method getGravity
 * @return {cc.CCPoint}
 */
getGravity : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getTangentialAccel
 * @return {float}
 */
getTangentialAccel : function (
)
{
    return 0;
},

/**
 * @method setEndRadius
 * @param {float} arg0
 */
setEndRadius : function (
float 
)
{
},

/**
 * @method getAngle
 * @return {float}
 */
getAngle : function (
)
{
    return 0;
},

/**
 * @method getSpeed
 * @return {float}
 */
getSpeed : function (
)
{
    return 0;
},

/**
 * @method setEndColor
 * @param {cc._ccColor4F} arg0
 */
setEndColor : function (
_cccolor4f 
)
{
},

/**
 * @method setStartSpin
 * @param {float} arg0
 */
setStartSpin : function (
float 
)
{
},

/**
 * @method setDuration
 * @param {float} arg0
 */
setDuration : function (
float 
)
{
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method setTexture
 * @param {cc.CCTexture2D} arg0
 */
setTexture : function (
cctexture2d 
)
{
},

/**
 * @method getPosVar
 * @return {cc.CCPoint}
 */
getPosVar : function (
)
{
    return cc.CCPoint;
},

/**
 * @method updateWithNoTime
 */
updateWithNoTime : function (
)
{
},

/**
 * @method isBlendAdditive
 * @return {bool}
 */
isBlendAdditive : function (
)
{
    return false;
},

/**
 * @method getAngleVar
 * @return {float}
 */
getAngleVar : function (
)
{
    return 0;
},

/**
 * @method setPositionType
 * @param {cc.tCCPositionType} arg0
 */
setPositionType : function (
tccpositiontype 
)
{
},

/**
 * @method getEndRadius
 * @return {float}
 */
getEndRadius : function (
)
{
    return 0;
},

/**
 * @method getSourcePosition
 * @return {cc.CCPoint}
 */
getSourcePosition : function (
)
{
    return cc.CCPoint;
},

/**
 * @method setLifeVar
 * @param {float} arg0
 */
setLifeVar : function (
float 
)
{
},

/**
 * @method setTotalParticles
 * @param {unsigned int} arg0
 */
setTotalParticles : function (
int 
)
{
},

/**
 * @method setEndColorVar
 * @param {cc._ccColor4F} arg0
 */
setEndColorVar : function (
_cccolor4f 
)
{
},

/**
 * @method updateQuadWithParticle
 * @param {cc.sCCParticle} arg0
 * @param {cc.CCPoint} arg1
 */
updateQuadWithParticle : function (
sccparticle, 
ccpoint 
)
{
},

/**
 * @method getAtlasIndex
 * @return {unsigned int}
 */
getAtlasIndex : function (
)
{
    return 0;
},

/**
 * @method getStartSize
 * @return {float}
 */
getStartSize : function (
)
{
    return 0;
},

/**
 * @method setStartSpinVar
 * @param {float} arg0
 */
setStartSpinVar : function (
float 
)
{
},

/**
 * @method resetSystem
 */
resetSystem : function (
)
{
},

/**
 * @method setAtlasIndex
 * @param {unsigned int} arg0
 */
setAtlasIndex : function (
int 
)
{
},

/**
 * @method setTangentialAccelVar
 * @param {float} arg0
 */
setTangentialAccelVar : function (
float 
)
{
},

/**
 * @method setEndRadiusVar
 * @param {float} arg0
 */
setEndRadiusVar : function (
float 
)
{
},

/**
 * @method isActive
 * @return {bool}
 */
isActive : function (
)
{
    return false;
},

/**
 * @method setRadialAccelVar
 * @param {float} arg0
 */
setRadialAccelVar : function (
float 
)
{
},

/**
 * @method setStartSize
 * @param {float} arg0
 */
setStartSize : function (
float 
)
{
},

/**
 * @method setSpeed
 * @param {float} arg0
 */
setSpeed : function (
float 
)
{
},

/**
 * @method getStartSpin
 * @return {float}
 */
getStartSpin : function (
)
{
    return 0;
},

/**
 * @method getRotatePerSecond
 * @return {float}
 */
getRotatePerSecond : function (
)
{
    return 0;
},

/**
 * @method initParticle
 * @param {cc.sCCParticle} arg0
 */
initParticle : function (
sccparticle 
)
{
},

/**
 * @method setEmitterMode
 * @param {int} arg0
 */
setEmitterMode : function (
int 
)
{
},

/**
 * @method getDuration
 * @return {float}
 */
getDuration : function (
)
{
    return 0;
},

/**
 * @method setSourcePosition
 * @param {cc.CCPoint} arg0
 */
setSourcePosition : function (
ccpoint 
)
{
},

/**
 * @method getRadialAccelVar
 * @return {float}
 */
getRadialAccelVar : function (
)
{
    return 0;
},

/**
 * @method setBlendAdditive
 * @param {bool} arg0
 */
setBlendAdditive : function (
bool 
)
{
},

/**
 * @method setLife
 * @param {float} arg0
 */
setLife : function (
float 
)
{
},

/**
 * @method setAngleVar
 * @param {float} arg0
 */
setAngleVar : function (
float 
)
{
},

/**
 * @method setRotationIsDir
 * @param {bool} arg0
 */
setRotationIsDir : function (
bool 
)
{
},

/**
 * @method setEndSizeVar
 * @param {float} arg0
 */
setEndSizeVar : function (
float 
)
{
},

/**
 * @method setAngle
 * @param {float} arg0
 */
setAngle : function (
float 
)
{
},

/**
 * @method setBatchNode
 * @param {cc.CCParticleBatchNode} arg0
 */
setBatchNode : function (
ccparticlebatchnode 
)
{
},

/**
 * @method getTangentialAccelVar
 * @return {float}
 */
getTangentialAccelVar : function (
)
{
    return 0;
},

/**
 * @method getEmitterMode
 * @return {int}
 */
getEmitterMode : function (
)
{
    return 0;
},

/**
 * @method setEndSpinVar
 * @param {float} arg0
 */
setEndSpinVar : function (
float 
)
{
},

/**
 * @method initWithFile
 * @param {char} arg0
 * @return {bool}
 */
initWithFile : function (
char 
)
{
    return false;
},

/**
 * @method getSpeedVar
 * @return {float}
 */
getSpeedVar : function (
)
{
    return 0;
},

/**
 * @method setStartColor
 * @param {cc._ccColor4F} arg0
 */
setStartColor : function (
_cccolor4f 
)
{
},

/**
 * @method getRotatePerSecondVar
 * @return {float}
 */
getRotatePerSecondVar : function (
)
{
    return 0;
},

/**
 * @method getEndSize
 * @return {float}
 */
getEndSize : function (
)
{
    return 0;
},

/**
 * @method getLife
 * @return {float}
 */
getLife : function (
)
{
    return 0;
},

/**
 * @method setSpeedVar
 * @param {float} arg0
 */
setSpeedVar : function (
float 
)
{
},

/**
 * @method setAutoRemoveOnFinish
 * @param {bool} arg0
 */
setAutoRemoveOnFinish : function (
bool 
)
{
},

/**
 * @method setGravity
 * @param {cc.CCPoint} arg0
 */
setGravity : function (
ccpoint 
)
{
},

/**
 * @method postStep
 */
postStep : function (
)
{
},

/**
 * @method setEmissionRate
 * @param {float} arg0
 */
setEmissionRate : function (
float 
)
{
},

/**
 * @method getEndColorVar
 * @return {cc._ccColor4F}
 */
getEndColorVar : function (
)
{
    return cc._ccColor4F;
},

/**
 * @method getRotationIsDir
 * @return {bool}
 */
getRotationIsDir : function (
)
{
    return false;
},

/**
 * @method setScale
 * @param {float} arg0
 */
setScale : function (
float 
)
{
},

/**
 * @method getEmissionRate
 * @return {float}
 */
getEmissionRate : function (
)
{
    return 0;
},

/**
 * @method getEndColor
 * @return {cc._ccColor4F}
 */
getEndColor : function (
)
{
    return cc._ccColor4F;
},

/**
 * @method getLifeVar
 * @return {float}
 */
getLifeVar : function (
)
{
    return 0;
},

/**
 * @method setStartSizeVar
 * @param {float} arg0
 */
setStartSizeVar : function (
float 
)
{
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method addParticle
 * @return {bool}
 */
addParticle : function (
)
{
    return false;
},

/**
 * @method getOpacityModifyRGB
 * @return {bool}
 */
getOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method getStartRadius
 * @return {float}
 */
getStartRadius : function (
)
{
    return 0;
},

/**
 * @method getParticleCount
 * @return {unsigned int}
 */
getParticleCount : function (
)
{
    return 0;
},

/**
 * @method getStartRadiusVar
 * @return {float}
 */
getStartRadiusVar : function (
)
{
    return 0;
},

/**
 * @method setStartColorVar
 * @param {cc._ccColor4F} arg0
 */
setStartColorVar : function (
_cccolor4f 
)
{
},

/**
 * @method setEndSpin
 * @param {float} arg0
 */
setEndSpin : function (
float 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method setRadialAccel
 * @param {float} arg0
 */
setRadialAccel : function (
float 
)
{
},

/**
 * @method initWithDictionary
* @param {cc.CCDictionary|cc.CCDictionary} ccdictionary
* @param {char} char
* @return {bool|bool}
*/
initWithDictionary : function(
ccdictionary,
char 
)
{
    return false;
},

/**
 * @method isAutoRemoveOnFinish
 * @return {bool}
 */
isAutoRemoveOnFinish : function (
)
{
    return false;
},

/**
 * @method getTotalParticles
 * @return {unsigned int}
 */
getTotalParticles : function (
)
{
    return 0;
},

/**
 * @method setStartRadiusVar
 * @param {float} arg0
 */
setStartRadiusVar : function (
float 
)
{
},

/**
 * @method getEndRadiusVar
 * @return {float}
 */
getEndRadiusVar : function (
)
{
    return 0;
},

/**
 * @method getStartColorVar
 * @return {cc._ccColor4F}
 */
getStartColorVar : function (
)
{
    return cc._ccColor4F;
},

/**
 * @method create
 * @param {char} arg0
 * @return {cc.CCParticleSystem}
 */
create : function (
char 
)
{
    return cc.CCParticleSystem;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleSystem}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleSystem;
},

/**
 * @method CCParticleSystem
 * @constructor
 */
CCParticleSystem : function (
)
{
},

};

/**
 * @class CCParticleSystemQuad
 */
cc.ParticleSystem = {

/**
 * @method initTexCoordsWithRect
 * @param {cc.CCRect} arg0
 */
initTexCoordsWithRect : function (
ccrect 
)
{
},

/**
 * @method setTextureWithRect
 * @param {cc.CCTexture2D} arg0
 * @param {cc.CCRect} arg1
 */
setTextureWithRect : function (
cctexture2d, 
ccrect 
)
{
},

/**
 * @method initIndices
 */
initIndices : function (
)
{
},

/**
 * @method setDisplayFrame
 * @param {cc.CCSpriteFrame} arg0
 */
setDisplayFrame : function (
ccspriteframe 
)
{
},

/**
 * @method create
* @param {char} char
* @return {cc.CCParticleSystemQuad|cc.CCParticleSystemQuad}
*/
create : function(
char 
)
{
    return cc.CCParticleSystemQuad;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleSystemQuad}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleSystemQuad;
},

/**
 * @method CCParticleSystemQuad
 * @constructor
 */
CCParticleSystemQuad : function (
)
{
},

};

/**
 * @class CCParticleFire
 */
cc.ParticleFire = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleFire}
 */
create : function (
)
{
    return cc.CCParticleFire;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleFire}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleFire;
},

/**
 * @method CCParticleFire
 * @constructor
 */
CCParticleFire : function (
)
{
},

};

/**
 * @class CCParticleFireworks
 */
cc.ParticleFireworks = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleFireworks}
 */
create : function (
)
{
    return cc.CCParticleFireworks;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleFireworks}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleFireworks;
},

/**
 * @method CCParticleFireworks
 * @constructor
 */
CCParticleFireworks : function (
)
{
},

};

/**
 * @class CCParticleSun
 */
cc.ParticleSun = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleSun}
 */
create : function (
)
{
    return cc.CCParticleSun;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleSun}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleSun;
},

/**
 * @method CCParticleSun
 * @constructor
 */
CCParticleSun : function (
)
{
},

};

/**
 * @class CCParticleGalaxy
 */
cc.ParticleGalaxy = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleGalaxy}
 */
create : function (
)
{
    return cc.CCParticleGalaxy;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleGalaxy}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleGalaxy;
},

/**
 * @method CCParticleGalaxy
 * @constructor
 */
CCParticleGalaxy : function (
)
{
},

};

/**
 * @class CCParticleFlower
 */
cc.ParticleFlower = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleFlower}
 */
create : function (
)
{
    return cc.CCParticleFlower;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleFlower}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleFlower;
},

/**
 * @method CCParticleFlower
 * @constructor
 */
CCParticleFlower : function (
)
{
},

};

/**
 * @class CCParticleMeteor
 */
cc.ParticleMeteor = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleMeteor}
 */
create : function (
)
{
    return cc.CCParticleMeteor;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleMeteor}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleMeteor;
},

/**
 * @method CCParticleMeteor
 * @constructor
 */
CCParticleMeteor : function (
)
{
},

};

/**
 * @class CCParticleSpiral
 */
cc.ParticleSpiral = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleSpiral}
 */
create : function (
)
{
    return cc.CCParticleSpiral;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleSpiral}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleSpiral;
},

/**
 * @method CCParticleSpiral
 * @constructor
 */
CCParticleSpiral : function (
)
{
},

};

/**
 * @class CCParticleExplosion
 */
cc.ParticleExplosion = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleExplosion}
 */
create : function (
)
{
    return cc.CCParticleExplosion;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleExplosion}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleExplosion;
},

/**
 * @method CCParticleExplosion
 * @constructor
 */
CCParticleExplosion : function (
)
{
},

};

/**
 * @class CCParticleSmoke
 */
cc.ParticleSmoke = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleSmoke}
 */
create : function (
)
{
    return cc.CCParticleSmoke;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleSmoke}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleSmoke;
},

/**
 * @method CCParticleSmoke
 * @constructor
 */
CCParticleSmoke : function (
)
{
},

};

/**
 * @class CCParticleSnow
 */
cc.ParticleSnow = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleSnow}
 */
create : function (
)
{
    return cc.CCParticleSnow;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleSnow}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleSnow;
},

/**
 * @method CCParticleSnow
 * @constructor
 */
CCParticleSnow : function (
)
{
},

};

/**
 * @class CCParticleRain
 */
cc.ParticleRain = {

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method initWithTotalParticles
 * @param {unsigned int} arg0
 * @return {bool}
 */
initWithTotalParticles : function (
int 
)
{
    return false;
},

/**
 * @method create
 * @return {cc.CCParticleRain}
 */
create : function (
)
{
    return cc.CCParticleRain;
},

/**
 * @method createWithTotalParticles
 * @param {unsigned int} arg0
 * @return {cc.CCParticleRain}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.CCParticleRain;
},

/**
 * @method CCParticleRain
 * @constructor
 */
CCParticleRain : function (
)
{
},

};

/**
 * @class CCFileUtils
 */
cc.FileUtils = {

/**
 * @method isFileExist
 * @param {String} arg0
 * @return {bool}
 */
isFileExist : function (
str 
)
{
    return false;
},

/**
 * @method removeSearchPath
 * @param {char} arg0
 */
removeSearchPath : function (
char 
)
{
},

/**
 * @method purgeCachedEntries
 */
purgeCachedEntries : function (
)
{
},

/**
 * @method fullPathFromRelativeFile
 * @param {char} arg0
 * @param {char} arg1
 * @return {char}
 */
fullPathFromRelativeFile : function (
char, 
char 
)
{
    return 0;
},

/**
 * @method getFileData
 * @param {char} arg0
 * @param {char} arg1
 * @param {unsigned long} arg2
 * @return {unsigned char}
 */
getFileData : function (
char, 
char, 
long 
)
{
    return 0;
},

/**
 * @method isPopupNotify
 * @return {bool}
 */
isPopupNotify : function (
)
{
    return false;
},

/**
 * @method setFilenameLookupDictionary
 * @param {cc.CCDictionary} arg0
 */
setFilenameLookupDictionary : function (
ccdictionary 
)
{
},

/**
 * @method addSearchResolutionsOrder
 * @param {char} arg0
 */
addSearchResolutionsOrder : function (
char 
)
{
},

/**
 * @method getFileDataFromZip
 * @param {char} arg0
 * @param {char} arg1
 * @param {unsigned long} arg2
 * @return {unsigned char}
 */
getFileDataFromZip : function (
char, 
char, 
long 
)
{
    return 0;
},

/**
 * @method removeAllPaths
 */
removeAllPaths : function (
)
{
},

/**
 * @method fullPathForFilename
 * @param {char} arg0
 * @return {String}
 */
fullPathForFilename : function (
char 
)
{
    return ;
},

/**
 * @method isAbsolutePath
 * @param {String} arg0
 * @return {bool}
 */
isAbsolutePath : function (
str 
)
{
    return false;
},

/**
 * @method getWritablePath
 * @return {String}
 */
getWritablePath : function (
)
{
    return ;
},

/**
 * @method addSearchPath
 * @param {char} arg0
 */
addSearchPath : function (
char 
)
{
},

/**
 * @method setPopupNotify
 * @param {bool} arg0
 */
setPopupNotify : function (
bool 
)
{
},

/**
 * @method loadFilenameLookupDictionaryFromFile
 * @param {char} arg0
 */
loadFilenameLookupDictionaryFromFile : function (
char 
)
{
},

/**
 * @method purgeFileUtils
 */
purgeFileUtils : function (
)
{
},

/**
 * @method sharedFileUtils
 * @return {cc.CCFileUtils}
 */
sharedFileUtils : function (
)
{
    return cc.CCFileUtils;
},

};

/**
 * @class CCApplication
 */
cc.Application = {

/**
 * @method getTargetPlatform
 * @return {cc.TargetPlatform}
 */
getTargetPlatform : function (
)
{
    return 0;
},

/**
 * @method setAnimationInterval
 * @param {double} arg0
 */
setAnimationInterval : function (
double 
)
{
},

/**
 * @method getCurrentLanguage
 * @return {cc.LanguageType}
 */
getCurrentLanguage : function (
)
{
    return 0;
},

/**
 * @method sharedApplication
 * @return {cc.CCApplication}
 */
sharedApplication : function (
)
{
    return cc.CCApplication;
},

};

/**
 * @class CCEGLViewProtocol
 */
cc.EGLViewProtocol = {

/**
 * @method getVisibleOrigin
 * @return {cc.CCPoint}
 */
getVisibleOrigin : function (
)
{
    return cc.CCPoint;
},

/**
 * @method setDesignResolutionSize
 * @param {float} arg0
 * @param {float} arg1
 * @param {ResolutionPolicy} arg2
 */
setDesignResolutionSize : function (
float, 
float, 
resolutionpolicy 
)
{
},

/**
 * @method getVisibleSize
 * @return {cc.CCSize}
 */
getVisibleSize : function (
)
{
    return cc.CCSize;
},

};

/**
 * @class CCEGLView
 */
cc.EGLView = {

/**
 * @method setIMEKeyboardState
 * @param {bool} arg0
 */
setIMEKeyboardState : function (
bool 
)
{
},

/**
 * @method isOpenGLReady
 * @return {bool}
 */
isOpenGLReady : function (
)
{
    return false;
},

/**
 * @method sharedOpenGLView
 * @return {cc.CCEGLView}
 */
sharedOpenGLView : function (
)
{
    return cc.CCEGLView;
},

};

/**
 * @class CCShaderCache
 */
cc.ShaderCache = {

/**
 * @method reloadDefaultShaders
 */
reloadDefaultShaders : function (
)
{
},

/**
 * @method addProgram
 * @param {cc.CCGLProgram} arg0
 * @param {char} arg1
 */
addProgram : function (
ccglprogram, 
char 
)
{
},

/**
 * @method programForKey
 * @param {char} arg0
 * @return {cc.CCGLProgram}
 */
programForKey : function (
char 
)
{
    return cc.CCGLProgram;
},

/**
 * @method loadDefaultShaders
 */
loadDefaultShaders : function (
)
{
},

/**
 * @method sharedShaderCache
 * @return {cc.CCShaderCache}
 */
sharedShaderCache : function (
)
{
    return cc.CCShaderCache;
},

/**
 * @method purgeSharedShaderCache
 */
purgeSharedShaderCache : function (
)
{
},

/**
 * @method CCShaderCache
 * @constructor
 */
CCShaderCache : function (
)
{
},

};

/**
 * @class CCAnimationCache
 */
cc.AnimationCache = {

/**
 * @method animationByName
 * @param {char} arg0
 * @return {cc.CCAnimation}
 */
animationByName : function (
char 
)
{
    return cc.CCAnimation;
},

/**
 * @method addAnimationsWithFile
 * @param {char} arg0
 */
addAnimationsWithFile : function (
char 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method addAnimationsWithDictionary
 * @param {cc.CCDictionary} arg0
 * @param {char} arg1
 */
addAnimationsWithDictionary : function (
ccdictionary, 
char 
)
{
},

/**
 * @method removeAnimationByName
 * @param {char} arg0
 */
removeAnimationByName : function (
char 
)
{
},

/**
 * @method addAnimation
 * @param {cc.CCAnimation} arg0
 * @param {char} arg1
 */
addAnimation : function (
ccanimation, 
char 
)
{
},

/**
 * @method purgeSharedAnimationCache
 */
purgeSharedAnimationCache : function (
)
{
},

/**
 * @method sharedAnimationCache
 * @return {cc.CCAnimationCache}
 */
sharedAnimationCache : function (
)
{
    return cc.CCAnimationCache;
},

/**
 * @method CCAnimationCache
 * @constructor
 */
CCAnimationCache : function (
)
{
},

};

/**
 * @class CCSpriteFrameCache
 */
cc.SpriteFrameCache = {

/**
 * @method addSpriteFramesWithFile
* @param {char|char|char} char
* @param {char|cc.CCTexture2D} char
*/
addSpriteFramesWithFile : function(
char,
cctexture2d 
)
{
},

/**
 * @method addSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 * @param {char} arg1
 */
addSpriteFrame : function (
ccspriteframe, 
char 
)
{
},

/**
 * @method removeUnusedSpriteFrames
 */
removeUnusedSpriteFrames : function (
)
{
},

/**
 * @method spriteFrameByName
 * @param {char} arg0
 * @return {cc.CCSpriteFrame}
 */
spriteFrameByName : function (
char 
)
{
    return cc.CCSpriteFrame;
},

/**
 * @method removeSpriteFramesFromFile
 * @param {char} arg0
 */
removeSpriteFramesFromFile : function (
char 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method removeSpriteFrames
 */
removeSpriteFrames : function (
)
{
},

/**
 * @method removeSpriteFramesFromTexture
 * @param {cc.CCTexture2D} arg0
 */
removeSpriteFramesFromTexture : function (
cctexture2d 
)
{
},

/**
 * @method removeSpriteFrameByName
 * @param {char} arg0
 */
removeSpriteFrameByName : function (
char 
)
{
},

/**
 * @method purgeSharedSpriteFrameCache
 */
purgeSharedSpriteFrameCache : function (
)
{
},

/**
 * @method sharedSpriteFrameCache
 * @return {cc.CCSpriteFrameCache}
 */
sharedSpriteFrameCache : function (
)
{
    return cc.CCSpriteFrameCache;
},

};

/**
 * @class CCTextFieldTTF
 */
cc.TextFieldTTF = {

/**
 * @method getCharCount
 * @return {int}
 */
getCharCount : function (
)
{
    return 0;
},

/**
 * @method getDelegate
 * @return {cc.CCTextFieldDelegate}
 */
getDelegate : function (
)
{
    return cc.CCTextFieldDelegate;
},

/**
 * @method setSecureTextEntry
 * @param {bool} arg0
 */
setSecureTextEntry : function (
bool 
)
{
},

/**
 * @method getString
 * @return {char}
 */
getString : function (
)
{
    return 0;
},

/**
 * @method getColorSpaceHolder
 * @return {cc._ccColor3B}
 */
getColorSpaceHolder : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method initWithPlaceHolder
* @param {char|char} char
* @param {char|cc.CCSize} char
* @param {float|cc.CCTextAlignment} float
* @param {char} char
* @param {float} float
* @return {bool|bool}
*/
initWithPlaceHolder : function(
char,
ccsize,
cctextalignment,
char,
float 
)
{
    return false;
},

/**
 * @method getPlaceHolder
 * @return {char}
 */
getPlaceHolder : function (
)
{
    return 0;
},

/**
 * @method setColorSpaceHolder
 * @param {cc._ccColor3B} arg0
 */
setColorSpaceHolder : function (
_cccolor3b 
)
{
},

/**
 * @method detachWithIME
 * @return {bool}
 */
detachWithIME : function (
)
{
    return false;
},

/**
 * @method setDelegate
 * @param {cc.CCTextFieldDelegate} arg0
 */
setDelegate : function (
cctextfielddelegate 
)
{
},

/**
 * @method setPlaceHolder
 * @param {char} arg0
 */
setPlaceHolder : function (
char 
)
{
},

/**
 * @method isSecureTextEntry
 * @return {bool}
 */
isSecureTextEntry : function (
)
{
    return false;
},

/**
 * @method setString
 * @param {char} arg0
 */
setString : function (
char 
)
{
},

/**
 * @method attachWithIME
 * @return {bool}
 */
attachWithIME : function (
)
{
    return false;
},

/**
 * @method textFieldWithPlaceHolder
* @param {char|char} char
* @param {char|cc.CCSize} char
* @param {float|cc.CCTextAlignment} float
* @param {char} char
* @param {float} float
* @return {cc.CCTextFieldTTF|cc.CCTextFieldTTF}
*/
textFieldWithPlaceHolder : function(
char,
ccsize,
cctextalignment,
char,
float 
)
{
    return cc.CCTextFieldTTF;
},

/**
 * @method CCTextFieldTTF
 * @constructor
 */
CCTextFieldTTF : function (
)
{
},

};

/**
 * @class CCTextureCache
 */
cc.TextureCache = {

/**
 * @method dumpCachedTextureInfo
 */
dumpCachedTextureInfo : function (
)
{
},

/**
 * @method reloadTexture
 * @param {char} arg0
 * @return {bool}
 */
reloadTexture : function (
char 
)
{
    return false;
},

/**
 * @method addETCImage
 * @param {char} arg0
 * @return {cc.CCTexture2D}
 */
addETCImage : function (
char 
)
{
    return cc.CCTexture2D;
},

/**
 * @method addUIImage
 * @param {cc.CCImage} arg0
 * @param {char} arg1
 * @return {cc.CCTexture2D}
 */
addUIImage : function (
ccimage, 
char 
)
{
    return cc.CCTexture2D;
},

/**
 * @method removeTextureForKey
 * @param {char} arg0
 */
removeTextureForKey : function (
char 
)
{
},

/**
 * @method textureForKey
 * @param {char} arg0
 * @return {cc.CCTexture2D}
 */
textureForKey : function (
char 
)
{
    return cc.CCTexture2D;
},

/**
 * @method snapshotTextures
 * @return {cc.CCDictionary}
 */
snapshotTextures : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method addPVRImage
 * @param {char} arg0
 * @return {cc.CCTexture2D}
 */
addPVRImage : function (
char 
)
{
    return cc.CCTexture2D;
},

/**
 * @method addImage
 * @param {char} arg0
 * @return {cc.CCTexture2D}
 */
addImage : function (
char 
)
{
    return cc.CCTexture2D;
},

/**
 * @method removeAllTextures
 */
removeAllTextures : function (
)
{
},

/**
 * @method removeUnusedTextures
 */
removeUnusedTextures : function (
)
{
},

/**
 * @method removeTexture
 * @param {cc.CCTexture2D} arg0
 */
removeTexture : function (
cctexture2d 
)
{
},

/**
 * @method purgeSharedTextureCache
 */
purgeSharedTextureCache : function (
)
{
},

/**
 * @method reloadAllTextures
 */
reloadAllTextures : function (
)
{
},

/**
 * @method sharedTextureCache
 * @return {cc.CCTextureCache}
 */
sharedTextureCache : function (
)
{
    return cc.CCTextureCache;
},

/**
 * @method CCTextureCache
 * @constructor
 */
CCTextureCache : function (
)
{
},

};

/**
 * @class CCParallaxNode
 */
cc.ParallaxNode = {

/**
 * @method addChild
* @param {cc.CCNode|cc.CCNode} ccnode
* @param {unsigned int|unsigned int} int
* @param {int|cc.CCPoint} int
* @param {cc.CCPoint} ccpoint
*/
addChild : function(
ccnode,
int,
ccpoint,
ccpoint 
)
{
},

/**
 * @method visit
 */
visit : function (
)
{
},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool} arg0
 */
removeAllChildrenWithCleanup : function (
bool 
)
{
},

/**
 * @method removeChild
 * @param {cc.CCNode} arg0
 * @param {bool} arg1
 */
removeChild : function (
ccnode, 
bool 
)
{
},

/**
 * @method getParallaxArray
 * @return {cc._ccArray}
 */
getParallaxArray : function (
)
{
    return cc._ccArray;
},

/**
 * @method setParallaxArray
 * @param {cc._ccArray} arg0
 */
setParallaxArray : function (
_ccarray 
)
{
},

/**
 * @method create
 * @return {cc.CCParallaxNode}
 */
create : function (
)
{
    return cc.CCParallaxNode;
},

/**
 * @method CCParallaxNode
 * @constructor
 */
CCParallaxNode : function (
)
{
},

};

/**
 * @class CCTMXObjectGroup
 */
cc.TMXObjectGroup = {

/**
 * @method setPositionOffset
 * @param {cc.CCPoint} arg0
 */
setPositionOffset : function (
ccpoint 
)
{
},

/**
 * @method objectNamed
 * @param {char} arg0
 * @return {cc.CCDictionary}
 */
objectNamed : function (
char 
)
{
    return cc.CCDictionary;
},

/**
 * @method getPositionOffset
 * @return {cc.CCPoint}
 */
getPositionOffset : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getObjects
 * @return {cc.CCArray}
 */
getObjects : function (
)
{
    return cc.CCArray;
},

/**
 * @method setGroupName
 * @param {char} arg0
 */
setGroupName : function (
char 
)
{
},

/**
 * @method getProperties
 * @return {cc.CCDictionary}
 */
getProperties : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method getGroupName
 * @return {char}
 */
getGroupName : function (
)
{
    return 0;
},

/**
 * @method setProperties
 * @param {cc.CCDictionary} arg0
 */
setProperties : function (
ccdictionary 
)
{
},

/**
 * @method propertyNamed
 * @param {char} arg0
 * @return {cc.CCString}
 */
propertyNamed : function (
char 
)
{
    return cc.CCString;
},

/**
 * @method setObjects
 * @param {cc.CCArray} arg0
 */
setObjects : function (
ccarray 
)
{
},

/**
 * @method CCTMXObjectGroup
 * @constructor
 */
CCTMXObjectGroup : function (
)
{
},

};

/**
 * @class CCTMXLayerInfo
 */
cc.TMXLayerInfo = {

/**
 * @method setProperties
 * @param {cc.CCDictionary} arg0
 */
setProperties : function (
ccdictionary 
)
{
},

/**
 * @method getProperties
 * @return {cc.CCDictionary}
 */
getProperties : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method CCTMXLayerInfo
 * @constructor
 */
CCTMXLayerInfo : function (
)
{
},

};

/**
 * @class CCTMXTilesetInfo
 */
cc.TMXTilesetInfo = {

/**
 * @method rectForGID
 * @param {unsigned int} arg0
 * @return {cc.CCRect}
 */
rectForGID : function (
int 
)
{
    return cc.CCRect;
},

/**
 * @method CCTMXTilesetInfo
 * @constructor
 */
CCTMXTilesetInfo : function (
)
{
},

};

/**
 * @class CCTMXMapInfo
 */
cc.TMXMapInfo = {

/**
 * @method getTileProperties
 * @return {cc.CCDictionary}
 */
getTileProperties : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method setObjectGroups
 * @param {cc.CCArray} arg0
 */
setObjectGroups : function (
ccarray 
)
{
},

/**
 * @method setTileSize
 * @param {cc.CCSize} arg0
 */
setTileSize : function (
ccsize 
)
{
},

/**
 * @method initWithTMXFile
 * @param {char} arg0
 * @return {bool}
 */
initWithTMXFile : function (
char 
)
{
    return false;
},

/**
 * @method getOrientation
 * @return {int}
 */
getOrientation : function (
)
{
    return 0;
},

/**
 * @method setTMXFileName
 * @param {char} arg0
 */
setTMXFileName : function (
char 
)
{
},

/**
 * @method setLayers
 * @param {cc.CCArray} arg0
 */
setLayers : function (
ccarray 
)
{
},

/**
 * @method setStoringCharacters
 * @param {bool} arg0
 */
setStoringCharacters : function (
bool 
)
{
},

/**
 * @method getStoringCharacters
 * @return {bool}
 */
getStoringCharacters : function (
)
{
    return false;
},

/**
 * @method getParentElement
 * @return {int}
 */
getParentElement : function (
)
{
    return 0;
},

/**
 * @method getLayerAttribs
 * @return {int}
 */
getLayerAttribs : function (
)
{
    return 0;
},

/**
 * @method getLayers
 * @return {cc.CCArray}
 */
getLayers : function (
)
{
    return cc.CCArray;
},

/**
 * @method getTilesets
 * @return {cc.CCArray}
 */
getTilesets : function (
)
{
    return cc.CCArray;
},

/**
 * @method getParentGID
 * @return {unsigned int}
 */
getParentGID : function (
)
{
    return 0;
},

/**
 * @method setParentElement
 * @param {int} arg0
 */
setParentElement : function (
int 
)
{
},

/**
 * @method setProperties
 * @param {cc.CCDictionary} arg0
 */
setProperties : function (
ccdictionary 
)
{
},

/**
 * @method setParentGID
 * @param {unsigned int} arg0
 */
setParentGID : function (
int 
)
{
},

/**
 * @method parseXMLString
 * @param {char} arg0
 * @return {bool}
 */
parseXMLString : function (
char 
)
{
    return false;
},

/**
 * @method getTileSize
 * @return {cc.CCSize}
 */
getTileSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method getObjectGroups
 * @return {cc.CCArray}
 */
getObjectGroups : function (
)
{
    return cc.CCArray;
},

/**
 * @method setLayerAttribs
 * @param {int} arg0
 */
setLayerAttribs : function (
int 
)
{
},

/**
 * @method getTMXFileName
 * @return {char}
 */
getTMXFileName : function (
)
{
    return 0;
},

/**
 * @method setCurrentString
 * @param {char} arg0
 */
setCurrentString : function (
char 
)
{
},

/**
 * @method initWithXML
 * @param {char} arg0
 * @param {char} arg1
 * @return {bool}
 */
initWithXML : function (
char, 
char 
)
{
    return false;
},

/**
 * @method setOrientation
 * @param {int} arg0
 */
setOrientation : function (
int 
)
{
},

/**
 * @method setTileProperties
 * @param {cc.CCDictionary} arg0
 */
setTileProperties : function (
ccdictionary 
)
{
},

/**
 * @method setMapSize
 * @param {cc.CCSize} arg0
 */
setMapSize : function (
ccsize 
)
{
},

/**
 * @method parseXMLFile
 * @param {char} arg0
 * @return {bool}
 */
parseXMLFile : function (
char 
)
{
    return false;
},

/**
 * @method getMapSize
 * @return {cc.CCSize}
 */
getMapSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method setTilesets
 * @param {cc.CCArray} arg0
 */
setTilesets : function (
ccarray 
)
{
},

/**
 * @method getProperties
 * @return {cc.CCDictionary}
 */
getProperties : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method getCurrentString
 * @return {char}
 */
getCurrentString : function (
)
{
    return 0;
},

/**
 * @method formatWithTMXFile
 * @param {char} arg0
 * @return {cc.CCTMXMapInfo}
 */
formatWithTMXFile : function (
char 
)
{
    return cc.CCTMXMapInfo;
},

/**
 * @method formatWithXML
 * @param {char} arg0
 * @param {char} arg1
 * @return {cc.CCTMXMapInfo}
 */
formatWithXML : function (
char, 
char 
)
{
    return cc.CCTMXMapInfo;
},

/**
 * @method CCTMXMapInfo
 * @constructor
 */
CCTMXMapInfo : function (
)
{
},

};

/**
 * @class CCTMXLayer
 */
cc.TMXLayer = {

/**
 * @method addChild
 * @param {cc.CCNode} arg0
 * @param {int} arg1
 * @param {int} arg2
 */
addChild : function (
ccnode, 
int, 
int 
)
{
},

/**
 * @method tileGIDAt
* @param {cc.CCPoint|cc.CCPoint} ccpoint
* @param {cc.ccTMXTileFlags_} cctmxtileflags_
* @return {unsigned int|unsigned int}
*/
tileGIDAt : function(
ccpoint,
cctmxtileflags_ 
)
{
    return 0;
},

/**
 * @method positionAt
 * @param {cc.CCPoint} arg0
 * @return {cc.CCPoint}
 */
positionAt : function (
ccpoint 
)
{
    return cc.CCPoint;
},

/**
 * @method setLayerOrientation
 * @param {unsigned int} arg0
 */
setLayerOrientation : function (
int 
)
{
},

/**
 * @method releaseMap
 */
releaseMap : function (
)
{
},

/**
 * @method setTiles
 * @param {unsigned int} arg0
 */
setTiles : function (
int 
)
{
},

/**
 * @method getLayerSize
 * @return {cc.CCSize}
 */
getLayerSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method setMapTileSize
 * @param {cc.CCSize} arg0
 */
setMapTileSize : function (
ccsize 
)
{
},

/**
 * @method getLayerOrientation
 * @return {unsigned int}
 */
getLayerOrientation : function (
)
{
    return 0;
},

/**
 * @method setProperties
 * @param {cc.CCDictionary} arg0
 */
setProperties : function (
ccdictionary 
)
{
},

/**
 * @method setLayerName
 * @param {char} arg0
 */
setLayerName : function (
char 
)
{
},

/**
 * @method removeTileAt
 * @param {cc.CCPoint} arg0
 */
removeTileAt : function (
ccpoint 
)
{
},

/**
 * @method initWithTilesetInfo
 * @param {cc.CCTMXTilesetInfo} arg0
 * @param {cc.CCTMXLayerInfo} arg1
 * @param {cc.CCTMXMapInfo} arg2
 * @return {bool}
 */
initWithTilesetInfo : function (
cctmxtilesetinfo, 
cctmxlayerinfo, 
map 
)
{
    return false;
},

/**
 * @method setupTiles
 */
setupTiles : function (
)
{
},

/**
 * @method setTileGID
* @param {unsigned int|unsigned int} int
* @param {cc.CCPoint|cc.CCPoint} ccpoint
* @param {cc.ccTMXTileFlags_} cctmxtileflags_
*/
setTileGID : function(
int,
ccpoint,
cctmxtileflags_ 
)
{
},

/**
 * @method getMapTileSize
 * @return {cc.CCSize}
 */
getMapTileSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method propertyNamed
 * @param {char} arg0
 * @return {cc.CCString}
 */
propertyNamed : function (
char 
)
{
    return cc.CCString;
},

/**
 * @method setLayerSize
 * @param {cc.CCSize} arg0
 */
setLayerSize : function (
ccsize 
)
{
},

/**
 * @method getLayerName
 * @return {char}
 */
getLayerName : function (
)
{
    return 0;
},

/**
 * @method setTileSet
 * @param {cc.CCTMXTilesetInfo} arg0
 */
setTileSet : function (
cctmxtilesetinfo 
)
{
},

/**
 * @method removeChild
 * @param {cc.CCNode} arg0
 * @param {bool} arg1
 */
removeChild : function (
ccnode, 
bool 
)
{
},

/**
 * @method getTileSet
 * @return {cc.CCTMXTilesetInfo}
 */
getTileSet : function (
)
{
    return cc.CCTMXTilesetInfo;
},

/**
 * @method getProperties
 * @return {cc.CCDictionary}
 */
getProperties : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method tileAt
 * @param {cc.CCPoint} arg0
 * @return {cc.CCSprite}
 */
tileAt : function (
ccpoint 
)
{
    return cc.CCSprite;
},

/**
 * @method create
 * @param {cc.CCTMXTilesetInfo} arg0
 * @param {cc.CCTMXLayerInfo} arg1
 * @param {cc.CCTMXMapInfo} arg2
 * @return {cc.CCTMXLayer}
 */
create : function (
cctmxtilesetinfo, 
cctmxlayerinfo, 
map 
)
{
    return cc.CCTMXLayer;
},

/**
 * @method CCTMXLayer
 * @constructor
 */
CCTMXLayer : function (
)
{
},

};

/**
 * @class CCTMXTiledMap
 */
cc.TMXTiledMap = {

/**
 * @method setObjectGroups
 * @param {cc.CCArray} arg0
 */
setObjectGroups : function (
ccarray 
)
{
},

/**
 * @method setTileSize
 * @param {cc.CCSize} arg0
 */
setTileSize : function (
ccsize 
)
{
},

/**
 * @method setMapSize
 * @param {cc.CCSize} arg0
 */
setMapSize : function (
ccsize 
)
{
},

/**
 * @method getTileSize
 * @return {cc.CCSize}
 */
getTileSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method propertiesForGID
 * @param {int} arg0
 * @return {cc.CCDictionary}
 */
propertiesForGID : function (
int 
)
{
    return cc.CCDictionary;
},

/**
 * @method getObjectGroups
 * @return {cc.CCArray}
 */
getObjectGroups : function (
)
{
    return cc.CCArray;
},

/**
 * @method initWithXML
 * @param {char} arg0
 * @param {char} arg1
 * @return {bool}
 */
initWithXML : function (
char, 
char 
)
{
    return false;
},

/**
 * @method initWithTMXFile
 * @param {char} arg0
 * @return {bool}
 */
initWithTMXFile : function (
char 
)
{
    return false;
},

/**
 * @method objectGroupNamed
 * @param {char} arg0
 * @return {cc.CCTMXObjectGroup}
 */
objectGroupNamed : function (
char 
)
{
    return cc.CCTMXObjectGroup;
},

/**
 * @method getMapSize
 * @return {cc.CCSize}
 */
getMapSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method getProperties
 * @return {cc.CCDictionary}
 */
getProperties : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method setMapOrientation
 * @param {int} arg0
 */
setMapOrientation : function (
int 
)
{
},

/**
 * @method setProperties
 * @param {cc.CCDictionary} arg0
 */
setProperties : function (
ccdictionary 
)
{
},

/**
 * @method layerNamed
 * @param {char} arg0
 * @return {cc.CCTMXLayer}
 */
layerNamed : function (
char 
)
{
    return cc.CCTMXLayer;
},

/**
 * @method getMapOrientation
 * @return {int}
 */
getMapOrientation : function (
)
{
    return 0;
},

/**
 * @method propertyNamed
 * @param {char} arg0
 * @return {cc.CCString}
 */
propertyNamed : function (
char 
)
{
    return cc.CCString;
},

/**
 * @method create
 * @param {char} arg0
 * @return {cc.CCTMXTiledMap}
 */
create : function (
char 
)
{
    return cc.CCTMXTiledMap;
},

/**
 * @method createWithXML
 * @param {char} arg0
 * @param {char} arg1
 * @return {cc.CCTMXTiledMap}
 */
createWithXML : function (
char, 
char 
)
{
    return cc.CCTMXTiledMap;
},

/**
 * @method CCTMXTiledMap
 * @constructor
 */
CCTMXTiledMap : function (
)
{
},

};

/**
 * @class CCTileMapAtlas
 */
cc.TileMapAtlas = {

/**
 * @method initWithTileFile
 * @param {char} arg0
 * @param {char} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @return {bool}
 */
initWithTileFile : function (
char, 
char, 
int, 
int 
)
{
    return false;
},

/**
 * @method releaseMap
 */
releaseMap : function (
)
{
},

/**
 * @method getTGAInfo
 * @return {cc.sImageTGA}
 */
getTGAInfo : function (
)
{
    return cc.sImageTGA;
},

/**
 * @method tileAt
 * @param {cc.CCPoint} arg0
 * @return {cc._ccColor3B}
 */
tileAt : function (
ccpoint 
)
{
    return cc._ccColor3B;
},

/**
 * @method setTile
 * @param {cc._ccColor3B} arg0
 * @param {cc.CCPoint} arg1
 */
setTile : function (
_cccolor3b, 
ccpoint 
)
{
},

/**
 * @method setTGAInfo
 * @param {cc.sImageTGA} arg0
 */
setTGAInfo : function (
simagetga 
)
{
},

/**
 * @method create
 * @param {char} arg0
 * @param {char} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @return {cc.CCTileMapAtlas}
 */
create : function (
char, 
char, 
int, 
int 
)
{
    return cc.CCTileMapAtlas;
},

/**
 * @method CCTileMapAtlas
 * @constructor
 */
CCTileMapAtlas : function (
)
{
},

};

/**
 * @class CCTimer
 */
cc.Timer = {

/**
 * @method getInterval
 * @return {float}
 */
getInterval : function (
)
{
    return 0;
},

/**
 * @method setInterval
 * @param {float} arg0
 */
setInterval : function (
float 
)
{
},

/**
 * @method initWithScriptHandler
 * @param {int} arg0
 * @param {float} arg1
 * @return {bool}
 */
initWithScriptHandler : function (
int, 
float 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getScriptHandler
 * @return {int}
 */
getScriptHandler : function (
)
{
    return 0;
},

/**
 * @method timerWithScriptHandler
 * @param {int} arg0
 * @param {float} arg1
 * @return {cc.CCTimer}
 */
timerWithScriptHandler : function (
int, 
float 
)
{
    return cc.CCTimer;
},

/**
 * @method CCTimer
 * @constructor
 */
CCTimer : function (
)
{
},

};

/**
 * @class CCScheduler
 */
cc.Scheduler = {

/**
 * @method setTimeScale
 * @param {float} arg0
 */
setTimeScale : function (
float 
)
{
},

/**
 * @method getTimeScale
 * @return {float}
 */
getTimeScale : function (
)
{
    return 0;
},

/**
 * @method CCScheduler
 * @constructor
 */
CCScheduler : function (
)
{
},

};

/**
 * @class CCComponent
 */
cc.Component = {

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method setName
 * @param {char} arg0
 */
setName : function (
char 
)
{
},

/**
 * @method isEnabled
 * @return {bool}
 */
isEnabled : function (
)
{
    return false;
},

/**
 * @method serialize
 * @param {void} arg0
 * @return {bool}
 */
serialize : function (
void 
)
{
    return false;
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getOwner
 * @return {cc.CCNode}
 */
getOwner : function (
)
{
    return cc.CCNode;
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setOwner
 * @param {cc.CCNode} arg0
 */
setOwner : function (
ccnode 
)
{
},

/**
 * @method getName
 * @return {char}
 */
getName : function (
)
{
    return 0;
},

/**
 * @method create
 * @return {cc.CCComponent}
 */
create : function (
)
{
    return cc.CCComponent;
},

};

/**
 * @class SimpleAudioEngine
 */
cc.AudioEngine = {

/**
 * @method stopAllEffects
 */
stopAllEffects : function (
)
{
},

/**
 * @method getBackgroundMusicVolume
 * @return {float}
 */
getBackgroundMusicVolume : function (
)
{
    return 0;
},

/**
 * @method isBackgroundMusicPlaying
 * @return {bool}
 */
isBackgroundMusicPlaying : function (
)
{
    return false;
},

/**
 * @method getEffectsVolume
 * @return {float}
 */
getEffectsVolume : function (
)
{
    return 0;
},

/**
 * @method setBackgroundMusicVolume
 * @param {float} arg0
 */
setBackgroundMusicVolume : function (
float 
)
{
},

/**
 * @method stopEffect
 * @param {unsigned int} arg0
 */
stopEffect : function (
int 
)
{
},

/**
 * @method stopBackgroundMusic
* @param {bool} bool
*/
stopBackgroundMusic : function(
bool 
)
{
},

/**
 * @method playBackgroundMusic
* @param {char|char} char
* @param {bool} bool
*/
playBackgroundMusic : function(
char,
bool 
)
{
},

/**
 * @method pauseAllEffects
 */
pauseAllEffects : function (
)
{
},

/**
 * @method preloadBackgroundMusic
 * @param {char} arg0
 */
preloadBackgroundMusic : function (
char 
)
{
},

/**
 * @method resumeBackgroundMusic
 */
resumeBackgroundMusic : function (
)
{
},

/**
 * @method playEffect
* @param {char|char|char|char|char} char
* @param {bool|bool|bool|bool} bool
* @param {float|float|float} float
* @param {float|float} float
* @param {float} float
* @return {unsigned int|unsigned int|unsigned int|unsigned int|unsigned int}
*/
playEffect : function(
char,
bool,
float,
float,
float 
)
{
    return 0;
},

/**
 * @method rewindBackgroundMusic
 */
rewindBackgroundMusic : function (
)
{
},

/**
 * @method willPlayBackgroundMusic
 * @return {bool}
 */
willPlayBackgroundMusic : function (
)
{
    return false;
},

/**
 * @method unloadEffect
 * @param {char} arg0
 */
unloadEffect : function (
char 
)
{
},

/**
 * @method preloadEffect
 * @param {char} arg0
 */
preloadEffect : function (
char 
)
{
},

/**
 * @method setEffectsVolume
 * @param {float} arg0
 */
setEffectsVolume : function (
float 
)
{
},

/**
 * @method pauseEffect
 * @param {unsigned int} arg0
 */
pauseEffect : function (
int 
)
{
},

/**
 * @method resumeAllEffects
 */
resumeAllEffects : function (
)
{
},

/**
 * @method pauseBackgroundMusic
 */
pauseBackgroundMusic : function (
)
{
},

/**
 * @method resumeEffect
 * @param {unsigned int} arg0
 */
resumeEffect : function (
int 
)
{
},

/**
 * @method end
 */
end : function (
)
{
},

/**
 * @method sharedEngine
 * @return {cc.SimpleAudioEngine}
 */
sharedEngine : function (
)
{
    return cc.SimpleAudioEngine;
},

};

/**
 * @module cocos2dx_extension
 */
var cc = cc || {};

/**
 * @class CCControl
 */
cc.Control = {

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
 * @method getState
 * @return {unsigned int}
 */
getState : function (
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
 * @method sendActionsForControlEvents
 * @param {unsigned int} arg0
 */
sendActionsForControlEvents : function (
int 
)
{
},

/**
 * @method setSelected
 * @param {bool} arg0
 */
setSelected : function (
bool 
)
{
},

/**
 * @method getTouchLocation
 * @param {cc.CCTouch} arg0
 * @return {cc.CCPoint}
 */
getTouchLocation : function (
cctouch 
)
{
    return cc.CCPoint;
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
 * @method isTouchInside
 * @param {cc.CCTouch} arg0
 * @return {bool}
 */
isTouchInside : function (
cctouch 
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
 * @method needsLayout
 */
needsLayout : function (
)
{
},

/**
 * @method hasVisibleParents
 * @return {bool}
 */
hasVisibleParents : function (
)
{
    return false;
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
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setHighlighted
 * @param {bool} arg0
 */
setHighlighted : function (
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
 * @method isHighlighted
 * @return {bool}
 */
isHighlighted : function (
)
{
    return false;
},

/**
 * @method CCControl
 * @constructor
 */
CCControl : function (
)
{
},

};

/**
 * @class CCBReader
 */
cc._Reader = {

/**
 * @method getAnimationManager
 * @return {cc.CCBAnimationManager}
 */
getAnimationManager : function (
)
{
    return cc.CCBAnimationManager;
},

/**
 * @method setAnimationManager
 * @param {cc.CCBAnimationManager} arg0
 */
setAnimationManager : function (
ccbanimationmanager 
)
{
},

/**
 * @method addOwnerOutletName
 * @param {String} arg0
 */
addOwnerOutletName : function (
str 
)
{
},

/**
 * @method getOwnerCallbackNames
 * @return {cc.CCArray}
 */
getOwnerCallbackNames : function (
)
{
    return cc.CCArray;
},

/**
 * @method addDocumentCallbackControlEvents
 * @param {unsigned int} arg0
 */
addDocumentCallbackControlEvents : function (
int 
)
{
},

/**
 * @method setCCBRootPath
 * @param {char} arg0
 */
setCCBRootPath : function (
char 
)
{
},

/**
 * @method addOwnerOutletNode
 * @param {cc.CCNode} arg0
 */
addOwnerOutletNode : function (
ccnode 
)
{
},

/**
 * @method getOwnerCallbackNodes
 * @return {cc.CCArray}
 */
getOwnerCallbackNodes : function (
)
{
    return cc.CCArray;
},

/**
 * @method readSoundKeyframesForSeq
 * @param {cc.CCBSequence} arg0
 * @return {bool}
 */
readSoundKeyframesForSeq : function (
ccbsequence 
)
{
    return false;
},

/**
 * @method getCCBRootPath
 * @return {String}
 */
getCCBRootPath : function (
)
{
    return ;
},

/**
 * @method getOwnerCallbackControlEvents
 * @return {cc.CCArray}
 */
getOwnerCallbackControlEvents : function (
)
{
    return cc.CCArray;
},

/**
 * @method getOwnerOutletNodes
 * @return {cc.CCArray}
 */
getOwnerOutletNodes : function (
)
{
    return cc.CCArray;
},

/**
 * @method readUTF8
 * @return {String}
 */
readUTF8 : function (
)
{
    return ;
},

/**
 * @method addOwnerCallbackControlEvents
 * @param {unsigned int} arg0
 */
addOwnerCallbackControlEvents : function (
int 
)
{
},

/**
 * @method getOwnerOutletNames
 * @return {cc.CCArray}
 */
getOwnerOutletNames : function (
)
{
    return cc.CCArray;
},

/**
 * @method readCallbackKeyframesForSeq
 * @param {cc.CCBSequence} arg0
 * @return {bool}
 */
readCallbackKeyframesForSeq : function (
ccbsequence 
)
{
    return false;
},

/**
 * @method getAnimationManagersForNodes
 * @return {cc.CCArray}
 */
getAnimationManagersForNodes : function (
)
{
    return cc.CCArray;
},

/**
 * @method getNodesWithAnimationManagers
 * @return {cc.CCArray}
 */
getNodesWithAnimationManagers : function (
)
{
    return cc.CCArray;
},

/**
 * @method setResolutionScale
 * @param {float} arg0
 */
setResolutionScale : function (
float 
)
{
},

/**
 * @method CCBReader
 * @constructor
* @param {cc.CCBReader|cc.CCNodeLoaderLibrary} ccbreader
* @param {cc.CCBMemberVariableAssigner} ccbmembervariableassigner
* @param {cc.CCBSelectorResolver} ccbselectorresolver
* @param {cc.CCNodeLoaderListener} ccnodeloaderlistener
*/
CCBReader : function(
ccnodeloaderlibrary,
ccbmembervariableassigner,
ccbselectorresolver,
ccnodeloaderlistener 
)
{
},

};

/**
 * @class CCScale9Sprite
 */
cc.Scale9Sprite = {

/**
 * @method getCapInsets
 * @return {cc.CCRect}
 */
getCapInsets : function (
)
{
    return cc.CCRect;
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
 * @method updateWithBatchNode
 * @param {cc.CCSpriteBatchNode} arg0
 * @param {cc.CCRect} arg1
 * @param {bool} arg2
 * @param {cc.CCRect} arg3
 * @return {bool}
 */
updateWithBatchNode : function (
ccspritebatchnode, 
ccrect, 
bool, 
ccrect 
)
{
    return false;
},

/**
 * @method setInsetBottom
 * @param {float} arg0
 */
setInsetBottom : function (
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
 * @method initWithSpriteFrameName
* @param {char|char} char
* @param {cc.CCRect} ccrect
* @return {bool|bool}
*/
initWithSpriteFrameName : function(
char,
ccrect 
)
{
    return false;
},

/**
 * @method setInsetTop
 * @param {float} arg0
 */
setInsetTop : function (
float 
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
 * @method setPreferredSize
 * @param {cc.CCSize} arg0
 */
setPreferredSize : function (
ccsize 
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
 * @method setSpriteFrame
 * @param {cc.CCSpriteFrame} arg0
 */
setSpriteFrame : function (
ccspriteframe 
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
 * @method initWithBatchNode
* @param {cc.CCSpriteBatchNode|cc.CCSpriteBatchNode} ccspritebatchnode
* @param {cc.CCRect|cc.CCRect} ccrect
* @param {cc.CCRect|bool} ccrect
* @param {cc.CCRect} ccrect
* @return {bool|bool}
*/
initWithBatchNode : function(
ccspritebatchnode,
ccrect,
bool,
ccrect 
)
{
    return false;
},

/**
 * @method getInsetBottom
 * @return {float}
 */
getInsetBottom : function (
)
{
    return 0;
},

/**
 * @method resizableSpriteWithCapInsets
 * @param {cc.CCRect} arg0
 * @return {cc.CCScale9Sprite}
 */
resizableSpriteWithCapInsets : function (
ccrect 
)
{
    return cc.CCScale9Sprite;
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
 * @method getInsetRight
 * @return {float}
 */
getInsetRight : function (
)
{
    return 0;
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
 * @method initWithFile
* @param {char|char|cc.CCRect|char} char
* @param {cc.CCRect|cc.CCRect|char} ccrect
* @param {cc.CCRect} ccrect
* @return {bool|bool|bool|bool}
*/
initWithFile : function(
char,
ccrect,
ccrect 
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
 * @method getInsetTop
 * @return {float}
 */
getInsetTop : function (
)
{
    return 0;
},

/**
 * @method setInsetLeft
 * @param {float} arg0
 */
setInsetLeft : function (
float 
)
{
},

/**
 * @method initWithSpriteFrame
* @param {cc.CCSpriteFrame|cc.CCSpriteFrame} ccspriteframe
* @param {cc.CCRect} ccrect
* @return {bool|bool}
*/
initWithSpriteFrame : function(
ccspriteframe,
ccrect 
)
{
    return false;
},

/**
 * @method getPreferredSize
 * @return {cc.CCSize}
 */
getPreferredSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method setCapInsets
 * @param {cc.CCRect} arg0
 */
setCapInsets : function (
ccrect 
)
{
},

/**
 * @method getInsetLeft
 * @return {float}
 */
getInsetLeft : function (
)
{
    return 0;
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
 * @method setInsetRight
 * @param {float} arg0
 */
setInsetRight : function (
float 
)
{
},

/**
 * @method create
* @param {char|char|cc.CCRect|char} char
* @param {cc.CCRect|cc.CCRect|char} ccrect
* @param {cc.CCRect} ccrect
* @return {cc.CCScale9Sprite|cc.CCScale9Sprite|cc.CCScale9Sprite|cc.CCScale9Sprite|cc.CCScale9Sprite}
*/
create : function(
char,
ccrect,
ccrect 
)
{
    return cc.CCScale9Sprite;
},

/**
 * @method createWithSpriteFrameName
* @param {char|char} char
* @param {cc.CCRect} ccrect
* @return {cc.CCScale9Sprite|cc.CCScale9Sprite}
*/
createWithSpriteFrameName : function(
char,
ccrect 
)
{
    return cc.CCScale9Sprite;
},

/**
 * @method createWithSpriteFrame
* @param {cc.CCSpriteFrame|cc.CCSpriteFrame} ccspriteframe
* @param {cc.CCRect} ccrect
* @return {cc.CCScale9Sprite|cc.CCScale9Sprite}
*/
createWithSpriteFrame : function(
ccspriteframe,
ccrect 
)
{
    return cc.CCScale9Sprite;
},

/**
 * @method CCScale9Sprite
 * @constructor
 */
CCScale9Sprite : function (
)
{
},

};

/**
 * @class CCControlButton
 */
cc.ControlButton = {

/**
 * @method setTitleColorDispatchTable
 * @param {cc.CCDictionary} arg0
 */
setTitleColorDispatchTable : function (
ccdictionary 
)
{
},

/**
 * @method setZoomOnTouchDown
 * @param {bool} arg0
 */
setZoomOnTouchDown : function (
bool 
)
{
},

/**
 * @method setSelected
 * @param {bool} arg0
 */
setSelected : function (
bool 
)
{
},

/**
 * @method setTitleLabel
 * @param {cc.CCNode} arg0
 */
setTitleLabel : function (
ccnode 
)
{
},

/**
 * @method setTitleTTFSizeForState
 * @param {float} arg0
 * @param {unsigned int} arg1
 */
setTitleTTFSizeForState : function (
float, 
int 
)
{
},

/**
 * @method setAdjustBackgroundImage
 * @param {bool} arg0
 */
setAdjustBackgroundImage : function (
bool 
)
{
},

/**
 * @method setHighlighted
 * @param {bool} arg0
 */
setHighlighted : function (
bool 
)
{
},

/**
 * @method setBackgroundSpriteDispatchTable
 * @param {cc.CCDictionary} arg0
 */
setBackgroundSpriteDispatchTable : function (
ccdictionary 
)
{
},

/**
 * @method setTitleLabelForState
 * @param {cc.CCNode} arg0
 * @param {unsigned int} arg1
 */
setTitleLabelForState : function (
ccnode, 
int 
)
{
},

/**
 * @method setTitleForState
 * @param {cc.CCString} arg0
 * @param {unsigned int} arg1
 */
setTitleForState : function (
ccstring, 
int 
)
{
},

/**
 * @method getTitleDispatchTable
 * @return {cc.CCDictionary}
 */
getTitleDispatchTable : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method setLabelAnchorPoint
 * @param {cc.CCPoint} arg0
 */
setLabelAnchorPoint : function (
ccpoint 
)
{
},

/**
 * @method getLabelAnchorPoint
 * @return {cc.CCPoint}
 */
getLabelAnchorPoint : function (
)
{
    return cc.CCPoint;
},

/**
 * @method initWithBackgroundSprite
 * @param {cc.CCScale9Sprite} arg0
 * @return {bool}
 */
initWithBackgroundSprite : function (
ccscale9sprite 
)
{
    return false;
},

/**
 * @method getTitleTTFSizeForState
 * @param {unsigned int} arg0
 * @return {float}
 */
getTitleTTFSizeForState : function (
int 
)
{
    return 0;
},

/**
 * @method setTitleDispatchTable
 * @param {cc.CCDictionary} arg0
 */
setTitleDispatchTable : function (
ccdictionary 
)
{
},

/**
 * @method isPushed
 * @return {bool}
 */
isPushed : function (
)
{
    return false;
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
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setTitleTTFForState
 * @param {char} arg0
 * @param {unsigned int} arg1
 */
setTitleTTFForState : function (
char, 
int 
)
{
},

/**
 * @method setPreferredSize
 * @param {cc.CCSize} arg0
 */
setPreferredSize : function (
ccsize 
)
{
},

/**
 * @method getHorizontalOrigin
 * @return {int}
 */
getHorizontalOrigin : function (
)
{
    return 0;
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
 * @method getCurrentTitleColor
 * @return {cc._ccColor3B}
 */
getCurrentTitleColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method getTitleColorDispatchTable
 * @return {cc.CCDictionary}
 */
getTitleColorDispatchTable : function (
)
{
    return cc.CCDictionary;
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
 * @method getBackgroundSpriteForState
 * @param {unsigned int} arg0
 * @return {cc.CCScale9Sprite}
 */
getBackgroundSpriteForState : function (
int 
)
{
    return cc.CCScale9Sprite;
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
 * @method setMargins
 * @param {int} arg0
 * @param {int} arg1
 */
setMargins : function (
int, 
int 
)
{
},

/**
 * @method needsLayout
 */
needsLayout : function (
)
{
},

/**
 * @method initWithTitleAndFontNameAndFontSize
 * @param {String} arg0
 * @param {char} arg1
 * @param {float} arg2
 * @return {bool}
 */
initWithTitleAndFontNameAndFontSize : function (
str, 
char, 
float 
)
{
    return false;
},

/**
 * @method setTitleBMFontForState
 * @param {char} arg0
 * @param {unsigned int} arg1
 */
setTitleBMFontForState : function (
char, 
int 
)
{
},

/**
 * @method getTitleTTFForState
 * @param {unsigned int} arg0
 * @return {char}
 */
getTitleTTFForState : function (
int 
)
{
    return 0;
},

/**
 * @method getBackgroundSprite
 * @return {cc.CCScale9Sprite}
 */
getBackgroundSprite : function (
)
{
    return cc.CCScale9Sprite;
},

/**
 * @method getTitleColorForState
 * @param {unsigned int} arg0
 * @return {cc._ccColor3B}
 */
getTitleColorForState : function (
int 
)
{
    return cc._ccColor3B;
},

/**
 * @method setTitleColorForState
 * @param {cc._ccColor3B} arg0
 * @param {unsigned int} arg1
 */
setTitleColorForState : function (
_cccolor3b, 
int 
)
{
},

/**
 * @method doesAdjustBackgroundImage
 * @return {bool}
 */
doesAdjustBackgroundImage : function (
)
{
    return false;
},

/**
 * @method setBackgroundSpriteFrameForState
 * @param {cc.CCSpriteFrame} arg0
 * @param {unsigned int} arg1
 */
setBackgroundSpriteFrameForState : function (
ccspriteframe, 
int 
)
{
},

/**
 * @method setBackgroundSpriteForState
 * @param {cc.CCScale9Sprite} arg0
 * @param {unsigned int} arg1
 */
setBackgroundSpriteForState : function (
ccscale9sprite, 
int 
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
 * @method getTitleLabelDispatchTable
 * @return {cc.CCDictionary}
 */
getTitleLabelDispatchTable : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method initWithLabelAndBackgroundSprite
 * @param {cc.CCNode} arg0
 * @param {cc.CCScale9Sprite} arg1
 * @return {bool}
 */
initWithLabelAndBackgroundSprite : function (
ccnode, 
ccscale9sprite 
)
{
    return false;
},

/**
 * @method setTitleLabelDispatchTable
 * @param {cc.CCDictionary} arg0
 */
setTitleLabelDispatchTable : function (
ccdictionary 
)
{
},

/**
 * @method getTitleLabel
 * @return {cc.CCNode}
 */
getTitleLabel : function (
)
{
    return cc.CCNode;
},

/**
 * @method getPreferredSize
 * @return {cc.CCSize}
 */
getPreferredSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method getVerticalMargin
 * @return {int}
 */
getVerticalMargin : function (
)
{
    return 0;
},

/**
 * @method getBackgroundSpriteDispatchTable
 * @return {cc.CCDictionary}
 */
getBackgroundSpriteDispatchTable : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method getTitleLabelForState
 * @param {unsigned int} arg0
 * @return {cc.CCNode}
 */
getTitleLabelForState : function (
int 
)
{
    return cc.CCNode;
},

/**
 * @method getCurrentTitle
 * @return {cc.CCString}
 */
getCurrentTitle : function (
)
{
    return cc.CCString;
},

/**
 * @method getTitleBMFontForState
 * @param {unsigned int} arg0
 * @return {char}
 */
getTitleBMFontForState : function (
int 
)
{
    return 0;
},

/**
 * @method setBackgroundSprite
 * @param {cc.CCScale9Sprite} arg0
 */
setBackgroundSprite : function (
ccscale9sprite 
)
{
},

/**
 * @method getZoomOnTouchDown
 * @return {bool}
 */
getZoomOnTouchDown : function (
)
{
    return false;
},

/**
 * @method getTitleForState
 * @param {unsigned int} arg0
 * @return {cc.CCString}
 */
getTitleForState : function (
int 
)
{
    return cc.CCString;
},

/**
 * @method create
* @param {String|cc.CCNode|cc.CCScale9Sprite} str
* @param {char|cc.CCScale9Sprite} char
* @param {float} float
* @return {cc.CCControlButton|cc.CCControlButton|cc.CCControlButton|cc.CCControlButton}
*/
create : function(
str,
char,
float 
)
{
    return cc.CCControlButton;
},

/**
 * @method CCControlButton
 * @constructor
 */
CCControlButton : function (
)
{
},

};

/**
 * @class CCScrollView
 */
cc.ScrollView = {

/**
 * @method isClippingToBounds
 * @return {bool}
 */
isClippingToBounds : function (
)
{
    return false;
},

/**
 * @method setContainer
 * @param {cc.CCNode} arg0
 */
setContainer : function (
ccnode 
)
{
},

/**
 * @method setContentOffsetInDuration
 * @param {cc.CCPoint} arg0
 * @param {float} arg1
 */
setContentOffsetInDuration : function (
ccpoint, 
float 
)
{
},

/**
 * @method setZoomScaleInDuration
 * @param {float} arg0
 * @param {float} arg1
 */
setZoomScaleInDuration : function (
float, 
float 
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
 * @method getContainer
 * @return {cc.CCNode}
 */
getContainer : function (
)
{
    return cc.CCNode;
},

/**
 * @method getDirection
 * @return {cc.CCScrollViewDirection}
 */
getDirection : function (
)
{
    return 0;
},

/**
 * @method getZoomScale
 * @return {float}
 */
getZoomScale : function (
)
{
    return 0;
},

/**
 * @method updateInset
 */
updateInset : function (
)
{
},

/**
 * @method initWithViewSize
 * @param {cc.CCSize} arg0
 * @param {cc.CCNode} arg1
 * @return {bool}
 */
initWithViewSize : function (
ccsize, 
ccnode 
)
{
    return false;
},

/**
 * @method pause
 * @param {cc.CCObject} arg0
 */
pause : function (
ccobject 
)
{
},

/**
 * @method setDirection
 * @param {cc.CCScrollViewDirection} arg0
 */
setDirection : function (
ccscrollviewdirection 
)
{
},

/**
 * @method setBounceable
 * @param {bool} arg0
 */
setBounceable : function (
bool 
)
{
},

/**
 * @method setContentOffset
 * @param {cc.CCPoint} arg0
 * @param {bool} arg1
 */
setContentOffset : function (
ccpoint, 
bool 
)
{
},

/**
 * @method isDragging
 * @return {bool}
 */
isDragging : function (
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
 * @method isBounceable
 * @return {bool}
 */
isBounceable : function (
)
{
    return false;
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
 * @method setTouchEnabled
 * @param {bool} arg0
 */
setTouchEnabled : function (
bool 
)
{
},

/**
 * @method getContentOffset
 * @return {cc.CCPoint}
 */
getContentOffset : function (
)
{
    return cc.CCPoint;
},

/**
 * @method resume
 * @param {cc.CCObject} arg0
 */
resume : function (
ccobject 
)
{
},

/**
 * @method setClippingToBounds
 * @param {bool} arg0
 */
setClippingToBounds : function (
bool 
)
{
},

/**
 * @method setViewSize
 * @param {cc.CCSize} arg0
 */
setViewSize : function (
ccsize 
)
{
},

/**
 * @method getViewSize
 * @return {cc.CCSize}
 */
getViewSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method maxContainerOffset
 * @return {cc.CCPoint}
 */
maxContainerOffset : function (
)
{
    return cc.CCPoint;
},

/**
 * @method isTouchMoved
 * @return {bool}
 */
isTouchMoved : function (
)
{
    return false;
},

/**
 * @method isNodeVisible
 * @param {cc.CCNode} arg0
 * @return {bool}
 */
isNodeVisible : function (
ccnode 
)
{
    return false;
},

/**
 * @method minContainerOffset
 * @return {cc.CCPoint}
 */
minContainerOffset : function (
)
{
    return cc.CCPoint;
},

/**
 * @method registerWithTouchDispatcher
 */
registerWithTouchDispatcher : function (
)
{
},

/**
 * @method setZoomScale
* @param {float|float} float
* @param {bool} bool
*/
setZoomScale : function(
float,
bool 
)
{
},

/**
 * @method create
* @param {cc.CCSize} ccsize
* @param {cc.CCNode} ccnode
* @return {cc.CCScrollView|cc.CCScrollView}
*/
create : function(
ccsize,
ccnode 
)
{
    return cc.CCScrollView;
},

/**
 * @method CCScrollView
 * @constructor
 */
CCScrollView : function (
)
{
},

};

/**
 * @class CCBAnimationManager
 */
cc.BuilderAnimationManager = {

/**
 * @method moveAnimationsFromNode
 * @param {cc.CCNode} arg0
 * @param {cc.CCNode} arg1
 */
moveAnimationsFromNode : function (
ccnode, 
ccnode 
)
{
},

/**
 * @method setAutoPlaySequenceId
 * @param {int} arg0
 */
setAutoPlaySequenceId : function (
int 
)
{
},

/**
 * @method getDocumentCallbackNames
 * @return {cc.CCArray}
 */
getDocumentCallbackNames : function (
)
{
    return cc.CCArray;
},

/**
 * @method actionForSoundChannel
 * @param {cc.CCBSequenceProperty} arg0
 * @return {cc.CCObject}
 */
actionForSoundChannel : function (
ccbsequenceproperty 
)
{
    return cc.CCObject;
},

/**
 * @method setBaseValue
 * @param {cc.CCObject} arg0
 * @param {cc.CCNode} arg1
 * @param {char} arg2
 */
setBaseValue : function (
ccobject, 
ccnode, 
char 
)
{
},

/**
 * @method getDocumentOutletNodes
 * @return {cc.CCArray}
 */
getDocumentOutletNodes : function (
)
{
    return cc.CCArray;
},

/**
 * @method addNode
 * @param {cc.CCNode} arg0
 * @param {cc.CCDictionary} arg1
 */
addNode : function (
ccnode, 
ccdictionary 
)
{
},

/**
 * @method getLastCompletedSequenceName
 * @return {String}
 */
getLastCompletedSequenceName : function (
)
{
    return ;
},

/**
 * @method setRootNode
 * @param {cc.CCNode} arg0
 */
setRootNode : function (
ccnode 
)
{
},

/**
 * @method runAnimationsForSequenceNamedTweenDuration
 * @param {char} arg0
 * @param {float} arg1
 */
runAnimationsForSequenceNamedTweenDuration : function (
char, 
float 
)
{
},

/**
 * @method addDocumentOutletName
 * @param {String} arg0
 */
addDocumentOutletName : function (
str 
)
{
},

/**
 * @method getSequences
 * @return {cc.CCArray}
 */
getSequences : function (
)
{
    return cc.CCArray;
},

/**
 * @method getRootContainerSize
 * @return {cc.CCSize}
 */
getRootContainerSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method setDocumentControllerName
 * @param {String} arg0
 */
setDocumentControllerName : function (
str 
)
{
},

/**
 * @method getContainerSize
 * @param {cc.CCNode} arg0
 * @return {cc.CCSize}
 */
getContainerSize : function (
ccnode 
)
{
    return cc.CCSize;
},

/**
 * @method actionForCallbackChannel
 * @param {cc.CCBSequenceProperty} arg0
 * @return {cc.CCObject}
 */
actionForCallbackChannel : function (
ccbsequenceproperty 
)
{
    return cc.CCObject;
},

/**
 * @method getDocumentOutletNames
 * @return {cc.CCArray}
 */
getDocumentOutletNames : function (
)
{
    return cc.CCArray;
},

/**
 * @method addDocumentCallbackControlEvents
 * @param {unsigned int} arg0
 */
addDocumentCallbackControlEvents : function (
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
 * @method getKeyframeCallbacks
 * @return {cc.CCArray}
 */
getKeyframeCallbacks : function (
)
{
    return cc.CCArray;
},

/**
 * @method getDocumentCallbackControlEvents
 * @return {cc.CCArray}
 */
getDocumentCallbackControlEvents : function (
)
{
    return cc.CCArray;
},

/**
 * @method setRootContainerSize
 * @param {cc.CCSize} arg0
 */
setRootContainerSize : function (
ccsize 
)
{
},

/**
 * @method runAnimationsForSequenceIdTweenDuration
 * @param {int} arg0
 * @param {float} arg1
 */
runAnimationsForSequenceIdTweenDuration : function (
int, 
float 
)
{
},

/**
 * @method getRunningSequenceName
 * @return {char}
 */
getRunningSequenceName : function (
)
{
    return 0;
},

/**
 * @method getAutoPlaySequenceId
 * @return {int}
 */
getAutoPlaySequenceId : function (
)
{
    return 0;
},

/**
 * @method addDocumentCallbackName
 * @param {String} arg0
 */
addDocumentCallbackName : function (
str 
)
{
},

/**
 * @method getRootNode
 * @return {cc.CCNode}
 */
getRootNode : function (
)
{
    return cc.CCNode;
},

/**
 * @method addDocumentOutletNode
 * @param {cc.CCNode} arg0
 */
addDocumentOutletNode : function (
ccnode 
)
{
},

/**
 * @method setDelegate
 * @param {cc.CCBAnimationManagerDelegate} arg0
 */
setDelegate : function (
ccbanimationmanagerdelegate 
)
{
},

/**
 * @method addDocumentCallbackNode
 * @param {cc.CCNode} arg0
 */
addDocumentCallbackNode : function (
ccnode 
)
{
},

/**
 * @method getDelegate
 * @return {cc.CCBAnimationManagerDelegate}
 */
getDelegate : function (
)
{
    return cc.CCBAnimationManagerDelegate;
},

/**
 * @method runAnimationsForSequenceNamed
 * @param {char} arg0
 */
runAnimationsForSequenceNamed : function (
char 
)
{
},

/**
 * @method setCallFunc
 * @param {cc.CCCallFunc} arg0
 * @param {String} arg1
 */
setCallFunc : function (
cccallfunc, 
str 
)
{
},

/**
 * @method getDocumentCallbackNodes
 * @return {cc.CCArray}
 */
getDocumentCallbackNodes : function (
)
{
    return cc.CCArray;
},

/**
 * @method setSequences
 * @param {cc.CCArray} arg0
 */
setSequences : function (
ccarray 
)
{
},

/**
 * @method debug
 */
debug : function (
)
{
},

/**
 * @method getDocumentControllerName
 * @return {String}
 */
getDocumentControllerName : function (
)
{
    return ;
},

/**
 * @method CCBAnimationManager
 * @constructor
 */
CCBAnimationManager : function (
)
{
},

};

/**
 * @class CCControlHuePicker
 */
cc.ControlHuePicker = {

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
 * @method initWithTargetAndPos
 * @param {cc.CCNode} arg0
 * @param {cc.CCPoint} arg1
 * @return {bool}
 */
initWithTargetAndPos : function (
ccnode, 
ccpoint 
)
{
    return false;
},

/**
 * @method setHue
 * @param {float} arg0
 */
setHue : function (
float 
)
{
},

/**
 * @method getStartPos
 * @return {cc.CCPoint}
 */
getStartPos : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getHue
 * @return {float}
 */
getHue : function (
)
{
    return 0;
},

/**
 * @method getSlider
 * @return {cc.CCSprite}
 */
getSlider : function (
)
{
    return cc.CCSprite;
},

/**
 * @method setBackground
 * @param {cc.CCSprite} arg0
 */
setBackground : function (
ccsprite 
)
{
},

/**
 * @method setHuePercentage
 * @param {float} arg0
 */
setHuePercentage : function (
float 
)
{
},

/**
 * @method getBackground
 * @return {cc.CCSprite}
 */
getBackground : function (
)
{
    return cc.CCSprite;
},

/**
 * @method getHuePercentage
 * @return {float}
 */
getHuePercentage : function (
)
{
    return 0;
},

/**
 * @method setSlider
 * @param {cc.CCSprite} arg0
 */
setSlider : function (
ccsprite 
)
{
},

/**
 * @method create
 * @param {cc.CCNode} arg0
 * @param {cc.CCPoint} arg1
 * @return {cc.CCControlHuePicker}
 */
create : function (
ccnode, 
ccpoint 
)
{
    return cc.CCControlHuePicker;
},

/**
 * @method CCControlHuePicker
 * @constructor
 */
CCControlHuePicker : function (
)
{
},

};

/**
 * @class CCControlSaturationBrightnessPicker
 */
cc.ControlSaturationBrightnessPicker = {

/**
 * @method getShadow
 * @return {cc.CCSprite}
 */
getShadow : function (
)
{
    return cc.CCSprite;
},

/**
 * @method initWithTargetAndPos
 * @param {cc.CCNode} arg0
 * @param {cc.CCPoint} arg1
 * @return {bool}
 */
initWithTargetAndPos : function (
ccnode, 
ccpoint 
)
{
    return false;
},

/**
 * @method getStartPos
 * @return {cc.CCPoint}
 */
getStartPos : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getOverlay
 * @return {cc.CCSprite}
 */
getOverlay : function (
)
{
    return cc.CCSprite;
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
 * @method getSlider
 * @return {cc.CCSprite}
 */
getSlider : function (
)
{
    return cc.CCSprite;
},

/**
 * @method getBackground
 * @return {cc.CCSprite}
 */
getBackground : function (
)
{
    return cc.CCSprite;
},

/**
 * @method getSaturation
 * @return {float}
 */
getSaturation : function (
)
{
    return 0;
},

/**
 * @method getBrightness
 * @return {float}
 */
getBrightness : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {cc.CCNode} arg0
 * @param {cc.CCPoint} arg1
 * @return {cc.CCControlSaturationBrightnessPicker}
 */
create : function (
ccnode, 
ccpoint 
)
{
    return cc.CCControlSaturationBrightnessPicker;
},

/**
 * @method CCControlSaturationBrightnessPicker
 * @constructor
 */
CCControlSaturationBrightnessPicker : function (
)
{
},

};

/**
 * @class CCControlColourPicker
 */
cc.ControlColourPicker = {

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
 * @method getHuePicker
 * @return {cc.CCControlHuePicker}
 */
getHuePicker : function (
)
{
    return cc.CCControlHuePicker;
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
 * @method hueSliderValueChanged
 * @param {cc.CCObject} arg0
 * @param {unsigned int} arg1
 */
hueSliderValueChanged : function (
ccobject, 
int 
)
{
},

/**
 * @method getcolourPicker
 * @return {cc.CCControlSaturationBrightnessPicker}
 */
getcolourPicker : function (
)
{
    return cc.CCControlSaturationBrightnessPicker;
},

/**
 * @method setBackground
 * @param {cc.CCSprite} arg0
 */
setBackground : function (
ccsprite 
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
 * @method setcolourPicker
 * @param {cc.CCControlSaturationBrightnessPicker} arg0
 */
setcolourPicker : function (
cccontrolsaturationbrightnesspicker 
)
{
},

/**
 * @method colourSliderValueChanged
 * @param {cc.CCObject} arg0
 * @param {unsigned int} arg1
 */
colourSliderValueChanged : function (
ccobject, 
int 
)
{
},

/**
 * @method setHuePicker
 * @param {cc.CCControlHuePicker} arg0
 */
setHuePicker : function (
cccontrolhuepicker 
)
{
},

/**
 * @method getBackground
 * @return {cc.CCSprite}
 */
getBackground : function (
)
{
    return cc.CCSprite;
},

/**
 * @method create
 * @return {cc.CCControlColourPicker}
 */
create : function (
)
{
    return cc.CCControlColourPicker;
},

/**
 * @method CCControlColourPicker
 * @constructor
 */
CCControlColourPicker : function (
)
{
},

};

/**
 * @class CCControlPotentiometer
 */
cc.ControlPotentiometer = {

/**
 * @method setPreviousLocation
 * @param {cc.CCPoint} arg0
 */
setPreviousLocation : function (
ccpoint 
)
{
},

/**
 * @method setProgressTimer
 * @param {cc.CCProgressTimer} arg0
 */
setProgressTimer : function (
ccprogresstimer 
)
{
},

/**
 * @method potentiometerMoved
 * @param {cc.CCPoint} arg0
 */
potentiometerMoved : function (
ccpoint 
)
{
},

/**
 * @method getMinimumValue
 * @return {float}
 */
getMinimumValue : function (
)
{
    return 0;
},

/**
 * @method setThumbSprite
 * @param {cc.CCSprite} arg0
 */
setThumbSprite : function (
ccsprite 
)
{
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
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method setValue
 * @param {float} arg0
 */
setValue : function (
float 
)
{
},

/**
 * @method setMaximumValue
 * @param {float} arg0
 */
setMaximumValue : function (
float 
)
{
},

/**
 * @method setMinimumValue
 * @param {float} arg0
 */
setMinimumValue : function (
float 
)
{
},

/**
 * @method potentiometerEnded
 * @param {cc.CCPoint} arg0
 */
potentiometerEnded : function (
ccpoint 
)
{
},

/**
 * @method distanceBetweenPointAndPoint
 * @param {cc.CCPoint} arg0
 * @param {cc.CCPoint} arg1
 * @return {float}
 */
distanceBetweenPointAndPoint : function (
ccpoint, 
ccpoint 
)
{
    return 0;
},

/**
 * @method getProgressTimer
 * @return {cc.CCProgressTimer}
 */
getProgressTimer : function (
)
{
    return cc.CCProgressTimer;
},

/**
 * @method getMaximumValue
 * @return {float}
 */
getMaximumValue : function (
)
{
    return 0;
},

/**
 * @method angleInDegreesBetweenLineFromPoint_toPoint_toLineFromPoint_toPoint
 * @param {cc.CCPoint} arg0
 * @param {cc.CCPoint} arg1
 * @param {cc.CCPoint} arg2
 * @param {cc.CCPoint} arg3
 * @return {float}
 */
angleInDegreesBetweenLineFromPoint_toPoint_toLineFromPoint_toPoint : function (
ccpoint, 
ccpoint, 
ccpoint, 
ccpoint 
)
{
    return 0;
},

/**
 * @method isTouchInside
 * @param {cc.CCTouch} arg0
 * @return {bool}
 */
isTouchInside : function (
cctouch 
)
{
    return false;
},

/**
 * @method getValue
 * @return {float}
 */
getValue : function (
)
{
    return 0;
},

/**
 * @method potentiometerBegan
 * @param {cc.CCPoint} arg0
 */
potentiometerBegan : function (
ccpoint 
)
{
},

/**
 * @method getThumbSprite
 * @return {cc.CCSprite}
 */
getThumbSprite : function (
)
{
    return cc.CCSprite;
},

/**
 * @method initWithTrackSprite_ProgressTimer_ThumbSprite
 * @param {cc.CCSprite} arg0
 * @param {cc.CCProgressTimer} arg1
 * @param {cc.CCSprite} arg2
 * @return {bool}
 */
initWithTrackSprite_ProgressTimer_ThumbSprite : function (
ccsprite, 
ccprogresstimer, 
ccsprite 
)
{
    return false;
},

/**
 * @method create
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 * @return {cc.CCControlPotentiometer}
 */
create : function (
char, 
char, 
char 
)
{
    return cc.CCControlPotentiometer;
},

/**
 * @method CCControlPotentiometer
 * @constructor
 */
CCControlPotentiometer : function (
)
{
},

};

/**
 * @class CCControlSlider
 */
cc.ControlSlider = {

/**
 * @method locationFromTouch
 * @param {cc.CCTouch} arg0
 * @return {cc.CCPoint}
 */
locationFromTouch : function (
cctouch 
)
{
    return cc.CCPoint;
},

/**
 * @method setProgressSprite
 * @param {cc.CCSprite} arg0
 */
setProgressSprite : function (
ccsprite 
)
{
},

/**
 * @method getMaximumAllowedValue
 * @return {float}
 */
getMaximumAllowedValue : function (
)
{
    return 0;
},

/**
 * @method getMinimumAllowedValue
 * @return {float}
 */
getMinimumAllowedValue : function (
)
{
    return 0;
},

/**
 * @method getMinimumValue
 * @return {float}
 */
getMinimumValue : function (
)
{
    return 0;
},

/**
 * @method setThumbSprite
 * @param {cc.CCSprite} arg0
 */
setThumbSprite : function (
ccsprite 
)
{
},

/**
 * @method setMinimumValue
 * @param {float} arg0
 */
setMinimumValue : function (
float 
)
{
},

/**
 * @method setMinimumAllowedValue
 * @param {float} arg0
 */
setMinimumAllowedValue : function (
float 
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
 * @method setValue
 * @param {float} arg0
 */
setValue : function (
float 
)
{
},

/**
 * @method setMaximumValue
 * @param {float} arg0
 */
setMaximumValue : function (
float 
)
{
},

/**
 * @method needsLayout
 */
needsLayout : function (
)
{
},

/**
 * @method getBackgroundSprite
 * @return {cc.CCSprite}
 */
getBackgroundSprite : function (
)
{
    return cc.CCSprite;
},

/**
 * @method initWithSprites
 * @param {cc.CCSprite} arg0
 * @param {cc.CCSprite} arg1
 * @param {cc.CCSprite} arg2
 * @return {bool}
 */
initWithSprites : function (
ccsprite, 
ccsprite, 
ccsprite 
)
{
    return false;
},

/**
 * @method getMaximumValue
 * @return {float}
 */
getMaximumValue : function (
)
{
    return 0;
},

/**
 * @method isTouchInside
 * @param {cc.CCTouch} arg0
 * @return {bool}
 */
isTouchInside : function (
cctouch 
)
{
    return false;
},

/**
 * @method getValue
 * @return {float}
 */
getValue : function (
)
{
    return 0;
},

/**
 * @method getThumbSprite
 * @return {cc.CCSprite}
 */
getThumbSprite : function (
)
{
    return cc.CCSprite;
},

/**
 * @method getProgressSprite
 * @return {cc.CCSprite}
 */
getProgressSprite : function (
)
{
    return cc.CCSprite;
},

/**
 * @method setBackgroundSprite
 * @param {cc.CCSprite} arg0
 */
setBackgroundSprite : function (
ccsprite 
)
{
},

/**
 * @method setMaximumAllowedValue
 * @param {float} arg0
 */
setMaximumAllowedValue : function (
float 
)
{
},

/**
 * @method create
* @param {cc.CCSprite|char} ccsprite
* @param {cc.CCSprite|char} ccsprite
* @param {cc.CCSprite|char} ccsprite
* @return {cc.CCControlSlider|cc.CCControlSlider}
*/
create : function(
char,
char,
char 
)
{
    return cc.CCControlSlider;
},

/**
 * @method CCControlSlider
 * @constructor
 */
CCControlSlider : function (
)
{
},

};

/**
 * @class CCControlStepper
 */
cc.ControlStepper = {

/**
 * @method setMinusSprite
 * @param {cc.CCSprite} arg0
 */
setMinusSprite : function (
ccsprite 
)
{
},

/**
 * @method getMinusLabel
 * @return {cc.CCLabelTTF}
 */
getMinusLabel : function (
)
{
    return cc.CCLabelTTF;
},

/**
 * @method setWraps
 * @param {bool} arg0
 */
setWraps : function (
bool 
)
{
},

/**
 * @method isContinuous
 * @return {bool}
 */
isContinuous : function (
)
{
    return false;
},

/**
 * @method getMinusSprite
 * @return {cc.CCSprite}
 */
getMinusSprite : function (
)
{
    return cc.CCSprite;
},

/**
 * @method updateLayoutUsingTouchLocation
 * @param {cc.CCPoint} arg0
 */
updateLayoutUsingTouchLocation : function (
ccpoint 
)
{
},

/**
 * @method setValueWithSendingEvent
 * @param {double} arg0
 * @param {bool} arg1
 */
setValueWithSendingEvent : function (
double, 
bool 
)
{
},

/**
 * @method getPlusLabel
 * @return {cc.CCLabelTTF}
 */
getPlusLabel : function (
)
{
    return cc.CCLabelTTF;
},

/**
 * @method stopAutorepeat
 */
stopAutorepeat : function (
)
{
},

/**
 * @method setMaximumValue
 * @param {double} arg0
 */
setMaximumValue : function (
double 
)
{
},

/**
 * @method setPlusSprite
 * @param {cc.CCSprite} arg0
 */
setPlusSprite : function (
ccsprite 
)
{
},

/**
 * @method setMinusLabel
 * @param {cc.CCLabelTTF} arg0
 */
setMinusLabel : function (
cclabelttf 
)
{
},

/**
 * @method setValue
 * @param {double} arg0
 */
setValue : function (
double 
)
{
},

/**
 * @method setStepValue
 * @param {double} arg0
 */
setStepValue : function (
double 
)
{
},

/**
 * @method getPlusSprite
 * @return {cc.CCSprite}
 */
getPlusSprite : function (
)
{
    return cc.CCSprite;
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
 * @method setMinimumValue
 * @param {double} arg0
 */
setMinimumValue : function (
double 
)
{
},

/**
 * @method startAutorepeat
 */
startAutorepeat : function (
)
{
},

/**
 * @method initWithMinusSpriteAndPlusSprite
 * @param {cc.CCSprite} arg0
 * @param {cc.CCSprite} arg1
 * @return {bool}
 */
initWithMinusSpriteAndPlusSprite : function (
ccsprite, 
ccsprite 
)
{
    return false;
},

/**
 * @method getValue
 * @return {double}
 */
getValue : function (
)
{
    return 0;
},

/**
 * @method setPlusLabel
 * @param {cc.CCLabelTTF} arg0
 */
setPlusLabel : function (
cclabelttf 
)
{
},

/**
 * @method create
 * @param {cc.CCSprite} arg0
 * @param {cc.CCSprite} arg1
 * @return {cc.CCControlStepper}
 */
create : function (
ccsprite, 
ccsprite 
)
{
    return cc.CCControlStepper;
},

/**
 * @method CCControlStepper
 * @constructor
 */
CCControlStepper : function (
)
{
},

};

/**
 * @class CCControlSwitch
 */
cc.ControlSwitch = {

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
 * @method setOn
* @param {bool|bool} bool
* @param {bool} bool
*/
setOn : function(
bool,
bool 
)
{
},

/**
 * @method isOn
 * @return {bool}
 */
isOn : function (
)
{
    return false;
},

/**
 * @method initWithMaskSprite
* @param {cc.CCSprite|cc.CCSprite} ccsprite
* @param {cc.CCSprite|cc.CCSprite} ccsprite
* @param {cc.CCSprite|cc.CCSprite} ccsprite
* @param {cc.CCSprite|cc.CCSprite} ccsprite
* @param {cc.CCLabelTTF} cclabelttf
* @param {cc.CCLabelTTF} cclabelttf
* @return {bool|bool}
*/
initWithMaskSprite : function(
ccsprite,
ccsprite,
ccsprite,
ccsprite,
cclabelttf,
cclabelttf 
)
{
    return false;
},

/**
 * @method hasMoved
 * @return {bool}
 */
hasMoved : function (
)
{
    return false;
},

/**
 * @method locationFromTouch
 * @param {cc.CCTouch} arg0
 * @return {cc.CCPoint}
 */
locationFromTouch : function (
cctouch 
)
{
    return cc.CCPoint;
},

/**
 * @method create
* @param {cc.CCSprite|cc.CCSprite} ccsprite
* @param {cc.CCSprite|cc.CCSprite} ccsprite
* @param {cc.CCSprite|cc.CCSprite} ccsprite
* @param {cc.CCSprite|cc.CCSprite} ccsprite
* @param {cc.CCLabelTTF} cclabelttf
* @param {cc.CCLabelTTF} cclabelttf
* @return {cc.CCControlSwitch|cc.CCControlSwitch}
*/
create : function(
ccsprite,
ccsprite,
ccsprite,
ccsprite,
cclabelttf,
cclabelttf 
)
{
    return cc.CCControlSwitch;
},

/**
 * @method CCControlSwitch
 * @constructor
 */
CCControlSwitch : function (
)
{
},

};

/**
 * @class CCTableViewCell
 */
cc.TableViewCell = {

/**
 * @method reset
 */
reset : function (
)
{
},

/**
 * @method setIdx
 * @param {unsigned int} arg0
 */
setIdx : function (
int 
)
{
},

/**
 * @method setObjectID
 * @param {unsigned int} arg0
 */
setObjectID : function (
int 
)
{
},

/**
 * @method getObjectID
 * @return {unsigned int}
 */
getObjectID : function (
)
{
    return 0;
},

/**
 * @method getIdx
 * @return {unsigned int}
 */
getIdx : function (
)
{
    return 0;
},

/**
 * @method CCTableViewCell
 * @constructor
 */
CCTableViewCell : function (
)
{
},

};

/**
 * @class CCTableView
 */
cc.TableView = {

/**
 * @method setVerticalFillOrder
 * @param {cc.CCTableViewVerticalFillOrder} arg0
 */
setVerticalFillOrder : function (
cctableviewverticalfillorder 
)
{
},

/**
 * @method scrollViewDidScroll
 * @param {cc.CCScrollView} arg0
 */
scrollViewDidScroll : function (
ccscrollview 
)
{
},

/**
 * @method updateCellAtIndex
 * @param {unsigned int} arg0
 */
updateCellAtIndex : function (
int 
)
{
},

/**
 * @method initWithViewSize
 * @param {cc.CCSize} arg0
 * @param {cc.CCNode} arg1
 * @return {bool}
 */
initWithViewSize : function (
ccsize, 
ccnode 
)
{
    return false;
},

/**
 * @method removeCellAtIndex
 * @param {unsigned int} arg0
 */
removeCellAtIndex : function (
int 
)
{
},

/**
 * @method reloadData
 */
reloadData : function (
)
{
},

/**
 * @method dequeueCell
 * @return {cc.CCTableViewCell}
 */
dequeueCell : function (
)
{
    return cc.CCTableViewCell;
},

/**
 * @method getVerticalFillOrder
 * @return {cc.CCTableViewVerticalFillOrder}
 */
getVerticalFillOrder : function (
)
{
    return 0;
},

/**
 * @method scrollViewDidZoom
 * @param {cc.CCScrollView} arg0
 */
scrollViewDidZoom : function (
ccscrollview 
)
{
},

/**
 * @method insertCellAtIndex
 * @param {unsigned int} arg0
 */
insertCellAtIndex : function (
int 
)
{
},

/**
 * @method cellAtIndex
 * @param {unsigned int} arg0
 * @return {cc.CCTableViewCell}
 */
cellAtIndex : function (
int 
)
{
    return cc.CCTableViewCell;
},

/**
 * @method _updateContentSize
 */
_updateContentSize : function (
)
{
},

/**
 * @method CCTableView
 * @constructor
 */
CCTableView : function (
)
{
},

};

/**
 * @class CCEditBox
 */
cc.EditBox = {

/**
 * @method setAnchorPoint
 * @param {cc.CCPoint} arg0
 */
setAnchorPoint : function (
ccpoint 
)
{
},

/**
 * @method getText
 * @return {char}
 */
getText : function (
)
{
    return 0;
},

/**
 * @method setPlaceholderFontName
 * @param {char} arg0
 */
setPlaceholderFontName : function (
char 
)
{
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
 * @method setFontName
 * @param {char} arg0
 */
setFontName : function (
char 
)
{
},

/**
 * @method setPlaceholderFontSize
 * @param {int} arg0
 */
setPlaceholderFontSize : function (
int 
)
{
},

/**
 * @method setInputMode
 * @param {cc.EditBoxInputMode} arg0
 */
setInputMode : function (
editboxinputmode 
)
{
},

/**
 * @method setPlaceholderFontColor
 * @param {cc._ccColor3B} arg0
 */
setPlaceholderFontColor : function (
_cccolor3b 
)
{
},

/**
 * @method setFontColor
 * @param {cc._ccColor3B} arg0
 */
setFontColor : function (
_cccolor3b 
)
{
},

/**
 * @method setPlaceholderFont
 * @param {char} arg0
 * @param {int} arg1
 */
setPlaceholderFont : function (
char, 
int 
)
{
},

/**
 * @method setFontSize
 * @param {int} arg0
 */
setFontSize : function (
int 
)
{
},

/**
 * @method initWithSizeAndBackgroundSprite
 * @param {cc.CCSize} arg0
 * @param {cc.CCScale9Sprite} arg1
 * @return {bool}
 */
initWithSizeAndBackgroundSprite : function (
ccsize, 
ccscale9sprite 
)
{
    return false;
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
 * @method setReturnType
 * @param {cc.KeyboardReturnType} arg0
 */
setReturnType : function (
keyboardreturntype 
)
{
},

/**
 * @method setInputFlag
 * @param {cc.EditBoxInputFlag} arg0
 */
setInputFlag : function (
editboxinputflag 
)
{
},

/**
 * @method getMaxLength
 * @return {int}
 */
getMaxLength : function (
)
{
    return 0;
},

/**
 * @method setText
 * @param {char} arg0
 */
setText : function (
char 
)
{
},

/**
 * @method setMaxLength
 * @param {int} arg0
 */
setMaxLength : function (
int 
)
{
},

/**
 * @method setFont
 * @param {char} arg0
 * @param {int} arg1
 */
setFont : function (
char, 
int 
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
 * @param {cc.CCSize} arg0
 * @param {cc.CCScale9Sprite} arg1
 * @param {cc.CCScale9Sprite} arg2
 * @param {cc.CCScale9Sprite} arg3
 * @return {cc.CCEditBox}
 */
create : function (
ccsize, 
ccscale9sprite, 
ccscale9sprite, 
ccscale9sprite 
)
{
    return cc.CCEditBox;
},

/**
 * @method CCEditBox
 * @constructor
 */
CCEditBox : function (
)
{
},

};

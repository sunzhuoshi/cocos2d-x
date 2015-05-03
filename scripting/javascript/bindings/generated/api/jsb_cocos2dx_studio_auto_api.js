/**
 * @module cocos2dx_studio
 */
var ccs = ccs || {};

/**
 * @class CCBaseData
 */
ccs.BaseData = {

/**
 * @method getColor
 * @return {cc._ccColor4B}
 */
getColor : function (
)
{
    return cc._ccColor4B;
},

/**
 * @method setColor
 * @param {cc._ccColor4B} arg0
 */
setColor : function (
_cccolor4b 
)
{
},

/**
 * @method create
 * @return {cc.CCBaseData}
 */
create : function (
)
{
    return cc.CCBaseData;
},

/**
 * @method CCBaseData
 * @constructor
 */
CCBaseData : function (
)
{
},

};

/**
 * @class CCTween
 */
ccs.Tween = {

/**
 * @method play
 * @param {cc.CCMovementBoneData} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @param {int} arg4
 */
play : function (
ccmovementbonedata, 
int, 
int, 
int, 
int 
)
{
},

/**
 * @method gotoAndPause
 * @param {int} arg0
 */
gotoAndPause : function (
int 
)
{
},

/**
 * @method getAnimation
 * @return {cc.CCArmatureAnimation}
 */
getAnimation : function (
)
{
    return cc.CCArmatureAnimation;
},

/**
 * @method gotoAndPlay
 * @param {int} arg0
 */
gotoAndPlay : function (
int 
)
{
},

/**
 * @method init
 * @param {cc.CCBone} arg0
 * @return {bool}
 */
init : function (
ccbone 
)
{
    return false;
},

/**
 * @method setAnimation
 * @param {cc.CCArmatureAnimation} arg0
 */
setAnimation : function (
ccarmatureanimation 
)
{
},

/**
 * @method create
 * @param {cc.CCBone} arg0
 * @return {cc.CCTween}
 */
create : function (
ccbone 
)
{
    return cc.CCTween;
},

/**
 * @method CCTween
 * @constructor
 */
CCTween : function (
)
{
},

};

/**
 * @class CCColliderFilter
 */
ccs.ColliderFilter = {

};

/**
 * @class ColliderBody
 */
ccs.ColliderBody = {

};

/**
 * @class CCDisplayManager
 */
ccs.DisplayManager = {

/**
 * @method getDisplayRenderNode
 * @return {cc.CCNode}
 */
getDisplayRenderNode : function (
)
{
    return cc.CCNode;
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
 * @method getDisplayRenderNodeType
 * @return {cc.DisplayType}
 */
getDisplayRenderNodeType : function (
)
{
    return 0;
},

/**
 * @method removeDisplay
 * @param {int} arg0
 */
removeDisplay : function (
int 
)
{
},

/**
 * @method setForceChangeDisplay
 * @param {bool} arg0
 */
setForceChangeDisplay : function (
bool 
)
{
},

/**
 * @method init
 * @param {cc.CCBone} arg0
 * @return {bool}
 */
init : function (
ccbone 
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
 * @method getBoundingBox
 * @return {cc.CCRect}
 */
getBoundingBox : function (
)
{
    return cc.CCRect;
},

/**
 * @method addDisplay
* @param {cc.CCNode|cc.CCDisplayData} ccnode
* @param {int|int} int
*/
addDisplay : function(
ccdisplaydata,
int 
)
{
},

/**
 * @method containPoint
* @param {float|cc.CCPoint} float
* @param {float} float
* @return {bool|bool}
*/
containPoint : function(
float,
float 
)
{
    return false;
},

/**
 * @method changeDisplayWithIndex
 * @param {int} arg0
 * @param {bool} arg1
 */
changeDisplayWithIndex : function (
int, 
bool 
)
{
},

/**
 * @method changeDisplayWithName
 * @param {char} arg0
 * @param {bool} arg1
 */
changeDisplayWithName : function (
char, 
bool 
)
{
},

/**
 * @method getCurrentDisplayIndex
 * @return {int}
 */
getCurrentDisplayIndex : function (
)
{
    return 0;
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
 * @method getAnchorPoint
 * @return {cc.CCPoint}
 */
getAnchorPoint : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getDecorativeDisplayList
 * @return {cc.CCArray}
 */
getDecorativeDisplayList : function (
)
{
    return cc.CCArray;
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
 * @method getForceChangeDisplay
 * @return {bool}
 */
getForceChangeDisplay : function (
)
{
    return false;
},

/**
 * @method create
 * @param {cc.CCBone} arg0
 * @return {cc.CCDisplayManager}
 */
create : function (
ccbone 
)
{
    return cc.CCDisplayManager;
},

/**
 * @method CCDisplayManager
 * @constructor
 */
CCDisplayManager : function (
)
{
},

};

/**
 * @class CCBone
 */
ccs.Bone = {

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
 * @method isTransformDirty
 * @return {bool}
 */
isTransformDirty : function (
)
{
    return false;
},

/**
 * @method updateZOrder
 */
updateZOrder : function (
)
{
},

/**
 * @method setTransformDirty
 * @param {bool} arg0
 */
setTransformDirty : function (
bool 
)
{
},

/**
 * @method getDisplayRenderNode
 * @return {cc.CCNode}
 */
getDisplayRenderNode : function (
)
{
    return cc.CCNode;
},

/**
 * @method isBlendDirty
 * @return {bool}
 */
isBlendDirty : function (
)
{
    return false;
},

/**
 * @method addChildBone
 * @param {cc.CCBone} arg0
 */
addChildBone : function (
ccbone 
)
{
},

/**
 * @method getWorldInfo
 * @return {cc.CCBaseData}
 */
getWorldInfo : function (
)
{
    return cc.CCBaseData;
},

/**
 * @method getTween
 * @return {cc.CCTween}
 */
getTween : function (
)
{
    return cc.CCTween;
},

/**
 * @method getParentBone
 * @return {cc.CCBone}
 */
getParentBone : function (
)
{
    return cc.CCBone;
},

/**
 * @method updateColor
 */
updateColor : function (
)
{
},

/**
 * @method setChildArmature
 * @param {cc.CCArmature} arg0
 */
setChildArmature : function (
ccarmature 
)
{
},

/**
 * @method getName
 * @return {String}
 */
getName : function (
)
{
    return ;
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
 * @method getDisplayRenderNodeType
 * @return {cc.DisplayType}
 */
getDisplayRenderNodeType : function (
)
{
    return 0;
},

/**
 * @method removeDisplay
 * @param {int} arg0
 */
removeDisplay : function (
int 
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
* @param {char} char
* @return {bool|bool}
*/
init : function(
char 
)
{
    return false;
},

/**
 * @method setParentBone
 * @param {cc.CCBone} arg0
 */
setParentBone : function (
ccbone 
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
 * @method getIgnoreMovementBoneData
 * @return {bool}
 */
getIgnoreMovementBoneData : function (
)
{
    return false;
},

/**
 * @method setIgnoreMovementBoneData
 * @param {bool} arg0
 */
setIgnoreMovementBoneData : function (
bool 
)
{
},

/**
 * @method setName
 * @param {String} arg0
 */
setName : function (
str 
)
{
},

/**
 * @method removeFromParent
 * @param {bool} arg0
 */
removeFromParent : function (
bool 
)
{
},

/**
 * @method getChildArmature
 * @return {cc.CCArmature}
 */
getChildArmature : function (
)
{
    return cc.CCArmature;
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
 * @method setDisplayManager
 * @param {cc.CCDisplayManager} arg0
 */
setDisplayManager : function (
ccdisplaymanager 
)
{
},

/**
 * @method changeDisplayWithIndex
 * @param {int} arg0
 * @param {bool} arg1
 */
changeDisplayWithIndex : function (
int, 
bool 
)
{
},

/**
 * @method changeDisplayWithName
 * @param {char} arg0
 * @param {bool} arg1
 */
changeDisplayWithName : function (
char, 
bool 
)
{
},

/**
 * @method getColliderBodyList
 * @return {cc.CCArray}
 */
getColliderBodyList : function (
)
{
    return cc.CCArray;
},

/**
 * @method setArmature
 * @param {cc.CCArmature} arg0
 */
setArmature : function (
ccarmature 
)
{
},

/**
 * @method setBlendDirty
 * @param {bool} arg0
 */
setBlendDirty : function (
bool 
)
{
},

/**
 * @method addDisplay
* @param {cc.CCNode|cc.CCDisplayData} ccnode
* @param {int|int} int
*/
addDisplay : function(
ccdisplaydata,
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
 * @method removeChildBone
 * @param {cc.CCBone} arg0
 * @param {bool} arg1
 */
removeChildBone : function (
ccbone, 
bool 
)
{
},

/**
 * @method getDisplayManager
 * @return {cc.CCDisplayManager}
 */
getDisplayManager : function (
)
{
    return cc.CCDisplayManager;
},

/**
 * @method getArmature
 * @return {cc.CCArmature}
 */
getArmature : function (
)
{
    return cc.CCArmature;
},

/**
 * @method nodeToArmatureTransform
 * @return {cc.CCAffineTransform}
 */
nodeToArmatureTransform : function (
)
{
    return cc.CCAffineTransform;
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
 * @method create
* @param {char} char
* @return {cc.CCBone|cc.CCBone}
*/
create : function(
char 
)
{
    return cc.CCBone;
},

/**
 * @method CCBone
 * @constructor
 */
CCBone : function (
)
{
},

};

/**
 * @class CCBatchNode
 */
ccs.BatchNode = {

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
 * @method getTexureAtlasWithTexture
 * @param {cc.CCTexture2D} arg0
 * @return {cc.CCTextureAtlas}
 */
getTexureAtlasWithTexture : function (
cctexture2d 
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
 * @method create
 * @return {cc.CCBatchNode}
 */
create : function (
)
{
    return cc.CCBatchNode;
},

};

/**
 * @class CCArmatureAnimation
 */
ccs.ArmatureAnimation = {

/**
 * @method setScriptObjectDict
 * @param {cc.CCDictionary} arg0
 */
setScriptObjectDict : function (
ccdictionary 
)
{
},

/**
 * @method getSpeedScale
 * @return {float}
 */
getSpeedScale : function (
)
{
    return 0;
},

/**
 * @method pause
 */
pause : function (
)
{
},

/**
 * @method setSpeedScale
 * @param {float} arg0
 */
setSpeedScale : function (
float 
)
{
},

/**
 * @method init
 * @param {cc.CCArmature} arg0
 * @return {bool}
 */
init : function (
ccarmature 
)
{
    return false;
},

/**
 * @method play
 * @param {char} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @param {int} arg4
 */
play : function (
char, 
int, 
int, 
int, 
int 
)
{
},

/**
 * @method gotoAndPause
 * @param {int} arg0
 */
gotoAndPause : function (
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
 * @method getAnimationData
 * @return {cc.CCAnimationData}
 */
getAnimationData : function (
)
{
    return cc.CCAnimationData;
},

/**
 * @method getScriptObjectDict
 * @return {cc.CCDictionary}
 */
getScriptObjectDict : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method playWithArray
 * @param {cc.CCArray} arg0
 * @param {int} arg1
 * @param {bool} arg2
 */
playWithArray : function (
ccarray, 
int, 
bool 
)
{
},

/**
 * @method playWithIndexArray
 * @param {cc.CCArray} arg0
 * @param {int} arg1
 * @param {bool} arg2
 */
playWithIndexArray : function (
ccarray, 
int, 
bool 
)
{
},

/**
 * @method playWithIndex
 * @param {int} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @param {int} arg4
 */
playWithIndex : function (
int, 
int, 
int, 
int, 
int 
)
{
},

/**
 * @method getCurrentMovementID
 * @return {String}
 */
getCurrentMovementID : function (
)
{
    return ;
},

/**
 * @method setAnimationData
 * @param {cc.CCAnimationData} arg0
 */
setAnimationData : function (
ccanimationdata 
)
{
},

/**
 * @method gotoAndPlay
 * @param {int} arg0
 */
gotoAndPlay : function (
int 
)
{
},

/**
 * @method getMovementCount
 * @return {int}
 */
getMovementCount : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {cc.CCArmature} arg0
 * @return {cc.CCArmatureAnimation}
 */
create : function (
ccarmature 
)
{
    return cc.CCArmatureAnimation;
},

/**
 * @method CCArmatureAnimation
 * @constructor
 */
CCArmatureAnimation : function (
)
{
},

};

/**
 * @class CCArmature
 */
ccs.Armature = {

/**
 * @method getBone
 * @param {char} arg0
 * @return {cc.CCBone}
 */
getBone : function (
char 
)
{
    return cc.CCBone;
},

/**
 * @method changeBoneParent
 * @param {cc.CCBone} arg0
 * @param {char} arg1
 */
changeBoneParent : function (
ccbone, 
char 
)
{
},

/**
 * @method getTexureAtlasWithTexture
 * @param {cc.CCTexture2D} arg0
 * @return {cc.CCTextureAtlas}
 */
getTexureAtlasWithTexture : function (
cctexture2d 
)
{
    return cc.CCTextureAtlas;
},

/**
 * @method setAnimation
 * @param {cc.CCArmatureAnimation} arg0
 */
setAnimation : function (
ccarmatureanimation 
)
{
},

/**
 * @method getBoneAtPoint
 * @param {float} arg0
 * @param {float} arg1
 * @return {cc.CCBone}
 */
getBoneAtPoint : function (
float, 
float 
)
{
    return cc.CCBone;
},

/**
 * @method getBatchNode
 * @return {cc.CCBatchNode}
 */
getBatchNode : function (
)
{
    return cc.CCBatchNode;
},

/**
 * @method setVersion
 * @param {float} arg0
 */
setVersion : function (
float 
)
{
},

/**
 * @method updateOffsetPoint
 */
updateOffsetPoint : function (
)
{
},

/**
 * @method getParentBone
 * @return {cc.CCBone}
 */
getParentBone : function (
)
{
    return cc.CCBone;
},

/**
 * @method setName
 * @param {String} arg0
 */
setName : function (
str 
)
{
},

/**
 * @method removeBone
 * @param {cc.CCBone} arg0
 * @param {bool} arg1
 */
removeBone : function (
ccbone, 
bool 
)
{
},

/**
 * @method getArmatureTransformDirty
 * @return {bool}
 */
getArmatureTransformDirty : function (
)
{
    return false;
},

/**
 * @method getName
 * @return {String}
 */
getName : function (
)
{
    return ;
},

/**
 * @method init
* @param {char|char} char
* @param {cc.CCBone} ccbone
* @return {bool|bool|bool}
*/
init : function(
char,
ccbone 
)
{
    return false;
},

/**
 * @method setParentBone
 * @param {cc.CCBone} arg0
 */
setParentBone : function (
ccbone 
)
{
},

/**
 * @method drawContour
 */
drawContour : function (
)
{
},

/**
 * @method setBatchNode
 * @param {cc.CCBatchNode} arg0
 */
setBatchNode : function (
ccbatchnode 
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
 * @method nodeToParentTransform
 * @return {cc.CCAffineTransform}
 */
nodeToParentTransform : function (
)
{
    return cc.CCAffineTransform;
},

/**
 * @method setArmatureData
 * @param {cc.CCArmatureData} arg0
 */
setArmatureData : function (
ccarmaturedata 
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
 * @method addBone
 * @param {cc.CCBone} arg0
 * @param {char} arg1
 */
addBone : function (
ccbone, 
char 
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
 * @method getArmatureData
 * @return {cc.CCArmatureData}
 */
getArmatureData : function (
)
{
    return cc.CCArmatureData;
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
 * @method getVersion
 * @return {float}
 */
getVersion : function (
)
{
    return 0;
},

/**
 * @method getAnimation
 * @return {cc.CCArmatureAnimation}
 */
getAnimation : function (
)
{
    return cc.CCArmatureAnimation;
},

/**
 * @method getBoneDic
 * @return {cc.CCDictionary}
 */
getBoneDic : function (
)
{
    return cc.CCDictionary;
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
 * @method create
* @param {char|char} char
* @param {cc.CCBone} ccbone
* @return {cc.CCArmature|cc.CCArmature|cc.CCArmature}
*/
create : function(
char,
ccbone 
)
{
    return cc.CCArmature;
},

/**
 * @method CCArmature
 * @constructor
 */
CCArmature : function (
)
{
},

};

/**
 * @class CCSkin
 */
ccs.Skin = {

/**
 * @method getBone
 * @return {cc.CCBone}
 */
getBone : function (
)
{
    return cc.CCBone;
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
 * @method nodeToWorldTransformAR
 * @return {cc.CCAffineTransform}
 */
nodeToWorldTransformAR : function (
)
{
    return cc.CCAffineTransform;
},

/**
 * @method updateTransform
 */
updateTransform : function (
)
{
},

/**
 * @method getDisplayName
 * @return {String}
 */
getDisplayName : function (
)
{
    return ;
},

/**
 * @method updateArmatureTransform
 */
updateArmatureTransform : function (
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
 * @method setBone
 * @param {cc.CCBone} arg0
 */
setBone : function (
ccbone 
)
{
},

/**
 * @method create
* @param {char} char
* @return {cc.CCSkin|cc.CCSkin}
*/
create : function(
char 
)
{
    return cc.CCSkin;
},

/**
 * @method createWithSpriteFrameName
 * @param {char} arg0
 * @return {cc.CCSkin}
 */
createWithSpriteFrameName : function (
char 
)
{
    return cc.CCSkin;
},

/**
 * @method CCSkin
 * @constructor
 */
CCSkin : function (
)
{
},

};

/**
 * @class CCArmatureDataManager
 */
ccs.ArmatureDataManager = {

/**
 * @method addArmatureFileInfo
* @param {char|char} char
* @param {char} char
* @param {char} char
*/
addArmatureFileInfo : function(
char,
char,
char 
)
{
},

/**
 * @method removeArmatureFileInfo
 * @param {char} arg0
 */
removeArmatureFileInfo : function (
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
 * @method isAutoLoadSpriteFile
 * @return {bool}
 */
isAutoLoadSpriteFile : function (
)
{
    return false;
},

/**
 * @method addSpriteFrameFromFile
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 */
addSpriteFrameFromFile : function (
char, 
char, 
char 
)
{
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method getInstance
 * @return {cc.CCArmatureDataManager}
 */
getInstance : function (
)
{
    return cc.CCArmatureDataManager;
},

};

/**
 * @class CCComAttribute
 */
ccs.ComAttribute = {

/**
 * @method getFloat
 * @param {char} arg0
 * @param {float} arg1
 * @return {float}
 */
getFloat : function (
char, 
float 
)
{
    return 0;
},

/**
 * @method getBool
 * @param {char} arg0
 * @param {bool} arg1
 * @return {bool}
 */
getBool : function (
char, 
bool 
)
{
    return false;
},

/**
 * @method setFloat
 * @param {char} arg0
 * @param {float} arg1
 */
setFloat : function (
char, 
float 
)
{
},

/**
 * @method setCString
 * @param {char} arg0
 * @param {char} arg1
 */
setCString : function (
char, 
char 
)
{
},

/**
 * @method getCString
 * @param {char} arg0
 * @param {char} arg1
 * @return {char}
 */
getCString : function (
char, 
char 
)
{
    return 0;
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
 * @method setInt
 * @param {char} arg0
 * @param {int} arg1
 */
setInt : function (
char, 
int 
)
{
},

/**
 * @method parse
 * @param {String} arg0
 * @return {bool}
 */
parse : function (
str 
)
{
    return false;
},

/**
 * @method getInt
 * @param {char} arg0
 * @param {int} arg1
 * @return {int}
 */
getInt : function (
char, 
int 
)
{
    return 0;
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
 * @method setBool
 * @param {char} arg0
 * @param {bool} arg1
 */
setBool : function (
char, 
bool 
)
{
},

/**
 * @method create
 * @return {cc.CCComAttribute}
 */
create : function (
)
{
    return cc.CCComAttribute;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

};

/**
 * @class CCComAudio
 */
ccs.ComAudio = {

/**
 * @method stopAllEffects
 */
stopAllEffects : function (
)
{
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
 * @method getEffectsVolume
 * @return {float}
 */
getEffectsVolume : function (
)
{
    return 0;
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
 * @method getBackgroundMusicVolume
 * @return {float}
 */
getBackgroundMusicVolume : function (
)
{
    return 0;
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
 * @method setBackgroundMusicVolume
 * @param {float} arg0
 */
setBackgroundMusicVolume : function (
float 
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
 * @method isEnabled
 * @return {bool}
 */
isEnabled : function (
)
{
    return false;
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
 * @method pauseBackgroundMusic
 */
pauseBackgroundMusic : function (
)
{
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
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method isLoop
 * @return {bool}
 */
isLoop : function (
)
{
    return false;
},

/**
 * @method pauseAllEffects
 */
pauseAllEffects : function (
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
 * @method preloadBackgroundMusic
 * @param {char} arg0
 */
preloadBackgroundMusic : function (
char 
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
 * @method playEffect
* @param {char|char} char
* @param {bool} bool
* @return {unsigned int|unsigned int|unsigned int}
*/
playEffect : function(
char,
bool 
)
{
    return 0;
},

/**
 * @method resumeAllEffects
 */
resumeAllEffects : function (
)
{
},

/**
 * @method setLoop
 * @param {bool} arg0
 */
setLoop : function (
bool 
)
{
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
 * @method rewindBackgroundMusic
 */
rewindBackgroundMusic : function (
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
 * @method pauseEffect
 * @param {unsigned int} arg0
 */
pauseEffect : function (
int 
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
 * @method setFile
 * @param {char} arg0
 */
setFile : function (
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
 * @method getFile
 * @return {char}
 */
getFile : function (
)
{
    return 0;
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
 * @method create
 * @return {cc.CCComAudio}
 */
create : function (
)
{
    return cc.CCComAudio;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

};

/**
 * @class CCInputDelegate
 */
ccs.InputDelegate = {

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
 * @method setKeypadEnabled
 * @param {bool} arg0
 */
setKeypadEnabled : function (
bool 
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
 * @method isKeypadEnabled
 * @return {bool}
 */
isKeypadEnabled : function (
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
 * @method setTouchEnabled
 * @param {bool} arg0
 */
setTouchEnabled : function (
bool 
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

};

/**
 * @class CCComController
 */
ccs.ComController = {

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
 * @method isEnabled
 * @return {bool}
 */
isEnabled : function (
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
 * @return {cc.CCComController}
 */
create : function (
)
{
    return cc.CCComController;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method CCComController
 * @constructor
 */
CCComController : function (
)
{
},

};

/**
 * @class CCComRender
 */
ccs.ComRender = {

/**
 * @method setNode
 * @param {cc.CCNode} arg0
 */
setNode : function (
ccnode 
)
{
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
 * @method getNode
 * @return {cc.CCNode}
 */
getNode : function (
)
{
    return cc.CCNode;
},

/**
 * @method create
* @param {cc.CCNode} ccnode
* @param {char} char
* @return {cc.CCComRender|cc.CCComRender}
*/
create : function(
ccnode,
char 
)
{
    return cc.CCComRender;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

};

/**
 * @class LayoutParameter
 */
ccs.LayoutParameter = {

/**
 * @method clone
 * @return {ccui.LayoutParameter}
 */
clone : function (
)
{
    return ccui.LayoutParameter;
},

/**
 * @method getLayoutType
 * @return {ccui.LayoutParameterType}
 */
getLayoutType : function (
)
{
    return 0;
},

/**
 * @method createCloneInstance
 * @return {ccui.LayoutParameter}
 */
createCloneInstance : function (
)
{
    return ccui.LayoutParameter;
},

/**
 * @method copyProperties
 * @param {ccui.LayoutParameter} arg0
 */
copyProperties : function (
layoutparameter 
)
{
},

/**
 * @method create
 * @return {ccui.LayoutParameter}
 */
create : function (
)
{
    return ccui.LayoutParameter;
},

/**
 * @method LayoutParameter
 * @constructor
 */
LayoutParameter : function (
)
{
},

};

/**
 * @class LinearLayoutParameter
 */
ccs.LinearLayoutParameter = {

/**
 * @method setGravity
 * @param {ccui.LinearGravity} arg0
 */
setGravity : function (
lineargravity 
)
{
},

/**
 * @method createCloneInstance
 * @return {ccui.LayoutParameter}
 */
createCloneInstance : function (
)
{
    return ccui.LayoutParameter;
},

/**
 * @method copyProperties
 * @param {ccui.LayoutParameter} arg0
 */
copyProperties : function (
layoutparameter 
)
{
},

/**
 * @method getGravity
 * @return {ccui.LinearGravity}
 */
getGravity : function (
)
{
    return 0;
},

/**
 * @method create
 * @return {ccui.LinearLayoutParameter}
 */
create : function (
)
{
    return ccui.LinearLayoutParameter;
},

/**
 * @method LinearLayoutParameter
 * @constructor
 */
LinearLayoutParameter : function (
)
{
},

};

/**
 * @class RelativeLayoutParameter
 */
ccs.RelativeLayoutParameter = {

/**
 * @method setAlign
 * @param {ccui.RelativeAlign} arg0
 */
setAlign : function (
relativealign 
)
{
},

/**
 * @method copyProperties
 * @param {ccui.LayoutParameter} arg0
 */
copyProperties : function (
layoutparameter 
)
{
},

/**
 * @method setRelativeToWidgetName
 * @param {char} arg0
 */
setRelativeToWidgetName : function (
char 
)
{
},

/**
 * @method getRelativeName
 * @return {char}
 */
getRelativeName : function (
)
{
    return 0;
},

/**
 * @method getRelativeToWidgetName
 * @return {char}
 */
getRelativeToWidgetName : function (
)
{
    return 0;
},

/**
 * @method setRelativeName
 * @param {char} arg0
 */
setRelativeName : function (
char 
)
{
},

/**
 * @method getAlign
 * @return {ccui.RelativeAlign}
 */
getAlign : function (
)
{
    return 0;
},

/**
 * @method createCloneInstance
 * @return {ccui.LayoutParameter}
 */
createCloneInstance : function (
)
{
    return ccui.LayoutParameter;
},

/**
 * @method create
 * @return {ccui.RelativeLayoutParameter}
 */
create : function (
)
{
    return ccui.RelativeLayoutParameter;
},

/**
 * @method RelativeLayoutParameter
 * @constructor
 */
RelativeLayoutParameter : function (
)
{
},

};

/**
 * @class Widget
 */
ccs.Widget = {

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
 * @method setSizePercent
 * @param {cc.CCPoint} arg0
 */
setSizePercent : function (
ccpoint 
)
{
},

/**
 * @method updateSizeAndPosition
* @param {cc.CCSize} ccsize
*/
updateSizeAndPosition : function(
ccsize 
)
{
},

/**
 * @method getCustomSize
 * @return {cc.CCSize}
 */
getCustomSize : function (
)
{
    return cc.CCSize;
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
 * @method setActionTag
 * @param {int} arg0
 */
setActionTag : function (
int 
)
{
},

/**
 * @method setScriptObjectDict
 * @param {cc.CCDictionary} arg0
 */
setScriptObjectDict : function (
ccdictionary 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method getLeftInParent
 * @return {float}
 */
getLeftInParent : function (
)
{
    return 0;
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
 * @method getTouchEndPos
 * @return {cc.CCPoint}
 */
getTouchEndPos : function (
)
{
    return cc.CCPoint;
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
 * @method getNodes
 * @return {cc.CCArray}
 */
getNodes : function (
)
{
    return cc.CCArray;
},

/**
 * @method getLayoutSize
 * @return {cc.CCSize}
 */
getLayoutSize : function (
)
{
    return cc.CCSize;
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
 * @method getName
 * @return {char}
 */
getName : function (
)
{
    return 0;
},

/**
 * @method isIgnoreContentAdaptWithSize
 * @return {bool}
 */
isIgnoreContentAdaptWithSize : function (
)
{
    return false;
},

/**
 * @method getWidgetType
 * @return {ccui.WidgetType}
 */
getWidgetType : function (
)
{
    return 0;
},

/**
 * @method setLayoutParameter
 * @param {ccui.LayoutParameter} arg0
 */
setLayoutParameter : function (
layoutparameter 
)
{
},

/**
 * @method getBottomInParent
 * @return {float}
 */
getBottomInParent : function (
)
{
    return 0;
},

/**
 * @method getActionTag
 * @return {int}
 */
getActionTag : function (
)
{
    return 0;
},

/**
 * @method getLayoutParameter
 * @param {ccui.LayoutParameterType} arg0
 * @return {ccui.LayoutParameter}
 */
getLayoutParameter : function (
layoutparametertype 
)
{
    return ccui.LayoutParameter;
},

/**
 * @method getPositionType
 * @return {ccui.PositionType}
 */
getPositionType : function (
)
{
    return 0;
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
 * @method getChildByName
 * @param {char} arg0
 * @return {ccui.Widget}
 */
getChildByName : function (
char 
)
{
    return ccui.Widget;
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
 * @method removeNodeByTag
 * @param {int} arg0
 */
removeNodeByTag : function (
int 
)
{
},

/**
 * @method removeAllChildren
 */
removeAllChildren : function (
)
{
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
 * @method getContentSize
 * @return {cc.CCSize}
 */
getContentSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method getTouchStartPos
 * @return {cc.CCPoint}
 */
getTouchStartPos : function (
)
{
    return cc.CCPoint;
},

/**
 * @method didNotSelectSelf
 */
didNotSelectSelf : function (
)
{
},

/**
 * @method setFocused
 * @param {bool} arg0
 */
setFocused : function (
bool 
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
 * @method clone
 * @return {ccui.Widget}
 */
clone : function (
)
{
    return ccui.Widget;
},

/**
 * @method getTouchMovePos
 * @return {cc.CCPoint}
 */
getTouchMovePos : function (
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
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method setBrightStyle
 * @param {ccui.BrightStyle} arg0
 */
setBrightStyle : function (
brightstyle 
)
{
},

/**
 * @method addNode
* @param {cc.CCNode|cc.CCNode|cc.CCNode} ccnode
* @param {int|int} int
* @param {int} int
*/
addNode : function(
ccnode,
int,
int 
)
{
},

/**
 * @method removeFromParent
 */
removeFromParent : function (
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
 * @method ignoreContentAdaptWithSize
 * @param {bool} arg0
 */
ignoreContentAdaptWithSize : function (
bool 
)
{
},

/**
 * @method isBright
 * @return {bool}
 */
isBright : function (
)
{
    return false;
},

/**
 * @method clippingParentAreaContainPoint
 * @param {cc.CCPoint} arg0
 * @return {bool}
 */
clippingParentAreaContainPoint : function (
ccpoint 
)
{
    return false;
},

/**
 * @method getSizePercent
 * @return {cc.CCPoint}
 */
getSizePercent : function (
)
{
    return cc.CCPoint;
},

/**
 * @method removeFromParentAndCleanup
 * @param {bool} arg0
 */
removeFromParentAndCleanup : function (
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
 * @method getTopInParent
 * @return {float}
 */
getTopInParent : function (
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
 * @method setColor
 * @param {cc._ccColor3B} arg0
 */
setColor : function (
_cccolor3b 
)
{
},

/**
 * @method getNodeByTag
 * @param {int} arg0
 * @return {cc.CCNode}
 */
getNodeByTag : function (
int 
)
{
    return cc.CCNode;
},

/**
 * @method getSize
 * @return {cc.CCSize}
 */
getSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method getRightInParent
 * @return {float}
 */
getRightInParent : function (
)
{
    return 0;
},

/**
 * @method getSizeType
 * @return {ccui.SizeType}
 */
getSizeType : function (
)
{
    return 0;
},

/**
 * @method removeNode
 * @param {cc.CCNode} arg0
 */
removeNode : function (
ccnode 
)
{
},

/**
 * @method removeAllNodes
 */
removeAllNodes : function (
)
{
},

/**
 * @method getWorldPosition
 * @return {cc.CCPoint}
 */
getWorldPosition : function (
)
{
    return cc.CCPoint;
},

/**
 * @method getPositionPercent
 * @return {cc.CCPoint}
 */
getPositionPercent : function (
)
{
    return cc.CCPoint;
},

/**
 * @method removeChildByTag
 * @param {int} arg0
 * @param {bool} arg1
 */
removeChildByTag : function (
int, 
bool 
)
{
},

/**
 * @method hitTest
 * @param {cc.CCPoint} arg0
 * @return {bool}
 */
hitTest : function (
ccpoint 
)
{
    return false;
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
 * @method isFocused
 * @return {bool}
 */
isFocused : function (
)
{
    return false;
},

/**
 * @method getScriptObjectDict
 * @return {cc.CCDictionary}
 */
getScriptObjectDict : function (
)
{
    return cc.CCDictionary;
},

/**
 * @method setSizeType
 * @param {ccui.SizeType} arg0
 */
setSizeType : function (
sizetype 
)
{
},

/**
 * @method checkChildInfo
 * @param {int} arg0
 * @param {ccui.Widget} arg1
 * @param {cc.CCPoint} arg2
 */
checkChildInfo : function (
int, 
widget, 
ccpoint 
)
{
},

/**
 * @method setSize
 * @param {cc.CCSize} arg0
 */
setSize : function (
ccsize 
)
{
},

/**
 * @method setBright
 * @param {bool} arg0
 */
setBright : function (
bool 
)
{
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
 * @method create
 * @return {ccui.Widget}
 */
create : function (
)
{
    return ccui.Widget;
},

/**
 * @method Widget
 * @constructor
 */
Widget : function (
)
{
},

};

/**
 * @class Layout
 */
ccs.Layout = {

/**
 * @method setBackGroundColorVector
 * @param {cc.CCPoint} arg0
 */
setBackGroundColorVector : function (
ccpoint 
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
 * @method setClippingType
 * @param {ccui.LayoutClippingType} arg0
 */
setClippingType : function (
layoutclippingtype 
)
{
},

/**
 * @method setBackGroundColorType
 * @param {ccui.LayoutBackGroundColorType} arg0
 */
setBackGroundColorType : function (
layoutbackgroundcolortype 
)
{
},

/**
 * @method setBackGroundImageColor
 * @param {cc._ccColor3B} arg0
 */
setBackGroundImageColor : function (
_cccolor3b 
)
{
},

/**
 * @method getBackGroundColorVector
 * @return {cc.CCPoint}
 */
getBackGroundColorVector : function (
)
{
    return cc.CCPoint;
},

/**
 * @method removeAllChildren
 */
removeAllChildren : function (
)
{
},

/**
 * @method getClippingType
 * @return {ccui.LayoutClippingType}
 */
getClippingType : function (
)
{
    return 0;
},

/**
 * @method removeBackGroundImage
 */
removeBackGroundImage : function (
)
{
},

/**
 * @method getBackGroundColorOpacity
 * @return {unsigned char}
 */
getBackGroundColorOpacity : function (
)
{
    return 0;
},

/**
 * @method isClippingEnabled
 * @return {bool}
 */
isClippingEnabled : function (
)
{
    return false;
},

/**
 * @method setBackGroundImageOpacity
 * @param {unsigned char} arg0
 */
setBackGroundImageOpacity : function (
char 
)
{
},

/**
 * @method setBackGroundImage
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
setBackGroundImage : function (
char, 
texturerestype 
)
{
},

/**
 * @method setBackGroundColor
* @param {cc._ccColor3B|cc._ccColor3B} _cccolor3b
* @param {cc._ccColor3B} _cccolor3b
*/
setBackGroundColor : function(
_cccolor3b,
_cccolor3b 
)
{
},

/**
 * @method requestDoLayout
 */
requestDoLayout : function (
)
{
},

/**
 * @method getBackGroundImageCapInsets
 * @return {cc.CCRect}
 */
getBackGroundImageCapInsets : function (
)
{
    return cc.CCRect;
},

/**
 * @method getBackGroundColor
 * @return {cc._ccColor3B}
 */
getBackGroundColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method setClippingEnabled
 * @param {bool} arg0
 */
setClippingEnabled : function (
bool 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method getBackGroundImageColor
 * @return {cc._ccColor3B}
 */
getBackGroundImageColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method isBackGroundImageScale9Enabled
 * @return {bool}
 */
isBackGroundImageScale9Enabled : function (
)
{
    return false;
},

/**
 * @method getBackGroundColorType
 * @return {ccui.LayoutBackGroundColorType}
 */
getBackGroundColorType : function (
)
{
    return 0;
},

/**
 * @method getBackGroundEndColor
 * @return {cc._ccColor3B}
 */
getBackGroundEndColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method setBackGroundColorOpacity
 * @param {unsigned char} arg0
 */
setBackGroundColorOpacity : function (
char 
)
{
},

/**
 * @method getBackGroundImageOpacity
 * @return {unsigned char}
 */
getBackGroundImageOpacity : function (
)
{
    return 0;
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
 * @method setBackGroundImageCapInsets
 * @param {cc.CCRect} arg0
 */
setBackGroundImageCapInsets : function (
ccrect 
)
{
},

/**
 * @method getBackGroundImageTextureSize
 * @return {cc.CCSize}
 */
getBackGroundImageTextureSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method getLayoutType
 * @return {ccui.LayoutType}
 */
getLayoutType : function (
)
{
    return 0;
},

/**
 * @method getBackGroundStartColor
 * @return {cc._ccColor3B}
 */
getBackGroundStartColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method hitTest
 * @param {cc.CCPoint} arg0
 * @return {bool}
 */
hitTest : function (
ccpoint 
)
{
    return false;
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
 * @method setBackGroundImageScale9Enabled
 * @param {bool} arg0
 */
setBackGroundImageScale9Enabled : function (
bool 
)
{
},

/**
 * @method setLayoutType
 * @param {ccui.LayoutType} arg0
 */
setLayoutType : function (
layouttype 
)
{
},

/**
 * @method create
 * @return {ccui.Layout}
 */
create : function (
)
{
    return ccui.Layout;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method Layout
 * @constructor
 */
Layout : function (
)
{
},

};

/**
 * @class Button
 */
ccs.Button = {

/**
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method getTitleText
 * @return {char}
 */
getTitleText : function (
)
{
    return 0;
},

/**
 * @method setTitleFontSize
 * @param {float} arg0
 */
setTitleFontSize : function (
float 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method setScale9Enabled
 * @param {bool} arg0
 */
setScale9Enabled : function (
bool 
)
{
},

/**
 * @method setTitleColor
 * @param {cc._ccColor3B} arg0
 */
setTitleColor : function (
_cccolor3b 
)
{
},

/**
 * @method ignoreContentAdaptWithSize
 * @param {bool} arg0
 */
ignoreContentAdaptWithSize : function (
bool 
)
{
},

/**
 * @method setCapInsetsDisabledRenderer
 * @param {cc.CCRect} arg0
 */
setCapInsetsDisabledRenderer : function (
ccrect 
)
{
},

/**
 * @method getCapInsetPressedRenderer
 * @return {cc.CCRect}
 */
getCapInsetPressedRenderer : function (
)
{
    return cc.CCRect;
},

/**
 * @method getTitleColor
 * @return {cc._ccColor3B}
 */
getTitleColor : function (
)
{
    return cc._ccColor3B;
},

/**
 * @method loadTextureDisabled
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureDisabled : function (
char, 
texturerestype 
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
 * @method setTitleText
 * @param {String} arg0
 */
setTitleText : function (
str 
)
{
},

/**
 * @method getCapInsetNormalRenderer
 * @return {cc.CCRect}
 */
getCapInsetNormalRenderer : function (
)
{
    return cc.CCRect;
},

/**
 * @method setCapInsetsNormalRenderer
 * @param {cc.CCRect} arg0
 */
setCapInsetsNormalRenderer : function (
ccrect 
)
{
},

/**
 * @method loadTexturePressed
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTexturePressed : function (
char, 
texturerestype 
)
{
},

/**
 * @method setTitleFontName
 * @param {char} arg0
 */
setTitleFontName : function (
char 
)
{
},

/**
 * @method loadTextures
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 * @param {ccui.TextureResType} arg3
 */
loadTextures : function (
char, 
char, 
char, 
texturerestype 
)
{
},

/**
 * @method isScale9Enabled
 * @return {bool}
 */
isScale9Enabled : function (
)
{
    return false;
},

/**
 * @method getCapInsetDisabledRenderer
 * @return {cc.CCRect}
 */
getCapInsetDisabledRenderer : function (
)
{
    return cc.CCRect;
},

/**
 * @method loadTextureNormal
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureNormal : function (
char, 
texturerestype 
)
{
},

/**
 * @method setCapInsetsPressedRenderer
 * @param {cc.CCRect} arg0
 */
setCapInsetsPressedRenderer : function (
ccrect 
)
{
},

/**
 * @method getTitleFontSize
 * @return {float}
 */
getTitleFontSize : function (
)
{
    return 0;
},

/**
 * @method getTitleFontName
 * @return {char}
 */
getTitleFontName : function (
)
{
    return 0;
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
 * @method setPressedActionEnabled
 * @param {bool} arg0
 */
setPressedActionEnabled : function (
bool 
)
{
},

/**
 * @method create
 * @return {ccui.Button}
 */
create : function (
)
{
    return ccui.Button;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method Button
 * @constructor
 */
Button : function (
)
{
},

};

/**
 * @class CheckBox
 */
ccs.CheckBox = {

/**
 * @method getSelectedState
 * @return {bool}
 */
getSelectedState : function (
)
{
    return false;
},

/**
 * @method loadTextureBackGroundSelected
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureBackGroundSelected : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadTextureBackGroundDisabled
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureBackGroundDisabled : function (
char, 
texturerestype 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method loadTextureFrontCross
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureFrontCross : function (
char, 
texturerestype 
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
 * @method loadTextures
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 * @param {char} arg3
 * @param {char} arg4
 * @param {ccui.TextureResType} arg5
 */
loadTextures : function (
char, 
char, 
char, 
char, 
char, 
texturerestype 
)
{
},

/**
 * @method loadTextureBackGround
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureBackGround : function (
char, 
texturerestype 
)
{
},

/**
 * @method setSelectedState
 * @param {bool} arg0
 */
setSelectedState : function (
bool 
)
{
},

/**
 * @method loadTextureFrontCrossDisabled
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureFrontCrossDisabled : function (
char, 
texturerestype 
)
{
},

/**
 * @method create
 * @return {ccui.CheckBox}
 */
create : function (
)
{
    return ccui.CheckBox;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method CheckBox
 * @constructor
 */
CheckBox : function (
)
{
},

};

/**
 * @class ImageView
 */
ccs.ImageView = {

/**
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method ignoreContentAdaptWithSize
 * @param {bool} arg0
 */
ignoreContentAdaptWithSize : function (
bool 
)
{
},

/**
 * @method loadTexture
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTexture : function (
char, 
texturerestype 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method setScale9Enabled
 * @param {bool} arg0
 */
setScale9Enabled : function (
bool 
)
{
},

/**
 * @method setTextureRect
 * @param {cc.CCRect} arg0
 */
setTextureRect : function (
ccrect 
)
{
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
 * @method getCapInsets
 * @return {cc.CCRect}
 */
getCapInsets : function (
)
{
    return cc.CCRect;
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
 * @method isScale9Enabled
 * @return {bool}
 */
isScale9Enabled : function (
)
{
    return false;
},

/**
 * @method create
 * @return {ccui.ImageView}
 */
create : function (
)
{
    return ccui.ImageView;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method ImageView
 * @constructor
 */
ImageView : function (
)
{
},

};

/**
 * @class Label
 */
ccs.Label = {

/**
 * @method getStringLength
 * @return {int}
 */
getStringLength : function (
)
{
    return 0;
},

/**
 * @method setFontName
 * @param {String} arg0
 */
setFontName : function (
str 
)
{
},

/**
 * @method setTouchScaleChangeEnabled
 * @param {bool} arg0
 */
setTouchScaleChangeEnabled : function (
bool 
)
{
},

/**
 * @method getFontSize
 * @return {int}
 */
getFontSize : function (
)
{
    return 0;
},

/**
 * @method getTextVerticalAlignment
 * @return {cc.CCVerticalTextAlignment}
 */
getTextVerticalAlignment : function (
)
{
    return 0;
},

/**
 * @method getStringValue
 * @return {char}
 */
getStringValue : function (
)
{
    return 0;
},

/**
 * @method setText
 * @param {String} arg0
 */
setText : function (
str 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method getTextHorizontalAlignment
 * @return {cc.CCTextAlignment}
 */
getTextHorizontalAlignment : function (
)
{
    return 0;
},

/**
 * @method getTextAreaSize
 * @return {cc.CCSize}
 */
getTextAreaSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method setTextVerticalAlignment
 * @param {cc.CCVerticalTextAlignment} arg0
 */
setTextVerticalAlignment : function (
ccverticaltextalignment 
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
 * @method setFontSize
 * @param {int} arg0
 */
setFontSize : function (
int 
)
{
},

/**
 * @method isTouchScaleChangeEnabled
 * @return {bool}
 */
isTouchScaleChangeEnabled : function (
)
{
    return false;
},

/**
 * @method setTextHorizontalAlignment
 * @param {cc.CCTextAlignment} arg0
 */
setTextHorizontalAlignment : function (
cctextalignment 
)
{
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
 * @method setTextAreaSize
 * @param {cc.CCSize} arg0
 */
setTextAreaSize : function (
ccsize 
)
{
},

/**
 * @method create
 * @return {ccui.Label}
 */
create : function (
)
{
    return ccui.Label;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method Label
 * @constructor
 */
Label : function (
)
{
},

};

/**
 * @class LabelAtlas
 */
ccs.LabelAtlas = {

/**
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method getStringValue
 * @return {char}
 */
getStringValue : function (
)
{
    return 0;
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
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
 * @method setProperty
 * @param {String} arg0
 * @param {String} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @param {String} arg4
 */
setProperty : function (
str, 
str, 
int, 
int, 
str 
)
{
},

/**
 * @method setStringValue
 * @param {String} arg0
 */
setStringValue : function (
str 
)
{
},

/**
 * @method create
 * @return {ccui.LabelAtlas}
 */
create : function (
)
{
    return ccui.LabelAtlas;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method LabelAtlas
 * @constructor
 */
LabelAtlas : function (
)
{
},

};

/**
 * @class LoadingBar
 */
ccs.LoadingBar = {

/**
 * @method setPercent
 * @param {int} arg0
 */
setPercent : function (
int 
)
{
},

/**
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method ignoreContentAdaptWithSize
 * @param {bool} arg0
 */
ignoreContentAdaptWithSize : function (
bool 
)
{
},

/**
 * @method loadTexture
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTexture : function (
char, 
texturerestype 
)
{
},

/**
 * @method setDirection
 * @param {ccui.LoadingBarType} arg0
 */
setDirection : function (
loadingbartype 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method setScale9Enabled
 * @param {bool} arg0
 */
setScale9Enabled : function (
bool 
)
{
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
 * @method getDirection
 * @return {int}
 */
getDirection : function (
)
{
    return 0;
},

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
 * @method getContentSize
 * @return {cc.CCSize}
 */
getContentSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method isScale9Enabled
 * @return {bool}
 */
isScale9Enabled : function (
)
{
    return false;
},

/**
 * @method getPercent
 * @return {int}
 */
getPercent : function (
)
{
    return 0;
},

/**
 * @method create
 * @return {ccui.LoadingBar}
 */
create : function (
)
{
    return ccui.LoadingBar;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method LoadingBar
 * @constructor
 */
LoadingBar : function (
)
{
},

};

/**
 * @class ScrollView
 */
ccs.ScrollView = {

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
 * @method scrollToTop
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToTop : function (
float, 
bool 
)
{
},

/**
 * @method scrollToPercentHorizontal
 * @param {float} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
scrollToPercentHorizontal : function (
float, 
float, 
bool 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method removeAllChildren
 */
removeAllChildren : function (
)
{
},

/**
 * @method scrollToPercentBothDirection
 * @param {cc.CCPoint} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
scrollToPercentBothDirection : function (
ccpoint, 
float, 
bool 
)
{
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
 * @method getDirection
 * @return {ccui.SCROLLVIEW_DIR}
 */
getDirection : function (
)
{
    return 0;
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
 * @method scrollToBottomLeft
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToBottomLeft : function (
float, 
bool 
)
{
},

/**
 * @method getInnerContainer
 * @return {ccui.Layout}
 */
getInnerContainer : function (
)
{
    return ccui.Layout;
},

/**
 * @method jumpToBottom
 */
jumpToBottom : function (
)
{
},

/**
 * @method getChildByName
 * @param {char} arg0
 * @return {ccui.Widget}
 */
getChildByName : function (
char 
)
{
    return ccui.Widget;
},

/**
 * @method setDirection
 * @param {ccui.SCROLLVIEW_DIR} arg0
 */
setDirection : function (
scrollview_dir 
)
{
},

/**
 * @method scrollToTopLeft
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToTopLeft : function (
float, 
bool 
)
{
},

/**
 * @method jumpToTopRight
 */
jumpToTopRight : function (
)
{
},

/**
 * @method jumpToBottomLeft
 */
jumpToBottomLeft : function (
)
{
},

/**
 * @method setInnerContainerSize
 * @param {cc.CCSize} arg0
 */
setInnerContainerSize : function (
ccsize 
)
{
},

/**
 * @method removeNodeByTag
 * @param {int} arg0
 */
removeNodeByTag : function (
int 
)
{
},

/**
 * @method getInnerContainerSize
 * @return {cc.CCSize}
 */
getInnerContainerSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method isBounceEnabled
 * @return {bool}
 */
isBounceEnabled : function (
)
{
    return false;
},

/**
 * @method jumpToPercentVertical
 * @param {float} arg0
 */
jumpToPercentVertical : function (
float 
)
{
},

/**
 * @method setInertiaScrollEnabled
 * @param {bool} arg0
 */
setInertiaScrollEnabled : function (
bool 
)
{
},

/**
 * @method jumpToTopLeft
 */
jumpToTopLeft : function (
)
{
},

/**
 * @method jumpToPercentHorizontal
 * @param {float} arg0
 */
jumpToPercentHorizontal : function (
float 
)
{
},

/**
 * @method addNode
* @param {cc.CCNode|cc.CCNode|cc.CCNode} ccnode
* @param {int|int} int
* @param {int} int
*/
addNode : function(
ccnode,
int,
int 
)
{
},

/**
 * @method jumpToBottomRight
 */
jumpToBottomRight : function (
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
 * @method getLayoutType
 * @return {ccui.LayoutType}
 */
getLayoutType : function (
)
{
    return 0;
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
 * @method getNodeByTag
 * @param {int} arg0
 * @return {cc.CCNode}
 */
getNodeByTag : function (
int 
)
{
    return cc.CCNode;
},

/**
 * @method isInertiaScrollEnabled
 * @return {bool}
 */
isInertiaScrollEnabled : function (
)
{
    return false;
},

/**
 * @method setBounceEnabled
 * @param {bool} arg0
 */
setBounceEnabled : function (
bool 
)
{
},

/**
 * @method jumpToTop
 */
jumpToTop : function (
)
{
},

/**
 * @method scrollToLeft
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToLeft : function (
float, 
bool 
)
{
},

/**
 * @method jumpToPercentBothDirection
 * @param {cc.CCPoint} arg0
 */
jumpToPercentBothDirection : function (
ccpoint 
)
{
},

/**
 * @method scrollToPercentVertical
 * @param {float} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
scrollToPercentVertical : function (
float, 
float, 
bool 
)
{
},

/**
 * @method scrollToBottom
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToBottom : function (
float, 
bool 
)
{
},

/**
 * @method scrollToBottomRight
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToBottomRight : function (
float, 
bool 
)
{
},

/**
 * @method removeNode
 * @param {cc.CCNode} arg0
 */
removeNode : function (
ccnode 
)
{
},

/**
 * @method removeAllNodes
 */
removeAllNodes : function (
)
{
},

/**
 * @method jumpToLeft
 */
jumpToLeft : function (
)
{
},

/**
 * @method scrollToRight
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToRight : function (
float, 
bool 
)
{
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
 * @method getNodes
 * @return {cc.CCArray}
 */
getNodes : function (
)
{
    return cc.CCArray;
},

/**
 * @method setLayoutType
 * @param {ccui.LayoutType} arg0
 */
setLayoutType : function (
layouttype 
)
{
},

/**
 * @method jumpToRight
 */
jumpToRight : function (
)
{
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
 * @method scrollToTopRight
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToTopRight : function (
float, 
bool 
)
{
},

/**
 * @method create
 * @return {ccui.ScrollView}
 */
create : function (
)
{
    return ccui.ScrollView;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method ScrollView
 * @constructor
 */
ScrollView : function (
)
{
},

};

/**
 * @class Slider
 */
ccs.Slider = {

/**
 * @method setPercent
 * @param {int} arg0
 */
setPercent : function (
int 
)
{
},

/**
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method loadSlidBallTextureNormal
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadSlidBallTextureNormal : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadProgressBarTexture
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadProgressBarTexture : function (
char, 
texturerestype 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method setScale9Enabled
 * @param {bool} arg0
 */
setScale9Enabled : function (
bool 
)
{
},

/**
 * @method getCapInsetBarRenderer
 * @return {cc.CCRect}
 */
getCapInsetBarRenderer : function (
)
{
    return cc.CCRect;
},

/**
 * @method ignoreContentAdaptWithSize
 * @param {bool} arg0
 */
ignoreContentAdaptWithSize : function (
bool 
)
{
},

/**
 * @method loadSlidBallTextures
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 * @param {ccui.TextureResType} arg3
 */
loadSlidBallTextures : function (
char, 
char, 
char, 
texturerestype 
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
 * @method loadBarTexture
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadBarTexture : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadSlidBallTexturePressed
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadSlidBallTexturePressed : function (
char, 
texturerestype 
)
{
},

/**
 * @method isScale9Enabled
 * @return {bool}
 */
isScale9Enabled : function (
)
{
    return false;
},

/**
 * @method setCapInsetProgressBarRebderer
 * @param {cc.CCRect} arg0
 */
setCapInsetProgressBarRebderer : function (
ccrect 
)
{
},

/**
 * @method setCapInsetsBarRenderer
 * @param {cc.CCRect} arg0
 */
setCapInsetsBarRenderer : function (
ccrect 
)
{
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
 * @method loadSlidBallTextureDisabled
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadSlidBallTextureDisabled : function (
char, 
texturerestype 
)
{
},

/**
 * @method getPercent
 * @return {int}
 */
getPercent : function (
)
{
    return 0;
},

/**
 * @method getCapInsetProgressBarRebderer
 * @return {cc.CCRect}
 */
getCapInsetProgressBarRebderer : function (
)
{
    return cc.CCRect;
},

/**
 * @method create
 * @return {ccui.Slider}
 */
create : function (
)
{
    return ccui.Slider;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method Slider
 * @constructor
 */
Slider : function (
)
{
},

};

/**
 * @class TextField
 */
ccs.TextField = {

/**
 * @method setAttachWithIME
 * @param {bool} arg0
 */
setAttachWithIME : function (
bool 
)
{
},

/**
 * @method getFontSize
 * @return {int}
 */
getFontSize : function (
)
{
    return 0;
},

/**
 * @method getStringValue
 * @return {char}
 */
getStringValue : function (
)
{
    return 0;
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method getDeleteBackward
 * @return {bool}
 */
getDeleteBackward : function (
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
 * @method getAttachWithIME
 * @return {bool}
 */
getAttachWithIME : function (
)
{
    return false;
},

/**
 * @method setFontName
 * @param {String} arg0
 */
setFontName : function (
str 
)
{
},

/**
 * @method getInsertText
 * @return {bool}
 */
getInsertText : function (
)
{
    return false;
},

/**
 * @method setInsertText
 * @param {bool} arg0
 */
setInsertText : function (
bool 
)
{
},

/**
 * @method getDetachWithIME
 * @return {bool}
 */
getDetachWithIME : function (
)
{
    return false;
},

/**
 * @method setTextVerticalAlignment
 * @param {cc.CCVerticalTextAlignment} arg0
 */
setTextVerticalAlignment : function (
ccverticaltextalignment 
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
 * @method didNotSelectSelf
 */
didNotSelectSelf : function (
)
{
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
 * @method setTextAreaSize
 * @param {cc.CCSize} arg0
 */
setTextAreaSize : function (
ccsize 
)
{
},

/**
 * @method attachWithIME
 */
attachWithIME : function (
)
{
},

/**
 * @method getPasswordStyleText
 * @return {char}
 */
getPasswordStyleText : function (
)
{
    return 0;
},

/**
 * @method setPasswordEnabled
 * @param {bool} arg0
 */
setPasswordEnabled : function (
bool 
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
 * @method setMaxLengthEnabled
 * @param {bool} arg0
 */
setMaxLengthEnabled : function (
bool 
)
{
},

/**
 * @method isPasswordEnabled
 * @return {bool}
 */
isPasswordEnabled : function (
)
{
    return false;
},

/**
 * @method setDeleteBackward
 * @param {bool} arg0
 */
setDeleteBackward : function (
bool 
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
 * @method setPlaceHolder
 * @param {String} arg0
 */
setPlaceHolder : function (
str 
)
{
},

/**
 * @method setPasswordStyleText
 * @param {char} arg0
 */
setPasswordStyleText : function (
char 
)
{
},

/**
 * @method setTextHorizontalAlignment
 * @param {cc.CCTextAlignment} arg0
 */
setTextHorizontalAlignment : function (
cctextalignment 
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
 * @method isMaxLengthEnabled
 * @return {bool}
 */
isMaxLengthEnabled : function (
)
{
    return false;
},

/**
 * @method setDetachWithIME
 * @param {bool} arg0
 */
setDetachWithIME : function (
bool 
)
{
},

/**
 * @method setText
 * @param {String} arg0
 */
setText : function (
str 
)
{
},

/**
 * @method setTouchAreaEnabled
 * @param {bool} arg0
 */
setTouchAreaEnabled : function (
bool 
)
{
},

/**
 * @method hitTest
 * @param {cc.CCPoint} arg0
 * @return {bool}
 */
hitTest : function (
ccpoint 
)
{
    return false;
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
 * @method setTouchSize
 * @param {cc.CCSize} arg0
 */
setTouchSize : function (
ccsize 
)
{
},

/**
 * @method getTouchSize
 * @return {cc.CCSize}
 */
getTouchSize : function (
)
{
    return cc.CCSize;
},

/**
 * @method create
 * @return {ccui.TextField}
 */
create : function (
)
{
    return ccui.TextField;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method TextField
 * @constructor
 */
TextField : function (
)
{
},

};

/**
 * @class ListView
 */
ccs.ListView = {

/**
 * @method getIndex
 * @param {ccui.Widget} arg0
 * @return {unsigned int}
 */
getIndex : function (
widget 
)
{
    return 0;
},

/**
 * @method removeAllItems
 */
removeAllItems : function (
)
{
},

/**
 * @method setGravity
 * @param {ccui.ListViewGravity} arg0
 */
setGravity : function (
listviewgravity 
)
{
},

/**
 * @method pushBackCustomItem
 * @param {ccui.Widget} arg0
 */
pushBackCustomItem : function (
widget 
)
{
},

/**
 * @method setDirection
 * @param {ccui.SCROLLVIEW_DIR} arg0
 */
setDirection : function (
scrollview_dir 
)
{
},

/**
 * @method getItems
 * @return {cc.CCArray}
 */
getItems : function (
)
{
    return cc.CCArray;
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method removeItem
 * @param {int} arg0
 */
removeItem : function (
int 
)
{
},

/**
 * @method getCurSelectedIndex
 * @return {int}
 */
getCurSelectedIndex : function (
)
{
    return 0;
},

/**
 * @method insertDefaultItem
 * @param {int} arg0
 */
insertDefaultItem : function (
int 
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
 * @method setItemsMargin
 * @param {float} arg0
 */
setItemsMargin : function (
float 
)
{
},

/**
 * @method refreshView
 */
refreshView : function (
)
{
},

/**
 * @method removeLastItem
 */
removeLastItem : function (
)
{
},

/**
 * @method getItemsMargin
 * @return {float}
 */
getItemsMargin : function (
)
{
    return 0;
},

/**
 * @method getItem
 * @param {unsigned int} arg0
 * @return {ccui.Widget}
 */
getItem : function (
int 
)
{
    return ccui.Widget;
},

/**
 * @method setItemModel
 * @param {ccui.Widget} arg0
 */
setItemModel : function (
widget 
)
{
},

/**
 * @method requestRefreshView
 */
requestRefreshView : function (
)
{
},

/**
 * @method pushBackDefaultItem
 */
pushBackDefaultItem : function (
)
{
},

/**
 * @method insertCustomItem
 * @param {ccui.Widget} arg0
 * @param {int} arg1
 */
insertCustomItem : function (
widget, 
int 
)
{
},

/**
 * @method create
 * @return {ccui.ListView}
 */
create : function (
)
{
    return ccui.ListView;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method ListView
 * @constructor
 */
ListView : function (
)
{
},

};

/**
 * @class LabelBMFont
 */
ccs.LabelBMFont = {

/**
 * @method getVirtualRenderer
 * @return {cc.CCNode}
 */
getVirtualRenderer : function (
)
{
    return cc.CCNode;
},

/**
 * @method getStringValue
 * @return {char}
 */
getStringValue : function (
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
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
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
 * @method setFntFile
 * @param {char} arg0
 */
setFntFile : function (
char 
)
{
},

/**
 * @method create
 * @return {ccui.LabelBMFont}
 */
create : function (
)
{
    return ccui.LabelBMFont;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method LabelBMFont
 * @constructor
 */
LabelBMFont : function (
)
{
},

};

/**
 * @class PageView
 */
ccs.PageView = {

/**
 * @method getLayoutType
 * @return {ccui.LayoutType}
 */
getLayoutType : function (
)
{
    return 0;
},

/**
 * @method getCurPageIndex
 * @return {int}
 */
getCurPageIndex : function (
)
{
    return 0;
},

/**
 * @method addWidgetToPage
 * @param {ccui.Widget} arg0
 * @param {int} arg1
 * @param {bool} arg2
 */
addWidgetToPage : function (
widget, 
int, 
bool 
)
{
},

/**
 * @method getPage
 * @param {int} arg0
 * @return {ccui.Layout}
 */
getPage : function (
int 
)
{
    return ccui.Layout;
},

/**
 * @method removePage
 * @param {ccui.Layout} arg0
 */
removePage : function (
layout 
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method insertPage
 * @param {ccui.Layout} arg0
 * @param {int} arg1
 */
insertPage : function (
layout, 
int 
)
{
},

/**
 * @method setLayoutType
 * @param {ccui.LayoutType} arg0
 */
setLayoutType : function (
layouttype 
)
{
},

/**
 * @method scrollToPage
 * @param {int} arg0
 */
scrollToPage : function (
int 
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
 * @method removePageAtIndex
 * @param {int} arg0
 */
removePageAtIndex : function (
int 
)
{
},

/**
 * @method getPages
 * @return {cc.CCArray}
 */
getPages : function (
)
{
    return cc.CCArray;
},

/**
 * @method removeAllPages
 */
removeAllPages : function (
)
{
},

/**
 * @method addPage
 * @param {ccui.Layout} arg0
 */
addPage : function (
layout 
)
{
},

/**
 * @method create
 * @return {ccui.PageView}
 */
create : function (
)
{
    return ccui.PageView;
},

/**
 * @method createInstance
 * @return {cc.CCObject}
 */
createInstance : function (
)
{
    return cc.CCObject;
},

/**
 * @method PageView
 * @constructor
 */
PageView : function (
)
{
},

};

/**
 * @class UIHelper
 */
ccs.UIHelper = {

/**
 * @method seekActionWidgetByActionTag
 * @param {ccui.Widget} arg0
 * @param {int} arg1
 * @return {ccui.Widget}
 */
seekActionWidgetByActionTag : function (
widget, 
int 
)
{
    return ccui.Widget;
},

/**
 * @method seekWidgetByTag
 * @param {ccui.Widget} arg0
 * @param {int} arg1
 * @return {ccui.Widget}
 */
seekWidgetByTag : function (
widget, 
int 
)
{
    return ccui.Widget;
},

/**
 * @method seekWidgetByRelativeName
 * @param {ccui.Widget} arg0
 * @param {char} arg1
 * @return {ccui.Widget}
 */
seekWidgetByRelativeName : function (
widget, 
char 
)
{
    return ccui.Widget;
},

/**
 * @method seekWidgetByName
 * @param {ccui.Widget} arg0
 * @param {char} arg1
 * @return {ccui.Widget}
 */
seekWidgetByName : function (
widget, 
char 
)
{
    return ccui.Widget;
},

};

/**
 * @class GUIReader
 */
ccs.GUIReader = {

/**
 * @method widgetFromJsonFile
 * @param {char} arg0
 * @return {ccui.Widget}
 */
widgetFromJsonFile : function (
char 
)
{
    return ccui.Widget;
},

/**
 * @method getFilePath
 * @return {String}
 */
getFilePath : function (
)
{
    return ;
},

/**
 * @method widgetFromBinaryFile
 * @param {char} arg0
 * @return {ccui.Widget}
 */
widgetFromBinaryFile : function (
char 
)
{
    return ccui.Widget;
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method getInstance
 * @return {cc.GUIReader}
 */
getInstance : function (
)
{
    return cc.GUIReader;
},

};

/**
 * @class TouchGroup
 */
ccs.UILayer = {

/**
 * @method removeWidget
 * @param {ccui.Widget} arg0
 */
removeWidget : function (
widget 
)
{
},

/**
 * @method getWidgetByTag
 * @param {int} arg0
 * @return {ccui.Widget}
 */
getWidgetByTag : function (
int 
)
{
    return ccui.Widget;
},

/**
 * @method getRootWidget
 * @return {ccui.Widget}
 */
getRootWidget : function (
)
{
    return ccui.Widget;
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
 * @method getWidgetByName
 * @param {char} arg0
 * @return {ccui.Widget}
 */
getWidgetByName : function (
char 
)
{
    return ccui.Widget;
},

/**
 * @method addWidget
 * @param {ccui.Widget} arg0
 */
addWidget : function (
widget 
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
 * @method create
 * @return {ccui.TouchGroup}
 */
create : function (
)
{
    return ccui.TouchGroup;
},

/**
 * @method TouchGroup
 * @constructor
 */
TouchGroup : function (
)
{
},

};

/**
 * @class SceneReader
 */
ccs.SceneReader = {

/**
 * @method getAttachComponentType
 * @return {cc.AttachComponentType}
 */
getAttachComponentType : function (
)
{
    return 0;
},

/**
 * @method createNodeWithSceneFile
 * @param {char} arg0
 * @param {cc.AttachComponentType} arg1
 * @return {cc.CCNode}
 */
createNodeWithSceneFile : function (
char, 
attachcomponenttype 
)
{
    return cc.CCNode;
},

/**
 * @method getNodeByTag
 * @param {int} arg0
 * @return {cc.CCNode}
 */
getNodeByTag : function (
int 
)
{
    return cc.CCNode;
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method sceneReaderVersion
 * @return {char}
 */
sceneReaderVersion : function (
)
{
    return 0;
},

/**
 * @method getInstance
 * @return {cc.SceneReader}
 */
getInstance : function (
)
{
    return cc.SceneReader;
},

};

/**
 * @class ActionObject
 */
ccs.ActionObject = {

/**
 * @method setCurrentTime
 * @param {float} arg0
 */
setCurrentTime : function (
float 
)
{
},

/**
 * @method pause
 */
pause : function (
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
 * @method setUnitTime
 * @param {float} arg0
 */
setUnitTime : function (
float 
)
{
},

/**
 * @method getTotalTime
 * @return {float}
 */
getTotalTime : function (
)
{
    return 0;
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
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method play
* @param {cc.CCCallFunc} cccallfunc
*/
play : function(
cccallfunc 
)
{
},

/**
 * @method getCurrentTime
 * @return {float}
 */
getCurrentTime : function (
)
{
    return 0;
},

/**
 * @method removeActionNode
 * @param {cc.ActionNode} arg0
 */
removeActionNode : function (
actionnode 
)
{
},

/**
 * @method getLoop
 * @return {bool}
 */
getLoop : function (
)
{
    return false;
},

/**
 * @method initWithBinary
 * @param {cc.CocoLoader} arg0
 * @param {cc.stExpCocoNode} arg1
 * @param {cc.CCObject} arg2
 */
initWithBinary : function (
cocoloader, 
stexpcoconode, 
ccobject 
)
{
},

/**
 * @method addActionNode
 * @param {cc.ActionNode} arg0
 */
addActionNode : function (
actionnode 
)
{
},

/**
 * @method getUnitTime
 * @return {float}
 */
getUnitTime : function (
)
{
    return 0;
},

/**
 * @method isPlaying
 * @return {bool}
 */
isPlaying : function (
)
{
    return false;
},

/**
 * @method updateToFrameByTime
 * @param {float} arg0
 */
updateToFrameByTime : function (
float 
)
{
},

/**
 * @method setLoop
 * @param {bool} arg0
 */
setLoop : function (
bool 
)
{
},

/**
 * @method simulationActionUpdate
 * @param {float} arg0
 */
simulationActionUpdate : function (
float 
)
{
},

/**
 * @method ActionObject
 * @constructor
 */
ActionObject : function (
)
{
},

};

/**
 * @class ActionManager
 */
ccs.ActionManager = {

/**
 * @method playActionByName
* @param {char|char} char
* @param {char|char} char
* @param {cc.CCCallFunc} cccallfunc
* @return {cc.ActionObject|cc.ActionObject}
*/
playActionByName : function(
char,
char,
cccallfunc 
)
{
    return cc.ActionObject;
},

/**
 * @method getActionByName
 * @param {char} arg0
 * @param {char} arg1
 * @return {cc.ActionObject}
 */
getActionByName : function (
char, 
char 
)
{
    return cc.ActionObject;
},

/**
 * @method initWithBinary
 * @param {char} arg0
 * @param {cc.CCObject} arg1
 * @param {cc.CocoLoader} arg2
 * @param {cc.stExpCocoNode} arg3
 */
initWithBinary : function (
char, 
ccobject, 
cocoloader, 
stexpcoconode 
)
{
},

/**
 * @method releaseActions
 */
releaseActions : function (
)
{
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method getInstance
 * @return {cc.ActionManager}
 */
getInstance : function (
)
{
    return cc.ActionManager;
},

};

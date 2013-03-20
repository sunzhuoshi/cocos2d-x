//
//  CCSpriteControlButton.cpp
//  WaterMargin
//
//  Created by sun zhuoshi on 3/19/13.
//
//

#include "CCSpriteControlButton.h"
#include "support/CCPointExtension.h"
#include "label_nodes/CCLabelTTF.h"
#include "label_nodes/CCLabelBMFont.h"
#include "actions/CCAction.h"
#include "actions/CCActionInterval.h"

using namespace std;

NS_CC_EXT_BEGIN

enum
{
    kZoomActionTag = 0xCCCB0001,
};

CCSpriteControlButton::CCSpriteControlButton()
: m_currentTitle(NULL)
, m_currentTitleColor(ccWHITE)
, m_titleLabel(NULL)
, m_backgroundSprite(NULL)
, m_zoomOnTouchDown(false)
, m_isPushed(false)
, m_bParentInited(false)
, m_titleDispatchTable(NULL)
, m_titleColorDispatchTable(NULL)
, m_titleLabelDispatchTable(NULL)
, m_backgroundSpriteDispatchTable(NULL)
, m_marginH(0)
, m_marginV(0)
{
    
}

CCSpriteControlButton::~CCSpriteControlButton()
{
    CC_SAFE_RELEASE(m_currentTitle);
    CC_SAFE_RELEASE(m_titleLabel);
    CC_SAFE_RELEASE(m_backgroundSpriteDispatchTable);
    CC_SAFE_RELEASE(m_titleLabelDispatchTable);
    CC_SAFE_RELEASE(m_titleColorDispatchTable);
    CC_SAFE_RELEASE(m_titleDispatchTable);
    CC_SAFE_RELEASE(m_backgroundSprite);
}

//initialisers

bool CCSpriteControlButton::init()
{
    return this->initWithLabelAndBackgroundSprite(CCLabelTTF::create("", "Helvetica", 12), CCSprite::create());
}

bool CCSpriteControlButton::initWithLabelAndBackgroundSprite(CCNode* node, CCSprite* backgroundSprite)
{
    if (CCControl::init())
    {
        CCAssert(node != NULL, "Label must not be nil.");
        CCLabelProtocol* label = dynamic_cast<CCLabelProtocol*>(node);
        CCRGBAProtocol* rgbaLabel = dynamic_cast<CCRGBAProtocol*>(node);
        CCAssert(backgroundSprite != NULL, "Background sprite must not be nil.");
        CCAssert(label != NULL || rgbaLabel!=NULL || backgroundSprite != NULL, "");
        
        m_bParentInited = true;
        
        // Initialize the button state tables
        this->setTitleDispatchTable(CCDictionary::create());
        this->setTitleColorDispatchTable(CCDictionary::create());
        this->setTitleLabelDispatchTable(CCDictionary::create());
        this->setBackgroundSpriteDispatchTable(CCDictionary::create());
        
        setTouchEnabled(true);
        m_isPushed = false;
        m_zoomOnTouchDown = true;
        
        m_currentTitle=NULL;
        
        // Zooming button by default
        m_zoomOnTouchDown = true;
        
        // Set the default anchor point
        ignoreAnchorPointForPosition(false);
        setAnchorPoint(ccp(0.5f, 0.5f));
        
        // Set the nodes
        setTitleLabel(node);
        setBackgroundSprite(backgroundSprite);
        
        // Set the default color and opacity
        setColor(ccc3(255.0f, 255.0f, 255.0f));
        setOpacity(255.0f);
        setOpacityModifyRGB(true);
        
        // Initialize the dispatch table
        
        CCString* tempString = CCString::create(label->getString());
        //tempString->autorelease();
        setTitleForState(tempString, CCControlStateNormal);
        setTitleColorForState(rgbaLabel->getColor(), CCControlStateNormal);
        setTitleLabelForState(node, CCControlStateNormal);
        setBackgroundSpriteForState(backgroundSprite, CCControlStateNormal);
        
        setLabelAnchorPoint(ccp(0.5f, 0.5f));
        
        // Layout update
        needsLayout();
        
        return true;
    }
    //couldn't init the CCControl
    else
    {
        return false;
    }
}

CCSpriteControlButton* CCSpriteControlButton::create(CCNode* label, CCSprite* backgroundSprite)
{
    CCSpriteControlButton *pRet = new CCSpriteControlButton();
    pRet->initWithLabelAndBackgroundSprite(label, backgroundSprite);
    pRet->autorelease();
    return pRet;
}

bool CCSpriteControlButton::initWithTitleAndFontNameAndFontSize(string title, const char * fontName, float fontSize)
{
    CCLabelTTF *label = CCLabelTTF::create(title.c_str(), fontName, fontSize);
    return initWithLabelAndBackgroundSprite(label, CCSprite::create());
}

CCSpriteControlButton* CCSpriteControlButton::create(string title, const char * fontName, float fontSize)
{
    CCSpriteControlButton *pRet = new CCSpriteControlButton();
    pRet->initWithTitleAndFontNameAndFontSize(title, fontName, fontSize);
    pRet->autorelease();
    return pRet;
}

bool CCSpriteControlButton::initWithBackgroundSprite(CCSprite* sprite)
{
    CCLabelTTF *label = CCLabelTTF::create("", "Arial", 30);//
    return initWithLabelAndBackgroundSprite(label, sprite);
}

CCSpriteControlButton* CCSpriteControlButton::create(CCSprite* sprite)
{
    CCSpriteControlButton *pRet = new CCSpriteControlButton();
    pRet->initWithBackgroundSprite(sprite);
    pRet->autorelease();
    return pRet;
}


void CCSpriteControlButton::setMargins(int marginH, int marginV)
{
    m_marginV=marginV;
    m_marginH=marginH;
    needsLayout();
}

void CCSpriteControlButton::setEnabled(bool enabled)
{
    CCControl::setEnabled(enabled);
    needsLayout();
}

void CCSpriteControlButton::setSelected(bool enabled)
{
    CCControl::setSelected(enabled);
    needsLayout();
}

void CCSpriteControlButton::setHighlighted(bool enabled)
{
    CCControl::setHighlighted(enabled);
    
    CCAction *action =getActionByTag(kZoomActionTag);
    if (action)
    {
        stopAction(action);
    }
    needsLayout();
    if( m_zoomOnTouchDown )
    {
        float scaleValue = (isHighlighted() && isEnabled() && !isSelected()) ? 1.1f : 1.0f;
        CCAction *zoomAction =CCScaleTo::create(0.05f, scaleValue);
        zoomAction->setTag(kZoomActionTag);
        runAction(zoomAction);
    }
}

void CCSpriteControlButton::setZoomOnTouchDown(bool zoomOnTouchDown)
{
    m_zoomOnTouchDown = zoomOnTouchDown;
}

bool CCSpriteControlButton::getZoomOnTouchDown()
{
    return m_zoomOnTouchDown;
}

CCPoint CCSpriteControlButton::getLabelAnchorPoint()
{
    return this->m_labelAnchorPoint;
}

void CCSpriteControlButton::setLabelAnchorPoint(CCPoint labelAnchorPoint)
{
    this->m_labelAnchorPoint = labelAnchorPoint;
    if (m_titleLabel != NULL)
    {
        this->m_titleLabel->setAnchorPoint(labelAnchorPoint);
    }
}

CCString* CCSpriteControlButton::getTitleForState(CCControlState state)
{
    if (m_titleDispatchTable != NULL)
    {
        CCString* title=(CCString*)m_titleDispatchTable->objectForKey(state);
        if (title)
        {
            return title;
        }
        return (CCString*)m_titleDispatchTable->objectForKey(CCControlStateNormal);
    }
    return CCString::create("");
}

void CCSpriteControlButton::setTitleForState(CCString* title, CCControlState state)
{
    m_titleDispatchTable->removeObjectForKey(state);
    
    if (title)
    {
        m_titleDispatchTable->setObject(title, state);
    }
    
    // If the current state if equal to the given state we update the layout
    if (getState() == state)
    {
        needsLayout();
    }
}


const ccColor3B CCSpriteControlButton::getTitleColorForState(CCControlState state)
{
    ccColor3B returnColor = ccWHITE;
    do
    {
        CC_BREAK_IF(NULL == m_titleColorDispatchTable);
        CCColor3bObject* colorObject=(CCColor3bObject*)m_titleColorDispatchTable->objectForKey(state);
        if (colorObject)
        {
            returnColor= colorObject->value;
            break;
        }
        
        colorObject=(CCColor3bObject*)m_titleColorDispatchTable->objectForKey(CCControlStateNormal);
        if (colorObject)
        {
            returnColor=colorObject->value;
        }
    } while (0);
    
    return returnColor;
}

void CCSpriteControlButton::setTitleColorForState(ccColor3B color, CCControlState state)
{
    //ccColor3B* colorValue=&color;
    m_titleColorDispatchTable->removeObjectForKey(state);
    CCColor3bObject* pColor3bObject = new CCColor3bObject(color);
    pColor3bObject->autorelease();
    m_titleColorDispatchTable->setObject(pColor3bObject, state);
    
    // If the current state if equal to the given state we update the layout
    if (getState() == state)
    {
        needsLayout();
    }
}

CCNode* CCSpriteControlButton::getTitleLabelForState(CCControlState state)
{
    CCNode* titleLabel=(CCNode*)m_titleLabelDispatchTable->objectForKey(state);
    if (titleLabel)
    {
        return titleLabel;
    }
    return (CCNode*)m_titleLabelDispatchTable->objectForKey(CCControlStateNormal);
}

void CCSpriteControlButton::setTitleLabelForState(CCNode* titleLabel, CCControlState state)
{
    CCNode* previousLabel = (CCNode*)m_titleLabelDispatchTable->objectForKey(state);
    if (previousLabel)
    {
        removeChild(previousLabel, true);
        m_titleLabelDispatchTable->removeObjectForKey(state);
    }
    
    m_titleLabelDispatchTable->setObject(titleLabel, state);
    titleLabel->setVisible(false);
    titleLabel->setAnchorPoint(ccp(0.5f, 0.5f));
    addChild(titleLabel, 1);
    
    // If the current state if equal to the given state we update the layout
    if (getState() == state)
    {
        needsLayout();
    }
}

void CCSpriteControlButton::setTitleTTFForState(const char * fntFile, CCControlState state)
{
    CCString * title = this->getTitleForState(state);
    if (!title)
    {
        title = CCString::create("");
    }
    this->setTitleLabelForState(CCLabelTTF::create(title->getCString(), fntFile, 12), state);
}

const char * CCSpriteControlButton::getTitleTTFForState(CCControlState state)
{
    CCLabelProtocol* label = dynamic_cast<CCLabelProtocol*>(this->getTitleLabelForState(state));
    CCLabelTTF* labelTTF = dynamic_cast<CCLabelTTF*>(label);
    if(labelTTF != 0)
    {
        return labelTTF->getFontName();
    }
    else
    {
        return "";
    }
}

void CCSpriteControlButton::setTitleTTFSizeForState(float size, CCControlState state)
{
    CCLabelProtocol* label = dynamic_cast<CCLabelProtocol*>(this->getTitleLabelForState(state));
    if(label)
    {
        CCLabelTTF* labelTTF = dynamic_cast<CCLabelTTF*>(label);
        if(labelTTF != 0)
        {
            return labelTTF->setFontSize(size);
        }
    }
}

float CCSpriteControlButton::getTitleTTFSizeForState(CCControlState state)
{
    CCLabelProtocol* label = dynamic_cast<CCLabelProtocol*>(this->getTitleLabelForState(state));
    CCLabelTTF* labelTTF = dynamic_cast<CCLabelTTF*>(label);
    if(labelTTF != 0)
    {
        return labelTTF->getFontSize();
    }
    else
    {
        return 0;
    }
}

void CCSpriteControlButton::setTitleBMFontForState(const char * fntFile, CCControlState state)
{
    CCString * title = this->getTitleForState(state);
    if (!title)
    {
        title = CCString::create("");
    }
    this->setTitleLabelForState(CCLabelBMFont::create(title->getCString(), fntFile), state);
}

const char * CCSpriteControlButton::getTitleBMFontForState(CCControlState state)
{
    CCLabelProtocol* label = dynamic_cast<CCLabelProtocol*>(this->getTitleLabelForState(state));
    CCLabelBMFont* labelBMFont = dynamic_cast<CCLabelBMFont*>(label);
    if(labelBMFont != 0)
    {
        return labelBMFont->getFntFile();
    }
    else
    {
        return "";
    }
}


CCSprite* CCSpriteControlButton::getBackgroundSpriteForState(CCControlState state)
{
    CCSprite* backgroundSprite=(CCSprite*)m_backgroundSpriteDispatchTable->objectForKey(state);
    if (backgroundSprite)
    {
        return backgroundSprite;
    }
    return (CCSprite*)m_backgroundSpriteDispatchTable->objectForKey(CCControlStateNormal);
}


void CCSpriteControlButton::setBackgroundSpriteForState(CCSprite* sprite, CCControlState state)
{
    CCSprite* previousBackgroundSprite = (CCSprite*)m_backgroundSpriteDispatchTable->objectForKey(state);
    if (previousBackgroundSprite)
    {
        removeChild(previousBackgroundSprite, true);
        m_backgroundSpriteDispatchTable->removeObjectForKey(state);
    }
    
    m_backgroundSpriteDispatchTable->setObject(sprite, state);
    sprite->setVisible(false);
    sprite->setAnchorPoint(ccp(0.5f, 0.5f));
    addChild(sprite);
        
    // If the current state if equal to the given state we update the layout
    if (getState() == state)
    {
        needsLayout();
    }
}

void CCSpriteControlButton::setBackgroundSpriteFrameForState(CCSpriteFrame * spriteFrame, CCControlState state)
{
    CCSprite * sprite = CCSprite::createWithSpriteFrame(spriteFrame);
    this->setBackgroundSpriteForState(sprite, state);
}


void CCSpriteControlButton::needsLayout()
{
    if (!m_bParentInited) {
        return;
    }
    // Hide the background and the label
    if (m_titleLabel != NULL) {
        m_titleLabel->setVisible(false);
    }
    if (m_backgroundSprite) {
        m_backgroundSprite->setVisible(false);
    }
    // Update anchor of all labels
    this->setLabelAnchorPoint(this->m_labelAnchorPoint);
    
    // Update the label to match with the current state
    CC_SAFE_RELEASE(m_currentTitle);
    m_currentTitle = getTitleForState(m_eState);
    CC_SAFE_RETAIN(m_currentTitle);
    
    m_currentTitleColor=getTitleColorForState(m_eState);
    
    this->setTitleLabel(getTitleLabelForState(m_eState));
    
    CCLabelProtocol* label = dynamic_cast<CCLabelProtocol*>(m_titleLabel);
    if (label && m_currentTitle)
    {
        label->setString(m_currentTitle->getCString());
    }
    
    CCRGBAProtocol* rgbaLabel = dynamic_cast<CCRGBAProtocol*>(m_titleLabel);
    if (rgbaLabel)
    {
        rgbaLabel->setColor(m_currentTitleColor);
    }
    if (m_titleLabel != NULL)
    {
        m_titleLabel->setPosition(ccp (getContentSize().width / 2, getContentSize().height / 2));
    }
    
    // Update the background sprite
    this->setBackgroundSprite(this->getBackgroundSpriteForState(m_eState));
    if (m_backgroundSprite != NULL)
    {
        m_backgroundSprite->setPosition(ccp (getContentSize().width / 2, getContentSize().height / 2));
    }
    
    // Get the title label size
    CCSize titleLabelSize;
    if (m_titleLabel != NULL)
    {
        titleLabelSize = m_titleLabel->boundingBox().size;
    }
    
    // Set the content size
    CCRect rectTitle;
    if (m_titleLabel != NULL)
    {
        rectTitle = m_titleLabel->boundingBox();
    }
    CCRect rectBackground;
    if (m_backgroundSprite != NULL)
    {
        rectBackground = m_backgroundSprite->boundingBox();
    }
    
    CCRect maxRect = CCControlUtils::CCRectUnion(rectTitle, rectBackground);
    setContentSize(CCSizeMake(maxRect.size.width, maxRect.size.height));
    
    if (m_titleLabel != NULL)
    {
        m_titleLabel->setPosition(ccp(getContentSize().width/2, getContentSize().height/2));
        // Make visible the background and the label
        m_titleLabel->setVisible(true);
    }
    
    if (m_backgroundSprite != NULL)
    {
        m_backgroundSprite->setPosition(ccp(getContentSize().width/2, getContentSize().height/2));
        m_backgroundSprite->setVisible(true);
    }
}



bool CCSpriteControlButton::ccTouchBegan(CCTouch *pTouch, CCEvent *pEvent)
{
    if (!isTouchInside(pTouch) || !isEnabled() || !isVisible())
    {
        return false;
    }
    
    m_eState=CCControlStateHighlighted;
    m_isPushed=true;
    this->setHighlighted(true);
    sendActionsForControlEvents(CCControlEventTouchDown);
    return true;
}

void CCSpriteControlButton::ccTouchMoved(CCTouch *pTouch, CCEvent *pEvent)
{
    if (!isEnabled() || !isPushed() || isSelected())
    {
        if (isHighlighted())
        {
            setHighlighted(false);
        }
        return;
    }
    
    bool isTouchMoveInside = isTouchInside(pTouch);
    if (isTouchMoveInside && !isHighlighted())
    {
        m_eState = CCControlStateHighlighted;
        setHighlighted(true);
        sendActionsForControlEvents(CCControlEventTouchDragEnter);
    }
    else if (isTouchMoveInside && isHighlighted())
    {
        sendActionsForControlEvents(CCControlEventTouchDragInside);
    }
    else if (!isTouchMoveInside && isHighlighted())
    {
        m_eState = CCControlStateNormal;
        setHighlighted(false);
        
        sendActionsForControlEvents(CCControlEventTouchDragExit);
    }
    else if (!isTouchMoveInside && !isHighlighted())
    {
        sendActionsForControlEvents(CCControlEventTouchDragOutside);
    }
}
void CCSpriteControlButton::ccTouchEnded(CCTouch *pTouch, CCEvent *pEvent)
{
    m_eState = CCControlStateNormal;
    m_isPushed = false;
    setHighlighted(false);
    
    
    if (isTouchInside(pTouch))
    {
        sendActionsForControlEvents(CCControlEventTouchUpInside);
    }
    else
    {
        sendActionsForControlEvents(CCControlEventTouchUpOutside);
    }
}

void CCSpriteControlButton::setOpacity(GLubyte opacity)
{
    m_cOpacity = opacity;
    
    CCObject* child;
    CCArray* children=getChildren();
    CCARRAY_FOREACH(children, child)
    {
        CCRGBAProtocol* pNode = dynamic_cast<CCRGBAProtocol*>(child);
        if (pNode)
        {
            pNode->setOpacity(opacity);
        }
    }
    CCDictElement * item = NULL;
    CCDICT_FOREACH(m_backgroundSpriteDispatchTable, item)
    {
        CCSprite* sprite = (CCSprite*)item->getObject();
        sprite->setOpacity(opacity);
    }
}

GLubyte CCSpriteControlButton::getOpacity()
{
    return m_cOpacity;
}

void CCSpriteControlButton::ccTouchCancelled(CCTouch *pTouch, CCEvent *pEvent)
{
    m_eState = CCControlStateNormal;
    m_isPushed = false;
    setHighlighted(false);
    sendActionsForControlEvents(CCControlEventTouchCancel);
}

CCSpriteControlButton* CCSpriteControlButton::create()
{
    CCSpriteControlButton *pControlButton = new CCSpriteControlButton();
    if (pControlButton && pControlButton->init())
    {
        pControlButton->autorelease();
        return pControlButton;
    }
    CC_SAFE_DELETE(pControlButton);
    return NULL;
}

NS_CC_EXT_END

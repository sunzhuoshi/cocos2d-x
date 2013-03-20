//
//  CCSpriteControlButton.h
//  WaterMargin
//
//  Created by sun zhuoshi on 3/19/13.
//
//

#ifndef __CCSPRITE_CONTROL_BUTTON_H__
#define __CCSPRITE_CONTROL_BUTTON_H__

#include "CCControl.h"
#include "CCInvocation.h"
#include "sprite_nodes/CCSprite.h"

NS_CC_EXT_BEGIN

/**
 * @addtogroup GUI
 * @{
 * @addtogroup control_extension
 * @{
 */

/** @class CCSpriteControlButton Button control for Cocos2D. */
class CCSpriteControlButton : public CCControl
{
public:
    CCSpriteControlButton();
    virtual ~CCSpriteControlButton();
    virtual void needsLayout(void);
    
    virtual void setEnabled(bool enabled);
    virtual void setSelected(bool enabled);
    virtual void setHighlighted(bool enabled);
protected:
    
    /** The current title that is displayed on the button. */
    CC_SYNTHESIZE_READONLY(CCString*, m_currentTitle, CurrentTitle);
    
    /** The current color used to display the title. */
    CC_SYNTHESIZE_READONLY_PASS_BY_REF(ccColor3B, m_currentTitleColor, CurrentTitleColor);
    
    /** The current title label. */
    CC_SYNTHESIZE_RETAIN(CCNode*, m_titleLabel, TitleLabel);
    
    /** The current background sprite. */
    CC_SYNTHESIZE_RETAIN(CCSprite*, m_backgroundSprite, BackgroundSprite);
        
    /** Adjust the button zooming on touchdown. Default value is YES. */
    CC_PROPERTY(bool, m_zoomOnTouchDown, ZoomOnTouchDown);
    
    CC_PROPERTY(CCPoint, m_labelAnchorPoint, LabelAnchorPoint);
    
    /* Override setter to affect a background sprite too */
    virtual GLubyte getOpacity(void);
    virtual void setOpacity(GLubyte var);
    
    /** Flag to know if the button is currently pushed.  */
protected:
    bool m_isPushed;
    bool m_bParentInited;
public:
    bool isPushed() { return m_isPushed; }
    
    // <CCControlState, CCString*>
    CC_SYNTHESIZE_RETAIN(CCDictionary*, m_titleDispatchTable, TitleDispatchTable);
    // <CCControlState, CCColor3bObject*>
    CC_SYNTHESIZE_RETAIN(CCDictionary*, m_titleColorDispatchTable, TitleColorDispatchTable);
    // <CCControlState, CCNode*>
    CC_SYNTHESIZE_RETAIN(CCDictionary*, m_titleLabelDispatchTable, TitleLabelDispatchTable);
    // <CCControlState, CCScale9Sprite*>
    CC_SYNTHESIZE_RETAIN(CCDictionary*, m_backgroundSpriteDispatchTable, BackgroundSpriteDispatchTable);
    
    /* Define the button margin for Top/Bottom edge */
    CC_SYNTHESIZE_READONLY(int, m_marginV, VerticalMargin);
    /* Define the button margin for Left/Right edge */
    CC_SYNTHESIZE_READONLY(int, m_marginH, HorizontalOrigin);
    //set the margins at once (so we only have to do one call of needsLayout)
    virtual void setMargins(int marginH, int marginV);
    
    
public:
    virtual bool init();
    virtual bool initWithLabelAndBackgroundSprite(CCNode* label, CCSprite* backgroundSprite);
    
    static CCSpriteControlButton* create(CCNode* label, CCSprite* backgroundSprite);
    
    virtual bool initWithTitleAndFontNameAndFontSize(std::string title, const char * fontName, float fontSize);
    
    static CCSpriteControlButton* create(std::string title, const char * fontName, float fontSize);
    
    virtual bool initWithBackgroundSprite(CCSprite* sprite);
    
    static CCSpriteControlButton* create(CCSprite* sprite);
    
    //events
    virtual bool ccTouchBegan(CCTouch *pTouch, CCEvent *pEvent);
    virtual void ccTouchMoved(CCTouch *pTouch, CCEvent *pEvent);
    virtual void ccTouchEnded(CCTouch *pTouch, CCEvent *pEvent);
    virtual void ccTouchCancelled(CCTouch *pTouch, CCEvent *pEvent);
    
    /**
     * Returns the title used for a state.
     *
     * @param state The state that uses the title. Possible values are described in
     * "CCControlState".
     *
     * @return The title for the specified state.
     */
    virtual CCString* getTitleForState(CCControlState state);
    
    /**
     * Sets the title string to use for the specified state.
     * If a property is not specified for a state, the default is to use
     * the CCButtonStateNormal value.
     *
     * @param title The title string to use for the specified state.
     * @param state The state that uses the specified title. The values are described
     * in "CCControlState".
     */
    virtual void setTitleForState(CCString* title, CCControlState state);
    
    /**
     * Returns the title color used for a state.
     *
     * @param state The state that uses the specified color. The values are described
     * in "CCControlState".
     *
     * @return The color of the title for the specified state.
     */
    
    virtual const ccColor3B getTitleColorForState(CCControlState state);
    
    /**
     * Sets the color of the title to use for the specified state.
     *
     * @param color The color of the title to use for the specified state.
     * @param state The state that uses the specified color. The values are described
     * in "CCControlState".
     */
    virtual void setTitleColorForState(ccColor3B color, CCControlState state);
    
    /**
     * Returns the title label used for a state.
     *
     * @param state The state that uses the title label. Possible values are described
     * in "CCControlState".
     */
    virtual CCNode* getTitleLabelForState(CCControlState state);
    
    /**
     * Sets the title label to use for the specified state.
     * If a property is not specified for a state, the default is to use
     * the CCButtonStateNormal value.
     *
     * @param title The title label to use for the specified state.
     * @param state The state that uses the specified title. The values are described
     * in "CCControlState".
     */
    virtual void setTitleLabelForState(CCNode* label, CCControlState state);
    
    virtual void setTitleTTFForState(const char * fntFile, CCControlState state);
    virtual const char * getTitleTTFForState(CCControlState state);
    
    virtual void setTitleTTFSizeForState(float size, CCControlState state);
    virtual float getTitleTTFSizeForState(CCControlState state);
    
    /**
     * Sets the font of the label, changes the label to a CCLabelBMFont if neccessary.
     * @param fntFile The name of the font to change to
     * @param state The state that uses the specified fntFile. The values are described
     * in "CCControlState".
     */
    virtual void setTitleBMFontForState(const char * fntFile, CCControlState state);
    virtual const char * getTitleBMFontForState(CCControlState state);
    
    /**
     * Returns the background sprite used for a state.
     *
     * @param state The state that uses the background sprite. Possible values are
     * described in "CCControlState".
     */
    virtual CCSprite* getBackgroundSpriteForState(CCControlState state);
    
    /**
     * Sets the background sprite to use for the specified button state.
     *
     * @param sprite The background sprite to use for the specified state.
     * @param state The state that uses the specified image. The values are described
     * in "CCControlState".
     */
    virtual void setBackgroundSpriteForState(CCSprite* sprite, CCControlState state);
    
    /**
     * Sets the background spriteFrame to use for the specified button state.
     *
     * @param spriteFrame The background spriteFrame to use for the specified state.
     * @param state The state that uses the specified image. The values are described
     * in "CCControlState".
     */
    virtual void setBackgroundSpriteFrameForState(CCSpriteFrame * spriteFrame, CCControlState state);
    
    static CCSpriteControlButton* create();
};

// end of GUI group
/// @}
/// @}

NS_CC_EXT_END

#endif /* defined(__CCSPRITE_CONTROL_BUTTON_H__) */

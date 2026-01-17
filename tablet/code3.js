gdjs.Vocab_32SelectorCode = {};
gdjs.Vocab_32SelectorCode.localVariables = [];
gdjs.Vocab_32SelectorCode.idToCallbackMap = new Map();
gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1= [];
gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects2= [];
gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects3= [];
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1= [];
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects2= [];
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects3= [];
gdjs.Vocab_32SelectorCode.GDVocabObjects1= [];
gdjs.Vocab_32SelectorCode.GDVocabObjects2= [];
gdjs.Vocab_32SelectorCode.GDVocabObjects3= [];
gdjs.Vocab_32SelectorCode.GD_95956thObjects1= [];
gdjs.Vocab_32SelectorCode.GD_95956thObjects2= [];
gdjs.Vocab_32SelectorCode.GD_95956thObjects3= [];
gdjs.Vocab_32SelectorCode.GD_95959thObjects1= [];
gdjs.Vocab_32SelectorCode.GD_95959thObjects2= [];
gdjs.Vocab_32SelectorCode.GD_95959thObjects3= [];
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1= [];
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects2= [];
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects3= [];
gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1= [];
gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects2= [];
gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects3= [];
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects1= [];
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects2= [];
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects3= [];
gdjs.Vocab_32SelectorCode.GDPlaneObjects1= [];
gdjs.Vocab_32SelectorCode.GDPlaneObjects2= [];
gdjs.Vocab_32SelectorCode.GDPlaneObjects3= [];


gdjs.Vocab_32SelectorCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1, gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects2);

gdjs.copyArray(gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1, gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects2);

{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects2.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects2[i].SetChecked(true, null);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects2.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects2[i].SetChecked(false, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1, gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects2);

gdjs.copyArray(gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1, gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects2);

{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects2.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects2[i].SetChecked(false, null);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects2.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects2[i].SetChecked(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 9);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1 */
/* Reuse gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1 */
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[i].SetChecked(true, null);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[i].SetChecked(false, null);
}
}
}

}


};gdjs.Vocab_32SelectorCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plane"), gdjs.Vocab_32SelectorCode.GDPlaneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selector_slider"), gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vocab"), gdjs.Vocab_32SelectorCode.GDVocabObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vocab_section"), gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("_6th"), gdjs.Vocab_32SelectorCode.GD_95956thObjects1);
gdjs.copyArray(runtimeScene.getObjects("_6th_toggle"), gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1);
gdjs.copyArray(runtimeScene.getObjects("_9th"), gdjs.Vocab_32SelectorCode.GD_95959thObjects1);
gdjs.copyArray(runtimeScene.getObjects("_9th_toggle"), gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("CrashDAvion-Storage", "VocabGrade", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("CrashDAvion-Storage", "VocabUnité", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("CrashDAvion-Storage", "VocabVolet", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("CrashDAvion-Storage", "SliderValue", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("CrashDAvion-Storage", "SliderMaxValue", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDPlaneObjects1[i].setY(gdjs.evtTools.window.getWindowInnerHeight() / 2);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[i].setY(gdjs.evtTools.window.getWindowInnerHeight() / 2);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[i].setY(gdjs.evtTools.window.getWindowInnerHeight() / 2 - 100);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[i].setY(gdjs.evtTools.window.getWindowInnerHeight() / 2 - 100);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95956thObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95956thObjects1[i].setY(gdjs.evtTools.window.getWindowInnerHeight() / 2 - 100);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95959thObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95959thObjects1[i].setY(gdjs.evtTools.window.getWindowInnerHeight() / 2 - 100);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDVocabObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDVocabObjects1[i].setY(gdjs.evtTools.window.getWindowInnerHeight() / 2 - 200);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1[i].setY(gdjs.evtTools.window.getWindowInnerHeight() / 2 + 100);
}
}
{gdjs.evtTools.firebaseTools.database.getVariable("/6th_list", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(2));
}
{gdjs.evtTools.firebaseTools.database.getVariable("/9th_list", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(2));
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[i].SetMaxValue(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), null);
}
}

{ //Subevents
gdjs.Vocab_32SelectorCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_6th_toggle"), gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length;i<l;++i) {
    if ( gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[i].HasJustBeenChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[k] = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[i];
        ++k;
    }
}
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_9th_toggle"), gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1);
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[i].SetChecked(false, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_6th_toggle"), gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length;i<l;++i) {
    if ( gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[i].HasJustBeenUnchecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[k] = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[i];
        ++k;
    }
}
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_9th_toggle"), gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1);
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[i].SetChecked(true, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(9);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_9th_toggle"), gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length;i<l;++i) {
    if ( gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[i].HasJustBeenChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[k] = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[i];
        ++k;
    }
}
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_6th_toggle"), gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1);
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[i].SetChecked(false, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(9);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_9th_toggle"), gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length;i<l;++i) {
    if ( gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[i].HasJustBeenUnchecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[k] = gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1[i];
        ++k;
    }
}
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_6th_toggle"), gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1);
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1[i].SetChecked(true, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector_slider"), gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vocab_section"), gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1);
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[i].SetMaxValue(31, null);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1[i].getBehavior("Text").setText("Unité: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.common.toString((( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].Value(null)) - 1)).getChild("group1").getAsString() + " Volet: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.common.toString((( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].Value(null)) - 1)).getChild("group2").getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.common.toString((( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].Value(null)) - 1)).getChild("group1").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.evtTools.common.toString((( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].Value(null)) - 1)).getChild("group2").getAsString());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("CrashDAvion-Storage", "SliderMaxValue", (( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].MaxValue(null)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector_slider"), gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vocab_section"), gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1);
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[i].SetMaxValue(11, null);
}
}
{for(var i = 0, len = gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1.length ;i < len;++i) {
    gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1[i].getBehavior("Text").setText("Unité: " + runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.evtTools.common.toString((( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].Value(null)) - 1)).getChild("group1").getAsString() + " Volet: " + runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.evtTools.common.toString((( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].Value(null)) - 1)).getChild("group2").getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.evtTools.common.toString((( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].Value(null)) - 1)).getChild("group1").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.evtTools.common.toString((( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].Value(null)) - 1)).getChild("group2").getAsString());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("CrashDAvion-Storage", "SliderMaxValue", (( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].MaxValue(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_button"), gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects1[k] = gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector_slider"), gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("CrashDAvion-Storage", "VocabGrade", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("CrashDAvion-Storage", "VocabUnité", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("CrashDAvion-Storage", "VocabVolet", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("CrashDAvion-Storage", "SliderValue", (( gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length === 0 ) ? 0 :gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1[0].Value(null)));
}
}

}


};

gdjs.Vocab_32SelectorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GDVocabObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDVocabObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDVocabObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956thObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956thObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956thObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959thObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959thObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959thObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GDPlaneObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDPlaneObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDPlaneObjects3.length = 0;

gdjs.Vocab_32SelectorCode.eventsList1(runtimeScene);
gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDSelector_9595sliderObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956th_9595toggleObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GDVocabObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDVocabObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDVocabObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956thObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956thObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GD_95956thObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959thObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959thObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959thObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GD_95959th_9595toggleObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDVocab_9595sectionObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDBack_9595buttonObjects3.length = 0;
gdjs.Vocab_32SelectorCode.GDPlaneObjects1.length = 0;
gdjs.Vocab_32SelectorCode.GDPlaneObjects2.length = 0;
gdjs.Vocab_32SelectorCode.GDPlaneObjects3.length = 0;


return;

}

gdjs['Vocab_32SelectorCode'] = gdjs.Vocab_32SelectorCode;

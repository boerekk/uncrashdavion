gdjs.Game_32MenuCode = {};
gdjs.Game_32MenuCode.localVariables = [];
gdjs.Game_32MenuCode.idToCallbackMap = new Map();
gdjs.Game_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Game_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Game_32MenuCode.GDPlayButtonObjects3= [];
gdjs.Game_32MenuCode.GDShopButtonObjects1= [];
gdjs.Game_32MenuCode.GDShopButtonObjects2= [];
gdjs.Game_32MenuCode.GDShopButtonObjects3= [];
gdjs.Game_32MenuCode.GDAir_9595detailsObjects1= [];
gdjs.Game_32MenuCode.GDAir_9595detailsObjects2= [];
gdjs.Game_32MenuCode.GDAir_9595detailsObjects3= [];
gdjs.Game_32MenuCode.GDVocabButtonObjects1= [];
gdjs.Game_32MenuCode.GDVocabButtonObjects2= [];
gdjs.Game_32MenuCode.GDVocabButtonObjects3= [];
gdjs.Game_32MenuCode.GDTotalCoinsObjects1= [];
gdjs.Game_32MenuCode.GDTotalCoinsObjects2= [];
gdjs.Game_32MenuCode.GDTotalCoinsObjects3= [];
gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects1= [];
gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects2= [];
gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects3= [];
gdjs.Game_32MenuCode.GDPlaneObjects1= [];
gdjs.Game_32MenuCode.GDPlaneObjects2= [];
gdjs.Game_32MenuCode.GDPlaneObjects3= [];


gdjs.Game_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("1");
}
}

}


};gdjs.Game_32MenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("PlayButton"), gdjs.Game_32MenuCode.GDPlayButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32MenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32MenuCode.GDPlayButtonObjects2[i].IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32MenuCode.GDPlayButtonObjects2[k] = gdjs.Game_32MenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32MenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}
}

}


};gdjs.Game_32MenuCode.asyncCallback12537004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32MenuCode.localVariables);

{ //Subevents
gdjs.Game_32MenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32MenuCode.localVariables.length = 0;
}
gdjs.Game_32MenuCode.idToCallbackMap.set(12537004, gdjs.Game_32MenuCode.asyncCallback12537004);
gdjs.Game_32MenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32MenuCode.localVariables);
for (const obj of gdjs.Game_32MenuCode.GDPlayButtonObjects1) asyncObjectsList.addObject("PlayButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Game_32MenuCode.asyncCallback12537004(runtimeScene, asyncObjectsList)), 12537004, asyncObjectsList);
}
}

}


};gdjs.Game_32MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plane"), gdjs.Game_32MenuCode.GDPlaneObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Game_32MenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShopButton"), gdjs.Game_32MenuCode.GDShopButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TotalCoins"), gdjs.Game_32MenuCode.GDTotalCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("TotalCoinsCounter"), gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects1);
{for(var i = 0, len = gdjs.Game_32MenuCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.Game_32MenuCode.GDPlaneObjects1[i].getBehavior("Animation").setAnimationName("skin default");
}
}
{for(var i = 0, len = gdjs.Game_32MenuCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.Game_32MenuCode.GDPlaneObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
{for(var i = 0, len = gdjs.Game_32MenuCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.Game_32MenuCode.GDPlaneObjects1[i].setPosition(gdjs.evtTools.window.getWindowInnerWidth() / 2 - 20,gdjs.evtTools.window.getWindowInnerHeight() / 2 - 80);
}
}
{for(var i = 0, len = gdjs.Game_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32MenuCode.GDPlayButtonObjects1[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - 150);
}
}
{for(var i = 0, len = gdjs.Game_32MenuCode.GDShopButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32MenuCode.GDShopButtonObjects1[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - 115);
}
}
{for(var i = 0, len = gdjs.Game_32MenuCode.GDTotalCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32MenuCode.GDTotalCoinsObjects1[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - 115);
}
}
{for(var i = 0, len = gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects1.length ;i < len;++i) {
    gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects1[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 + 25);
}
}
{gdjs.evtTools.storage.readNumberFromJSONFile("CrashDAvion-Storage", "VocabGrade", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("CrashDAvion-Storage", "VocabUnité", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("CrashDAvion-Storage", "VocabVolet", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("CrashDAvion-Storage", "TotalCoins", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
{for(var i = 0, len = gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects1.length ;i < len;++i) {
    gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}

{ //Subevents
gdjs.Game_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Game_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32MenuCode.GDPlayButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32MenuCode.GDPlayButtonObjects1[k] = gdjs.Game_32MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopButton"), gdjs.Game_32MenuCode.GDShopButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32MenuCode.GDShopButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32MenuCode.GDShopButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32MenuCode.GDShopButtonObjects1[k] = gdjs.Game_32MenuCode.GDShopButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32MenuCode.GDShopButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Shop");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("VocabButton"), gdjs.Game_32MenuCode.GDVocabButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32MenuCode.GDVocabButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32MenuCode.GDVocabButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32MenuCode.GDVocabButtonObjects1[k] = gdjs.Game_32MenuCode.GDVocabButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32MenuCode.GDVocabButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Vocab Selector");
}
}

}


};

gdjs.Game_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Game_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Game_32MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.Game_32MenuCode.GDShopButtonObjects1.length = 0;
gdjs.Game_32MenuCode.GDShopButtonObjects2.length = 0;
gdjs.Game_32MenuCode.GDShopButtonObjects3.length = 0;
gdjs.Game_32MenuCode.GDAir_9595detailsObjects1.length = 0;
gdjs.Game_32MenuCode.GDAir_9595detailsObjects2.length = 0;
gdjs.Game_32MenuCode.GDAir_9595detailsObjects3.length = 0;
gdjs.Game_32MenuCode.GDVocabButtonObjects1.length = 0;
gdjs.Game_32MenuCode.GDVocabButtonObjects2.length = 0;
gdjs.Game_32MenuCode.GDVocabButtonObjects3.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsObjects1.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsObjects2.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsObjects3.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects1.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects2.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects3.length = 0;
gdjs.Game_32MenuCode.GDPlaneObjects1.length = 0;
gdjs.Game_32MenuCode.GDPlaneObjects2.length = 0;
gdjs.Game_32MenuCode.GDPlaneObjects3.length = 0;

gdjs.Game_32MenuCode.eventsList3(runtimeScene);
gdjs.Game_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Game_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Game_32MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.Game_32MenuCode.GDShopButtonObjects1.length = 0;
gdjs.Game_32MenuCode.GDShopButtonObjects2.length = 0;
gdjs.Game_32MenuCode.GDShopButtonObjects3.length = 0;
gdjs.Game_32MenuCode.GDAir_9595detailsObjects1.length = 0;
gdjs.Game_32MenuCode.GDAir_9595detailsObjects2.length = 0;
gdjs.Game_32MenuCode.GDAir_9595detailsObjects3.length = 0;
gdjs.Game_32MenuCode.GDVocabButtonObjects1.length = 0;
gdjs.Game_32MenuCode.GDVocabButtonObjects2.length = 0;
gdjs.Game_32MenuCode.GDVocabButtonObjects3.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsObjects1.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsObjects2.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsObjects3.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects1.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects2.length = 0;
gdjs.Game_32MenuCode.GDTotalCoinsCounterObjects3.length = 0;
gdjs.Game_32MenuCode.GDPlaneObjects1.length = 0;
gdjs.Game_32MenuCode.GDPlaneObjects2.length = 0;
gdjs.Game_32MenuCode.GDPlaneObjects3.length = 0;


return;

}

gdjs['Game_32MenuCode'] = gdjs.Game_32MenuCode;

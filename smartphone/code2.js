gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.idToCallbackMap = new Map();
gdjs.ShopCode.GDFreeCoinsButtonObjects1= [];
gdjs.ShopCode.GDFreeCoinsButtonObjects2= [];
gdjs.ShopCode.GDFreeCoinsButtonObjects3= [];
gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects1= [];
gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects2= [];
gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects3= [];
gdjs.ShopCode.GDRedButtonObjects1= [];
gdjs.ShopCode.GDRedButtonObjects2= [];
gdjs.ShopCode.GDRedButtonObjects3= [];
gdjs.ShopCode.GDPlaneObjects1= [];
gdjs.ShopCode.GDPlaneObjects2= [];
gdjs.ShopCode.GDPlaneObjects3= [];


gdjs.ShopCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("RedButton"), gdjs.ShopCode.GDRedButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRedButtonObjects2.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRedButtonObjects2[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRedButtonObjects2[k] = gdjs.ShopCode.GDRedButtonObjects2[i];
        ++k;
    }
}
gdjs.ShopCode.GDRedButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Menu", false);
}
}

}


};gdjs.ShopCode.asyncCallback12718092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ShopCode.localVariables);

{ //Subevents
gdjs.ShopCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ShopCode.localVariables.length = 0;
}
gdjs.ShopCode.idToCallbackMap.set(12718092, gdjs.ShopCode.asyncCallback12718092);
gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ShopCode.localVariables);
for (const obj of gdjs.ShopCode.GDRedButtonObjects1) asyncObjectsList.addObject("RedButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.ShopCode.asyncCallback12718092(runtimeScene, asyncObjectsList)), 12718092, asyncObjectsList);
}
}

}


};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plane"), gdjs.ShopCode.GDPlaneObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.ShopCode.GDRedButtonObjects1);
{gdjs.adMob.loadRewardedVideo("ca-app-pub-9825076470318135/5825260098", "ca-app-pub-9825076470318135/3417824269", false);
}
{gdjs.adMob.setTestMode(true);
}
{for(var i = 0, len = gdjs.ShopCode.GDRedButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDRedButtonObjects1[i].getBehavior("Resizable").setWidth(160);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDRedButtonObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDRedButtonObjects1[i].getBehavior("Resizable").setHeight(80);
}
}
{for(var i = 0, len = gdjs.ShopCode.GDPlaneObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPlaneObjects1[i].setPosition(gdjs.evtTools.window.getWindowInnerWidth() / 2 - 20,gdjs.evtTools.window.getWindowInnerHeight() / 2 - 80);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FreeCoinsButton"), gdjs.ShopCode.GDFreeCoinsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDFreeCoinsButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDFreeCoinsButtonObjects1[i].IsActivated(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDFreeCoinsButtonObjects1[k] = gdjs.ShopCode.GDFreeCoinsButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDFreeCoinsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.adMob.showRewardedVideo();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.adMob.wasRewardedVideoRewardReceived(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rewarded_Video_status"), gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects1[i].getBehavior("Text").setText("Video reward received");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(100);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("CrashDAvion-Storage", "TotalCoins", runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.adMob.isRewardedVideoErrored();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rewarded_Video_status"), gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects1[i].getBehavior("Text").setText("Video had an error");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.ShopCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDRedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDRedButtonObjects1[k] = gdjs.ShopCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShopCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDFreeCoinsButtonObjects1.length = 0;
gdjs.ShopCode.GDFreeCoinsButtonObjects2.length = 0;
gdjs.ShopCode.GDFreeCoinsButtonObjects3.length = 0;
gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects1.length = 0;
gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects2.length = 0;
gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects3.length = 0;
gdjs.ShopCode.GDRedButtonObjects1.length = 0;
gdjs.ShopCode.GDRedButtonObjects2.length = 0;
gdjs.ShopCode.GDRedButtonObjects3.length = 0;
gdjs.ShopCode.GDPlaneObjects1.length = 0;
gdjs.ShopCode.GDPlaneObjects2.length = 0;
gdjs.ShopCode.GDPlaneObjects3.length = 0;

gdjs.ShopCode.eventsList2(runtimeScene);
gdjs.ShopCode.GDFreeCoinsButtonObjects1.length = 0;
gdjs.ShopCode.GDFreeCoinsButtonObjects2.length = 0;
gdjs.ShopCode.GDFreeCoinsButtonObjects3.length = 0;
gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects1.length = 0;
gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects2.length = 0;
gdjs.ShopCode.GDRewarded_9595Video_9595statusObjects3.length = 0;
gdjs.ShopCode.GDRedButtonObjects1.length = 0;
gdjs.ShopCode.GDRedButtonObjects2.length = 0;
gdjs.ShopCode.GDRedButtonObjects3.length = 0;
gdjs.ShopCode.GDPlaneObjects1.length = 0;
gdjs.ShopCode.GDPlaneObjects2.length = 0;
gdjs.ShopCode.GDPlaneObjects3.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;

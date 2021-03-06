﻿#pragma strict

var isPaused : boolean;
var menu : int;

function OnGUI () {
	var other : SaveSystem;
	other = gameObject.Find("Player").GetComponent(SaveSystem);
	var index : Main1;
	index = gameObject.Find("Main").GetComponent(Main1);
	if(isPaused){
		if (GUI.Button(Rect(10, 70, 100, 30), "INDEX")){
			menu = 1;
		}
		if (GUI.Button(Rect(10, 100, 100, 30), "MONSTERS")){
			menu = 2;
		}		
		if (GUI.Button(Rect(10, 130, 100, 30), "BAG")){
			menu = 3;
		}		
		if (GUI.Button(Rect(10, 160, 100, 30), "CHARACTER")){
			menu = 4;
		}
		if (GUI.Button(Rect(10, 190, 100, 30), "SAVE")){
			other.Save();
			menu = 5;
		}
		if (GUI.Button(Rect(10, 220, 100, 30), "OPTIONS")){
			menu = 6;
		}	
		if (GUI.Button(Rect(10, 250, 100, 30), "EXIT")){
			Application.Quit();
		}				
		
		switch(menu){
			case 1:
				GUI.Box(Rect(110, 70, 200, 300), "INDEX");
				for (var i = 0; i < index.AllMonsters.Length; i++){
					GUI.Button(Rect(110, 90 + (i * 50), 200, 50),  (i+1) + " " + index.AllMonsters[i].name);
				}
				break;
			case 2:
				GUI.Box(Rect(110, 70, 200, 300), "MONSTERS");
				break;
			case 3:		
				GUI.Box(Rect(110, 70, 200, 300), "BAG");
				break;	
			case 4:	
				GUI.Box(Rect(110, 70, 200, 300), "CHARACTER");
				break;
			case 5:								
				GUI.Box(Rect(110, 70, 200, 300), "SAVE");
				break;
			case 6:	
				GUI.Box(Rect(110, 70, 200, 300), "OPTIONS");
				break;	
			default:
				break;																			
		}			
	}
	
}

function Start() {

}
function Update () {
	if(Input.GetKeyDown("p")){
		isPaused = !isPaused;
	}
}
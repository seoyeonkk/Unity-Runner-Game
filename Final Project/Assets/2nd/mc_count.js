﻿#pragma strict
//var target : meat;
//var target1 : vegetable;
//var target2 : brown;
public var b :int=0;
public var d :int=0;
public var f :int=0;
public var a :int=0;

function Start () {

}

function Update () {

}
function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag=="chicken"){
		b+=1;
		Debug.Log(b);
		if(b==5){
		   GameObject.FindWithTag("GazeMChicken").SendMessage("AllEat");
		}
	}
	if(other.gameObject.tag=="vegetable"){
		d+=1;
		Debug.Log(d);
		if(d==5){
			GameObject.FindWithTag("GazeMVeg").SendMessage("AllEat");
		}
	}
	if(other.gameObject.tag=="tomato"){
		f+=1;
		Debug.Log(f);
		if(f==5){
			GameObject.FindWithTag("GazeMTomato").SendMessage("AllEat");
		}
	}
	if(other.gameObject.tag=="white"){
		a+=1;
		Debug.Log(f);
		if(a==5){
			GameObject.FindWithTag("GazeMMayo").SendMessage("AllEat");
		}
	}
	if(b>=5&&d>=5&&f>=5&&a>=5){
		GameObject.FindWithTag("Player").SendMessage("Die",SendMessageOptions.DontRequireReceiver);
		GameObject.FindWithTag("generator").SendMessage("Die",SendMessageOptions.DontRequireReceiver);
		GameObject.FindWithTag("road").SendMessage("Die",SendMessageOptions.DontRequireReceiver);
		//다음 씬으로 넘어감(성공한 다음 씬)
		Application.LoadLevel("mcspicy_win");
	}
}

	
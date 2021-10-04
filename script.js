
console.log("Helllooooo");


window.addEventListener('DOMContentLoaded', function(){
                var canvas = document.getElementById('canvas');
      
                var engine = new BABYLON.Engine(canvas, true);
                var createScene = function(){
                    var scene = new BABYLON.Scene(engine);
                    scene.clearColor = new BABYLON.Color3.White();

                    var box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
                    // var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 4,-10), scene);
                    var camera = new BABYLON.ArcRotateCamera("arcCamera", 
                        BABYLON.Tools.ToRadians(45),
                        BABYLON.Tools.ToRadians(45),
                        10.0, box.position, scene )

                    camera.setTarget(BABYLON.Vector3.Zero());
                    camera.attachControl(canvas, true);

                    // controlls setup for
                    camera.keysUp.push(87);// w - for up
                    camera.keysDown.push(83);// S - for down
                    camera.keysLeft.push(65);// A - for left
                    camera.keysRight.push(68);// D - for right


                    
                    return scene;
                }
      
                var scene = createScene();
                engine.runRenderLoop(function(){
                    scene.render();
                });
      
            });
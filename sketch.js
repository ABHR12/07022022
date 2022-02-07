
var personaje,personajeimg;
var piso,pisoimg,pisoinvisible;
var obs,ob1,ob2,ob3,ob4,ob5,ob6;
var muerte;
var restart,restartimg;
var cloud,cloudimg;
var textos,t1,t2,t3,t4,t5,t6,t7,t8,t9;



function preload() //imagenes y sonido 
{
  //craga al personaje
  personajeimg=loadAnimation("among1.png","among2.png","among3.png","among4.png");
  //muerte=loadAnimation("game over1.png");

  //cargar el piso
  pisoimg=loadImage("ground2.png");

  //caragr obstaculos
  ob1=loadImage("obstacle1.png");
  ob2=loadImage("obstacle2.png");
  ob3=loadImage("obstacle3.png");
  ob4=loadImage("obstacle4.png");
  ob5=loadImage("obstacle5.png");
  ob6=loadImage("obstacle6.png");

  //nubes
  cloudimg=loadImage("cloud.png");

  //texto
   t1=loadImage("text-1.png");
  t2=loadImage("text-2.png");
  t3=loadImage("text-3.png");
  t4=loadImage("text-4.png");
  t5=loadImage("text-5.png");
  t6=loadImage("text-6.png");
  t7=loadImage("text-7.png");
  t8=loadImage("text-8.png");
  t9=loadImage("text-9.png");
}

function setup() 
{
  //crear canvas 
  createCanvas(windowWidth,windowHeight)
  //piso invisible
  pisoinvisible=createSprite(400,height-92,800,10);
  pisoinvisible.visible=false;
  //se crea el piso 
  piso=createSprite(400,height-100,400,20);
  piso.addAnimation("ground",pisoimg);

  //se crea al personaje
  personaje=createSprite(50,355,50,50);
  personaje.addAnimation("among",personajeimg);
  //crear muerte del personaje 
  //personaje.addAnimation("muerte",muerte);
  personaje.scale=0.25;
  
  //grupo de objetos
  obstaGroup=new Group();
  //grupos de nuebes 
  cloudGroup=new Group();
  //texto grupo
  textos3Group=new Group();
}

function draw()
{
  //crear fondo 
  background("black");
  
  //velocidad de piso 
  piso.velocityX=-5;
  //piso infinito
  if(piso.x<0)
  {
    piso.x=piso.width/2;
  }

  //funcion obstaculos
  obst();
  //colicion de obstaculos 
  if (obstaGroup.isTouching(personaje))
  {
    //IA
    personaje.velocityY=-20;
  }
  //pintar nubes
  pintarnubes();

  //texto
  texto();

  //crear gravedad
  personaje.velocityY=personaje.velocityY+1;
  //personaje choque con el piso invisible
  personaje.collide(pisoinvisible);
  drawSprites();
}

function obst()
{
  if (frameCount %80===0)
  {
    //crar obstaculos
    obs=createSprite(width,piso.y-20,10,40);
    //velocidad de obs
    obs.velocityX=-4;
    //numero aleatorios
    var numobs=Math.round(random(1,6));
    switch(numobs)
    {
      case 1:
        obs.addImage(ob1);
        obs.scale=0.2;
        break;
      case 2:
        obs.addImage(ob2);
        obs.scale=0.12;
        break;
      case 3:
        obs.addImage(ob3);
        obs.scale=0.15;
        break;
      case 4:
        obs.addImage(ob4);
        obs.scale=0.1;
        break;
      case 5:
        obs.addImage(ob5);
        obs.scale=0.1;
        break;
      case 6:
        obs.addImage(ob6);
        obs.scale=0.1;
        break;
    }
    //timpo de vida
    obst.lifetime=500;
    obstaGroup.add(obs);
}
}

function pintarnubes()
{
  var distancia=Math.round(random(20,height/2));//numeros aleatorios 
  if(frameCount%80===0){
    //console.log(frameCount);
    cloud=createSprite(width,distancia,30,10);
    cloud.velocityX=-2;//velocidad nube
    cloud.addImage("nuve",cloudimg);//pegar imagen
    cloud.lifetime=800;//timpo de vida de cada nube
    personaje.depth=cloud.depth+1;//profundidad
    cloudGroup.add(cloud);//se agrega cada muve al grupo
  }
}

function texto()
{
  
  tex1=createSprite(200,50,50,50);
  tex1.addImage("frase",t1);
  tex1.scale=0.5;
  tex2=createSprite(400,80,50,50);
  tex2.addImage("frase2",t2);
  tex2.scale=0.5;
  tex3=createSprite(600,150,50,50);
  tex3.addImage("frase3",t3);
  tex3.scale=0.5;
  tex4=createSprite(800,230,50,50);
  tex4.addImage("frase2",t4);
  tex4.scale=0.5;
  tex5=createSprite(1000,320,50,50);
  tex5.addImage("frase",t5);
  tex5.scale=0.5;
  tex6=createSprite(1200,400,50,50);
  tex6.addImage("frase2",t6);
  tex6.scale=0.5;
  tex7=createSprite(1200,510,50,50);
  tex7.addImage("frase2",t7);
  tex7.scale=0.5;
  tex8=createSprite(1400,100,50,50);
  tex8.addImage("frase2",t8);
  tex8.scale=0.5;
 
}

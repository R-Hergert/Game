var statPoints = 0,
  xp = 0,
  vertical = 10,
  horizontal = 0,
  gold = 10000,
  healthLost = 0,
  xpreq = 0,
  level = 0,
  levelCount = 0,
  stats = [0, 0, 0, 0, 0],
  health = 10,
  run = false,
  dmg = 0,
  dmgMultiplier = 1,
  dodge = 0,
  discount = 0,
  abilityRecharge1 = 0,
  abilityRecharge2 = 0,
  enemyHealth = 0,
  swordPrice = 100,
  trainingPrice = 50,
  healthPotionCount = 0,
  swordMessages = ["copper sword", "bronze sword", "iron sword", "steel sword", "pistol", "shotgun", "submachine gun", "ray gun", "orbital strike", "power-word: kill", "mini-nuke launcher"],
  swordMessageNumber = 0,
  runaway = false,
  healEnable = false,
  powerhitEnable = false;
  var locations = [],
      messages = [],
      enemies = [],
      enemyTexts = [];
document.getElementById("healthPotions").innerHTML = healthPotionCount
add("healingPotion")
document.getElementById("healingPotion").innerHTML = "Health Potion"
  //--------------Story Info-----------------
var buttontext = ["left", "up", "right", "down", "shop", "interact"];
var combatbuttontext = ["attack"];
var shopbuttontext = ["healthPotion", "strength", "dexterity", "constitution", "intelligence", "charisma", "price", "cancel", "sword"]

var wolf = new enemy(1, 2, 0, 15, 10, 10, 30);
var wolf2 = new enemy(1, 4, 10, 15, 20, 15, 25)
var wolfText = new enemyText("From out of the tall grass, a wolf leaps at you!");
var wolfText2 = new enemyText("A wolf attacks you!");

locations[0] = ["", "", "", "", "", "", "", "", "", "",
  new place(true, true, false, false, false, false, false),
  new place(false, false, false, true, false, false, false)
];
locations[1] = ["", "", "", "", "", "", "", "", "", 
  new place(true, true, false, false, false, false, "combat"),
  new place(false, true, true, true, false, false, "combat"), 
  new place(false, false, false, true, true, false, false)
]
locations[2] = ["", "", "", "", "", "", "", "", "",
  new place(true, false, true, false, false, false, "combat")
]
locations[3] = ["", "", "", "", "", "", "", "", "",
  new place(true, false, true, false, false, false, "combat")
]
locations[4] = ["", "", "", "", "", "", "", "", "",
  new place(true, false, true, false, false, false, "combat")
]
locations[5] = ["", "", "", "", "", "", "", "", "",
  new place(true, false, true, false, false, false, "combat")
]
locations[6] = ["", "", "", "", "", "", "", "", "",
  new place(true, false, true, false, false, false, "combat"),
  "", "",
  new place(true, false, false, false, false, false, "Boss1")
]
locations[7] = ["", "", "", "", "", "", "", "", "",
  new place(true, false, true, false, false, false, false),
  "", "",
  new place(true, false, true, false, false, false, "combat")
]
locations[8] = ["", "", "", "", "", "", "", "", "",
  new place(true, true, true, false, false, false, false),
  new place(true, false, false, true, true, false, false),
  "",
  new place(false, true, true, false, false, false, "combat"),
  new place(false, true, false, true, false, false, "combat"),
  new place(true, false, false, true, false, false, "combat")             
]
locations[9] = ["", "", "", "", "", "", "", "", "",
  new place(false, true, true, false, false, false, "Quest1"),
  new place(false, false, true, true, false, false, false),
  new place(false, true, false, true, false, false, "combat"),
  new place(true, false, false, true, false, false, "combat"),
  "",
  new place (true, false, true, false, false, false, "combat")
]
locations[10] = ["", "", "", "", "", "", "", "", "", "", "", "",
  new place(false, true, true, false, false, false, "combat"),
  new place(false, true, false, true, false, false, "combat"),
  new place(false, false, true, true, false, false, "combat")               
                ]

messages[0] = ["", "", "", "", "", "", "", "", "", "",
  new text("You wake up on a beach. You can't seem to remember visiting this beach before. Infact, you can't seem to remember anything. You notice that you are dressed in torn rags. The beach extends to the north and south and there is a forest to the west.", "You recognize this as the beach where you woke up. The beach extends north and south and there is a forest to the west"),
  new text("You walk along the beach but it ends suddenly in jagged rocks. The forest looks thick and menacing to the west. Maybe you should turn back.", "You don't think that theres is anything useful this way")
];
messages[1] = ["", "", "", "", "", "", "", "", "", 
  new text("Thank you kind sir! I was merely heading to town when that wolf attacked me. I will be heading to the town (the man points west) and I will tell the king of the help you have given me!", "an overturned cart is infront of you. to the north there is a clearing and the man you had found here earlier had pointed west as being the direction to town."),
  new text("This clearing seems to have darkness creeping in along the edges. Be wary. There is another opening to the north and also one to the south.", "There is the original beach to the east a clearing to the north and a clearing to the south."),
  new text("You stumble into a new clealring and there is a strange hermit sitting at a wooden stand with a bunch of goodies 'Welcome! I've been waiting for you! Come take a look at my goods!", "The hermit in the clearing is just staring at you")
]
messages[2] = ["", "", "", "", "", "", "", "", "", 
  new text("You emerge from the forest and sea a castle rise out of the plains infront of you.", "To the west, the castle rises from the planes. To the east, a dark forest beckons.")
]
messages[3] = ["", "", "", "", "", "", "", "", "", 
  new text("To the west, the castle rises from the planes. To the east, there are trees in the distance.", "To the west, the castle rises from the planes. To the east, there are trees in the distance.")
]
messages[4] = ["", "", "", "", "", "", "", "", "", 
  new text("To the west, the castle rises from the planes. To the east, there are trees in the distance.", "To the west, the castle rises from the planes. To the east, there are trees in the distance.")
]
messages[5] = ["", "", "", "", "", "", "", "", "", 
  new text("To the west, the castle rises from the planes. To the east, there are trees in the distance.", "To the west, the castle rises from the planes. To the east, there are trees in the distance.")
]
messages[6] = ["", "", "", "", "", "", "", "", "", 
  new text("To the west, the castle rises from the planes. To the east, there are trees in the distance.", "To the west, the castle rises from the planes. To the east, there are trees in the distance."), "", "", new text("You have defeated the wolf you needed to. You should return to the king now.", "Nothing remains here but the body of the wolf")
]
messages[7] = ["", "", "", "", "", "", "", "", "", 
  new text("You reach the gate of the castle. There does not appear to be anyone guarding the gate and the way looks open.", "You are standing outside of the eastern gate of the castle. A forest is in the distant east."),
  "", "",
  new text("You spot a cave entrance to the east.", "Bones litter the forest floor. There is a cave to the east.")
]
messages[8] = ["", "", "", "", "", "", "", "", "", 
  new text("You walk through the gates and into a bustling city. This area seems to be a residential district but a keep rises from the landscape to the west and there appears to be some sort of market to the north. 'It's you! The king wants to talk to you at the keep! You turn but the hermit is already running away.", "This area seems to be a residential district but a keep rises from the landscape to the west and there appears to be some sort of market to the north."),
  new text("This area is a bustling marketplace with merchants everywhere. Houses are everywhere to the west and south and the keep is to the southeast.", "This area is a bustling marketplace with merchants everywhere. Houses are everywhere to the west and south and the keep is to the southeast."),
  "",
  new text("The path of bones turns to the east.", "There are bones littering the ground."),
  new text("More bones lead south", "There are bones littering the ground."),
  new text("You spot a trail of bones leading south. This might be a good place to look.", "There are bones littering the ground.")             
]
messages[9] = ["", "", "", "", "", "", "", "", "", 
  new text("A tall bearded man with coloured robes on and a longsword on his side approaches you. 'I am king of this land and have heard of what you have done for one of my subjects. These wolves are a plague upon my land, if you go out the gate north of here and clear out the wolf den, I will reward you. Have an amulet of healing to aid your journey. You can use it to heal yourself, but must walk a certain distance for it to charge and it must be used in combat.", "The keep looms above you."),
 new text("Another residential district. There are gates to the north and west. To the east is a marketplace and the keep is to the south.", "There are gates to the north and west. To the east is a marketplace and the keep is to the south."),
 new text("You emerge from the gates onto more plains. A road extends infront of you leading towards another forest to the north.", "You are outside of the north gate of the castle. A road extends north."),
 new text("A cliff blocks your way from travelling further north but the forest is to your west at this point.", "The castle is to the south and there is a forest to your west."),
 "",
 new text("You should probably continue this way.", "The forest is starting to confuse your direction.")]
messages[10] = ["", "", "", "", "", "", "", "", "", "", "", "",
 new text("You are enveloped by the forest. The forest gets thicker to the north", "The forest is thicker to the north and you recognize a cliff face to the east."),
 new text("You continue into the forest. The forest continues to the north.", "To the north, the forest gets thicker. The forest gets thinner to the south."),
 new text("A wall of thickets blocks you path. East would be another good option.", "To the east, the forest continues. To the south, the forest thins. There is a wall of thickets blocking the path north.")               
]

enemies[1] = ["", "", "", "", "", "", "", "", "", 
              new enemy(1,7,10,10,50, 20, 100), 
              new enemy(1, 2, 0, 5, 10, 10, 100)];
enemies[2] = ["", "", "", "", "", "", "", "", "",
              wolf];
enemies[3] = ["", "", "", "", "", "", "", "", "",
              wolf];
enemies[4] = ["", "", "", "", "", "", "", "", "",
              wolf];
enemies[5] = ["", "", "", "", "", "", "", "", "",
              wolf];
enemies[6] = ["", "", "", "", "", "", "", "", "",
              wolf, "", "", new enemy(3,1, 22, 50, 100, 100, 100)];
enemies[7] = ["", "", "", "", "", "", "", "", "", "", "", "", wolf2]
enemies[8] = ["", "", "", "", "", "", "", "", "", "", "", "", wolf2, wolf2, wolf2]
enemies[9] = ["", "", "", "", "", "", "", "", "", "", "", "",
              wolf2, "", wolf2];
enemies[10] = ["", "", "", "", "", "", "", "", "", "", "", "",
              wolf2, wolf2, wolf2];

enemyTexts[1] = ["", "", "", "", "", "", "", "", "", 
                 new enemyText("You see a man in simple clothing cowering behind an overturned cart while a wolf, much larger than the last, is advancing. Upon hearing you, the wolf turns and attacks."), 
                 new enemyText("You walk towards the forst and see a small clearing. You approach the clearing and see a wolf staring at you, growling. It starts slowly advancing towards you")];
enemyTexts[2] = ["", "", "", "", "", "", "", "", "",
                 wolfText];
enemyTexts[3] = ["", "", "", "", "", "", "", "", "",
                 wolfText];
enemyTexts[4] = ["", "", "", "", "", "", "", "", "",
                 wolfText];
enemyTexts[5] = ["", "", "", "", "", "", "", "", "",
                 wolfText];
enemyTexts[6] = ["", "", "", "", "", "", "", "", "",
                 wolfText, "", "", new enemyText("You walk into the cave when a black wolf pounces at you from behinf!")];
enemyTexts[7] = ["", "", "", "", "", "", "", "", "", "", "", "", wolfText2]
enemyTexts[8] = ["", "", "", "", "", "", "", "", "", "", "", "", wolfText2, wolfText2, wolfText2]
enemyTexts[9] = ["", "", "", "", "", "", "", "", "","", "", "",
                 wolfText2, "", wolfText2];
enemyTexts[10] = ["", "", "", "", "", "", "", "", "","", "", "",
                 wolfText2, wolfText2, wolfText2];

checkLocation()
checkStats()

//------Object Creators-------------

function place(left, up, right, down, shop, interact, encounter) {
  this.left = left;
  this.up = up;
  this.right = right;
  this.down = down;
  this.shop = shop;
  this.interact = interact;
  this.encounter = encounter;
}

function text(firstTimeText, text){
  this.currentText = firstTimeText;
  this.normalText = text;
}

function enemy(attackStart, attackRange, creatureDodge, creatureHealth, creatureGold, creatureXp, chance){
  this.attackStart = attackStart;
  this.attackRange = attackRange;
  this.dodge = creatureDodge;
  this.health = creatureHealth;
  this.gold = creatureGold;
  this.chance = chance;
  this.xp = creatureXp;
}

function enemyText(text){
  this.text = text
}

//-------Base Code-----------------
function checkLocation() {
  var location = locations[horizontal][vertical]
  var buttons = [location.left, location.up, location.right, location.down, location.shop, location.interact]
  var button = 0
  for (var value of buttons) {
      remove(buttontext[button])
  button++}
  button = 0
  for (var value of buttons) {
    if (value) {
      add(buttontext[button])
    }
    button++
  }
  if (run===false){
    message(messages[horizontal][vertical].currentText)}
  messages[horizontal][vertical].currentText = messages[horizontal][vertical].normalText
  run = false
}

function doSomething(button){
  if (button === "left" || button === "up" || button === "right" || button === "down"){
    move(button)
  }
  else if (button === "shop") {
    shop()
  }
  else if (button === "interact") {
    interact()
  }
  else if (button === "attack"){
    attack()
  }
  else if (button === "healingPotion"){
    healingPotion()
  }
  else if (button === "Heal" || button === "powerhit"){
    ability(button)
  }
  else {
    buy(button)
  }
}

function move(button) {
    if (button === "left") {
      horizontal += 1
    } else if (button === "up") {
      vertical += 1
    } else if (button === "right") {
      horizontal -= 1
    } else if (button === "down") {
      vertical -= 1
    }
    recharge()
  checkEvent();
}

function checkEvent(){
  if (locations[horizontal][vertical].encounter != false && locations[horizontal][vertical].encounter != "false"){
    checkEventType()
  }
  else {
    checkLocation()
       }
}

//------Levelling-----

function levelUp() {
  level++
  xp = xp - xpreq
  xpreq += 10 * level
  statButtons("On")
  for (i = 0; i < 5; i++) {
      stats[i]++
  }
  statPoints += 2
}

function statUp(stat) {
  if (statPoints > 0 && stat != "none") {
    stats[stat]++
      statPoints--
  }
  if (statPoints == 0) {
    statButtons("Off")
  }
  checkStats()
}

function statButtons(status) {
  var element1 = document.getElementById("strButton")
  var element2 = document.getElementById("dexButton")
  var element3 = document.getElementById("conButton")
  var element4 = document.getElementById("intButton")
  var element5 = document.getElementById("chaButton")
  var element = [element1, element2, element3, element4, element5]
  for (i = 0; i < 5; i++) {
    var para = element[i]
    if (status === "On") {
      para.setAttribute("style", "color:black; border-color:black;")
    } else {
      para.setAttribute("style", "color:grey; border-color:grey;")
    }
  }
}

//---------Events--------------

function checkEventType(){
  if (locations[horizontal][vertical].encounter === "combat"){
    combat()
  }
  else {event(locations[horizontal][vertical].encounter)}
}

function event(event){
  if (event === "Quest1"){
    locations[9][10].up = true
    healEnable = true
    combatbuttontext[2] = "Heal"
    checkLocation()
  }
  if (event === "Boss1"){
    combat()
    locations[9][9].encounter = "QuestComplete1"
  }
  if (event === "QuestComplete1"){
    message("Congradulations! You made it to the end because I'm to lazy to make another quest!")
    gold += 100000
    checkLocation()
    checkStats()
  }
}

//---------Combat--------------

function combat() {
  var enemy = enemies[horizontal][vertical];
  enemyHealth = enemy.health;
  if (Math.floor(Math.random()*100+1)<=enemy.chance){
  message(enemyTexts[horizontal][vertical].text)
  for (var value of buttontext) {
      remove(value)
    }
  for (var value of combatbuttontext){
    add(value)
  }}
  else {checkLocation()}
}

function attack(){
  if (Math.floor(Math.random()*100+1)<= enemies[horizontal][vertical].dodge) {
    var send = "Your opponent dodged your attack!"
  }
  else {
  var damage = Math.floor(((Math.random()*5)+ 1 + dmg)*dmgMultiplier);
  var send = "You dealt " + damage + " damage to your oponnent!"
  enemyHealth -= damage
  }
  interphaseI(send)
}

function ability(button) {
  if (button === "powerhit"){
    abilityRecharge2 = 0
    combatbuttontext[3] = ""
    var damage = Math.floor(((Math.random()*5)+ 1 + dmg)*dmgMultiplier*(1+(abilityMultiplier/100)));
    var send = "You dealt " + damage + " damage to your oponnent!"
    enemyHealth -= damage
  }
  else if (button === "Heal"){
    abilityRecharge1 = 0
    combatbuttontext[2] = ""
    remove("Heal")
    var heal = Math.floor(((Math.random()*4)+3)*((abilityMultiplier/100)+1))
    send = "You healed " + heal + " damage!"
    healthLost -= heal
    if (healthLost<0){
      healthLost=0
    }
  }
  interphaseI(send)
}

function interphaseI(message1) {
  if (enemyHealth<=0){
    var message2 = (message1 + " You killed your opponent!")
    rewards(message2)
  }
  else{
    opponentMove(message1)
  }
}

function opponentMove(message1){
  if (Math.floor(Math.random()*100+1) <= dodge) {
    var message2 = "You dodged your opponent!"
  }
  else {
     var damage = Math.floor(Math.random()*enemies[horizontal][vertical].attackRange+enemies[horizontal][vertical].attackStart)
     healthLost += damage
     var message2 = "Your opponent dealt " + damage + " damage to you!"
  }
  interphaseII(message1, message2)
}

function interphaseII(message1, message2) {
  if (healthLost >= health) {
    checkStats()
    dead()
  }
  else {
    message(message1 + message2 + " Your opponent has " + enemyHealth + " health left.")
    checkStats()
  }
}

function rewards(message2){
  xp += enemies[horizontal][vertical].xp
  gold += enemies[horizontal][vertical].gold
  enemies[horizontal][vertical].encounter = "false"
  message(message2 + "<br> You gained " + enemies[horizontal][vertical].xp + " experience and " + enemies[horizontal][vertical].gold + " gold")
  checkStats()
  revertButtonsFromCombat()
}

function revertButtonsFromCombat(){
  for (var value of combatbuttontext){
    remove(value)
  }
  if (runaway === false) {
  locations[horizontal][vertical].encounter = false
  }
  checkLocation()
}

function dead(){
  for (var value of combatbuttontext){
    remove(value)
  }
  remove(healingPotion)
  message("You are dead.")
}

function getAway(){
  message("You successfully got away from your opponent")
  runaway=true
  revertButtonsFromCombat()
  checkLocation()
}

//-----------Shared---------

function message(message){
  document.getElementById("message4").innerHTML = document.getElementById("message3").innerHTML
  document.getElementById("message3").innerHTML = document.getElementById("message2").innerHTML
  document.getElementById("message2").innerHTML = document.getElementById("message1").innerHTML
  document.getElementById("message1").innerHTML = message
}

function add(button) {
  var para = document.createElement("p");
  var node = document.createTextNode(button);
  para.appendChild(node);
  var element = document.getElementById("controls");
  element.appendChild(para);
  para.setAttribute("id", button);
  document.getElementById(button).addEventListener("click", function() {
    doSomething(button)
  });
}

function remove(button) {
  var element = document.getElementById(button);
  if (element != null) {
    element.parentNode.removeChild(element);
  }
}

function checkStats(){
  if (xp >= xpreq) {
    levelUp()
  }
  health = 10 + stats[2]
  document.getElementById("xp").innerHTML = xp
  document.getElementById("level").innerHTML = level;
  document.getElementById("gold").innerHTML = gold;
  document.getElementById("health").innerHTML = (health-healthLost) + "/" + health;
  document.getElementById("stats").innerHTML = stats.join("<br>");
  dmg = stats[0];
  dodge = 2* stats[1]
  discount = 3*stats[4];
  abilityMultiplier = 10 * stats[3]
  
}

//----------misc functions------------

function shop() {
  for (var value of buttontext) {
      remove(value)
    }
  for (var value of shopbuttontext){
    add(value)
  }
  if (shopbuttontext.length>8){
  document.getElementById("sword").innerHTML = swordMessages[swordMessageNumber] +  "<br>"+ Math.floor((swordPrice/100)*(100-discount)) + "GP"}
  document.getElementById("healthPotion").innerHTML = "health potion<br>" + Math.floor((30/100)*(100-discount)) + "GP"
  document.getElementById("strength").innerHTML = "strength training"
  document.getElementById("dexterity").innerHTML = "dexterity training"
  document.getElementById("constitution").innerHTML = "constitution training"
  document.getElementById("intelligence").innerHTML = "intelligence training"
  document.getElementById("charisma").innerHTML = "charisma training"
  document.getElementById("price").innerHTML = (trainingPrice/100)*(100-discount) + "GP"
}

function buy(button) {
  if (button === "sword"){
    if (gold>=Math.floor((swordPrice/100)*(100-discount))){
    dmgMultiplier += 0.5
    gold -= Math.floor((swordPrice/100)*(100-discount))
    swordPrice += 100
    message("You got a better sword!")
    swordMessageNumber++
    if (swordMessageNumber === 11){
      remove("sword")
      shopbuttontext.pop()
    }
    }
    else {
      message("You don't have enough money!")
    }
  }
  else if (button === "healthPotion"){
    if (gold>=Math.floor((30/100)*(100-discount))){
      healthPotionCount += 1
      gold -= Math.floor((30/100)*(100-discount))
      message("You bought a health potion!")
      document.getElementById("healthPotions").innerHTML = healthPotionCount
    }
    else {
      message("You don't have enough money!")
    }
  }
  else if (button === "strength"){
    if (gold>=Math.floor((trainingPrice/100)*(100-discount))){
      stats[0] += 1
      gold -= Math.floor((trainingPrice/100)*(100-discount))
      message("You gained one strength!")
  }
    else {
      message("You don't have enough money!")
    }
}
  else if (button === "dexterity"){
    if (gold>=Math.floor((trainingPrice/100)*(100-discount))){
      stats[1] += 1
      gold -= Math.floor((trainingPrice/100)*(100-discount))
      message("You gained one dexterity!")
  }
    else {
      message("You don't have enough money!")
    }
}
  else if (button === "constitution"){
    if (gold>=Math.floor((trainingPrice/100)*(100-discount))){
      stats[2] += 1
      gold -= Math.floor((trainingPrice/100)*(100-discount))
      message("You gained one constitution!")
  }
    else {
      message("You don't have enough money!")
    }
}
  else if (button === "intelligence"){
    if (gold>=Math.floor((trainingPrice/100)*(100-discount))){
      stats[3] += 1
      gold -= Math.floor((trainingPrice/100)*(100-discount))
      message("You gained one intelligence!")
  }
    else {
      message("You don't have enough money!")
    }
}
  else if (button === "charisma"){
    if (gold>=Math.floor((trainingPrice/100)*(100-discount))){
      stats[4] += 1
      gold -= Math.floor((trainingPrice/100)*(100-discount))
      message("You gained one charisma!")
  }
    else {
      message("You don't have enough money!")
    }
}
  revertButtonsFromShop()
}

function revertButtonsFromShop(){
  for (var value of shopbuttontext){
    
    remove(value)
  }
  checkStats()
  checkLocation()
}

function interact() {}

function recharge(){
  abilityRecharge1 ++
  abilityRecharge2 ++
  if (abilityRecharge1 === 5 && healEnable === true){
    combatbuttontext[2] = "Heal"
  }
  if (abilityRecharge2 === 5 && powerhitEnable === true){
    combatbuttontext[3] = "Powerhit"
  }
};

function healingPotion(){
  if (healthPotionCount>0){
    healthLost -= 4
    if (healthLost<0){
      healthLost=0
    }
    healthPotionCount--
    message("Healed 4 health!")
    checkStats()
    document.getElementById("healthPotions").innerHTML = healthPotionCount
  }
  else {
    message("You don't have any health potions")
  }
}
class BaseCharacter{
  constructor(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.ap =ap;
    this.alive = true;
  }
  attack(character, damage){
    if(this.alive == false){
      return;
    }
    character.getHurt(damage);
  }
  getHurt(damage){
    this.hp -= damage;
    if(this.hp <= 0){
      this.die();
    }
  }
  die(){
    this.alive = false;
  }
}

class Hero extends BaseCharacter{
  constructor(name, hp, ap){
    super(name, hp, ap);
    console.log("英雄 " + this.name + " 參上！");
  }
  attack(character){
    var damage = Math.random() * (this.ap / 2) + (this.ap / 2);
    super.attack(character, Math.floor(damage));
  }
}

class Monster extends BaseCharacter{
  constructor(name, hp, ap){
    super(name, hp, ap);
    console.log("魔物 " + this.name + " 登場！");
  }
  attack(character){
    var damage = Math.random() * (this.ap / 2) + (this.ap / 2);
    super.attack(character, Math.floor(damage));
  }
}
insert into Rarity (NameR) values ('Common');
insert into Rarity (NameR) values ('Rare');
insert into Rarity (NameR) values ('Epic');
insert into Rarity (NameR) values ('Legendary');

insert into TypeW (NameTW) values ('Sword');

insert into Enemies (NameE, Health_MaxE, Xp_Reward, Gold_Reward, Strength, Weekness) values ('Goblin', 50, 10, 5, 1, 1);

insert into Fate (NameF, DescF) values ('Dust', 'This is your very first weapon. I don''t think you will last long if you hang on to it for too long.');

insert into Weapons (NameW, DamageW, Xp_Max, Weapon_Type, Rarity) values ('Rusty Sword', 10, 100, 1, 1);

insert into Outfits (NameO, Sprite, Price) values ('Basic', './img/basic_outfit', 1);

insert into Abilities (NameA, DamageA, Mana_Cost) values ('Fire', 30, 50);

insert into Player (Username, Email, Password, Health_MaxP, Current_Health, Mana_Max, Current_Mana, IsAdmin, Chosen_Weapon, Chosen_Outfit) values ('Hector', 'hect.tp@gmail.com', '$2a$08$OOYi/2N2pk312HJlWuC/4uwfArF0EFT3.lqOBjPN0EyPaf0fvZP2m', 70, 70, 50, 50, false, 1, 1);

insert into Can_Use values (1, 1, 1);

insert into Weapons_Inventory values (1, 'Hector', 0, 0, 1);

insert into Outfits_Inventory values (1, 'Hector');

insert into Abilities_Inventory values (1, 'Hector');
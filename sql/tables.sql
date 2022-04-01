--Rarity table

create table if not exists Rarity (
    IDR serial unique,
    NameR varchar(20),

    primary key (IDR),

    constraint nonemptynamer check (char_length(coalesce(NameR, '')) > 0)
);

--Weapon Types table

create table if not exists TypeW (
    IDT serial unique,
    NameTW varchar(20),
    
    primary key (IDT),

    constraint nonemptynametw check (char_length(coalesce(NameTW, '')) > 0)
);

--Enemies table

create table if not exists Enemies (
    IDE serial unique,
    NameE varchar(20),
    Health_MaxE integer,
    Xp_Reward integer,
    Gold_Reward integer,
    Strength integer,
    Resistance integer,
    Weekness integer,

    primary key (IDE),

    constraint FK_Enemies1 foreign key (Strength) references Rarity(IDR),
    constraint FK_Enemies2 foreign key (Resistance) references TypeW(IDT),
    constraint FK_Enemies3 foreign key (Weekness) references TypeW(IDT),

    constraint nonemptynamee check (char_length(coalesce(NameE, '')) > 0),
    constraint notnullhealthe check (coalesce(Health_MaxE, 0) > 0),
    constraint notnullstrength check (Strength is not null)
);

--Fate table

create table if not exists Fate (
    IDF serial unique,
    NameF varchar(20),
    DescF varchar(500),

    primary key (IDF),

    constraint nonemptynamef check (char_length(coalesce(NameF, '')) > 0),
    constraint nonemptydesc check (char_length(coalesce(DescF, '')) > 0)
);

--Weapons table

create table if not exists Weapons (
    IDW serial unique,
    NameW varchar(20),
    DamageW integer,
    Xp_Max integer,
    Weapon_Type integer,
    Rarity integer,

    primary key (IDW),

    constraint FK_Weapons1 foreign key (Weapon_Type) references TypeW(IDT),
    constraint FK_Weapons2 foreign key (Rarity) references Rarity(IDR),

    constraint nonemptynamew check (char_length(coalesce(NameW, '')) > 0),
    constraint notnulldamagew check (coalesce(DamageW, 0) > 0),
    constraint notnullxpw check (coalesce(Xp_Max, 0) > 0),
    constraint notnulltypew check (Weapon_Type is not null),
    constraint notnullrarityw check (Rarity is not null)
);

--Outfits table (if enough time)

create table if not exists Outfits (
    IDO serial unique,
    NameO varchar(20),
    Sprite varchar(50),
    Price integer,

    primary key (IDO),

    constraint nonemptynameo check (char_length(coalesce(NameO, '')) > 0),
    constraint nonemptysprite check (char_length(coalesce(Sprite, '')) > 0),
    constraint notnullprice check (coalesce(Price, 0) > 0)
);

--Abilities table

create table if not exists Abilities (
    IDA serial unique,
    NameA varchar(20),
    DamageA integer,
    Mana_Cost integer,

    primary key (IDA),

    constraint nonemptynamea check (char_length(coalesce(NameA, '')) > 0),
    constraint notnulldamagea check (coalesce(DamageA, 0) > 0),
    constraint notnullmanacost check (coalesce(Mana_Cost, 0) > 0)
);

--Player table

create table if not exists Player (
    Username varchar(20),
    Email varchar(320), --max size of email adress
    Password varchar(256), --modify when crypting algorithm is chosen
    Health_MaxP integer,
    Current_Health integer,
    Mana_Max integer,
    Current_Mana integer,
    Gold_Purse integer,
    IsAdmin boolean,
    Chosen_Weapon integer,
    Chosen_Outfit integer,
    Chosen_Ability1 integer,
    Chosen_Ability2 integer,

    primary key (Username),

    constraint FK_Player1 foreign key (Chosen_Weapon) references Weapons(IDW),
    constraint FK_Player2 foreign key (Chosen_Outfit) references Outfits(IDO),
    constraint FK_Player3 foreign key (Chosen_Ability1) references Abilities(IDA),
    constraint FK_Player4 foreign key (Chosen_Ability2) references Abilities(IDA),

    constraint nonemptynamep check (char_length(coalesce(Username, '')) > 0),
    constraint nonemptyemail check (char_length(coalesce(Email, '')) > 0),
    constraint nonemptypassword check (char_length(coalesce(Password, '')) > 0),
    constraint notnullhealthp check (coalesce(Health_MaxP, 0) > 0),
    constraint notnullmanap check (coalesce(Mana_Max, 0) > 0),
    constraint notnulladmin check (IsAdmin is not null)
);

--Can_Use table (link between Enemies and Abilities tables)

create table if not exists Can_Use (
    IDA integer,
    IDE integer,
    Use_Prio integer,

    primary key (IDA,IDE),

    constraint FK_Can_Use1 foreign key (IDA) references Abilities(IDA),
    constraint FK_Can_Use2 foreign key (IDE) references Enemies(IDE),

    constraint notnulluseprio check (coalesce(Use_Prio, 0) > 0)
);

--Weapons_Inventory table (link between Player and Weapons tables)

create table if not exists Weapons_Inventory (
    IDW integer,
    IDP varchar(20),
    Xp integer,
    FOOTs_Won integer,
    Fate_Level integer,

    primary key (IDW,IDP),
    
    constraint FK_Weapons_Inventory1 foreign key (IDW) references Weapons(IDW),
    constraint FK_Weapons_Inventory2 foreign key (IDP) references Player(Username),
    constraint FK_Weapons_Inventory3 foreign key (Fate_Level) references Fate(IDF),

    constraint notnullfatelevel check (coalesce(Fate_Level, 0) > 0)
);

--Outfits_Inventory table (link between Player and Outfit tables)

create table if not exists Outfits_Inventory (
    IDO integer,
    IDP varchar(20),

    primary key (IDO,IDP),

    constraint FK_Outfits_Inventory1 foreign key (IDO) references Outfits(IDO),
    constraint FK_Outfits_Inventory2 foreign key (IDP) references Player(Username)
);

--Abilities_Inventory table (link between Player and Abilities tables)

create table if not exists Abilities_Inventory (
    IDA integer,
    IDP varchar(20),
    
    primary key (IDA,IDP),

    constraint FK_Abilities_Inventory1 foreign key (IDA) references Abilities(IDA),
    constraint FK_Abilities_Inventory2 foreign key (IDP) references Player(Username)
);

--FOOT table (not implemented yet)

/*create table if not exists FOOT (
    IDFOOT integer
);*/

import React, { useState } from "react";
import UsersItem from "./UsersItem";
import Input from "../Input";

export interface IUser {
  id: number;
  nick: string;
  image: string;
}

const USERS = [
  {
    nick: "Andrew",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Prescription01&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Twinkle&skinColor=Light",
    id: 1,
  },
  {
    nick: "Stacy",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelGreen&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale",
    id: 2,
  },
  {
    nick: "Archie",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale",
    id: 3,
  },
  {
    nick: "Erena",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Default&eyebrowType=Default&mouthType=Eating&skinColor=Pale",
    id: 4,
  },
];

const Users = () => {
  const [someUser, setSomeUser] = useState("");
  const filteredUser = USERS.filter((person) =>
    person.nick.toLowerCase().includes(someUser.toLowerCase())
  );
  const inputTypeHandler = (category: string): void => {
    setSomeUser(category);
  };
  return (
    <React.Fragment>
      <Input onChangeInput={inputTypeHandler} value={someUser} />
      <ul>
        {filteredUser.map((user: IUser) => (
          <UsersItem
            key={user.id}
            nick={user.nick}
            image={user.image}
            id={user.id}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Users;

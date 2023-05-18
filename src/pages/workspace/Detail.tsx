import { ListGroup, Card } from "flowbite-react";

import { HiUser } from "react-icons/hi";
import { VscEdit } from "react-icons/vsc";
import { BiShow } from "react-icons/bi";

const Detail: React.FC<{
  selectProject: string;
  setSelectProject: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const RoleItem: React.FC<{ name: string; role: string }> = (props) => {
    return (
      <ListGroup.Item
        onClick={() => {
          console.log("user click", props.name);
        }}
      >
        <div className="flex w-full justify-between">
          <p>{props.name}</p>
          {props.role == "edit" && <VscEdit className="h-5 w-5" />}
          {props.role == "owner" && <HiUser className="h-5 w-5" />}
          {props.role == "view" && <BiShow className="h-5 w-5" />}
        </div>
      </ListGroup.Item>
    );
  };

  return (
    <div className="flex grow flex-col items-center py-3">
      <div className="w-11/12 py-3">
        <Card className="dark:bg-blue-400">
          <p className="text-xl font-bold">{props.selectProject}</p>
          <ListGroup>
            <RoleItem name="Person A" role={"owner"} />
            <RoleItem name="Person B" role={"edit"} />
            <RoleItem name="Person C" role={"view"} />
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Detail;

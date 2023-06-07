import React from "react";
import { Spinner, Table } from "flowbite-react";

import moment from "moment";

import useAction from "../api/useAction";
import { Link } from "react-router-dom";

const Action: React.FC = () => {
  const actionList = useAction();
  return (
    <div className="flex items-center justify-center">
      {actionList.isLoading || actionList.isValidating ? (
        <Spinner />
      ) : actionList.error || !actionList.data ? (
        <p>error</p>
      ) : (
        <Table>
          <Table.Head>
            <Table.HeadCell>Filename</Table.HeadCell>
            <Table.HeadCell>User</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
            <Table.HeadCell>Time</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {actionList.data.map((action) => (
              <Table.Row
                key={`${action.id}/${action.version}`}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {action.isFile ? (
                    <Link to={`/workspace/${action.id}#${action.version}`}>
                      {action.filename}
                    </Link>
                  ) : (
                    <>{action.filename}</>
                  )}
                </Table.Cell>
                <Table.Cell>{action.user}</Table.Cell>
                <Table.Cell>{action.type}</Table.Cell>
                <Table.Cell>{moment(action.time).fromNow()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}{" "}
    </div>
  );
};

export default Action;

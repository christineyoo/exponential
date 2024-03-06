import { Button, Flex, Link } from "@radix-ui/themes";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActions = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Button>
        <Link href="/issues/new">
          <span className="text-white">New Issue</span>
        </Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;

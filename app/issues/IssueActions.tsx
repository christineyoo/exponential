import { Button, Link } from "@radix-ui/themes";
import React from "react";

const IssueActions = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/issues/new">
          <span className="text-white">New Issue</span>
        </Link>
      </Button>
    </div>
  );
};

export default IssueActions;

import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open", value: open, status: "OPEN" },
    { label: "In Progress", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed", value: closed, status: "CLOSED" },
  ];

  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card key={container.status}>
          <Link
            href={`/issues?status=${container.status}`}
            className="text-sm font-bold flex flex-col gap-y-1"
          >
            {container.label}
            <Text size="5" className="font-bold">
              {container.value}
            </Text>
          </Link>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;

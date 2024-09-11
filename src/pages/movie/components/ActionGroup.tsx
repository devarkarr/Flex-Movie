import { ActionIcon, Group, Text } from "@mantine/core";
import {
  IconBookmarkFilled,
  IconHeartFilled,
  IconList,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";

interface ActionGroupType {
  open: () => void;
}
const ActionGroup = ({ open }: ActionGroupType) => {
  const onOpened = () => {
    open();
  };
  return (
    <Group>
      <ActionIcon w={48} h={48} radius={50} bg={"var(--root-color)"}>
        <IconList width={18} />
      </ActionIcon>
      <ActionIcon w={48} h={48} radius={50} bg={"var(--root-color)"}>
        <IconHeartFilled width={18} />
      </ActionIcon>
      <ActionIcon w={48} h={48} radius={50} bg={"var(--root-color)"}>
        <IconBookmarkFilled width={18} />
      </ActionIcon>
      <ActionIcon w={120} bg={"transparent"} onClick={onOpened}>
        <IconPlayerPlayFilled width={18} />
        <Text ms={12} fw={500}>
          Play Trailer
        </Text>
      </ActionIcon>
    </Group>
  );
};

export default ActionGroup;

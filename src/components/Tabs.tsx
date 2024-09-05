import { Group, SegmentedControl, Title } from "@mantine/core";
import classes from "./styles/tabs.module.css";

interface TabType { 
  titleColor?:string,
    title:string,
    currentTab:string,
    setCurrentTab:  (e: string) => void,
    tabs:string[]
}
const Tabs = ({ titleColor,title,currentTab,setCurrentTab, tabs}:TabType) => {

  return (
    <Group gap={20}>
      <Title pos={'relative'} order={3} fw={600} c={titleColor}>
        {title}
      </Title>
        <SegmentedControl
        defaultValue={currentTab}
        onChange={setCurrentTab}
        classNames={{root:classes.root,label:classes.label,indicator:classes.indicator}}
        data={tabs} />
    </Group>
  );
};

export default Tabs;

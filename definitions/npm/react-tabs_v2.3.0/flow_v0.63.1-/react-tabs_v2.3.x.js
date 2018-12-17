// Tabs is the container component
declare type $$reacttabs$$Props = {
  +className?: string | Array<string> | { [string]: boolean },
  +disabled?: boolean,
  +disabledClassName?: string,
  +selectedClassName?: string,
  +tabIndex?: string,
  // Tabs has one Tablist or
  // a custom component with value CustomComponent.tabsRole='TabList
  +children: React$Element<typeof TabList>,
  // Tabs has one or more TabPanels or
  // custom components with value CustomComponent.tabsRole='TabPanel
  +children: React$ChildrenArray<React$Element<typeof TabPanel>>
};

declare type $$reacttablist$$Props = {
  +className?: string | Array<string> | { [string]: boolean },
  // Tablist has one or more tab components or
  // custom component with value CustomComponent.tabsRole='Tab'
  +children: React$ChildrenArray<React$Element<typeof Tab>>
};

declare type $$reacttab$$Props = {
  +className?: string | Array<string> | { [string]: boolean },
  +defaultFocus?: boolean,
  +defaultIndex?: number,
  +disabledTabClassName?: string,
  +domRef?: mixed,
  +forceRenderTabPanel?: boolean,
  +onSelect?: (index: number, lastIndex: number, event: Event) => ?boolean,
  +selectedIndex?: number,
  +selectedTabClassName?: string,
  +selectedTabPanelClassName?: string,
  +children?: React$Node
};

declare type $$reacttabpanel$$Props = {
  +className?: string | Array<string> | { [string]: boolean },
  +forceRender?: boolean,
  +selectedClassName?: string,
  +children?: React$Node
};

declare module "react-tabs" {
  declare export class Tab extends React$Component<$$reacttab$$Props> {}
  declare export class Tabs extends React$Component<$$reacttabs$$Props> {}
  declare export class TabList extends React$Component<$$reacttablist$$Props> {}
  declare export class TabPanel extends React$Component<
    $$reacttabpanel$$Props
  > {}
}

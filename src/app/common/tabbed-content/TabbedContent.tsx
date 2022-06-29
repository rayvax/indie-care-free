import React, { MouseEvent, useRef } from 'react';
import TabbedContentGroup from './TabbedContentGroup';
import TabbedContentPanel from './TabbedContentPanel';
import TabbedContentTab from './TabbedContentTab';

interface TabProp
{
    title: string;
    panelId: string;
}

interface TabbedContentProps extends React.HTMLAttributes<HTMLElement>
{
    tabs: TabProp[];
}


/**
 * This component should have TabbedContent.Group as children
 * Each TabbedContent.Group should have TabbedContent.Tab (tab heading) and TabbedContent.Panel (it's content)
 */
function TabbedContent({ tabs, children, className, ...rest }: TabbedContentProps) 
{
    const tabbedContent = useRef<HTMLDivElement>(null);

    let tablist = tabs.map(tab =>
    (
        <a role="tab" href={ `#${tab.panelId}` } onClick={ onTabClick }>{ tab.title }</a>
    ));


    function onTabClick(event: MouseEvent)
    {
        const target = event.target;

        if (!(target instanceof Element))
        {
            return;
        }

        const tab = target.closest('[role="tab"]');

        if (!(tab instanceof HTMLAnchorElement))
        {
            return;
        }

        if (tab.href[0] !== '#')
        {
            return;
        }

        const panel = document.getElementById(tab.href.substring(1));

        if (!panel)
        {
            return;
        }

        event.preventDefault();

        if (tabbedContent.current === null)
            return;

        const selectedTab = tabbedContent.current.querySelector('[role="tab"][aria-selected="true"]');

        if (selectedTab)
        {
            selectedTab.removeAttribute('aria-selected');
        }

        tab.setAttribute('aria-selected', 'true');

        const selectedPanel = tabbedContent.current.querySelector('[role="tabpanel"]:not([hidden])');

        if (selectedPanel instanceof HTMLElement)
        {
            selectedPanel.hidden = true;
        }

        panel.hidden = false;
    }

    return (
        <div { ...rest } className={ `tabbed-content ${className || ''}` } ref={ tabbedContent }>

        </div >
    );
}

TabbedContent.Group = TabbedContentGroup;
TabbedContent.Tab = TabbedContentTab;
TabbedContent.Panel = TabbedContentPanel;

export default TabbedContent;
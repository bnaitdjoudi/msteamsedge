import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react";
import TeamsBaseComponent, { ITeamsBaseComponentProps, ITeamsBaseComponentState } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";
import MainPage from "./components/MainView";
/**
 * State for the testSkilsTabTab React component
 */
export interface ITestSkilsTabState extends ITeamsBaseComponentState {
    entityId?: string;
    userName?:string;
    teamClient?:boolean;
}

/**
 * Properties for the testSkilsTabTab React component
 */
export interface ITestSkilsTabProps extends ITeamsBaseComponentProps {

}

/**
 * Implementation of the Test skils content page
 */
export class TestSkilsTab extends TeamsBaseComponent<ITestSkilsTabProps, ITestSkilsTabState> {

    public componentWillMount() {
        this.updateTheme(this.getQueryVariable("theme"));
        
        
        if (this.inTeams()) {
            microsoftTeams.initialize();
            microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
            microsoftTeams.getContext((context) => {
                
                this.setState({
                    teamClient: true
                });


                this.setState({
                    userName: context.upn+"<br/>"+window.location.hostname +" "+JSON.stringify(context)
                });
                this.updateTheme(context.theme);
            });
        } else {
            this.setState({
                teamClient: true
            });
            this.setState({
                entityId: "This is not hosted in Microsoft Teams"
            });
        }
    }

    /**
     * The render() method to create the UI of the tab
     */
    public render() {
        return (
            <Provider theme={this.state.theme}>
                <Flex fill={true} column styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Flex.Item>
                        <Header content="This is your tab" />
                    </Flex.Item>
                    <Flex.Item>
                        <div>

                           
                            <MainPage name={this.state.userName}/>
                        </div>
                    </Flex.Item>
                    <Flex.Item styles={{
                        padding: ".8rem 0 .8rem .5rem"
                    }}>
                        <Text size="smaller" content="(C) Copyright brahim" />
                    </Flex.Item>
                </Flex>
            </Provider>
        );
    }
}

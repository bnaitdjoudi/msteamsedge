import * as React from "react";
import { Provider, Flex, Text, Button, Header, AutoControlledComponent } from "@fluentui/react";
import axios from 'axios';
export interface MainPageState  {
  entityId?: string;
}

/**
* Properties for the testSkilsTabTab React component
*/
export interface MainPageProps  {
name?:string;
}


class MainPage extends React.Component<MainPageProps,MainPageState> {
    state:any
    constructor(props:MainPageProps,state:MainPageState){
     super(props,state);
     this.state=state;
    }

    public componentDidMount() {
     this.getDateFrom()
    }
    
    private async getDateFrom(){
      const response =await axios.get("https://"+window.location.hostname+":"+window.location.port+"/restsedge/mainrest/",
      { }
   ) 
    this.setState({entityId:response.data});
    }

    render() {
      return (<div style={{ width: "100%", background: "#ccc" }}>
     
      <div style={{width:"45%",marginLeft:"auto",marginRight:"auto"}} >{this.state.entityId}</div>
      </div>);
    }
  }

  export default MainPage;
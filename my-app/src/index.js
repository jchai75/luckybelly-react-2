import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Container, Image, Grid, List } from 'semantic-ui-react';

class TopMenu extends React.Component {

  render() {
    const itemStyle ={ fontFamily: "monospace", fontSize: "20px", color: "white" };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image src="http://luckybelly.com/img/lucky-logo-light.png"/></Menu.Item>
            <Menu.Item style={itemStyle} position="right">Menus</Menu.Item>
            <Menu.Item style={itemStyle}>Info</Menu.Item>
            <Menu.Item style={itemStyle}>Breaking Bread Hospitality</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class Middle extends React.Component {

  render() {
    return (
        <Image fluid src="http://luckybelly.com/img/bellybowl.jpg"/>
    )
  }
}

class FooterMenu extends React.Component {

  render() {
    return (
        <div className="footer">
          <Grid container columns="3">
            <Grid.Column><Image src="http://luckybelly.com/img/lucky-logo-light.png"/></Grid.Column>

            <Grid.Column>
              Links
              <hr/>
              <List>
                <List.Item>Hours</List.Item>
                <List.Item>Menus</List.Item>
                <List.Item>Reservations</List.Item>
                <List.Item>Corkage</List.Item>
                <List.Item>Contact</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              Contact
              <hr/>
              <List>
                <List.Item>808-531-1888</List.Item>
                <List.Item>eat@luckybelly.com</List.Item>
                <List.Item>50 N. Hotel St. Honolulu, HI 96817</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class LuckyBelly extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<LuckyBelly/>, document.getElementById('root'));

import React from 'react'
import Button from 'react-bootstrap/Button';
class Algorytm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {step:"0",
        question:"Nie reaguje i nie oddycha prawidłowo?",
        elektrody:"primary",
        rytm:"primary",
        defibryla:"primary",
        rko:"primary"};
      }
      tak = () => {
        if(this.state.step=="3"){
            this.setState({step:"4",question:"Reaguj!!!"});
        
      }else{
        this.setState({step:"1",question:"wzywasz zespół i co dalej?"});    
      }}
      nie = () => {
        if(this.state.step=="3"){
            this.setState({step:"5",question:"Nie nadaje sie do defibrylacji co dalej?"});
      }}
      defibrylacja = () => {
        if(this.state.step=="4"){
            this.setState({step: "5",question:"Wznow RKO przez 2 min. Minimalizuj przerwy",defibryla:"success"});
        }
      }
      podlaczElektrody = () => {
        if (this.step="1"){
            this.setState({step: "2",question:"Podłączyłaś elektrody,Co robisz dalej",elektrody:"success"});
        }
      }
      ocenRytm = () => {
        if (this.step="2"){
        this.setState({step: "3",question:"Do defibrylacji?",rytm:"success"});
      }
      }
      wznowRKO = () => {
        if(this.state.step=="5"){
            this.setState({step: "0",question:"Kocham Cię Aniu :* :)",rko:"success"});
        }
      }
      
      step4 = () => {
        this.setState({step: "Oceń rytm"});
      }
      
  render() {
    return (
      <div>
        <div>
        <h1>{this.state.question}</h1>
        <Button variant="primary" onClick={this.tak}>tak</Button>
        <Button variant="primary" onClick={this.nie}>nie</Button>
        </div>
        <div>
        <Button variant={this.state.elektrody} onClick={this.podlaczElektrody}>Podłącz elektrody</Button>
        <Button variant={this.state.rytm} onClick={this.ocenRytm}>Oceń rytm</Button>
        <Button variant={this.state.defibryla} onClick={this.defibrylacja}>1 defibrylacja</Button>
        <Button variant={this.state.rko} onClick={this.wznowRKO}>wznów RKO</Button>
        </div>
        
      </div>
    ) 
  }
}
export default Algorytm

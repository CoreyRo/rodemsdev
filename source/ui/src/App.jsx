import './App.css';
import Header from './Components/Header';
import Grid from './Components/Grid';
import GridItem from './Components/Grid/GridItem';

function App() {
  return (
    <Grid>
      App
      <GridItem>
        <Header>Header</Header>
      </GridItem>
      <GridItem smPhone={{ colSpan: 2 }} tabletHz={{ colSpan: 6 }} subGrid>
        <GridItem smPhone={{ colSpan: 1 }} tabletHz={{ colSpan: 12 }}>
          <div>sub grid 1</div>
        </GridItem>
        <GridItem smPhone={{ colSpan: 1 }} tabletHz={{ colSpan: 12 }}>
          <div>sub grid 2</div>
        </GridItem>
      </GridItem>
      <GridItem smPhone={{ colSpan: 2 }} tabletHz={{ colSpan: 6 }}>
        <div>foo bar</div>
      </GridItem>
      <GridItem>
        <div>fizz buzz</div>
      </GridItem>
      <GridItem>
        <div>buzz word</div>
      </GridItem>
    </Grid>
  );
}

export default App;

import { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Section, Container, Heading } from 'react-bulma-components';

export class App extends Component<{}, { myKey: string; }> {
  state = {
    myKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPress);
  }

  keyPress = (event: KeyboardEvent) => {
    this.setState({ myKey: event.key });
  };

  render() {
    const { myKey } = this.state;

    return (

      <div className="App">
        <Section>
          <Container>
            <Heading>
              Press KEY
            </Heading>
            <Heading subtitle>
              <p className="App__message">
                {myKey
                  ? (
                    <span>
                      {'The last pressed key is '}
                      <strong>
                        [
                        {myKey}
                        ]
                      </strong>
                    </span>
                  )
                  : ('Nothing was pressed yet')}
              </p>
            </Heading>
          </Container>
        </Section>

      </div>
    );
  }
}

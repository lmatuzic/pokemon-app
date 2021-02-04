import Anime from './components/Anime'
import {Container, Row} from 'react-bootstrap'

import './stylesheet/application.scss';

const App = () => {
  return (
    <div className="app">
      <main className="content">
        <Container>
          <Row>
            <Anime/>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default App


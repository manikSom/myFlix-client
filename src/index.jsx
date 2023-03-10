import { createRoot } from 'react-dom/client';

// Importing MainView
import { MainView } from './components/main-view/main-view';

// Import Bootstrap react
import Container from 'react-bootstrap/Container';


// Import statement to indicate scss file
import "./index.scss";

// Main component 
const MyFlixApplication = () => {
    return (
        <Container className='my-4'>
          <MainView />
        </Container>
      );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
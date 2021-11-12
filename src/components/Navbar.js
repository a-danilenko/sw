import { Container, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Tabs centered>
      <Container>
        <Tab label='star wars API'>
          <Link to='/' />
        </Tab>
        <Tab label='people'>
          <Link to='/people' />
        </Tab>
        <Tab label='planets'>
          <Link to='/planets' />
        </Tab>
      </Container>
    </Tabs>
  );
};


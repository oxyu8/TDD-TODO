import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// you need to call Enzyme.configure() to use Enzyme
Enzyme.configure({ adapter: new Adapter() });
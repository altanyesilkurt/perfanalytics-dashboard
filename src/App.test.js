import { shallow } from "enzyme";
import Dashboard from './components/Dashboard';
import App from "./App";

it("renders without crashing App", () => {
  shallow(<App />);
});

describe('App', () => {
  it('should render App', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});

describe('Dashboard', () => {
  it('should render Dashboard', () => {
    const component = shallow(<Dashboard />);

    expect(component).toMatchSnapshot();
  });
});
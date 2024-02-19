import Button from '../components/Button';
import { GoBell, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary outline>
          <GoBell />
          Hi
        </Button>
      </div>
      <div>
        <Button danger rounded ><GoDatabase />Hello</Button>
      </div>
      <div>
        <Button success outline>Yes</Button>
      </div>
      <div>
        <Button>!!!</Button>
      </div>
      <div>
        <Button>???</Button>
      </div>
    </div>
  );
}

export default ButtonPage;

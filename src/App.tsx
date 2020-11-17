import React from 'react';
import Button, { ButtonSize, ButtonType} from './components/Button/button'
const  App: React.FC = () => {
  return (
    <div>
      <header>
       <Button disabled>Hello</Button>
       <Button btnType={ButtonType.Primary} size={ButtonSize.large}>Hello</Button>
       <Button btnType={ButtonType.Primary} size={ButtonSize.small}>Hello</Button>
       <Button btnType={ButtonType.Link} href="www.baidu.com">百度LINK</Button>
       <Button disabled btnType={ButtonType.Link} href="www.baidu.com">百度LINK</Button>
       
      
      </header>
    </div>
  );
}

export default App;

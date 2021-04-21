# Link

https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

https://stackoverflow.com/questions/40731352/extending-html-elements-in-react-and-typescript-while-preserving-props/62568833#62568833

```
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  showIcon: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, showIcon, ...props }) => {
  return (
    <button {...props}>
      {title}
      {showIcon && <Icon/>}
    </button>
  );
};
```


```
<Button
  title="Click me"
  onClick={() => {}} {/* You have access to the <button/> props */}
/>
```

ou por classes
```
class MyButton extends React.Component<MyButtonProps & React.HTMLProps<HTMLButtonElement>, {}> {
    render() {
        return <button {...this.props}/>;
    }
}
```
